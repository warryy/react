import React from "react";

type State = {
  money: number;
};

type Context = {
  state: State;
  earn: (m: number) => void;
  spend: (m: number) => void;
};

const CountContext = React.createContext<Context>({
  state: { money: 0 },
  earn: () => {},
  spend: () => {},
});

const CountContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [state, setState] = React.useState<State>({ money: 0 });
  const earn = React.useCallback((m: number) => {
    setState((o) => {
      return {
        money: o.money + m,
      };
    });
  }, []);
  const spend = React.useCallback((m: number) => {
    setState((o) => {
      return {
        money: o.money - m,
      };
    });
  }, []);
  const value = React.useMemo(
    () => ({ state, earn, spend }),
    [state, earn, spend]
  );
  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

const GrandSon = () => {
  const { spend } = React.useContext(CountContext);
  return (
    <div>
      <h3>我是grandson</h3>
      <button onClick={() => spend(1)}>Spend</button>
    </div>
  );
};

const Son = ({ children }: { children: React.ReactElement }) => {
  const { state, earn } = React.useContext(CountContext) || {};
  return (
    <div>
      <h2>我是son</h2>
      <div>资产: {state.money}</div>
      <button onClick={() => earn(1)}>Earn</button>

      {children}
    </div>
  );
};

export const UseContextStoreDemo = () => {
  return (
    <CountContextProvider>
      <>
        <h1>UseContextStoreDemo</h1>
        <Son>
          <GrandSon />
        </Son>
      </>
    </CountContextProvider>
  );
};
