import logo from "./logo.svg";
import "./App.css";
import FirstPage from "./FirstPage";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Deployed demo app</p>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Go
        </button>
        {show ? <FirstPage /> : ""}
      </header>
    </div>
  );
}

export default App;
