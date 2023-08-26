import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Motion } from "../components/functions/motion";

export const ErrorNotFound = () => {
  return (
    Motion(0.8, 0.4,
      <div
        id="vid"
        className="mt-10 flex justify-center items-center flex-wrap
      n2:mt-10
      n3:mt-10
      n4:mt-8
      n5:mt-8
      n6:mt-6
      n7:mt-6
      "
      >
        <video
          className="m-auto opacity-20 object-cover
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

        <div className="grid absolute">
          <div className="grid justify-center items-center gap-10">
            {Motion(0.6, 0.6,
              <div
              >
                <h1
                  className="text-5xl font-bold text-T2 
              n6:text-4xl
              n7:text-3xl
              "
                >
                  404 NOT FOUND
                </h1>
              </div>
            )}
            {Motion(0.6, 0.7,
              <div
              >
                <p className="m-auto text-T1 text-3xl">Retorne para o site:</p>
              </div>
            )}

            {Motion(0.6, 0.8,
              <div
                className="text-3xl text-T2 m-auto text-center grid gap-4"
              >
                {Motion(0.6, 0.9,
                  <div
                    className="rounded-sm hover:text-T1 setinha hover:after:right-2 grid items-center"

                  >
                    <Link to="/">Home</Link>
                  </div>
                )}

                {Motion(0.6, 1.0,
                  <div
                    className="rounded-sm hover:text-T1 setinha hover:after:right-[-9px] grid items-center"

                  >
                    <Link to="/projetos">Projetos</Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};



