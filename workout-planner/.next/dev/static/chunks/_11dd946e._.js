(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/whopWorkoutPlanner/workout-planner/src/components/workouts/queries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignPlanMutation",
    ()=>assignPlanMutation,
    "createDayMutation",
    ()=>createDayMutation,
    "createExerciseMutation",
    ()=>createExerciseMutation,
    "createPlanMutation",
    ()=>createPlanMutation,
    "dashboardStatsQuery",
    ()=>dashboardStatsQuery,
    "dayExercisesQuery",
    ()=>dayExercisesQuery,
    "deleteDayMutation",
    ()=>deleteDayMutation,
    "deleteExerciseMutation",
    ()=>deleteExerciseMutation,
    "deletePlanMutation",
    ()=>deletePlanMutation,
    "inboxQuery",
    ()=>inboxQuery,
    "planDaysQuery",
    ()=>planDaysQuery,
    "planDetailQuery",
    ()=>planDetailQuery,
    "plansQuery",
    ()=>plansQuery,
    "recentActivityQuery",
    ()=>recentActivityQuery,
    "recentAssignmentsQuery",
    ()=>recentAssignmentsQuery,
    "sendMessageMutation",
    ()=>sendMessageMutation,
    "updateDayMutation",
    ()=>updateDayMutation,
    "updateExerciseMutation",
    ()=>updateExerciseMutation,
    "updatePlanMutation",
    ()=>updatePlanMutation,
    "usersQuery",
    ()=>usersQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-queries.ts [app-client] (ecmascript)");
;
const plansQuery = (experienceId)=>({
        queryKey: [
            'workout-plans',
            experienceId
        ],
        queryFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts`));
            if (!res.ok) throw new Error('Failed to fetch plans');
            return res.json();
        }
    });
const planDetailQuery = (experienceId, planId)=>({
        queryKey: [
            'workout-plan',
            experienceId,
            planId
        ],
        queryFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}`));
            if (!res.ok) throw new Error('Failed to fetch plan');
            return res.json();
        }
    });
const createPlanMutation = (experienceId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error('Failed to create plan');
            return res.json();
        }
    });
const assignPlanMutation = (experienceId, planId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/assign`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error('Failed to assign plan');
            return res.json();
        }
    });
const updatePlanMutation = (experienceId, planId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}`), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error('Failed to update plan');
            return res.json();
        }
    });
const deletePlanMutation = (experienceId, planId)=>({
        mutationFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}`), {
                method: 'DELETE'
            });
            if (!res.ok) throw new Error('Failed to delete plan');
            return res.json();
        }
    });
const usersQuery = (experienceId, q)=>({
        queryKey: [
            'users',
            experienceId,
            q ?? ''
        ],
        queryFn: async ()=>{
            const url = new URL((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/users`), 'http://localhost');
            if (q) url.searchParams.set('q', q);
            const path = url.pathname + (url.search ? `?${url.searchParams.toString()}` : '');
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(path));
            if (!res.ok) throw new Error('Failed to fetch users');
            return res.json();
        }
    });
const inboxQuery = (experienceId, conversationUserId)=>({
        queryKey: [
            'inbox',
            experienceId,
            conversationUserId ?? 'me'
        ],
        queryFn: async ()=>{
            const url = new URL((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/inbox`), 'http://localhost');
            if (conversationUserId) url.searchParams.set('userId', conversationUserId);
            const path = url.pathname + (url.search ? `?${url.searchParams.toString()}` : '');
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(path));
            if (!res.ok) throw new Error('Failed to fetch messages');
            return res.json();
        }
    });
const sendMessageMutation = (experienceId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/inbox`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error('Failed to send message');
            return res.json();
        }
    });
const planDaysQuery = (experienceId, planId)=>({
        queryKey: [
            'workout-plan-days',
            experienceId,
            planId
        ],
        queryFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days`));
            if (!res.ok) throw new Error('Failed to fetch plan days');
            return res.json();
        }
    });
const createDayMutation = (experienceId, planId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error('Failed to create day');
            return res.json();
        }
    });
const updateDayMutation = (experienceId, planId, dayId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}`), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error('Failed to update day');
            return res.json();
        }
    });
const deleteDayMutation = (experienceId, planId, dayId)=>({
        mutationFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}`), {
                method: 'DELETE'
            });
            if (!res.ok) throw new Error('Failed to delete day');
            return res.json();
        }
    });
const dayExercisesQuery = (experienceId, planId, dayId)=>({
        queryKey: [
            'workout-exercises',
            experienceId,
            planId,
            dayId
        ],
        queryFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises`));
            if (!res.ok) throw new Error('Failed to fetch exercises');
            return res.json();
        }
    });
