import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 TODO: fix the disappearing youtube icon and the styles that get broken
 TODO: track user made queues an track when a vide is added
 */

function init() {
  const root = document.createElement("div");
  root.id = "crx-root";
  setTimeout(() => {
    document.querySelectorAll("#header-description")[1].appendChild(root);
    ReactDOM.createRoot(
      document.querySelector("#crx-root") as HTMLElement
    ).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }, 1000);
}

// Wait for the DOM to finish loading before running the init function
if (document.readyState === "complete") {
  init();
} else {
  window.addEventListener("load", init);
}
