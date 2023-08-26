import { ButtonPort } from "../components/Home/ButtonPort";
import { Capa } from "../components/Home/Capa";
import { motion } from "framer-motion";
import { Info } from "../components/Home/Info";
import { Motion } from "../components/functions/motion";

export const Home = () => {

  return (
    <div className="grid gap-10">
      <Capa />
      {/* <Skills /> */}
      {Motion(0.8, 1.2,
        <ButtonPort />
      )}

      {Motion(0.8, 1.4,
        <Info />
      )}

    </div>
  );
};
