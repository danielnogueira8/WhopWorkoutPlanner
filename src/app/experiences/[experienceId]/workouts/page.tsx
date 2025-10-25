"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Button, Card, TextField, Dialog } from "frosted-ui";
import { Trash2, Download, Users, Edit3 } from "lucide-react";
import Link from "next/link";
import { useWhop } from "~/components/whop-context";
import { createPlanMutation, plansQuery, updatePlanMutation, deletePlanMutation, clientsQuery, bulkAssignWorkoutMutation, type Client } from "~/components/workouts/queries";
import { generateWorkoutPlanPDF } from "~/lib/pdf-generator";

export default function WorkoutsPage() {
  const { experience, user, access } = useWhop();
  const isAdmin = (access as any).accessLevel === "admin";
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
    },
  });

  const bulkAssignPlan = useMutation({
    mutationFn: async () => {
      if (!assignPlanId) return
      return bulkAssignWorkoutMutation(experience.id, assignPlanId).mutationFn(selectedClients)
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["workout-plans", experience.id] });
      setAssignPlanId(null);
      setAssignPlanTitle("");
      setSelectedClients([]);
    },
  });

  const userPlans = useMemo(() => plans ?? [], [plans]);

  return (
    <div className="min-h-screen w-full p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 md:mb-6">
        <div>
          <div className="text-lg md:text-xl font-semibold">{experience.name}</div>
        </div>
        {isAdmin && (
          <Dialog.Root open={newPlanOpen} onOpenChange={setNewPlanOpen}>
            <Dialog.Trigger>
              <Button variant="solid" className="!bg-accent hover:!bg-accent/90 !text-white">New Plan</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Title>Create plan</Dialog.Title>
              <div className="mt-4">
                <TextField.Input
                  placeholder="Plan title"
                  value={newPlanTitle}
                  onChange={(e: any) => setNewPlanTitle(e.target.value)}
                />
              </div>
              <div className="mt-4 flex justify-end">
                <Button
                  disabled={!newPlanTitle || createPlan.isPending}
                  onClick={() => createPlan.mutate({ title: newPlanTitle })}
                  className="!bg-accent hover:!bg-accent/90 !text-white"
                >
                  {createPlan.isPending ? "Creating..." : "Create"}
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Root>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Card>
          <div className="p-4">
            <div className="text-sm opacity-70 mb-1">My Workouts</div>
            {isLoadingPlans ? (
              <div className="text-sm opacity-70">Loading...</div>
            ) : userPlans.length === 0 ? (
              <div className="text-sm opacity-70">No workouts assigned yet.</div>
            ) : (
              <div className="space-y-2">
                {userPlans.map((p) => (
                  <div key={p.id} className="flex items-center justify-between">
                    <div>
                      <Link href={`/experiences/${experience.id}/workouts/${p.id}` as any} className="font-medium hover:underline">
                        {p.title}
                      </Link>
                      <div className="text-xs opacity-70">
                        {p.daysCount} days • {p.assignedCount} assigned
                      </div>
                    </div>
                    {isAdmin && (
                      <div className="flex gap-2">
                        <Button variant="solid" asChild className="!bg-accent hover:!bg-accent/90 !text-white">
                          <Link href={`/experiences/${experience.id}/workouts/${p.id}/builder` as any}>
                            Build
                          </Link>
                        </Button>
                        <Button variant="solid" onClick={() => { setAssignPlanId(p.id); setAssignPlanTitle(p.title); }} className="!bg-accent hover:!bg-accent/90 !text-white">
                          <Users className="w-4 h-4 mr-1" />
                          Assign
                        </Button>
                        <Button 
                          variant="soft" 
                          onClick={() => handleDownloadPDF(p.id, p.title)}
                          className="!bg-accent hover:!bg-accent/90 !text-white"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </Button>
                        <Button 
                          variant="soft" 
                          onClick={() => { setEditPlanId(p.id); setEditPlanTitle(p.title); }}
                          className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-950"
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="soft" 
                          onClick={() => { 
                            setDeletePlanId(p.id); 
                            setDeletePlanTitle(p.title); 
                          }}
                          className="text-red-600 border-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-950"
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

      </div>

      {isAdmin && (
        <>
          <Dialog.Root open={!!editPlanId} onOpenChange={(open) => { if (!open) { setEditPlanId(null); setEditPlanTitle(""); } }}>
            <Dialog.Content>
              <Dialog.Title>Edit plan</Dialog.Title>
              <div className="mt-4">
                <TextField.Input value={editPlanTitle} onChange={(e: any) => setEditPlanTitle(e.target.value)} />
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="soft" onClick={() => { setEditPlanId(null); setEditPlanTitle(""); }}>Cancel</Button>
                <Button disabled={!editPlanTitle || updatePlan.isPending} onClick={() => updatePlan.mutate()} className="!bg-accent hover:!bg-accent/90 !text-white">
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
                <Button variant="soft" onClick={() => { setDeletePlanId(null); setDeletePlanTitle(""); }}>Cancel</Button>
                <Button 
                  variant="solid" 
                  disabled={deletePlan.isPending} 
                  onClick={() => deletePlan.mutate()}
                  className="bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
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
                  <div className="text-sm opacity-70">Loading clients...</div>
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

