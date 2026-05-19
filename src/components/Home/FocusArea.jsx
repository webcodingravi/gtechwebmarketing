import React from "react";
import { motion } from "framer-motion";

const focusAreas=[
    {
        number: "01",
        title: "Insightful Integrations & Data-Driven Application Ecosystem",
        description:
            "We develop CRM, web, and mobile applications, seamlessly integrating real-time data insights with advanced API connectivity and interoperability.",
    },
    {
        number: "02",
        title: "Automated Marketing with AI & Consumer Engagement",
        description:
            "We use AI to automate marketing, personalize interactions, and improve conversions through smart workflows and real-time insights.",
    },
    {
        number: "03",
        title: "Omnichannel Consumer Engagement & Operations",
        description:
            "We manage end-to-end customer journeys across platforms, including promotions, payments, and support systems.",
    },
    {
        number: "04",
        title: "Scalable Digital Growth Systems",
        description:
            "We build scalable systems designed for performance, automation, and long-term digital growth.",
    },
];

const FocusArea=() => {
    return (
        <section className="relative bg-[#0b0c0f] text-white py-28 px-6 md:px-16 overflow-hidden">

            {/* glow background */}
            <div className="absolute top-[-200px] left-[-120px] h-[420px] w-[420px] bg-purple-600/10 blur-[140px] rounded-full" />
            <div className="absolute bottom-[200px] right-[-120px] h-[450px] w-[450px] bg-pink-600/10 blur-[160px] rounded-full" />

            {/* heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center mb-20"
            >


                <p className="text-2xl font-semibold text-purple-400 tracking-wide md:text-5xl">
                    Our Focus Areas
                </p>



                <p className="mt-2 text-gray-400 text-lg md:text-md max-w-2xl mx-auto">
                    We combine strategy, technology and automation to build scalable digital ecosystems that drive real business outcomes.
                </p>
            </motion.div>

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16 lg:px-32">

                {focusAreas.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: index*0.1,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden"
                    >

                        {/* hover glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />

                        {/* number */}
                        <div className="relative z-10 text-5xl font-bold text-white/10 mb-6 group-hover:text-white/20 transition">
                            {item.number}
                        </div>

                        {/* title */}
                        <h3 className="relative z-10 text-2xl md:text-3xl font-semibold leading-snug group-hover:text-purple-300 transition">
                            {item.title}
                        </h3>

                        {/* description */}
                        <p className="relative z-10 mt-4 text-gray-400 leading-relaxed">
                            {item.description}
                        </p>

                        {/* bottom line animation */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-500 group-hover:w-full transition-all duration-500" />

                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default FocusArea;