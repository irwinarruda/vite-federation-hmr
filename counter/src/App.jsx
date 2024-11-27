import { useCounter } from "./Counter";

export function App() {
  const counter = useCounter();
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={counter.increment}>Increment</button>
    </>
  );
}
