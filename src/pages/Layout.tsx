import { Outlet, Link } from "react-router-dom";
import { Header } from "../components/Home/Header";
import { motion } from "framer-motion";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <motion.div
        className="text-T1 text-sm text-center flex justify-center items-end brightness-200 
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
        <p className="brightness-125 ">© 2022 Lucas V Marangoni. All Rights Reserved.</p>
      </motion.div>
    </div>
  );
};
