import "./styles/main.css";
import { Home } from "./pages/Home";
import { createBrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { Header } from "./components/Home/Header";
import { motion } from "framer-motion";



function App() {
  return (
    <div className="mx-auto w-[100vw] h-[100%] fixed left-[0.1vw] overflow-y-scroll ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <motion.div
        className="text-T1 text-xs text-center flex justify-center items-end
        n2:mt-10
        n3:mt-6
        n4:mt-6
        n5:mt-6
        n6:mt-6
        n7:mt-6
        "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 0.8,
        delay: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <p>© 2022 Lucas V Marangoni. All Rights Reserved.</p>
      </motion.div>
    </div>
  );
}
export default App;
