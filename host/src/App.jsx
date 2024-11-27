import { useNested } from "./useNested";
import { NotReloadedWhenChanged } from "./NotReloadedWhenChanged";

export function App() {
  // The line below causes a problem with hot reload
  useNested();
  return (
    <div>
      <h1>Hi</h1>
      <NotReloadedWhenChanged />
    </div>
  );
}
