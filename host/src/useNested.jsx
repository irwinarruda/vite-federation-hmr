import { useEffect } from "react";
import { useCounter } from "counter/Counter";

export function useNested() {
  const counter = useCounter();
  // I'm not sure if you actually need this useEffect to reproduce the issue
  // remember to always restart the server if things start working.
  useEffect(() => {
    counter.increment();
  }, []);
  return;
}
