import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
function init() {
  const root = document.createElement("div");
  root.id = "crx-root";
  console.log(root);
  setTimeout(() => {
    document.querySelectorAll("#publisher-container")[1].appendChild(root);
    ReactDOM.createRoot(
      document.querySelector("#crx-root") as HTMLElement
    ).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }, 100);
}

init();
