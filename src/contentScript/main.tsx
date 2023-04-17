import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function init() {
  const rootId = "playlist-better-yt";
  const root = document.createElement("div");
  root.id = rootId;
  const targetNode = document.querySelectorAll("#header-description")[1];
  if (targetNode) {
    console.log(targetNode, document.querySelectorAll("#header-description"));
    targetNode.appendChild(root);
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          const targetNode = document.querySelectorAll(
            "#header-description"
          )[1];
          if (targetNode) {
            observer.disconnect();
            if (!document.getElementById(rootId)) {
              targetNode.appendChild(root);
              ReactDOM.createRoot(root).render(
                <React.StrictMode>
                  <App />
                </React.StrictMode>
              );
            }
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

// Wait for the DOM to finish loading before running the init function
if (document.readyState === "complete") {
  init();
} else {
  window.addEventListener("load", init);
}
