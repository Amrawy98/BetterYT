import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.createElement("div");
root.id = "crx-root";
console.log(root);
document.body.insertAdjacentElement("afterend", root);

ReactDOM.hydrateRoot(
  document.querySelector("#crx-root") as HTMLElement,
  <App />
);
