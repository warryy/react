import React from "react";
// import { useTodoStore } from "./todo-store";

// =========================简单使用s===========================
function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback: any) {
  console.log("subscribe");
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    console.log("unsubscribe");
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

const useWindowOnline = () => {
  return React.useSyncExternalStore(subscribe, getSnapshot);
};

const Son = () => {
  const isOnline = useWindowOnline();
  console.log("===son render");
  return <h3>{isOnline ? "✅ Online" : "❌ Disconnected"}</h3>;
};

// =========================简单使用e===========================

// =========================复杂使用s===========================

export const todosStore = {
  todos: [] as { text: string; id: string }[],
  cbs: [] as (() => void)[],
  getTodos: () => {
    return todosStore.todos;
  },
  addTodo: (text: string) => {
    todosStore.todos.push({ text, id: Math.random().toString(32).slice(2, 6) });
    todosStore.todos = [...todosStore.todos];
    todosStore.notify();
  },
  removeTodo: (id: string) => {
    todosStore.todos = todosStore.todos.filter((todo) => todo.id !== id);
    todosStore.todos = [...todosStore.todos];
    todosStore.notify();
  },
  subScribe: (cbFn: () => void) => {
    todosStore.cbs.push(cbFn);
    return () => {
      todosStore.unsubscribe(cbFn);
    };
  },
  unsubscribe: (cbFn: () => void) => {
    todosStore.cbs = todosStore.cbs.filter((f) => !Object.is(cbFn, f));
  },
  notify: () => {
    console.log("===notify");
    todosStore.cbs.forEach((cb) => {
      cb();
    });
  },
};

export const useTodoStore = () => {
  const todos = React.useSyncExternalStore(
    todosStore.subScribe,
    todosStore.getTodos
  );
  return {
    todos,
    addTodo: todosStore.addTodo,
    removeTodo: todosStore.removeTodo,
  };
};

export const TodoList = () => {
  const { todos, addTodo, removeTodo } = useTodoStore();
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>text: {todo.text}</span>
            <br />
            <span>id: {todo.id}</span>
            <button onClick={() => removeTodo(todo.id)}>
              remove {todo.id}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Son1 = () => {
  return (
    <div>
      <h3>Son1</h3>
      <TodoList />
    </div>
  );
};

const Son2 = () => {
  return (
    <div>
      <h3>Son2</h3>
      <TodoList />
    </div>
  );
};
// =========================复杂使用e===========================

/**
 * 一共两个例子,
 */
export const UseSyncExternalStoreDemo = () => {
  const [n, setN] = React.useState(0);
  const [isShowSon, setIsShowSon] = React.useState(true);
  const { addTodo, todos } = useTodoStore();

  return (
    <div>
      <h2>简单使用例子</h2>
      <h3>n: {n}</h3>
      <button onClick={() => setN(n + 1)}>n + 1</button>
      <button onClick={() => setIsShowSon(!isShowSon)}>
        {isShowSon ? "hide" : "show"} 网页状态
      </button>
      {isShowSon && <Son />}
      <br />
      <br />
      <h2>复杂使用例子</h2>
      <div>
        <button
          onClick={() =>
            addTodo("todo-" + Math.random().toString().slice(2, 8))
          }
        >
          add Todo
        </button>
        <Son1></Son1>
        <Son2></Son2>
      </div>
    </div>
  );
};
