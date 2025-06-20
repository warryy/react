import { UseContext } from "@/hooks/use-context";
import { UseContextStoreDemo } from "@/hooks/use-context-store";
import { UseDebugValueDemo } from "@/hooks/use-debug-value";
import { UseDeferredValueDemo } from "@/hooks/use-deferred-value";
import { UseIdDemo } from "@/hooks/use-id";
import { UseImperativeHandleDemo } from "@/hooks/use-imperative-handle";
import { UseReducer } from "@/hooks/use-reducer";
import { UseSyncExternalStoreDemo } from "@/hooks/use-sync-external-store";
import { UseSyncExternalStoreDemo2 } from "@/hooks/use-sync-external-store/index2";

import { FlushSyncDemo } from "@/react-dom/flush-sync";

type RouteType = {
  path: string;
  element: () => any;
  name: string;
};

type SplitRoute = {
  type: "split";
};

type Route = RouteType | SplitRoute;

// route 类型守卫
export const isSplitRoute = (r: Route): r is SplitRoute => {
  return "type" in r && r.type === "split";
};

export const routes: Array<Route> = [
  {
    path: "/react-dom/flush-sync",
    element: FlushSyncDemo,
    name: "FlushSyncDemo",
  },
  { type: "split" },
  {
    path: "/hooks/use-reducer",
    element: UseReducer,
    name: "useReducer",
  },
  {
    path: "/hooks/use-context",
    element: UseContext,
    name: "useContext",
  },
  {
    path: "/hooks/use-context-store",
    element: UseContextStoreDemo,
    name: "useContextStore",
  },
  {
    path: "/hooks/use-debug-value",
    element: UseDebugValueDemo,
    name: "useDebugValue",
  },
  {
    path: "/hooks/use-deferred-value",
    element: UseDeferredValueDemo,
    name: "useDeferredValue",
  },
  {
    path: "/hooks/use-id",
    element: UseIdDemo,
    name: "useId",
  },
  {
    path: "/hooks/use-imperative-handle",
    element: UseImperativeHandleDemo,
    name: "useImperativeHandle",
  },
  {
    path: "/hooks/use-sync-external-store",
    element: UseSyncExternalStoreDemo,
    name: "useSyncExternalStore",
  },
  {
    path: "/hooks/use-sync-external-store2",
    element: UseSyncExternalStoreDemo2,
    name: "useSyncExternalStore2",
  },
];
