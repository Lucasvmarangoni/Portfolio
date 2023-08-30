import { Motion, MotionFirst } from "../functions/Motion";
import { PhotoButtons } from "./capa/PhotoButtons";

export function Capa() {
  return (
    Motion(0.8, 0.4, 
      <div
        id="vid"
        className="mt-10 flex justify-center items-center  relative 
      n1:mt-4
      n2:mt-4
      n3:mt-4
      n4:mt-4
      n5:mt-4
      n6:mt-2
      n7:mt-2
      "

      >
        <video
          className="m-auto opacity-40 object-cover 
        n0:w-[1030px] 
        n1:w-[830px] n1:h-full
        n2:w-[781px] n2:h-full
        n3:w-[576px] n3:h-[500px]
        n4:w-[530px] n4:h-[450px]
        n5:w-[430px] n5:h-[420px]
        n6:w-[350px] n6:h-[420px]
        n7:w-[240px] n7:h-[440px]"
          muted
          loop
          autoPlay
          preload=""
          src="/video1.mp4"
        ></video>

        <PhotoButtons />

      </div>
    )
  );
}
