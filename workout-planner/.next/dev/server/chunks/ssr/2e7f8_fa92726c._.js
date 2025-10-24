module.exports = [
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/iframe/context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhopIframeSdkContext",
    ()=>WhopIframeSdkContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const WhopIframeSdkContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/util/use-lazy-ref.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLazyRef",
    ()=>useLazyRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const none = Symbol("none");
function useLazyRef(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(none);
    if (ref.current === none) {
        ref.current = fn();
    }
    return ref;
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/iframe/provider.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhopIframeSdkProvider",
    ()=>WhopIframeSdkProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/iframe/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$util$2f$use$2d$lazy$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/util/use-lazy-ref.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$iframe$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/iframe/context.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function WhopIframeSdkProvider({ children, options = {} }) {
    const sdk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$util$2f$use$2d$lazy$2d$ref$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLazyRef"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSdk"])(options));
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$iframe$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhopIframeSdkContext"], {
        value: sdk.current
    }, children);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/context.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhopWebsocketContext",
    ()=>WhopWebsocketContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const WhopWebsocketContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    status: "initializing"
});
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/provider.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhopWebsocketProvider",
    ()=>WhopWebsocketProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/dist/index.node.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/context.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function WhopWebsocketProvider({ children, joinCustom, joinExperience, onAppMessage }) {
    const [websocket, setWebsocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [connectionStatus, setConnectionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("disconnected");
    const sdkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!sdkRef.current) {
            sdkRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WhopClientSdk"])();
        }
        const whopSdk = sdkRef.current;
        const websocket = whopSdk.websockets.client({
            joinCustom,
            joinExperience
        });
        setWebsocket(websocket);
        websocket.on("connectionStatus", setConnectionStatus);
        return websocket.connect();
    }, [
        joinExperience,
        joinCustom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (websocket && onAppMessage) {
            websocket.on("appMessage", onAppMessage);
            return ()=>{
                websocket.off("appMessage", onAppMessage);
            };
        }
    }, [
        onAppMessage,
        websocket
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (websocket) {
            return {
                status: connectionStatus,
                websocket
            };
        }
        return {
            status: "initializing"
        };
    }, [
        websocket,
        connectionStatus
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhopWebsocketContext"], {
        value: value
    }, children);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/use-websocket.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWebsocket",
    ()=>useWebsocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/context.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function useWebsocket() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhopWebsocketContext"]);
    return context;
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/use-websocket-status.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWebsocketStatus",
    ()=>useWebsocketStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/context.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function useWebsocketStatus() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$context$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WhopWebsocketContext"]);
    return context.status;
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/use-send-websocket-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSendWebsocketMessage",
    ()=>useSendWebsocketMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$use$2d$websocket$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/use-websocket.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function useSendWebsocketMessage() {
    const websocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$use$2d$websocket$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWebsocket"])();
    const queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (websocket.status === "connected") {
            for (const message of queue.current){
                websocket.websocket.send(message);
            }
            queue.current = [];
        }
    }, [
        websocket
    ]);
    return (message)=>{
        if (websocket.status !== "connected") {
            queue.current.push(message);
        } else {
            websocket.websocket.send(message);
        }
    };
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/use-broadcast-websocket-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBroadcastWebsocketMessage",
    ()=>useBroadcastWebsocketMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$use$2d$websocket$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/use-websocket.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function useBroadcastWebsocketMessage() {
    const websocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$use$2d$websocket$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWebsocket"])();
    const queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (websocket.status === "connected") {
            for (const message of queue.current){
                websocket.websocket.broadcast(message);
            }
            queue.current = [];
        }
    }, [
        websocket
    ]);
    return (message)=>{
        if (websocket.status !== "connected") {
            queue.current.push(message);
        } else {
            websocket.websocket.broadcast(message);
        }
    };
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/use-on-websocket-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOnWebsocketMessage",
    ()=>useOnWebsocketMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$use$2d$websocket$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/react/dist/websockets/use-websocket.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function useOnWebsocketMessage(callback) {
    const websocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$react$2f$dist$2f$websockets$2f$use$2d$websocket$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWebsocket"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (websocket.status !== "initializing" && callback) {
            websocket.websocket.on("appMessage", callback);
            return ()=>{
                websocket.websocket.off("appMessage", callback);
            };
        }
    }, [
        websocket,
        callback
    ]);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/iframe/dist/chunk-DPDPUJJX.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appsServerSchema",
    ()=>appsServerSchema,
    "createSDK",
    ()=>createSDK,
    "postmessageTransport",
    ()=>postmessageTransport,
    "reactNativeClientTransport",
    ()=>reactNativeClientTransport,
    "transport_exports",
    ()=>transport_exports,
    "whopServerSchema",
    ()=>whopServerSchema
]);
// src/sdk/apps-server.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/iframe/node_modules/zod/lib/index.mjs [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
;
;
var withError = (schema, error)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].discriminatedUnion("status", [
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            status: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("ok"),
            data: schema
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            status: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("error"),
            error
        })
    ]);
};
var frostedV2Theme = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
    appearance: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].enum([
        "light",
        "dark"
    ]),
    accentColor: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
    dangerColor: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
    grayColor: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
    infoColor: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
    successColor: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
    warningColor: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string()
}).partial();
// src/sdk/apps-server.ts
var appsServerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].discriminatedUnion("event", [
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("appPing"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("app_ping"),
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("app_pong")
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("onColorThemeChange"),
        request: frostedV2Theme,
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].void()
    })
]);
// src/sdk/transport/utils.ts
var TimeoutError = class extends Error {
    constructor(){
        super("Timeout");
    }
};
function randomId(length) {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let str = "";
    for(let i = 0; i < length; i++){
        str += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return str;
}
// src/sdk/transport/sdk.ts
function createSDK({ clientSchema, serverSchema, serverComplete, transport, timeout = 1e3, timeouts, localAppId, remoteAppId, serverImplementation = {}, serverMiddleware }) {
    const callbacks = [];
    const keys = clientSchema?.options.map((option)=>option._def.shape().event._def.value) ?? [];
    const client = Object.fromEntries(keys.map((key)=>[
            key,
            async (req)=>{
                const eventId = `${localAppId}:${key}:${randomId(8)}`;
                console.debug("[typed-transport] app. Created eventId", eventId);
                const responseData = new Promise((resolve, reject)=>{
                    const customTimeout = timeouts?.[key];
                    const timeoutId = setTimeout(()=>{
                        const index = callbacks.findIndex((cb)=>cb.id === eventId);
                        if (index !== -1) callbacks.splice(index, 1);
                        if (serverComplete) {
                            console.debug("[typed-transport] app. Timeout error");
                            reject(new TimeoutError());
                        } else resolve(void 0);
                    }, customTimeout ?? timeout);
                    if (customTimeout && customTimeout > timeout && !serverComplete) {
                        const timeoutId2 = setTimeout(()=>{
                            const index = callbacks.findIndex((cb)=>cb.id === eventId);
                            if (index !== -1) callbacks.splice(index, 1);
                            resolve(void 0);
                        }, timeout);
                        callbacks.push({
                            id: `${eventId}:processing`,
                            resolve: ()=>clearTimeout(timeoutId2)
                        });
                    }
                    callbacks.push({
                        id: eventId,
                        resolve: (data2)=>{
                            clearTimeout(timeoutId);
                            resolve(data2);
                        }
                    });
                });
                console.debug("[typed-transport] app sending event", {
                    eventId,
                    localAppId,
                    remoteAppId
                });
                await transport.send?.(eventId, req, {
                    localAppId,
                    remoteAppId
                });
                const data = await responseData;
                console.debug("[typed-transport] received response", data);
                return data;
            }
        ]));
    const cleanupRecv = transport.recv(async (event, dataAny)=>{
        const [app, key, _randomId, type] = event.split(":");
        if (app === localAppId) {
            const idx = callbacks.findIndex((cb2)=>cb2.id === event);
            if (idx === -1) return;
            const dataSchema = clientSchema?.optionsMap.get(key);
            if (!dataSchema) return;
            const cb = callbacks[idx];
            if (type === "processing") {
                cb.resolve(void 0);
            } else {
                const data = dataSchema.shape.response.parse(dataAny);
                callbacks.splice(idx, 1);
                cb.resolve(data);
            }
        } else if (app === remoteAppId) {
            if (serverImplementation === void 0) return;
            let handler = serverImplementation[key];
            if (serverMiddleware) {
                for(let i = serverMiddleware.length - 1; i >= 0; i--){
                    const middlewareDef = serverMiddleware[i];
                    const middleware = middlewareDef[key];
                    if (!middleware) continue;
                    const ref = handler;
                    handler = (data2)=>middleware(data2, ref);
                }
            }
            if (!handler) return;
            const dataSchema = serverSchema?.optionsMap.get(key);
            if (!dataSchema) return;
            const data = dataSchema.shape.request.parse(dataAny);
            const timeoutId = setTimeout(async ()=>{
                await transport.send(`${event}:processing`, {}, {
                    localAppId,
                    remoteAppId
                });
            }, 50);
            const response = await handler(data);
            clearTimeout(timeoutId);
            await transport.send(event, response, {
                localAppId,
                remoteAppId
            });
            return response;
        }
    }, {
        localAppId,
        remoteAppId
    });
    const cleanupFunctions = [];
    if (transport.cleanup) cleanupFunctions.push(transport.cleanup);
    if (cleanupRecv) cleanupFunctions.push(cleanupRecv);
    client._cleanupTransport = ()=>{
        for (const fn of cleanupFunctions)fn();
    };
    return client;
}
// src/sdk/transport/postmessage.ts
var MESSAGE_TAG = "typed-transport";
function postmessageTransport({ remoteWindow, targetOrigins }) {
    return {
        send (event, data, { remoteAppId, localAppId }) {
            if (!remoteWindow) {
                throw new Error("No remote window. Is the SDK running on a server without a global window object?");
            }
            console.debug("[typed-transport] postmessagetransport. Sending event", event, data);
            console.debug("[typed-transport] postmessagetransport. target origins =", targetOrigins);
            for (const targetOrigin of targetOrigins){
                console.debug("[typed-transport] remoteWindow.postMessage", {
                    event,
                    libId: MESSAGE_TAG,
                    receiverAppId: remoteAppId,
                    senderAppId: localAppId
                });
                console.debug("[typed-transport] remoteWindow.postMessage.data", data, JSON.stringify(data));
                remoteWindow.postMessage({
                    event,
                    data,
                    libId: MESSAGE_TAG,
                    receiverAppId: remoteAppId,
                    senderAppId: localAppId
                }, {
                    targetOrigin
                });
            }
            if (targetOrigins.length === 0) {
                remoteWindow.postMessage({
                    event,
                    data,
                    libId: MESSAGE_TAG,
                    receiverAppId: remoteAppId,
                    senderAppId: localAppId
                });
            }
        },
        recv (handler, { localAppId, remoteAppId }) {
            const listener = (event)=>{
                console.debug("[typed-transport] postmessagetransport. Receiving event", event);
                if (event.source !== remoteWindow || !targetOrigins.includes(event.origin) && targetOrigins.length > 0 || !event.data || !event.data.event || event.data.libId !== MESSAGE_TAG || event.data.receiverAppId !== localAppId || event.data.senderAppId !== remoteAppId) {
                    return;
                }
                handler(event.data.event, event.data.data);
            };
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
        }
    };
}
function reactNativeClientTransport({ postMessage, targetOrigin }) {
    return {
        send (event, data, { remoteAppId, localAppId }) {
            postMessage(JSON.stringify({
                event,
                data,
                libId: MESSAGE_TAG,
                receiverAppId: remoteAppId,
                senderAppId: localAppId
            }));
        },
        recv (handler, { localAppId, remoteAppId }) {
            const listener = (event)=>{
                const dataString = typeof event.data === "string" ? event.data : null;
                if (!dataString) return;
                const data = JSON.parse(dataString);
                if (event.origin !== targetOrigin || !data || !data.event || !data.data || data.libId !== MESSAGE_TAG || data.receiverAppId !== localAppId || data.senderAppId !== remoteAppId) {
                    return;
                }
                handler(data.event, data.data);
            };
            if ("TURBOPACK compile-time truthy", 1) {
                console.warn("No window. Is the SDK running on a server without a global window object?");
                return;
            }
            //TURBOPACK unreachable
            ;
        }
    };
}
// src/sdk/transport/index.ts
var transport_exports = {};
__export(transport_exports, {
    MESSAGE_TAG: ()=>MESSAGE_TAG,
    TimeoutError: ()=>TimeoutError,
    createHandler: ()=>createHandler,
    createSDK: ()=>createSDK,
    postmessageTransport: ()=>postmessageTransport
});
// src/sdk/transport/handler.ts
function createHandler({ schema, forceCompleteness, handlers }) {
    let eventHandler;
    createSDK({
        clientSchema: void 0,
        serverSchema: schema,
        localAppId: "client",
        remoteAppId: "server",
        forceCompleteness,
        serverImplementation: handlers,
        transport: {
            send () {},
            recv (handler) {
                eventHandler = handler;
            }
        }
    });
    return (event, data)=>{
        return eventHandler(`server:${event}`, data);
    };
}
;
var whopServerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].discriminatedUnion("event", [
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("ping"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("ping"),
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("pong")
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("getTopLevelUrlData"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({}).optional(),
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            companyRoute: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
            experienceRoute: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
            experienceId: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
            viewType: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].enum([
                "app",
                "admin",
                "analytics",
                "preview"
            ]),
            baseHref: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
            fullHref: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string()
        })
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("openExternalUrl"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            newTab: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
            url: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string()
        }),
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("ok")
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("onHrefChange"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            href: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string()
        }),
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("ok")
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("inAppPurchase"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            /**
       * ID returned from the `chargeUser` API call.
       * @example "ch_1234567890"
       */ id: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string().optional(),
            /**
       * ID of the plan returned from the `chargeUser` API call.
       * @example "plan_1234567890"
       */ planId: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string()
        }),
        response: withError(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            sessionId: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
            /**
         * The receipt ID can be used to verify the purchase.
         *
         * NOTE: When receiving payments you should always listen to webhooks as a fallback
         * to process the payment. Do not solely rely on the client to process payments. The receipt ID
         * can be used to deduplicate payment events.
         */ receiptId: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string()
        }), __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string())
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("closeApp"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].null(),
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("ok")
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("openHelpChat"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].null(),
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("ok")
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("getColorTheme"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].void(),
        response: frostedV2Theme
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("earliestUnreadNotification"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            experienceId: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string()
        }),
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            externalId: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string()
        }).nullable()
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("markExperienceRead"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            experienceId: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string(),
            notificationExternalId: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].string().optional()
        }),
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("ok")
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
        event: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("performHaptic"),
        request: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].object({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].enum([
                "selection",
                "impact",
                "notification"
            ]),
            style: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].enum([
                "light",
                "medium",
                "heavy"
            ])
        }),
        response: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"].literal("ok")
    })
]);
;
 //# sourceMappingURL=chunk-DPDPUJJX.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/iframe/dist/index.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSdk",
    ()=>createSdk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$dist$2f$chunk$2d$DPDPUJJX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/iframe/dist/chunk-DPDPUJJX.mjs [app-ssr] (ecmascript)");
