import React from "react";

type State = {
  count: number;
};

type Action = {
  type: "increment" | "decrement";
  payload: number;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [state, dispatch] = React.useReducer<State, [Action]>(reducer, {
    count: 0,
  });
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        -1
      </button>
      <p>count: {state.count}</p>
    </div>
  );
};