const createExerciseMutation = (experienceId, planId, dayId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error('Failed to create exercise');
            return res.json();
        }
    });
const updateExerciseMutation = (experienceId, planId, dayId, exerciseId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises/${exerciseId}`), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error('Failed to update exercise');
            return res.json();
        }
    });
const deleteExerciseMutation = (experienceId, planId, dayId, exerciseId)=>({
        mutationFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises/${exerciseId}`), {
                method: 'DELETE'
            });
            if (!res.ok) throw new Error('Failed to delete exercise');
            return res.json();
        }
    });
const dashboardStatsQuery = (experienceId)=>({
        queryKey: [
            'dashboard-stats',
            experienceId
        ],
        queryFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/dashboard/stats`));
            if (!res.ok) throw new Error('Failed to fetch dashboard stats');
            return res.json();
        }
    });
const recentActivityQuery = (experienceId)=>({
        queryKey: [
            'recent-activity',
            experienceId
        ],
        queryFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/dashboard/activity`));
            if (!res.ok) throw new Error('Failed to fetch recent activity');
            return res.json();
        }
    });
const recentAssignmentsQuery = (experienceId)=>({
        queryKey: [
            'recent-assignments',
            experienceId
        ],
        queryFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/dashboard/recent-assignments`));
            if (!res.ok) throw new Error('Failed to fetch recent assignments');
            return res.json();
        }
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkoutsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/button/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/card/card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TextField$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/text-field/text-field.js [app-client] (ecmascript) <export * as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/dialog/dialog.js [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$workouts$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/components/workouts/queries.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function WorkoutsPage() {
    _s();
    const { experience, user, access } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWhop"])();
    const isAdmin = access.accessLevel === "owner" || access.accessLevel === "admin";
    const [newPlanOpen, setNewPlanOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newPlanTitle, setNewPlanTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editPlanId, setEditPlanId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editPlanTitle, setEditPlanTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [deletePlanId, setDeletePlanId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deletePlanTitle, setDeletePlanTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const qc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: plans, isLoading: isLoadingPlans } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$workouts$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["plansQuery"])(experience.id));
    const createPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$workouts$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPlanMutation"])(experience.id).mutationFn,
        onSuccess: {
            "WorkoutsPage.useMutation[createPlan]": ()=>{
                qc.invalidateQueries({
                    queryKey: [
                        "workout-plans",
                        experience.id
                    ]
                });
                setNewPlanOpen(false);
                setNewPlanTitle("");
            }
        }["WorkoutsPage.useMutation[createPlan]"]
    });
    const updatePlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "WorkoutsPage.useMutation[updatePlan]": async ()=>{
                if (!editPlanId) return;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$workouts$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updatePlanMutation"])(experience.id, editPlanId).mutationFn({
                    title: editPlanTitle
                });
            }
        }["WorkoutsPage.useMutation[updatePlan]"],
        onSuccess: {
            "WorkoutsPage.useMutation[updatePlan]": ()=>{
                qc.invalidateQueries({
                    queryKey: [
                        "workout-plans",
                        experience.id
                    ]
                });
                setEditPlanId(null);
                setEditPlanTitle("");
            }
        }["WorkoutsPage.useMutation[updatePlan]"]
    });
    const deletePlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "WorkoutsPage.useMutation[deletePlan]": async ()=>{
                if (!deletePlanId) return;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$workouts$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deletePlanMutation"])(experience.id, deletePlanId).mutationFn();
            }
        }["WorkoutsPage.useMutation[deletePlan]"],
        onSuccess: {
            "WorkoutsPage.useMutation[deletePlan]": ()=>{
                qc.invalidateQueries({
                    queryKey: [
                        "workout-plans",
                        experience.id
                    ]
                });
                setDeletePlanId(null);
                setDeletePlanTitle("");
            }
        }["WorkoutsPage.useMutation[deletePlan]"]
    });
    const userPlans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkoutsPage.useMemo[userPlans]": ()=>plans ?? []
    }["WorkoutsPage.useMemo[userPlans]"], [
        plans
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full p-4 md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 md:mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm opacity-70",
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg md:text-xl font-semibold",
                                children: experience.name
                            }, void 0, false, {
                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
                        open: newPlanOpen,
                        onOpenChange: setNewPlanOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "solid",
                                    className: "!bg-accent hover:!bg-accent/90 !text-white",
                                    children: "New Plan"
                                }, void 0, false, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
                                        children: "Create plan"
                                    }, void 0, false, {
                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TextField$3e$__["TextField"].Input, {
                                            placeholder: "Plan title",
                                            value: newPlanTitle,
                                            onChange: (e)=>setNewPlanTitle(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            disabled: !newPlanTitle || createPlan.isPending,
                                            onClick: ()=>createPlan.mutate({
                                                    title: newPlanTitle
                                                }),
                                            className: "!bg-accent hover:!bg-accent/90 !text-white",
                                            children: createPlan.isPending ? "Creating..." : "Create"
                                        }, void 0, false, {
                                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm opacity-70 mb-1",
                                children: "My Workouts"
                            }, void 0, false, {
                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            isLoadingPlans ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm opacity-70",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this) : userPlans.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm opacity-70",
                                children: "No workouts assigned yet."
                            }, void 0, false, {
                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: userPlans.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/experiences/${experience.id}/workouts/${p.id}`,
                                                        className: "font-medium hover:underline",
                                                        children: p.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs opacity-70",
                                                        children: [
                                                            p.daysCount,
                                                            " days • ",
                                                            p.assignedCount,
                                                            " assigned"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this),
                                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "solid",
                                                        asChild: true,
                                                        className: "!bg-accent hover:!bg-accent/90 !text-white",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/experiences/${experience.id}/workouts/${p.id}/builder`,
                                                            children: "Build"
                                                        }, void 0, false, {
                                                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "solid",
                                                        onClick: ()=>{
                                                            setEditPlanId(p.id);
                                                            setEditPlanTitle(p.title);
                                                        },
                                                        className: "!bg-accent hover:!bg-accent/90 !text-white",
                                                        children: "Rename"
                                                    }, void 0, false, {
                                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        onClick: ()=>{
                                                            setDeletePlanId(p.id);
                                                            setDeletePlanTitle(p.title);
                                                        },
                                                        className: "text-red-600 border-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-400 dark:hover:bg-red-950",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-4 h-4 text-accent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
                        open: !!editPlanId,
                        onOpenChange: (open)=>{
                            if (!open) {
                                setEditPlanId(null);
                                setEditPlanTitle("");
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
                                    children: "Edit plan"
                                }, void 0, false, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TextField$3e$__["TextField"].Input, {
                                        value: editPlanTitle,
                                        onChange: (e)=>setEditPlanTitle(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "soft",
                                            onClick: ()=>{
                                                setEditPlanId(null);
                                                setEditPlanTitle("");
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            disabled: !editPlanTitle || updatePlan.isPending,
                                            onClick: ()=>updatePlan.mutate(),
                                            className: "!bg-accent hover:!bg-accent/90 !text-white",
                                            children: updatePlan.isPending ? "Saving..." : "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
                        open: !!deletePlanId,
                        onOpenChange: (open)=>{
                            if (!open) {
                                setDeletePlanId(null);
                                setDeletePlanTitle("");
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
                                    children: "Delete workout plan"
                                }, void 0, false, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                        children: [
                                            "Are you sure you want to delete ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    '"',
                                                    deletePlanTitle,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 51
                                            }, this),
                                            "? This action cannot be undone and will remove all associated days and exercises."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "soft",
                                            onClick: ()=>{
                                                setDeletePlanId(null);
                                                setDeletePlanTitle("");
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$button$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "solid",
                                            disabled: deletePlan.isPending,
                                            onClick: ()=>deletePlan.mutate(),
                                            className: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700",
                                            children: deletePlan.isPending ? "Deleting..." : "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/workouts/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(WorkoutsPage, "MCaKAjbD6ODaKG4UhvdNQW3i8ps=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWhop"],
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = WorkoutsPage;
var _c;
__turbopack_context__.k.register(_c, "WorkoutsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutationObserver.ts
__turbopack_context__.s([
    "MutationObserver",
    ()=>MutationObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
;
var MutationObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options){
        super();
        this.#client = client;
        this.setOptions(options);
        this.bindMethods();
        this.#updateResult();
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        this.options = this.#client.defaultMutationOptions(options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: this.#currentMutation,
                observer: this
            });
        }
        if (prevOptions?.mutationKey && this.options.mutationKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(prevOptions.mutationKey) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(this.options.mutationKey)) {
            this.reset();
        } else if (this.#currentMutation?.state.status === "pending") {
            this.#currentMutation.setOptions(this.options);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#currentMutation?.removeObserver(this);
        }
    }
    onMutationUpdate(action) {
        this.#updateResult();
        this.#notify(action);
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    reset() {
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = void 0;
        this.#updateResult();
        this.#notify();
    }
    mutate(variables, options) {
        this.#mutateOptions = options;
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
        this.#currentMutation.addObserver(this);
        return this.#currentMutation.execute(variables);
    }
    #updateResult() {
        const state = this.#currentMutation?.state ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultState"])();
        this.#currentResult = {
            ...state,
            isPending: state.status === "pending",
            isSuccess: state.status === "success",
            isError: state.status === "error",
            isIdle: state.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
    }
    #notify(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (this.#mutateOptions && this.hasListeners()) {
                const variables = this.#currentResult.variables;
                const onMutateResult = this.#currentResult.context;
                const context = {
                    client: this.#client,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
                if (action?.type === "success") {
                    this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
                    this.#mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
                } else if (action?.type === "error") {
                    this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
                    this.#mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
                }
            }
            this.listeners.forEach((listener)=>{
                listener(this.#currentResult);
            });
        });
    }
};
;
 //# sourceMappingURL=mutationObserver.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
// src/useMutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
"use client";
;
;
;
function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMutation.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationObserver"](client, options)
    }["useMutation.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMutation.useEffect": ()=>{
            observer.setOptions(options);
        }
    }["useMutation.useEffect"], [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useSyncExternalStore[result]": (onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange))
    }["useMutation.useSyncExternalStore[result]"], [
        observer
    ]), {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"], {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"]);
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useCallback[mutate]": (variables, mutateOptions)=>{
            observer.mutate(variables, mutateOptions).catch(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
    }["useMutation.useCallback[mutate]"], [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) {
        throw result.error;
    }
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
 //# sourceMappingURL=useMutation.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/card/card.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cardPropDefs",
    ()=>cardPropDefs
]);
const sizes = [
    '1',
    '2',
    '3',
    '4',
    '5'
];
const variants = [
    'surface',
    'classic',
    'ghost'
];
const cardPropDefs = {
    size: {
        type: 'enum',
        values: sizes,
        default: '1'
    },
    variant: {
        type: 'enum',
        values: variants,
        default: 'surface'
    }
};
;
 //# sourceMappingURL=card.props.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/card/card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/card/card.props.js [app-client] (ecmascript)");
;
;
;
;
const Card = (props)=>{
    const { asChild, children, className, size = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardPropDefs"].size.default, variant = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardPropDefs"].variant.default, ...cardProps } = props;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : 'div';
    function getChild() {
        const firstChild = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](firstChild, {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
                className: "fui-CardInner"
            }, firstChild.props.children)
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Comp, {
        ...cardProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fui-reset', 'fui-Card', className, `fui-r-size-${size}`, `fui-variant-${variant}`)
    }, asChild ? getChild() : __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "fui-CardInner"
    }, children));
};
Card.displayName = 'Card';
;
 //# sourceMappingURL=card.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/text-field/text-field.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "textFieldPropDefs",
    ()=>textFieldPropDefs,
    "textFieldSlotPropDefs",
    ()=>textFieldSlotPropDefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$helpers$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/helpers/props/color.prop.js [app-client] (ecmascript)");
;
const sizes = [
    '1',
    '2',
    '3',
    '4'
];
const variants = [
    'surface',
    'soft'
];
const textFieldPropDefs = {
    size: {
        type: 'enum',
        values: sizes,
        default: '2'
    },
    variant: {
        type: 'enum',
        values: variants,
        default: 'surface'
    },
    color: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$helpers$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorProp"],
        default: 'gray'
    }
};
const textFieldSlotPropDefs = {
    color: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$helpers$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorProp"]
};
;
 //# sourceMappingURL=text-field.props.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/text-field/text-field.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>TextFieldInput,
    "Root",
    ()=>TextFieldRoot,
    "Slot",
    ()=>TextFieldSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/text-field/text-field.props.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const TextFieldContext = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
const TextFieldRoot = (props)=>{
    const { children, className, size = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textFieldPropDefs"].size.default, variant = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textFieldPropDefs"].variant.default, color = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textFieldPropDefs"].color.default, ...rootProps } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        ...rootProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fui-TextFieldRoot', className),
        onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(rootProps.onPointerDown, (event)=>{
            const target = event.target;
            if (target.closest('input, button, a')) return;
            const input = event.currentTarget.querySelector('.fui-TextFieldInput');
            if (!input) return;
            const position = input.compareDocumentPosition(target);
            const targetIsBeforeInput = (position & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
            const cursorPosition = targetIsBeforeInput ? 0 : input.value.length;
            requestAnimationFrame(()=>{
                input.setSelectionRange(cursorPosition, cursorPosition);
                input.focus();
            });
        })
    }, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](TextFieldContext.Provider, {
        value: {
            size,
            variant,
            color
        }
    }, children));
};
TextFieldRoot.displayName = 'TextFieldRoot';
const TextFieldSlot = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { className, color = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textFieldSlotPropDefs"].color.default, ...slotProps } = props;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](TextFieldContext);
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        "data-accent-color": color,
        ...slotProps,
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fui-TextFieldSlot', className, `fui-r-size-${context === null || context === void 0 ? void 0 : context.size}`)
    });
});
TextFieldSlot.displayName = 'TextFieldSlot';
const TextFieldInput = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    var _a, _b, _c;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](TextFieldContext);
    const hasRoot = context !== undefined;
    const { className, size = (_a = context === null || context === void 0 ? void 0 : context.size) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textFieldPropDefs"].size.default, variant = (_b = context === null || context === void 0 ? void 0 : context.variant) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textFieldPropDefs"].variant.default, color = (_c = context === null || context === void 0 ? void 0 : context.color) !== null && _c !== void 0 ? _c : __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textFieldPropDefs"].color.default, ...inputProps } = props;
    const input = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("input", {
        "data-accent-color": color,
        spellCheck: "false",
        ...inputProps,
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fui-TextFieldInput', className, `fui-r-size-${size}`, `fui-variant-${variant}`)
    }), __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        "data-accent-color": color,
        className: "fui-TextFieldChrome"
    }));
    return hasRoot ? input : __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](TextFieldRoot, {
        size: size,
        variant: variant,
        color: color
    }, input);
});
TextFieldInput.displayName = 'TextFieldInput';
;
 //# sourceMappingURL=text-field.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/text-field/text-field.js [app-client] (ecmascript) <export * as TextField>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2d$field$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/text-field/text-field.js [app-client] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript) <export * as Dialog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/dialog/dialog.props.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dialogContentPropDefs",
    ()=>dialogContentPropDefs
]);
const contentSizes = [
    '1',
    '2',
    '3',
    '4'
];
const dialogContentPropDefs = {
    size: {
        type: 'enum',
        values: contentSizes,
        default: '3'
    }
};
;
 //# sourceMappingURL=dialog.props.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/dialog/dialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Close",
    ()=>DialogClose,
    "Content",
    ()=>DialogContent,
    "Description",
    ()=>DialogDescription,
    "Root",
    ()=>DialogRoot,
    "Title",
    ()=>DialogTitle,
    "Trigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/theme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$heading$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/heading/heading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/text/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/dialog/dialog.props.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const DialogRoot = (props)=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        ...props,
        modal: true
    });
DialogRoot.displayName = 'DialogRoot';
const DialogTrigger = (props)=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        ...props,
        asChild: true
    });
DialogTrigger.displayName = 'DialogTrigger';
const DialogContentContext = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    size: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dialogContentPropDefs"].size.default
});
const DialogContent = (props)=>{
    const { className, children, forceMount, container, size = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dialogContentPropDefs"].size.default, ...contentProps } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        container: container,
        forceMount: forceMount
    }, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"], {
        asChild: true
    }, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Overlay, {
        className: "fui-DialogOverlay"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
        ...contentProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fui-DialogContent', className, `fui-r-size-${size}`)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DialogContentContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "DialogContent.useMemo": ()=>({
                    size
                })
        }["DialogContent.useMemo"], [
            size
        ])
    }, children)))));
};
DialogContent.displayName = 'DialogContent';
const DialogTitle = ({ size: sizeProp, className, ...props })=>{
    const { size: contextSize } = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DialogContentContext);
    let size;
    if (contextSize) {
        size = ({
            '1': '3',
            '2': '5',
            '3': '5',
            '4': '6'
        })[contextSize];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        asChild: true
    }, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$heading$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
        size: sizeProp || size,
        trim: "start",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fui-DialogTitle', className),
        ...props
    }));
};
DialogTitle.displayName = 'DialogTitle';
const DialogDescription = ({ size: sizeProp, className, ...props })=>{
    const { size: contextSize } = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DialogContentContext);
    let size;
    if (contextSize) {
        size = ({
            '1': '1',
            '2': '2',
            '3': '2',
            '4': '3'
        })[contextSize];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        asChild: true
    }, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$text$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        as: "p",
        size: sizeProp || size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('fui-DialogDescription', className),
        ...props
    }));
};
DialogDescription.displayName = 'DialogDescription';
const DialogClose = (props)=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        ...props,
        asChild: true
    });
DialogClose.displayName = 'DialogClose';
;
 //# sourceMappingURL=dialog.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/dialog/dialog.js [app-client] (ecmascript) <export * as Dialog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/dialog/dialog.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_11dd946e._.js.map