;
// src/sdk/mobile-app-postmessage.ts
function getReactNativePostMessage() {
    const reactNativePostMessage = ("TURBOPACK compile-time value", "undefined") !== "undefined" && "ReactNativeWebView" in window && typeof window.ReactNativeWebView === "object" && window.ReactNativeWebView && "postMessage" in window.ReactNativeWebView && typeof window.ReactNativeWebView.postMessage === "function" ? "TURBOPACK unreachable" : void 0;
    return reactNativePostMessage;
}
function getSwiftPostMessage() {
    const swiftMessageHandler = ("TURBOPACK compile-time value", "undefined") !== "undefined" && "webkit" in window && typeof window.webkit === "object" && window.webkit !== null && "messageHandlers" in window.webkit && typeof window.webkit.messageHandlers === "object" && window.webkit.messageHandlers !== null && "SwiftWebView" in window.webkit.messageHandlers && typeof window.webkit.messageHandlers.SwiftWebView === "object" && window.webkit.messageHandlers.SwiftWebView !== null && "postMessage" in window.webkit.messageHandlers.SwiftWebView ? "TURBOPACK unreachable" : null;
    const swiftPostMessage = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : void 0;
    return swiftPostMessage;
}
// src/sdk/sync-href.ts
function syncHref({ onChange }) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const initialHref = undefined;
    let lastKnown;
}
// src/sdk/index.ts
function setColorTheme(theme) {
    document.documentElement.dispatchEvent(new CustomEvent("frosted-ui:set-theme", {
        detail: theme
    }));
}
function createSdk({ onMessage = {}, appId = ("TURBOPACK compile-time value", "app_c8UFlR3mSLWqCB"), overrideParentOrigins }) {
    const mobileWebView = getSwiftPostMessage() ?? getReactNativePostMessage();
    const remoteWindow = ("TURBOPACK compile-time truthy", 1) ? void 0 : "TURBOPACK unreachable";
    if (!appId) {
        throw new Error("[createSdk]: appId is required. Please provide an appId or set the NEXT_PUBLIC_WHOP_APP_ID environment variable.");
    }
    const sdk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$dist$2f$chunk$2d$DPDPUJJX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSDK"])({
        clientSchema: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$dist$2f$chunk$2d$DPDPUJJX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whopServerSchema"],
        serverSchema: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$dist$2f$chunk$2d$DPDPUJJX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appsServerSchema"],
        forceCompleteness: false,
        serverImplementation: onMessage,
        localAppId: appId,
        remoteAppId: "app_whop",
        transport: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$iframe$2f$dist$2f$chunk$2d$DPDPUJJX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postmessageTransport"])({
            remoteWindow,
            targetOrigins: overrideParentOrigins ?? [
                "https://whop.com",
                "https://dash.whop.com",
                "http://localhost:8003"
            ]
        }),
        serverComplete: true,
        serverMiddleware: [
            {
                onColorThemeChange: setColorTheme
            }
        ],
        timeout: 15e3,
        timeouts: {
            inAppPurchase: 1e3 * 60 * 60 * 24,
            // 24 hours, we never want this to timeout.
            onHrefChange: 500
        }
    });
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    syncHref({
        onChange: sdk.onHrefChange
    });
    return sdk;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat,
    "decoder",
    ()=>decoder,
    "encoder",
    ()=>encoder,
    "uint32be",
    ()=>uint32be,
    "uint64be",
    ()=>uint64be
]);
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const MAX_INT32 = 2 ** 32;
function concat(...buffers) {
    const size = buffers.reduce((acc, { length })=>acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    for (const buffer of buffers){
        buf.set(buffer, i);
        i += buffer.length;
    }
    return buf;
}
function writeUInt32BE(buf, value, offset) {
    if (value < 0 || value >= MAX_INT32) {
        throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
    }
    buf.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 0xff
    ], offset);
}
function uint64be(value) {
    const high = Math.floor(value / MAX_INT32);
    const low = value % MAX_INT32;
    const buf = new Uint8Array(8);
    writeUInt32BE(buf, high, 0);
    writeUInt32BE(buf, low, 4);
    return buf;
}
function uint32be(value) {
    const buf = new Uint8Array(4);
    writeUInt32BE(buf, value);
    return buf;
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/base64.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeBase64",
    ()=>decodeBase64,
    "encodeBase64",
    ()=>encodeBase64
]);
function encodeBase64(input) {
    if (Uint8Array.prototype.toBase64) {
        return input.toBase64();
    }
    const CHUNK_SIZE = 0x8000;
    const arr = [];
    for(let i = 0; i < input.length; i += CHUNK_SIZE){
        arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
    }
    return btoa(arr.join(''));
}
function decodeBase64(encoded) {
    if (Uint8Array.fromBase64) {
        return Uint8Array.fromBase64(encoded);
    }
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++){
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/base64url.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/base64.js [app-ssr] (ecmascript)");
;
;
function decode(input) {
    if (Uint8Array.fromBase64) {
        return Uint8Array.fromBase64(typeof input === 'string' ? input : __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decoder"].decode(input), {
            alphabet: 'base64url'
        });
    }
    let encoded = input;
    if (encoded instanceof Uint8Array) {
        encoded = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decoder"].decode(encoded);
    }
    encoded = encoded.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBase64"])(encoded);
    } catch  {
        throw new TypeError('The input to be decoded is not correctly encoded.');
    }
}
function encode(input) {
    let unencoded = input;
    if (typeof unencoded === 'string') {
        unencoded = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encoder"].encode(unencoded);
    }
    if (Uint8Array.prototype.toBase64) {
        return unencoded.toBase64({
            alphabet: 'base64url',
            omitPadding: true
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBase64"])(unencoded).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/invalid_key_input.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "withAlg",
    ()=>withAlg
]);
function message(msg, actual, ...types) {
    types = types.filter(Boolean);
    if (types.length > 2) {
        const last = types.pop();
        msg += `one of type ${types.join(', ')}, or ${last}.`;
    } else if (types.length === 2) {
        msg += `one of type ${types[0]} or ${types[1]}.`;
    } else {
        msg += `of type ${types[0]}.`;
    }
    if (actual == null) {
        msg += ` Received ${actual}`;
    } else if (typeof actual === 'function' && actual.name) {
        msg += ` Received function ${actual.name}`;
    } else if (typeof actual === 'object' && actual != null) {
        if (actual.constructor?.name) {
            msg += ` Received an instance of ${actual.constructor.name}`;
        }
    }
    return msg;
}
const __TURBOPACK__default__export__ = (actual, ...types)=>{
    return message('Key must be ', actual, ...types);
};
function withAlg(alg, actual, ...types) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOSEAlgNotAllowed",
    ()=>JOSEAlgNotAllowed,
    "JOSEError",
    ()=>JOSEError,
    "JOSENotSupported",
    ()=>JOSENotSupported,
    "JWEDecryptionFailed",
    ()=>JWEDecryptionFailed,
    "JWEInvalid",
    ()=>JWEInvalid,
    "JWKInvalid",
    ()=>JWKInvalid,
    "JWKSInvalid",
    ()=>JWKSInvalid,
    "JWKSMultipleMatchingKeys",
    ()=>JWKSMultipleMatchingKeys,
    "JWKSNoMatchingKey",
    ()=>JWKSNoMatchingKey,
    "JWKSTimeout",
    ()=>JWKSTimeout,
    "JWSInvalid",
    ()=>JWSInvalid,
    "JWSSignatureVerificationFailed",
    ()=>JWSSignatureVerificationFailed,
    "JWTClaimValidationFailed",
    ()=>JWTClaimValidationFailed,
    "JWTExpired",
    ()=>JWTExpired,
    "JWTInvalid",
    ()=>JWTInvalid
]);
class JOSEError extends Error {
    static code = 'ERR_JOSE_GENERIC';
    code = 'ERR_JOSE_GENERIC';
    constructor(message, options){
        super(message, options);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
class JWTClaimValidationFailed extends JOSEError {
    static code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    code = 'ERR_JWT_CLAIM_VALIDATION_FAILED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JWTExpired extends JOSEError {
    static code = 'ERR_JWT_EXPIRED';
    code = 'ERR_JWT_EXPIRED';
    claim;
    reason;
    payload;
    constructor(message, payload, claim = 'unspecified', reason = 'unspecified'){
        super(message, {
            cause: {
                claim,
                reason,
                payload
            }
        });
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
    }
}
class JOSEAlgNotAllowed extends JOSEError {
    static code = 'ERR_JOSE_ALG_NOT_ALLOWED';
    code = 'ERR_JOSE_ALG_NOT_ALLOWED';
}
class JOSENotSupported extends JOSEError {
    static code = 'ERR_JOSE_NOT_SUPPORTED';
    code = 'ERR_JOSE_NOT_SUPPORTED';
}
class JWEDecryptionFailed extends JOSEError {
    static code = 'ERR_JWE_DECRYPTION_FAILED';
    code = 'ERR_JWE_DECRYPTION_FAILED';
    constructor(message = 'decryption operation failed', options){
        super(message, options);
    }
}
class JWEInvalid extends JOSEError {
    static code = 'ERR_JWE_INVALID';
    code = 'ERR_JWE_INVALID';
}
class JWSInvalid extends JOSEError {
    static code = 'ERR_JWS_INVALID';
    code = 'ERR_JWS_INVALID';
}
class JWTInvalid extends JOSEError {
    static code = 'ERR_JWT_INVALID';
    code = 'ERR_JWT_INVALID';
}
class JWKInvalid extends JOSEError {
    static code = 'ERR_JWK_INVALID';
    code = 'ERR_JWK_INVALID';
}
class JWKSInvalid extends JOSEError {
    static code = 'ERR_JWKS_INVALID';
    code = 'ERR_JWKS_INVALID';
}
class JWKSNoMatchingKey extends JOSEError {
    static code = 'ERR_JWKS_NO_MATCHING_KEY';
    code = 'ERR_JWKS_NO_MATCHING_KEY';
    constructor(message = 'no applicable key found in the JSON Web Key Set', options){
        super(message, options);
    }
}
class JWKSMultipleMatchingKeys extends JOSEError {
    [Symbol.asyncIterator];
    static code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    code = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS';
    constructor(message = 'multiple matching keys found in the JSON Web Key Set', options){
        super(message, options);
    }
}
class JWKSTimeout extends JOSEError {
    static code = 'ERR_JWKS_TIMEOUT';
    code = 'ERR_JWKS_TIMEOUT';
    constructor(message = 'request timed out', options){
        super(message, options);
    }
}
class JWSSignatureVerificationFailed extends JOSEError {
    static code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    code = 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED';
    constructor(message = 'signature verification failed', options){
        super(message, options);
    }
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_key_like.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertCryptoKey",
    ()=>assertCryptoKey,
    "default",
    ()=>__TURBOPACK__default__export__,
    "isCryptoKey",
    ()=>isCryptoKey,
    "isKeyObject",
    ()=>isKeyObject
]);
function assertCryptoKey(key) {
    if (!isCryptoKey(key)) {
        throw new Error('CryptoKey instance expected');
    }
}
function isCryptoKey(key) {
    return key?.[Symbol.toStringTag] === 'CryptoKey';
}
function isKeyObject(key) {
    return key?.[Symbol.toStringTag] === 'KeyObject';
}
const __TURBOPACK__default__export__ = (key)=>{
    return isCryptoKey(key) || isKeyObject(key);
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/asn1.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromPKCS8",
    ()=>fromPKCS8,
    "fromSPKI",
    ()=>fromSPKI,
    "fromX509",
    ()=>fromX509,
    "toPKCS8",
    ()=>toPKCS8,
    "toSPKI",
    ()=>toSPKI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/invalid_key_input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/base64.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_key_like.js [app-ssr] (ecmascript)");
;
;
;
;
const formatPEM = (b64, descriptor)=>{
    const newlined = (b64.match(/.{1,64}/g) || []).join('\n');
    return `-----BEGIN ${descriptor}-----\n${newlined}\n-----END ${descriptor}-----`;
};
const genericExport = async (keyType, keyFormat, key)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isKeyObject"])(key)) {
        if (key.type !== keyType) {
            throw new TypeError(`key is not a ${keyType} key`);
        }
        return key.export({
            format: 'pem',
            type: keyFormat
        });
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCryptoKey"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key, 'CryptoKey', 'KeyObject'));
    }
    if (!key.extractable) {
        throw new TypeError('CryptoKey is not extractable');
    }
    if (key.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
    }
    return formatPEM((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBase64"])(new Uint8Array(await crypto.subtle.exportKey(keyFormat, key))), `${keyType.toUpperCase()} KEY`);
};
const toSPKI = (key)=>{
    return genericExport('public', 'spki', key);
};
const toPKCS8 = (key)=>{
    return genericExport('private', 'pkcs8', key);
};
const findOid = (keyData, oid, from = 0)=>{
    if (from === 0) {
        oid.unshift(oid.length);
        oid.unshift(0x06);
    }
    const i = keyData.indexOf(oid[0], from);
    if (i === -1) return false;
    const sub = keyData.subarray(i, i + oid.length);
    if (sub.length !== oid.length) return false;
    return sub.every((value, index)=>value === oid[index]) || findOid(keyData, oid, i + 1);
};
const getNamedCurve = (keyData)=>{
    switch(true){
        case findOid(keyData, [
            0x2a,
            0x86,
            0x48,
            0xce,
            0x3d,
            0x03,
            0x01,
            0x07
        ]):
            return 'P-256';
        case findOid(keyData, [
            0x2b,
            0x81,
            0x04,
            0x00,
            0x22
        ]):
            return 'P-384';
        case findOid(keyData, [
            0x2b,
            0x81,
            0x04,
            0x00,
            0x23
        ]):
            return 'P-521';
        default:
            return undefined;
    }
};
const genericImport = async (replace, keyFormat, pem, alg, options)=>{
    let algorithm;
    let keyUsages;
    const keyData = new Uint8Array(atob(pem.replace(replace, '')).split('').map((c)=>c.charCodeAt(0)));
    const isPublic = keyFormat === 'spki';
    switch(alg){
        case 'PS256':
        case 'PS384':
        case 'PS512':
            algorithm = {
                name: 'RSA-PSS',
                hash: `SHA-${alg.slice(-3)}`
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'RS256':
        case 'RS384':
        case 'RS512':
            algorithm = {
                name: 'RSASSA-PKCS1-v1_5',
                hash: `SHA-${alg.slice(-3)}`
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            algorithm = {
                name: 'RSA-OAEP',
                hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`
            };
            keyUsages = isPublic ? [
                'encrypt',
                'wrapKey'
            ] : [
                'decrypt',
                'unwrapKey'
            ];
            break;
        case 'ES256':
            algorithm = {
                name: 'ECDSA',
                namedCurve: 'P-256'
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'ES384':
            algorithm = {
                name: 'ECDSA',
                namedCurve: 'P-384'
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'ES512':
            algorithm = {
                name: 'ECDSA',
                namedCurve: 'P-521'
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        case 'ECDH-ES':
        case 'ECDH-ES+A128KW':
        case 'ECDH-ES+A192KW':
        case 'ECDH-ES+A256KW':
            {
                const namedCurve = getNamedCurve(keyData);
                algorithm = namedCurve?.startsWith('P-') ? {
                    name: 'ECDH',
                    namedCurve
                } : {
                    name: 'X25519'
                };
                keyUsages = isPublic ? [] : [
                    'deriveBits'
                ];
                break;
            }
        case 'Ed25519':
        case 'EdDSA':
            algorithm = {
                name: 'Ed25519'
            };
            keyUsages = isPublic ? [
                'verify'
            ] : [
                'sign'
            ];
            break;
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported "alg" (Algorithm) value');
    }
    return crypto.subtle.importKey(keyFormat, keyData, algorithm, options?.extractable ?? (isPublic ? true : false), keyUsages);
};
const fromPKCS8 = (pem, alg, options)=>{
    return genericImport(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, 'pkcs8', pem, alg, options);
};
const fromSPKI = (pem, alg, options)=>{
    return genericImport(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, 'spki', pem, alg, options);
};
function getElement(seq) {
    const result = [];
    let next = 0;
    while(next < seq.length){
        const nextPart = parseElement(seq.subarray(next));
        result.push(nextPart);
        next += nextPart.byteLength;
    }
    return result;
}
function parseElement(bytes) {
    let position = 0;
    let tag = bytes[0] & 0x1f;
    position++;
    if (tag === 0x1f) {
        tag = 0;
        while(bytes[position] >= 0x80){
            tag = tag * 128 + bytes[position] - 0x80;
            position++;
        }
        tag = tag * 128 + bytes[position] - 0x80;
        position++;
    }
    let length = 0;
    if (bytes[position] < 0x80) {
        length = bytes[position];
        position++;
    } else if (length === 0x80) {
        length = 0;
        while(bytes[position + length] !== 0 || bytes[position + length + 1] !== 0){
            if (length > bytes.byteLength) {
                throw new TypeError('invalid indefinite form length');
            }
            length++;
        }
        const byteLength = position + length + 2;
        return {
            byteLength,
            contents: bytes.subarray(position, position + length),
            raw: bytes.subarray(0, byteLength)
        };
    } else {
        const numberOfDigits = bytes[position] & 0x7f;
        position++;
        length = 0;
        for(let i = 0; i < numberOfDigits; i++){
            length = length * 256 + bytes[position];
            position++;
        }
    }
    const byteLength = position + length;
    return {
        byteLength,
        contents: bytes.subarray(position, byteLength),
        raw: bytes.subarray(0, byteLength)
    };
}
function spkiFromX509(buf) {
    const tbsCertificate = getElement(getElement(parseElement(buf).contents)[0].contents);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBase64"])(tbsCertificate[tbsCertificate[0].raw[0] === 0xa0 ? 6 : 5].raw);
}
let createPublicKey;
function getSPKI(x509) {
    try {
        createPublicKey ??= globalThis.process?.getBuiltinModule?.('node:crypto')?.createPublicKey;
    } catch  {
        createPublicKey = 0;
    }
    if (createPublicKey) {
        try {
            return new createPublicKey(x509).export({
                format: 'pem',
                type: 'spki'
            });
        } catch  {}
    }
    const pem = x509.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, '');
    const raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$base64$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeBase64"])(pem);
    return formatPEM(spkiFromX509(raw), 'PUBLIC KEY');
}
const fromX509 = (pem, alg, options)=>{
    let spki;
    try {
        spki = getSPKI(pem);
    } catch (cause) {
        throw new TypeError('Failed to parse the X.509 certificate', {
            cause
        });
    }
    return fromSPKI(spki, alg, options);
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/jwk_to_key.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js [app-ssr] (ecmascript)");
;
function subtleMapping(jwk) {
    let algorithm;
    let keyUsages;
    switch(jwk.kty){
        case 'RSA':
            {
                switch(jwk.alg){
                    case 'PS256':
                    case 'PS384':
                    case 'PS512':
                        algorithm = {
                            name: 'RSA-PSS',
                            hash: `SHA-${jwk.alg.slice(-3)}`
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'RS256':
                    case 'RS384':
                    case 'RS512':
                        algorithm = {
                            name: 'RSASSA-PKCS1-v1_5',
                            hash: `SHA-${jwk.alg.slice(-3)}`
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'RSA-OAEP':
                    case 'RSA-OAEP-256':
                    case 'RSA-OAEP-384':
                    case 'RSA-OAEP-512':
                        algorithm = {
                            name: 'RSA-OAEP',
                            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
                        };
                        keyUsages = jwk.d ? [
                            'decrypt',
                            'unwrapKey'
                        ] : [
                            'encrypt',
                            'wrapKey'
                        ];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case 'EC':
            {
                switch(jwk.alg){
                    case 'ES256':
                        algorithm = {
                            name: 'ECDSA',
                            namedCurve: 'P-256'
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'ES384':
                        algorithm = {
                            name: 'ECDSA',
                            namedCurve: 'P-384'
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'ES512':
                        algorithm = {
                            name: 'ECDSA',
                            namedCurve: 'P-521'
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'ECDH-ES':
                    case 'ECDH-ES+A128KW':
                    case 'ECDH-ES+A192KW':
                    case 'ECDH-ES+A256KW':
                        algorithm = {
                            name: 'ECDH',
                            namedCurve: jwk.crv
                        };
                        keyUsages = jwk.d ? [
                            'deriveBits'
                        ] : [];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        case 'OKP':
            {
                switch(jwk.alg){
                    case 'Ed25519':
                    case 'EdDSA':
                        algorithm = {
                            name: 'Ed25519'
                        };
                        keyUsages = jwk.d ? [
                            'sign'
                        ] : [
                            'verify'
                        ];
                        break;
                    case 'ECDH-ES':
                    case 'ECDH-ES+A128KW':
                    case 'ECDH-ES+A192KW':
                    case 'ECDH-ES+A256KW':
                        algorithm = {
                            name: jwk.crv
                        };
                        keyUsages = jwk.d ? [
                            'deriveBits'
                        ] : [];
                        break;
                    default:
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                }
                break;
            }
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
    }
    return {
        algorithm,
        keyUsages
    };
}
const __TURBOPACK__default__export__ = async (jwk)=>{
    if (!jwk.alg) {
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
    }
    const { algorithm, keyUsages } = subtleMapping(jwk);
    const keyData = {
        ...jwk
    };
    delete keyData.alg;
    delete keyData.use;
    return crypto.subtle.importKey('jwk', keyData, algorithm, jwk.ext ?? (jwk.d ? false : true), jwk.key_ops ?? keyUsages);
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_object.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
const __TURBOPACK__default__export__ = (input)=>{
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(input) === null) {
        return true;
    }
    let proto = input;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/key/import.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "importJWK",
    ()=>importJWK,
    "importPKCS8",
    ()=>importPKCS8,
    "importSPKI",
    ()=>importSPKI,
    "importX509",
    ()=>importX509
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/base64url.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$asn1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/asn1.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwk_to_key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/jwk_to_key.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_object.js [app-ssr] (ecmascript)");
;
;
;
;
;
async function importSPKI(spki, alg, options) {
    if (typeof spki !== 'string' || spki.indexOf('-----BEGIN PUBLIC KEY-----') !== 0) {
        throw new TypeError('"spki" must be SPKI formatted string');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$asn1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromSPKI"])(spki, alg, options);
}
async function importX509(x509, alg, options) {
    if (typeof x509 !== 'string' || x509.indexOf('-----BEGIN CERTIFICATE-----') !== 0) {
        throw new TypeError('"x509" must be X.509 formatted string');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$asn1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromX509"])(x509, alg, options);
}
async function importPKCS8(pkcs8, alg, options) {
    if (typeof pkcs8 !== 'string' || pkcs8.indexOf('-----BEGIN PRIVATE KEY-----') !== 0) {
        throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$asn1$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromPKCS8"])(pkcs8, alg, options);
}
async function importJWK(jwk, alg, options) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(jwk)) {
        throw new TypeError('JWK must be an object');
    }
    let ext;
    alg ??= jwk.alg;
    ext ??= options?.extractable ?? jwk.ext;
    switch(jwk.kty){
        case 'oct':
            if (typeof jwk.k !== 'string' || !jwk.k) {
                throw new TypeError('missing "k" (Key Value) Parameter value');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(jwk.k);
        case 'RSA':
            if ('oth' in jwk && jwk.oth !== undefined) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOSENotSupported"]('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
            }
        case 'EC':
        case 'OKP':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwk_to_key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                ...jwk,
                alg,
                ext
            });
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOSENotSupported"]('Unsupported "kty" (Key Type) Parameter value');
    }
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/subtle_dsa.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (alg, algorithm)=>{
    const hash = `SHA-${alg.slice(-3)}`;
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            return {
                hash,
                name: 'HMAC'
            };
        case 'PS256':
        case 'PS384':
        case 'PS512':
            return {
                hash,
                name: 'RSA-PSS',
                saltLength: parseInt(alg.slice(-3), 10) >> 3
            };
        case 'RS256':
        case 'RS384':
        case 'RS512':
            return {
                hash,
                name: 'RSASSA-PKCS1-v1_5'
            };
        case 'ES256':
        case 'ES384':
        case 'ES512':
            return {
                hash,
                name: 'ECDSA',
                namedCurve: algorithm.namedCurve
            };
        case 'Ed25519':
        case 'EdDSA':
            return {
                name: 'Ed25519'
            };
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOSENotSupported"](`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/check_key_length.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (alg, key)=>{
    if (alg.startsWith('RS') || alg.startsWith('PS')) {
        const { modulusLength } = key.algorithm;
        if (typeof modulusLength !== 'number' || modulusLength < 2048) {
            throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
        }
    }
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/crypto_key.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEncCryptoKey",
    ()=>checkEncCryptoKey,
    "checkSigCryptoKey",
    ()=>checkSigCryptoKey
]);
function unusable(name, prop = 'algorithm.name') {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
    return algorithm.name === name;
}
function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
    switch(alg){
        case 'ES256':
            return 'P-256';
        case 'ES384':
            return 'P-384';
        case 'ES512':
            return 'P-521';
        default:
            throw new Error('unreachable');
    }
}
function checkUsage(key, usage) {
    if (usage && !key.usages.includes(usage)) {
        throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
    }
}
function checkSigCryptoKey(key, alg, usage) {
    switch(alg){
        case 'HS256':
        case 'HS384':
        case 'HS512':
            {
                if (!isAlgorithm(key.algorithm, 'HMAC')) throw unusable('HMAC');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'RS256':
        case 'RS384':
        case 'RS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSASSA-PKCS1-v1_5')) throw unusable('RSASSA-PKCS1-v1_5');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'PS256':
        case 'PS384':
        case 'PS512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-PSS')) throw unusable('RSA-PSS');
                const expected = parseInt(alg.slice(2), 10);
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        case 'Ed25519':
        case 'EdDSA':
            {
                if (!isAlgorithm(key.algorithm, 'Ed25519')) throw unusable('Ed25519');
                break;
            }
        case 'ES256':
        case 'ES384':
        case 'ES512':
            {
                if (!isAlgorithm(key.algorithm, 'ECDSA')) throw unusable('ECDSA');
                const expected = getNamedCurve(alg);
                const actual = key.algorithm.namedCurve;
                if (actual !== expected) throw unusable(expected, 'algorithm.namedCurve');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usage);
}
function checkEncCryptoKey(key, alg, usage) {
    switch(alg){
        case 'A128GCM':
        case 'A192GCM':
        case 'A256GCM':
            {
                if (!isAlgorithm(key.algorithm, 'AES-GCM')) throw unusable('AES-GCM');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'A128KW':
        case 'A192KW':
        case 'A256KW':
            {
                if (!isAlgorithm(key.algorithm, 'AES-KW')) throw unusable('AES-KW');
                const expected = parseInt(alg.slice(1, 4), 10);
                const actual = key.algorithm.length;
                if (actual !== expected) throw unusable(expected, 'algorithm.length');
                break;
            }
        case 'ECDH':
            {
                switch(key.algorithm.name){
                    case 'ECDH':
                    case 'X25519':
                        break;
                    default:
                        throw unusable('ECDH or X25519');
                }
                break;
            }
        case 'PBES2-HS256+A128KW':
        case 'PBES2-HS384+A192KW':
        case 'PBES2-HS512+A256KW':
            if (!isAlgorithm(key.algorithm, 'PBKDF2')) throw unusable('PBKDF2');
            break;
        case 'RSA-OAEP':
        case 'RSA-OAEP-256':
        case 'RSA-OAEP-384':
        case 'RSA-OAEP-512':
            {
                if (!isAlgorithm(key.algorithm, 'RSA-OAEP')) throw unusable('RSA-OAEP');
                const expected = parseInt(alg.slice(9), 10) || 1;
                const actual = getHashLength(key.algorithm.hash);
                if (actual !== expected) throw unusable(`SHA-${expected}`, 'algorithm.hash');
                break;
            }
        default:
            throw new TypeError('CryptoKey does not support this operation');
    }
    checkUsage(key, usage);
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/get_sign_verify_key.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$crypto_key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/crypto_key.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/invalid_key_input.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = async (alg, key, usage)=>{
    if (key instanceof Uint8Array) {
        if (!alg.startsWith('HS')) {
            throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key, 'CryptoKey', 'KeyObject', 'JSON Web Key'));
        }
        return crypto.subtle.importKey('raw', key, {
            hash: `SHA-${alg.slice(-3)}`,
            name: 'HMAC'
        }, false, [
            usage
        ]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$crypto_key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkSigCryptoKey"])(key, alg, usage);
    return key;
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/verify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$subtle_dsa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/subtle_dsa.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$check_key_length$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/check_key_length.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$get_sign_verify_key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/get_sign_verify_key.js [app-ssr] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = async (alg, key, signature, data)=>{
    const cryptoKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$get_sign_verify_key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(alg, key, 'verify');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$check_key_length$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(alg, cryptoKey);
    const algorithm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$subtle_dsa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(alg, cryptoKey.algorithm);
    try {
        return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
    } catch  {
        return false;
    }
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_disjoint.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (...headers)=>{
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
        return true;
    }
    let acc;
    for (const header of sources){
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
            acc = new Set(parameters);
            continue;
        }
        for (const parameter of parameters){
            if (acc.has(parameter)) {
                return false;
            }
            acc.add(parameter);
        }
    }
    return true;
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_jwk.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isJWK",
    ()=>isJWK,
    "isPrivateJWK",
    ()=>isPrivateJWK,
    "isPublicJWK",
    ()=>isPublicJWK,
    "isSecretJWK",
    ()=>isSecretJWK
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_object.js [app-ssr] (ecmascript)");
;
function isJWK(key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key) && typeof key.kty === 'string';
}
function isPrivateJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'string';
}
function isPublicJWK(key) {
    return key.kty !== 'oct' && typeof key.d === 'undefined';
}
function isSecretJWK(key) {
    return key.kty === 'oct' && typeof key.k === 'string';
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/check_key_type.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/invalid_key_input.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_key_like.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_jwk.js [app-ssr] (ecmascript)");
;
;
;
const tag = (key)=>key?.[Symbol.toStringTag];
const jwkMatchesOp = (alg, key, usage)=>{
    if (key.use !== undefined) {
        let expected;
        switch(usage){
            case 'sign':
            case 'verify':
                expected = 'sig';
                break;
            case 'encrypt':
            case 'decrypt':
                expected = 'enc';
                break;
        }
        if (key.use !== expected) {
            throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
        }
    }
    if (key.alg !== undefined && key.alg !== alg) {
        throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
    }
    if (Array.isArray(key.key_ops)) {
        let expectedKeyOp;
        switch(true){
            case usage === 'sign' || usage === 'verify':
            case alg === 'dir':
            case alg.includes('CBC-HS'):
                expectedKeyOp = usage;
                break;
            case alg.startsWith('PBES2'):
                expectedKeyOp = 'deriveBits';
                break;
            case /^A\d{3}(?:GCM)?(?:KW)?$/.test(alg):
                if (!alg.includes('GCM') && alg.endsWith('KW')) {
                    expectedKeyOp = usage === 'encrypt' ? 'wrapKey' : 'unwrapKey';
                } else {
                    expectedKeyOp = usage;
                }
                break;
            case usage === 'encrypt' && alg.startsWith('RSA'):
                expectedKeyOp = 'wrapKey';
                break;
            case usage === 'decrypt':
                expectedKeyOp = alg.startsWith('RSA') ? 'unwrapKey' : 'deriveBits';
                break;
        }
        if (expectedKeyOp && key.key_ops?.includes?.(expectedKeyOp) === false) {
            throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
        }
    }
    return true;
};
const symmetricTypeCheck = (alg, key, usage)=>{
    if (key instanceof Uint8Array) return;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJWK"](key)) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSecretJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withAlg"])(alg, key, 'CryptoKey', 'KeyObject', 'JSON Web Key', 'Uint8Array'));
    }
    if (key.type !== 'secret') {
        throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
    }
};
const asymmetricTypeCheck = (alg, key, usage)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJWK"](key)) {
        switch(usage){
            case 'decrypt':
            case 'sign':
                if (__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPrivateJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation be a private JWK`);
            case 'encrypt':
            case 'verify':
                if (__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPublicJWK"](key) && jwkMatchesOp(alg, key, usage)) return;
                throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key)) {
        throw new TypeError((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$invalid_key_input$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withAlg"])(alg, key, 'CryptoKey', 'KeyObject', 'JSON Web Key'));
    }
    if (key.type === 'secret') {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (key.type === 'public') {
        switch(usage){
            case 'sign':
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
            case 'decrypt':
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
            default:
                break;
        }
    }
    if (key.type === 'private') {
        switch(usage){
            case 'verify':
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
            case 'encrypt':
                throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
            default:
                break;
        }
    }
};
const __TURBOPACK__default__export__ = (alg, key, usage)=>{
    const symmetric = alg.startsWith('HS') || alg === 'dir' || alg.startsWith('PBES2') || /^A(?:128|192|256)(?:GCM)?(?:KW)?$/.test(alg) || /^A(?:128|192|256)CBC-HS(?:256|384|512)$/.test(alg);
    if (symmetric) {
        symmetricTypeCheck(alg, key, usage);
    } else {
        asymmetricTypeCheck(alg, key, usage);
    }
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/validate_crit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader)=>{
    if (joseHeader.crit !== undefined && protectedHeader?.crit === undefined) {
        throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === undefined) {
        return new Set();
    }
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input)=>typeof input !== 'string' || input.length === 0)) {
        throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== undefined) {
        recognized = new Map([
            ...Object.entries(recognizedOption),
            ...recognizedDefault.entries()
        ]);
    } else {
        recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit){
        if (!recognized.has(parameter)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOSENotSupported"](`Extension Header Parameter "${parameter}" is not recognized`);
        }
        if (joseHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" is missing`);
        }
        if (recognized.get(parameter) && protectedHeader[parameter] === undefined) {
            throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
        }
    }
    return new Set(protectedHeader.crit);
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/validate_algorithms.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (option, algorithms)=>{
    if (algorithms !== undefined && (!Array.isArray(algorithms) || algorithms.some((s)=>typeof s !== 'string'))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
        return undefined;
    }
    return new Set(algorithms);
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/normalize_key.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_jwk.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/base64url.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwk_to_key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/jwk_to_key.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_key_like.js [app-ssr] (ecmascript)");
;
;
;
;
let cache;
const handleJWK = async (key, jwk, alg, freeze = false)=>{
    cache ||= new WeakMap();
    let cached = cache.get(key);
    if (cached?.[alg]) {
        return cached[alg];
    }
    const cryptoKey = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwk_to_key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ...jwk,
        alg
    });
    if (freeze) Object.freeze(key);
    if (!cached) {
        cache.set(key, {
            [alg]: cryptoKey
        });
    } else {
        cached[alg] = cryptoKey;
    }
    return cryptoKey;
};
const handleKeyObject = (keyObject, alg)=>{
    cache ||= new WeakMap();
    let cached = cache.get(keyObject);
    if (cached?.[alg]) {
        return cached[alg];
    }
    const isPublic = keyObject.type === 'public';
    const extractable = isPublic ? true : false;
    let cryptoKey;
    if (keyObject.asymmetricKeyType === 'x25519') {
        switch(alg){
            case 'ECDH-ES':
            case 'ECDH-ES+A128KW':
            case 'ECDH-ES+A192KW':
            case 'ECDH-ES+A256KW':
                break;
            default:
                throw new TypeError('given KeyObject instance cannot be used for this algorithm');
        }
        cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, isPublic ? [] : [
            'deriveBits'
        ]);
    }
    if (keyObject.asymmetricKeyType === 'ed25519') {
        if (alg !== 'EdDSA' && alg !== 'Ed25519') {
            throw new TypeError('given KeyObject instance cannot be used for this algorithm');
        }
        cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, [
            isPublic ? 'verify' : 'sign'
        ]);
    }
    if (keyObject.asymmetricKeyType === 'rsa') {
        let hash;
        switch(alg){
            case 'RSA-OAEP':
                hash = 'SHA-1';
                break;
            case 'RS256':
            case 'PS256':
            case 'RSA-OAEP-256':
                hash = 'SHA-256';
                break;
            case 'RS384':
            case 'PS384':
            case 'RSA-OAEP-384':
                hash = 'SHA-384';
                break;
            case 'RS512':
            case 'PS512':
            case 'RSA-OAEP-512':
                hash = 'SHA-512';
                break;
            default:
                throw new TypeError('given KeyObject instance cannot be used for this algorithm');
        }
        if (alg.startsWith('RSA-OAEP')) {
            return keyObject.toCryptoKey({
                name: 'RSA-OAEP',
                hash
            }, extractable, isPublic ? [
                'encrypt'
            ] : [
                'decrypt'
            ]);
        }
        cryptoKey = keyObject.toCryptoKey({
            name: alg.startsWith('PS') ? 'RSA-PSS' : 'RSASSA-PKCS1-v1_5',
            hash
        }, extractable, [
            isPublic ? 'verify' : 'sign'
        ]);
    }
    if (keyObject.asymmetricKeyType === 'ec') {
        const nist = new Map([
            [
                'prime256v1',
                'P-256'
            ],
            [
                'secp384r1',
                'P-384'
            ],
            [
                'secp521r1',
                'P-521'
            ]
        ]);
        const namedCurve = nist.get(keyObject.asymmetricKeyDetails?.namedCurve);
        if (!namedCurve) {
            throw new TypeError('given KeyObject instance cannot be used for this algorithm');
        }
        if (alg === 'ES256' && namedCurve === 'P-256') {
            cryptoKey = keyObject.toCryptoKey({
                name: 'ECDSA',
                namedCurve
            }, extractable, [
                isPublic ? 'verify' : 'sign'
            ]);
        }
        if (alg === 'ES384' && namedCurve === 'P-384') {
            cryptoKey = keyObject.toCryptoKey({
                name: 'ECDSA',
                namedCurve
            }, extractable, [
                isPublic ? 'verify' : 'sign'
            ]);
        }
        if (alg === 'ES512' && namedCurve === 'P-521') {
            cryptoKey = keyObject.toCryptoKey({
                name: 'ECDSA',
                namedCurve
            }, extractable, [
                isPublic ? 'verify' : 'sign'
            ]);
        }
        if (alg.startsWith('ECDH-ES')) {
            cryptoKey = keyObject.toCryptoKey({
                name: 'ECDH',
                namedCurve
            }, extractable, isPublic ? [] : [
                'deriveBits'
            ]);
        }
    }
    if (!cryptoKey) {
        throw new TypeError('given KeyObject instance cannot be used for this algorithm');
    }
    if (!cached) {
        cache.set(keyObject, {
            [alg]: cryptoKey
        });
    } else {
        cached[alg] = cryptoKey;
    }
    return cryptoKey;
};
const __TURBOPACK__default__export__ = async (key, alg)=>{
    if (key instanceof Uint8Array) {
        return key;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCryptoKey"])(key)) {
        return key;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_key_like$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isKeyObject"])(key)) {
        if (key.type === 'secret') {
            return key.export();
        }
        if ('toCryptoKey' in key && typeof key.toCryptoKey === 'function') {
            try {
                return handleKeyObject(key, alg);
            } catch (err) {
                if (err instanceof TypeError) {
                    throw err;
                }
            }
        }
        let jwk = key.export({
            format: 'jwk'
        });
        return handleJWK(key, jwk, alg);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_jwk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isJWK"])(key)) {
        if (key.k) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(key.k);
        }
        return handleJWK(key, key, alg, true);
    }
    throw new Error('unreachable');
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/jws/flattened/verify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flattenedVerify",
    ()=>flattenedVerify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/base64url.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/verify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_disjoint.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_object.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/check_key_type.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/validate_crit.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate_algorithms$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/validate_algorithms.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$normalize_key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/normalize_key.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
