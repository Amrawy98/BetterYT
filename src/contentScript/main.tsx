import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
function init() {
  const root = document.createElement("div");
  root.id = "crx-root";
  console.log(root);
  document.querySelectorAll("#publisher-container")[1].appendChild(root);
  ReactDOM.createRoot(
    document.querySelector("#crx-root") as HTMLElement
  ).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Wait for the DOM to finish loading before running the init function
if (document.readyState === "complete") {
  init();
} else {
  window.addEventListener("load", init);
}
