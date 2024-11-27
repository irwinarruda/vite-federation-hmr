import { useState, useMemo } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  return useMemo(
    () => ({
      count,
      increment: () => setCount((count) => count + 1),
      decrement: () => setCount((count) => count - 1),
    }),
    [count],
  );
}