async function flattenedVerify(jws, key, options) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(jws)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('Flattened JWS must be an object');
    }
    if (jws.protected === undefined && jws.header === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== undefined && typeof jws.protected !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected Header incorrect type');
    }
    if (jws.payload === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload missing');
    }
    if (typeof jws.signature !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Signature missing or incorrect type');
    }
    if (jws.header !== undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(jws.header)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Unprotected Header incorrect type');
    }
    let parsedProt = {};
    if (jws.protected) {
        try {
            const protectedHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(jws.protected);
            parsedProt = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decoder"].decode(protectedHeader));
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected Header is invalid');
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_disjoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(parsedProt, jws.header)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Protected and JWS Unprotected Header Parameter names must be disjoint');
    }
    const joseHeader = {
        ...parsedProt,
        ...jws.header
    };
    const extensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate_crit$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"], new Map([
        [
            'b64',
            true
        ]
    ]), options?.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has('b64')) {
        b64 = parsedProt.b64;
        if (typeof b64 !== 'boolean') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
        }
    }
    const { alg } = joseHeader;
    if (typeof alg !== 'string' || !alg) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$validate_algorithms$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('algorithms', options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOSEAlgNotAllowed"]('"alg" (Algorithm) Header Parameter value not allowed');
    }
    if (b64) {
        if (typeof jws.payload !== 'string') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload must be a string');
        }
    } else if (typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('JWS Payload must be a string or an Uint8Array instance');
    }
    let resolvedKey = false;
    if (typeof key === 'function') {
        key = await key(parsedProt, jws);
        resolvedKey = true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$check_key_type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(alg, key, 'verify');
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["concat"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encoder"].encode(jws.protected ?? ''), __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encoder"].encode('.'), typeof jws.payload === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encoder"].encode(jws.payload) : jws.payload);
    let signature;
    try {
        signature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(jws.signature);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('Failed to base64url decode the signature');
    }
    const k = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$normalize_key$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(key, alg);
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(alg, k, signature, data);
    if (!verified) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSSignatureVerificationFailed"]();
    }
    let payload;
    if (b64) {
        try {
            payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decode"])(jws.payload);
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('Failed to base64url decode the payload');
        }
    } else if (typeof jws.payload === 'string') {
        payload = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encoder"].encode(jws.payload);
    } else {
        payload = jws.payload;
    }
    const result = {
        payload
    };
    if (jws.protected !== undefined) {
        result.protectedHeader = parsedProt;
    }
    if (jws.header !== undefined) {
        result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
        return {
            ...result,
            key: k
        };
    }
    return result;
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/jws/compact/verify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compactVerify",
    ()=>compactVerify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$flattened$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/jws/flattened/verify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-ssr] (ecmascript)");
;
;
;
async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
        jws = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decoder"].decode(jws);
    }
    if (typeof jws !== 'string') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('Compact JWS must be a string or Uint8Array');
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split('.');
    if (length !== 3) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWSInvalid"]('Invalid Compact JWS');
    }
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$flattened$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenedVerify"])({
        payload,
        protected: protectedHeader,
        signature
    }, key, options);
    const result = {
        payload: verified.payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/epoch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (date)=>Math.floor(date.getTime() / 1000);
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/secs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const minute = 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const year = day * 365.25;
const REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
const __TURBOPACK__default__export__ = (str)=>{
    const matched = REGEX.exec(str);
    if (!matched || matched[4] && matched[1]) {
        throw new TypeError('Invalid time period format');
    }
    const value = parseFloat(matched[2]);
    const unit = matched[3].toLowerCase();
    let numericDate;
    switch(unit){
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
        case 's':
            numericDate = Math.round(value);
            break;
        case 'minute':
        case 'minutes':
        case 'min':
        case 'mins':
        case 'm':
            numericDate = Math.round(value * minute);
            break;
        case 'hour':
        case 'hours':
        case 'hr':
        case 'hrs':
        case 'h':
            numericDate = Math.round(value * hour);
            break;
        case 'day':
        case 'days':
        case 'd':
            numericDate = Math.round(value * day);
            break;
        case 'week':
        case 'weeks':
        case 'w':
            numericDate = Math.round(value * week);
            break;
        default:
            numericDate = Math.round(value * year);
            break;
    }
    if (matched[1] === '-' || matched[4] === 'ago') {
        return -numericDate;
    }
    return numericDate;
};
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/jwt_claims_set.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JWTClaimsBuilder",
    ()=>JWTClaimsBuilder,
    "validateClaimsSet",
    ()=>validateClaimsSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/buffer_utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$epoch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/epoch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$secs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/secs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/is_object.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function validateInput(label, input) {
    if (!Number.isFinite(input)) {
        throw new TypeError(`Invalid ${label} input`);
    }
    return input;
}
const normalizeTyp = (value)=>{
    if (value.includes('/')) {
        return value.toLowerCase();
    }
    return `application/${value.toLowerCase()}`;
};
const checkAudiencePresence = (audPayload, audOption)=>{
    if (typeof audPayload === 'string') {
        return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
};
function validateClaimsSet(protectedHeader, encodedPayload, options = {}) {
    let payload;
    try {
        payload = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decoder"].decode(encodedPayload));
    } catch  {}
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(payload)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWT Claims Set must be a top-level JSON object');
    }
    const { typ } = options;
    if (typ && (typeof protectedHeader.typ !== 'string' || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "typ" JWT header value', payload, 'typ', 'check_failed');
    }
    const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
    const presenceCheck = [
        ...requiredClaims
    ];
    if (maxTokenAge !== undefined) presenceCheck.push('iat');
    if (audience !== undefined) presenceCheck.push('aud');
    if (subject !== undefined) presenceCheck.push('sub');
    if (issuer !== undefined) presenceCheck.push('iss');
    for (const claim of new Set(presenceCheck.reverse())){
        if (!(claim in payload)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"](`missing required "${claim}" claim`, payload, claim, 'missing');
        }
    }
    if (issuer && !(Array.isArray(issuer) ? issuer : [
        issuer
    ]).includes(payload.iss)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "iss" claim value', payload, 'iss', 'check_failed');
    }
    if (subject && payload.sub !== subject) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "sub" claim value', payload, 'sub', 'check_failed');
    }
    if (audience && !checkAudiencePresence(payload.aud, typeof audience === 'string' ? [
        audience
    ] : audience)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('unexpected "aud" claim value', payload, 'aud', 'check_failed');
    }
    let tolerance;
    switch(typeof options.clockTolerance){
        case 'string':
            tolerance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$secs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(options.clockTolerance);
            break;
        case 'number':
            tolerance = options.clockTolerance;
            break;
        case 'undefined':
            tolerance = 0;
            break;
        default:
            throw new TypeError('Invalid clockTolerance option type');
    }
    const { currentDate } = options;
    const now = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$epoch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(currentDate || new Date());
    if ((payload.iat !== undefined || maxTokenAge) && typeof payload.iat !== 'number') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim must be a number', payload, 'iat', 'invalid');
    }
    if (payload.nbf !== undefined) {
        if (typeof payload.nbf !== 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim must be a number', payload, 'nbf', 'invalid');
        }
        if (payload.nbf > now + tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"nbf" claim timestamp check failed', payload, 'nbf', 'check_failed');
        }
    }
    if (payload.exp !== undefined) {
        if (typeof payload.exp !== 'number') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"exp" claim must be a number', payload, 'exp', 'invalid');
        }
        if (payload.exp <= now - tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTExpired"]('"exp" claim timestamp check failed', payload, 'exp', 'check_failed');
        }
    }
    if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === 'number' ? maxTokenAge : (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$secs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(maxTokenAge);
        if (age - tolerance > max) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTExpired"]('"iat" claim timestamp check failed (too far in the past)', payload, 'iat', 'check_failed');
        }
        if (age < 0 - tolerance) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTClaimValidationFailed"]('"iat" claim timestamp check failed (it should be in the past)', payload, 'iat', 'check_failed');
        }
    }
    return payload;
}
class JWTClaimsBuilder {
    #payload;
    constructor(payload){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$is_object$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(payload)) {
            throw new TypeError('JWT Claims Set MUST be an object');
        }
        this.#payload = structuredClone(payload);
    }
    data() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$buffer_utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encoder"].encode(JSON.stringify(this.#payload));
    }
    get iss() {
        return this.#payload.iss;
    }
    set iss(value) {
        this.#payload.iss = value;
    }
    get sub() {
        return this.#payload.sub;
    }
    set sub(value) {
        this.#payload.sub = value;
    }
    get aud() {
        return this.#payload.aud;
    }
    set aud(value) {
        this.#payload.aud = value;
    }
    set jti(value) {
        this.#payload.jti = value;
    }
    set nbf(value) {
        if (typeof value === 'number') {
            this.#payload.nbf = validateInput('setNotBefore', value);
        } else if (value instanceof Date) {
            this.#payload.nbf = validateInput('setNotBefore', (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$epoch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value));
        } else {
            this.#payload.nbf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$epoch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$secs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value);
        }
    }
    set exp(value) {
        if (typeof value === 'number') {
            this.#payload.exp = validateInput('setExpirationTime', value);
        } else if (value instanceof Date) {
            this.#payload.exp = validateInput('setExpirationTime', (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$epoch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value));
        } else {
            this.#payload.exp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$epoch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$secs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value);
        }
    }
    set iat(value) {
        if (typeof value === 'undefined') {
            this.#payload.iat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$epoch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(new Date());
        } else if (value instanceof Date) {
            this.#payload.iat = validateInput('setIssuedAt', (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$epoch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value));
        } else if (typeof value === 'string') {
            this.#payload.iat = validateInput('setIssuedAt', (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$epoch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(new Date()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$secs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value));
        } else {
            this.#payload.iat = validateInput('setIssuedAt', value);
        }
    }
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/jwt/verify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jwtVerify",
    ()=>jwtVerify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$compact$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/jws/compact/verify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/lib/jwt_claims_set.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/util/errors.js [app-ssr] (ecmascript)");
