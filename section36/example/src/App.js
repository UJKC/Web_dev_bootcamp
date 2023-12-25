import "./styles.css";

import { Data } from "./data";

export default function App() {
  Data();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Heading />
    </div>
  );
}

export function Heading() {
  return <h1>I am {name}</h1>;
}
