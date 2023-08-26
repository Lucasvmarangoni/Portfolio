import { Outlet, Link } from "react-router-dom";
import { Header } from "../components/Home/Header";
import { Motion } from "../components/functions/motion";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {Motion(0.8, 1.5,
        <div
          className="text-T1 text-sm text-center flex justify-center items-end brightness-200 mb-1
        n2:mt-10
        n3:mt-6
        n4:mt-6
        n5:mt-6
        n6:mt-6
        n7:mt-6
        "

        >
          <p className="">© 2022 Lucas V Marangoni. All Rights Reserved.</p>
        </div>
      )}
    </div>
  );
};