;
;
;
async function jwtVerify(jwt, key, options) {
    const verified = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jws$2f$compact$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compactVerify"])(jwt, key, options);
    if (verified.protectedHeader.crit?.includes('b64') && verified.protectedHeader.b64 === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JWTInvalid"]('JWTs MUST NOT use unencoded payload');
    }
    const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$lib$2f$jwt_claims_set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateClaimsSet"])(verified.protectedHeader, verified.payload, options);
    const result = {
        payload,
        protectedHeader: verified.protectedHeader
    };
    if (typeof key === 'function') {
        return {
            ...result,
            key: verified.key
        };
    }
    return result;
}
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/js-md5/src/md5.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */ (function() {
    'use strict';
    var INPUT_ERROR = 'input is invalid type';
    var FINALIZE_ERROR = 'finalize already called';
    var WINDOW = ("TURBOPACK compile-time value", "undefined") === 'object';
    var root = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {};
    if (root.JS_MD5_NO_WINDOW) {
        WINDOW = false;
    }
    var WEB_WORKER = !WINDOW && typeof self === 'object';
    var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
    if (NODE_JS) {
        root = /*TURBOPACK member replacement*/ __turbopack_context__.g;
    } else if (WEB_WORKER) {
        root = self;
    }
    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && ("TURBOPACK compile-time value", "object") === 'object' && module.exports;
    var AMD = typeof define === 'function' && define.amd;
    var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
    var HEX_CHARS = '0123456789abcdef'.split('');
    var EXTRA = [
        128,
        32768,
        8388608,
        -2147483648
    ];
    var SHIFT = [
        0,
        8,
        16,
        24
    ];
    var OUTPUT_TYPES = [
        'hex',
        'array',
        'digest',
        'buffer',
        'arrayBuffer',
        'base64'
    ];
    var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
    var blocks = [], buffer8;
    if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        buffer8 = new Uint8Array(buffer);
        blocks = new Uint32Array(buffer);
    }
    var isArray = Array.isArray;
    if (root.JS_MD5_NO_NODE_JS || !isArray) {
        isArray = function(obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        };
    }
    var isView = ArrayBuffer.isView;
    if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !isView)) {
        isView = function(obj) {
            return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
    }
    // [message: string, isString: bool]
    var formatMessage = function(message) {
        var type = typeof message;
        if (type === 'string') {
            return [
                message,
                true
            ];
        }
        if (type !== 'object' || message === null) {
            throw new Error(INPUT_ERROR);
        }
        if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
            return [
                new Uint8Array(message),
                false
            ];
        }
        if (!isArray(message) && !isView(message)) {
            throw new Error(INPUT_ERROR);
        }
        return [
            message,
            false
        ];
    };
    /**
   * @method hex
   * @memberof md5
   * @description Output hash as hex string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} Hex string
   * @example
   * md5.hex('The quick brown fox jumps over the lazy dog');
   * // equal to
   * md5('The quick brown fox jumps over the lazy dog');
   */ /**
   * @method digest
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.digest('The quick brown fox jumps over the lazy dog');
   */ /**
   * @method array
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.array('The quick brown fox jumps over the lazy dog');
   */ /**
   * @method arrayBuffer
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
   */ /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.buffer('The quick brown fox jumps over the lazy dog');
   */ /**
   * @method base64
   * @memberof md5
   * @description Output hash as base64 string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} base64 string
   * @example
   * md5.base64('The quick brown fox jumps over the lazy dog');
   */ var createOutputMethod = function(outputType) {
        return function(message) {
            return new Md5(true).update(message)[outputType]();
        };
    };
    /**
   * @method create
   * @memberof md5
   * @description Create Md5 object
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.create();
   */ /**
   * @method update
   * @memberof md5
   * @description Create and update Md5 object
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.update('The quick brown fox jumps over the lazy dog');
   * // equal to
   * var hash = md5.create();
   * hash.update('The quick brown fox jumps over the lazy dog');
   */ var createMethod = function() {
        var method = createOutputMethod('hex');
        if (NODE_JS) {
            method = nodeWrap(method);
        }
        method.create = function() {
            return new Md5();
        };
        method.update = function(message) {
            return method.create().update(message);
        };
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(type);
        }
        return method;
    };
    var nodeWrap = function(method) {
        var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
        var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
        var bufferFrom;
        if (Buffer.from && !root.JS_MD5_NO_BUFFER_FROM) {
            bufferFrom = Buffer.from;
        } else {
            bufferFrom = function(message) {
                return new Buffer(message);
            };
        }
        var nodeMethod = function(message) {
            if (typeof message === 'string') {
                return crypto.createHash('md5').update(message, 'utf8').digest('hex');
            } else {
                if (message === null || message === undefined) {
                    throw new Error(INPUT_ERROR);
                } else if (message.constructor === ArrayBuffer) {
                    message = new Uint8Array(message);
                }
            }
            if (isArray(message) || isView(message) || message.constructor === Buffer) {
                return crypto.createHash('md5').update(bufferFrom(message)).digest('hex');
            } else {
                return method(message);
            }
        };
        return nodeMethod;
    };
    /**
   * @namespace md5.hmac
   */ /**
   * @method hex
   * @memberof md5.hmac
   * @description Output hash as hex string
   * @param {String|Array|Uint8Array|ArrayBuffer} key key
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} Hex string
   * @example
   * md5.hmac.hex('key', 'The quick brown fox jumps over the lazy dog');
   * // equal to
   * md5.hmac('key', 'The quick brown fox jumps over the lazy dog');
   */ /**
   * @method digest
   * @memberof md5.hmac
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} key key
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.hmac.digest('key', 'The quick brown fox jumps over the lazy dog');
   */ /**
   * @method array
   * @memberof md5.hmac
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} key key
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.hmac.array('key', 'The quick brown fox jumps over the lazy dog');
   */ /**
   * @method arrayBuffer
   * @memberof md5.hmac
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} key key
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.hmac.arrayBuffer('key', 'The quick brown fox jumps over the lazy dog');
   */ /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof md5.hmac
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} key key
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.hmac.buffer('key', 'The quick brown fox jumps over the lazy dog');
   */ /**
   * @method base64
   * @memberof md5.hmac
   * @description Output hash as base64 string
   * @param {String|Array|Uint8Array|ArrayBuffer} key key
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} base64 string
   * @example
   * md5.hmac.base64('key', 'The quick brown fox jumps over the lazy dog');
   */ var createHmacOutputMethod = function(outputType) {
        return function(key, message) {
            return new HmacMd5(key, true).update(message)[outputType]();
        };
    };
    /**
   * @method create
   * @memberof md5.hmac
   * @description Create HmacMd5 object
   * @param {String|Array|Uint8Array|ArrayBuffer} key key
   * @returns {HmacMd5} HmacMd5 object.
   * @example
   * var hash = md5.hmac.create('key');
   */ /**
   * @method update
   * @memberof md5.hmac
   * @description Create and update HmacMd5 object
   * @param {String|Array|Uint8Array|ArrayBuffer} key key
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {HmacMd5} HmacMd5 object.
   * @example
   * var hash = md5.hmac.update('key', 'The quick brown fox jumps over the lazy dog');
   * // equal to
   * var hash = md5.hmac.create('key');
   * hash.update('The quick brown fox jumps over the lazy dog');
   */ var createHmacMethod = function() {
        var method = createHmacOutputMethod('hex');
        method.create = function(key) {
            return new HmacMd5(key);
        };
        method.update = function(key, message) {
            return method.create(key).update(message);
        };
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createHmacOutputMethod(type);
        }
        return method;
    };
    /**
   * Md5 class
   * @class Md5
   * @description This is internal class.
   * @see {@link md5.create}
   */ function Md5(sharedMemory) {
        if (sharedMemory) {
            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            this.blocks = blocks;
            this.buffer8 = buffer8;
        } else {
            if (ARRAY_BUFFER) {
                var buffer = new ArrayBuffer(68);
                this.buffer8 = new Uint8Array(buffer);
                this.blocks = new Uint32Array(buffer);
            } else {
                this.blocks = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ];
            }
        }
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
    }
    /**
   * @method update
   * @memberof Md5
   * @instance
   * @description Update hash
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @see {@link md5.update}
   */ Md5.prototype.update = function(message) {
        if (this.finalized) {
            throw new Error(FINALIZE_ERROR);
        }
        var result = formatMessage(message);
        message = result[0];
        var isString = result[1];
        var code, index = 0, i, length = message.length, blocks = this.blocks;
        var buffer8 = this.buffer8;
        while(index < length){
            if (this.hashed) {
                this.hashed = false;
                blocks[0] = blocks[16];
                blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            }
            if (isString) {
                if (ARRAY_BUFFER) {
                    for(i = this.start; index < length && i < 64; ++index){
                        code = message.charCodeAt(index);
                        if (code < 0x80) {
                            buffer8[i++] = code;
                        } else if (code < 0x800) {
                            buffer8[i++] = 0xc0 | code >>> 6;
                            buffer8[i++] = 0x80 | code & 0x3f;
                        } else if (code < 0xd800 || code >= 0xe000) {
                            buffer8[i++] = 0xe0 | code >>> 12;
                            buffer8[i++] = 0x80 | code >>> 6 & 0x3f;
                            buffer8[i++] = 0x80 | code & 0x3f;
                        } else {
                            code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
                            buffer8[i++] = 0xf0 | code >>> 18;
                            buffer8[i++] = 0x80 | code >>> 12 & 0x3f;
                            buffer8[i++] = 0x80 | code >>> 6 & 0x3f;
                            buffer8[i++] = 0x80 | code & 0x3f;
                        }
                    }
                } else {
                    for(i = this.start; index < length && i < 64; ++index){
                        code = message.charCodeAt(index);
                        if (code < 0x80) {
                            blocks[i >>> 2] |= code << SHIFT[i++ & 3];
                        } else if (code < 0x800) {
                            blocks[i >>> 2] |= (0xc0 | code >>> 6) << SHIFT[i++ & 3];
                            blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                        } else if (code < 0xd800 || code >= 0xe000) {
                            blocks[i >>> 2] |= (0xe0 | code >>> 12) << SHIFT[i++ & 3];
                            blocks[i >>> 2] |= (0x80 | code >>> 6 & 0x3f) << SHIFT[i++ & 3];
                            blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                        } else {
                            code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
                            blocks[i >>> 2] |= (0xf0 | code >>> 18) << SHIFT[i++ & 3];
                            blocks[i >>> 2] |= (0x80 | code >>> 12 & 0x3f) << SHIFT[i++ & 3];
                            blocks[i >>> 2] |= (0x80 | code >>> 6 & 0x3f) << SHIFT[i++ & 3];
                            blocks[i >>> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
                        }
                    }
                }
            } else {
                if (ARRAY_BUFFER) {
                    for(i = this.start; index < length && i < 64; ++index){
                        buffer8[i++] = message[index];
                    }
                } else {
                    for(i = this.start; index < length && i < 64; ++index){
                        blocks[i >>> 2] |= message[index] << SHIFT[i++ & 3];
                    }
                }
            }
            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 64) {
                this.start = i - 64;
                this.hash();
                this.hashed = true;
            } else {
                this.start = i;
            }
        }
        if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
        }
        return this;
    };
    Md5.prototype.finalize = function() {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        var blocks = this.blocks, i = this.lastByteIndex;
        blocks[i >>> 2] |= EXTRA[i & 3];
        if (i >= 56) {
            if (!this.hashed) {
                this.hash();
            }
            blocks[0] = blocks[16];
            blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        }
        blocks[14] = this.bytes << 3;
        blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
        this.hash();
    };
    Md5.prototype.hash = function() {
        var a, b, c, d, bc, da, blocks = this.blocks;
        if (this.first) {
            a = blocks[0] - 680876937;
            a = (a << 7 | a >>> 25) - 271733879 << 0;
            d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
            d = (d << 12 | d >>> 20) + a << 0;
            c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;
            c = (c << 17 | c >>> 15) + d << 0;
            b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;
            b = (b << 22 | b >>> 10) + c << 0;
        } else {
            a = this.h0;
            b = this.h1;
            c = this.h2;
            d = this.h3;
            a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;
            a = (a << 7 | a >>> 25) + b << 0;
            d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;
            d = (d << 12 | d >>> 20) + a << 0;
            c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;
            c = (c << 17 | c >>> 15) + d << 0;
            b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;
            b = (b << 22 | b >>> 10) + c << 0;
        }
        a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;
        b = (b << 22 | b >>> 10) + c << 0;
        a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks[10] - 42063;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;
        b = (b << 22 | b >>> 10) + c << 0;
        a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;
        b = (b << 22 | b >>> 10) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;
        b = (b << 20 | b >>> 12) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;
        b = (b << 20 | b >>> 12) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;
        b = (b << 20 | b >>> 12) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;
        b = (b << 20 | b >>> 12) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks[5] - 378558;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks[8] - 2022574463;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks[11] + 1839030562;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks[14] - 35309556;
        b = (b << 23 | b >>> 9) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks[1] - 1530992060;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks[4] + 1272893353;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks[7] - 155497632;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks[10] - 1094730640;
        b = (b << 23 | b >>> 9) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks[13] + 681279174;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks[0] - 358537222;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks[3] - 722521979;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks[6] + 76029189;
        b = (b << 23 | b >>> 9) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks[9] - 640364487;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks[12] - 421815835;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks[15] + 530742520;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks[2] - 995338651;
        b = (b << 23 | b >>> 9) + c << 0;
        a += (c ^ (b | ~d)) + blocks[0] - 198630844;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks[5] - 57434055;
        b = (b << 21 | b >>> 11) + c << 0;
        a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks[10] - 1051523;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
        b = (b << 21 | b >>> 11) + c << 0;
        a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks[15] - 30611744;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
        b = (b << 21 | b >>> 11) + c << 0;
        a += (c ^ (b | ~d)) + blocks[4] - 145523070;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks[2] + 718787259;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks[9] - 343485551;
        b = (b << 21 | b >>> 11) + c << 0;
        if (this.first) {
            this.h0 = a + 1732584193 << 0;
            this.h1 = b - 271733879 << 0;
            this.h2 = c - 1732584194 << 0;
            this.h3 = d + 271733878 << 0;
            this.first = false;
        } else {
            this.h0 = this.h0 + a << 0;
            this.h1 = this.h1 + b << 0;
            this.h2 = this.h2 + c << 0;
            this.h3 = this.h3 + d << 0;
        }
    };
    /**
   * @method hex
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.hex();
   */ Md5.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
        return HEX_CHARS[h0 >>> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h0 >>> 12 & 0x0F] + HEX_CHARS[h0 >>> 8 & 0x0F] + HEX_CHARS[h0 >>> 20 & 0x0F] + HEX_CHARS[h0 >>> 16 & 0x0F] + HEX_CHARS[h0 >>> 28 & 0x0F] + HEX_CHARS[h0 >>> 24 & 0x0F] + HEX_CHARS[h1 >>> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h1 >>> 12 & 0x0F] + HEX_CHARS[h1 >>> 8 & 0x0F] + HEX_CHARS[h1 >>> 20 & 0x0F] + HEX_CHARS[h1 >>> 16 & 0x0F] + HEX_CHARS[h1 >>> 28 & 0x0F] + HEX_CHARS[h1 >>> 24 & 0x0F] + HEX_CHARS[h2 >>> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h2 >>> 12 & 0x0F] + HEX_CHARS[h2 >>> 8 & 0x0F] + HEX_CHARS[h2 >>> 20 & 0x0F] + HEX_CHARS[h2 >>> 16 & 0x0F] + HEX_CHARS[h2 >>> 28 & 0x0F] + HEX_CHARS[h2 >>> 24 & 0x0F] + HEX_CHARS[h3 >>> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h3 >>> 12 & 0x0F] + HEX_CHARS[h3 >>> 8 & 0x0F] + HEX_CHARS[h3 >>> 20 & 0x0F] + HEX_CHARS[h3 >>> 16 & 0x0F] + HEX_CHARS[h3 >>> 28 & 0x0F] + HEX_CHARS[h3 >>> 24 & 0x0F];
    };
    /**
   * @method toString
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.toString();
   */ Md5.prototype.toString = Md5.prototype.hex;
    /**
   * @method digest
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.digest}
   * @example
   * hash.digest();
   */ Md5.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
        return [
            h0 & 0xFF,
            h0 >>> 8 & 0xFF,
            h0 >>> 16 & 0xFF,
            h0 >>> 24 & 0xFF,
            h1 & 0xFF,
            h1 >>> 8 & 0xFF,
            h1 >>> 16 & 0xFF,
            h1 >>> 24 & 0xFF,
            h2 & 0xFF,
            h2 >>> 8 & 0xFF,
            h2 >>> 16 & 0xFF,
            h2 >>> 24 & 0xFF,
            h3 & 0xFF,
            h3 >>> 8 & 0xFF,
            h3 >>> 16 & 0xFF,
            h3 >>> 24 & 0xFF
        ];
    };
    /**
   * @method array
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.array}
   * @example
   * hash.array();
   */ Md5.prototype.array = Md5.prototype.digest;
    /**
   * @method arrayBuffer
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.arrayBuffer}
   * @example
   * hash.arrayBuffer();
   */ Md5.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer = new ArrayBuffer(16);
        var blocks = new Uint32Array(buffer);
        blocks[0] = this.h0;
        blocks[1] = this.h1;
        blocks[2] = this.h2;
        blocks[3] = this.h3;
        return buffer;
    };
    /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.buffer}
   * @example
   * hash.buffer();
   */ Md5.prototype.buffer = Md5.prototype.arrayBuffer;
    /**
   * @method base64
   * @memberof Md5
   * @instance
   * @description Output hash as base64 string
   * @returns {String} base64 string
   * @see {@link md5.base64}
   * @example
   * hash.base64();
   */ Md5.prototype.base64 = function() {
        var v1, v2, v3, base64Str = '', bytes = this.array();
        for(var i = 0; i < 15;){
            v1 = bytes[i++];
            v2 = bytes[i++];
            v3 = bytes[i++];
            base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
        }
        v1 = bytes[i];
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + '==';
        return base64Str;
    };
    /**
   * HmacMd5 class
   * @class HmacMd5
   * @extends Md5
   * @description This is internal class.
   * @see {@link md5.hmac.create}
   */ function HmacMd5(key, sharedMemory) {
        var i, result = formatMessage(key);
        key = result[0];
        if (result[1]) {
            var bytes = [], length = key.length, index = 0, code;
            for(i = 0; i < length; ++i){
                code = key.charCodeAt(i);
                if (code < 0x80) {
                    bytes[index++] = code;
                } else if (code < 0x800) {
                    bytes[index++] = 0xc0 | code >>> 6;
                    bytes[index++] = 0x80 | code & 0x3f;
                } else if (code < 0xd800 || code >= 0xe000) {
                    bytes[index++] = 0xe0 | code >>> 12;
                    bytes[index++] = 0x80 | code >>> 6 & 0x3f;
                    bytes[index++] = 0x80 | code & 0x3f;
                } else {
                    code = 0x10000 + ((code & 0x3ff) << 10 | key.charCodeAt(++i) & 0x3ff);
                    bytes[index++] = 0xf0 | code >>> 18;
                    bytes[index++] = 0x80 | code >>> 12 & 0x3f;
                    bytes[index++] = 0x80 | code >>> 6 & 0x3f;
                    bytes[index++] = 0x80 | code & 0x3f;
                }
            }
            key = bytes;
        }
        if (key.length > 64) {
            key = new Md5(true).update(key).array();
        }
        var oKeyPad = [], iKeyPad = [];
        for(i = 0; i < 64; ++i){
            var b = key[i] || 0;
            oKeyPad[i] = 0x5c ^ b;
            iKeyPad[i] = 0x36 ^ b;
        }
        Md5.call(this, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
    }
    HmacMd5.prototype = new Md5();
    HmacMd5.prototype.finalize = function() {
        Md5.prototype.finalize.call(this);
        if (this.inner) {
            this.inner = false;
            var innerHash = this.array();
            Md5.call(this, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(innerHash);
            Md5.prototype.finalize.call(this);
        }
    };
    var exports = createMethod();
    exports.md5 = exports;
    exports.md5.hmac = createHmacMethod();
    if (COMMON_JS) {
        module.exports = exports;
    } else {
        /**
     * @method md5
     * @description Md5 hash function, export to global in browsers.
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} md5 hashes
     * @example
     * md5(''); // d41d8cd98f00b204e9800998ecf8427e
     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
     *
     * // It also supports UTF-8 encoding
     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
     *
     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
     * md5([]); // d41d8cd98f00b204e9800998ecf8427e
     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
     */ root.md5 = exports;
        if (AMD) {
            ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
                return exports;
            }(__turbopack_context__.r, exports, module));
        }
    }
})();
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/tiny-typed-emitter/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TypedEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)").EventEmitter;
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/dist/chunk-Y2CEOSBS.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MULTIPART_UPLOAD_CHUNK_SIZE",
    ()=>MULTIPART_UPLOAD_CHUNK_SIZE,
    "getUserToken",
    ()=>getUserToken,
    "makeUploadAttachmentFunction",
    ()=>makeUploadAttachmentFunction,
    "makeUserTokenVerifier",
    ()=>makeUserTokenVerifier,
    "makeWebhookValidator",
    ()=>makeWebhookValidator,
    "makeWhopClientSdk",
    ()=>makeWhopClientSdk,
    "makeWhopServerSdk",
    ()=>makeWhopServerSdk,
    "proto_exports",
    ()=>proto_exports,
    "verifyUserToken",
    ()=>verifyUserToken
]);
// src/verify-user-token.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$import$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/key/import.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/node_modules/jose/dist/webapi/jwt/verify.js [app-ssr] (ecmascript)");
// src/utils/md5.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/js-md5/src/md5.js [app-ssr] (ecmascript)");
// src/websockets/client.common.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$tiny$2d$typed$2d$emitter$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/tiny-typed-emitter/lib/index.js [app-ssr] (ecmascript)");
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
;
var USER_TOKEN_HEADER_NAME = "x-whop-user-token";
var USER_TOKEN_VERIFICATION_KEY = '{"kty":"EC","x":"rz8a8vxvexHC0TLT91g7llOdDOsNuYiGEfic4Qhni-E","y":"zH0QblKYToexd5PEIMGXPVJS9AB5smKrW4S_TbiXrOs","crv":"P-256"}';
function getUserToken(tokenOrHeadersOrRequest) {
    if (typeof tokenOrHeadersOrRequest === "string") return tokenOrHeadersOrRequest;
    if (tokenOrHeadersOrRequest instanceof Headers) return tokenOrHeadersOrRequest.get(USER_TOKEN_HEADER_NAME);
    if (tokenOrHeadersOrRequest instanceof Request) return tokenOrHeadersOrRequest.headers.get(USER_TOKEN_HEADER_NAME);
    return null;
}
function makeUserTokenVerifier(options) {
    return async function verifyUserToken2(tokenOrHeadersOrRequest, overrideOptions) {
        return await internalVerifyUserToken(tokenOrHeadersOrRequest, {
            ...options,
            ...overrideOptions
        });
    };
}
function verifyUserToken(tokenOrHeadersOrRequest, overrideOptions) {
    return internalVerifyUserToken(tokenOrHeadersOrRequest, {
        ...overrideOptions
    });
}
async function internalVerifyUserToken(tokenOrHeadersOrRequest, options) {
    try {
        const tokenString = getUserToken(tokenOrHeadersOrRequest);
        if (!tokenString) {
            throw new Error("Whop user token not found. If you are the app developer, ensure you are developing in the whop.com iframe and have the dev proxy enabled.");
        }
        const jwkString = options.publicKey ?? USER_TOKEN_VERIFICATION_KEY;
        const key = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$key$2f$import$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["importJWK"])(JSON.parse(jwkString), "ES256").catch(()=>{
            throw new Error("Invalid public key provided to verifyUserToken");
        });
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jwtVerify"])(tokenString, key, {
            issuer: "urn:whopcom:exp-proxy"
        }).catch((_e)=>{
            throw new Error("Invalid user token provided to verifyUserToken");
        });
        if (!(token.payload.sub && token.payload.aud) || Array.isArray(token.payload.aud)) {
            throw new Error("Invalid user token provided to verifyUserToken");
        }
        if (options.appId && token.payload.aud !== options.appId) throw new Error("Invalid app id provided to verifyUserToken");
        return {
            appId: token.payload.aud,
            userId: token.payload.sub
        };
    } catch (e) {
        if (options.dontThrow) {
            return null;
        }
        throw e;
    }
}
// src/codegen/proto/index.ts
var proto_exports = {};
__export(proto_exports, {
    bounties_app: ()=>index_bounties_app_exports,
    calendar_bookings_app: ()=>index_calendar_bookings_app_exports,
    common: ()=>index_common_exports,
    content_app: ()=>index_content_app_exports,
    content_rewards_app: ()=>index_content_rewards_app_exports,
    courses_app: ()=>index_courses_app_exports,
    data_platform: ()=>index_data_platform_exports,
    diagnostics: ()=>index_diagnostics_exports,
    events_app: ()=>index_events_app_exports,
    experience: ()=>index_experience_exports,
    games: ()=>index_games_exports,
    google: ()=>index_google_exports,
    wheel_app: ()=>index_wheel_app_exports
});
// src/codegen/proto/index.common.ts
var index_common_exports = {};
__export(index_common_exports, {
    AccessPassExperience_UpsellType: ()=>AccessPassExperience_UpsellType,
    AccessPass_AccessPassType: ()=>AccessPass_AccessPassType,
    AccessPass_Visibility: ()=>AccessPass_Visibility,
    AccessType: ()=>AccessType,
    ActiveUserBucket_UserBucketType: ()=>ActiveUserBucket_UserBucketType,
    AppBuild_Status: ()=>AppBuild_Status,
    AppViewType: ()=>AppViewType,
    Bot_OpengraphImageVariant: ()=>Bot_OpengraphImageVariant,
    BusinessActivityEvent_EventType: ()=>BusinessActivityEvent_EventType,
    ChannelSubscriptionState_DisconnectionReason: ()=>ChannelSubscriptionState_DisconnectionReason,
    Channel_Type: ()=>Channel_Type,
    ConnectedId_Type: ()=>ConnectedId_Type,
    Entry_EntryStatus: ()=>Entry_EntryStatus,
    FeedChatFeed_MemberPermissionType: ()=>FeedChatFeed_MemberPermissionType,
    FeedDmsFeedMember_DmsFeedMemberStatus: ()=>FeedDmsFeedMember_DmsFeedMemberStatus,
    FeedDmsFeedMember_NotificationPreference: ()=>FeedDmsFeedMember_NotificationPreference,
    FeedDmsPost_MessageType: ()=>FeedDmsPost_MessageType,
    FeedForumFeed_EmailNotificationPreferenceType: ()=>FeedForumFeed_EmailNotificationPreferenceType,
    FeedForumFeed_LayoutType: ()=>FeedForumFeed_LayoutType,
    FeedForumFeed_MemberPermissionType: ()=>FeedForumFeed_MemberPermissionType,
    FeedForumPost_ForumPostType: ()=>FeedForumPost_ForumPostType,
    FeedLivestreamFeed_MemberPermissionType: ()=>FeedLivestreamFeed_MemberPermissionType,
    FeedLivestreamFeed_RecordingStatus: ()=>FeedLivestreamFeed_RecordingStatus,
    FeedReaction_ReactionType: ()=>FeedReaction_ReactionType,
    GetTopExperiencesByActiveUsersRequest_AppFilter: ()=>GetTopExperiencesByActiveUsersRequest_AppFilter,
    GoFetchNotifications_NotifyingEntityType: ()=>GoFetchNotifications_NotifyingEntityType,
    MuxAsset_MuxAssetStatus: ()=>MuxAsset_MuxAssetStatus,
    Plan_PlanType: ()=>Plan_PlanType,
    Plan_ReleaseMethod: ()=>Plan_ReleaseMethod,
    Plan_Visibility: ()=>Plan_Visibility,
    Platform: ()=>Platform,
    Position_Type: ()=>Position_Type,
    PostReactionCount_ReactionType: ()=>PostReactionCount_ReactionType,
    ProductSurface_DiscoverSection: ()=>ProductSurface_DiscoverSection,
    ProductSurface_FeedTab: ()=>ProductSurface_FeedTab,
    ProductSurface_SurfaceType: ()=>ProductSurface_SurfaceType,
    ProductSurface_ViewContext: ()=>ProductSurface_ViewContext,
    Purchase_ReleaseMethod: ()=>Purchase_ReleaseMethod,
    ResourceType: ()=>ResourceType,
    UserType: ()=>UserType,
    User_PlatformRole: ()=>User_PlatformRole
});
// src/codegen/proto/common/users.ts
var UserType = {
    UNKNOWN_TYPE: "UNKNOWN_TYPE",
    HUMAN: "HUMAN",
    SYSTEM: "SYSTEM",
    AGENT: "AGENT",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var User_PlatformRole = {
    UNKNOWN_ROLE: "UNKNOWN_ROLE",
    SUPER_ADMIN: "SUPER_ADMIN",
    ADMIN: "ADMIN",
    TRUST_AND_SAFETY_MANAGER: "TRUST_AND_SAFETY_MANAGER",
    MANAGER: "MANAGER",
    SUPPORT: "SUPPORT",
    TESTER: "TESTER",
    SEO_MANAGER: "SEO_MANAGER",
    TEMPLATE_USER: "TEMPLATE_USER",
    MARKETPLACE_MANAGER: "MARKETPLACE_MANAGER",
    DEVELOPER: "DEVELOPER",
    FINANCE_MANAGER: "FINANCE_MANAGER",
    RESOLUTION_CENTER_MANAGER: "RESOLUTION_CENTER_MANAGER",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/common/common.ts
var AppViewType = {
    APP_VIEW_TYPE_UNKNOWN: "APP_VIEW_TYPE_UNKNOWN",
    /**
   * APP_VIEW_TYPE_HUB - This view shows in the consumer facing side of a creator's whop.
   * It is scoped to an "experience" and can be seen by customer of a creator.
   * Clients know this as the "consumer" view. (consumer_view_url_template)
   */ APP_VIEW_TYPE_HUB: "APP_VIEW_TYPE_HUB",
    /**
   * APP_VIEW_TYPE_DASH - Deprecated - used only by legacy whop internal apps.
   * This represents the "experience admin" view where a creator could customise settings for each experience powered by the app.
   * Clients know this as the "admin" view. (admin_view_url_template)
   *
   * @deprecated
   */ APP_VIEW_TYPE_DASH: "APP_VIEW_TYPE_DASH",
    /**
   * APP_VIEW_TYPE_ANALYTICS - Deprecated - used only by legacy whop internal apps.
   *
   * @deprecated
   */ APP_VIEW_TYPE_ANALYTICS: "APP_VIEW_TYPE_ANALYTICS",
    /**
   * APP_VIEW_TYPE_DASHBOARD - New. This view shows up in the creator dashboard for each company that installs the app.
   * One view is rendered per company per app. Only the companyId is available in the URL template.
   */ APP_VIEW_TYPE_DASHBOARD: "APP_VIEW_TYPE_DASHBOARD",
    /**
   * APP_VIEW_TYPE_DISCOVER - Discover view shows up on the marketplace that allows an app to drive traffics to communities on whop.
   * Essentially it is an unscoped view for an app.
   */ APP_VIEW_TYPE_DISCOVER: "APP_VIEW_TYPE_DISCOVER",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessType = {
    UNKNOWN_ACCESS_TYPE: "UNKNOWN_ACCESS_TYPE",
    NO_ACCESS: "NO_ACCESS",
    CUSTOMER: "CUSTOMER",
    ADMIN: "ADMIN",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Platform = {
    UNKNOWN: "UNKNOWN",
    WEB: "WEB",
    IOS: "IOS",
    ANDROID: "ANDROID",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var AppBuild_Status = {
    STATUS_UNKNOWN: "STATUS_UNKNOWN",
    STATUS_DRAFT: "STATUS_DRAFT",
    STATUS_PENDING: "STATUS_PENDING",
    STATUS_APPROVED: "STATUS_APPROVED",
    STATUS_REJECTED: "STATUS_REJECTED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Bot_OpengraphImageVariant = {
    VARIANT_UNKNOWN: "VARIANT_UNKNOWN",
    VARIANT_WHITE: "VARIANT_WHITE",
    VARIANT_BLACK: "VARIANT_BLACK",
    VARIANT_ORANGE: "VARIANT_ORANGE",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessPass_Visibility = {
    VISIBILITY_UNKNOWN: "VISIBILITY_UNKNOWN",
    VISIBLE: "VISIBLE",
    HIDDEN: "HIDDEN",
    ARCHIVED: "ARCHIVED",
    QUICK_LINK: "QUICK_LINK",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessPass_AccessPassType = {
    ACCESS_PASS_TYPE_UNKNOWN: "ACCESS_PASS_TYPE_UNKNOWN",
    REGULAR: "REGULAR",
    APP: "APP",
    EXPERIENCE_UPSELL: "EXPERIENCE_UPSELL",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Plan_Visibility = {
    VISIBILITY_UNKNOWN: "VISIBILITY_UNKNOWN",
    VISIBLE: "VISIBLE",
    HIDDEN: "HIDDEN",
    ARCHIVED: "ARCHIVED",
    QUICK_LINK: "QUICK_LINK",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Plan_ReleaseMethod = {
    RELEASE_METHOD_UNKNOWN: "RELEASE_METHOD_UNKNOWN",
    BUY_NOW: "BUY_NOW",
    WAITLIST: "WAITLIST",
    RAFFLE: "RAFFLE",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Plan_PlanType = {
    PLAN_TYPE_UNKNOWN: "PLAN_TYPE_UNKNOWN",
    RENEWAL: "RENEWAL",
    ONE_TIME: "ONE_TIME",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Entry_EntryStatus = {
    ENTRY_STATUS_UNKNOWN: "ENTRY_STATUS_UNKNOWN",
    PENDING: "PENDING",
    APPROVED: "APPROVED",
    DENIED: "DENIED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var AccessPassExperience_UpsellType = {
    UPSELL_TYPE_UNKNOWN: "UPSELL_TYPE_UNKNOWN",
    BEFORE_CHECKOUT: "BEFORE_CHECKOUT",
    AFTER_CHECKOUT: "AFTER_CHECKOUT",
    ONLY_IN_WHOP: "ONLY_IN_WHOP",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Purchase_ReleaseMethod = {
    UNKNOWN: "UNKNOWN",
    BUY_NOW: "BUY_NOW",
    WAITLIST: "WAITLIST",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var ConnectedId_Type = {
    UNKNOWN: "UNKNOWN",
    ANONYMOUS: "ANONYMOUS",
    USER: "USER",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Channel_Type = {
    UNKNOWN: "UNKNOWN",
    /** EXPERIENCE - / A channel to which all users of an experience are subscribed, only when vieweing that experience in the UI. The ID is the experience.tag (exp_XXXXX) */ EXPERIENCE: "EXPERIENCE",
    /** NOTIFICATIONS - / Not used right now. */ NOTIFICATIONS: "NOTIFICATIONS",
    /** DMS - / A channel to which all users in a dms_feed are subscribed. Id is the dms_feed.external_id (feed_XXXXX) */ DMS: "DMS",
    /** USER - / A channel to which a single user is subscribed. (Id is the user's id) */ USER: "USER",
    /** EVERYONE - / A single channel to which all connections are subscribed. (Id is empty) */ EVERYONE: "EVERYONE",
    /** AUTHENTICATED - / A single channel to which all authenticated users are subscribed. (Id is empty) */ AUTHENTICATED: "AUTHENTICATED",
    /** ANONYMOUS - / A channel that is created for every anonymous connection. The id is 128bits of random data. */ ANONYMOUS: "ANONYMOUS",
    /** PUBLIC - / A channel type that can be connected to by anyone without authentication. Allows anything after the `public_` prefix. */ PUBLIC: "PUBLIC",
    /** ACCESS_PASS - / A channel to which all users of an access pass are subscribed. The ID is the access_pass.tag (pass_XXXX or prod_XXXX) */ ACCESS_PASS: "ACCESS_PASS",
    /** APP - / A channel that is used by an app to broadcast data to all of its websocket connections. It may look like: app_XXX or app_XXX_exp_XXX or app_XXX_custom_suffix */ APP: "APP",
    /** BOT - / A channel to which all members with valid access to a bot are subscribed. The ID is the bot.id (biz_XXX) */ BOT: "BOT",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var ChannelSubscriptionState_DisconnectionReason = {
    UNKNOWN: "UNKNOWN",
    NO_ACCESS: "NO_ACCESS",
    REQUESTED_DISCONNECT: "REQUESTED_DISCONNECT",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Position_Type = {
    UNKNOWN: "UNKNOWN",
    MOUSE: "MOUSE",
    PLAYER: "PLAYER",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var BusinessActivityEvent_EventType = {
    UNKNOWN: "UNKNOWN",
    MEMBER_JOINED: "MEMBER_JOINED",
    NEW_PAYMENT: "NEW_PAYMENT",
    NEW_DISPUTE: "NEW_DISPUTE",
    MEMBER_CANCELED: "MEMBER_CANCELED",
    MEMBER_CHURNED: "MEMBER_CHURNED",
    NEW_MARKETPLACE_SALE: "NEW_MARKETPLACE_SALE",
    NEW_RESOLUTION_CENTER_CASE: "NEW_RESOLUTION_CENTER_CASE",
    NEW_REVIEW: "NEW_REVIEW",
    TEAM_MEMBER_JOINED: "TEAM_MEMBER_JOINED",
    BANNED_USER: "BANNED_USER",
    FAILED_PAYMENT: "FAILED_PAYMENT",
    PAYOUT_REQUESTED: "PAYOUT_REQUESTED",
    PAYOUT_COMPLETED: "PAYOUT_COMPLETED",
    PAYOUT_FAILED: "PAYOUT_FAILED",
    COMPETITION_ALERT: "COMPETITION_ALERT",
    NEW_WAITLIST_ENTRY: "NEW_WAITLIST_ENTRY",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/common/feed.ts
var FeedDmsPost_MessageType = {
    UNKNOWN_TYPE: "UNKNOWN_TYPE",
    REGULAR: "REGULAR",
    SYSTEM: "SYSTEM",
    AUTOMATED: "AUTOMATED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedChatFeed_MemberPermissionType = {
    UNKNOWN: "UNKNOWN",
    NONE: "NONE",
    EVERYONE: "EVERYONE",
    MEMBERS: "MEMBERS",
    ADMINS: "ADMINS",
    PRODUCT_OWNERS: "PRODUCT_OWNERS",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedLivestreamFeed_RecordingStatus = {
    UNKNOWN_RECORDING_STATUS: "UNKNOWN_RECORDING_STATUS",
    RECORDING: "RECORDING",
    PROCESSING: "PROCESSING",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedLivestreamFeed_MemberPermissionType = {
    UNKNOWN: "UNKNOWN",
    NONE: "NONE",
    EVERYONE: "EVERYONE",
    ADMINS: "ADMINS",
    PRODUCT_OWNERS: "PRODUCT_OWNERS",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedDmsFeedMember_DmsFeedMemberStatus = {
    UNKNOWN_STATUS: "UNKNOWN_STATUS",
    REQUESTED: "REQUESTED",
    ACCEPTED: "ACCEPTED",
    REJECTED: "REJECTED",
    CLOSED: "CLOSED",
    ARCHIVED: "ARCHIVED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedDmsFeedMember_NotificationPreference = {
    UNKNOWN_PREFERENCE: "UNKNOWN_PREFERENCE",
    ALL: "ALL",
    MENTIONS: "MENTIONS",
    NONE: "NONE",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedReaction_ReactionType = {
    UNKNOWN: "UNKNOWN",
    LIKE: "LIKE",
    EMOJI: "EMOJI",
    VIEW: "VIEW",
    VOTE: "VOTE",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumFeed_MemberPermissionType = {
    UNKNOWN_PERMISSION: "UNKNOWN_PERMISSION",
    EVERYONE: "EVERYONE",
    ADMINS: "ADMINS",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumFeed_LayoutType = {
    UNKNOWN_LAYOUT: "UNKNOWN_LAYOUT",
    FEED: "FEED",
    BLOG: "BLOG",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumFeed_EmailNotificationPreferenceType = {
    UNKNOWN_PREFERENCE: "UNKNOWN_PREFERENCE",
    ALL_ADMIN_POSTS: "ALL_ADMIN_POSTS",
    ONLY_WEEKLY_SUMMARY: "ONLY_WEEKLY_SUMMARY",
    NONE: "NONE",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var MuxAsset_MuxAssetStatus = {
    UNKNOWN: "UNKNOWN",
    UPLOADING: "UPLOADING",
    CREATED: "CREATED",
    READY: "READY",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var PostReactionCount_ReactionType = {
    UNKNOWN: "UNKNOWN",
    LIKE: "LIKE",
    EMOJI: "EMOJI",
    VIEW: "VIEW",
    VOTE: "VOTE",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var FeedForumPost_ForumPostType = {
    UNKNOWN_TYPE: "UNKNOWN_TYPE",
    REGULAR: "REGULAR",
    AUTOMATED: "AUTOMATED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/common/notifications.ts
var GoFetchNotifications_NotifyingEntityType = {
    UNKNOWN: "UNKNOWN",
    GENERIC: "GENERIC",
    EXPERIENCE: "EXPERIENCE",
    COMPANY: "COMPANY",
    COMPANY_TEAM: "COMPANY_TEAM",
    ACCESS_PASS: "ACCESS_PASS",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/common/product_surface.ts
var ProductSurface_ViewContext = {
    VIEW_CTX_UNKNOWN: "VIEW_CTX_UNKNOWN",
    /** VIEW_CTX_WHOP - / The user is viewing from inside a whop view. */ VIEW_CTX_WHOP: "VIEW_CTX_WHOP",
    /** VIEW_CTX_HOME_FEED - / The user is viewing from the home feed */ VIEW_CTX_HOME_FEED: "VIEW_CTX_HOME_FEED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_DiscoverSection = {
    DISCOVER_UNKNOWN: "DISCOVER_UNKNOWN",
    DISCOVER_LEADERBOARDS: "DISCOVER_LEADERBOARDS",
    DISCOVER_FOR_YOU: "DISCOVER_FOR_YOU",
    DISCOVER_EXPLORE: "DISCOVER_EXPLORE",
    DISCOVER_SEARCH: "DISCOVER_SEARCH",
    DISCOVER_CATEGORIES: "DISCOVER_CATEGORIES",
    DISCOVER_COLLECTIONS: "DISCOVER_COLLECTIONS",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_FeedTab = {
    FEED_TAB_UNKNOWN: "FEED_TAB_UNKNOWN",
    FEED_TAB_HOME: "FEED_TAB_HOME",
    FEED_TAB_EARN: "FEED_TAB_EARN",
    FEED_TAB_CHAT: "FEED_TAB_CHAT",
    FEED_TAB_LEARN: "FEED_TAB_LEARN",
    FEED_TAB_CALENDAR: "FEED_TAB_CALENDAR",
    FEED_TAB_PLAY: "FEED_TAB_PLAY",
    FEED_TAB_INTEGRATIONS: "FEED_TAB_INTEGRATIONS",
    FEED_TAB_TOOLS: "FEED_TAB_TOOLS",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var ProductSurface_SurfaceType = {
    UNKNOWN: "UNKNOWN",
    EXPERIENCE: "EXPERIENCE",
    WHOP: "WHOP",
    CREATOR_DASHBOARD: "CREATOR_DASHBOARD",
    AFFILIATE_DASHBOARD: "AFFILIATE_DASHBOARD",
    DISCOVER: "DISCOVER",
    HOME_FEED: "HOME_FEED",
    MESSAGES: "MESSAGES",
    PROFILE: "PROFILE",
    NOTIFICATIONS: "NOTIFICATIONS",
    USER_SETTINGS: "USER_SETTINGS",
    CHECKOUT: "CHECKOUT",
    AUTH: "AUTH",
    OTHER: "OTHER",
    USER_ONBOARDING: "USER_ONBOARDING",
    LEADERBOARD: "LEADERBOARD",
    SUPPORT_CHATS: "SUPPORT_CHATS",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var ActiveUserBucket_UserBucketType = {
    UNKNOWN: "UNKNOWN",
    EXPERIENCE: "EXPERIENCE",
    WHOP: "WHOP",
    STORE_PAGE: "STORE_PAGE",
    MESSAGES: "MESSAGES",
    HOME_FEED: "HOME_FEED",
    DISCOVER: "DISCOVER",
    BOT: "BOT",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var GetTopExperiencesByActiveUsersRequest_AppFilter = {
    ALL: "ALL",
    LIVESTREAMS: "LIVESTREAMS",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/common/websockets.ts
var ResourceType = {
    RESOURCE_UNKNOWN: "RESOURCE_UNKNOWN",
    RESOURCE_BOT: "RESOURCE_BOT",
    RESOURCE_ACCESS_PASS: "RESOURCE_ACCESS_PASS",
    RESOURCE_EXPERIENCE: "RESOURCE_EXPERIENCE",
    RESOURCE_USER: "RESOURCE_USER",
    RESOURCE_EXPERIENCE_PREVIEW_CONTENT: "RESOURCE_EXPERIENCE_PREVIEW_CONTENT",
    RESOURCE_APP: "RESOURCE_APP",
    RESOURCE_FORUM_FEED: "RESOURCE_FORUM_FEED",
    RESOURCE_UNIVERSAL_POST: "RESOURCE_UNIVERSAL_POST",
    RESOURCE_CHAT_FEED: "RESOURCE_CHAT_FEED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/index.google.ts
var index_google_exports = {};
__export(index_google_exports, {
    protobuf: ()=>index_google_protobuf_exports
});
// src/codegen/proto/index.google.protobuf.ts
var index_google_protobuf_exports = {};
__export(index_google_protobuf_exports, {
    NullValue: ()=>NullValue
});
// src/codegen/proto/google/protobuf/struct.ts
var NullValue = {
    /** NULL_VALUE - Null value. */ NULL_VALUE: "NULL_VALUE",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/index.bounties_app.ts
var index_bounties_app_exports = {};
__export(index_bounties_app_exports, {
    BountySubmission_BountySubmissionStatus: ()=>BountySubmission_BountySubmissionStatus,
    Bounty_BountyRewardUnit: ()=>Bounty_BountyRewardUnit,
    Bounty_BountyStatus: ()=>Bounty_BountyStatus
});
// src/codegen/proto/bounties_app/bounties_app.ts
var Bounty_BountyStatus = {
    UNKNOWN_STATUS: "UNKNOWN_STATUS",
    PUBLISHED: "PUBLISHED",
    ARCHIVED: "ARCHIVED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Bounty_BountyRewardUnit = {
    UNKNOWN_REWARD_UNIT: "UNKNOWN_REWARD_UNIT",
    PER_SUBMISSION: "PER_SUBMISSION",
    PER_VIEW: "PER_VIEW",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var BountySubmission_BountySubmissionStatus = {
    UNKNOWN_STATUS: "UNKNOWN_STATUS",
    PENDING: "PENDING",
    APPROVED: "APPROVED",
    DENIED: "DENIED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/index.courses_app.ts
var index_courses_app_exports = {};
// src/codegen/proto/index.games.ts
var index_games_exports = {};
__export(index_games_exports, {
    quizzes: ()=>index_games_quizzes_exports
});
// src/codegen/proto/index.games.quizzes.ts
var index_games_quizzes_exports = {};
__export(index_games_quizzes_exports, {
    HostCommand_StatusCommand: ()=>HostCommand_StatusCommand,
    QuizStatus: ()=>QuizStatus
});
// src/codegen/proto/games/quizzes/quizzes.ts
var QuizStatus = {
    UNKNOWN: "UNKNOWN",
    WAITING_FOR_PLAYERS: "WAITING_FOR_PLAYERS",
    SHOW_QUESTION: "SHOW_QUESTION",
    ANSWER_QUESTION: "ANSWER_QUESTION",
    QUESTION_RESULT: "QUESTION_RESULT",
    QUESTION_LEADERBOARD: "QUESTION_LEADERBOARD",
    GAME_RESULT: "GAME_RESULT",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var HostCommand_StatusCommand = {
    UNKNOWN: "UNKNOWN",
    /** NEXT - / Move to the next phase of the game. */ NEXT: "NEXT",
    /** END_GAME - / End the game immediately, skip results screen and destroy the session. */ END_GAME: "END_GAME",
    /** GO_BACK_TO_LOBBY - / Go back to the lobby, allowing more players to join while the current game is running. Does not reset the leaderboard. */ GO_BACK_TO_LOBBY: "GO_BACK_TO_LOBBY",
    /** SKIP_TO_END_RESULTS - / Skip the questions and go straight to the end state of the game. Shows the leaderboard. */ SKIP_TO_END_RESULTS: "SKIP_TO_END_RESULTS",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/index.content_rewards_app.ts
var index_content_rewards_app_exports = {};
__export(index_content_rewards_app_exports, {
    ContentPlatform: ()=>ContentPlatform,
    ContentRewardsCampaign_Category: ()=>ContentRewardsCampaign_Category,
    ContentRewardsCampaign_ContentType: ()=>ContentRewardsCampaign_ContentType,
    ContentRewardsCampaign_Status: ()=>ContentRewardsCampaign_Status,
    ContentRewardsSubmission_Status: ()=>ContentRewardsSubmission_Status
});
// src/codegen/proto/content_rewards_app/content_rewards_app.ts
var ContentPlatform = {
    UNKNOWN_PLATFORM: "UNKNOWN_PLATFORM",
    INSTAGRAM: "INSTAGRAM",
    TIKTOK: "TIKTOK",
    X: "X",
    YOUTUBE: "YOUTUBE",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsCampaign_Status = {
    UNKNOWN: "UNKNOWN",
    ACTIVE: "ACTIVE",
    PENDING: "PENDING",
    EXPIRED: "EXPIRED",
    ARCHIVED: "ARCHIVED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsCampaign_ContentType = {
    UNKNOWN_CONTENT_TYPE: "UNKNOWN_CONTENT_TYPE",
    UGC: "UGC",
    CLIPPING: "CLIPPING",
    /** @deprecated */ FACELESS: "FACELESS",
    OTHER_CONTENT_TYPE: "OTHER_CONTENT_TYPE",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsCampaign_Category = {
    UNKNOWN_CATEGORY: "UNKNOWN_CATEGORY",
    /** @deprecated */ CREATOR: "CREATOR",
    /** @deprecated */ BRAND: "BRAND",
    /** @deprecated */ INFLUENCER: "INFLUENCER",
    /** @deprecated */ STREAMER: "STREAMER",
    /** @deprecated */ MUSICIAN: "MUSICIAN",
    OTHER: "OTHER",
    /** @deprecated */ ECOMMERCE: "ECOMMERCE",
    LOGO: "LOGO",
    MUSIC: "MUSIC",
    /** @deprecated */ PODCAST: "PODCAST",
    /** @deprecated */ SOFTWARE: "SOFTWARE",
    /** @deprecated */ STREAM: "STREAM",
    ENTERTAINMENT: "ENTERTAINMENT",
    PRODUCTS: "PRODUCTS",
    PERSONAL_BRAND: "PERSONAL_BRAND",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var ContentRewardsSubmission_Status = {
    UNKNOWN: "UNKNOWN",
    PENDING: "PENDING",
    APPROVED: "APPROVED",
    REJECTED: "REJECTED",
    FLAGGED: "FLAGGED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/index.events_app.ts
var index_events_app_exports = {};
__export(index_events_app_exports, {
    Event_LocationType: ()=>Event_LocationType,
    Event_RecurringRule: ()=>Event_RecurringRule
});
// src/codegen/proto/events_app/events_app.ts
var Event_LocationType = {
    UNKNOWN_LOCATION_TYPE: "UNKNOWN_LOCATION_TYPE",
    OFFLINE: "OFFLINE",
    ONLINE: "ONLINE",
    ZOOM: "ZOOM",
    GOOGLE_MEET: "GOOGLE_MEET",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var Event_RecurringRule = {
    UNKNOWN_RECURRING_RULE: "UNKNOWN_RECURRING_RULE",
    DAILY: "DAILY",
    WEEKLY: "WEEKLY",
    MONTHLY: "MONTHLY",
    YEARLY: "YEARLY",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/index.diagnostics.ts
var index_diagnostics_exports = {};
__export(index_diagnostics_exports, {
    ExecuteClientCommandResponse_Status: ()=>ExecuteClientCommandResponse_Status
});
// src/codegen/proto/diagnostics/client_commands.ts
var ExecuteClientCommandResponse_Status = {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    SKIPPED: "SKIPPED",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/index.content_app.ts
var index_content_app_exports = {};
// src/codegen/proto/index.calendar_bookings_app.ts
var index_calendar_bookings_app_exports = {};
// src/codegen/proto/index.wheel_app.ts
var index_wheel_app_exports = {};
__export(index_wheel_app_exports, {
    Spin_SpinStatus: ()=>Spin_SpinStatus
});
// src/codegen/proto/wheel_app/wheel_app.ts
var Spin_SpinStatus = {
    UNKNOWN_SPIN_STATUS: "UNKNOWN_SPIN_STATUS",
    WON: "WON",
    LOST: "LOST",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/codegen/proto/index.experience.ts
var index_experience_exports = {};
// src/codegen/proto/index.data_platform.ts
var index_data_platform_exports = {};
__export(index_data_platform_exports, {
    DisputeMetric: ()=>DisputeMetric,
    LogicalOperator: ()=>LogicalOperator,
    PaymentMethod: ()=>PaymentMethod
});
// src/codegen/proto/data_platform/dispute_rates_query.ts
var PaymentMethod = {
    PAYMENT_METHOD_UNSPECIFIED: "PAYMENT_METHOD_UNSPECIFIED",
    PAYMENT_METHOD_ALL_PAYMENT_METHODS: "PAYMENT_METHOD_ALL_PAYMENT_METHODS",
    PAYMENT_METHOD_ALL_CARD_AND_FINANCING: "PAYMENT_METHOD_ALL_CARD_AND_FINANCING",
    PAYMENT_METHOD_ALL_FINANCING: "PAYMENT_METHOD_ALL_FINANCING",
    PAYMENT_METHOD_SPLITIT: "PAYMENT_METHOD_SPLITIT",
    PAYMENT_METHOD_SEZZLE: "PAYMENT_METHOD_SEZZLE",
    PAYMENT_METHOD_AFTERPAY_CLEARPAY: "PAYMENT_METHOD_AFTERPAY_CLEARPAY",
    PAYMENT_METHOD_ZIP: "PAYMENT_METHOD_ZIP",
    PAYMENT_METHOD_KLARNA: "PAYMENT_METHOD_KLARNA",
    PAYMENT_METHOD_AFFIRM: "PAYMENT_METHOD_AFFIRM",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var DisputeMetric = {
    DISPUTE_METRIC_UNSPECIFIED: "DISPUTE_METRIC_UNSPECIFIED",
    DISPUTE_RATE: "DISPUTE_RATE",
    TOTAL_TRANSACTIONS: "TOTAL_TRANSACTIONS",
    DISPUTED_TRANSACTIONS: "DISPUTED_TRANSACTIONS",
    UNRECOGNIZED: "UNRECOGNIZED"
};
var LogicalOperator = {
    LOGICAL_OPERATOR_UNSPECIFIED: "LOGICAL_OPERATOR_UNSPECIFIED",
    AND: "AND",
    OR: "OR",
    UNRECOGNIZED: "UNRECOGNIZED"
};
// src/webhooks.ts
var DEFAULT_SIGNATURE_HEADER_NAME = "x-whop-signature";
function makeWebhookValidator({ webhookSecret, signatureHeaderName }) {
    const textEncoder = new TextEncoder();
    const encodedKey = textEncoder.encode(webhookSecret);
    const cryptoKeyPromise = crypto.subtle.importKey("raw", encodedKey, {
        name: "HMAC",
        hash: "SHA-256"
    }, false, [
        "sign"
    ]);
    return async function validateWebhookBody(req) {
        const body = await req.text();
        const header = req.headers.get(signatureHeaderName ?? DEFAULT_SIGNATURE_HEADER_NAME);
        if (!header) throw Error("Missing header containing signature.");
        const [timestampStr, signatureStr] = header.split(",");
        const [, timestamp] = timestampStr.split("=");
        const [version, sentSignature] = signatureStr.split("=");
        const now = Math.round(Date.now() / 1e3);
        if (Number.isNaN(Number.parseInt(timestamp)) || Math.abs(now - Number.parseInt(timestamp)) > 300) throw Error("Invalid timestamp");
        const stringToHash = `${timestamp}.${body}`;
        const cryptoKey = await cryptoKeyPromise;
        const signatureBuffer = await crypto.subtle.sign({
            name: "HMAC",
            hash: "SHA-256"
        }, cryptoKey, textEncoder.encode(stringToHash));
        const signature = buf2hex(signatureBuffer);
        if (version !== "v1") throw Error("Unsupported version");
        if (signature !== sentSignature) throw Error("Signature mismatch");
        const parsedBody = JSON.parse(body);
        if (!isValidWebhook(parsedBody)) throw Error("Invalid webhook payload");
        return parsedBody;
    };
}
function buf2hex(buffer) {
    return [
        ...new Uint8Array(buffer)
    ].map((x)=>x.toString(16).padStart(2, "0")).join("");
}
function isValidWebhook(webhook) {
    if (!webhook || typeof webhook !== "object") return false;
    if (!("api_version" in webhook) || webhook.api_version !== "v5") return false;
    if (!("action" in webhook) || typeof webhook.action !== "string") return false;
    if (!("data" in webhook) || typeof webhook.data !== "object" || webhook.data === null) return false;
    return true;
}
// src/utils/retry.ts
var RetryError = class extends Error {
    constructor(message, errors, maxRetries){
        super(message);
        this.errors = errors;
        this.maxRetries = maxRetries;
        this.name = "RetryError";
    }
};
async function retry(fn, maxRetries, signal, ...args) {
    let tries = 0;
    const errors = [];
    while(tries < maxRetries){
        signal?.throwIfAborted();
        try {
            const res = await fn(...args);
            return res;
        } catch (error) {
            errors.push(error);
            tries++;
        }
    }
    for (const error of errors){
        console.error(error);
    }
    throw new RetryError("Failed to retry", errors, maxRetries);
}
// src/attachments/upload-parts.ts
var uploadTasks = [];
var workerCount = 0;
var maxWorkers = 10;
async function uploadWorker(uploadPart) {
    if (workerCount >= maxWorkers) {
        return;
    }
    workerCount++;
    while(uploadTasks.length > 0){
        const task = uploadTasks.shift();
        if (!task) {
            continue;
        }
        try {
            const etag = await retry(uploadPart, 10, task.task.signal, task.task);
            task.resolve({
                etag,
                partNumber: task.task.partNumber
            });
        } catch (e) {
            task.reject(e);
        }
    }
    workerCount--;
}
function uploadParts(tasks, uploadPart, priority = false) {
    const promises = tasks.map((task)=>{
        return new Promise((resolve, reject)=>{
            if (priority) {
                uploadTasks.unshift({
                    task,
                    resolve,
                    reject
                });
            } else {
                uploadTasks.push({
                    task,
                    resolve,
                    reject
                });
            }
        });
    });
    for(let i = 0; i < Math.min(tasks.length, maxWorkers); i++){
        void uploadWorker(uploadPart);
    }
    return Promise.all(promises);
}
// src/utils/sum.ts
function sum(...args) {
    return args.reduce((acc, curr)=>acc + curr, 0);
}
// src/attachments/upload.ts
async function handleUpload({ data, ...preparedFile }, { onProgress, signal, uploadPart }) {
    if (preparedFile.multipart) {
        const loaded = Array(preparedFile.multipartUploadUrls.length).fill(0);
        const result = await uploadParts(preparedFile.multipartUploadUrls.map((part, index)=>({
                ...part,
                fullData: data,
                onProgress: (event)=>{
                    loaded[index] = event.loaded;
                    const total = sum(...loaded);
                    onProgress?.(Math.round(total / data.size * 100));
                },
                signal
            })), uploadPart);
        return result;
    }
    await uploadParts([
        {
            url: preparedFile.uploadUrl,
            fullData: data,
            partNumber: 1,
            headers: preparedFile.headers,
            onProgress: (event)=>{
                onProgress?.(Math.round(event.loaded / data.size * 100));
            },
            signal
        }
    ], uploadPart, true);
    return [];
}
function getMediaType(data) {
    switch(true){
        case data.type.startsWith("image/"):
            return "image";
        case data.type.startsWith("video/"):
            return "video";
        case data.type.startsWith("audio/"):
            return "audio";
        default:
            return "other";
    }
}
function makeUploadAttachmentFunction({ uploadPart }) {
    return async function uploadAttachment(input, { onProgress, signal } = {}) {
        const preparedAttachment = "record" in input && "file" in input ? await this.prepareAttachmentForUpload(input.file, input.record) : await input;
        const result = await handleUpload(preparedAttachment, {
            onProgress,
            signal,
            uploadPart
        });
        const mediaType = getMediaType(preparedAttachment.data);
        if (preparedAttachment.multipart) {
            await this.attachments.processAttachment({
                directUploadId: preparedAttachment.id,
                mediaType,
                multipartUploadId: preparedAttachment.multipartUploadId,
                multipartParts: result
            });
        } else {
            await this.attachments.processAttachment({
                directUploadId: preparedAttachment.id,
                mediaType
            });
        }
        const attachment = await this.analyzeAttachment(preparedAttachment.id, {
            signal
        });
        if (!attachment) {
            throw new Error("Failed to analyze Attachment");
        }
        return {
            directUploadId: preparedAttachment.id,
            record: preparedAttachment.record,
            attachment
        };
    };
}
// src/attachments/analyze.ts
async function analyzeAttachment(signedId, opts) {
    while(!opts?.signal?.aborted){
        const attachment = await this.attachments.getAttachment({
            id: signedId
        }, {
            signal: opts?.signal
        }).catch(()=>null);
        if (attachment) {
            return attachment;
        }
    }
}
// src/attachments/common.ts
var MULTIPART_UPLOAD_CHUNK_SIZE = 5 * 1024 * 1024;
// src/utils/with-awaitable-params.ts
var withAwaitableParams = (fn)=>{
    return (...args)=>{
        const casted = args;
        const hasPromises = casted.some((arg)=>arg instanceof Promise);
        if (hasPromises) {
            return new Promise((resolve, reject)=>{
                return Promise.all(casted).then((args2)=>{
                    return fn(...args2);
                }).then(resolve).catch(reject);
            });
        }
        return fn(...args);
    };
};
// src/utils/b64.ts
var encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function b64Raw(arrayBuffer) {
    let base64 = "";
    const bytes = new Uint8Array(arrayBuffer);
    const byteLength = bytes.byteLength;
    const byteRemainder = byteLength % 3;
    const mainLength = byteLength - byteRemainder;
    let a;
    let b;
    let c;
    let d;
    let chunk;
    for(let i = 0; i < mainLength; i = i + 3){
        chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
        a = (chunk & 16515072) >> 18;
        b = (chunk & 258048) >> 12;
        c = (chunk & 4032) >> 6;
        d = chunk & 63;
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }
    if (byteRemainder === 1) {
        chunk = bytes[mainLength];
        a = (chunk & 252) >> 2;
        b = (chunk & 3) << 4;
        base64 += `${encodings[a]}${encodings[b]}==`;
    } else if (byteRemainder === 2) {
        chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];
        a = (chunk & 64512) >> 10;
        b = (chunk & 1008) >> 4;
        c = (chunk & 15) << 2;
        base64 += `${encodings[a]}${encodings[b]}${encodings[c]}=`;
    }
    return base64;
}
var b64 = withAwaitableParams(b64Raw);
;
async function md5(stream) {
    const hasher = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$js$2d$md5$2f$src$2f$md5$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["md5"].create();
    await stream.pipeTo(new WritableStream({
        write (chunk) {
            hasher.update(chunk);
        }
    }));
    return hasher.arrayBuffer();
}
// src/attachments/prepare.ts
async function prepareAttachmentForUpload(data, record) {
    const isMultipart = data.size > MULTIPART_UPLOAD_CHUNK_SIZE;
    const mediaDirectUpload = await this.attachments.uploadMedia({
        byteSizeV2: data.size.toString(),
        record,
        filename: data instanceof File ? data.name : crypto.randomUUID(),
        contentType: data.type,
        checksum: await b64(md5(data.stream())),
        multipart: isMultipart
    });
    if (isMultipart) {
        if (!mediaDirectUpload?.multipartUploadId || !mediaDirectUpload.multipartUploadUrls) {
            throw new Error("Failed to prepare file");
        }
        return {
            data,
            id: mediaDirectUpload.id,
            multipartUploadUrls: mediaDirectUpload.multipartUploadUrls,
            multipartUploadId: mediaDirectUpload.multipartUploadId,
            record,
            multipart: true
        };
    }
    if (!mediaDirectUpload?.id || !mediaDirectUpload.uploadUrl) {
        throw new Error("Failed to prepare file");
    }
    return {
        data,
        id: mediaDirectUpload.id,
        uploadUrl: mediaDirectUpload.uploadUrl,
        headers: mediaDirectUpload.headers,
        record,
        multipart: false
    };
}
// src/attachments/partial-file-sdk-extensions.ts
function partialFileSdkExtensions(baseSdk) {
    const prepareAttachmentForUpload2 = prepareAttachmentForUpload.bind(baseSdk);
    const analyzeAttachment2 = analyzeAttachment.bind(baseSdk);
    return {
        prepareAttachmentForUpload: prepareAttachmentForUpload2,
        analyzeAttachment: analyzeAttachment2
    };
}
// src/attachments/file-sdk-extensions.ts
function fileSdkExtensions(baseSdk, uploadAttachmentFn) {
    const partial = partialFileSdkExtensions(baseSdk);
    const uploadAttachment = uploadAttachmentFn.bind({
        ...baseSdk,
        ...partial
    });
    return {
        ...partial,
        uploadAttachment
    };
}
// src/codegen/graphql/client.ts
function carryErrors(res, data) {
    if (typeof res === "object" && res && "_error" in res && res._error && res._error instanceof Error && typeof data === "object" && data) {
        data._error = res._error;
    }
    return data;
}
function getSdk(requester) {
    return {
        accessPasses: {
            getAccessPass (variables, options) {
                return requester("whop-sdk-ts-client/sha256:fa2b3d0ff6975e2e05c1e649fb853892460355f2a4e9bd33a67ef9bcdf6ed686", "getAccessPass", "query", variables, options).then((res)=>carryErrors(res, res.accessPass));
            }
        },
        attachments: {
            getAttachment (variables, options) {
                return requester("whop-sdk-ts-client/sha256:07f48fb0c1292fda5a8dd5f54b5d1b637635a87b6012769819ebcf7795a045ba", "getAttachment", "query", variables, options).then((res)=>carryErrors(res, res.attachment));
            },
            processAttachment (variables, options) {
                return requester("whop-sdk-ts-client/sha256:396c5803051b3c9bcedd3ce310505a4f57a6b94bc190e7142e897d9aa5036ece", "processAttachment", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.mediaAnalyzeAttachment));
            },
            uploadMedia (variables, options) {
                return requester("whop-sdk-ts-client/sha256:a3d06ed16e52126d96aae83cad3400471246f37fc275e4c8f4836c98bf8e9d59", "uploadMedia", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.mediaDirectUpload));
            }
        },
        companies: {
            getCompany (variables, options) {
                return requester("whop-sdk-ts-client/sha256:e640d46816020225ad7ec377936056cabb7e8e07a88ba376e926ba18aca1cc5c", "getCompany", "query", variables, options).then((res)=>carryErrors(res, res.company));
            }
        },
        courses: {
            createAssessmentQuestion (variables, options) {
                return requester("whop-sdk-ts-client/sha256:52902016f3a8cf2b819038945ded34a0caafd80c9a867403ca36451c39f56ac6", "createAssessmentQuestion", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.createAssessmentQuestion));
            },
            createChapter (variables, options) {
                return requester("whop-sdk-ts-client/sha256:8ebe9533278b00eded622eef765baeebf70fccedcd5d60854f8777812da20311", "createChapter", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.createChapter));
            },
            createCourse (variables, options) {
                return requester("whop-sdk-ts-client/sha256:41f957dfc0e147131265e62e4b5ae6f743256f6bf7a4e28e042a3469777e9c35", "createCourse", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.createCourse));
            },
            createLesson (variables, options) {
                return requester("whop-sdk-ts-client/sha256:33069f4d2b756d6a9a2a486d0ac6d91272c9acbd9d3774c15e12d7b39f3df6f4", "createLesson", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.createLesson));
            },
            deleteAssessmentQuestionImage (variables, options) {
                return requester("whop-sdk-ts-client/sha256:07563fb79b45fd9fbe7ef7d14923014e5f3407dae067d0393b84bd6724970aaa", "deleteAssessmentQuestionImage", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.deleteAssessmentQuestionImage));
            },
            deleteChapter (variables, options) {
                return requester("whop-sdk-ts-client/sha256:021c10ea5b5f776e229d4c2cd25578b8aec3c869c898c747d4dcb889ddad32b6", "deleteChapter", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.deleteChapter));
            },
            deleteLessonAttachment (variables, options) {
                return requester("whop-sdk-ts-client/sha256:7af840d8ddbf664a04ec3da2283e9a540f68da24adedbe7a2af9718f1c70f10c", "deleteLessonAttachment", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.deleteLessonAttachment));
            },
            deleteLesson (variables, options) {
                return requester("whop-sdk-ts-client/sha256:6be8fd89af64aec7db125bac7d67bad8530cc8f5b8ee98c879351acd59aa6fac", "deleteLesson", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.deleteLesson));
            },
            getCourse (variables, options) {
                return requester("whop-sdk-ts-client/sha256:5e81c304ac7c4c19b2d07ea7c2a32b2fd8998774bf90900a81999b9077b383a1", "getCourse", "query", variables, options).then((res)=>carryErrors(res, res.course));
            },
            getLesson (variables, options) {
                return requester("whop-sdk-ts-client/sha256:372989bc0ffb7ff3c36d1325f1af4115c06205e95378a2e344d91a857e732630", "getLesson", "query", variables, options).then((res)=>carryErrors(res, res.course));
            },
            getUserLessonInteractions (variables, options) {
                return requester("whop-sdk-ts-client/sha256:6b12c8ccabe59b65d8869029d4e4e56ddbeac7256137e5e79012a3e33aa81523", "getUserLessonInteractions", "query", variables, options).then((res)=>carryErrors(res, res.course));
            },
            listCoursesForCompany (variables, options) {
                return requester("whop-sdk-ts-client/sha256:76dd2b0b09b6083392dcce8c1df423cc6e6eb290e58bdd2d830f50ef1a4828b3", "listCoursesForCompany", "query", variables, options).then((res)=>carryErrors(res, res.company));
            },
            listCoursesForExperience (variables, options) {
                return requester("whop-sdk-ts-client/sha256:a579fee2663d841a23be014b234d89eadb097dac387722dfe9d0e87911a7598e", "listCoursesForExperience", "query", variables, options).then((res)=>carryErrors(res, res.publicExperience));
            },
            markLessonAsCompleted (variables, options) {
                return requester("whop-sdk-ts-client/sha256:941178d021bd72247401d347d5dd969036579147777e0a754f5102cddc5074c7", "markLessonAsCompleted", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.markLessonAsCompleted));
            },
            moveCourse (variables, options) {
                return requester("whop-sdk-ts-client/sha256:ce7d38029113792bf1ff544db18f000732fed4db3ebc766767a367cef5691c2b", "moveCourse", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.moveCourse));
            },
            updateChapterOrder (variables, options) {
                return requester("whop-sdk-ts-client/sha256:c749c5c4907afd39ab2d3f8c44b3e65c8c9928e0cf06f8687deaa40d144a0df6", "updateChapterOrder", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.updateChapterOrder));
            },
            updateChapter (variables, options) {
                return requester("whop-sdk-ts-client/sha256:9fda8d867b07c1b31622cb73084523577519ca35822d8ce3938fa2b07efaf6e5", "updateChapter", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.updateChapter));
            },
            updateLessonOrder (variables, options) {
                return requester("whop-sdk-ts-client/sha256:8ae83382f97b182c08bf5851e3bbed05fd8269856c00b82b5577939c00e39e43", "updateLessonOrder", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.updateLessonOrder));
            },
            updateLesson (variables, options) {
                return requester("whop-sdk-ts-client/sha256:c872c79e5469f162f4de0f64ed6decc489cc3e05d66781a2f33ae1eef4d762bd", "updateLesson", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors(res, res.updateLesson));
            }
        },
        experiences: {
            getExperience (variables, options) {
                return requester("whop-sdk-ts-client/sha256:61d7778965bc84e700a681ec856251c59070ebc6b0e00b6e5c91568df734db7e", "getExperience", "query", variables, options).then((res)=>carryErrors(res, res.experience));
            },
            listUsersForExperience (variables, options) {
                return requester("whop-sdk-ts-client/sha256:85c827d8660dc2a97e8b930e213b83493ae132c00988e0f03e02c5dc99559a5a", "listUsersForExperience", "query", variables, options).then((res)=>carryErrors(res, res.publicExperience));
            }
        },
        forums: {
            listForumPostsFromForum (variables, options) {
                return requester("whop-sdk-ts-client/sha256:97a7d797f3a5f6f83bf4628cc7c586d529b90e54c0a8e193493a55b4ad05df46", "listForumPostsFromForum", "query", variables, options).then((res)=>carryErrors(res, res.feedPosts));
            }
        },
        messages: {
            listMessagesFromChat (variables, options) {
                return requester("whop-sdk-ts-client/sha256:5fdbf50fe489888e5b0a98e9fe6170584bf47ab38f87d1e0b7fce8f523513894", "listMessagesFromChat", "query", variables, options).then((res)=>carryErrors(res, res.feedPosts));
            }
        },
        users: {
            getCurrentUser (variables, options) {
                return requester("whop-sdk-ts-client/sha256:9f7cc9ff353a2778e55b674cfd5737a7dcaff19be9ac13d6f79aabd5d8ef69ff", "getCurrentUser", "query", variables, options).then((res)=>carryErrors(res, res.viewer));
            },
            getUserLedgerAccount (variables, options) {
                return requester("whop-sdk-ts-client/sha256:d7eeaf0a388395edb82220877e72a7fc91d1f06a6d89f1cfa5e56bb400d2aa49", "getUserLedgerAccount", "query", variables, options).then((res)=>carryErrors(res, res.viewer));
            },
            getUser (variables, options) {
                return requester("whop-sdk-ts-client/sha256:c6cd0172ca06b30e54b818c216ccb00023ffa4d6392becd6fb80a5a0312b1b65", "getUser", "query", variables, options).then((res)=>carryErrors(res, res.publicUser));
            }
        }
    };
}
// src/sdk/sdk-common.ts
var DEFAULT_API_ORIGIN = "https://api.whop.com";
var GQLNetworkError = class extends Error {
    constructor(e){
        const message = e instanceof Error ? e.message : typeof e === "string" ? e : "Unknown network error";
        super(message);
        if (e instanceof Error) this.stack = e.stack;
    }
};
var GQLRequestError = class extends Error {
    statusCode;
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
    isUnauthorized() {
        return this.statusCode === 401;
    }
    isForbidden() {
        return this.statusCode === 403;
    }
    isNotFound() {
        return this.statusCode === 404;
    }
    isServerError() {
        return this.statusCode >= 500;
    }
};
var GQLError = class extends Error {
    errors;
    constructor(errors){
        super(errors[0].message);
        this.errors = errors;
    }
};
async function graphqlFetch(url, operationId, operationName, operationType, variables, headersInit = {}) {
    try {
        const body = {
            operationId,
            operationType,
            operationName,
            variables
        };
        const headers = new Headers(headersInit);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");
        const urlObject = addOperationNameToUrl(url, operationName, operationId, operationType);
        const response = await fetch(urlObject, {
            method: "POST",
            body: JSON.stringify(body),
            headers
        });
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new GQLRequestError(response.status, errorMessage);
        }
        const data = await response.json();
        if (data.errors && !data.data) {
            throw new GQLError(data.errors);
        }
        if (data.errors && typeof data.data === "object" && data.data) {
            data.data._error = new GQLError(data.errors);
        }
        return data.data;
    } catch (e) {
        throw new GQLNetworkError(e);
    }
}
function addOperationNameToUrl(url, name, operationId, operationType) {
    const urlObject = new URL(url);
    let pathname = urlObject.pathname;
    if (pathname.endsWith("/")) {
        pathname = pathname.slice(0, -1);
    }
    pathname += `/${name}`;
    urlObject.pathname = pathname;
    const [clientName, opId] = operationId.split("/");
    urlObject.searchParams.set("id", opId);
    urlObject.searchParams.set("client", clientName);
    urlObject.searchParams.set("type", operationType);
    return urlObject;
}
;
var WhopWebsocketClientBase = class extends __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$tiny$2d$typed$2d$emitter$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypedEmitter"] {
    websocket = null;
    failedConnectionAttempts = 0;
    status = "disconnected";
    wantsToBeConnected = false;
    makeWebsocket() {
        throw new Error("Not implemented in base class");
    }
    connect() {
        if (this.websocket) {
            this.disconnect();
        }
        this.wantsToBeConnected = true;
        this.setStatus("connecting");
        const websocket = this.makeWebsocket();
        this.websocket = websocket;
        websocket.onopen = ()=>{
            this.setStatus("connected");
        };
        websocket.onmessage = (event)=>{
            try {
                const message = JSON.parse(event.data);
                this.emit("message", message);
                if (message.appMessage) {
                    this.emit("appMessage", message.appMessage);
                }
            } catch (error) {
                console.error("[WhopWebsocketClient] Error parsing message", event.data);
            }
        };
        websocket.onerror = (event)=>{
            console.error("[WhopWebsocketClient] Websocket error", event);
            this.setStatus("disconnected");
        };
        websocket.onclose = (event)=>{
            this.setStatus("disconnected");
        };
        return ()=>{
            this.disconnect();
        };
    }
    disconnect() {
        if (this.websocket) {
            this.websocket.onopen = null;
            this.websocket.onmessage = null;
            this.websocket.onerror = null;
            this.websocket.onclose = null;
            this.websocket.close();
            this.websocket = null;
        }
        this.wantsToBeConnected = false;
    }
    send(message) {
        if (!this.websocket) {
            throw new Error("Websocket not connected");
        }
        this.websocket.send(JSON.stringify(message));
    }
    broadcast({ message, target }) {
        this.send({
            broadcastAppMessage: {
                channel: convertBroadcastTargetToProtoChannel(target),
                json: message
            }
        });
    }
    setStatus(status) {
        if (status === this.status) return;
        this.status = status;
        if (status === "disconnected") {
            const backoff = this.calculateBackoff();
            this.failedConnectionAttempts++;
            setTimeout(()=>{
                if (this.wantsToBeConnected) {
                    this.connect();
                }
            }, backoff);
            this.emit("disconnect");
        }
        if (status === "connected") {
            this.failedConnectionAttempts = 0;
            this.emit("connect");
        }
        this.emit("connectionStatus", status);
    }
    calculateBackoff() {
        return Math.min(50 * 2 ** this.failedConnectionAttempts, 1e3 * 60);
    }
};
function convertBroadcastTargetToProtoChannel(target) {
    if (target === "everyone") {
        return {
            type: "APP",
            id: "[app_id]"
        };
    }
    if ("experienceId" in target) {
        return {
            type: "APP",
            id: `[app_id]_${target.experienceId}`
        };
    }
    if ("customId" in target) {
        return {
            type: "APP",
            id: `[app_id]_c_${target.customId}`
        };
    }
    throw new Error("Invalid broadcast target");
}
// src/websockets/client.browser.ts
var WhopWebsocketClientBrowser = class extends WhopWebsocketClientBase {
    options;
    constructor(options){
        super();
        this.options = options;
    }
    makeWebsocket() {
        const path = "/_whop/ws/v1/websockets/connect";
        const searchParams = new URLSearchParams();
        addChannelIds(searchParams, "join_experience", this.options.joinExperience);
        addChannelIds(searchParams, "join_custom", this.options.joinCustom);
        addChannelIds(searchParams, "join_public", this.options.joinPublic);
        const url = new URL(path, window.location.origin);
        url.protocol = url.protocol.replace("http", "ws");
        url.search = searchParams.toString();
        return new WebSocket(url.toString());
    }
};
function addChannelIds(searchParams, key, channels) {
    if (!channels) {
        return;
    }
    if (typeof channels === "string" && channels.length > 0) {
        searchParams.set(key, channels);
        return;
    }
    for (const channel of channels){
        searchParams.append(key, channel);
    }
}
function makeConnectToWebsocketFunction() {
    return function connectToWebsocket(options) {
        return new WhopWebsocketClientBrowser(options);
    };
}
// src/sdk/client-sdk-shared.ts
function makeWhopClientSdk({ uploadFile }) {
    return function WhopClientSdk(options) {
        const baseSdk = getSdk(makeRequester({
            apiPath: "/_whop/public-graphql",
            ...options
        }));
        const fileSdk = fileSdkExtensions(baseSdk, uploadFile);
        const websocketClient = makeConnectToWebsocketFunction();
        const sdk = {
            ...baseSdk,
            attachments: {
                ...baseSdk.attachments,
                ...fileSdk
            },
            websockets: {
                client: websocketClient
            }
        };
        return sdk;
    };
}
function makeRequester(apiOptions) {
    const endpoint = getEndpoint(apiOptions);
    return async function fetcher(operationId, operationName, operationType, vars, options) {
        const headers = new Headers(options?.headers);
        return graphqlFetch(endpoint, operationId, operationName, operationType, vars, headers);
    };
}
function getEndpoint(apiOptions) {
    if (typeof document === "undefined" && !apiOptions.apiOrigin) {
        throw new Error("WhopApi.client() is only available in the browser");
    }
    const url = new URL(apiOptions.apiPath ?? "/public-graphql", apiOptions.apiOrigin ?? window.location.origin);
    return url.href;
}
// src/codegen/graphql/server.ts
function carryErrors2(res, data) {
    if (typeof res === "object" && res && "_error" in res && res._error && res._error instanceof Error && typeof data === "object" && data) {
        data._error = res._error;
    }
    return data;
}
function getSdk2(requester) {
    return {
        accessPasses: {
            createAccessPass (variables, options) {
                return requester("whop-sdk-ts-server/sha256:20ae526780e39f4766202cec9041775e39dcf12c6254d9ce3c80ceeed146ad9c", "createAccessPass", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createAccessPass));
            },
            deleteAccessPass (variables, options) {
                return requester("whop-sdk-ts-server/sha256:cc4cb9f78f298bfc5067091adca56a07833d22f4011255aedd317a9c78b2a3ba", "deleteAccessPass", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.deleteAccessPass));
            },
            getAccessPass (variables, options) {
                return requester("whop-sdk-ts-server/sha256:fa2b3d0ff6975e2e05c1e649fb853892460355f2a4e9bd33a67ef9bcdf6ed686", "getAccessPass", "query", variables, options).then((res)=>carryErrors2(res, res.accessPass));
            },
            updateAccessPass (variables, options) {
                return requester("whop-sdk-ts-server/sha256:45e0d72fec2c61a8763e7febcdfeea44c780fb657358614e5d6fa18d68b46aed", "updateAccessPass", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.updateAccessPass));
            }
        },
        access: {
            checkIfUserHasAccessToAccessPass (variables, options) {
                return requester("whop-sdk-ts-server/sha256:a5ee1715113ab68b87dcfd5b578b6c20d1ca1fe50d8c0e2ec43e462a9b86632d", "checkIfUserHasAccessToAccessPass", "query", variables, options).then((res)=>carryErrors2(res, res.hasAccessToAccessPass));
            },
            checkIfUserHasAccessToCompany (variables, options) {
                return requester("whop-sdk-ts-server/sha256:b894321dc004894f993e91f5e7451554b0ae8af7da950a5c84ac69180599edc2", "checkIfUserHasAccessToCompany", "query", variables, options).then((res)=>carryErrors2(res, res.hasAccessToCompany));
            },
            checkIfUserHasAccessToExperience (variables, options) {
                return requester("whop-sdk-ts-server/sha256:b16d7fe717171fb936dfb6de679558e149f5070bbe25ade44e38af83c330ad71", "checkIfUserHasAccessToExperience", "query", variables, options).then((res)=>carryErrors2(res, res.hasAccessToExperience));
            }
        },
        affiliates: {
            createAffiliate (variables, options) {
                return requester("whop-sdk-ts-server/sha256:a8aab2d61c40493e5fe0c03979c9f252412d37ac4c4034d4dfc9391d4f71368d", "createAffiliate", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createAffiliate));
            },
            getAffiliate (variables, options) {
                return requester("whop-sdk-ts-server/sha256:0361bff066bcb4ec9d86ae9ce45d812b5b0978252fbeb347418e16c8d6c56de2", "getAffiliate", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listAffiliates (variables, options) {
                return requester("whop-sdk-ts-server/sha256:85622f8b63f7b6e23dbaa6c04a58e3fb5e3237cb03fa112ee17c98ebf925285c", "listAffiliates", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            updateAffiliate (variables, options) {
                return requester("whop-sdk-ts-server/sha256:781a4e1b84f64748e882eb8f5e09aa3962fdbafee01874b3eb96fe1fbb261f1d", "updateAffiliate", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.updateAffiliate));
            }
        },
        apps: {
            createAppBuild (variables, options) {
                return requester("whop-sdk-ts-server/sha256:221275dcd40898079c1e7bc1510b364a487581d6cdfc1a9524da74f2f82689cc", "createAppBuild", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createAppBuild));
            },
            createApp (variables, options) {
                return requester("whop-sdk-ts-server/sha256:be663b827a8dabcf7b9cbd0f65e80972811c1bc86009cc6a420b66d8e1c36f40", "createApp", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createApp));
            },
            getApp (variables, options) {
                return requester("whop-sdk-ts-server/sha256:07248adff9447a8ddc20c810fbb780eddb10f9c3b4de9c2e8cc125de5735c9ef", "getApp", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listApps (variables, options) {
                return requester("whop-sdk-ts-server/sha256:46bbea222f2bb22c7622d0554383c50246d97daf9dc92bb54790b6a330810628", "listApps", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            promoteAppBuild (variables, options) {
                return requester("whop-sdk-ts-server/sha256:dea1f52e9a4e332c258517b6bd0905ea8c2a738d861a9e9bb648f7ecead843a9", "promoteAppBuild", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.promoteAppBuildToProduction));
            },
            unassignAppBuild (variables, options) {
                return requester("whop-sdk-ts-server/sha256:fb574bc621e2dee1d3bebddf5a6f3b438337778e9e66370a9dbe8163dc7c23bc", "unassignAppBuild", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.unassignProductionAppBuild));
            },
            updateAppPermissions (variables, options) {
                return requester("whop-sdk-ts-server/sha256:20a225127a6164553f5eebef17ac8447e8f8a4f220483f4922874def2a7fe423", "updateAppPermissions", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.updateAppPermissionRequirements));
            },
            updateApp (variables, options) {
                return requester("whop-sdk-ts-server/sha256:b8d41fdc2d5d3c0cd850bc4f8dedc81a3d65a59da3cc70b50397aaba2be3894a", "updateApp", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.updateApp));
            }
        },
        attachments: {
            getAttachment (variables, options) {
                return requester("whop-sdk-ts-server/sha256:07f48fb0c1292fda5a8dd5f54b5d1b637635a87b6012769819ebcf7795a045ba", "getAttachment", "query", variables, options).then((res)=>carryErrors2(res, res.attachment));
            },
            processAttachment (variables, options) {
                return requester("whop-sdk-ts-server/sha256:396c5803051b3c9bcedd3ce310505a4f57a6b94bc190e7142e897d9aa5036ece", "processAttachment", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.mediaAnalyzeAttachment));
            },
            uploadMedia (variables, options) {
                return requester("whop-sdk-ts-server/sha256:a3d06ed16e52126d96aae83cad3400471246f37fc275e4c8f4836c98bf8e9d59", "uploadMedia", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.mediaDirectUpload));
            }
        },
        companies: {
            getCompanyLedgerAccount (variables, options) {
                return requester("whop-sdk-ts-server/sha256:38c83c1105b29a010208830b29d38af3d87a885b9c54a3da65d6dd2749128773", "getCompanyLedgerAccount", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            getCompany (variables, options) {
                return requester("whop-sdk-ts-server/sha256:e640d46816020225ad7ec377936056cabb7e8e07a88ba376e926ba18aca1cc5c", "getCompany", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            getMember (variables, options) {
                return requester("whop-sdk-ts-server/sha256:e2628bcd1daff66d27443145965cc34f26a76da715d9781174316be703b0ac02", "getMember", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listAccessPasses (variables, options) {
                return requester("whop-sdk-ts-server/sha256:d3c047dfcf88fae7603b04a3f46c9a7abd6638c13591ac64d7f86226a5edb438", "listAccessPasses", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listAuthorizedUsers (variables, options) {
                return requester("whop-sdk-ts-server/sha256:c8c7d8e926bba8ecd46f9976cc1ce265ac666570706606295931f19c622c50dc", "listAuthorizedUsers", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listMembers (variables, options) {
                return requester("whop-sdk-ts-server/sha256:d71ca5f1a332e7b42f405eb284aaf5d8ba094c99fd6a9d5ac503dff9a927d301", "listMembers", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listMemberships (variables, options) {
                return requester("whop-sdk-ts-server/sha256:cfa788e5edcaf72ae9cb749035cf7bca20fd380c7d0d548c02d6ae978262f5cf", "listMemberships", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listPlans (variables, options) {
                return requester("whop-sdk-ts-server/sha256:51d610ed0e4994b2c6f3514f9f478fb301366adc33c3e09166b3de3801c9c26a", "listPlans", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listWaitlistEntries (variables, options) {
                return requester("whop-sdk-ts-server/sha256:14e1c30b9e364214d378cdb0b8ebf929397295e3644ffc22205ebe915b79e79f", "listWaitlistEntries", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            }
        },
        courses: {
            createAssessmentQuestion (variables, options) {
                return requester("whop-sdk-ts-server/sha256:52902016f3a8cf2b819038945ded34a0caafd80c9a867403ca36451c39f56ac6", "createAssessmentQuestion", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createAssessmentQuestion));
            },
            createChapter (variables, options) {
                return requester("whop-sdk-ts-server/sha256:8ebe9533278b00eded622eef765baeebf70fccedcd5d60854f8777812da20311", "createChapter", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createChapter));
            },
            createCourse (variables, options) {
                return requester("whop-sdk-ts-server/sha256:41f957dfc0e147131265e62e4b5ae6f743256f6bf7a4e28e042a3469777e9c35", "createCourse", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createCourse));
            },
            createLesson (variables, options) {
                return requester("whop-sdk-ts-server/sha256:33069f4d2b756d6a9a2a486d0ac6d91272c9acbd9d3774c15e12d7b39f3df6f4", "createLesson", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createLesson));
            },
            deleteAssessmentQuestionImage (variables, options) {
                return requester("whop-sdk-ts-server/sha256:07563fb79b45fd9fbe7ef7d14923014e5f3407dae067d0393b84bd6724970aaa", "deleteAssessmentQuestionImage", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.deleteAssessmentQuestionImage));
            },
            deleteChapter (variables, options) {
                return requester("whop-sdk-ts-server/sha256:021c10ea5b5f776e229d4c2cd25578b8aec3c869c898c747d4dcb889ddad32b6", "deleteChapter", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.deleteChapter));
            },
            deleteLessonAttachment (variables, options) {
                return requester("whop-sdk-ts-server/sha256:7af840d8ddbf664a04ec3da2283e9a540f68da24adedbe7a2af9718f1c70f10c", "deleteLessonAttachment", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.deleteLessonAttachment));
            },
            deleteLesson (variables, options) {
                return requester("whop-sdk-ts-server/sha256:6be8fd89af64aec7db125bac7d67bad8530cc8f5b8ee98c879351acd59aa6fac", "deleteLesson", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.deleteLesson));
            },
            getCourse (variables, options) {
                return requester("whop-sdk-ts-server/sha256:5e81c304ac7c4c19b2d07ea7c2a32b2fd8998774bf90900a81999b9077b383a1", "getCourse", "query", variables, options).then((res)=>carryErrors2(res, res.course));
            },
            getLesson (variables, options) {
                return requester("whop-sdk-ts-server/sha256:372989bc0ffb7ff3c36d1325f1af4115c06205e95378a2e344d91a857e732630", "getLesson", "query", variables, options).then((res)=>carryErrors2(res, res.course));
            },
            getUserLessonInteractions (variables, options) {
                return requester("whop-sdk-ts-server/sha256:6b12c8ccabe59b65d8869029d4e4e56ddbeac7256137e5e79012a3e33aa81523", "getUserLessonInteractions", "query", variables, options).then((res)=>carryErrors2(res, res.course));
            },
            listCoursesForCompany (variables, options) {
                return requester("whop-sdk-ts-server/sha256:76dd2b0b09b6083392dcce8c1df423cc6e6eb290e58bdd2d830f50ef1a4828b3", "listCoursesForCompany", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listCoursesForExperience (variables, options) {
                return requester("whop-sdk-ts-server/sha256:a579fee2663d841a23be014b234d89eadb097dac387722dfe9d0e87911a7598e", "listCoursesForExperience", "query", variables, options).then((res)=>carryErrors2(res, res.publicExperience));
            },
            markLessonAsCompleted (variables, options) {
                return requester("whop-sdk-ts-server/sha256:941178d021bd72247401d347d5dd969036579147777e0a754f5102cddc5074c7", "markLessonAsCompleted", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.markLessonAsCompleted));
            },
            moveCourse (variables, options) {
                return requester("whop-sdk-ts-server/sha256:ce7d38029113792bf1ff544db18f000732fed4db3ebc766767a367cef5691c2b", "moveCourse", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.moveCourse));
            },
            updateChapterOrder (variables, options) {
                return requester("whop-sdk-ts-server/sha256:c749c5c4907afd39ab2d3f8c44b3e65c8c9928e0cf06f8687deaa40d144a0df6", "updateChapterOrder", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.updateChapterOrder));
            },
            updateChapter (variables, options) {
                return requester("whop-sdk-ts-server/sha256:9fda8d867b07c1b31622cb73084523577519ca35822d8ce3938fa2b07efaf6e5", "updateChapter", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.updateChapter));
            },
            updateLessonOrder (variables, options) {
                return requester("whop-sdk-ts-server/sha256:8ae83382f97b182c08bf5851e3bbed05fd8269856c00b82b5577939c00e39e43", "updateLessonOrder", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.updateLessonOrder));
            },
            updateLesson (variables, options) {
                return requester("whop-sdk-ts-server/sha256:c872c79e5469f162f4de0f64ed6decc489cc3e05d66781a2f33ae1eef4d762bd", "updateLesson", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.updateLesson));
            }
        },
        experiences: {
            getExperience (variables, options) {
                return requester("whop-sdk-ts-server/sha256:61d7778965bc84e700a681ec856251c59070ebc6b0e00b6e5c91568df734db7e", "getExperience", "query", variables, options).then((res)=>carryErrors2(res, res.experience));
            },
            listAccessPassesForExperience (variables, options) {
                return requester("whop-sdk-ts-server/sha256:699621f62be7675bfaf9fc49cb6d7abfe244bf691aee274cb492036f0b59bddc", "listAccessPassesForExperience", "query", variables, options).then((res)=>carryErrors2(res, res.experience));
            },
            listExperiences (variables, options) {
                return requester("whop-sdk-ts-server/sha256:6ca8515118d4710204bb2e32ea020bb98de8ea1cada4929ecfe7cae606cf6e79", "listExperiences", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listUsersForExperience (variables, options) {
                return requester("whop-sdk-ts-server/sha256:85c827d8660dc2a97e8b930e213b83493ae132c00988e0f03e02c5dc99559a5a", "listUsersForExperience", "query", variables, options).then((res)=>carryErrors2(res, res.publicExperience));
            }
        },
        forums: {
            createForumPost (variables, options) {
                return requester("whop-sdk-ts-server/sha256:e6253ed15def017eef4bc2e2f8b01ecd9cf480b5c54fffed439d0afe01a864f2", "createForumPost", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createForumPost));
            },
            findOrCreateForum (variables, options) {
                return requester("whop-sdk-ts-server/sha256:5219219796ebdeb29023d098bd9498cf8c64b3536dc9d42cbc4e19708e0b317d", "findOrCreateForum", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createForum));
            },
            listForumPostsFromForum (variables, options) {
                return requester("whop-sdk-ts-server/sha256:97a7d797f3a5f6f83bf4628cc7c586d529b90e54c0a8e193493a55b4ad05df46", "listForumPostsFromForum", "query", variables, options).then((res)=>carryErrors2(res, res.feedPosts));
            }
        },
        invoices: {
            createInvoice (variables, options) {
                return requester("whop-sdk-ts-server/sha256:58c3f4ebbb92ebf44d07d781d8f27250f497516c0b492f1ad155ee4f00c64cca", "createInvoice", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createInvoice));
            },
            getInvoice (variables, options) {
                return requester("whop-sdk-ts-server/sha256:d38c77f13bb55a0b427a0e5f5c5f4121c9f2679a7ac5b35a6c98af6d9e819702", "getInvoice", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listInvoices (variables, options) {
                return requester("whop-sdk-ts-server/sha256:3cb820ba6eab6d1557eb842140f5b54701c6046f51e663f8a12fdff7142f1941", "listInvoices", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            }
        },
        messages: {
            findOrCreateChat (variables, options) {
                return requester("whop-sdk-ts-server/sha256:f69684c08f79192b7a4722a3c24a347fd0074e04e1c940517e54b52a9c27f40c", "findOrCreateChat", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createChat));
            },
            listDirectMessageConversations (variables, options) {
                return requester("whop-sdk-ts-server/sha256:ea4457aace3d29d8c376dd9de3629cee00d4a76ff0fc9b9d51b6ffeab1cc6ead", "listDirectMessageConversations", "query", variables, options).then((res)=>carryErrors2(res, res.myDmsChannelsV2));
            },
            listMessagesFromChat (variables, options) {
                return requester("whop-sdk-ts-server/sha256:5fdbf50fe489888e5b0a98e9fe6170584bf47ab38f87d1e0b7fce8f523513894", "listMessagesFromChat", "query", variables, options).then((res)=>carryErrors2(res, res.feedPosts));
            },
            sendDirectMessageToUser (variables, options) {
                return requester("whop-sdk-ts-server/sha256:f538092a21961a949a75e07b02d58dc05666535c8c8e03aed867fd82d98a58d4", "sendDirectMessageToUser", "mutation", variables, options).then((res)=>carryErrors2(res, res.sendMessage));
            },
            sendMessageToChat (variables, options) {
                return requester("whop-sdk-ts-server/sha256:4c25b180736d2868e65ab97791a12bb22e80d2bc03f29ecba86ccd1d91da292c", "sendMessageToChat", "mutation", variables, options).then((res)=>carryErrors2(res, res.sendMessage));
            }
        },
        notifications: {
            sendPushNotification (variables, options) {
                return requester("whop-sdk-ts-server/sha256:6239cbdb659f0698ed81ca9533740337b4d2d44e25e22297188d7d1e1a7037d2", "sendPushNotification", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.sendNotification));
            }
        },
        payments: {
            chargeUser (variables, options) {
                return requester("whop-sdk-ts-server/sha256:2392cef9bb6e08d243f102a52c4a6a6e6bd9371e2fced2ad598b2dc14685af81", "chargeUser", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.chargeUser));
            },
            createCheckoutSession (variables, options) {
                return requester("whop-sdk-ts-server/sha256:498eba2f4b9b6b8fe4ed5f93423af054ea1c4995bf2f3258089c40b68a4919e8", "createCheckoutSession", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createCheckoutSession));
            },
            listReceiptsForCompany (variables, options) {
                return requester("whop-sdk-ts-server/sha256:4b5163aa1e6398851da21ce465640243418d36bb26e7b1a87287cddcf677e6ca", "listReceiptsForCompany", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            payUser (variables, options) {
                return requester("whop-sdk-ts-server/sha256:d8cbac8b275a7c41e05ab4daa01084b0e54c31c6b5375261f8aee241e5f6c794", "payUser", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.transferFunds));
            }
        },
        promoCodes: {
            createPromoCode (variables, options) {
                return requester("whop-sdk-ts-server/sha256:c80f3d5230cb85c4e47cd1521e607c1f58cf393dfc73fce813bc584acd3e0f4b", "createPromoCode", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createPromoCode));
            },
            deletePromoCode (variables, options) {
                return requester("whop-sdk-ts-server/sha256:bcd719e36f0a392a4aca1cd2bcaa758327cba282531dcf18220f24cc92d6210c", "deletePromoCode", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.deletePromoCode));
            },
            getPromoCode (variables, options) {
                return requester("whop-sdk-ts-server/sha256:29fb69c7df1cb36af0db92cc3951cc84fbbaad8166733158667f0136483bb0ca", "getPromoCode", "query", variables, options).then((res)=>carryErrors2(res, res.promoCode));
            },
            listPromoCodes (variables, options) {
                return requester("whop-sdk-ts-server/sha256:5722ed2369ad9f1c62eb2579de00b765a7b5857e9340f366fb5d6612fb97633f", "listPromoCodes", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            }
        },
        users: {
            banUser (variables, options) {
                return requester("whop-sdk-ts-server/sha256:cb1bc4d8fada30e5cecd68182f98129c24da6f252b60829e5b680b1c45b95be3", "banUser", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.banUser));
            },
            getCurrentUser (variables, options) {
                return requester("whop-sdk-ts-server/sha256:9f7cc9ff353a2778e55b674cfd5737a7dcaff19be9ac13d6f79aabd5d8ef69ff", "getCurrentUser", "query", variables, options).then((res)=>carryErrors2(res, res.viewer));
            },
            getUserLedgerAccount (variables, options) {
                return requester("whop-sdk-ts-server/sha256:d7eeaf0a388395edb82220877e72a7fc91d1f06a6d89f1cfa5e56bb400d2aa49", "getUserLedgerAccount", "query", variables, options).then((res)=>carryErrors2(res, res.viewer));
            },
            getUser (variables, options) {
                return requester("whop-sdk-ts-server/sha256:c6cd0172ca06b30e54b818c216ccb00023ffa4d6392becd6fb80a5a0312b1b65", "getUser", "query", variables, options).then((res)=>carryErrors2(res, res.publicUser));
            },
            listUserSocials (variables, options) {
                return requester("whop-sdk-ts-server/sha256:37ac821ca48a89c91a53f91cbba77d0ffa401807815a88e1e1d25819baf8d877", "listUserSocials", "query", variables, options).then((res)=>carryErrors2(res, res.publicUser));
            },
            muteUser (variables, options) {
                return requester("whop-sdk-ts-server/sha256:57e050f6c8afa900a0e947157ee629d1435bfb8455ee0aebcc27d82d43ee26bb", "muteUser", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createCompanyMutedUser));
            },
            unbanUser (variables, options) {
                return requester("whop-sdk-ts-server/sha256:fa0ff56a45a8dc977e12814ad25bee498fdb6adc280ce30722df8ff4f4c1a4d8", "unbanUser", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.unbanUser));
            },
            unmuteUser (variables, options) {
                return requester("whop-sdk-ts-server/sha256:9c1f64ede76760c37850648c4541d50186d28dd656e4f69dd94501ae3babf8c7", "unmuteUser", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.deleteCompanyMutedUser));
            }
        },
        webhooks: {
            createWebhook (variables, options) {
                return requester("whop-sdk-ts-server/sha256:203020195489ea56d6c664b7c4483367ba438db78f5ab057ccb8bcb3d6804186", "createWebhook", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.createWebhook));
            },
            deleteWebhook (variables, options) {
                return requester("whop-sdk-ts-server/sha256:84d542a9790c9ba9da706cee4cadeb8932fab37daf23775489066ca6f5ead1f2", "deleteWebhook", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.deleteWebhook));
            },
            getWebhook (variables, options) {
                return requester("whop-sdk-ts-server/sha256:c8b6985c11fe9dafc0117d6ae57b27a8331427bf93844dbedf6376bc51800545", "getWebhook", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            listWebhooks (variables, options) {
                return requester("whop-sdk-ts-server/sha256:eef881aaf99c3cad84eb3b113552d3272712562ce13cc487b6a38c6099ee4498", "listWebhooks", "query", variables, options).then((res)=>carryErrors2(res, res.company));
            },
            testWebhook (variables, options) {
                return requester("whop-sdk-ts-server/sha256:cc8b4c644a503d29ebb1c62f812b2292a83298813d5d1ce0a66f667d27039e4c", "testWebhook", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.testWebhookV2));
            },
            updateWebhook (variables, options) {
                return requester("whop-sdk-ts-server/sha256:362bc60c363078102712be7cd0483cfa5ed01a745046a041b98dc3846100eaf3", "updateWebhook", "mutation", {
                    input: variables
                }, options).then((res)=>carryErrors2(res, res.updateWebhook));
            }
        }
    };
}
// src/oauth/index.ts
var WhopOAuth = class _WhopOAuth {
    constructor(appId, appApiKey, apiOrigin = "https://api.whop.com"){
        this.appId = appId;
        this.appApiKey = appApiKey;
        this.apiOrigin = apiOrigin;
    }
    static OAUTH_URL = "https://whop.com/oauth/";
    /**
   * Get an authorization url to start the OAuth2 flow.
   *
   * ```ts
   * const { url, state } = whopOAuth.getAuthorizationUrl({
   * 	redirectUri: "http://localhost:3000/api/oauth/callback",
   * 	scope: ["read_user"],
   * })
   * ```
   */ getAuthorizationUrl({ state = crypto.randomUUID(), redirectUri, scope = [
        "read_user"
    ] }) {
        const oAuthUrl = new URL(_WhopOAuth.OAUTH_URL);
        oAuthUrl.searchParams.set("client_id", this.appId);
        oAuthUrl.searchParams.set("response_type", "code");
        oAuthUrl.searchParams.set("scope", scope.join(" "));
        oAuthUrl.searchParams.set("state", state);
        if (redirectUri instanceof URL) {
            oAuthUrl.searchParams.set("redirect_uri", redirectUri.toString());
        } else {
            oAuthUrl.searchParams.set("redirect_uri", redirectUri);
        }
        return {
            url: oAuthUrl.toString(),
            state
        };
    }
    /**
   * Exchange a code for a token.
   *
   * ```ts
   * const authResponse = await whopOAuth.exchangeCode({
   * 	code: "1234",
   * 	redirectUri: "http://localhost:3000/api/oauth/callback",
   * })
   *
   * if (!authResponse.ok) {
   * 	throw new Error(`Failed to exchange code for token. Status: ${authResponse.code}`);
   * }
   *
   * const { access_token } = authResponse.tokens;
   * ```
   */ async exchangeCode({ code, redirectUri }) {
        const resolvedRedirectUri = redirectUri instanceof URL ? redirectUri.toString() : redirectUri;
        const tokensEndpoint = new URL("/api/oauth/token", this.apiOrigin);
        const tokensResponse = await fetch(tokensEndpoint, {
            method: "POST",
            body: JSON.stringify({
                code,
                client_id: this.appId,
                client_secret: this.appApiKey,
                grant_type: "authorization_code",
                redirect_uri: resolvedRedirectUri
            }),
            headers: {
                "content-type": "application/json",
                "cache-control": "no-cache",
                pragma: "no-cache"
            },
            cache: "no-store"
        });
        if (!tokensResponse.ok) {
            return {
                ok: false,
                code: tokensResponse.status,
                raw: tokensResponse
            };
        }
        const tokens = await tokensResponse.json();
        return {
            ok: true,
            tokens
        };
    }
    /**
   * Get an Auth.js provider for the Whop OAuth2 API.
   *
   * Works with any Auth.js compatible client:
   * - [`next-auth`](https://www.npmjs.com/package/next-auth)
   * - [`@auth/qwik`](https://www.npmjs.com/package/@auth/qwik)
   * - [`@auth/sveltekit`](https://www.npmjs.com/package/@auth/sveltekit)
   * - [`@auth/express`](https://www.npmjs.com/package/@auth/express)
   * - etc.
   *
   * ```ts
   * const WhopProvider = whopOAuth.authJsProvider({
   * 	scope: ["read_user"],
   * })
   *
   * export const auth = Auth({
   *		providers: [WhopProvider],
   *	});
   * ```
   */ authJsProvider({ scope = [
        "read_user"
    ] }) {
        return {
            id: "whop",
            name: "Whop",
            type: "oauth",
            clientId: this.appId,
            clientSecret: this.appApiKey,
            authorization: {
                url: _WhopOAuth.OAUTH_URL,
                params: {
                    scope: scope.join(" ")
                }
            },
            checks: [
                "state"
            ],
            token: new URL("/api/oauth/token", this.apiOrigin).href,
            userinfo: new URL("/api/v5/me", this.apiOrigin).href,
            profile (profile) {
                return {
                    id: profile.id,
                    name: profile.username || profile.email,
                    email: profile.email,
                    image: profile.profile_pic_url
                };
            }
        };
    }
};
// src/websockets/server.ts
var DEFAULT_WEBSOCKET_ORIGIN = "https://ws-prod.whop.com";
function sendWebsocketMessageFunction(apiOptions) {
    const origin = apiOptions.websocketOrigin ?? DEFAULT_WEBSOCKET_ORIGIN;
    const path = "/v1/websockets/send";
    const url = new URL(path, origin);
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", `Bearer ${apiOptions.appApiKey}`);
    return async function SendWebsocketMessage(input) {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(input),
            headers
        });
        if (!response.ok) {
            const error = await response.text();
            throw new Error(`Failed to send websocket message. Code: ${response.status}. Message: ${error}`);
        }
        const data = await response.json();
        if (!data.ok) {
            throw new Error("Failed to send websocket message");
        }
    };
}
// src/websockets/client.server.ts
var WhopWebsocketClientServer = class extends WhopWebsocketClientBase {
    keys;
    constructor(keys){
        super();
        this.keys = keys;
    }
    makeWebsocket() {
        const path = "/v1/websockets/connect";
        const origin = this.keys.websocketOrigin ?? DEFAULT_WEBSOCKET_ORIGIN;
        const url = new URL(path, origin);
        url.protocol = url.protocol.replace("http", "ws");
        const headers = {
            Authorization: `Bearer ${this.keys.appApiKey}`,
            "x-on-behalf-of": this.keys.onBehalfOfUserId
        };
        return new WebSocket(url, {
            headers
        });
    }
};
function makeConnectToWebsocketFunction2(options) {
    return function connectToWebsocket() {
        return new WhopWebsocketClientServer(options);
    };
}
// src/sdk/server-sdk-shared.ts
function BaseWhopServerSdk(options, uploadFile) {
    const baseSdk = getSdk2(makeRequester2(options));
    const sendWebsocketMessage = sendWebsocketMessageFunction(options);
    const websocketClient = makeConnectToWebsocketFunction2(options);
    const fileSdk = fileSdkExtensions(baseSdk, uploadFile);
    const oauth = new WhopOAuth(options.appId, options.appApiKey, options.apiOrigin);
    const verifyUserToken2 = makeUserTokenVerifier({
        appId: options.appId,
        dontThrow: false
    });
    return {
        ...baseSdk,
        attachments: {
            ...baseSdk.attachments,
            ...fileSdk
        },
        websockets: {
            sendMessage: sendWebsocketMessage,
            client: websocketClient
        },
        oauth,
        verifyUserToken: verifyUserToken2
    };
}
function makeWhopServerSdk({ uploadFile }) {
    return function WhopServerSdk(options) {
        const baseSdk = BaseWhopServerSdk(options, uploadFile);
        return {
            ...baseSdk,
            withUser: (userId)=>WhopServerSdk({
                    ...options,
                    onBehalfOfUserId: userId
                }),
            withCompany: (companyId)=>WhopServerSdk({
                    ...options,
                    companyId
                })
        };
    };
}
function makeRequester2(apiOptions) {
    const endpoint = getEndpoint2(apiOptions);
    const headers = getHeaders(apiOptions);
    return async function fetcher(operationId, operationName, operationType, vars, options) {
        const customHeaders = new Headers(options?.headers);
        const actualHeaders = new Headers(headers);
        for (const [key, value] of customHeaders.entries()){
            actualHeaders.set(key, value);
        }
        return graphqlFetch(endpoint, operationId, operationName, operationType, vars, actualHeaders);
    };
}
function getEndpoint2(apiOptions) {
    const url = new URL(apiOptions.apiPath ?? "/public-graphql", apiOptions.apiOrigin ?? DEFAULT_API_ORIGIN);
    return url.href;
}
function getHeaders(options) {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${options.appApiKey}`);
    if (options.onBehalfOfUserId) headers.set("x-on-behalf-of", options.onBehalfOfUserId);
    if (options.companyId) headers.set("x-company-id", options.companyId);
    return headers;
}
;
 //# sourceMappingURL=chunk-Y2CEOSBS.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/dist/index.node.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhopClientSdk",
    ()=>WhopClientSdk,
    "WhopServerSdk",
    ()=>WhopServerSdk
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$dist$2f$chunk$2d$Y2CEOSBS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@whop/api/dist/chunk-Y2CEOSBS.mjs [app-ssr] (ecmascript)");
// src/attachments/upload-part-node.ts
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
;
;
;
async function uploadPartImpl({ url, fullData, partNumber, headers, onProgress, signal }) {
    const offset = (partNumber - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$dist$2f$chunk$2d$Y2CEOSBS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MULTIPART_UPLOAD_CHUNK_SIZE"];
    const data = fullData.slice(offset, Math.min(offset + __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$dist$2f$chunk$2d$Y2CEOSBS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MULTIPART_UPLOAD_CHUNK_SIZE"], fullData.size));
    signal?.throwIfAborted();
    return new Promise((resolve, reject)=>{
        const fullURL = new URL(url);
        const req = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__["request"])(fullURL, {
            method: "PUT",
            headers: {
                ...headers,
                host: fullURL.host,
                "content-length": data.size.toString()
            },
            signal
        });
        let uploadedBytes = 0;
        req.on("response", async (res)=>{
            const statusCode = res.statusCode ?? 0;
            if (statusCode >= 200 && statusCode < 300) {
                const etag = res.headers.etag;
                if (!etag) {
                    reject(new Error("Missing etag on upload response"));
                    return;
                }
                resolve(etag.slice(1, -1));
            } else {
                let chunks = "";
                for await (const chunk of res){
                    chunks += chunk.toString();
                }
                reject(new Error(`Failed to upload part with ${statusCode}: ${res.statusMessage}`, {
                    cause: chunks
                }));
            }
        });
        req.on("error", (error)=>{
            reject(error);
        });
        req.on("drain", ()=>{
            onProgress?.({
                total: data.size,
                loaded: uploadedBytes
            });
        });
        __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["Readable"].fromWeb(data.stream()).on("data", (chunk)=>{
            uploadedBytes += chunk.length;
            onProgress?.({
                total: data.size,
                loaded: uploadedBytes
            });
        }).pipe(req);
        onProgress?.({
            total: data.size,
            loaded: 0
        });
    });
}
// src/sdk/client-sdk-node.ts
var uploadFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$dist$2f$chunk$2d$Y2CEOSBS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeUploadAttachmentFunction"])({
    uploadPart: uploadPartImpl
});
var sdk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$dist$2f$chunk$2d$Y2CEOSBS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeWhopClientSdk"])({
    uploadFile
});
function WhopClientSdk(options) {
    return sdk(options);
}
// src/sdk/server-sdk-node.ts
var uploadFile2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$dist$2f$chunk$2d$Y2CEOSBS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeUploadAttachmentFunction"])({
    uploadPart: uploadPartImpl
});
var sdk2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$whop$2f$api$2f$dist$2f$chunk$2d$Y2CEOSBS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeWhopServerSdk"])({
    uploadFile: uploadFile2
});
function WhopServerSdk(options) {
    return sdk2(options);
}
;
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = ({ client, children })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        client.mount();
        return ()=>{
            client.unmount();
        };
    }, [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HydrationBoundary",
    ()=>HydrationBoundary
]);
// src/HydrationBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/hydration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
var HydrationBoundary = ({ children, options = {}, state, queryClient })=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const optionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](options);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        optionsRef.current = options;
    });
    const hydrationQueue = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (state) {
            if (typeof state !== "object") {
                return;
            }
            const queryCache = client.getQueryCache();
            const queries = state.queries || [];
            const newQueries = [];
            const existingQueries = [];
            for (const dehydratedQuery of queries){
                const existingQuery = queryCache.get(dehydratedQuery.queryHash);
                if (!existingQuery) {
                    newQueries.push(dehydratedQuery);
                } else {
                    const hydrationIsNewer = dehydratedQuery.state.dataUpdatedAt > existingQuery.state.dataUpdatedAt || dehydratedQuery.promise && existingQuery.state.status !== "pending" && existingQuery.state.fetchStatus !== "fetching" && dehydratedQuery.dehydratedAt !== void 0 && dehydratedQuery.dehydratedAt > existingQuery.state.dataUpdatedAt;
                    if (hydrationIsNewer) {
                        existingQueries.push(dehydratedQuery);
                    }
                }
            }
            if (newQueries.length > 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                    queries: newQueries
                }, optionsRef.current);
            }
            if (existingQueries.length > 0) {
                return existingQueries;
            }
        }
        return void 0;
    }, [
        client,
        state
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (hydrationQueue) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hydrate"])(client, {
                queries: hydrationQueue
            }, optionsRef.current);
        }
    }, [
        client,
        hydrationQueue
    ]);
    return children;
};
;
 //# sourceMappingURL=HydrationBoundary.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>createValue());
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary)=>{
    if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        errorResetBoundary.clearReset();
    }, [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/suspense.ts
__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new Observer(client, defaultedOptions));
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((onStoreChange)=>{
        const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        observer.updateResult();
        return unsubscribe;
    }, [
        observer,
        shouldSubscribe
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        observer.setOptions(defaultedOptions);
    }, [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query: client.getQueryCache().get(defaultedOptions.queryHash),
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        client.getQueryCache().get(defaultedOptions.queryHash)?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-core/dist/src-Bb3GbGAa.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/standard.ts
__turbopack_context__.s([
    "createEnv",
    ()=>createEnv
]);
function ensureSynchronous(value, message) {
    if (value instanceof Promise) throw new Error(message);
}
function parseWithDictionary(dictionary, value) {
    const result = {};
    const issues = [];
    for(const key in dictionary){
        const propResult = dictionary[key]["~standard"].validate(value[key]);
        ensureSynchronous(propResult, `Validation must be synchronous, but ${key} returned a Promise.`);
        if (propResult.issues) {
            issues.push(...propResult.issues.map((issue)=>({
                    ...issue,
                    message: issue.message,
                    path: [
                        key,
                        ...issue.path ?? []
                    ]
                })));
            continue;
        }
        result[key] = propResult.value;
    }
    if (issues.length) return {
        issues
    };
    return {
        value: result
    };
}
//#endregion
//#region src/index.ts
/**
* Create a new environment variable schema.
*/ function createEnv(opts) {
    const runtimeEnv = opts.runtimeEnvStrict ?? opts.runtimeEnv ?? process.env;
    const emptyStringAsUndefined = opts.emptyStringAsUndefined ?? false;
    if (emptyStringAsUndefined) {
        for (const [key, value] of Object.entries(runtimeEnv))if (value === "") delete runtimeEnv[key];
    }
    const skip = !!opts.skipValidation;
    if (skip) return runtimeEnv;
    const _client = typeof opts.client === "object" ? opts.client : {};
    const _server = typeof opts.server === "object" ? opts.server : {};
    const _shared = typeof opts.shared === "object" ? opts.shared : {};
    const isServer = opts.isServer ?? (("TURBOPACK compile-time value", "undefined") === "undefined" || "Deno" in window);
    const finalSchemaShape = isServer ? {
        ..._server,
        ..._shared,
        ..._client
    } : {
        ..._client,
        ..._shared
    };
    const parsed = opts.createFinalSchema?.(finalSchemaShape, isServer)["~standard"].validate(runtimeEnv) ?? parseWithDictionary(finalSchemaShape, runtimeEnv);
    ensureSynchronous(parsed, "Validation must be synchronous");
    const onValidationError = opts.onValidationError ?? ((issues)=>{
        console.error("❌ Invalid environment variables:", issues);
        throw new Error("Invalid environment variables");
    });
    const onInvalidAccess = opts.onInvalidAccess ?? (()=>{
        throw new Error("❌ Attempted to access a server-side environment variable on the client");
    });
    if (parsed.issues) return onValidationError(parsed.issues);
    const isServerAccess = (prop)=>{
        if (!opts.clientPrefix) return true;
        return !prop.startsWith(opts.clientPrefix) && !(prop in _shared);
    };
    const isValidServerAccess = (prop)=>{
        return isServer || !isServerAccess(prop);
    };
    const ignoreProp = (prop)=>{
        return prop === "__esModule" || prop === "$$typeof";
    };
    const extendedObj = (opts.extends ?? []).reduce((acc, curr)=>{
        return Object.assign(acc, curr);
    }, {});
    const fullObj = Object.assign(extendedObj, parsed.value);
    const env = new Proxy(fullObj, {
        get (target, prop) {
            if (typeof prop !== "string") return void 0;
            if (ignoreProp(prop)) return void 0;
            if (!isValidServerAccess(prop)) return onInvalidAccess(prop);
            return Reflect.get(target, prop);
        }
    });
    return env;
}
;
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-core/dist/presets-zod.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coolify",
    ()=>coolify,
    "fly",
    ()=>fly,
    "neonVercel",
    ()=>neonVercel,
    "netlify",
    ()=>netlify,
    "railway",
    ()=>railway,
    "render",
    ()=>render,
    "supabaseVercel",
    ()=>supabaseVercel,
    "uploadthing",
    ()=>uploadthing,
    "uploadthingV6",
    ()=>uploadthingV6,
    "upstashRedis",
    ()=>upstashRedis,
    "vercel",
    ()=>vercel,
    "vite",
    ()=>vite,
    "wxt",
    ()=>wxt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-core/dist/src-Bb3GbGAa.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-core/dist/presets-zod.js")}`;
    }
};
;
;
//#region src/presets-zod.ts
/**
* Vercel System Environment Variables
* @see https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables
*/ const vercel = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            VERCEL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            CI: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "development",
                "preview",
                "production"
            ]).optional(),
            VERCEL_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_PROJECT_PRODUCTION_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_BRANCH_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_REGION: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_DEPLOYMENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_SKEW_PROTECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_AUTOMATION_BYPASS_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_REPO_SLUG: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_REPO_OWNER: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_REPO_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_COMMIT_REF: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_COMMIT_SHA: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_COMMIT_MESSAGE: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_COMMIT_AUTHOR_LOGIN: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_COMMIT_AUTHOR_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_PREVIOUS_SHA: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            VERCEL_GIT_PULL_REQUEST_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
        },
        runtimeEnv: process.env
    });
/**
* Neon for Vercel Environment Variables
* @see https://neon.tech/docs/guides/vercel-native-integration#environment-variables-set-by-the-integration
*/ const neonVercel = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            DATABASE_URL_UNPOOLED: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            PGHOST: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            PGHOST_UNPOOLED: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            PGUSER: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            PGDATABASE: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            PGPASSWORD: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            POSTGRES_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
            POSTGRES_URL_NON_POOLING: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
            POSTGRES_USER: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            POSTGRES_HOST: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            POSTGRES_PASSWORD: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            POSTGRES_DATABASE: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            POSTGRES_URL_NO_SSL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
            POSTGRES_PRISMA_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
        },
        runtimeEnv: process.env
    });
/**
* Supabase for Vercel Environment Variables
* @see https://vercel.com/marketplace/supabase
*/ const supabaseVercel = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            POSTGRES_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
            POSTGRES_PRISMA_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
            POSTGRES_URL_NON_POOLING: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
            POSTGRES_USER: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            POSTGRES_HOST: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            POSTGRES_PASSWORD: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            POSTGRES_DATABASE: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            SUPABASE_SERVICE_ROLE_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            SUPABASE_ANON_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            SUPABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
            SUPABASE_JWT_SECRET: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            NEXT_PUBLIC_SUPABASE_ANON_KEY: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            NEXT_PUBLIC_SUPABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
        },
        runtimeEnv: process.env
    });
/**
* @see https://v6.docs.uploadthing.com/getting-started/nuxt#add-env-variables
*/ const uploadthingV6 = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            UPLOADTHING_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        },
        runtimeEnv: process.env
    });
/**
* @see https://docs.uploadthing.com/getting-started/appdir#add-env-variables
*/ const uploadthing = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            UPLOADTHING_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        },
        runtimeEnv: process.env
    });
/**
* Render System Environment Variables
* @see https://docs.render.com/environment-variables#all-runtimes
*/ const render = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            IS_PULL_REQUEST: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RENDER_DISCOVERY_SERVICE: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RENDER_EXTERNAL_HOSTNAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RENDER_EXTERNAL_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
            RENDER_GIT_BRANCH: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RENDER_GIT_COMMIT: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RENDER_GIT_REPO_SLUG: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RENDER_INSTANCE_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RENDER_SERVICE_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RENDER_SERVICE_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RENDER_SERVICE_TYPE: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "web",
                "pserv",
                "cron",
                "worker",
                "static"
            ]).optional(),
            RENDER: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
        },
        runtimeEnv: process.env
    });
