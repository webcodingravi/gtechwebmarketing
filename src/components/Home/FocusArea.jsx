import React from 'react'
import { motion } from "framer-motion";

const focusAreas=[
    {
        number: "01",
        title: "Insightful Integrations & Data-Driven Application Ecosystem",
        description:
            "We develop CRM, web, and mobile applications, seamlessly integrating real-time data insights with advanced API connectivity and interoperability. This agile, unified digital experience enriches every customer interaction, fostering seamless and meaningful engagement across platforms.uilding scalable digital ecosystems with modern technologies and future-ready architecture.",
    },
    {
        number: "02",
        title: "AI-Driven Marketing Automation & Consumer Engagement",
        description:
            "We harness the power of AI to automate marketing, personalize customer interactions, and boost engagement. Our offerings include smart chatbots, targeted campaigns, and real-time sentiment analysis to foster deeper customer connections and drive conversions.",
    },
    {
        number: "03",
        title: "Omnichannel Consumer Engagement & Operations",
        description:
            "We streamline consumer promotions, manage offer redemptions, and provide end-to-end support for BPO and call center operations. From payment services to comprehensive promotion management, we build seamless solutions to ensure an exceptional customer experience.",
    },

     {
        number: "04",
        title: "Omnichannel Consumer Engagement & Operations",
        description:
            "We streamline consumer promotions, manage offer redemptions, and provide end-to-end support for BPO and call center operations. From payment services to comprehensive promotion management, we build seamless solutions to ensure an exceptional customer experience.",
    }
];

const FocusArea=() => {

    return (
        <>
            <section className="bg-black text-white py-32 px-6 md:px-16 overflow-hidden">

                {/* Top Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto text-center"
                >

                    <h2 className="uppercase tracking-[4px] text-purple-400 mb-1 text-[30px] md:text-[40px] font-bold">
                        Our Focus Areas
                    </h2>

                    <p className="md:text-xl text-md text-gray-400 w-full max-w-3xl mx-auto">
                        We empower brands to transform customer experience through the strategic application of technology, data-driven insights, and AI.
                    </p>

                </motion.div>

                {/* Focus Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 md:px-38 mx-auto">
                    {focusAreas.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index*0.2,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -8,
                            }}
                            className="
              group
              relative
              p-10
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              overflow-hidden
            "
                        >

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>

                            {/* Number */}
                            <div className="relative z-10 text-6xl font-bold text-white/10 mb-8">
                                {item.number}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-3xl font-semibold mb-5">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-gray-400 leading-relaxed text-lg">
                                {item.description}
                            </p>

                        </motion.div>
                    ))}

                </div>
            </section>

        </>
    )
}

export default FocusArea