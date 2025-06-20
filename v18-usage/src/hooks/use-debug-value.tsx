import React from "react";

const useChengfa = (a: number) => {
  const [count, setCount] = React.useState(a);
  const [innerState] = React.useState("123");
  React.useDebugValue("这里是 debug init value: " + a);
  React.useDebugValue("可以加多个");
  return {
    res: count,
    chengfa: (p: number) => {
      setCount(count * p);
    },
  };
};

/**
 * useDebugValue
 * what: 就是一个 调试的hook
 * why: 用来在React debug 插件中调试打印自定义 hooks 的内部状态
 * how: 在自定义 hooks 顶层调用
 */
export const UseDebugValueDemo = () => {
  const { res, chengfa } = useChengfa(2);
  return (
    <div>
      <div>res: {res}</div>
      <button onClick={() => chengfa(2)}>chengfa * 2</button>
    </div>
  );
};

UseDebugValueDemo.displayName = "UseDebugValueDemo";