/**
* Railway Environment Variables
* @see https://docs.railway.app/reference/variables#railway-provided-variables
*/ const railway = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            RAILWAY_PUBLIC_DOMAIN: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_PRIVATE_DOMAIN: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_TCP_PROXY_DOMAIN: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_TCP_PROXY_PORT: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_TCP_APPLICATION_PORT: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_PROJECT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_ENVIRONMENT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_ENVIRONMENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_SERVICE_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_SERVICE_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_REPLICA_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_DEPLOYMENT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_SNAPSHOT_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_VOLUME_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_VOLUME_MOUNT_PATH: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_RUN_UID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_GIT_COMMIT_SHA: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_GIT_AUTHOR_EMAIL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_GIT_BRANCH: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_GIT_REPO_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_GIT_REPO_OWNER: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            RAILWAY_GIT_COMMIT_MESSAGE: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
        },
        runtimeEnv: process.env
    });
/**
* Fly.io Environment Variables
* @see https://fly.io/docs/machines/runtime-environment/#environment-variables
*/ const fly = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            FLY_APP_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            FLY_MACHINE_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            FLY_ALLOC_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            FLY_REGION: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            FLY_PUBLIC_IP: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            FLY_IMAGE_REF: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            FLY_MACHINE_VERSION: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            FLY_PRIVATE_IP: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            FLY_PROCESS_GROUP: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            FLY_VM_MEMORY_MB: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            PRIMARY_REGION: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
        },
        runtimeEnv: process.env
    });
