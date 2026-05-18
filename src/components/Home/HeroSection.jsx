import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const texts=[
    "Consumers",
    "Technology",

    "Experiences",

    "Conversations",

    "Insights"

];

const HeroSection=() => {

    const [index, setIndex]=useState(0);

    useEffect(() => {
        const interval=setInterval(() => {
            setIndex((prev) => (prev+1)%texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <section className="relative h-screen overflow-hidden">

                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source
                        src="https://framerusercontent.com/assets/7YBK8amA6z135CX8nogC5hVIKA.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full px-6 text-center text-white">
                    <div>

                        {/* Main Heading Animation */}
                        <motion.h1
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-[140px] font-extrabold leading-tight uppercase"
                        >
                            Connecting
                        </motion.h1>

                        {/* Changing Animated Text */}
                        <div className="h-[150px] mt-4 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={texts[index]}
                                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -60, scale: 0.9 }}
                                    transition={{ duration: 0.7 }}
                                    className="text-2xl md:text-[80px] font-semibold text-purple-400"
                                >
                                    {texts[index]}
                                </motion.h2>
                            </AnimatePresence>
                        </div>


                    </div>
                </div>
            </section>



        </>
    )
}

export default HeroSection