import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.createElement("div");
root.id = "crx-root";
console.log(root);
document.body.append(root);

ReactDOM.createRoot(document.querySelector("#crx-root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
