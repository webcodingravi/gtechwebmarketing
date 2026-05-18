import React from 'react'
import { motion } from "framer-motion";




const AnimatedTextSection=() => {
    return (
        <>

            <section className="relative bg-black py-32 overflow-hidden">

                {/* Background Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[900px] h-[900px] bg-purple-500/10 blur-[180px] rounded-full"></div>
                </div>

                <div className="relative z-10">

                    {/* Infinite Moving Text */}
                    <div className="overflow-hidden whitespace-nowrap">

                        <motion.div
                            animate={{
                                x: ["0%", "-100%"],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            }}
                            className="flex"
                        >

                            {/* Duplicate Text for Infinite Loop */}
                            {[...Array(2)].map((_, i) => (
                                <div
                                    key={i}
                                    className="
                  flex
                  items-center
                  gap-16
                  pr-16
                  shrink-0
                "
                                >
                                    <h1 className="
    text-4xl
    md:text-[120px]
  
    font-bold
    tracking-tight
    leading-[1.05]
    text-white
">
                                        Empowering The Future
                                    </h1>
                                    {/* <h1 className="
    text-4xl
    md:text-6xl
    xl:text-7xl
    font-bold
    tracking-tight
    leading-[1.05]
    pb-4
    bg-gradient-to-r
    from-purple-400
    via-pink-500
    to-purple-400
    bg-clip-text
    text-transparent
">
                                        Digital Experiences
                                    </h1> */}
                                </div>
                            ))}

                        </motion.div>

                    </div>



                </div>
            </section>
        </>
    )
}

export default AnimatedTextSection