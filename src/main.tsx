import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Header } from "./components/Home/Header";
import { motion } from "framer-motion";
import { ErrorNotFound } from "./pages/ErrorNotFound";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";



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
