import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { workData } from "../data/workData";


const container={
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariant={
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
};


const Work=() => {
    return (
        <div className="bg-[#f2f2f2] min-h-screen px-6 py-24">

            {/* Heading */}
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold text-black">
                    Work
                </h1>
                <p className="text-gray-600 mt-4 text-center">
                    Selected projects showcasing digital experiences.
                </p>
            </div>

            {/* Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-46"
            >
                {workData.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={itemVariant}
                        className="relative group overflow-hidden rounded-2xl cursor-pointer"
                    >

                        {/* Image */}
                        <div className="h-[420px] w-full overflow-hidden">
                            <img
                                src={item.thumbnail||item.heroImage}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

                        {/* Text */}
                        <div className="absolute bottom-0 p-6 text-white">
                            <p className="text-xs uppercase tracking-widest opacity-70">
                                {item.category}
                            </p>
                            <h2 className="text-xl md:text-2xl font-semibold mt-2 leading-snug">
                                {item.title}
                            </h2>
                        </div>

                        {/* CTA (FIXED MOBILE ISSUE) */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
                            <Link
                                to={`/work/${item.slug}`}
                                className="rounded-full border border-white bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
                            >
                                View Project
                            </Link>
                        </div>

                    </motion.div>
                ))}
            </motion.div>
        </div>

        // <div className="bg-[#f2f2f2] min-h-screen px-6 py-24">
        //     {/* Heading */}
        //     <div className="max-w-7xl mx-auto mb-16">
        //         <h1 className="text-5xl md:text-6xl font-bold text-black">
        //             Work
        //         </h1>
        //         <p className="text-gray-600 mt-4 max-w-xl">
        //             Selected projects showcasing digital experiences.
        //         </p>
        //     </div>

        //     {/* Grid */}
        //     <motion.div
        //         variants={container}
        //         initial="hidden"
        //         whileInView="show"
        //         viewport={{ once: true }}
        //         className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        //     >
        //         {workItems.map((item) => (
        //             <motion.div
        //                 key={item.id}
        //                 variants={item}
        //                 className="relative group overflow-hidden rounded-xl cursor-pointer"
        //             >
        //                 {/* Image */}
        //                 <div className="h-[420px] w-full overflow-hidden">
        //                     <img
        //                         src={item.image}
        //                         alt={item.title}
        //                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        //                     />
        //                 </div>

        //                 {/* Dark overlay */}
        //                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

        //                 {/* Text */}
        //                 <div className="absolute bottom-0 p-6 text-white">
        //                     <p className="text-xs uppercase tracking-widest opacity-70">
        //                         {item.category}
        //                     </p>
        //                     <h2 className="text-xl md:text-2xl font-semibold mt-2 leading-snug">
        //                         {item.title}
        //                     </h2>
        //                 </div>

        //                 {/* Hover CTA */}
        //                 <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
        //                     <Link
        //                         to={`/work/${item.slug}`}
        //                         className="rounded-full border border-white bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
        //                     >
        //                         View Project
        //                     </Link>
        //                 </div>
        //             </motion.div>
        //         ))}
        //     </motion.div>
        // </div>
    );
};

export default Work;