/**
* Netlify Environment Variables
* @see https://docs.netlify.com/configure-builds/environment-variables
*/ const netlify = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            NETLIFY: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            BUILD_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            CONTEXT: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "production",
                "deploy-preview",
                "branch-deploy",
                "dev"
            ]).optional(),
            REPOSITORY_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            BRANCH: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            DEPLOY_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            DEPLOY_PRIME_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            DEPLOY_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            SITE_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            SITE_ID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
        },
        runtimeEnv: process.env
    });
/**
* Upstash redis Environment Variables
* @see https://upstash.com/docs/redis/howto/connectwithupstashredis
*/ const upstashRedis = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            UPSTASH_REDIS_REST_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
            UPSTASH_REDIS_REST_TOKEN: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        },
        runtimeEnv: process.env
    });
/**
* Coolify Environment Variables
* @see https://coolify.io/docs/knowledge-base/environment-variables#predefined-variables
*/ const coolify = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            COOLIFY_FQDN: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            COOLIFY_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            COOLIFY_BRANCH: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            COOLIFY_RESOURCE_UUID: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            COOLIFY_CONTAINER_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            SOURCE_COMMIT: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            PORT: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            HOST: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
        },
        runtimeEnv: process.env
    });
/**
* Vite Environment Variables
* @see https://vite.dev/guide/env-and-mode
*/ const vite = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            MODE: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            DEV: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
            PROD: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
            SSR: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
        },
        runtimeEnv: __TURBOPACK__import$2e$meta__.env
    });
