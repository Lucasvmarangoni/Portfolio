import { Outlet, Link } from "react-router-dom";
import { Header } from "../components/Home/Header";
import { Motion } from "../components/functions/Motion";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {Motion(0.8, 1.0,
        <div
          className="text-T2 text-sm text-end flex justify-center items-end  my-2 scroll-item relative bottom-0
        
        "
        >
          <p className="brightness-[2.7]">© 2022 Lucas V Marangoni. All Rights Reserved.</p>
        </div>
      )}
    </div>
  );
};
