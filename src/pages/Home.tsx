import { Capa } from "../components/Home/Capa";
import { Motion, MotionFirst } from "../components/functions/Motion";
import { Info } from "../components/Home/Info-tec";

export const Home = () => {

  return (
    <div className="grid gap-10">
      <Capa />          

      {MotionFirst(0.8, 1.4,
        <Info />
      )}

    </div>
  );
};
