import React from "react";

interface SonRef {
  emphasize: () => void;
  normal: () => void;
  clear: () => void;
  randomInit: () => void;
}

const Son = React.forwardRef<SonRef, {}>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(ref, () => ({
    emphasize: () => {
      if (inputRef.current) {
        inputRef.current.style.backgroundColor = "red";
      }
    },
    normal: () => {
      if (inputRef.current) {
        inputRef.current.style.backgroundColor = "transparent";
      }
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    randomInit: () => {
      if (inputRef.current) {
        inputRef.current.value = Math.random().toString(36).slice(2, 15);
      }
    },
  }));

  return <input type="text" ref={inputRef} />;
});

export const UseImperativeHandleDemo = () => {
  const ref = React.useRef<SonRef>(null);
  return (
    <div>
      <Son ref={ref} />
      <div></div>
      <button onClick={() => ref.current?.randomInit()}>randomInit</button>
      <button onClick={() => ref.current?.clear()}>clear</button>
      <button onClick={() => ref.current?.emphasize()}>emphasize</button>
      <button onClick={() => ref.current?.normal()}>normal</button>
    </div>
  );
};
