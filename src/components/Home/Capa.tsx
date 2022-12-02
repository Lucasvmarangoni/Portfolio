import { PhotoButtons } from "./capa/PhotoButtons";



export function Capa() {
  return (
    <div
      id="vid"
      className="mt-10 flex justify-center items-center flex-wrap
    n2:mt-10
    n3:mt-6
    n4:mt-6
    n5:mt-6
    n6:mt-4
    n7:mt-4
    "
    >
      <video
        className="m-auto  opacity-100 object-cover
        n0:w-[1030px] 
        n1:w-[830px] n1:h-full
        n2:w-[781px] n2:h-full
        n3:w-[576px] n3:h-[500px]
        n4:w-[530px] n4:h-[450px]
        n5:w-[430px] n5:h-[420px]
        n6:w-[350px] n6:h-[400px]
        n7:w-[240px] n7:h-[400px]"
        muted
        loop
        autoPlay
        src="../../../public/video-capa.mp4"
      ></video>
      <PhotoButtons />
    </div>
  );
}
