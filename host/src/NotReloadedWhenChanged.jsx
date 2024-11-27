import { useCounter } from "counter/Counter";

export function NotReloadedWhenChanged() {
  // Comment the line below and see that even only importing the hook
  // will cause the component to not hot reload
  const counter = useCounter();
  return (
    <div>
      <h2>Not Reloaded When Changed</h2>
    </div>
  );
}