/**
* WXT Environment Variables
* @see https://wxt.dev/guide/essentials/config/environment-variables.html#built-in-environment-variables
*/ const wxt = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        server: {
            MANIFEST_VERSION: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(2),
                __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(3)
            ]).optional(),
            BROWSER: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                "chrome",
                "firefox",
                "safari",
                "edge",
                "opera"
            ]).optional(),
            CHROME: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
            FIREFOX: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
            SAFARI: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
            EDGE: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
            OPERA: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
        },
        runtimeEnv: __TURBOPACK__import$2e$meta__.env
    });
;
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-core/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-core/dist/src-Bb3GbGAa.js [app-ssr] (ecmascript)");
;
;
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-nextjs/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEnv",
    ()=>createEnv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-core/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@t3-oss/env-core/dist/src-Bb3GbGAa.js [app-ssr] (ecmascript)");
;
//#region src/index.ts
const CLIENT_PREFIX = "NEXT_PUBLIC_";
/**
* Create a new environment variable schema.
*/ function createEnv(opts) {
    const client = typeof opts.client === "object" ? opts.client : {};
    const server = typeof opts.server === "object" ? opts.server : {};
    const shared = opts.shared;
    const runtimeEnv = opts.runtimeEnv ? opts.runtimeEnv : {
        ...process.env,
        ...opts.experimental__runtimeEnv
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$t3$2d$oss$2f$env$2d$core$2f$dist$2f$src$2d$Bb3GbGAa$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEnv"])({
        ...opts,
        shared,
        client,
        server,
        clientPrefix: CLIENT_PREFIX,
        runtimeEnv
    });
}
;
}),
];

//# sourceMappingURL=2e7f8_fa92726c._.js.map