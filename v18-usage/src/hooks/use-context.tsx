import React from "react";

const Context = React.createContext({
  name: "张三",
});

export const ContextConsumerDemo = () => {
  const data = React.useContext(Context);
  return (
    <div>
      <p>
        <span>name: </span>
        <span>{data.name}</span>
      </p>
    </div>
  );
};

export const UseContext = () => {
  return (
    <Context.Provider value={{ name: "李四" }}>
      <ContextConsumerDemo />
    </Context.Provider>
  );
};
