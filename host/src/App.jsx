import { CounterProvider } from "counter/Counter";
import { Nested1Component } from "./Nested1Component";

// function App() {
//   return (
//     <CounterProvider>
//       <h1>Host</h1>
//       <Nested1Component />
//     </CounterProvider>
//   );
// }

function Comp() {
  return (
    <>
      <h1>Host</h1>
      <Nested1Component />
    </>
  );
}

function App() {
  return <CounterProvider App={Comp} />;
}

export default App;
