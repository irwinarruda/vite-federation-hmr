import { useState, useMemo, createContext, useContext } from "react";

function useCounterContext() {
  const [count, setCount] = useState(0);
  return useMemo(
    () => ({
      count,
      increment: () => setCount((count) => count + 1),
      decrement: () => setCount((count) => count - 1),
    }),
    [count]
  );
}

export function useCounter() {
  return useContext(CounterContext);
}

const CounterContext = createContext();

export function CounterProvider({ children }) {
  return (
    <CounterContext.Provider value={useCounterContext()}>
      {children}
    </CounterContext.Provider>
  );
}
