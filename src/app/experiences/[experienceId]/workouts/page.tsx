"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Button, Card, TextField, Dialog } from "frosted-ui";
import { Trash2, Download, Users, Edit3, BookOpen } from "lucide-react";
import Link from "next/link";
import { useWhop } from "~/components/whop-context";
import { createPlanMutation, plansQuery, updatePlanMutation, deletePlanMutation, clientsQuery, bulkAssignWorkoutMutation, type Client } from "~/components/workouts/queries";
import { generateWorkoutPlanPDF } from "~/lib/pdf-generator";
import toast from 'react-hot-toast';
import { CardSkeleton, StatsSkeleton, Skeleton } from '~/components/ui/Skeleton';
import { EmptyState } from '~/components/ui/EmptyState';
import { WhopAccess } from '~/types/whop';

export default function WorkoutsPage() {
  const { experience, user, access } = useWhop();
  const isAdmin = (access as WhopAccess)?.accessLevel === "admin";
  const [newPlanOpen, setNewPlanOpen] = useState(false);
  const [newPlanTitle, setNewPlanTitle] = useState("");
  const [editPlanId, setEditPlanId] = useState<string | null>(null);
  const [editPlanTitle, setEditPlanTitle] = useState("");
  const [deletePlanId, setDeletePlanId] = useState<string | null>(null);
  const [deletePlanTitle, setDeletePlanTitle] = useState("");
  const [assignPlanId, setAssignPlanId] = useState<string | null>(null);
  const [assignPlanTitle, setAssignPlanTitle] = useState("");
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const qc = useQueryClient();

  const handleDownloadPDF = async (planId: string, planTitle: string) => {
    try {
      // Fetch the full plan details including all days and exercises
      const response = await fetch(`/api/experience/${experience.id}/workouts/${planId}`)
      if (!response.ok) throw new Error('Failed to fetch plan details')
      const planDetails = await response.json()
      
      // Generate and download the PDF
      generateWorkoutPlanPDF(planDetails)
    } catch (error) {
      console.error('Error downloading PDF:', error)
      // You could add a toast notification here
    }
  }

  const { data: plans, isLoading: isLoadingPlans } = useQuery(plansQuery(experience.id));
  const { data: clients, isLoading: isLoadingClients } = useQuery(clientsQuery(experience.id));

  const createPlan = useMutation({
    mutationFn: createPlanMutation(experience.id).mutationFn,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["workout-plans", experience.id] });
      setNewPlanOpen(false);
      setNewPlanTitle("");
      toast.success('Workout plan created successfully!');
    },
    onError: () => {
      toast.error('Failed to create workout plan. Please try again.');
    },
  });


  const updatePlan = useMutation({
    mutationFn: async () => {
      if (!editPlanId) return
      return updatePlanMutation(experience.id, editPlanId).mutationFn({ title: editPlanTitle })
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["workout-plans", experience.id] });
      setEditPlanId(null);
      setEditPlanTitle("");
      toast.success('Workout plan updated successfully!');
    },
    onError: () => {
      toast.error('Failed to update workout plan. Please try again.');
    },
  });

  const deletePlan = useMutation({
    mutationFn: async () => {
      if (!deletePlanId) return
      return deletePlanMutation(experience.id, deletePlanId).mutationFn()
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["workout-plans", experience.id] });
      setDeletePlanId(null);
      setDeletePlanTitle("");
      toast.success('Workout plan deleted successfully!');
    },
    onError: () => {
      toast.error('Failed to delete workout plan. Please try again.');
    },
  });

  const bulkAssignPlan = useMutation({
    mutationFn: async () => {
      if (!assignPlanId) return
      if (!selectedClients || selectedClients.length === 0) return
      return bulkAssignWorkoutMutation(experience.id, assignPlanId).mutationFn(selectedClients)
    },
    onSuccess: (data) => {
      qc.invalidateQueries({ queryKey: ["workout-plans", experience.id] });
      setAssignPlanId(null);
      setAssignPlanTitle("");
      setSelectedClients([]);
      
      // Show success message
      if (data?.message) {
        toast.success(data.message)
      }
    },
    onError: (error) => {
      console.error('Bulk assignment failed:', error)
      toast.error('Failed to assign workout plan. Please try again.')
    },
  });

  const userPlans = useMemo(() => plans ?? [], [plans]);

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">{experience.name}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">
              Manage your workout plans and assignments
            </p>
          </div>
          {isAdmin && (
            <Dialog.Root open={newPlanOpen} onOpenChange={setNewPlanOpen}>
              <Dialog.Trigger>
                <Button variant="solid" className="!bg-accent hover:!bg-accent/90 !text-white transition-colors duration-200">
                  New Plan
                </Button>
              </Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Title>Create plan</Dialog.Title>
                <div className="mt-4">
                  <TextField.Input
                    placeholder="Plan title"
                    value={newPlanTitle}
                    onChange={(e: any) => setNewPlanTitle(e.target.value)}
                    className="focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="mt-4 flex justify-end gap-2">
                  <Button
                    variant="soft"
                    onClick={() => setNewPlanOpen(false)}
                    className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950"
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={!newPlanTitle || createPlan.isPending}
                    onClick={() => createPlan.mutate({ title: newPlanTitle })}
                    className="!bg-accent hover:!bg-accent/90 !text-white transition-colors duration-200"
                  >
                    {createPlan.isPending ? "Creating..." : "Create"}
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Root>
          )}
        </div>
      </div>

      <Card className="border border-gray-100 dark:border-gray-800">
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Workout Plans</h2>
            <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          {isLoadingPlans ? (
            <div className="space-y-3">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          ) : userPlans.length === 0 ? (
            <EmptyState
              icon={BookOpen}
              title="No Workout Plans Yet"
              description="Create your first workout plan to get started with your fitness coaching business."
              action={isAdmin ? {
                label: "Create Plan",
                onClick: () => setNewPlanOpen(true)
              } : undefined}
            />
          ) : (
            <div className="space-y-3">
              {userPlans.map((p) => (
                <div key={p.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <div className="flex-1 min-w-0">
                    <Link href={`/experiences/${experience.id}/workouts/${p.id}` as any} className="text-sm font-medium hover:underline transition-colors duration-200">
                      {p.title}
                    </Link>
                    <div className="text-xs opacity-70 mt-1">
                      {p.daysCount} days • {p.assignedCount} assigned
                    </div>
                  </div>
                  {isAdmin && (
                    <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                      <Button variant="solid" asChild className="!bg-accent hover:!bg-accent/90 !text-white text-sm transition-colors duration-200">
                        <Link href={`/experiences/${experience.id}/workouts/${p.id}/builder` as any}>
                          Build
                        </Link>
                      </Button>
                      <Button variant="solid" onClick={() => { setAssignPlanId(p.id); setAssignPlanTitle(p.title); }} className="!bg-accent hover:!bg-accent/90 !text-white text-sm transition-colors duration-200">
                        <Users className="w-4 h-4 mr-1" />
                        Assign
                      </Button>
                      <Button 
                        variant="soft" 
                        onClick={() => handleDownloadPDF(p.id, p.title)}
                        className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950 transition-colors duration-200"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                      <Button 
                        variant="soft" 
                        onClick={() => { setEditPlanId(p.id); setEditPlanTitle(p.title); }}
                        className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950 transition-colors duration-200"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="soft" 
                        onClick={() => { 
                          setDeletePlanId(p.id); 
                          setDeletePlanTitle(p.title); 
                        }}
                        className="text-red-600 border-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-950 transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      {isAdmin && (
        <>
          <Dialog.Root open={!!editPlanId} onOpenChange={(open) => { if (!open) { setEditPlanId(null); setEditPlanTitle(""); } }}>
            <Dialog.Content>
              <Dialog.Title>Edit plan</Dialog.Title>
              <div className="mt-4">
                <TextField.Input 
                  value={editPlanTitle} 
                  onChange={(e: any) => setEditPlanTitle(e.target.value)}
                  className="focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="soft" onClick={() => { setEditPlanId(null); setEditPlanTitle(""); }} className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950 transition-colors duration-200">Cancel</Button>
                <Button disabled={!editPlanTitle || updatePlan.isPending} onClick={() => updatePlan.mutate()} className="!bg-accent hover:!bg-accent/90 !text-white transition-colors duration-200">
                  {updatePlan.isPending ? "Saving..." : "Save"}
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Root>

          <Dialog.Root open={!!deletePlanId} onOpenChange={(open) => { if (!open) { setDeletePlanId(null); setDeletePlanTitle(""); } }}>
            <Dialog.Content>
              <Dialog.Title>Delete workout plan</Dialog.Title>
              <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Are you sure you want to delete <strong>"{deletePlanTitle}"</strong>? This action cannot be undone and will remove all associated days and exercises.
                </p>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="soft" onClick={() => { setDeletePlanId(null); setDeletePlanTitle(""); }} className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950 transition-colors duration-200">Cancel</Button>
                <Button 
                  variant="solid" 
                  disabled={deletePlan.isPending} 
                  onClick={() => deletePlan.mutate()}
                  className="bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 transition-colors duration-200"
                >
                  {deletePlan.isPending ? "Deleting..." : "Delete"}
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Root>

          <Dialog.Root open={!!assignPlanId} onOpenChange={(open) => { 
            if (!open) { 
              setAssignPlanId(null); 
              setAssignPlanTitle(""); 
              setSelectedClients([]); 
            } 
          }}>
            <Dialog.Content className="max-w-md">
              <Dialog.Title>Assign Workout Plan: "{assignPlanTitle}"</Dialog.Title>
              <div className="mt-4">
                {isLoadingClients ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-4 w-24" />
                      <div className="flex gap-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-20" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-12 w-full" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Select Clients</span>
                      <div className="flex gap-2">
                        <Button 
                          variant="soft" 
                          size="1"
                          onClick={() => setSelectedClients(clients?.map(c => c.id) || [])}
                        >
                          Select All
                        </Button>
                        <Button 
                          variant="soft" 
                          size="1"
                          onClick={() => setSelectedClients([])}
                        >
                          Deselect All
                        </Button>
                      </div>
                    </div>
                    
                    <div className="max-h-60 overflow-y-auto space-y-2">
                      {clients?.map((client) => (
                        <label key={client.id} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedClients.includes(client.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedClients([...selectedClients, client.id]);
                              } else {
                                setSelectedClients(selectedClients.filter(id => id !== client.id));
                              }
                            }}
                            className="rounded border-gray-300 text-accent focus:ring-accent"
                          />
                          <div className="flex-1">
                            <div className="text-sm font-medium">{client.name}</div>
                            <div className="text-xs opacity-70">@{client.username}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                    
                    <div className="text-sm opacity-70">
                      Selected: {selectedClients.length} client{selectedClients.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <Button 
                  variant="soft" 
                  onClick={() => { 
                    setAssignPlanId(null); 
                    setAssignPlanTitle(""); 
                    setSelectedClients([]); 
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  variant="solid" 
                  disabled={selectedClients.length === 0 || bulkAssignPlan.isPending}
                  onClick={() => bulkAssignPlan.mutate()}
                  className="!bg-accent hover:!bg-accent/90 !text-white"
                >
                  {bulkAssignPlan.isPending ? "Assigning..." : `Assign Plan (${selectedClients.length})`}
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Root>
        </>
      )}

    </div>
  );
}

