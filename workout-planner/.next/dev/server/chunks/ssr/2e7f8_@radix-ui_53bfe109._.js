module.exports = [
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-ssr] (ecmascript) <export * as VisuallyHidden>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisuallyHidden",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusScope",
    ()=>FocusScope,
    "Root",
    ()=>Root
]);
// src/focus-scope.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const onMountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onUnmountAutoFocusProp);
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setContainer(node));
    const focusScope = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (trapped) {
            let handleFocusIn2 = function(event) {
                if (focusScope.paused || !container) return;
                const target = event.target;
                if (container.contains(target)) {
                    lastFocusedElementRef.current = target;
                } else {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleFocusOut2 = function(event) {
                if (focusScope.paused || !container) return;
                const relatedTarget = event.relatedTarget;
                if (relatedTarget === null) return;
                if (!container.contains(relatedTarget)) {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleMutations2 = function(mutations) {
                const focusedElement = document.activeElement;
                if (focusedElement !== document.body) return;
                for (const mutation of mutations){
                    if (mutation.removedNodes.length > 0) focus(container);
                }
            };
            var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
            document.addEventListener("focusin", handleFocusIn2);
            document.addEventListener("focusout", handleFocusOut2);
            const mutationObserver = new MutationObserver(handleMutations2);
            if (container) mutationObserver.observe(container, {
                childList: true,
                subtree: true
            });
            return ()=>{
                document.removeEventListener("focusin", handleFocusIn2);
                document.removeEventListener("focusout", handleFocusOut2);
                mutationObserver.disconnect();
            };
        }
    }, [
        trapped,
        container,
        focusScope.paused
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (container) {
            focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    focusFirst(removeLinks(getTabbableCandidates(container)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) {
                        focus(container);
                    }
                }
            }
            return ()=>{
                container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) {
                        focus(previouslyFocusedElement ?? document.body, {
                            select: true
                        });
                    }
                    container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container2 = event.currentTarget;
            const [first, last] = getTabbableEdges(container2);
            const hasTabbableElementsInside = first && last;
            if (!hasTabbableElementsInside) {
                if (focusedElement === container2) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root = FocusScope;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusGuards",
    ()=>FocusGuards,
    "Root",
    ()=>FocusGuards,
    "useFocusGuards",
    ()=>useFocusGuards
]);
// src/focus-guards.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
        document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
        document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
        count++;
        return ()=>{
            if (count === 1) {
                document.querySelectorAll("[data-radix-focus-guard]").forEach((node)=>node.remove());
            }
            count--;
        };
    }, []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Close",
    ()=>Close,
    "Content",
    ()=>Content,
    "Description",
    ()=>Description,
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger,
    "Overlay",
    ()=>Overlay,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root,
    "Title",
    ()=>Title,
    "Trigger",
    ()=>Trigger,
    "WarningProvider",
    ()=>WarningProvider,
    "createDialogScope",
    ()=>createDialogScope
]);
// src/dialog.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
;
;
;
;
;
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props)=>{
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: DIALOG_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        titleId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        descriptionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal,
        children
    });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
    forceMount: void 0
});
var DialogPortal = (props)=>{
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
                present: forceMount || context.open,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
                    asChild: true,
                    container,
                    children: child
                })
            }))
    });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return(// Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
        as: Slot,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ],
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "auto",
                ...overlayProps.style
            }
        })
    }));
});
var CONTENT_NAME = "DialogContent";
var DialogContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.contentRef, contentRef);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const content = contentRef.current;
        if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideOthers"])(content);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault())
    });
});
var DialogContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerDownOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var DialogContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                loop: true,
                trapped: trapFocus,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    role: "dialog",
                    id: context.contentId,
                    "aria-describedby": context.descriptionId,
                    "aria-labelledby": context.titleId,
                    "data-state": getState(context.open),
                    ...contentProps,
                    ref: composedRefs,
                    onDismiss: ()=>context.onOpenChange(false)
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TitleWarning, {
                        titleId: context.titleId
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DescriptionWarning, {
                        contentRef,
                        descriptionId: context.descriptionId
                    })
                ]
            })
        ]
    });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].h2, {
        id: context.titleId,
        ...titleProps,
        ref: forwardedRef
    });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].p, {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
    });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, ()=>context.onOpenChange(false))
    });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
});
var TitleWarning = ({ titleId })=>{
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) console.error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId })=>{
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const describedById = contentRef.current?.getAttribute("aria-describedby");
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript) <export * as Dialog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-aspect-ratio/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/aspect-ratio.tsx
__turbopack_context__.s([
    "AspectRatio",
    ()=>AspectRatio,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var NAME = "AspectRatio";
var AspectRatio = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { ratio = 1 / 1, style, ...aspectRatioProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: {
            // ensures inner element is contained
            position: "relative",
            // ensures padding bottom trick maths works
            width: "100%",
            paddingBottom: `${100 / ratio}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            ...aspectRatioProps,
            ref: forwardedRef,
            style: {
                ...style,
                // ensures children expand in ratio
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        })
    });
});
AspectRatio.displayName = NAME;
var Root = AspectRatio;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-aspect-ratio/dist/index.mjs [app-ssr] (ecmascript) <export * as AspectRatio>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AspectRatio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$aspect$2d$ratio$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$aspect$2d$ratio$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-aspect-ratio/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/number/src/number.ts
__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Corner",
    ()=>Corner,
    "Root",
    ()=>Root,
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollAreaCorner",
    ()=>ScrollAreaCorner,
    "ScrollAreaScrollbar",
    ()=>ScrollAreaScrollbar,
    "ScrollAreaThumb",
    ()=>ScrollAreaThumb,
    "ScrollAreaViewport",
    ()=>ScrollAreaViewport,
    "Scrollbar",
    ()=>Scrollbar,
    "Thumb",
    ()=>Thumb,
    "Viewport",
    ()=>Viewport,
    "createScrollAreaScope",
    ()=>createScrollAreaScope
]);
// src/scroll-area.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
// src/scroll-area.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"]((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
;
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
    const [scrollArea, setScrollArea] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [viewport, setViewport] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [scrollbarX, setScrollbarX] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [scrollbarY, setScrollbarY] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [cornerWidth, setCornerWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [cornerHeight, setCornerHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setScrollArea(node));
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaProvider, {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
                ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
                ...props.style
            }
        })
    });
});
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
                },
                nonce
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                "data-radix-scroll-area-viewport": "",
                ...viewportProps,
                ref: composedRefs,
                style: {
                    /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */ overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
                    overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
                    ...props.style
                },
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ref: context.onContentChange,
                    style: {
                        minWidth: "100%",
                        display: "table"
                    },
                    children
                })
            })
        ]
    });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
        return ()=>{
            isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
        };
    }, [
        isHorizontal,
        onScrollbarXEnabledChange,
        onScrollbarYEnabledChange
    ]);
    return context.type === "hover" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarHover, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "scroll" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarScroll, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "auto" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarAuto, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "always" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
        ...scrollbarProps,
        ref: forwardedRef
    }) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const scrollArea = context.scrollArea;
        let hideTimer = 0;
        if (scrollArea) {
            const handlePointerEnter = ()=>{
                window.clearTimeout(hideTimer);
                setVisible(true);
            };
            const handlePointerLeave = ()=>{
                hideTimer = window.setTimeout(()=>setVisible(false), context.scrollHideDelay);
            };
            scrollArea.addEventListener("pointerenter", handlePointerEnter);
            scrollArea.addEventListener("pointerleave", handlePointerLeave);
            return ()=>{
                window.clearTimeout(hideTimer);
                scrollArea.removeEventListener("pointerenter", handlePointerEnter);
                scrollArea.removeEventListener("pointerleave", handlePointerLeave);
            };
        }
    }, [
        context.scrollArea,
        context.scrollHideDelay
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || visible,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarAuto, {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref: forwardedRef
        })
    });
});
var ScrollAreaScrollbarScroll = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const isHorizontal = props.orientation === "horizontal";
    const debounceScrollEnd = useDebounceCallback(()=>send("SCROLL_END"), 100);
    const [state, send] = useStateMachine("hidden", {
        hidden: {
            SCROLL: "scrolling"
        },
        scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
        },
        interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
        },
        idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (state === "idle") {
            const hideTimer = window.setTimeout(()=>send("HIDE"), context.scrollHideDelay);
            return ()=>window.clearTimeout(hideTimer);
        }
    }, [
        state,
        context.scrollHideDelay,
        send
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const viewport = context.viewport;
        const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
        if (viewport) {
            let prevScrollPos = viewport[scrollDirection];
            const handleScroll = ()=>{
                const scrollPos = viewport[scrollDirection];
                const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
                if (hasScrollInDirectionChanged) {
                    send("SCROLL");
                    debounceScrollEnd();
                }
                prevScrollPos = scrollPos;
            };
            viewport.addEventListener("scroll", handleScroll);
            return ()=>viewport.removeEventListener("scroll", handleScroll);
        }
    }, [
        context.viewport,
        isHorizontal,
        send,
        debounceScrollEnd
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || state !== "hidden",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
            "data-state": state === "hidden" ? "hidden" : "visible",
            ...scrollbarProps,
            ref: forwardedRef,
            onPointerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerEnter, ()=>send("POINTER_ENTER")),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, ()=>send("POINTER_LEAVE"))
        })
    });
});
var ScrollAreaScrollbarAuto = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { forceMount, ...scrollbarProps } = props;
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebounceCallback(()=>{
        if (context.viewport) {
            const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
            const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
            setVisible(isHorizontal ? isOverflowX : isOverflowY);
        }
    }, 10);
    useResizeObserver(context.viewport, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || visible,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref: forwardedRef
        })
    });
});
var ScrollAreaScrollbarVisible = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { orientation = "vertical", ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const thumbRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const pointerOffsetRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const [sizes, setSizes] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    });
    const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
    const commonProps = {
        ...scrollbarProps,
        sizes,
        onSizesChange: setSizes,
        hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
        onThumbChange: (thumb)=>thumbRef.current = thumb,
        onThumbPointerUp: ()=>pointerOffsetRef.current = 0,
        onThumbPointerDown: (pointerPos)=>pointerOffsetRef.current = pointerPos
    };
    function getScrollPosition(pointerPos, dir) {
        return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
    }
    if (orientation === "horizontal") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarX, {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollLeft;
                    const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
                    thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) context.viewport.scrollLeft = scrollPos;
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) {
                    context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
                }
            }
        });
    }
    if (orientation === "vertical") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarY, {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollTop;
                    const offset = getThumbOffsetFromScroll(scrollPos, sizes);
                    thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) context.viewport.scrollTop = scrollPos;
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
            }
        });
    }
    return null;
});
var ScrollAreaScrollbarX = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onScrollbarXChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarImpl, {
        "data-orientation": "horizontal",
        ...scrollbarProps,
        ref: composeRefs,
        sizes,
        style: {
            bottom: 0,
            left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollLeft + event.deltaX;
                props.onWheelScroll(scrollPos);
                if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollWidth,
                    viewport: context.viewport.offsetWidth,
                    scrollbar: {
                        size: ref.current.clientWidth,
                        paddingStart: toInt(computedStyle.paddingLeft),
                        paddingEnd: toInt(computedStyle.paddingRight)
                    }
                });
            }
        }
    });
});
var ScrollAreaScrollbarY = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onScrollbarYChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarImpl, {
        "data-orientation": "vertical",
        ...scrollbarProps,
        ref: composeRefs,
        sizes,
        style: {
            top: 0,
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollTop + event.deltaY;
                props.onWheelScroll(scrollPos);
                if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollHeight,
                    viewport: context.viewport.offsetHeight,
                    scrollbar: {
                        size: ref.current.clientHeight,
                        paddingStart: toInt(computedStyle.paddingTop),
                        paddingEnd: toInt(computedStyle.paddingBottom)
                    }
                });
            }
        }
    });
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
    const [scrollbar, setScrollbar] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setScrollbar(node));
    const rectRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevWebkitUserSelectRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("");
    const viewport = context.viewport;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onWheelScroll);
    const handleThumbPositionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPositionChange);
    const handleResize = useDebounceCallback(onResize, 10);
    function handleDragScroll(event) {
        if (rectRef.current) {
            const x = event.clientX - rectRef.current.left;
            const y = event.clientY - rectRef.current.top;
            onDragScroll({
                x,
                y
            });
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleWheel = (event)=>{
            const element = event.target;
            const isScrollbarWheel = scrollbar?.contains(element);
            if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
        };
        document.addEventListener("wheel", handleWheel, {
            passive: false
        });
        return ()=>document.removeEventListener("wheel", handleWheel, {
                passive: false
            });
    }, [
        viewport,
        scrollbar,
        maxScrollPos,
        handleWheelScroll
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](handleThumbPositionChange, [
        sizes,
        handleThumbPositionChange
    ]);
    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollbarProvider, {
        scope: __scopeScrollArea,
        scrollbar,
        hasThumb,
        onThumbChange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbChange),
        onThumbPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPointerDown),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            ...scrollbarProps,
            ref: composeRefs,
            style: {
                position: "absolute",
                ...scrollbarProps.style
            },
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, (event)=>{
                const mainPointer = 0;
                if (event.button === mainPointer) {
                    const element = event.target;
                    element.setPointerCapture(event.pointerId);
                    rectRef.current = scrollbar.getBoundingClientRect();
                    prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                    document.body.style.webkitUserSelect = "none";
                    if (context.viewport) context.viewport.style.scrollBehavior = "auto";
                    handleDragScroll(event);
                }
            }),
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, handleDragScroll),
            onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, (event)=>{
                const element = event.target;
                if (element.hasPointerCapture(event.pointerId)) {
                    element.releasePointerCapture(event.pointerId);
                }
                document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
                if (context.viewport) context.viewport.style.scrollBehavior = "";
                rectRef.current = null;
            })
        })
    });
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || scrollbarContext.hasThumb,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaThumbImpl, {
            ref: forwardedRef,
            ...thumbProps
        })
    });
});
var ScrollAreaThumbImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>scrollbarContext.onThumbChange(node));
    const removeUnlinkedScrollListenerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const debounceScrollEnd = useDebounceCallback(()=>{
        if (removeUnlinkedScrollListenerRef.current) {
            removeUnlinkedScrollListenerRef.current();
            removeUnlinkedScrollListenerRef.current = void 0;
        }
    }, 100);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const viewport = scrollAreaContext.viewport;
        if (viewport) {
            const handleScroll = ()=>{
                debounceScrollEnd();
                if (!removeUnlinkedScrollListenerRef.current) {
                    const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
                    removeUnlinkedScrollListenerRef.current = listener;
                    onThumbPositionChange();
                }
            };
            onThumbPositionChange();
            viewport.addEventListener("scroll", handleScroll);
            return ()=>viewport.removeEventListener("scroll", handleScroll);
        }
    }, [
        scrollAreaContext.viewport,
        debounceScrollEnd,
        onThumbPositionChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...style
        },
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, (event)=>{
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({
                x,
                y
            });
        }),
        onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    });
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaCornerImpl, {
        ...props,
        ref: forwardedRef
    }) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, ...cornerProps } = props;
    const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
    const [width, setWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [height, setHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const hasSize = Boolean(width && height);
    useResizeObserver(context.scrollbarX, ()=>{
        const height2 = context.scrollbarX?.offsetHeight || 0;
        context.onCornerHeightChange(height2);
        setHeight(height2);
    });
    useResizeObserver(context.scrollbarY, ()=>{
        const width2 = context.scrollbarY?.offsetWidth || 0;
        context.onCornerWidthChange(width2);
        setWidth(width2);
    });
    return hasSize ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...cornerProps,
        ref: forwardedRef,
        style: {
            width,
            height,
            position: "absolute",
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...props.style
        }
    }) : null;
});
function toInt(value) {
    return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
    const ratio = getThumbRatio(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
    return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset;
    const minPointerPos = sizes.scrollbar.paddingStart + offset;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const interpolate = linearScale([
        minPointerPos,
        maxPointerPos
    ], scrollRange);
    return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const scrollWithoutMomentum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollPos, scrollClampRange);
    const interpolate = linearScale([
        0,
        maxScrollPos
    ], [
        0,
        maxThumbPos
    ]);
    return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = ()=>{})=>{
    let prevPosition = {
        left: node.scrollLeft,
        top: node.scrollTop
    };
    let rAF = 0;
    (function loop() {
        const position = {
            left: node.scrollLeft,
            top: node.scrollTop
        };
        const isHorizontalScroll = prevPosition.left !== position.left;
        const isVerticalScroll = prevPosition.top !== position.top;
        if (isHorizontalScroll || isVerticalScroll) handler();
        prevPosition = position;
        rAF = window.requestAnimationFrame(loop);
    })();
    return ()=>window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
    const handleCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(callback);
    const debounceTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>()=>window.clearTimeout(debounceTimerRef.current), []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = window.setTimeout(handleCallback, delay);
    }, [
        handleCallback,
        delay
    ]);
}
function useResizeObserver(element, onResize) {
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onResize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let rAF = 0;
        if (element) {
            const resizeObserver = new ResizeObserver(()=>{
                cancelAnimationFrame(rAF);
                rAF = window.requestAnimationFrame(handleResize);
            });
            resizeObserver.observe(element);
            return ()=>{
                window.cancelAnimationFrame(rAF);
                resizeObserver.unobserve(element);
            };
        }
    }, [
        element,
        handleResize
    ]);
}
var Root = ScrollArea;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Thumb = ScrollAreaThumb;
var Corner = ScrollAreaCorner;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript) <export * as ScrollArea>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCollection",
    ()=>createCollection,
    "unstable_createCollection",
    ()=>createCollection2
]);
// src/collection-legacy.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope, children } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const itemMap = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            scope,
            itemMap,
            collectionRef: ref,
            children
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(COLLECTION_SLOT_NAME);
    const CollectionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionSlotImpl, {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(ITEM_SLOT_NAME);
    const CollectionItemSlot = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
            context.itemMap.set(ref, {
                ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionItemSlotImpl, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
;
;
;
;
// src/ordered-dictionary.ts
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = class _OrderedDict extends Map {
    #keys;
    constructor(entries){
        super(entries);
        this.#keys = [
            ...super.keys()
        ];
        __instanciated.set(this, true);
    }
    set(key, value) {
        if (__instanciated.get(this)) {
            if (this.has(key)) {
                this.#keys[this.#keys.indexOf(key)] = key;
            } else {
                this.#keys.push(key);
            }
        }
        super.set(key, value);
        return this;
    }
    insert(index, key, value) {
        const has = this.has(key);
        const length = this.#keys.length;
        const relativeIndex = toSafeInteger(index);
        let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
        const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
        if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
            this.set(key, value);
            return this;
        }
        const size = this.size + (has ? 0 : 1);
        if (relativeIndex < 0) {
            actualIndex++;
        }
        const keys = [
            ...this.#keys
        ];
        let nextValue;
        let shouldSkip = false;
        for(let i = actualIndex; i < size; i++){
            if (actualIndex === i) {
                let nextKey = keys[i];
                if (keys[i] === key) {
                    nextKey = keys[i + 1];
                }
                if (has) {
                    this.delete(key);
                }
                nextValue = this.get(nextKey);
                this.set(key, value);
            } else {
                if (!shouldSkip && keys[i - 1] === key) {
                    shouldSkip = true;
                }
                const currentKey = keys[shouldSkip ? i : i - 1];
                const currentValue = nextValue;
                nextValue = this.get(currentKey);
                this.delete(currentKey);
                this.set(currentKey, currentValue);
            }
        }
        return this;
    }
    with(index, key, value) {
        const copy = new _OrderedDict(this);
        copy.insert(index, key, value);
        return copy;
    }
    before(key) {
        const index = this.#keys.indexOf(key) - 1;
        if (index < 0) {
            return void 0;
        }
        return this.entryAt(index);
    }
    /**
   * Sets a new key-value pair at the position before the given key.
   */ setBefore(key, newKey, value) {
        const index = this.#keys.indexOf(key);
        if (index === -1) {
            return this;
        }
        return this.insert(index, newKey, value);
    }
    after(key) {
        let index = this.#keys.indexOf(key);
        index = index === -1 || index === this.size - 1 ? -1 : index + 1;
        if (index === -1) {
            return void 0;
        }
        return this.entryAt(index);
    }
    /**
   * Sets a new key-value pair at the position after the given key.
   */ setAfter(key, newKey, value) {
        const index = this.#keys.indexOf(key);
        if (index === -1) {
            return this;
        }
        return this.insert(index + 1, newKey, value);
    }
    first() {
        return this.entryAt(0);
    }
    last() {
        return this.entryAt(-1);
    }
    clear() {
        this.#keys = [];
        return super.clear();
    }
    delete(key) {
        const deleted = super.delete(key);
        if (deleted) {
            this.#keys.splice(this.#keys.indexOf(key), 1);
        }
        return deleted;
    }
    deleteAt(index) {
        const key = this.keyAt(index);
        if (key !== void 0) {
            return this.delete(key);
        }
        return false;
    }
    at(index) {
        const key = at(this.#keys, index);
        if (key !== void 0) {
            return this.get(key);
        }
    }
    entryAt(index) {
        const key = at(this.#keys, index);
        if (key !== void 0) {
            return [
                key,
                this.get(key)
            ];
        }
    }
    indexOf(key) {
        return this.#keys.indexOf(key);
    }
    keyAt(index) {
        return at(this.#keys, index);
    }
    from(key, offset) {
        const index = this.indexOf(key);
        if (index === -1) {
            return void 0;
        }
        let dest = index + offset;
        if (dest < 0) dest = 0;
        if (dest >= this.size) dest = this.size - 1;
        return this.at(dest);
    }
    keyFrom(key, offset) {
        const index = this.indexOf(key);
        if (index === -1) {
            return void 0;
        }
        let dest = index + offset;
        if (dest < 0) dest = 0;
        if (dest >= this.size) dest = this.size - 1;
        return this.keyAt(dest);
    }
    find(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return entry;
            }
            index++;
        }
        return void 0;
    }
    findIndex(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return index;
            }
            index++;
        }
        return -1;
    }
    filter(predicate, thisArg) {
        const entries = [];
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                entries.push(entry);
            }
            index++;
        }
        return new _OrderedDict(entries);
    }
    map(callbackfn, thisArg) {
        const entries = [];
        let index = 0;
        for (const entry of this){
            entries.push([
                entry[0],
                Reflect.apply(callbackfn, thisArg, [
                    entry,
                    index,
                    this
                ])
            ]);
            index++;
        }
        return new _OrderedDict(entries);
    }
    reduce(...args) {
        const [callbackfn, initialValue] = args;
        let index = 0;
        let accumulator = initialValue ?? this.at(0);
        for (const entry of this){
            if (index === 0 && args.length === 1) {
                accumulator = entry;
            } else {
                accumulator = Reflect.apply(callbackfn, this, [
                    accumulator,
                    entry,
                    index,
                    this
                ]);
            }
            index++;
        }
        return accumulator;
    }
    reduceRight(...args) {
        const [callbackfn, initialValue] = args;
        let accumulator = initialValue ?? this.at(-1);
        for(let index = this.size - 1; index >= 0; index--){
            const entry = this.at(index);
            if (index === this.size - 1 && args.length === 1) {
                accumulator = entry;
            } else {
                accumulator = Reflect.apply(callbackfn, this, [
                    accumulator,
                    entry,
                    index,
                    this
                ]);
            }
        }
        return accumulator;
    }
    toSorted(compareFn) {
        const entries = [
            ...this.entries()
        ].sort(compareFn);
        return new _OrderedDict(entries);
    }
    toReversed() {
        const reversed = new _OrderedDict();
        for(let index = this.size - 1; index >= 0; index--){
            const key = this.keyAt(index);
            const element = this.get(key);
            reversed.set(key, element);
        }
        return reversed;
    }
    toSpliced(...args) {
        const entries = [
            ...this.entries()
        ];
        entries.splice(...args);
        return new _OrderedDict(entries);
    }
    slice(start, end) {
        const result = new _OrderedDict();
        let stop = this.size - 1;
        if (start === void 0) {
            return result;
        }
        if (start < 0) {
            start = start + this.size;
        }
        if (end !== void 0 && end > 0) {
            stop = end - 1;
        }
        for(let index = start; index <= stop; index++){
            const key = this.keyAt(index);
            const element = this.get(key);
            result.set(key, element);
        }
        return result;
    }
    every(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (!Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return false;
            }
            index++;
        }
        return true;
    }
    some(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return true;
            }
            index++;
        }
        return false;
    }
};
function at(array, index) {
    if ("at" in Array.prototype) {
        return Array.prototype.at.call(array, index);
    }
    const actualIndex = toSafeIndex(array, index);
    return actualIndex === -1 ? void 0 : array[actualIndex];
}
function toSafeIndex(array, index) {
    const length = array.length;
    const relativeIndex = toSafeInteger(index);
    const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
    return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
function toSafeInteger(number) {
    return number !== number || number === 0 ? 0 : Math.trunc(number);
}
;
function createCollection2(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(PROVIDER_NAME);
    const [CollectionContextProvider, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionElement: null,
        collectionRef: {
            current: null
        },
        collectionRefObject: {
            current: null
        },
        itemMap: new OrderedDict(),
        setItemMap: ()=>void 0
    });
    const CollectionProvider = ({ state, ...props })=>{
        return state ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            ...props,
            state
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionInit, {
            ...props
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const CollectionInit = (props)=>{
        const state = useInitCollection();
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            ...props,
            state
        });
    };
    CollectionInit.displayName = PROVIDER_NAME + "Init";
    const CollectionProviderImpl = (props)=>{
        const { scope, children, state } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const [collectionElement, setCollectionElement] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
        const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, setCollectionElement);
        const [itemMap, setItemMap] = state;
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
            if (!collectionElement) return;
            const observer = getChildListObserver(()=>{});
            observer.observe(collectionElement, {
                childList: true,
                subtree: true
            });
            return ()=>{
                observer.disconnect();
            };
        }, [
            collectionElement
        ]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionContextProvider, {
            scope,
            itemMap,
            setItemMap,
            collectionRef: composeRefs,
            collectionRefObject: ref,
            collectionElement,
            children
        });
    };
    CollectionProviderImpl.displayName = PROVIDER_NAME + "Impl";
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(COLLECTION_SLOT_NAME);
    const CollectionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionSlotImpl, {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])(ITEM_SLOT_NAME);
    const CollectionItemSlot = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const [element, setElement] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, setElement);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        const { setItemMap } = context;
        const itemDataRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(itemData);
        if (!shallowEqual(itemDataRef.current, itemData)) {
            itemDataRef.current = itemData;
        }
        const memoizedItemData = itemDataRef.current;
        __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
            const itemData2 = memoizedItemData;
            setItemMap((map)=>{
                if (!element) {
                    return map;
                }
                if (!map.has(element)) {
                    map.set(element, {
                        ...itemData2,
                        element
                    });
                    return map.toSorted(sortByDocumentPosition);
                }
                return map.set(element, {
                    ...itemData2,
                    element
                }).toSorted(sortByDocumentPosition);
            });
            return ()=>{
                setItemMap((map)=>{
                    if (!element || !map.has(element)) {
                        return map;
                    }
                    map.delete(element);
                    return new OrderedDict(map);
                });
            };
        }, [
            element,
            memoizedItemData,
            setItemMap
        ]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollectionItemSlotImpl, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useInitCollection() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(new OrderedDict());
    }
    function useCollection(scope) {
        const { itemMap } = useCollectionContext(name + "CollectionConsumer", scope);
        return itemMap;
    }
    const functions = {
        createCollectionScope,
        useCollection,
        useInitCollection
    };
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        functions
    ];
}
function shallowEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== "object" || typeof b !== "object") return false;
    if (a == null || b == null) return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA){
        if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
        if (a[key] !== b[key]) return false;
    }
    return true;
}
function isElementPreceding(a, b) {
    return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
function sortByDocumentPosition(a, b) {
    return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
function getChildListObserver(callback) {
    const observer = new MutationObserver((mutationsList)=>{
        for (const mutation of mutationsList){
            if (mutation.type === "childList") {
                callback();
                return;
            }
        }
    });
    return observer;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-previous/src/use-previous.tsx
__turbopack_context__.s([
    "usePrevious",
    ()=>usePrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function usePrevious(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        value,
        previous: value
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        if (ref.current.value !== value) {
            ref.current.previous = ref.current.value;
            ref.current.value = value;
        }
        return ref.current.previous;
    }, [
        value
    ]);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "Content",
    ()=>Content2,
    "Group",
    ()=>Group,
    "Icon",
    ()=>Icon,
    "Item",
    ()=>Item,
    "ItemIndicator",
    ()=>ItemIndicator,
    "ItemText",
    ()=>ItemText,
    "Label",
    ()=>Label,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root2,
    "ScrollDownButton",
    ()=>ScrollDownButton,
    "ScrollUpButton",
    ()=>ScrollUpButton,
    "Select",
    ()=>Select,
    "SelectArrow",
    ()=>SelectArrow,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectIcon",
    ()=>SelectIcon,
    "SelectItem",
    ()=>SelectItem,
    "SelectItemIndicator",
    ()=>SelectItemIndicator,
    "SelectItemText",
    ()=>SelectItemText,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectPortal",
    ()=>SelectPortal,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue,
    "SelectViewport",
    ()=>SelectViewport,
    "Separator",
    ()=>Separator,
    "Trigger",
    ()=>Trigger,
    "Value",
    ()=>Value,
    "Viewport",
    ()=>Viewport,
    "createSelectScope",
    ()=>createSelectScope
]);
// src/select.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-popper/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
;
;
;
;
var OPEN_KEYS = [
    " ",
    "Enter",
    "ArrowUp",
    "ArrowDown"
];
var SELECTION_KEYS = [
    " ",
    "Enter"
];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(SELECT_NAME);
var [createSelectContext, createSelectScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(SELECT_NAME, [
    createCollectionScope,
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"])();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select = (props)=>{
    const { __scopeSelect, children, open: openProp, defaultOpen, onOpenChange, value: valueProp, defaultValue, onValueChange, dir, name, autoComplete, disabled, required, form } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const [trigger, setTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [valueNode, setValueNode] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [valueNodeHasChildren, setValueNodeHasChildren] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: SELECT_NAME
    });
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange,
        caller: SELECT_NAME
    });
    const triggerPointerDownPosRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const isFormControl = trigger ? form || !!trigger.closest("form") : true;
    const [nativeOptionsSet, setNativeOptionsSet] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](/* @__PURE__ */ new Set());
    const nativeSelectKey = Array.from(nativeOptionsSet).map((option)=>option.props.value).join(";");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(SelectProvider, {
            required,
            scope: __scopeSelect,
            trigger,
            onTriggerChange: setTrigger,
            valueNode,
            onValueNodeChange: setValueNode,
            valueNodeHasChildren,
            onValueNodeHasChildrenChange: setValueNodeHasChildren,
            contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
            value,
            onValueChange: setValue,
            open,
            onOpenChange: setOpen,
            dir: direction,
            triggerPointerDownPosRef,
            disabled,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
                    scope: __scopeSelect,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectNativeOptionsProvider, {
                        scope: props.__scopeSelect,
                        onNativeOptionAdd: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((option)=>{
                            setNativeOptionsSet((prev)=>new Set(prev).add(option));
                        }, []),
                        onNativeOptionRemove: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((option)=>{
                            setNativeOptionsSet((prev)=>{
                                const optionsSet = new Set(prev);
                                optionsSet.delete(option);
                                return optionsSet;
                            });
                        }, []),
                        children
                    })
                }),
                isFormControl ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(SelectBubbleInput, {
                    "aria-hidden": true,
                    required,
                    tabIndex: -1,
                    name,
                    autoComplete,
                    value,
                    onChange: (event)=>setValue(event.target.value),
                    disabled,
                    form,
                    children: [
                        value === void 0 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", {
                            value: ""
                        }) : null,
                        Array.from(nativeOptionsSet)
                    ]
                }, nativeSelectKey) : null
            ]
        })
    });
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.onTriggerChange);
    const getItems = useCollection(__scopeSelect);
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("touch");
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled);
        const currentItem = enabledItems.find((item)=>item.value === context.value);
        const nextItem = findNextItem(enabledItems, search, currentItem);
        if (nextItem !== void 0) {
            context.onValueChange(nextItem.value);
        }
    });
    const handleOpen = (pointerEvent)=>{
        if (!isDisabled) {
            context.onOpenChange(true);
            resetTypeahead();
        }
        if (pointerEvent) {
            context.triggerPointerDownPosRef.current = {
                x: Math.round(pointerEvent.pageX),
                y: Math.round(pointerEvent.pageY)
            };
        }
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
            type: "button",
            role: "combobox",
            "aria-controls": context.contentId,
            "aria-expanded": context.open,
            "aria-required": context.required,
            "aria-autocomplete": "none",
            dir: context.dir,
            "data-state": context.open ? "open" : "closed",
            disabled: isDisabled,
            "data-disabled": isDisabled ? "" : void 0,
            "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
            ...triggerProps,
            ref: composedRefs,
            onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(triggerProps.onClick, (event)=>{
                event.currentTarget.focus();
                if (pointerTypeRef.current !== "mouse") {
                    handleOpen(event);
                }
            }),
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(triggerProps.onPointerDown, (event)=>{
                pointerTypeRef.current = event.pointerType;
                const target = event.target;
                if (target.hasPointerCapture(event.pointerId)) {
                    target.releasePointerCapture(event.pointerId);
                }
                if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
                    handleOpen(event);
                    event.preventDefault();
                }
            }),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(triggerProps.onKeyDown, (event)=>{
                const isTypingAhead = searchRef.current !== "";
                const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                if (isTypingAhead && event.key === " ") return;
                if (OPEN_KEYS.includes(event.key)) {
                    handleOpen();
                    event.preventDefault();
                }
            })
        })
    });
});
SelectTrigger.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue";
var SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
    const context = useSelectContext(VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange } = context;
    const hasChildren = children !== void 0;
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.onValueNodeChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        onValueNodeHasChildrenChange(hasChildren);
    }, [
        onValueNodeHasChildrenChange,
        hasChildren
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...valueProps,
        ref: composedRefs,
        style: {
            pointerEvents: "none"
        },
        children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: placeholder
        }) : children
    });
});
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, children, ...iconProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "aria-hidden": true,
        ...iconProps,
        ref: forwardedRef,
        children: children || "\u25BC"
    });
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal";
var SelectPortal = (props)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        asChild: true,
        ...props
    });
};
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent";
var SelectContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useSelectContext(CONTENT_NAME, props.__scopeSelect);
    const [fragment, setFragment] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
        const frag = fragment;
        return frag ? __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"](/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectContentProvider, {
            scope: props.__scopeSelect,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeSelect,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    children: props.children
                })
            })
        }), frag) : null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectContentImpl, {
        ...props,
        ref: forwardedRef
    });
});
SelectContent.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])("SelectContent.RemoveScroll");
var SelectContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, position = "item-aligned", onCloseAutoFocus, onEscapeKeyDown, onPointerDownOutside, //
    // PopperContent props
    side, sideOffset, align, alignOffset, arrowPadding, collisionBoundary, collisionPadding, sticky, hideWhenDetached, avoidCollisions, //
    ...contentProps } = props;
    const context = useSelectContext(CONTENT_NAME, __scopeSelect);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [viewport, setViewport] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setContent(node));
    const [selectedItem, setSelectedItem] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [selectedItemText, setSelectedItemText] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const getItems = useCollection(__scopeSelect);
    const [isPositioned, setIsPositioned] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const firstValidItemFoundRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideOthers"])(content);
    }, [
        content
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    const focusFirst = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((candidates)=>{
        const [firstItem, ...restItems] = getItems().map((item)=>item.ref.current);
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates){
            if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
            candidate?.scrollIntoView({
                block: "nearest"
            });
            if (candidate === firstItem && viewport) viewport.scrollTop = 0;
            if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
            candidate?.focus();
            if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
    }, [
        getItems,
        viewport
    ]);
    const focusSelectedItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>focusFirst([
            selectedItem,
            content
        ]), [
        focusFirst,
        selectedItem,
        content
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (isPositioned) {
            focusSelectedItem();
        }
    }, [
        isPositioned,
        focusSelectedItem
    ]);
    const { onOpenChange, triggerPointerDownPosRef } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (content) {
            let pointerMoveDelta = {
                x: 0,
                y: 0
            };
            const handlePointerMove = (event)=>{
                pointerMoveDelta = {
                    x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
                    y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
                };
            };
            const handlePointerUp = (event)=>{
                if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
                    event.preventDefault();
                } else {
                    if (!content.contains(event.target)) {
                        onOpenChange(false);
                    }
                }
                document.removeEventListener("pointermove", handlePointerMove);
                triggerPointerDownPosRef.current = null;
            };
            if (triggerPointerDownPosRef.current !== null) {
                document.addEventListener("pointermove", handlePointerMove);
                document.addEventListener("pointerup", handlePointerUp, {
                    capture: true,
                    once: true
                });
            }
            return ()=>{
                document.removeEventListener("pointermove", handlePointerMove);
                document.removeEventListener("pointerup", handlePointerUp, {
                    capture: true
                });
            };
        }
    }, [
        content,
        onOpenChange,
        triggerPointerDownPosRef
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const close = ()=>onOpenChange(false);
        window.addEventListener("blur", close);
        window.addEventListener("resize", close);
        return ()=>{
            window.removeEventListener("blur", close);
            window.removeEventListener("resize", close);
        };
    }, [
        onOpenChange
    ]);
    const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search)=>{
        const enabledItems = getItems().filter((item)=>!item.disabled);
        const currentItem = enabledItems.find((item)=>item.ref.current === document.activeElement);
        const nextItem = findNextItem(enabledItems, search, currentItem);
        if (nextItem) {
            setTimeout(()=>nextItem.ref.current.focus());
        }
    });
    const itemRefCallback = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
            setSelectedItem(node);
            if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
    }, [
        context.value
    ]);
    const handleItemLeave = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>content?.focus(), [
        content
    ]);
    const itemTextRefCallback = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node, value, disabled)=>{
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
            setSelectedItemText(node);
        }
    }, [
        context.value
    ]);
    const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
    const popperContentProps = SelectPosition === SelectPopperPosition ? {
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        avoidCollisions
    } : {};
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectContentProvider, {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
            as: Slot,
            allowPinchZoom: true,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                trapped: context.open,
                onMountAutoFocus: (event)=>{
                    event.preventDefault();
                },
                onUnmountAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onCloseAutoFocus, (event)=>{
                    context.trigger?.focus({
                        preventScroll: true
                    });
                    event.preventDefault();
                }),
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    asChild: true,
                    disableOutsidePointerEvents: true,
                    onEscapeKeyDown,
                    onPointerDownOutside,
                    onFocusOutside: (event)=>event.preventDefault(),
                    onDismiss: ()=>context.onOpenChange(false),
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectPosition, {
                        role: "listbox",
                        id: context.contentId,
                        "data-state": context.open ? "open" : "closed",
                        dir: context.dir,
                        onContextMenu: (event)=>event.preventDefault(),
                        ...contentProps,
                        ...popperContentProps,
                        onPlaced: ()=>setIsPositioned(true),
                        ref: composedRefs,
                        style: {
                            // flex layout so we can place the scroll buttons properly
                            display: "flex",
                            flexDirection: "column",
                            // reset the outline by default as the content MAY get focused
                            outline: "none",
                            ...contentProps.style
                        },
                        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(contentProps.onKeyDown, (event)=>{
                            const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                            if (event.key === "Tab") event.preventDefault();
                            if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                            if ([
                                "ArrowUp",
                                "ArrowDown",
                                "Home",
                                "End"
                            ].includes(event.key)) {
                                const items = getItems().filter((item)=>!item.disabled);
                                let candidateNodes = items.map((item)=>item.ref.current);
                                if ([
                                    "ArrowUp",
                                    "End"
                                ].includes(event.key)) {
                                    candidateNodes = candidateNodes.slice().reverse();
                                }
                                if ([
                                    "ArrowUp",
                                    "ArrowDown"
                                ].includes(event.key)) {
                                    const currentElement = event.target;
                                    const currentIndex = candidateNodes.indexOf(currentElement);
                                    candidateNodes = candidateNodes.slice(currentIndex + 1);
                                }
                                setTimeout(()=>focusFirst(candidateNodes));
                                event.preventDefault();
                            }
                        })
                    })
                })
            })
        })
    });
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, onPlaced, ...popperProps } = props;
    const context = useSelectContext(CONTENT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(CONTENT_NAME, __scopeSelect);
    const [contentWrapper, setContentWrapper] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setContent(node));
    const getItems = useCollection(__scopeSelect);
    const shouldExpandOnScrollRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const shouldRepositionRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](true);
    const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
    const position = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
            const triggerRect = context.trigger.getBoundingClientRect();
            const contentRect = content.getBoundingClientRect();
            const valueNodeRect = context.valueNode.getBoundingClientRect();
            const itemTextRect = selectedItemText.getBoundingClientRect();
            if (context.dir !== "rtl") {
                const itemTextOffset = itemTextRect.left - contentRect.left;
                const left = valueNodeRect.left - itemTextOffset;
                const leftDelta = triggerRect.left - left;
                const minContentWidth = triggerRect.width + leftDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const rightEdge = window.innerWidth - CONTENT_MARGIN;
                const clampedLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(left, [
                    CONTENT_MARGIN,
                    // Prevents the content from going off the starting edge of the
                    // viewport. It may still go off the ending edge, but this can be
                    // controlled by the user since they may want to manage overflow in a
                    // specific way.
                    // https://github.com/radix-ui/primitives/issues/2049
                    Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
                ]);
                contentWrapper.style.minWidth = minContentWidth + "px";
                contentWrapper.style.left = clampedLeft + "px";
            } else {
                const itemTextOffset = contentRect.right - itemTextRect.right;
                const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
                const rightDelta = window.innerWidth - triggerRect.right - right;
                const minContentWidth = triggerRect.width + rightDelta;
                const contentWidth = Math.max(minContentWidth, contentRect.width);
                const leftEdge = window.innerWidth - CONTENT_MARGIN;
                const clampedRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(right, [
                    CONTENT_MARGIN,
                    Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
                ]);
                contentWrapper.style.minWidth = minContentWidth + "px";
                contentWrapper.style.right = clampedRight + "px";
            }
            const items = getItems();
            const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
            const itemsHeight = viewport.scrollHeight;
            const contentStyles = window.getComputedStyle(content);
            const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
            const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
            const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
            const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
            const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
            const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
            const viewportStyles = window.getComputedStyle(viewport);
            const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
            const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
            const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
            const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
            const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
            const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
            const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
            const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
            const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
            if (willAlignWithoutTopOverflow) {
                const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
                contentWrapper.style.bottom = "0px";
                const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
                const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + // viewport might have padding bottom, include it to avoid a scrollable viewport
                (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
                const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
                contentWrapper.style.height = height + "px";
            } else {
                const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
                contentWrapper.style.top = "0px";
                const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
                (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
                const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
                contentWrapper.style.height = height + "px";
                viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
            }
            contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
            contentWrapper.style.minHeight = minContentHeight + "px";
            contentWrapper.style.maxHeight = availableHeight + "px";
            onPlaced?.();
            requestAnimationFrame(()=>shouldExpandOnScrollRef.current = true);
        }
    }, [
        getItems,
        context.trigger,
        context.valueNode,
        contentWrapper,
        content,
        viewport,
        selectedItem,
        selectedItemText,
        context.dir,
        onPlaced
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>position(), [
        position
    ]);
    const [contentZIndex, setContentZIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    const handleScrollButtonChange = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
        if (node && shouldRepositionRef.current === true) {
            position();
            focusSelectedItem?.();
            shouldRepositionRef.current = false;
        }
    }, [
        position,
        focusSelectedItem
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectViewportProvider, {
        scope: __scopeSelect,
        contentWrapper,
        shouldExpandOnScrollRef,
        onScrollButtonChange: handleScrollButtonChange,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: setContentWrapper,
            style: {
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                zIndex: contentZIndex
            },
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                ...popperProps,
                ref: composedRefs,
                style: {
                    // When we get the height of the content, it includes borders. If we were to set
                    // the height without having `boxSizing: 'border-box'` it would be too big.
                    boxSizing: "border-box",
                    // We need to ensure the content doesn't get taller than the wrapper
                    maxHeight: "100%",
                    ...popperProps.style
                }
            })
        })
    });
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, align = "start", collisionPadding = CONTENT_MARGIN, ...popperProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ...popperScope,
        ...popperProps,
        ref: forwardedRef,
        align,
        collisionPadding,
        style: {
            // Ensure border-box for floating-ui calculations
            boxSizing: "border-box",
            ...popperProps.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, nonce, ...viewportProps } = props;
    const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
    const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
                },
                nonce
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: __scopeSelect,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                    "data-radix-select-viewport": "",
                    role: "presentation",
                    ...viewportProps,
                    ref: composedRefs,
                    style: {
                        // we use position: 'relative' here on the `viewport` so that when we call
                        // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
                        // (independent of the scrollUpButton).
                        position: "relative",
                        flex: 1,
                        // Viewport should only be scrollable in the vertical direction.
                        // This won't work in vertical writing modes, so we'll need to
                        // revisit this if/when that is supported
                        // https://developer.chrome.com/blog/vertical-form-controls
                        overflow: "hidden auto",
                        ...viewportProps.style
                    },
                    onScroll: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(viewportProps.onScroll, (event)=>{
                        const viewport = event.currentTarget;
                        const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
                        if (shouldExpandOnScrollRef?.current && contentWrapper) {
                            const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
                            if (scrolledBy > 0) {
                                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                                const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                                const cssHeight = parseFloat(contentWrapper.style.height);
                                const prevHeight = Math.max(cssMinHeight, cssHeight);
                                if (prevHeight < availableHeight) {
                                    const nextHeight = prevHeight + scrolledBy;
                                    const clampedNextHeight = Math.min(availableHeight, nextHeight);
                                    const heightDiff = nextHeight - clampedNextHeight;
                                    contentWrapper.style.height = clampedNextHeight + "px";
                                    if (contentWrapper.style.bottom === "0px") {
                                        viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                                        contentWrapper.style.justifyContent = "flex-end";
                                    }
                                }
                            }
                        }
                        prevScrollTopRef.current = viewport.scrollTop;
                    })
                })
            })
        ]
    });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...groupProps } = props;
    const groupId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectGroupContextProvider, {
        scope: __scopeSelect,
        id: groupId,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            role: "group",
            "aria-labelledby": groupId,
            ...groupProps,
            ref: forwardedRef
        })
    });
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...labelProps } = props;
    const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        id: groupContext.id,
        ...labelProps,
        ref: forwardedRef
    });
});
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, value, disabled = false, textValue: textValueProp, ...itemProps } = props;
    const context = useSelectContext(ITEM_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](textValueProp ?? "");
    const [isFocused, setIsFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>contentContext.itemRefCallback?.(node, value, disabled));
    const textId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("touch");
    const handleSelect = ()=>{
        if (!disabled) {
            context.onValueChange(value);
            context.onOpenChange(false);
        }
    };
    if (value === "") {
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectItemContextProvider, {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node)=>{
            setTextValue((prevTextValue)=>prevTextValue || (node?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
            scope: __scopeSelect,
            value,
            disabled,
            textValue,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                role: "option",
                "aria-labelledby": textId,
                "data-highlighted": isFocused ? "" : void 0,
                "aria-selected": isSelected && isFocused,
                "data-state": isSelected ? "checked" : "unchecked",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                ...itemProps,
                ref: composedRefs,
                onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onFocus, ()=>setIsFocused(true)),
                onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onBlur, ()=>setIsFocused(false)),
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onClick, ()=>{
                    if (pointerTypeRef.current !== "mouse") handleSelect();
                }),
                onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerUp, ()=>{
                    if (pointerTypeRef.current === "mouse") handleSelect();
                }),
                onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerDown, (event)=>{
                    pointerTypeRef.current = event.pointerType;
                }),
                onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerMove, (event)=>{
                    pointerTypeRef.current = event.pointerType;
                    if (disabled) {
                        contentContext.onItemLeave?.();
                    } else if (pointerTypeRef.current === "mouse") {
                        event.currentTarget.focus({
                            preventScroll: true
                        });
                    }
                }),
                onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onPointerLeave, (event)=>{
                    if (event.currentTarget === document.activeElement) {
                        contentContext.onItemLeave?.();
                    }
                }),
                onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onKeyDown, (event)=>{
                    const isTypingAhead = contentContext.searchRef?.current !== "";
                    if (isTypingAhead && event.key === " ") return;
                    if (SELECTION_KEYS.includes(event.key)) handleSelect();
                    if (event.key === " ") event.preventDefault();
                })
            })
        })
    });
});
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, className, style, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setItemTextNode(node), itemContext.onItemTextChange, (node)=>contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled));
    const textContent = itemTextNode?.textContent;
    const nativeOption = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("option", {
            value: itemContext.value,
            disabled: itemContext.disabled,
            children: textContent
        }, itemContext.value), [
        itemContext.disabled,
        itemContext.value,
        textContent
    ]);
    const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        onNativeOptionAdd(nativeOption);
        return ()=>onNativeOptionRemove(nativeOption);
    }, [
        onNativeOptionAdd,
        onNativeOptionRemove,
        nativeOption
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
                id: itemContext.textId,
                ...itemTextProps,
                ref: composedRefs
            }),
            itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"](itemTextProps.children, context.valueNode) : null
        ]
    });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
    return itemContext.isSelected ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "aria-hidden": true,
        ...itemIndicatorProps,
        ref: forwardedRef
    }) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
    const [canScrollUp, setCanScrollUp] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, viewportContext.onScrollButtonChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            let handleScroll2 = function() {
                const canScrollUp2 = viewport.scrollTop > 0;
                setCanScrollUp(canScrollUp2);
            };
            var handleScroll = handleScroll2;
            const viewport = contentContext.viewport;
            handleScroll2();
            viewport.addEventListener("scroll", handleScroll2);
            return ()=>viewport.removeEventListener("scroll", handleScroll2);
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollUp ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectScrollButtonImpl, {
        ...props,
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport, selectedItem } = contentContext;
            if (viewport && selectedItem) {
                viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
            }
        }
    }) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
    const [canScrollDown, setCanScrollDown] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, viewportContext.onScrollButtonChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (contentContext.viewport && contentContext.isPositioned) {
            let handleScroll2 = function() {
                const maxScroll = viewport.scrollHeight - viewport.clientHeight;
                const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
                setCanScrollDown(canScrollDown2);
            };
            var handleScroll = handleScroll2;
            const viewport = contentContext.viewport;
            handleScroll2();
            viewport.addEventListener("scroll", handleScroll2);
            return ()=>viewport.removeEventListener("scroll", handleScroll2);
        }
    }, [
        contentContext.viewport,
        contentContext.isPositioned
    ]);
    return canScrollDown ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SelectScrollButtonImpl, {
        ...props,
        ref: composedRefs,
        onAutoScroll: ()=>{
            const { viewport, selectedItem } = contentContext;
            if (viewport && selectedItem) {
                viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
            }
        }
    }) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
    const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
    const autoScrollTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const getItems = useCollection(__scopeSelect);
    const clearAutoScrollTimer = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (autoScrollTimerRef.current !== null) {
            window.clearInterval(autoScrollTimerRef.current);
            autoScrollTimerRef.current = null;
        }
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>clearAutoScrollTimer();
    }, [
        clearAutoScrollTimer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const activeItem = getItems().find((item)=>item.ref.current === document.activeElement);
        activeItem?.ref.current?.scrollIntoView({
            block: "nearest"
        });
    }, [
        getItems
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "aria-hidden": true,
        ...scrollIndicatorProps,
        ref: forwardedRef,
        style: {
            flexShrink: 0,
            ...scrollIndicatorProps.style
        },
        onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(scrollIndicatorProps.onPointerDown, ()=>{
            if (autoScrollTimerRef.current === null) {
                autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
            }
        }),
        onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(scrollIndicatorProps.onPointerMove, ()=>{
            contentContext.onItemLeave?.();
            if (autoScrollTimerRef.current === null) {
                autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
            }
        }),
        onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(scrollIndicatorProps.onPointerLeave, ()=>{
            clearAutoScrollTimer();
        })
    });
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...separatorProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "aria-hidden": true,
        ...separatorProps,
        ref: forwardedRef
    });
});
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow";
var SelectArrow = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSelect, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeSelect);
    const context = useSelectContext(ARROW_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ARROW_NAME, __scopeSelect);
    return context.open && contentContext.position === "popper" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    }) : null;
});
SelectArrow.displayName = ARROW_NAME;
var BUBBLE_INPUT_NAME = "SelectBubbleInput";
var SelectBubbleInput = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ __scopeSelect, value, ...props }, forwardedRef)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const prevValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrevious"])(value);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const select = ref.current;
        if (!select) return;
        const selectProto = window.HTMLSelectElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event("change", {
                bubbles: true
            });
            setValue.call(select, value);
            select.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].select, {
        ...props,
        style: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISUALLY_HIDDEN_STYLES"],
            ...props.style
        },
        ref: composedRefs,
        defaultValue: value
    });
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(value) {
    return value === "" || value === void 0;
}
function useTypeaheadSearch(onSearchChange) {
    const handleSearchChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onSearchChange);
    const searchRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("");
    const timerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const handleTypeaheadSearch = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((key)=>{
        const search = searchRef.current + key;
        handleSearchChange(search);
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current);
            if (value !== "") timerRef.current = window.setTimeout(()=>updateSearch(""), 1e3);
        })(search);
    }, [
        handleSearchChange
    ]);
    const resetTypeahead = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        searchRef.current = "";
        window.clearTimeout(timerRef.current);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>window.clearTimeout(timerRef.current);
    }, []);
    return [
        searchRef,
        handleTypeaheadSearch,
        resetTypeahead
    ];
}
function findNextItem(items, search, currentItem) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]);
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
    let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
    const excludeCurrentItem = normalizedSearch.length === 1;
    if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v)=>v !== currentItem);
    const nextItem = wrappedItems.find((item)=>item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
    return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
var Root2 = Select;
var Trigger = SelectTrigger;
var Value = SelectValue;
var Icon = SelectIcon;
var Portal = SelectPortal;
var Content2 = SelectContent;
var Viewport = SelectViewport;
var Group = SelectGroup;
var Label = SelectLabel;
var Item = SelectItem;
var ItemText = SelectItemText;
var ItemIndicator = SelectItemIndicator;
var ScrollUpButton = SelectScrollUpButton;
var ScrollDownButton = SelectScrollDownButton;
var Separator = SelectSeparator;
var Arrow2 = SelectArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript) <export * as Select>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox,
    "CheckboxIndicator",
    ()=>CheckboxIndicator,
    "Indicator",
    ()=>CheckboxIndicator,
    "Root",
    ()=>Checkbox,
    "createCheckboxScope",
    ()=>createCheckboxScope,
    "unstable_BubbleInput",
    ()=>CheckboxBubbleInput,
    "unstable_CheckboxBubbleInput",
    ()=>CheckboxBubbleInput,
    "unstable_CheckboxProvider",
    ()=>CheckboxProvider,
    "unstable_CheckboxTrigger",
    ()=>CheckboxTrigger,
    "unstable_Provider",
    ()=>CheckboxProvider,
    "unstable_Trigger",
    ()=>CheckboxTrigger
]);
// src/checkbox.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
    const { __scopeCheckbox, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value = "on", // @ts-expect-error
    internal_do_not_use_render } = props;
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: checkedProp,
        defaultProp: defaultChecked ?? false,
        onChange: onCheckedChange,
        caller: CHECKBOX_NAME
    });
    const [control, setControl] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [bubbleInput, setBubbleInput] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const hasConsumerStoppedPropagationRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const isFormControl = control ? !!form || !!control.closest("form") : // We set this to true by default so that events bubble to forms without JS (SSR)
    true;
    const context = {
        checked,
        disabled,
        setChecked,
        control,
        setControl,
        name,
        form,
        value,
        hasConsumerStoppedPropagationRef,
        required,
        defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
        isFormControl,
        bubbleInput,
        setBubbleInput
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CheckboxProviderImpl, {
        scope: __scopeCheckbox,
        ...context,
        children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    });
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef)=>{
    const { control, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, isFormControl, bubbleInput } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, setControl);
    const initialCheckedStateRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](checked);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const form = control?.form;
        if (form) {
            const reset = ()=>setChecked(initialCheckedStateRef.current);
            form.addEventListener("reset", reset);
            return ()=>form.removeEventListener("reset", reset);
        }
    }, [
        control,
        setChecked
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onKeyDown, (event)=>{
            if (event.key === "Enter") event.preventDefault();
        }),
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onClick, (event)=>{
            setChecked((prevChecked)=>isIndeterminate(prevChecked) ? true : !prevChecked);
            if (bubbleInput && isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
        })
    });
});
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCheckbox, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...checkboxProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CheckboxProvider, {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CheckboxTrigger, {
                        ...checkboxProps,
                        ref: forwardedRef,
                        __scopeCheckbox
                    }),
                    isFormControl && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CheckboxBubbleInput, {
                        __scopeCheckbox
                    })
                ]
            })
    });
});
Checkbox.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "none",
                ...props.style
            }
        })
    });
});
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ __scopeCheckbox, ...props }, forwardedRef)=>{
    const { control, hasConsumerStoppedPropagationRef, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, setBubbleInput);
    const prevChecked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrevious"])(checked);
    const controlSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSize"])(control);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const input = bubbleInput;
        if (!input) return;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
        const setChecked = descriptor.set;
        const bubbles = !hasConsumerStoppedPropagationRef.current;
        if (prevChecked !== checked && setChecked) {
            const event = new Event("click", {
                bubbles
            });
            input.indeterminate = isIndeterminate(checked);
            setChecked.call(input, isIndeterminate(checked) ? false : checked);
            input.dispatchEvent(event);
        }
    }, [
        bubbleInput,
        prevChecked,
        checked,
        hasConsumerStoppedPropagationRef
    ]);
    const defaultCheckedRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].input, {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
            ...props.style,
            ...controlSize,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
            // We transform because the input is absolutely positioned but we have
            // rendered it **after** the button. This pulls it back to sit on top
            // of the button.
            transform: "translateX(-100%)"
        }
    });
});
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
    return typeof value === "function";
}
function isIndeterminate(checked) {
    return checked === "indeterminate";
}
function getState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript) <export * as Checkbox>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Indicator",
    ()=>Indicator,
    "Progress",
    ()=>Progress,
    "ProgressIndicator",
    ()=>ProgressIndicator,
    "Root",
    ()=>Root,
    "createProgressScope",
    ()=>createProgressScope
]);
// src/progress.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeProgress, value: valueProp = null, max: maxProp, getValueLabel = defaultGetValueLabel, ...progressProps } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
        console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
        console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ProgressProvider, {
        scope: __scopeProgress,
        value,
        max,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "aria-valuemax": max,
            "aria-valuemin": 0,
            "aria-valuenow": isNumber(value) ? value : void 0,
            "aria-valuetext": valueLabel,
            role: "progressbar",
            "data-state": getProgressState(value, max),
            "data-value": value ?? void 0,
            "data-max": max,
            ...progressProps,
            ref: forwardedRef
        })
    });
});
Progress.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
    });
});
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
    return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
    return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
    return typeof value === "number";
}
function isValidMaxNumber(max) {
    return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
    return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
    return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
    return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress;
var Indicator = ProgressIndicator;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript) <export * as Progress>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-popover/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Anchor",
    ()=>Anchor2,
    "Arrow",
    ()=>Arrow2,
    "Close",
    ()=>Close,
    "Content",
    ()=>Content2,
    "Popover",
    ()=>Popover,
    "PopoverAnchor",
    ()=>PopoverAnchor,
    "PopoverArrow",
    ()=>PopoverArrow,
    "PopoverClose",
    ()=>PopoverClose,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverPortal",
    ()=>PopoverPortal,
    "PopoverTrigger",
    ()=>PopoverTrigger,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root2,
    "Trigger",
    ()=>Trigger,
    "createPopoverScope",
    ()=>createPopoverScope
]);
// src/popover.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-popper/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
;
;
;
;
;
;
;
var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(POPOVER_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"])();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover = (props)=>{
    const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
    const popperScope = usePopperScope(__scopePopover);
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [hasCustomAnchor, setHasCustomAnchor] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: POPOVER_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PopoverProvider, {
            scope: __scopePopover,
            contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
            triggerRef,
            open,
            onOpenChange: setOpen,
            onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setOpen((prevOpen)=>!prevOpen), [
                setOpen
            ]),
            hasCustomAnchor,
            onCustomAnchorAdd: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setHasCustomAnchor(true), []),
            onCustomAnchorRemove: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setHasCustomAnchor(false), []),
            modal,
            children
        })
    });
};
Popover.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        onCustomAnchorAdd();
        return ()=>onCustomAnchorRemove();
    }, [
        onCustomAnchorAdd,
        onCustomAnchorRemove
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        ...popperScope,
        ...anchorProps,
        ref: forwardedRef
    });
});
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger";
var PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...popperScope,
        children: trigger
    });
});
PopoverTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
    forceMount: void 0
});
var PopoverPortal = (props)=>{
    const { __scopePopover, forceMount, children, container } = props;
    const context = usePopoverContext(PORTAL_NAME, __scopePopover);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopePopover,
        forceMount,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
                asChild: true,
                container,
                children
            })
        })
    });
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent";
var PopoverContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PopoverContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PopoverContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
PopoverContent.displayName = CONTENT_NAME;
var Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])("PopoverContent.RemoveScroll");
var PopoverContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef);
    const isRightClickOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const content = contentRef.current;
        if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideOthers"])(content);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
        as: Slot,
        allowPinchZoom: true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PopoverContentImpl, {
            ...props,
            ref: composedRefs,
            trapFocus: context.open,
            disableOutsidePointerEvents: true,
            onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
                event.preventDefault();
                if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
            }),
            onPointerDownOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownOutside, (event)=>{
                const originalEvent = event.detail.originalEvent;
                const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
                const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                isRightClickOutsideRef.current = isRightClick;
            }, {
                checkForDefaultPrevented: false
            }),
            onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault(), {
                checkForDefaultPrevented: false
            })
        })
    });
});
var PopoverContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerDownOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PopoverContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var PopoverContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusScope"], {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DismissableLayer"], {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: ()=>context.onOpenChange(false),
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-state": getState(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                    ...contentProps.style,
                    // re-namespace exposed content custom properties
                    ...{
                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                }
            })
        })
    });
});
var CLOSE_NAME = "PopoverClose";
var PopoverClose = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME, __scopePopover);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, ()=>context.onOpenChange(false))
    });
});
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow";
var PopoverArrow = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopePopover);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
PopoverArrow.displayName = ARROW_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var Root2 = Popover;
var Anchor2 = PopoverAnchor;
var Trigger = PopoverTrigger;
var Portal = PopoverPortal;
var Content2 = PopoverContent;
var Close = PopoverClose;
var Arrow2 = PopoverArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-popover/dist/index.mjs [app-ssr] (ecmascript) <export * as Popover>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-popover/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-roving-focus/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Item",
    ()=>Item,
    "Root",
    ()=>Root,
    "RovingFocusGroup",
    ()=>RovingFocusGroup,
    "RovingFocusGroupItem",
    ()=>RovingFocusGroupItem,
    "createRovingFocusGroupScope",
    ()=>createRovingFocusGroupScope
]);
// src/roving-focus-group.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(GROUP_NAME, [
    createCollectionScope
]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeRovingFocusGroup,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
            scope: props.__scopeRovingFocusGroup,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RovingFocusGroupImpl, {
                ...props,
                ref: forwardedRef
            })
        })
    });
});
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [currentTabStopId, setCurrentTabStopId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId ?? null,
        onChange: onCurrentTabStopIdChange,
        caller: GROUP_NAME
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const handleEntryFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEntryFocus);
    const getItems = useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const [focusableItemsCount, setFocusableItemsCount] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const node = ref.current;
        if (node) {
            node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
            return ()=>node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
        }
    }, [
        handleEntryFocus
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((tabStopId)=>setCurrentTabStopId(tabStopId), [
            setCurrentTabStopId
        ]),
        onItemShiftTab: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setIsTabbingBackOut(true), []),
        onFocusableItemAdd: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setFocusableItemsCount((prevCount)=>prevCount + 1), []),
        onFocusableItemRemove: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setFocusableItemsCount((prevCount)=>prevCount - 1), []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation,
            ...groupProps,
            ref: composedRefs,
            style: {
                outline: "none",
                ...props.style
            },
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, ()=>{
                isClickFocusRef.current = true;
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, (event)=>{
                const isKeyboardFocus = !isClickFocusRef.current;
                if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                    const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
                    event.currentTarget.dispatchEvent(entryFocusEvent);
                    if (!entryFocusEvent.defaultPrevented) {
                        const items = getItems().filter((item)=>item.focusable);
                        const activeItem = items.find((item)=>item.active);
                        const currentItem = items.find((item)=>item.id === currentTabStopId);
                        const candidateItems = [
                            activeItem,
                            currentItem,
                            ...items
                        ].filter(Boolean);
                        const candidateNodes = candidateItems.map((item)=>item.ref.current);
                        focusFirst(candidateNodes, preventScrollOnEntryFocus);
                    }
                }
                isClickFocusRef.current = false;
            }),
            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, ()=>setIsTabbingBackOut(false))
        })
    });
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
    const autoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (focusable) {
            onFocusableItemAdd();
            return ()=>onFocusableItemRemove();
        }
    }, [
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, (event)=>{
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id);
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>context.onItemFocus(id)),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                if (event.key === "Tab" && event.shiftKey) {
                    context.onItemShiftTab();
                    return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                    event.preventDefault();
                    const items = getItems().filter((item)=>item.focusable);
                    let candidateNodes = items.map((item)=>item.ref.current);
                    if (focusIntent === "last") candidateNodes.reverse();
                    else if (focusIntent === "prev" || focusIntent === "next") {
                        if (focusIntent === "prev") candidateNodes.reverse();
                        const currentIndex = candidateNodes.indexOf(event.currentTarget);
                        candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                    }
                    setTimeout(()=>focusFirst(candidateNodes));
                }
            }),
            children: typeof children === "function" ? children({
                isCurrentTabStop,
                hasTabStop: currentTabStopId != null
            }) : children
        })
    });
});
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && [
        "ArrowLeft",
        "ArrowRight"
    ].includes(key)) return void 0;
    if (orientation === "horizontal" && [
        "ArrowUp",
        "ArrowDown"
    ].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus({
            preventScroll
        });
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Indicator",
    ()=>Indicator,
    "Item",
    ()=>Item2,
    "RadioGroup",
    ()=>RadioGroup,
    "RadioGroupIndicator",
    ()=>RadioGroupIndicator,
    "RadioGroupItem",
    ()=>RadioGroupItem,
    "Root",
    ()=>Root2,
    "createRadioGroupScope",
    ()=>createRadioGroupScope
]);
// src/radio-group.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-roving-focus/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
;
;
;
;
;
;
;
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, form, ...radioProps } = props;
    const [button, setButton] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setButton(node));
    const hasConsumerStoppedPropagationRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(RadioProvider, {
        scope: __scopeRadio,
        checked,
        disabled,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
                type: "button",
                role: "radio",
                "aria-checked": checked,
                "data-state": getState(checked),
                "data-disabled": disabled ? "" : void 0,
                disabled,
                value,
                ...radioProps,
                ref: composedRefs,
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, (event)=>{
                    if (!checked) onCheck?.();
                    if (isFormControl) {
                        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                        if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
                    }
                })
            }),
            isFormControl && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RadioBubbleInput, {
                control: button,
                bubbles: !hasConsumerStoppedPropagationRef.current,
                name,
                value,
                checked,
                required,
                disabled,
                form,
                style: {
                    transform: "translateX(-100%)"
                }
            })
        ]
    });
});
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.checked,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef
        })
    });
});
RadioIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var RadioBubbleInput = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ __scopeRadio, control, checked, bubbles = true, ...props }, forwardedRef)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, forwardedRef);
    const prevChecked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrevious"])(checked);
    const controlSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSize"])(control);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const input = ref.current;
        if (!input) return;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
            const event = new Event("click", {
                bubbles
            });
            setChecked.call(input, checked);
            input.dispatchEvent(event);
        }
    }, [
        prevChecked,
        checked,
        bubbles
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].input, {
        type: "radio",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
            ...props.style,
            ...controlSize,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    });
});
RadioBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
    return checked ? "checked" : "unchecked";
}
;
var ARROW_KEYS = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(RADIO_GROUP_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"],
    createRadioScope
]);
var useRovingFocusGroupScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"])();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        defaultProp: defaultValue ?? null,
        onChange: onValueChange,
        caller: RADIO_GROUP_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RadioGroupProvider, {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: forwardedRef
            })
        })
    });
});
RadioGroup.displayName = RADIO_GROUP_NAME;
var ITEM_NAME = "RadioGroupItem";
var RadioGroupItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext(ITEM_NAME, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleKeyDown = (event)=>{
            if (ARROW_KEYS.includes(event.key)) {
                isArrowKeyPressedRef.current = true;
            }
        };
        const handleKeyUp = ()=>isArrowKeyPressedRef.current = false;
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Radio, {
            disabled: isDisabled,
            required: context.required,
            checked,
            ...radioScope,
            ...itemProps,
            name: context.name,
            ref: composedRefs,
            onCheck: ()=>context.onValueChange(itemProps.value),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])((event)=>{
                if (event.key === "Enter") event.preventDefault();
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(itemProps.onFocus, ()=>{
                if (isArrowKeyPressedRef.current) ref.current?.click();
            })
        })
    });
});
RadioGroupItem.displayName = ITEM_NAME;
var INDICATOR_NAME2 = "RadioGroupIndicator";
var RadioGroupIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RadioIndicator, {
        ...radioScope,
        ...indicatorProps,
        ref: forwardedRef
    });
});
RadioGroupIndicator.displayName = INDICATOR_NAME2;
var Root2 = RadioGroup;
var Item2 = RadioGroupItem;
var Indicator = RadioGroupIndicator;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-ssr] (ecmascript) <export * as RadioGroup>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slider/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Range",
    ()=>Range,
    "Root",
    ()=>Root,
    "Slider",
    ()=>Slider,
    "SliderRange",
    ()=>SliderRange,
    "SliderThumb",
    ()=>SliderThumb,
    "SliderTrack",
    ()=>SliderTrack,
    "Thumb",
    ()=>Thumb,
    "Track",
    ()=>Track,
    "createSliderScope",
    ()=>createSliderScope
]);
// src/slider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
;
var PAGE_KEYS = [
    "PageUp",
    "PageDown"
];
var ARROW_KEYS = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
];
var BACK_KEYS = {
    "from-left": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowLeft"
    ],
    "from-right": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowRight"
    ],
    "from-bottom": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowLeft"
    ],
    "from-top": [
        "Home",
        "PageDown",
        "ArrowUp",
        "ArrowLeft"
    ]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(SLIDER_NAME);
var [createSliderContext, createSliderScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(SLIDER_NAME, [
    createCollectionScope
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { name, min = 0, max = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [
        min
    ], value, onValueChange = ()=>{}, onValueCommit = ()=>{}, inverted = false, form, ...sliderProps } = props;
    const thumbRefs = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const isHorizontal = orientation === "horizontal";
    const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
    const [values = [], setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: value,
        defaultProp: defaultValue,
        onChange: (value2)=>{
            const thumbs = [
                ...thumbRefs.current
            ];
            thumbs[valueIndexToChangeRef.current]?.focus();
            onValueChange(value2);
        }
    });
    const valuesBeforeSlideStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](values);
    function handleSlideStart(value2) {
        const closestIndex = getClosestValueIndex(values, value2);
        updateValues(value2, closestIndex);
    }
    function handleSlideMove(value2) {
        updateValues(value2, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
        const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
        const nextValue = values[valueIndexToChangeRef.current];
        const hasChanged = nextValue !== prevValue;
        if (hasChanged) onValueCommit(values);
    }
    function updateValues(value2, atIndex, { commit } = {
        commit: false
    }) {
        const decimalCount = getDecimalCount(step);
        const snapToStep = roundValue(Math.round((value2 - min) / step) * step + min, decimalCount);
        const nextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(snapToStep, [
            min,
            max
        ]);
        setValues((prevValues = [])=>{
            const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
            if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
                valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
                const hasChanged = String(nextValues) !== String(prevValues);
                if (hasChanged && commit) onValueCommit(nextValues);
                return hasChanged ? nextValues : prevValues;
            } else {
                return prevValues;
            }
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderProvider, {
        scope: props.__scopeSlider,
        name,
        disabled,
        min,
        max,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        form,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
            scope: props.__scopeSlider,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeSlider,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderOrientation, {
                    "aria-disabled": disabled,
                    "data-disabled": disabled ? "" : void 0,
                    ...sliderProps,
                    ref: forwardedRef,
                    onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(sliderProps.onPointerDown, ()=>{
                        if (!disabled) valuesBeforeSlideStartRef.current = values;
                    }),
                    min,
                    max,
                    inverted,
                    onSlideStart: disabled ? void 0 : handleSlideStart,
                    onSlideMove: disabled ? void 0 : handleSlideMove,
                    onSlideEnd: disabled ? void 0 : handleSlideEnd,
                    onHomeKeyDown: ()=>!disabled && updateValues(min, 0, {
                            commit: true
                        }),
                    onEndKeyDown: ()=>!disabled && updateValues(max, values.length - 1, {
                            commit: true
                        }),
                    onStepKeyDown: ({ event, direction: stepDirection })=>{
                        if (!disabled) {
                            const isPageKey = PAGE_KEYS.includes(event.key);
                            const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS.includes(event.key);
                            const multiplier = isSkipKey ? 10 : 1;
                            const atIndex = valueIndexToChangeRef.current;
                            const value2 = values[atIndex];
                            const stepInDirection = step * multiplier * stepDirection;
                            updateValues(value2 + stepInDirection, atIndex, {
                                commit: true
                            });
                        }
                    }
                })
            })
        })
    });
});
Slider.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1
});
var SliderHorizontal = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { min, max, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
    const [slider, setSlider] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setSlider(node));
    const rectRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const isDirectionLTR = direction === "ltr";
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || slider.getBoundingClientRect();
        const input = [
            0,
            rect.width
        ];
        const output = isSlidingFromLeft ? [
            min,
            max
        ] : [
            max,
            min
        ];
        const value = linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.left);
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? "left" : "right",
        endEdge: isSlidingFromLeft ? "right" : "left",
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderImpl, {
            dir: direction,
            "data-orientation": "horizontal",
            ...sliderProps,
            ref: composedRefs,
            style: {
                ...sliderProps.style,
                ["--radix-slider-thumb-transform"]: "translateX(-50%)"
            },
            onSlideStart: (event)=>{
                const value = getValueFromPointer(event.clientX);
                onSlideStart?.(value);
            },
            onSlideMove: (event)=>{
                const value = getValueFromPointer(event.clientX);
                onSlideMove?.(value);
            },
            onSlideEnd: ()=>{
                rectRef.current = void 0;
                onSlideEnd?.();
            },
            onStepKeyDown: (event)=>{
                const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
                const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
                onStepKeyDown?.({
                    event,
                    direction: isBackKey ? -1 : 1
                });
            }
        })
    });
});
var SliderVertical = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { min, max, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
    const sliderRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, sliderRef);
    const rectRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
        const input = [
            0,
            rect.height
        ];
        const output = isSlidingFromBottom ? [
            max,
            min
        ] : [
            min,
            max
        ];
        const value = linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.top);
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? "bottom" : "top",
        endEdge: isSlidingFromBottom ? "top" : "bottom",
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderImpl, {
            "data-orientation": "vertical",
            ...sliderProps,
            ref,
            style: {
                ...sliderProps.style,
                ["--radix-slider-thumb-transform"]: "translateY(50%)"
            },
            onSlideStart: (event)=>{
                const value = getValueFromPointer(event.clientY);
                onSlideStart?.(value);
            },
            onSlideMove: (event)=>{
                const value = getValueFromPointer(event.clientY);
                onSlideMove?.(value);
            },
            onSlideEnd: ()=>{
                rectRef.current = void 0;
                onSlideEnd?.();
            },
            onStepKeyDown: (event)=>{
                const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
                const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
                onStepKeyDown?.({
                    event,
                    direction: isBackKey ? -1 : 1
                });
            }
        })
    });
});
var SliderImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...sliderProps,
        ref: forwardedRef,
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
            if (event.key === "Home") {
                onHomeKeyDown(event);
                event.preventDefault();
            } else if (event.key === "End") {
                onEndKeyDown(event);
                event.preventDefault();
            } else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
                onStepKeyDown(event);
                event.preventDefault();
            }
        }),
        onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, (event)=>{
            const target = event.target;
            target.setPointerCapture(event.pointerId);
            event.preventDefault();
            if (context.thumbs.has(target)) {
                target.focus();
            } else {
                onSlideStart(event);
            }
        }),
        onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) {
                target.releasePointerCapture(event.pointerId);
                onSlideEnd(event);
            }
        })
    });
});
var TRACK_NAME = "SliderTrack";
var SliderTrack = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        ...trackProps,
        ref: forwardedRef
    });
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map((value)=>convertValueToPercentage(value, context.min, context.max));
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        ...rangeProps,
        ref: composedRefs,
        style: {
            ...props.style,
            [orientation.startEdge]: offsetStart + "%",
            [orientation.endEdge]: offsetEnd + "%"
        }
    });
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var SliderThumb = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const getItems = useCollection(props.__scopeSlider);
    const [thumb, setThumb] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setThumb(node));
    const index = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>thumb ? getItems().findIndex((item)=>item.ref.current === thumb) : -1, [
        getItems,
        thumb
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderThumbImpl, {
        ...props,
        ref: composedRefs,
        index
    });
});
var SliderThumbImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSlider, index, name, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider);
    const [thumb, setThumb] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setThumb(node));
    const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSize"])(thumb);
    const value = context.values[index];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index, context.values.length);
    const orientationSize = size?.[orientation.size];
    const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (thumb) {
            context.thumbs.add(thumb);
            return ()=>{
                context.thumbs.delete(thumb);
            };
        }
    }, [
        thumb,
        context.thumbs
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
        style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        },
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
                scope: props.__scopeSlider,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
                    role: "slider",
                    "aria-label": props["aria-label"] || label,
                    "aria-valuemin": context.min,
                    "aria-valuenow": value,
                    "aria-valuemax": context.max,
                    "aria-orientation": context.orientation,
                    "data-orientation": context.orientation,
                    "data-disabled": context.disabled ? "" : void 0,
                    tabIndex: context.disabled ? void 0 : 0,
                    ...thumbProps,
                    ref: composedRefs,
                    style: value === void 0 ? {
                        display: "none"
                    } : props.style,
                    onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>{
                        context.valueIndexToChangeRef.current = index;
                    })
                })
            }),
            isFormControl && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SliderBubbleInput, {
                name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
                form: context.form,
                value
            }, index)
        ]
    });
});
SliderThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "RadioBubbleInput";
var SliderBubbleInput = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ __scopeSlider, value, ...props }, forwardedRef)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, forwardedRef);
    const prevValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrevious"])(value);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const input = ref.current;
        if (!input) return;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event("input", {
                bubbles: true
            });
            setValue.call(input, value);
            input.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].input, {
        style: {
            display: "none"
        },
        ...props,
        ref: composedRefs,
        defaultValue: value
    });
});
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
    const nextValues = [
        ...prevValues
    ];
    nextValues[atIndex] = nextValue;
    return nextValues.sort((a, b)=>a - b);
}
function convertValueToPercentage(value, min, max) {
    const maxSteps = max - min;
    const percentPerStep = 100 / maxSteps;
    const percentage = percentPerStep * (value - min);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(percentage, [
        0,
        100
    ]);
}
function getLabel(index, totalValues) {
    if (totalValues > 2) {
        return `Value ${index + 1} of ${totalValues}`;
    } else if (totalValues === 2) {
        return [
            "Minimum",
            "Maximum"
        ][index];
    } else {
        return void 0;
    }
}
function getClosestValueIndex(values, nextValue) {
    if (values.length === 1) return 0;
    const distances = values.map((value)=>Math.abs(value - nextValue));
    const closestDistance = Math.min(...distances);
    return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
    const halfWidth = width / 2;
    const halfPercent = 50;
    const offset = linearScale([
        0,
        halfPercent
    ], [
        0,
        halfWidth
    ]);
    return (halfWidth - offset(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
    return values.slice(0, -1).map((value, index)=>values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
    if (minStepsBetweenValues > 0) {
        const stepsBetweenValues = getStepsBetweenValues(values);
        const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
        return actualMinStepsBetweenValues >= minStepsBetweenValues;
    }
    return true;
}
function linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function getDecimalCount(value) {
    return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
    const rounder = Math.pow(10, decimalCount);
    return Math.round(value * rounder) / rounder;
}
var Root = Slider;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb = SliderThumb;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slider/dist/index.mjs [app-ssr] (ecmascript) <export * as Slider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slider/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-switch/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Switch",
    ()=>Switch,
    "SwitchThumb",
    ()=>SwitchThumb,
    "Thumb",
    ()=>Thumb,
    "createSwitchScope",
    ()=>createSwitchScope
]);
// src/switch.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, form, ...switchProps } = props;
    const [button, setButton] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setButton(node));
    const hasConsumerStoppedPropagationRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: checkedProp,
        defaultProp: defaultChecked ?? false,
        onChange: onCheckedChange,
        caller: SWITCH_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(SwitchProvider, {
        scope: __scopeSwitch,
        checked,
        disabled,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
                type: "button",
                role: "switch",
                "aria-checked": checked,
                "aria-required": required,
                "data-state": getState(checked),
                "data-disabled": disabled ? "" : void 0,
                disabled,
                value,
                ...switchProps,
                ref: composedRefs,
                onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, (event)=>{
                    setChecked((prevChecked)=>!prevChecked);
                    if (isFormControl) {
                        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                        if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
                    }
                })
            }),
            isFormControl && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SwitchBubbleInput, {
                control: button,
                bubbles: !hasConsumerStoppedPropagationRef.current,
                name,
                value,
                checked,
                required,
                disabled,
                form,
                style: {
                    transform: "translateX(-100%)"
                }
            })
        ]
    });
});
Switch.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
    });
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ __scopeSwitch, control, checked, bubbles = true, ...props }, forwardedRef)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, forwardedRef);
    const prevChecked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrevious"])(checked);
    const controlSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSize"])(control);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const input = ref.current;
        if (!input) return;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
            const event = new Event("click", {
                bubbles
            });
            setChecked.call(input, checked);
            input.dispatchEvent(event);
        }
    }, [
        prevChecked,
        checked,
        bubbles
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
            ...props.style,
            ...controlSize,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    });
});
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
    return checked ? "checked" : "unchecked";
}
var Root = Switch;
var Thumb = SwitchThumb;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-switch/dist/index.mjs [app-ssr] (ecmascript) <export * as Switch>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-switch/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-collapsible/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collapsible",
    ()=>Collapsible,
    "CollapsibleContent",
    ()=>CollapsibleContent,
    "CollapsibleTrigger",
    ()=>CollapsibleTrigger,
    "Content",
    ()=>Content,
    "Root",
    ()=>Root,
    "Trigger",
    ()=>Trigger,
    "createCollapsibleScope",
    ()=>createCollapsibleScope
]);
// src/collapsible.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollapsibleProvider, {
        scope: __scopeCollapsible,
        disabled,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
        })
    });
});
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
});
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: ({ present })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CollapsibleContentImpl, {
                ...contentProps,
                ref: forwardedRef,
                present
            })
    });
});
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCollapsible, present, children, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
    const [isPresent, setIsPresent] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](present);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const heightRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const height = heightRef.current;
    const widthRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const width = widthRef.current;
    const isOpen = context.open || isPresent;
    const isMountAnimationPreventedRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](isOpen);
    const originalStylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const rAF = requestAnimationFrame(()=>isMountAnimationPreventedRef.current = false);
        return ()=>cancelAnimationFrame(rAF);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const node = ref.current;
        if (node) {
            originalStylesRef.current = originalStylesRef.current || {
                transitionDuration: node.style.transitionDuration,
                animationName: node.style.animationName
            };
            node.style.transitionDuration = "0s";
            node.style.animationName = "none";
            const rect = node.getBoundingClientRect();
            heightRef.current = rect.height;
            widthRef.current = rect.width;
            if (!isMountAnimationPreventedRef.current) {
                node.style.transitionDuration = originalStylesRef.current.transitionDuration;
                node.style.animationName = originalStylesRef.current.animationName;
            }
            setIsPresent(present);
        }
    }, [
        context.open,
        present
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        id: context.contentId,
        hidden: !isOpen,
        ...contentProps,
        ref: composedRefs,
        style: {
            [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
            [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
            ...props.style
        },
        children: isOpen && children
    });
});
function getState(open) {
    return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionHeader",
    ()=>AccordionHeader,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger,
    "Content",
    ()=>Content2,
    "Header",
    ()=>Header,
    "Item",
    ()=>Item,
    "Root",
    ()=>Root2,
    "Trigger",
    ()=>Trigger2,
    "createAccordionScope",
    ()=>createAccordionScope
]);
// src/accordion.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-collapsible/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
;
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = [
    "Home",
    "End",
    "ArrowDown",
    "ArrowUp",
    "ArrowLeft",
    "ArrowRight"
];
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(ACCORDION_NAME, [
    createCollectionScope,
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollapsibleScope"]
]);
var useCollapsibleScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollapsibleScope"])();
var Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeAccordion,
        children: type === "multiple" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccordionImplMultiple, {
            ...multipleProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccordionImplSingle, {
            ...singleProps,
            ref: forwardedRef
        })
    });
});
Accordion.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(ACCORDION_NAME, {
    collapsible: false
});
var AccordionImplSingle = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { value: valueProp, defaultValue, onValueChange = ()=>{}, collapsible = false, ...accordionSingleProps } = props;
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        defaultProp: defaultValue ?? "",
        onChange: onValueChange,
        caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>value ? [
                value
            ] : [], [
            value
        ]),
        onItemOpen: setValue,
        onItemClose: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>collapsible && setValue(""), [
            collapsible,
            setValue
        ]),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccordionCollapsibleProvider, {
            scope: props.__scopeAccordion,
            collapsible,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccordionImpl, {
                ...accordionSingleProps,
                ref: forwardedRef
            })
        })
    });
});
var AccordionImplMultiple = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { value: valueProp, defaultValue, onValueChange = ()=>{}, ...accordionMultipleProps } = props;
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        defaultProp: defaultValue ?? [],
        onChange: onValueChange,
        caller: ACCORDION_NAME
    });
    const handleItemOpen = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((itemValue)=>setValue((prevValue = [])=>[
                ...prevValue,
                itemValue
            ]), [
        setValue
    ]);
    const handleItemClose = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((itemValue)=>setValue((prevValue = [])=>prevValue.filter((value2)=>value2 !== itemValue)), [
        setValue
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value,
        onItemOpen: handleItemOpen,
        onItemClose: handleItemClose,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccordionCollapsibleProvider, {
            scope: props.__scopeAccordion,
            collapsible: true,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccordionImpl, {
                ...accordionMultipleProps,
                ref: forwardedRef
            })
        })
    });
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
        if (!ACCORDION_KEYS.includes(event.key)) return;
        const target = event.target;
        const triggerCollection = getItems().filter((item)=>!item.ref.current?.disabled);
        const triggerIndex = triggerCollection.findIndex((item)=>item.ref.current === target);
        const triggerCount = triggerCollection.length;
        if (triggerIndex === -1) return;
        event.preventDefault();
        let nextIndex = triggerIndex;
        const homeIndex = 0;
        const endIndex = triggerCount - 1;
        const moveNext = ()=>{
            nextIndex = triggerIndex + 1;
            if (nextIndex > endIndex) {
                nextIndex = homeIndex;
            }
        };
        const movePrev = ()=>{
            nextIndex = triggerIndex - 1;
            if (nextIndex < homeIndex) {
                nextIndex = endIndex;
            }
        };
        switch(event.key){
            case "Home":
                nextIndex = homeIndex;
                break;
            case "End":
                nextIndex = endIndex;
                break;
            case "ArrowRight":
                if (orientation === "horizontal") {
                    if (isDirectionLTR) {
                        moveNext();
                    } else {
                        movePrev();
                    }
                }
                break;
            case "ArrowDown":
                if (orientation === "vertical") {
                    moveNext();
                }
                break;
            case "ArrowLeft":
                if (orientation === "horizontal") {
                    if (isDirectionLTR) {
                        movePrev();
                    } else {
                        moveNext();
                    }
                }
                break;
            case "ArrowUp":
                if (orientation === "vertical") {
                    movePrev();
                }
                break;
        }
        const clampedIndex = nextIndex % triggerCount;
        triggerCollection[clampedIndex].ref.current?.focus();
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccordionImplProvider, {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
            scope: __scopeAccordion,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                ...accordionProps,
                "data-orientation": orientation,
                ref: composedRefs,
                onKeyDown: disabled ? void 0 : handleKeyDown
            })
        })
    });
});
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AccordionItemProvider, {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2)=>{
                if (open2) {
                    valueContext.onItemOpen(value);
                } else {
                    valueContext.onItemClose(value);
                }
            }
        })
    });
});
AccordionItem.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].h3, {
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
    });
});
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
        scope: __scopeAccordion,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
            "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
            "data-orientation": accordionContext.orientation,
            id: itemContext.triggerId,
            ...collapsibleScope,
            ...triggerProps,
            ref: forwardedRef
        })
    });
});
AccordionTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
            ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
            ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
            ...props.style
        }
    });
});
AccordionContent.displayName = CONTENT_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var Root2 = Accordion;
var Item = AccordionItem;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger;
var Content2 = AccordionContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript) <export * as Accordion>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Action",
    ()=>Action,
    "AlertDialog",
    ()=>AlertDialog,
    "AlertDialogAction",
    ()=>AlertDialogAction,
    "AlertDialogCancel",
    ()=>AlertDialogCancel,
    "AlertDialogContent",
    ()=>AlertDialogContent,
    "AlertDialogDescription",
    ()=>AlertDialogDescription,
    "AlertDialogOverlay",
    ()=>AlertDialogOverlay,
    "AlertDialogPortal",
    ()=>AlertDialogPortal,
    "AlertDialogTitle",
    ()=>AlertDialogTitle,
    "AlertDialogTrigger",
    ()=>AlertDialogTrigger,
    "Cancel",
    ()=>Cancel,
    "Content",
    ()=>Content2,
    "Description",
    ()=>Description2,
    "Overlay",
    ()=>Overlay2,
    "Portal",
    ()=>Portal2,
    "Root",
    ()=>Root2,
    "Title",
    ()=>Title2,
    "Trigger",
    ()=>Trigger2,
    "createAlertDialogScope",
    ()=>createAlertDialogScope
]);
// src/alert-dialog.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(ROOT_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDialogScope"]
]);
var useDialogScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDialogScope"])();
var AlertDialog = (props)=>{
    const { __scopeAlertDialog, ...alertDialogProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ...dialogScope,
        ...alertDialogProps,
        modal: true
    });
};
AlertDialog.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        ...dialogScope,
        ...triggerProps,
        ref: forwardedRef
    });
});
AlertDialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal = (props)=>{
    const { __scopeAlertDialog, ...portalProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        ...dialogScope,
        ...portalProps
    });
};
AlertDialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ...dialogScope,
        ...overlayProps,
        ref: forwardedRef
    });
});
AlertDialogOverlay.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlottable"])("AlertDialogContent");
var AlertDialogContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef);
    const cancelRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarningProvider"], {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(AlertDialogContentProvider, {
            scope: __scopeAlertDialog,
            cancelRef,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                role: "alertdialog",
                ...dialogScope,
                ...contentProps,
                ref: composedRefs,
                onOpenAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(contentProps.onOpenAutoFocus, (event)=>{
                    event.preventDefault();
                    cancelRef.current?.focus({
                        preventScroll: true
                    });
                }),
                onPointerDownOutside: (event)=>event.preventDefault(),
                onInteractOutside: (event)=>event.preventDefault(),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Slottable, {
                        children
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DescriptionWarning, {
                        contentRef
                    })
                ]
            })
        })
    });
});
AlertDialogContent.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ...dialogScope,
        ...titleProps,
        ref: forwardedRef
    });
});
AlertDialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAlertDialog, ...descriptionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ...dialogScope,
        ...descriptionProps,
        ref: forwardedRef
    });
});
AlertDialogDescription.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        ...dialogScope,
        ...actionProps,
        ref: forwardedRef
    });
});
AlertDialogAction.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, cancelRef);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        ...dialogScope,
        ...cancelProps,
        ref
    });
});
AlertDialogCancel.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef })=>{
    const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const hasDescription = document.getElementById(contentRef.current?.getAttribute("aria-describedby"));
        if (!hasDescription) console.warn(MESSAGE);
    }, [
        MESSAGE,
        contentRef
    ]);
    return null;
};
var Root2 = AlertDialog;
var Trigger2 = AlertDialogTrigger;
var Portal2 = AlertDialogPortal;
var Overlay2 = AlertDialogOverlay;
var Content2 = AlertDialogContent;
var Action = AlertDialogAction;
var Cancel = AlertDialogCancel;
var Title2 = AlertDialogTitle;
var Description2 = AlertDialogDescription;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript) <export * as AlertDialog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-menu/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Anchor",
    ()=>Anchor2,
    "Arrow",
    ()=>Arrow2,
    "CheckboxItem",
    ()=>CheckboxItem,
    "Content",
    ()=>Content2,
    "Group",
    ()=>Group,
    "Item",
    ()=>Item2,
    "ItemIndicator",
    ()=>ItemIndicator,
    "Label",
    ()=>Label,
    "Menu",
    ()=>Menu,
    "MenuAnchor",
    ()=>MenuAnchor,
    "MenuArrow",
    ()=>MenuArrow,
    "MenuCheckboxItem",
    ()=>MenuCheckboxItem,
    "MenuContent",
    ()=>MenuContent,
    "MenuGroup",
    ()=>MenuGroup,
    "MenuItem",
    ()=>MenuItem,
    "MenuItemIndicator",
    ()=>MenuItemIndicator,
    "MenuLabel",
    ()=>MenuLabel,
    "MenuPortal",
    ()=>MenuPortal,
    "MenuRadioGroup",
    ()=>MenuRadioGroup,
    "MenuRadioItem",
    ()=>MenuRadioItem,
    "MenuSeparator",
    ()=>MenuSeparator,
    "MenuSub",
    ()=>MenuSub,
    "MenuSubContent",
    ()=>MenuSubContent,
    "MenuSubTrigger",
    ()=>MenuSubTrigger,
    "Portal",
    ()=>Portal,
    "RadioGroup",
    ()=>RadioGroup,
    "RadioItem",
    ()=>RadioItem,
    "Root",
    ()=>Root3,
    "Separator",
    ()=>Separator,
    "Sub",
    ()=>Sub,
    "SubContent",
    ()=>SubContent,
    "SubTrigger",
    ()=>SubTrigger,
    "createMenuScope",
    ()=>createMenuScope
]);
// src/menu.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-popper/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-roving-focus/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/aria-hidden/dist/es2015/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-ssr] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
;
var SELECTION_KEYS = [
    "Enter",
    " "
];
var FIRST_KEYS = [
    "ArrowDown",
    "PageUp",
    "Home"
];
var LAST_KEYS = [
    "ArrowUp",
    "PageDown",
    "End"
];
var FIRST_LAST_KEYS = [
    ...FIRST_KEYS,
    ...LAST_KEYS
];
var SUB_OPEN_KEYS = {
    ltr: [
        ...SELECTION_KEYS,
        "ArrowRight"
    ],
    rtl: [
        ...SELECTION_KEYS,
        "ArrowLeft"
    ]
};
var SUB_CLOSE_KEYS = {
    ltr: [
        "ArrowLeft"
    ],
    rtl: [
        "ArrowRight"
    ]
};
var MENU_NAME = "Menu";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(MENU_NAME);
var [createMenuContext, createMenuScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(MENU_NAME, [
    createCollectionScope,
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"],
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"])();
var useRovingFocusGroupScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"])();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props)=>{
    const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
    const popperScope = usePopperScope(__scopeMenu);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const isUsingKeyboardRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onOpenChange);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleKeyDown = ()=>{
            isUsingKeyboardRef.current = true;
            document.addEventListener("pointerdown", handlePointer, {
                capture: true,
                once: true
            });
            document.addEventListener("pointermove", handlePointer, {
                capture: true,
                once: true
            });
        };
        const handlePointer = ()=>isUsingKeyboardRef.current = false;
        document.addEventListener("keydown", handleKeyDown, {
            capture: true
        });
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown, {
                capture: true
            });
            document.removeEventListener("pointerdown", handlePointer, {
                capture: true
            });
            document.removeEventListener("pointermove", handlePointer, {
                capture: true
            });
        };
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuProvider, {
            scope: __scopeMenu,
            open,
            onOpenChange: handleOpenChange,
            content,
            onContentChange: setContent,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuRootProvider, {
                scope: __scopeMenu,
                onClose: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>handleOpenChange(false), [
                    handleOpenChange
                ]),
                isUsingKeyboardRef,
                dir: direction,
                modal,
                children
            })
        })
    });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor";
var MenuAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        ...popperScope,
        ...anchorProps,
        ref: forwardedRef
    });
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME, {
    forceMount: void 0
});
var MenuPortal = (props)=>{
    const { __scopeMenu, forceMount, children, container } = props;
    const context = useMenuContext(PORTAL_NAME, __scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeMenu,
        forceMount,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
                asChild: true,
                container,
                children
            })
        })
    });
};
MenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME);
var MenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeMenu,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeMenu,
                children: rootContext.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuRootContentModal, {
                    ...contentProps,
                    ref: forwardedRef
                }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuRootContentNonModal, {
                    ...contentProps,
                    ref: forwardedRef
                })
            })
        })
    });
});
var MenuRootContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const content = ref.current;
        if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideOthers"])(content);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault(), {
            checkForDefaultPrevented: false
        }),
        onDismiss: ()=>context.onOpenChange(false)
    });
});
var MenuRootContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        onDismiss: ()=>context.onOpenChange(false)
    });
});
var Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSlot"])("MenuContent.ScrollLock");
var MenuContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef, context.onContentChange);
    const timerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const searchRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("");
    const pointerGraceTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const pointerGraceIntentRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const pointerDirRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("right");
    const lastPointerXRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const ScrollLockWrapper = disableOutsideScroll ? __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"] : __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"];
    const scrollLockWrapperProps = disableOutsideScroll ? {
        as: Slot,
        allowPinchZoom: true
    } : void 0;
    const handleTypeaheadSearch = (key)=>{
        const search = searchRef.current + key;
        const items = getItems().filter((item)=>!item.disabled);
        const currentItem = document.activeElement;
        const currentMatch = items.find((item)=>item.ref.current === currentItem)?.textValue;
        const values = items.map((item)=>item.textValue);
        const nextMatch = getNextMatch(values, search, currentMatch);
        const newItem = items.find((item)=>item.textValue === nextMatch)?.ref.current;
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current);
            if (value !== "") timerRef.current = window.setTimeout(()=>updateSearch(""), 1e3);
        })(search);
        if (newItem) {
            setTimeout(()=>newItem.focus());
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>window.clearTimeout(timerRef.current);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    const isPointerMovingToSubmenu = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
        const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
        return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuContentProvider, {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        onItemLeave: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
            if (isPointerMovingToSubmenu(event)) return;
            contentRef.current?.focus();
            setCurrentItemId(null);
        }, [
            isPointerMovingToSubmenu
        ]),
        onTriggerLeave: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((intent)=>{
            pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollLockWrapper, {
            ...scrollLockWrapperProps,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                trapped: trapFocus,
                onMountAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onOpenAutoFocus, (event)=>{
                    event.preventDefault();
                    contentRef.current?.focus({
                        preventScroll: true
                    });
                }),
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    asChild: true,
                    disableOutsidePointerEvents,
                    onEscapeKeyDown,
                    onPointerDownOutside,
                    onFocusOutside,
                    onInteractOutside,
                    onDismiss,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
                        asChild: true,
                        ...rovingFocusGroupScope,
                        dir: rootContext.dir,
                        orientation: "vertical",
                        loop,
                        currentTabStopId: currentItemId,
                        onCurrentTabStopIdChange: setCurrentItemId,
                        onEntryFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onEntryFocus, (event)=>{
                            if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
                        }),
                        preventScrollOnEntryFocus: true,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                            role: "menu",
                            "aria-orientation": "vertical",
                            "data-state": getOpenState(context.open),
                            "data-radix-menu-content": "",
                            dir: rootContext.dir,
                            ...popperScope,
                            ...contentProps,
                            ref: composedRefs,
                            style: {
                                outline: "none",
                                ...contentProps.style
                            },
                            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(contentProps.onKeyDown, (event)=>{
                                const target = event.target;
                                const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                                const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                                const isCharacterKey = event.key.length === 1;
                                if (isKeyDownInside) {
                                    if (event.key === "Tab") event.preventDefault();
                                    if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
                                }
                                const content = contentRef.current;
                                if (event.target !== content) return;
                                if (!FIRST_LAST_KEYS.includes(event.key)) return;
                                event.preventDefault();
                                const items = getItems().filter((item)=>!item.disabled);
                                const candidateNodes = items.map((item)=>item.ref.current);
                                if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
                                focusFirst(candidateNodes);
                            }),
                            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, (event)=>{
                                if (!event.currentTarget.contains(event.target)) {
                                    window.clearTimeout(timerRef.current);
                                    searchRef.current = "";
                                }
                            }),
                            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenMouse((event)=>{
                                const target = event.target;
                                const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                                if (event.currentTarget.contains(target) && pointerXHasChanged) {
                                    const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                                    pointerDirRef.current = newDir;
                                    lastPointerXRef.current = event.clientX;
                                }
                            }))
                        })
                    })
                })
            })
        })
    });
});
MenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "MenuGroup";
var MenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        role: "group",
        ...groupProps,
        ref: forwardedRef
    });
});
MenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "MenuLabel";
var MenuLabel = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...labelProps,
        ref: forwardedRef
    });
});
MenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const rootContext = useMenuRootContext(ITEM_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME, props.__scopeMenu);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const isPointerDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleSelect = ()=>{
        const menuItem = ref.current;
        if (!disabled && menuItem) {
            const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
                bubbles: true,
                cancelable: true
            });
            menuItem.addEventListener(ITEM_SELECT, (event)=>onSelect?.(event), {
                once: true
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(menuItem, itemSelectEvent);
            if (itemSelectEvent.defaultPrevented) {
                isPointerDownRef.current = false;
            } else {
                rootContext.onClose();
            }
        }
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuItemImpl, {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, handleSelect),
        onPointerDown: (event)=>{
            props.onPointerDown?.(event);
            isPointerDownRef.current = true;
        },
        onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, (event)=>{
            if (!isPointerDownRef.current) event.currentTarget?.click();
        }),
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
            const isTypingAhead = contentContext.searchRef.current !== "";
            if (disabled || isTypingAhead && event.key === " ") return;
            if (SELECTION_KEYS.includes(event.key)) {
                event.currentTarget.click();
                event.preventDefault();
            }
        })
    });
});
MenuItem.displayName = ITEM_NAME;
var MenuItemImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const [isFocused, setIsFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [textContent, setTextContent] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]("");
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const menuItem = ref.current;
        if (menuItem) {
            setTextContent((menuItem.textContent ?? "").trim());
        }
    }, [
        itemProps.children
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
            asChild: true,
            ...rovingFocusGroupScope,
            focusable: !disabled,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                role: "menuitem",
                "data-highlighted": isFocused ? "" : void 0,
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                ...itemProps,
                ref: composedRefs,
                onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenMouse((event)=>{
                    if (disabled) {
                        contentContext.onItemLeave(event);
                    } else {
                        contentContext.onItemEnter(event);
                        if (!event.defaultPrevented) {
                            const item = event.currentTarget;
                            item.focus({
                                preventScroll: true
                            });
                        }
                    }
                })),
                onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, whenMouse((event)=>contentContext.onItemLeave(event))),
                onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>setIsFocused(true)),
                onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, ()=>setIsFocused(false))
            })
        })
    });
});
var CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var MenuCheckboxItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuItem, {
            role: "menuitemcheckbox",
            "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
            ...checkboxItemProps,
            ref: forwardedRef,
            "data-state": getCheckedState(checked),
            onSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(checkboxItemProps.onSelect, ()=>onCheckedChange?.(isIndeterminate(checked) ? true : !checked), {
                checkForDefaultPrevented: false
            })
        })
    });
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME, {
    value: void 0,
    onValueChange: ()=>{}
});
var MenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onValueChange);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RadioGroupProvider, {
        scope: props.__scopeMenu,
        value,
        onValueChange: handleValueChange,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuGroup, {
            ...groupProps,
            ref: forwardedRef
        })
    });
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuItem, {
            role: "menuitemradio",
            "aria-checked": checked,
            ...radioItemProps,
            ref: forwardedRef,
            "data-state": getCheckedState(checked),
            onSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(radioItemProps.onSelect, ()=>context.onValueChange?.(value), {
                checkForDefaultPrevented: false
            })
        })
    });
});
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME, {
    checked: false
});
var MenuItemIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
        })
    });
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME = "MenuSeparator";
var MenuSeparator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
    });
});
MenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "MenuArrow";
var MenuArrow = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
MenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = (props)=>{
    const { __scopeMenu, children, open = false, onOpenChange } = props;
    const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const [trigger, setTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const handleOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onOpenChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (parentMenuContext.open === false) handleOpenChange(false);
        return ()=>handleOpenChange(false);
    }, [
        parentMenuContext.open,
        handleOpenChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuProvider, {
            scope: __scopeMenu,
            open,
            onOpenChange: handleOpenChange,
            content,
            onContentChange: setContent,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuSubProvider, {
                scope: __scopeMenu,
                contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
                triggerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
                trigger,
                onTriggerChange: setTrigger,
                children
            })
        })
    });
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenuSubTrigger";
var MenuSubTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = {
        __scopeMenu: props.__scopeMenu
    };
    const clearOpenTimer = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>clearOpenTimer, [
        clearOpenTimer
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const pointerGraceTimer = pointerGraceTimerRef.current;
        return ()=>{
            window.clearTimeout(pointerGraceTimer);
            onPointerGraceIntentChange(null);
        };
    }, [
        pointerGraceTimerRef,
        onPointerGraceIntentChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuAnchor, {
        asChild: true,
        ...scope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuItemImpl, {
            id: subContext.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": context.open,
            "aria-controls": subContext.contentId,
            "data-state": getOpenState(context.open),
            ...props,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, subContext.onTriggerChange),
            onClick: (event)=>{
                props.onClick?.(event);
                if (props.disabled || event.defaultPrevented) return;
                event.currentTarget.focus();
                if (!context.open) context.onOpenChange(true);
            },
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenMouse((event)=>{
                contentContext.onItemEnter(event);
                if (event.defaultPrevented) return;
                if (!props.disabled && !context.open && !openTimerRef.current) {
                    contentContext.onPointerGraceIntentChange(null);
                    openTimerRef.current = window.setTimeout(()=>{
                        context.onOpenChange(true);
                        clearOpenTimer();
                    }, 100);
                }
            })),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, whenMouse((event)=>{
                clearOpenTimer();
                const contentRect = context.content?.getBoundingClientRect();
                if (contentRect) {
                    const side = context.content?.dataset.side;
                    const rightSide = side === "right";
                    const bleed = rightSide ? -5 : 5;
                    const contentNearEdge = contentRect[rightSide ? "left" : "right"];
                    const contentFarEdge = contentRect[rightSide ? "right" : "left"];
                    contentContext.onPointerGraceIntentChange({
                        area: [
                            // Apply a bleed on clientX to ensure that our exit point is
                            // consistently within polygon bounds
                            {
                                x: event.clientX + bleed,
                                y: event.clientY
                            },
                            {
                                x: contentNearEdge,
                                y: contentRect.top
                            },
                            {
                                x: contentFarEdge,
                                y: contentRect.top
                            },
                            {
                                x: contentFarEdge,
                                y: contentRect.bottom
                            },
                            {
                                x: contentNearEdge,
                                y: contentRect.bottom
                            }
                        ],
                        side
                    });
                    window.clearTimeout(pointerGraceTimerRef.current);
                    pointerGraceTimerRef.current = window.setTimeout(()=>contentContext.onPointerGraceIntentChange(null), 300);
                } else {
                    contentContext.onTriggerLeave(event);
                    if (event.defaultPrevented) return;
                    contentContext.onPointerGraceIntentChange(null);
                }
            })),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                const isTypingAhead = contentContext.searchRef.current !== "";
                if (props.disabled || isTypingAhead && event.key === " ") return;
                if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
                    context.onOpenChange(true);
                    context.content?.focus();
                    event.preventDefault();
                }
            })
        })
    });
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenuSubContent";
var MenuSubContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeMenu,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeMenu,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(MenuContentImpl, {
                    id: subContext.contentId,
                    "aria-labelledby": subContext.triggerId,
                    ...subContentProps,
                    ref: composedRefs,
                    align: "start",
                    side: rootContext.dir === "rtl" ? "left" : "right",
                    disableOutsidePointerEvents: false,
                    disableOutsideScroll: false,
                    trapFocus: false,
                    onOpenAutoFocus: (event)=>{
                        if (rootContext.isUsingKeyboardRef.current) ref.current?.focus();
                        event.preventDefault();
                    },
                    onCloseAutoFocus: (event)=>event.preventDefault(),
                    onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>{
                        if (event.target !== subContext.trigger) context.onOpenChange(false);
                    }),
                    onEscapeKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onEscapeKeyDown, (event)=>{
                        rootContext.onClose();
                        event.preventDefault();
                    }),
                    onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                        const isKeyDownInside = event.currentTarget.contains(event.target);
                        const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
                        if (isKeyDownInside && isCloseKey) {
                            context.onOpenChange(false);
                            subContext.trigger?.focus();
                            event.preventDefault();
                        }
                    })
                })
            })
        })
    });
});
MenuSubContent.displayName = SUB_CONTENT_NAME;
function getOpenState(open) {
    return open ? "open" : "closed";
}
function isIndeterminate(checked) {
    return checked === "indeterminate";
}
function getCheckedState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]);
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
    let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
    const excludeCurrentMatch = normalizedSearch.length === 1;
    if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v)=>v !== currentMatch);
    const nextMatch = wrappedValues.find((value)=>value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
    return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
    const { x, y } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const ii = polygon[i];
        const jj = polygon[j];
        const xi = ii.x;
        const yi = ii.y;
        const xj = jj.x;
        const yj = jj.y;
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function isPointerInGraceArea(event, area) {
    if (!area) return false;
    const cursorPos = {
        x: event.clientX,
        y: event.clientY
    };
    return isPointInPolygon(cursorPos, area);
}
function whenMouse(handler) {
    return (event)=>event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root3 = Menu;
var Anchor2 = MenuAnchor;
var Portal = MenuPortal;
var Content2 = MenuContent;
var Group = MenuGroup;
var Label = MenuLabel;
var Item2 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator;
var Arrow2 = MenuArrow;
var Sub = MenuSub;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context-menu/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "CheckboxItem",
    ()=>CheckboxItem2,
    "Content",
    ()=>Content2,
    "ContextMenu",
    ()=>ContextMenu,
    "ContextMenuArrow",
    ()=>ContextMenuArrow,
    "ContextMenuCheckboxItem",
    ()=>ContextMenuCheckboxItem,
    "ContextMenuContent",
    ()=>ContextMenuContent,
    "ContextMenuGroup",
    ()=>ContextMenuGroup,
    "ContextMenuItem",
    ()=>ContextMenuItem,
    "ContextMenuItemIndicator",
    ()=>ContextMenuItemIndicator,
    "ContextMenuLabel",
    ()=>ContextMenuLabel,
    "ContextMenuPortal",
    ()=>ContextMenuPortal,
    "ContextMenuRadioGroup",
    ()=>ContextMenuRadioGroup,
    "ContextMenuRadioItem",
    ()=>ContextMenuRadioItem,
    "ContextMenuSeparator",
    ()=>ContextMenuSeparator,
    "ContextMenuSub",
    ()=>ContextMenuSub,
    "ContextMenuSubContent",
    ()=>ContextMenuSubContent,
    "ContextMenuSubTrigger",
    ()=>ContextMenuSubTrigger,
    "ContextMenuTrigger",
    ()=>ContextMenuTrigger,
    "Group",
    ()=>Group2,
    "Item",
    ()=>Item2,
    "ItemIndicator",
    ()=>ItemIndicator2,
    "Label",
    ()=>Label2,
    "Portal",
    ()=>Portal2,
    "RadioGroup",
    ()=>RadioGroup2,
    "RadioItem",
    ()=>RadioItem2,
    "Root",
    ()=>Root2,
    "Separator",
    ()=>Separator2,
    "Sub",
    ()=>Sub2,
    "SubContent",
    ()=>SubContent2,
    "SubTrigger",
    ()=>SubTrigger2,
    "Trigger",
    ()=>Trigger,
    "createContextMenuScope",
    ()=>createContextMenuScope
]);
// src/context-menu.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
var CONTEXT_MENU_NAME = "ContextMenu";
var [createContextMenuContext, createContextMenuScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(CONTEXT_MENU_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMenuScope"]
]);
var useMenuScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMenuScope"])();
var [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME);
var ContextMenu = (props)=>{
    const { __scopeContextMenu, children, onOpenChange, dir, modal = true } = props;
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const menuScope = useMenuScope(__scopeContextMenu);
    const handleOpenChangeProp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onOpenChange);
    const handleOpenChange = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((open2)=>{
        setOpen(open2);
        handleOpenChangeProp(open2);
    }, [
        handleOpenChangeProp
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ContextMenuProvider, {
        scope: __scopeContextMenu,
        open,
        onOpenChange: handleOpenChange,
        modal,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
            ...menuScope,
            dir,
            open,
            onOpenChange: handleOpenChange,
            modal,
            children
        })
    });
};
ContextMenu.displayName = CONTEXT_MENU_NAME;
var TRIGGER_NAME = "ContextMenuTrigger";
var ContextMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, disabled = false, ...triggerProps } = props;
    const context = useContextMenuContext(TRIGGER_NAME, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const pointRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        x: 0,
        y: 0
    });
    const virtualRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({
        getBoundingClientRect: ()=>DOMRect.fromRect({
                width: 0,
                height: 0,
                ...pointRef.current
            })
    });
    const longPressTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const clearLongPress = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>window.clearTimeout(longPressTimerRef.current), []);
    const handleOpen = (event)=>{
        pointRef.current = {
            x: event.clientX,
            y: event.clientY
        };
        context.onOpenChange(true);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>clearLongPress, [
        clearLongPress
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>void (disabled && clearLongPress()), [
        disabled,
        clearLongPress
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
                ...menuScope,
                virtualRef
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].span, {
                "data-state": context.open ? "open" : "closed",
                "data-disabled": disabled ? "" : void 0,
                ...triggerProps,
                ref: forwardedRef,
                style: {
                    WebkitTouchCallout: "none",
                    ...props.style
                },
                onContextMenu: disabled ? props.onContextMenu : (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onContextMenu, (event)=>{
                    clearLongPress();
                    handleOpen(event);
                    event.preventDefault();
                }),
                onPointerDown: disabled ? props.onPointerDown : (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, whenTouchOrPen((event)=>{
                    clearLongPress();
                    longPressTimerRef.current = window.setTimeout(()=>handleOpen(event), 700);
                })),
                onPointerMove: disabled ? props.onPointerMove : (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenTouchOrPen(clearLongPress)),
                onPointerCancel: disabled ? props.onPointerCancel : (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerCancel, whenTouchOrPen(clearLongPress)),
                onPointerUp: disabled ? props.onPointerUp : (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, whenTouchOrPen(clearLongPress))
            })
        ]
    });
});
ContextMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "ContextMenuPortal";
var ContextMenuPortal = (props)=>{
    const { __scopeContextMenu, ...portalProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        ...menuScope,
        ...portalProps
    });
};
ContextMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "ContextMenuContent";
var ContextMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...contentProps } = props;
    const context = useContextMenuContext(CONTENT_NAME, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented && hasInteractedOutsideRef.current) {
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented && !context.modal) hasInteractedOutsideRef.current = true;
        },
        style: {
            ...props.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
ContextMenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "ContextMenuGroup";
var ContextMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        ...menuScope,
        ...groupProps,
        ref: forwardedRef
    });
});
ContextMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "ContextMenuLabel";
var ContextMenuLabel = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ...menuScope,
        ...labelProps,
        ref: forwardedRef
    });
});
ContextMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "ContextMenuItem";
var ContextMenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ...menuScope,
        ...itemProps,
        ref: forwardedRef
    });
});
ContextMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem";
var ContextMenuCheckboxItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...checkboxItemProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ...menuScope,
        ...checkboxItemProps,
        ref: forwardedRef
    });
});
ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "ContextMenuRadioGroup";
var ContextMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...radioGroupProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        ...menuScope,
        ...radioGroupProps,
        ref: forwardedRef
    });
});
ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "ContextMenuRadioItem";
var ContextMenuRadioItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...radioItemProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        ...menuScope,
        ...radioItemProps,
        ref: forwardedRef
    });
});
ContextMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "ContextMenuItemIndicator";
var ContextMenuItemIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...itemIndicatorProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
        ...menuScope,
        ...itemIndicatorProps,
        ref: forwardedRef
    });
});
ContextMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "ContextMenuSeparator";
var ContextMenuSeparator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...separatorProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ...menuScope,
        ...separatorProps,
        ref: forwardedRef
    });
});
ContextMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "ContextMenuArrow";
var ContextMenuArrow = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
        ...menuScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
ContextMenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "ContextMenuSub";
var ContextMenuSub = (props)=>{
    const { __scopeContextMenu, children, onOpenChange, open: openProp, defaultOpen } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: SUB_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        ...menuScope,
        open,
        onOpenChange: setOpen,
        children
    });
};
ContextMenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "ContextMenuSubTrigger";
var ContextMenuSubTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...triggerItemProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ...menuScope,
        ...triggerItemProps,
        ref: forwardedRef
    });
});
ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "ContextMenuSubContent";
var ContextMenuSubContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeContextMenu, ...subContentProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        ...menuScope,
        ...subContentProps,
        ref: forwardedRef,
        style: {
            ...props.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
ContextMenuSubContent.displayName = SUB_CONTENT_NAME;
function whenTouchOrPen(handler) {
    return (event)=>event.pointerType !== "mouse" ? handler(event) : void 0;
}
var Root2 = ContextMenu;
var Trigger = ContextMenuTrigger;
var Portal2 = ContextMenuPortal;
var Content2 = ContextMenuContent;
var Group2 = ContextMenuGroup;
var Label2 = ContextMenuLabel;
var Item2 = ContextMenuItem;
var CheckboxItem2 = ContextMenuCheckboxItem;
var RadioGroup2 = ContextMenuRadioGroup;
var RadioItem2 = ContextMenuRadioItem;
var ItemIndicator2 = ContextMenuItemIndicator;
var Separator2 = ContextMenuSeparator;
var Arrow2 = ContextMenuArrow;
var Sub2 = ContextMenuSub;
var SubTrigger2 = ContextMenuSubTrigger;
var SubContent2 = ContextMenuSubContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context-menu/dist/index.mjs [app-ssr] (ecmascript) <export * as ContextMenu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContextMenu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context-menu/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "CheckboxItem",
    ()=>CheckboxItem2,
    "Content",
    ()=>Content2,
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuArrow",
    ()=>DropdownMenuArrow,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuItemIndicator",
    ()=>DropdownMenuItemIndicator,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger,
    "Group",
    ()=>Group2,
    "Item",
    ()=>Item2,
    "ItemIndicator",
    ()=>ItemIndicator2,
    "Label",
    ()=>Label2,
    "Portal",
    ()=>Portal2,
    "RadioGroup",
    ()=>RadioGroup2,
    "RadioItem",
    ()=>RadioItem2,
    "Root",
    ()=>Root2,
    "Separator",
    ()=>Separator2,
    "Sub",
    ()=>Sub2,
    "SubContent",
    ()=>SubContent2,
    "SubTrigger",
    ()=>SubTrigger2,
    "Trigger",
    ()=>Trigger,
    "createDropdownMenuScope",
    ()=>createDropdownMenuScope
]);
// src/dropdown-menu.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(DROPDOWN_MENU_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMenuScope"]
]);
var useMenuScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createMenuScope"])();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props)=>{
    const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: DROPDOWN_MENU_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DropdownMenuProvider, {
        scope: __scopeDropdownMenu,
        triggerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        triggerRef,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
            ...menuScope,
            open,
            onOpenChange: setOpen,
            dir,
            modal,
            children
        })
    });
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME = "DropdownMenuTrigger";
var DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...menuScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
            type: "button",
            id: context.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": context.open,
            "aria-controls": context.open ? context.contentId : void 0,
            "data-state": context.open ? "open" : "closed",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            ...triggerProps,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, context.triggerRef),
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, (event)=>{
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                    context.onOpenToggle();
                    if (!context.open) event.preventDefault();
                }
            }),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                if (disabled) return;
                if ([
                    "Enter",
                    " "
                ].includes(event.key)) context.onOpenToggle();
                if (event.key === "ArrowDown") context.onOpenChange(true);
                if ([
                    "Enter",
                    " ",
                    "ArrowDown"
                ].includes(event.key)) event.preventDefault();
            })
        })
    });
});
DropdownMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DropdownMenuPortal";
var DropdownMenuPortal = (props)=>{
    const { __scopeDropdownMenu, ...portalProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        ...menuScope,
        ...portalProps
    });
};
DropdownMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "DropdownMenuContent";
var DropdownMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            hasInteractedOutsideRef.current = false;
            event.preventDefault();
        }),
        onInteractOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onInteractOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
            ...props.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
DropdownMenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "DropdownMenuGroup";
var DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        ...menuScope,
        ...groupProps,
        ref: forwardedRef
    });
});
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel";
var DropdownMenuLabel = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ...menuScope,
        ...labelProps,
        ref: forwardedRef
    });
});
DropdownMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "DropdownMenuItem";
var DropdownMenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ...menuScope,
        ...itemProps,
        ref: forwardedRef
    });
});
DropdownMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...checkboxItemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ...menuScope,
        ...checkboxItemProps,
        ref: forwardedRef
    });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...radioGroupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        ...menuScope,
        ...radioGroupProps,
        ref: forwardedRef
    });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...radioItemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        ...menuScope,
        ...radioItemProps,
        ref: forwardedRef
    });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
        ...menuScope,
        ...itemIndicatorProps,
        ref: forwardedRef
    });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator";
var DropdownMenuSeparator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...separatorProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ...menuScope,
        ...separatorProps,
        ref: forwardedRef
    });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "DropdownMenuArrow";
var DropdownMenuArrow = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
        ...menuScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
DropdownMenuArrow.displayName = ARROW_NAME;
var DropdownMenuSub = (props)=>{
    const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: "DropdownMenuSub"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        ...menuScope,
        open,
        onOpenChange: setOpen,
        children
    });
};
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...subTriggerProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ...menuScope,
        ...subTriggerProps,
        ref: forwardedRef
    });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent";
var DropdownMenuSubContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...subContentProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        ...menuScope,
        ...subContentProps,
        ref: forwardedRef,
        style: {
            ...props.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME;
var Root2 = DropdownMenu;
var Trigger = DropdownMenuTrigger;
var Portal2 = DropdownMenuPortal;
var Content2 = DropdownMenuContent;
var Group2 = DropdownMenuGroup;
var Label2 = DropdownMenuLabel;
var Item2 = DropdownMenuItem;
var CheckboxItem2 = DropdownMenuCheckboxItem;
var RadioGroup2 = DropdownMenuRadioGroup;
var RadioItem2 = DropdownMenuRadioItem;
var ItemIndicator2 = DropdownMenuItemIndicator;
var Separator2 = DropdownMenuSeparator;
var Arrow2 = DropdownMenuArrow;
var Sub2 = DropdownMenuSub;
var SubTrigger2 = DropdownMenuSubTrigger;
var SubContent2 = DropdownMenuSubContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript) <export * as DropdownMenu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-hover-card/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "Content",
    ()=>Content2,
    "HoverCard",
    ()=>HoverCard,
    "HoverCardArrow",
    ()=>HoverCardArrow,
    "HoverCardContent",
    ()=>HoverCardContent,
    "HoverCardPortal",
    ()=>HoverCardPortal,
    "HoverCardTrigger",
    ()=>HoverCardTrigger,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root2,
    "Trigger",
    ()=>Trigger,
    "createHoverCardScope",
    ()=>createHoverCardScope
]);
// src/hover-card.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-popper/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
;
var originalBodyUserSelect;
var HOVERCARD_NAME = "HoverCard";
var [createHoverCardContext, createHoverCardScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(HOVERCARD_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPopperScope"])();
var [HoverCardProvider, useHoverCardContext] = createHoverCardContext(HOVERCARD_NAME);
var HoverCard = (props)=>{
    const { __scopeHoverCard, children, open: openProp, defaultOpen, onOpenChange, openDelay = 700, closeDelay = 300 } = props;
    const popperScope = usePopperScope(__scopeHoverCard);
    const openTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const closeTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const hasSelectionRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const isPointerDownOnContentRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: HOVERCARD_NAME
    });
    const handleOpen = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        clearTimeout(closeTimerRef.current);
        openTimerRef.current = window.setTimeout(()=>setOpen(true), openDelay);
    }, [
        openDelay,
        setOpen
    ]);
    const handleClose = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        clearTimeout(openTimerRef.current);
        if (!hasSelectionRef.current && !isPointerDownOnContentRef.current) {
            closeTimerRef.current = window.setTimeout(()=>setOpen(false), closeDelay);
        }
    }, [
        closeDelay,
        setOpen
    ]);
    const handleDismiss = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>setOpen(false), [
        setOpen
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>{
            clearTimeout(openTimerRef.current);
            clearTimeout(closeTimerRef.current);
        };
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(HoverCardProvider, {
        scope: __scopeHoverCard,
        open,
        onOpenChange: setOpen,
        onOpen: handleOpen,
        onClose: handleClose,
        onDismiss: handleDismiss,
        hasSelectionRef,
        isPointerDownOnContentRef,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
            ...popperScope,
            children
        })
    });
};
HoverCard.displayName = HOVERCARD_NAME;
var TRIGGER_NAME = "HoverCardTrigger";
var HoverCardTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeHoverCard, ...triggerProps } = props;
    const context = useHoverCardContext(TRIGGER_NAME, __scopeHoverCard);
    const popperScope = usePopperScope(__scopeHoverCard);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].a, {
            "data-state": context.open ? "open" : "closed",
            ...triggerProps,
            ref: forwardedRef,
            onPointerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerEnter, excludeTouch(context.onOpen)),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, excludeTouch(context.onClose)),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, context.onOpen),
            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, context.onClose),
            onTouchStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onTouchStart, (event)=>event.preventDefault())
        })
    });
});
HoverCardTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "HoverCardPortal";
var [PortalProvider, usePortalContext] = createHoverCardContext(PORTAL_NAME, {
    forceMount: void 0
});
var HoverCardPortal = (props)=>{
    const { __scopeHoverCard, forceMount, children, container } = props;
    const context = useHoverCardContext(PORTAL_NAME, __scopeHoverCard);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeHoverCard,
        forceMount,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
                asChild: true,
                container,
                children
            })
        })
    });
};
HoverCardPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "HoverCardContent";
var HoverCardContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeHoverCard);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useHoverCardContext(CONTENT_NAME, props.__scopeHoverCard);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(HoverCardContentImpl, {
            "data-state": context.open ? "open" : "closed",
            ...contentProps,
            onPointerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerEnter, excludeTouch(context.onOpen)),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, excludeTouch(context.onClose)),
            ref: forwardedRef
        })
    });
});
HoverCardContent.displayName = CONTENT_NAME;
var HoverCardContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeHoverCard, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
    const context = useHoverCardContext(CONTENT_NAME, __scopeHoverCard);
    const popperScope = usePopperScope(__scopeHoverCard);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const [containSelection, setContainSelection] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (containSelection) {
            const body = document.body;
            originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
            body.style.userSelect = "none";
            body.style.webkitUserSelect = "none";
            return ()=>{
                body.style.userSelect = originalBodyUserSelect;
                body.style.webkitUserSelect = originalBodyUserSelect;
            };
        }
    }, [
        containSelection
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (ref.current) {
            const handlePointerUp = ()=>{
                setContainSelection(false);
                context.isPointerDownOnContentRef.current = false;
                setTimeout(()=>{
                    const hasSelection = document.getSelection()?.toString() !== "";
                    if (hasSelection) context.hasSelectionRef.current = true;
                });
            };
            document.addEventListener("pointerup", handlePointerUp);
            return ()=>{
                document.removeEventListener("pointerup", handlePointerUp);
                context.hasSelectionRef.current = false;
                context.isPointerDownOnContentRef.current = false;
            };
        }
    }, [
        context.isPointerDownOnContentRef,
        context.hasSelectionRef
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (ref.current) {
            const tabbables = getTabbableNodes(ref.current);
            tabbables.forEach((tabbable)=>tabbable.setAttribute("tabindex", "-1"));
        }
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DismissableLayer"], {
        asChild: true,
        disableOutsidePointerEvents: false,
        onInteractOutside,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onFocusOutside, (event)=>{
            event.preventDefault();
        }),
        onDismiss: context.onDismiss,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            ...popperScope,
            ...contentProps,
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(contentProps.onPointerDown, (event)=>{
                if (event.currentTarget.contains(event.target)) {
                    setContainSelection(true);
                }
                context.hasSelectionRef.current = false;
                context.isPointerDownOnContentRef.current = true;
            }),
            ref: composedRefs,
            style: {
                ...contentProps.style,
                userSelect: containSelection ? "text" : void 0,
                // Safari requires prefix
                WebkitUserSelect: containSelection ? "text" : void 0,
                // re-namespace exposed content custom properties
                ...{
                    "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
                }
            }
        })
    });
});
var ARROW_NAME = "HoverCardArrow";
var HoverCardArrow = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeHoverCard, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeHoverCard);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
HoverCardArrow.displayName = ARROW_NAME;
function excludeTouch(eventHandler) {
    return (event)=>event.pointerType === "touch" ? void 0 : eventHandler();
}
function getTabbableNodes(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
var Root2 = HoverCard;
var Trigger = HoverCardTrigger;
var Portal = HoverCardPortal;
var Content2 = HoverCardContent;
var Arrow2 = HoverCardArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-hover-card/dist/index.mjs [app-ssr] (ecmascript) <export * as HoverCard>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoverCard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$hover$2d$card$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$hover$2d$card$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-hover-card/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content",
    ()=>Content,
    "List",
    ()=>List,
    "Root",
    ()=>Root2,
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger,
    "Trigger",
    ()=>Trigger,
    "createTabsScope",
    ()=>createTabsScope
]);
// src/tabs.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-roving-focus/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(TABS_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"]
]);
var useRovingFocusGroupScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"])();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue ?? "",
        caller: TABS_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(TabsProvider, {
        scope: __scopeTabs,
        baseId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
        })
    });
});
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
        })
    });
});
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, (event)=>{
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                    context.onValueChange(value);
                } else {
                    event.preventDefault();
                }
            }),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                if ([
                    " ",
                    "Enter"
                ].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>{
                const isAutomaticActivation = context.activationMode !== "manual";
                if (!isSelected && !disabled && isAutomaticActivation) {
                    context.onValueChange(value);
                }
            })
        })
    });
});
TabsTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](isSelected);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const rAF = requestAnimationFrame(()=>isMountAnimationPreventedRef.current = false);
        return ()=>cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || isSelected,
        children: ({ present })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                "data-state": isSelected ? "active" : "inactive",
                "data-orientation": context.orientation,
                role: "tabpanel",
                "aria-labelledby": triggerId,
                hidden: !present,
                id: contentId,
                tabIndex: 0,
                ...contentProps,
                ref: forwardedRef,
                style: {
                    ...props.style,
                    animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
                },
                children: present && children
            })
    });
});
TabsContent.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
}
var Root2 = Tabs;
var List = TabsList;
var Trigger = TabsTrigger;
var Content = TabsContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript) <export * as Tabs>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content",
    ()=>Content,
    "Indicator",
    ()=>Indicator,
    "Item",
    ()=>Item,
    "Link",
    ()=>Link,
    "List",
    ()=>List,
    "NavigationMenu",
    ()=>NavigationMenu,
    "NavigationMenuContent",
    ()=>NavigationMenuContent,
    "NavigationMenuIndicator",
    ()=>NavigationMenuIndicator,
    "NavigationMenuItem",
    ()=>NavigationMenuItem,
    "NavigationMenuLink",
    ()=>NavigationMenuLink,
    "NavigationMenuList",
    ()=>NavigationMenuList,
    "NavigationMenuSub",
    ()=>NavigationMenuSub,
    "NavigationMenuTrigger",
    ()=>NavigationMenuTrigger,
    "NavigationMenuViewport",
    ()=>NavigationMenuViewport,
    "Root",
    ()=>Root2,
    "Sub",
    ()=>Sub,
    "Trigger",
    ()=>Trigger,
    "Viewport",
    ()=>Viewport,
    "createNavigationMenuScope",
    ()=>createNavigationMenuScope
]);
// src/navigation-menu.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-id/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-collection/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-previous/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
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
;
;
;
;
;
;
;
var NAVIGATION_MENU_NAME = "NavigationMenu";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(NAVIGATION_MENU_NAME);
var [FocusGroupCollection, useFocusGroupCollection, createFocusGroupCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCollection"])(NAVIGATION_MENU_NAME);
var [createNavigationMenuContext, createNavigationMenuScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(NAVIGATION_MENU_NAME, [
    createCollectionScope,
    createFocusGroupCollectionScope
]);
var [NavigationMenuProviderImpl, useNavigationMenuContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var [ViewportContentProvider, useViewportContentContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var NavigationMenu = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
    const [navigationMenu, setNavigationMenu] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setNavigationMenu(node));
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const openTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const closeTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const skipDelayTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const [isOpenDelayed, setIsOpenDelayed] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        onChange: (value2)=>{
            const isOpen = value2 !== "";
            const hasSkipDelayDuration = skipDelayDuration > 0;
            if (isOpen) {
                window.clearTimeout(skipDelayTimerRef.current);
                if (hasSkipDelayDuration) setIsOpenDelayed(false);
            } else {
                window.clearTimeout(skipDelayTimerRef.current);
                skipDelayTimerRef.current = window.setTimeout(()=>setIsOpenDelayed(true), skipDelayDuration);
            }
            onValueChange?.(value2);
        },
        defaultProp: defaultValue ?? "",
        caller: NAVIGATION_MENU_NAME
    });
    const startCloseTimer = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = window.setTimeout(()=>setValue(""), 150);
    }, [
        setValue
    ]);
    const handleOpen = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((itemValue)=>{
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
    }, [
        setValue
    ]);
    const handleDelayedOpen = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((itemValue)=>{
        const isOpenItem = value === itemValue;
        if (isOpenItem) {
            window.clearTimeout(closeTimerRef.current);
        } else {
            openTimerRef.current = window.setTimeout(()=>{
                window.clearTimeout(closeTimerRef.current);
                setValue(itemValue);
            }, delayDuration);
        }
    }, [
        value,
        setValue,
        delayDuration
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        return ()=>{
            window.clearTimeout(openTimerRef.current);
            window.clearTimeout(closeTimerRef.current);
            window.clearTimeout(skipDelayTimerRef.current);
        };
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NavigationMenuProvider, {
        scope: __scopeNavigationMenu,
        isRootMenu: true,
        value,
        dir: direction,
        orientation,
        rootNavigationMenu: navigationMenu,
        onTriggerEnter: (itemValue)=>{
            window.clearTimeout(openTimerRef.current);
            if (isOpenDelayed) handleDelayedOpen(itemValue);
            else handleOpen(itemValue);
        },
        onTriggerLeave: ()=>{
            window.clearTimeout(openTimerRef.current);
            startCloseTimer();
        },
        onContentEnter: ()=>window.clearTimeout(closeTimerRef.current),
        onContentLeave: startCloseTimer,
        onItemSelect: (itemValue)=>{
            setValue((prevValue)=>prevValue === itemValue ? "" : itemValue);
        },
        onItemDismiss: ()=>setValue(""),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].nav, {
            "aria-label": "Main",
            "data-orientation": orientation,
            dir: direction,
            ...NavigationMenuProps,
            ref: composedRef
        })
    });
});
NavigationMenu.displayName = NAVIGATION_MENU_NAME;
var SUB_NAME = "NavigationMenuSub";
var NavigationMenuSub = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", ...subProps } = props;
    const context = useNavigationMenuContext(SUB_NAME, __scopeNavigationMenu);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue ?? "",
        caller: SUB_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NavigationMenuProvider, {
        scope: __scopeNavigationMenu,
        isRootMenu: false,
        value,
        dir: context.dir,
        orientation,
        rootNavigationMenu: context.rootNavigationMenu,
        onTriggerEnter: (itemValue)=>setValue(itemValue),
        onItemSelect: (itemValue)=>setValue(itemValue),
        onItemDismiss: ()=>setValue(""),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "data-orientation": orientation,
            ...subProps,
            ref: forwardedRef
        })
    });
});
NavigationMenuSub.displayName = SUB_NAME;
var NavigationMenuProvider = (props)=>{
    const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
    const [viewport, setViewport] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [viewportContent, setViewportContent] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](/* @__PURE__ */ new Map());
    const [indicatorTrack, setIndicatorTrack] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NavigationMenuProviderImpl, {
        scope,
        isRootMenu,
        rootNavigationMenu,
        value,
        previousValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$previous$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePrevious"])(value),
        baseId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])(),
        dir,
        orientation,
        viewport,
        onViewportChange: setViewport,
        indicatorTrack,
        onIndicatorTrackChange: setIndicatorTrack,
        onTriggerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onTriggerEnter),
        onTriggerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onTriggerLeave),
        onContentEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onContentEnter),
        onContentLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onContentLeave),
        onItemSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onItemSelect),
        onItemDismiss: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onItemDismiss),
        onViewportContentChange: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((contentValue, contentData)=>{
            setViewportContent((prevContent)=>{
                prevContent.set(contentValue, contentData);
                return new Map(prevContent);
            });
        }, []),
        onViewportContentRemove: __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((contentValue)=>{
            setViewportContent((prevContent)=>{
                if (!prevContent.has(contentValue)) return prevContent;
                prevContent.delete(contentValue);
                return new Map(prevContent);
            });
        }, []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
            scope,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ViewportContentProvider, {
                scope,
                items: viewportContent,
                children
            })
        })
    });
};
var LIST_NAME = "NavigationMenuList";
var NavigationMenuList = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...listProps } = props;
    const context = useNavigationMenuContext(LIST_NAME, __scopeNavigationMenu);
    const list = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].ul, {
        "data-orientation": context.orientation,
        ...listProps,
        ref: forwardedRef
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        style: {
            position: "relative"
        },
        ref: context.onIndicatorTrackChange,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
            scope: __scopeNavigationMenu,
            children: context.isRootMenu ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FocusGroup, {
                asChild: true,
                children: list
            }) : list
        })
    });
});
NavigationMenuList.displayName = LIST_NAME;
var ITEM_NAME = "NavigationMenuItem";
var [NavigationMenuItemContextProvider, useNavigationMenuItemContext] = createNavigationMenuContext(ITEM_NAME);
var NavigationMenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
    const autoValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const focusProxyRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const restoreContentTabOrderRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](()=>{});
    const wasEscapeCloseRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleContentEntry = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((side = "start")=>{
        if (contentRef.current) {
            restoreContentTabOrderRef.current();
            const candidates = getTabbableCandidates(contentRef.current);
            if (candidates.length) focusFirst(side === "start" ? candidates : candidates.reverse());
        }
    }, []);
    const handleContentExit = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        if (contentRef.current) {
            const candidates = getTabbableCandidates(contentRef.current);
            if (candidates.length) restoreContentTabOrderRef.current = removeFromTabOrder(candidates);
        }
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NavigationMenuItemContextProvider, {
        scope: __scopeNavigationMenu,
        value,
        triggerRef,
        contentRef,
        focusProxyRef,
        wasEscapeCloseRef,
        onEntryKeyDown: handleContentEntry,
        onFocusProxyEnter: handleContentEntry,
        onRootContentClose: handleContentExit,
        onContentFocusOutside: handleContentExit,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].li, {
            ...itemProps,
            ref: forwardedRef
        })
    });
});
NavigationMenuItem.displayName = ITEM_NAME;
var TRIGGER_NAME = "NavigationMenuTrigger";
var NavigationMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
    const context = useNavigationMenuContext(TRIGGER_NAME, props.__scopeNavigationMenu);
    const itemContext = useNavigationMenuItemContext(TRIGGER_NAME, props.__scopeNavigationMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, itemContext.triggerRef, forwardedRef);
    const triggerId = makeTriggerId(context.baseId, itemContext.value);
    const contentId = makeContentId(context.baseId, itemContext.value);
    const hasPointerMoveOpenedRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const wasClickCloseRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    const open = itemContext.value === context.value;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
                scope: __scopeNavigationMenu,
                value: itemContext.value,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FocusGroupItem, {
                    asChild: true,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
                        id: triggerId,
                        disabled,
                        "data-disabled": disabled ? "" : void 0,
                        "data-state": getOpenState(open),
                        "aria-expanded": open,
                        "aria-controls": contentId,
                        ...triggerProps,
                        ref: composedRefs,
                        onPointerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerEnter, ()=>{
                            wasClickCloseRef.current = false;
                            itemContext.wasEscapeCloseRef.current = false;
                        }),
                        onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenMouse(()=>{
                            if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current) return;
                            context.onTriggerEnter(itemContext.value);
                            hasPointerMoveOpenedRef.current = true;
                        })),
                        onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, whenMouse(()=>{
                            if (disabled) return;
                            context.onTriggerLeave();
                            hasPointerMoveOpenedRef.current = false;
                        })),
                        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, ()=>{
                            context.onItemSelect(itemContext.value);
                            wasClickCloseRef.current = open;
                        }),
                        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                            const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
                            const entryKey = {
                                horizontal: "ArrowDown",
                                vertical: verticalEntryKey
                            }[context.orientation];
                            if (open && event.key === entryKey) {
                                itemContext.onEntryKeyDown();
                                event.preventDefault();
                            }
                        })
                    })
                })
            }),
            open && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
                        "aria-hidden": true,
                        tabIndex: 0,
                        ref: itemContext.focusProxyRef,
                        onFocus: (event)=>{
                            const content = itemContext.contentRef.current;
                            const prevFocusedElement = event.relatedTarget;
                            const wasTriggerFocused = prevFocusedElement === ref.current;
                            const wasFocusFromContent = content?.contains(prevFocusedElement);
                            if (wasTriggerFocused || !wasFocusFromContent) {
                                itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
                            }
                        }
                    }),
                    context.viewport && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        "aria-owns": contentId
                    })
                ]
            })
        ]
    });
});
NavigationMenuTrigger.displayName = TRIGGER_NAME;
var LINK_NAME = "NavigationMenuLink";
var LINK_SELECT = "navigationMenu.linkSelect";
var NavigationMenuLink = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FocusGroupItem, {
        asChild: true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].a, {
            "data-active": active ? "" : void 0,
            "aria-current": active ? "page" : void 0,
            ...linkProps,
            ref: forwardedRef,
            onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, (event)=>{
                const target = event.target;
                const linkSelectEvent = new CustomEvent(LINK_SELECT, {
                    bubbles: true,
                    cancelable: true
                });
                target.addEventListener(LINK_SELECT, (event2)=>onSelect?.(event2), {
                    once: true
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(target, linkSelectEvent);
                if (!linkSelectEvent.defaultPrevented && !event.metaKey) {
                    const rootContentDismissEvent = new CustomEvent(ROOT_CONTENT_DISMISS, {
                        bubbles: true,
                        cancelable: true
                    });
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(target, rootContentDismissEvent);
                }
            }, {
                checkForDefaultPrevented: false
            })
        })
    });
});
NavigationMenuLink.displayName = LINK_NAME;
var INDICATOR_NAME = "NavigationMenuIndicator";
var NavigationMenuIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...indicatorProps } = props;
    const context = useNavigationMenuContext(INDICATOR_NAME, props.__scopeNavigationMenu);
    const isVisible = Boolean(context.value);
    return context.indicatorTrack ? __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createPortal(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || isVisible,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NavigationMenuIndicatorImpl, {
            ...indicatorProps,
            ref: forwardedRef
        })
    }), context.indicatorTrack) : null;
});
NavigationMenuIndicator.displayName = INDICATOR_NAME;
var NavigationMenuIndicatorImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...indicatorProps } = props;
    const context = useNavigationMenuContext(INDICATOR_NAME, __scopeNavigationMenu);
    const getItems = useCollection(__scopeNavigationMenu);
    const [activeTrigger, setActiveTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [position, setPosition] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const isHorizontal = context.orientation === "horizontal";
    const isVisible = Boolean(context.value);
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const items = getItems();
        const triggerNode = items.find((item)=>item.value === context.value)?.ref.current;
        if (triggerNode) setActiveTrigger(triggerNode);
    }, [
        getItems,
        context.value
    ]);
    const handlePositionChange = ()=>{
        if (activeTrigger) {
            setPosition({
                size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
                offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
            });
        }
    };
    useResizeObserver(activeTrigger, handlePositionChange);
    useResizeObserver(context.indicatorTrack, handlePositionChange);
    return position ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "aria-hidden": true,
        "data-state": isVisible ? "visible" : "hidden",
        "data-orientation": context.orientation,
        ...indicatorProps,
        ref: forwardedRef,
        style: {
            position: "absolute",
            ...isHorizontal ? {
                left: 0,
                width: position.size + "px",
                transform: `translateX(${position.offset}px)`
            } : {
                top: 0,
                height: position.size + "px",
                transform: `translateY(${position.offset}px)`
            },
            ...indicatorProps.style
        }
    }) : null;
});
var CONTENT_NAME = "NavigationMenuContent";
var NavigationMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...contentProps } = props;
    const context = useNavigationMenuContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const itemContext = useNavigationMenuItemContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(itemContext.contentRef, forwardedRef);
    const open = itemContext.value === context.value;
    const commonProps = {
        value: itemContext.value,
        triggerRef: itemContext.triggerRef,
        focusProxyRef: itemContext.focusProxyRef,
        wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
        onContentFocusOutside: itemContext.onContentFocusOutside,
        onRootContentClose: itemContext.onRootContentClose,
        ...contentProps
    };
    return !context.viewport ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || open,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NavigationMenuContentImpl, {
            "data-state": getOpenState(open),
            ...commonProps,
            ref: composedRefs,
            onPointerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerEnter, context.onContentEnter),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, whenMouse(context.onContentLeave)),
            style: {
                // Prevent interaction when animating out
                pointerEvents: !open && context.isRootMenu ? "none" : void 0,
                ...commonProps.style
            }
        })
    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ViewportContentMounter, {
        forceMount,
        ...commonProps,
        ref: composedRefs
    });
});
NavigationMenuContent.displayName = CONTENT_NAME;
var ViewportContentMounter = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useNavigationMenuContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const { onViewportContentChange, onViewportContentRemove } = context;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        onViewportContentChange(props.value, {
            ref: forwardedRef,
            ...props
        });
    }, [
        props,
        forwardedRef,
        onViewportContentChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        return ()=>onViewportContentRemove(props.value);
    }, [
        props.value,
        onViewportContentRemove
    ]);
    return null;
});
var ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var NavigationMenuContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
    const context = useNavigationMenuContext(CONTENT_NAME, __scopeNavigationMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, forwardedRef);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const getItems = useCollection(__scopeNavigationMenu);
    const prevMotionAttributeRef = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const { onItemDismiss } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const content = ref.current;
        if (context.isRootMenu && content) {
            const handleClose = ()=>{
                onItemDismiss();
                onRootContentClose();
                if (content.contains(document.activeElement)) triggerRef.current?.focus();
            };
            content.addEventListener(ROOT_CONTENT_DISMISS, handleClose);
            return ()=>content.removeEventListener(ROOT_CONTENT_DISMISS, handleClose);
        }
    }, [
        context.isRootMenu,
        props.value,
        triggerRef,
        onItemDismiss,
        onRootContentClose
    ]);
    const motionAttribute = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const items = getItems();
        const values = items.map((item)=>item.value);
        if (context.dir === "rtl") values.reverse();
        const index = values.indexOf(context.value);
        const prevIndex = values.indexOf(context.previousValue);
        const isSelected = value === context.value;
        const wasSelected = prevIndex === values.indexOf(value);
        if (!isSelected && !wasSelected) return prevMotionAttributeRef.current;
        const attribute = (()=>{
            if (index !== prevIndex) {
                if (isSelected && prevIndex !== -1) return index > prevIndex ? "from-end" : "from-start";
                if (wasSelected && index !== -1) return index > prevIndex ? "to-start" : "to-end";
            }
            return null;
        })();
        prevMotionAttributeRef.current = attribute;
        return attribute;
    }, [
        context.previousValue,
        context.value,
        context.dir,
        getItems,
        value
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FocusGroup, {
        asChild: true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DismissableLayer"], {
            id: contentId,
            "aria-labelledby": triggerId,
            "data-motion": motionAttribute,
            "data-orientation": context.orientation,
            ...contentProps,
            ref: composedRefs,
            disableOutsidePointerEvents: false,
            onDismiss: ()=>{
                const rootContentDismissEvent = new Event(ROOT_CONTENT_DISMISS, {
                    bubbles: true,
                    cancelable: true
                });
                ref.current?.dispatchEvent(rootContentDismissEvent);
            },
            onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>{
                onContentFocusOutside();
                const target = event.target;
                if (context.rootNavigationMenu?.contains(target)) event.preventDefault();
            }),
            onPointerDownOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownOutside, (event)=>{
                const target = event.target;
                const isTrigger = getItems().some((item)=>item.ref.current?.contains(target));
                const isRootViewport = context.isRootMenu && context.viewport?.contains(target);
                if (isTrigger || isRootViewport || !context.isRootMenu) event.preventDefault();
            }),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
                const isTabKey = event.key === "Tab" && !isMetaKey;
                if (isTabKey) {
                    const candidates = getTabbableCandidates(event.currentTarget);
                    const focusedElement = document.activeElement;
                    const index = candidates.findIndex((candidate)=>candidate === focusedElement);
                    const isMovingBackwards = event.shiftKey;
                    const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
                    if (focusFirst(nextCandidates)) {
                        event.preventDefault();
                    } else {
                        focusProxyRef.current?.focus();
                    }
                }
            }),
            onEscapeKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onEscapeKeyDown, (_event)=>{
                wasEscapeCloseRef.current = true;
            })
        })
    });
});
var VIEWPORT_NAME = "NavigationMenuViewport";
var NavigationMenuViewport = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...viewportProps } = props;
    const context = useNavigationMenuContext(VIEWPORT_NAME, props.__scopeNavigationMenu);
    const open = Boolean(context.value);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || open,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NavigationMenuViewportImpl, {
            ...viewportProps,
            ref: forwardedRef
        })
    });
});
NavigationMenuViewport.displayName = VIEWPORT_NAME;
var NavigationMenuViewportImpl = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, children, ...viewportImplProps } = props;
    const context = useNavigationMenuContext(VIEWPORT_NAME, __scopeNavigationMenu);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.onViewportChange);
    const viewportContentContext = useViewportContentContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const [size, setSize] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const viewportWidth = size ? size?.width + "px" : void 0;
    const viewportHeight = size ? size?.height + "px" : void 0;
    const open = Boolean(context.value);
    const activeContentValue = open ? context.value : context.previousValue;
    const handleSizeChange = ()=>{
        if (content) setSize({
            width: content.offsetWidth,
            height: content.offsetHeight
        });
    };
    useResizeObserver(content, handleSizeChange);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-state": getOpenState(open),
        "data-orientation": context.orientation,
        ...viewportImplProps,
        ref: composedRefs,
        style: {
            // Prevent interaction when animating out
            pointerEvents: !open && context.isRootMenu ? "none" : void 0,
            ["--radix-navigation-menu-viewport-width"]: viewportWidth,
            ["--radix-navigation-menu-viewport-height"]: viewportHeight,
            ...viewportImplProps.style
        },
        onPointerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerEnter, context.onContentEnter),
        onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, whenMouse(context.onContentLeave)),
        children: Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props2 }])=>{
            const isActive = activeContentValue === value;
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
                present: forceMount || isActive,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(NavigationMenuContentImpl, {
                    ...props2,
                    ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(ref, (node)=>{
                        if (isActive && node) setContent(node);
                    })
                })
            }, value);
        })
    });
});
var FOCUS_GROUP_NAME = "FocusGroup";
var FocusGroup = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...groupProps } = props;
    const context = useNavigationMenuContext(FOCUS_GROUP_NAME, __scopeNavigationMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FocusGroupCollection.Provider, {
        scope: __scopeNavigationMenu,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FocusGroupCollection.Slot, {
            scope: __scopeNavigationMenu,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                dir: context.dir,
                ...groupProps,
                ref: forwardedRef
            })
        })
    });
});
var ARROW_KEYS = [
    "ArrowRight",
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown"
];
var FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var FocusGroupItem = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...groupProps } = props;
    const getItems = useFocusGroupCollection(__scopeNavigationMenu);
    const context = useNavigationMenuContext(FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FocusGroupCollection.ItemSlot, {
        scope: __scopeNavigationMenu,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].button, {
            ...groupProps,
            ref: forwardedRef,
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                const isFocusNavigationKey = [
                    "Home",
                    "End",
                    ...ARROW_KEYS
                ].includes(event.key);
                if (isFocusNavigationKey) {
                    let candidateNodes = getItems().map((item)=>item.ref.current);
                    const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
                    const prevKeys = [
                        prevItemKey,
                        "ArrowUp",
                        "End"
                    ];
                    if (prevKeys.includes(event.key)) candidateNodes.reverse();
                    if (ARROW_KEYS.includes(event.key)) {
                        const currentIndex = candidateNodes.indexOf(event.currentTarget);
                        candidateNodes = candidateNodes.slice(currentIndex + 1);
                    }
                    setTimeout(()=>focusFirst(candidateNodes));
                    event.preventDefault();
                }
            })
        })
    });
});
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function focusFirst(candidates) {
    const previouslyFocusedElement = document.activeElement;
    return candidates.some((candidate)=>{
        if (candidate === previouslyFocusedElement) return true;
        candidate.focus();
        return document.activeElement !== previouslyFocusedElement;
    });
}
function removeFromTabOrder(candidates) {
    candidates.forEach((candidate)=>{
        candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
        candidate.setAttribute("tabindex", "-1");
    });
    return ()=>{
        candidates.forEach((candidate)=>{
            const prevTabIndex = candidate.dataset.tabindex;
            candidate.setAttribute("tabindex", prevTabIndex);
        });
    };
}
function useResizeObserver(element, onResize) {
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onResize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let rAF = 0;
        if (element) {
            const resizeObserver = new ResizeObserver(()=>{
                cancelAnimationFrame(rAF);
                rAF = window.requestAnimationFrame(handleResize);
            });
            resizeObserver.observe(element);
            return ()=>{
                window.cancelAnimationFrame(rAF);
                resizeObserver.unobserve(element);
            };
        }
    }, [
        element,
        handleResize
    ]);
}
function getOpenState(open) {
    return open ? "open" : "closed";
}
function makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
}
function whenMouse(handler) {
    return (event)=>event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root2 = NavigationMenu;
var Sub = NavigationMenuSub;
var List = NavigationMenuList;
var Item = NavigationMenuItem;
var Trigger = NavigationMenuTrigger;
var Link = NavigationMenuLink;
var Indicator = NavigationMenuIndicator;
var Content = NavigationMenuContent;
var Viewport = NavigationMenuViewport;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs [app-ssr] (ecmascript) <export * as NavigationMenu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationMenu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$navigation$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/separator.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = [
    "horizontal",
    "vertical"
];
var Separator = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
    const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? {
        role: "none"
    } : {
        "aria-orientation": ariaOrientation,
        role: "separator"
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-orientation": orientation,
        ...semanticProps,
        ...domProps,
        ref: forwardedRef
    });
});
Separator.displayName = NAME;
function isValidOrientation(orientation) {
    return ORIENTATIONS.includes(orientation);
}
var Root = Separator;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript) <export * as Separator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-accessible-icon/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/accessible-icon.tsx
__turbopack_context__.s([
    "AccessibleIcon",
    ()=>AccessibleIcon,
    "Root",
    ()=>Root2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var NAME = "AccessibleIcon";
var AccessibleIcon = ({ children, label })=>{
    const child = __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](child, {
                // accessibility
                "aria-hidden": "true",
                focusable: "false"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
                children: label
            })
        ]
    });
};
AccessibleIcon.displayName = NAME;
var Root2 = AccessibleIcon;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-accessible-icon/dist/index.mjs [app-ssr] (ecmascript) <export * as AccessibleIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessibleIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accessible$2d$icon$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accessible$2d$icon$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-accessible-icon/dist/index.mjs [app-ssr] (ecmascript)");
}),
"[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript) <export * as Portal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$whopWorkoutPlanner$2f$workout$2d$planner$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/whopWorkoutPlanner/workout-planner/node_modules/@radix-ui/react-portal/dist/index.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=2e7f8_%40radix-ui_53bfe109._.js.map