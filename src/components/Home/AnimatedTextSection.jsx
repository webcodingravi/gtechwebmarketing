import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

export default function InfiniteAnimatedText() {
  const ref=useRef(null);

  // mouse values
  const mouseX=useMotionValue(0);
  const mouseY=useMotionValue(0);

  const springX=useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY=useSpring(mouseY, { stiffness: 80, damping: 20 });

  // tilt effect
  const rotateX=useTransform(springY, [-300, 300], [20, -20]);
  const rotateY=useTransform(springX, [-300, 300], [-20, 20]);

  // subtle infinite floating animation
  const yFloat=useMotionValue(0);

  animate(yFloat, [0, -20, 0], {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  });

  const handleMouseMove=(e) => {
    const rect=ref.current.getBoundingClientRect();

    const x=e.clientX-rect.left-rect.width/2;
    const y=e.clientY-rect.top-rect.height/2;

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="h-screen flex items-center justify-center bg-[#0b0c0f] overflow-hidden relative">


      {/* glow background */}
      <div className="absolute top-[200px] left-[-120px] h-[420px] w-[420px] bg-purple-600/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-[200px] right-[-120px] h-[450px] w-[450px] bg-pink-600/10 blur-[160px] rounded-full" />

      <motion.h1
        ref={ref}
        onMouseMove={handleMouseMove}
        style={{
          rotateX,
          rotateY,
          y: yFloat,
        }}
        className="
                    text-center
                    text-5xl
                    md:text-8xl
                    font-semibold
                    leading-[1]
                    tracking-tight
                    text-white
                    cursor-pointer
                    perspective-[1200px]
                "
      >

        <span className="block opacity-90">
          Empowering
        </span>

        <motion.span
          className="block text-purple-400"
          animate={{
            letterSpacing: ["0em", "0.05em", "0em"],
            scale: [1, 1.03, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Future Ready Digital Solutions
        </motion.span>

      </motion.h1>



    </section>
  );
}