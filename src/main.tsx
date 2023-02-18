import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";

if (window.location.hash) {
  window.history.replaceState("", "https://lucasvmarangoni.vercel.app/", window.location.hash.substr(1));
  // window.history.replaceState("", "https://lucasvmarangoni.vercel.app/", "portfolio");
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
