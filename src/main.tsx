import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

if (window.location.hash) {
  window.history.replaceState("", document.title, window.location.pathname);
  console.log(document.title)
  console.log(window.location.pathname);
  ;
  
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      {/* <BrowserRouter basename={"/"}> */}
      <App />
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>
);
