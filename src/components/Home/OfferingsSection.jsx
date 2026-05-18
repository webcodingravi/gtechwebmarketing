import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { offeringData } from "../../data/offeringsData";



const OfferingsSection=() => {
    return (
        <>
            <section className="relative bg-black py-36 overflow-hidden">

                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/10 blur-[180px] rounded-full"></div>

                <div className="relative z-10 md:px-54 mx-auto px-6 text-center">

                    {/* Heading */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 80,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <p className="uppercase tracking-[5px] text-purple-400 mb-5">
                            Our Offerings
                        </p>

                        <h2
                            className=" text-center
                                    text-5xl
                                    md:text-5xl
                                    font-bold
                                    text-white
                                    leading-[1.05]
                                    tracking-tight
                                 
                                    "
                        >
                            Intelligent Digital <span className=" text-purple-400">Solutions For Brands
                            </span>
                        </h2>
                    </motion.div>

                    {/* Offerings List */}
                    <div className="flex flex-col">
                        {offeringData.map((item, index) => (
                            <Link
                                key={index}
                                to={`/services/${item.slug}`}
                                className="block"
                            >
                                <motion.div

                                    initial={{
                                        opacity: 0,
                                        y: 80,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index*0.15,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        backgroundColor: "rgba(255,255,255,0.03)",
                                    }}
                                    className="
                                        group
                                        border-t
                                        border-white/10
                                        py-12
                                        cursor-pointer
                                        transition-all
                                        duration-500
                                    "
                                >

                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                                        {/* Number */}
                                        <div className="md:col-span-2">
                                            <p className="text-gray-500 text-lg font-medium">
                                                {item.number}
                                            </p>
                                        </div>

                                        {/* Title */}
                                        <div className="md:col-span-4">
                                            <h3
                                                className="
                                                text-3xl
                                                md:text-4xl
                                                font-semibold
                                                text-white
                                                transition-all
                                                duration-500
                                                group-hover:text-purple-400
                                                "
                                            >
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <div className="md:col-span-6">
                                            <p
                                                className="
                                                text-gray-400
                                                text-lg
                                                leading-relaxed
                                                "
                                            >
                                                {item.description}
                                            </p>
                                        </div>

                                    </div>

                                </motion.div>
                            </Link>
                        ))}

                        {/* Bottom Border */}
                        <div className="border-t border-white/10"></div>

                    </div>


                    {/* All Projects Button */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                        }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-20"
                    >
                        <Link
                            to="/work"
                            className="
                            group
                            relative
                            overflow-hidden
                            px-10
                            py-4
                            rounded-full
                            border
                            border-white/20
                            text-white
                            text-lg
                            font-medium
                            backdrop-blur-xl
                            transition-all
                            duration-500
                            hover:border-purple-500
                            "
                        >

                            {/* Hover Background */}
                            <span
                                className="
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-purple-500
                            to-pink-500
                            translate-y-full
                            group-hover:translate-y-0
                            transition-transform
                            duration-500"
                            ></span>

                            {/* Text */}
                            <span className="relative z-10 flex items-center gap-3">
                                All Projects

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="
                                        w-5
                                        h-5
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-1
                                        "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
                                    />
                                </svg>
                            </span>

                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default OfferingsSection