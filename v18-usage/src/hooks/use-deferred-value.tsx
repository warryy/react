import React from "react";

/**
 * useDeferredValue
 * what: 用来优化性能的hook
 * why: 不重要的更新不应该阻塞主线程
 * how: 接收的值应为 非紧急的值, 类型应为原始值, 或者是在渲染之外创建的对象
 */
export const UseDeferredValueDemo = () => {
  const [value, setValue] = React.useState("");
  const deferredValue = React.useDeferredValue(value);
  React.useEffect(() => {
    // 模拟耗时操作, 线程阻塞1秒
    const start = Date.now();
    while (Date.now() - start < 1000) {
      // do nothing
    }
  }, [deferredValue]);
  /**
   * 快速输入 asdf
   *
   * render value a deferredValue
   * use-deferred-value.tsx:19 render value a deferredValue a
   * scheduler.development.js:517 [Violation] 'message' handler took 999ms
   * use-deferred-value.tsx:19 render value as deferredValue a
   * use-deferred-value.tsx:19 render value asd deferredValue a
   * use-deferred-value.tsx:19 render value asdf deferredValue a
   * use-deferred-value.tsx:19 render value asdf deferredValue asdf
   * [Violation] 'message' handler took 1000ms
   */
  console.log("render", "value", value, "deferredValue", deferredValue);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div>value: {value}</div>
      <div>deferredValue: {deferredValue}</div>
    </div>
  );
};
