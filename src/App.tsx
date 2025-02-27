import "./styles/main.css";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Projetos } from "./pages/Portfolio";
import { ErrorNotFound } from "./pages/ErrorNotFound";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <div className="mx-auto w-full h-[100%] fixed left-[0.1vw]  scroll-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route index element={<Projetos />} />
          <Route path="projetos" index element={<Projetos />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
