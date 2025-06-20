import React from "react";

export const Son = () => {
  const id = React.useId();
  return (
    <div>
      <div id={id}>Son id: {id}</div>
      {Array.from({ length: 2 }).map((_, index) => (
        <GrandSon key={index} />
      ))}
    </div>
  );
};
export const GrandSon = () => {
  const id = React.useId();
  return (
    <div>
      <div id={id}>GrandSon id: {id}</div>
    </div>
  );
};

/**
 * what: 在 React 18 中, 使用 useId 可以生成一个唯一的 id
 * why:
 *   1. ssr 时客户端和服务端的前缀唯一且相同
 *   2. html 生成一个唯一的id时, 如果是在组件内, 不可以写死id, 因为html全局 id 是唯一的
 * how:
 *   1. 和普通 hooks 调用规则一样
 * caveats:
 *   1. ReactDOM.createRoot, 当配置 identifierPrefix 时, id 前缀为 identifierPrefix
 *   2. 不能用做列表中的 键, 键 要和你的数据相关
 */
export const UseIdDemo = () => {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, index) => (
        <Son key={index} />
      ))}
    </div>
  );
};
