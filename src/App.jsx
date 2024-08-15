import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const a = 10;

  return (
    <div>
      <h1>TODO 앱</h1>
      <div>
        <input type="text" />
        <button>add</button>
      </div>
    </div>
  );
}

export default App;
