import "./styles/main.css";
import { Home } from "./pages/Home";
import { NavLink, Route, Routes } from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { Header } from "./components/Home/Header";
import { ErrorNoFount } from "./components/ErrorNoFount";


if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}


function App() {
  return (
    <>
      <div className="mx-auto w-[100vw] fixed left-[0.1vw]">
        <Header />
        <Routes>          
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<ErrorNoFount />} />                    
        </Routes>
        <div
          className="text-T1 text-xs text-center flex justify-center items-end
        n2:mt-10
        n3:mt-6
        n4:mt-6
        n5:mt-6
        n6:mt-6
        n7:mt-6
        "
        >
          <p>© 2022 Lucas V Marangoni. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
export default App;
