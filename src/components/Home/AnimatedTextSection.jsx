import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Future",
  "Innovation",
  "Technology",
  "Experiences",
];

const AnimatedTextSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black py-40 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[900px] bg-purple-500/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex justify-center items-center">

        <h1
          className="
            text-5xl
            md:text-[96px]
            font-semibold
            tracking-tight
            leading-none
            flex
            items-center
            gap-6
            text-white
          "
        >

          {/* Empowering */}
          <motion.span
            initial={{
              opacity: 0,
              y: 40,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            Empowering
          </motion.span>

          {/* Changing Word */}
          <span className="relative h-[110px] min-w-[520px] overflow-hidden text-purple-400">

            <AnimatePresence mode="wait">

              <motion.span
                key={words[index]}
                initial={{
                  opacity: 0,
                  y: 60,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -60,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 top-0"
              >
                {words[index]}
              </motion.span>

            </AnimatePresence>

          </span>

        </h1>

      </div>
    </section>
  );
};

export default AnimatedTextSection;