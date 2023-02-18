import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </HashRouter> */}
  </React.StrictMode>
);
function createBrowserHistory() {
  throw new Error("Function not implemented.");
}
