import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>UI Library of various components</h1>
      <div className="card">
        <button onClick={() => setShowModal(true)}>
          {showModal ? "Hide" : "Show"} Modal
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onButton1Click={() => setShowModal(false)}
          buttonOneText="Click to close"
        />
      )}
    </>
  );
}

export default App;
