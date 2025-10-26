"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Button, Card, TextField, Dialog } from "frosted-ui";
import { Trash2, File, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useWhop } from "~/components/whop-context";
import { createNutritionPlanMutation, nutritionPlansQuery, updateNutritionPlanMutation, deleteNutritionPlanMutation } from "~/components/nutrition/queries";

export default function NutritionPlansPage() {
  const { experience, user, access } = useWhop();
  const isAdmin = (access as any).accessLevel === "admin";
  const [newPlanOpen, setNewPlanOpen] = useState(false);
  const [newPlanTitle, setNewPlanTitle] = useState("");
  const [editPlanId, setEditPlanId] = useState<string | null>(null);
  const [editPlanTitle, setEditPlanTitle] = useState("");
  const [deletePlanId, setDeletePlanId] = useState<string | null>(null);
  const [deletePlanTitle, setDeletePlanTitle] = useState("");
  const qc = useQueryClient();

  if (!isAdmin) {
    return (
      <div className="p-6">
        <div className="text-sm opacity-70">You don't have access to this page.</div>
      </div>
    )
  }

  const { data: plans, isLoading: isLoadingPlans } = useQuery(nutritionPlansQuery(experience.id));

  const createPlan = useMutation({
    mutationFn: createNutritionPlanMutation(experience.id).mutationFn,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["nutrition-plans", experience.id] });
      setNewPlanOpen(false);
      setNewPlanTitle("");
    },
  });

  const updatePlan = useMutation({
    mutationFn: async () => {
      if (!editPlanId) return
      return updateNutritionPlanMutation(experience.id, editPlanId).mutationFn({ title: editPlanTitle })
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["nutrition-plans", experience.id] });
      setEditPlanId(null);
      setEditPlanTitle("");
    },
  });

  const deletePlan = useMutation({
    mutationFn: async () => {
      if (!deletePlanId) return
      return deleteNutritionPlanMutation(experience.id, deletePlanId).mutationFn()
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["nutrition-plans", experience.id] });
      setDeletePlanId(null);
      setDeletePlanTitle("");
    },
  });

  const userPlans = useMemo(() => plans ?? [], [plans]);

  return (
    <div className="min-h-screen w-full p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 md:mb-6">
        <div>
          <div className="text-lg md:text-xl font-semibold">{experience.name}</div>
        </div>
        <Dialog.Root open={newPlanOpen} onOpenChange={setNewPlanOpen}>
          <Dialog.Trigger>
            <Button variant="solid" className="!bg-accent hover:!bg-accent/90 !text-white">New Nutrition Plan</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Create nutrition plan</Dialog.Title>
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
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Card>
          <div className="p-4">
            <div className="text-sm opacity-70 mb-1">My Nutrition Plans</div>
            {isLoadingPlans ? (
              <div className="text-sm opacity-70">Loading...</div>
            ) : userPlans.length === 0 ? (
              <div className="text-sm opacity-70">No nutrition plans created yet.</div>
            ) : (
              <div className="space-y-2">
                {userPlans.map((p: any) => {
                  const href = `/experiences/${experience.id}/nutrition-plans/${String(p.id)}/builder` as any
                  return (
                    <div key={p.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Link href={href} className="font-medium hover:underline">
                            {p.title}
                          </Link>
                          {p.hasPDF && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs">
                              <CheckCircle className="w-3 h-3" />
                              <File className="w-3 h-3" />
                              PDF Ready
                            </div>
                          )}
                        </div>
                        <div className="text-xs opacity-70">
                          {p.assignedCount} assigned
                          {p.hasPDF && p.pdfFilename && (
                            <span className="ml-2 text-green-600 dark:text-green-400">
                              • {p.pdfFilename}
                            </span>
                          )}
                        </div>
                      </div>
                    <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                      <Button variant="solid" asChild className="!bg-accent hover:!bg-accent/90 !text-white text-sm">
                        <Link href={`/experiences/${experience.id}/nutrition-plans/${p.id}/builder` as any}>
                          Manage
                        </Link>
                      </Button>
                      <Button variant="solid" onClick={() => { setEditPlanId(p.id); setEditPlanTitle(p.title); }} className="!bg-accent hover:!bg-accent/90 !text-white text-sm">
                        Rename
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
                  </div>
                  )
                })}
              </div>
            )}
          </div>
        </Card>
      </div>

      <Dialog.Root open={!!editPlanId} onOpenChange={(open) => { if (!open) { setEditPlanId(null); setEditPlanTitle(""); } }}>
        <Dialog.Content>
          <Dialog.Title>Edit nutrition plan</Dialog.Title>
          <div className="mt-4">
            <TextField.Input value={editPlanTitle} onChange={(e: any) => setEditPlanTitle(e.target.value)} />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="soft" onClick={() => { setEditPlanId(null); setEditPlanTitle(""); }} className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950">Cancel</Button>
            <Button disabled={!editPlanTitle || updatePlan.isPending} onClick={() => updatePlan.mutate()} className="!bg-accent hover:!bg-accent/90 !text-white">
              {updatePlan.isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root open={!!deletePlanId} onOpenChange={(open) => { if (!open) { setDeletePlanId(null); setDeletePlanTitle(""); } }}>
        <Dialog.Content>
          <Dialog.Title>Delete nutrition plan</Dialog.Title>
          <div className="mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Are you sure you want to delete <strong>"{deletePlanTitle}"</strong>? This action cannot be undone and will remove all associated days and meals.
            </p>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="soft" onClick={() => { setDeletePlanId(null); setDeletePlanTitle(""); }} className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-950">Cancel</Button>
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
    </div>
  );
}
