import "./styles/main.css";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { Header } from "./components/Home/Header";
import { motion } from "framer-motion";
import { ErrorNotFound } from "./pages/ErrorNotFound";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <div className="mx-auto w-full h-[100%] fixed left-[0.1vw] overflow-y-scroll overflow-x-hidden brightness-150">     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Route>
      </Routes>     
    </div>
  );
}
export default App;
