(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhopContext",
    ()=>WhopContext,
    "useWhop",
    ()=>useWhop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const WhopContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useWhop() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WhopContext);
    if (!context) throw new Error("useWhop must be used within a WhopProvider");
    return context;
}
_s(useWhop, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/src/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$presets$2d$zod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-core/dist/presets-zod.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-nextjs/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/zod/index.js [app-client] (ecmascript) <locals>");
;
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnv"])({
    server: {
        WHOP_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
        // Whop Payments
        ONE_TIME_PURCHASE_ACCESS_PASS_PLAN_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
        ONE_TIME_PURCHASE_ACCESS_PASS_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
        SUBSCRIPTION_PURCHASE_ACCESS_PASS_PLAN_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
        SUBSCRIPTION_PURCHASE_ACCESS_PASS_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string()
    },
    client: {
        NEXT_PUBLIC_WHOP_APP_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
        NEXT_PUBLIC_WHOP_AGENT_USER_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
        NEXT_PUBLIC_WHOP_COMPANY_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
        NEXT_PUBLIC_VERCEL_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().default('http://localhost:3000')
    },
    runtimeEnv: {
        // Server
        WHOP_API_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.WHOP_API_KEY,
        ONE_TIME_PURCHASE_ACCESS_PASS_PLAN_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ONE_TIME_PURCHASE_ACCESS_PASS_PLAN_ID,
        ONE_TIME_PURCHASE_ACCESS_PASS_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ONE_TIME_PURCHASE_ACCESS_PASS_ID,
        SUBSCRIPTION_PURCHASE_ACCESS_PASS_PLAN_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SUBSCRIPTION_PURCHASE_ACCESS_PASS_PLAN_ID,
        SUBSCRIPTION_PURCHASE_ACCESS_PASS_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SUBSCRIPTION_PURCHASE_ACCESS_PASS_ID,
        // Client
        NEXT_PUBLIC_WHOP_APP_ID: ("TURBOPACK compile-time value", "app_c8UFlR3mSLWqCB"),
        NEXT_PUBLIC_WHOP_AGENT_USER_ID: ("TURBOPACK compile-time value", "user_Jo0j3wnHZgUE8"),
        NEXT_PUBLIC_WHOP_COMPANY_ID: ("TURBOPACK compile-time value", "biz_zfN839mM9pHuyK"),
        NEXT_PUBLIC_VERCEL_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_VERCEL_URL
    },
    extends: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$presets$2d$zod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vercel"])()
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-queries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getApiUrl",
    ()=>getApiUrl,
    "receiptsQuery",
    ()=>receiptsQuery,
    "serverQueryClient",
    ()=>serverQueryClient,
    "whopExperienceQuery",
    ()=>whopExperienceQuery,
    "whopUserQuery",
    ()=>whopUserQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/hydration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/env.ts [app-client] (ecmascript)");
;
;
const serverQueryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
            retry: 1
        },
        dehydrate: {
            shouldDehydrateQuery: (query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultShouldDehydrateQuery"])(query) || query.state.status === 'pending'
        }
    }
});
function getApiUrl(path) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return path;
}
const whopExperienceQuery = (experienceId)=>({
        queryKey: [
            'experience',
            experienceId
        ],
        queryFn: async ()=>{
            const response = await fetch(getApiUrl(`/api/experience/${experienceId}`));
            if (!response.ok) throw new Error('Failed to fetch whop experience');
            const result = await response.json();
            return result;
        }
    });
const whopUserQuery = (experienceId)=>({
        queryKey: [
            'user',
            experienceId
        ],
        queryFn: async ()=>{
            const response = await fetch(getApiUrl(`/api/experience/${experienceId}/user`));
            if (!response.ok) throw new Error('Failed to fetch whop user');
            return response.json();
        }
    });
const receiptsQuery = ()=>({
        queryKey: [
            'receipts'
        ],
        queryFn: async ()=>{
            const response = await fetch(getApiUrl('/api/receipts'));
            if (!response.ok) throw new Error('Failed to fetch receipts');
            return response.json();
        }
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhopProvider",
    ()=>WhopProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-queries.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function WhopProvider({ children, experienceId, state }) {
    _s();
    const [client] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "WhopProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                        retry: 1
                    }
                }
            })
    }["WhopProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: client,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HydrationBoundary"], {
            state: state,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhopProviderInner, {
                experienceId: experienceId,
                children: children
            }, void 0, false, {
                fileName: "[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-provider.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-provider.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-provider.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(WhopProvider, "rcTsYpQukDpqbpEeuXqMnIFKym8=");
_c = WhopProvider;
function WhopProviderInner({ children, experienceId }) {
    _s1();
    const { data: experience, isLoading: isLoadingExperience } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whopExperienceQuery"])(experienceId));
    const { data: userAndAccess, isLoading: isLoadingUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whopUserQuery"])(experienceId));
    if (isLoadingExperience || isLoadingUser || !experience || !userAndAccess) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$src$2f$components$2f$whop$2d$context$2f$whop$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhopContext"].Provider, {
        value: {
            experience,
            user: userAndAccess.user,
            access: userAndAccess.access
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/whopWorkoutPlanner/workout-planner/src/components/whop-context/whop-provider.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s1(WhopProviderInner, "TJCwZviCX24I/c2eIHcpw/6MYzk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c1 = WhopProviderInner;
var _c, _c1;
__turbopack_context__.k.register(_c, "WhopProvider");
__turbopack_context__.k.register(_c1, "WhopProviderInner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=whopWorkoutPlanner_workout-planner_src_8717f547._.js.map