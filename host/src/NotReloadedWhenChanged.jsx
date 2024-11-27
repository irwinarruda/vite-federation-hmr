import { useCounter } from "counter/Counter";

export function NotReloadedWhenChanged() {
  const counter = useCounter();
  return (
    <>
      <h2>Not Reloaded When Changed</h2>
      <button onClick={counter.increment}>Increment</button>
    </>
  );
}
