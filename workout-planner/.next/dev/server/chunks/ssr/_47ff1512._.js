module.exports = [
"[project]/whopWorkoutPlanner/workout-planner/src/components/workouts/queries.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    "inboxQuery",
    ()=>inboxQuery,
    "planDaysQuery",
    ()=>planDaysQuery,
    "planDetailQuery",
    ()=>planDetailQuery,
    "plansQuery",
    ()=>plansQuery,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-queries.ts [app-ssr] (ecmascript)");
;
const plansQuery = (experienceId)=>({
        queryKey: [
            'workout-plans',
            experienceId
        ],
        queryFn: async ()=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts`));
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}`));
            if (!res.ok) throw new Error('Failed to fetch plan');
            return res.json();
        }
    });
const createPlanMutation = (experienceId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts`), {
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/assign`), {
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}`), {
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
const usersQuery = (experienceId, q)=>({
        queryKey: [
            'users',
            experienceId,
            q ?? ''
        ],
        queryFn: async ()=>{
            const url = new URL((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/users`), 'http://localhost');
            if (q) url.searchParams.set('q', q);
            const path = url.pathname + (url.search ? `?${url.searchParams.toString()}` : '');
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(path));
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
            const url = new URL((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/inbox`), 'http://localhost');
            if (conversationUserId) url.searchParams.set('userId', conversationUserId);
            const path = url.pathname + (url.search ? `?${url.searchParams.toString()}` : '');
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(path));
            if (!res.ok) throw new Error('Failed to fetch messages');
            return res.json();
        }
    });
const sendMessageMutation = (experienceId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/inbox`), {
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days`));
            if (!res.ok) throw new Error('Failed to fetch plan days');
            return res.json();
        }
    });
const createDayMutation = (experienceId, planId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days`), {
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}`), {
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}`), {
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises`));
            if (!res.ok) throw new Error('Failed to fetch exercises');
            return res.json();
        }
    });
const createExerciseMutation = (experienceId, planId, dayId)=>({
        mutationFn: async (payload)=>{
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises`), {
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises/${exerciseId}`), {
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/workouts/${planId}/days/${dayId}/exercises/${exerciseId}`), {
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
            const res = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiUrl"])(`/api/experience/${experienceId}/dashboard/stats`));
            if (!res.ok) throw new Error('Failed to fetch dashboard stats');
            return res.json();
        }
    });
}),
"[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/card/card.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-ssr] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$workouts$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/components/workouts/queries.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function DashboardPage() {
    const { access, experience } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWhop"])();
    const isAdmin = access.accessLevel === 'owner' || access.accessLevel === 'admin';
    if (!isAdmin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm opacity-70",
                children: "You don't have access to this page."
            }, void 0, false, {
                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    const { data: stats, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$workouts$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardStatsQuery"])(experience.id));
    const metrics = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            label: 'Total Clients',
            value: stats?.totalClients ?? 0,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"],
            label: 'Workout Plans',
            value: stats?.totalPlans ?? 0,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
            label: 'Total Assignments',
            value: stats?.totalAssignments ?? 0,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"],
            label: 'Recent Assignments',
            value: stats?.recentAssignments ?? 0,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold",
                    children: "Dashboard"
                }, void 0, false, {
                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6",
                children: metrics.map((metric, index)=>{
                    const Icon = metric.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm opacity-70",
                                            children: metric.label
                                        }, void 0, false, {
                                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: `w-4 h-4 ${metric.color}`
                                        }, void 0, false, {
                                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this),
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-6 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 19
                                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600",
                                    children: "Error"
                                }, void 0, false, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold",
                                    children: metric.value
                                }, void 0, false, {
                                    fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                            lineNumber: 69,
                            columnNumber: 15
                        }, this)
                    }, index, false, {
                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 grid-cols-1 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: "Quick Actions"
                        }, void 0, false, {
                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: "Recent Activity"
                        }, void 0, false, {
                            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/app/experiences/[experienceId]/dashboard/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/card/card.props.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/card/card.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$props$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/frosted-ui/dist/esm/components/card/card.props.js [app-ssr] (ecmascript)");
;
;
;
;
const Card = (props)=>{
    const { asChild, children, className, size = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$props$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardPropDefs"].size.default, variant = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$frosted$2d$ui$2f$dist$2f$esm$2f$components$2f$card$2f$card$2e$props$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cardPropDefs"].variant.default, ...cardProps } = props;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : 'div';
    function getChild() {
        const firstChild = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](firstChild, {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
                className: "fui-CardInner"
            }, firstChild.props.children)
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Comp, {
        ...cardProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('fui-reset', 'fui-Card', className, `fui-r-size-${size}`, `fui-variant-${variant}`)
    }, asChild ? getChild() : __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: "fui-CardInner"
    }, children));
};
Card.displayName = 'Card';
;
 //# sourceMappingURL=card.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>CircleCheckBig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const CircleCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-check-big", __iconNode);
;
 //# sourceMappingURL=circle-check-big.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>UserPlus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "19",
            y1: "8",
            y2: "14",
            key: "1bvyxn"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "16",
            y1: "11",
            y2: "11",
            key: "1shjgl"
        }
    ]
];
const UserPlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("user-plus", __iconNode);
;
 //# sourceMappingURL=user-plus.js.map
}),
"[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript) <export default as UserPlus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserPlus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$507$2e$0_react$40$17$2e$0$2e$2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.507.0_react@17.0.2/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_47ff1512._.js.map