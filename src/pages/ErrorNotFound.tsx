import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ErrorNotFound = () => {
  return (
    <motion.div
      id="vid"
      className="mt-10 flex justify-center items-center flex-wrap
      n2:mt-10
      n3:mt-10
      n4:mt-8
      n5:mt-8
      n6:mt-6
      n7:mt-6
      "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1
              className="text-5xl font-bold text-T2 
              n6:text-4xl
              n7:text-3xl
              "
            >
              404 NOT FOUND
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <p className="m-auto text-T1 text-3xl">Retorne para o site:</p>
          </motion.div>

          <motion.div
            className="text-3xl text-T2 m-auto text-center grid gap-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.div
              className="rounded-sm hover:text-T1 setinha hover:after:right-2 grid items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Link to="/">Home</Link>
            </motion.div>

            <motion.div
              className="rounded-sm hover:text-T1 setinha hover:after:right-[-9px] grid items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Link to="/portfolio">Portfólio</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.6,
    delay: 0.6,
    ease: [0, 0.71, 0.2, 1.01],
  }}
></motion.div>;