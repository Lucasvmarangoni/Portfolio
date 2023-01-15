import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <HashRouter> */}
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    {/* </HashRouter> */}
  </React.StrictMode>
);
