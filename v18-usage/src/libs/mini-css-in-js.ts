import React, { useInsertionEffect, useRef } from "react";

// 简单 hash 函数生成类名
function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return `css-${Math.abs(hash)}`;
}

// 全局样式表管理器
const styleSheet = (() => {
  let styleTag: HTMLStyleElement | null = null;
  const inserted = new Set<string>();

  return {
    insert(css: string, className: string) {
      if (inserted.has(className)) return;
      if (!styleTag) {
        styleTag = document.createElement("style");
        document.head.appendChild(styleTag);
      }
      styleTag.appendChild(document.createTextNode(css));
      inserted.add(className);
    },
  };
})();

// 核心 styled 函数
function styled(tag: string) {
  return (strings: TemplateStringsArray, ...exprs: any[]) => {
    const rawCss = strings.reduce((acc, str, i) => {
      console.log("str", str);
      console.log("i", i);
      console.log("exprs", exprs);
      return acc + str + (exprs[i] ?? "");
    }, "");
    const className = hashCode(rawCss);
    const fullCss = `.${className} { ${rawCss} }`;

    return function StyledComponent(props: any) {
      console.log("exprs", exprs);
      console.log("tag", tag);
      console.log("fullCss", fullCss);
      console.log("props", props);
      console.log("className", className);
      return "aaa";
    };
  };
}

const color = "red";

export const Button = styled("button")`
  background: ${color};
  border: "1px solid green";
`;
