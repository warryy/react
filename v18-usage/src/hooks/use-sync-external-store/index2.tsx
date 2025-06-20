import React from "react";
import { useTodoStore, TodoList } from "./index";

export const UseSyncExternalStoreDemo2 = () => {
  const { addTodo } = useTodoStore();

  return (
    <div>
      <div>
        <h2>UseSyncExternalStoreDemo2</h2>
        <h3>配合 UseSyncExternalStoreDemo 复杂使用</h3>
        <h3>实现了一个全局store</h3>
        <button
          onClick={() =>
            addTodo("todo-" + Math.random().toString().slice(2, 8))
          }
        >
          add Todo
        </button>
        <TodoList></TodoList>
      </div>
    </div>
  );
};
