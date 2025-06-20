import React from "react";
import ReactDOM from "react-dom";

export const FlushSyncDemo = () => {
  const [isPrinting, setIsPrinting] = React.useState(false);

  React.useEffect(() => {
    // function handleBeforePrint() {
    //   ReactDOM.flushSync(() => {
    //     setIsPrinting(true);
    //   });
    // }

    function handleAfterPrint() {
      setIsPrinting(false);
    }

    // window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      // window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setIsPrinting(true);
          window.print();
        }}
      >
        打印
      </button>
      <button
        onClick={() => {
          ReactDOM.flushSync(() => {
            setIsPrinting(true);
          });
          window.print();
        }}
      >
        flushSync 打印
      </button>
      <div>这是个内部文件</div>
      <div>这是个内部文件</div>
      <div>这是个内部文件</div>
      <div>这是个内部文件</div>
      {isPrinting && <span>这是个水印组件, 防止资料外泄</span>}
    </div>
  );
};
