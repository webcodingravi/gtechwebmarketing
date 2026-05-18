import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { workData } from "../../data/workData";

function WorkCard({ project, index }) {
    const ref=useRef(null);

    const { scrollYProgress }=useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale=useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const y=useTransform(scrollYProgress, [0, 1], [80, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, y }}
            className="sticky top-24  z-10"
        >
            <Link to={`/work/${project.slug}`}>
                <div className="relative h-[75vh] w-full overflow-hidden rounded-[28px] bg-black ">

                    {/* IMAGE */}
                    <img
                        src={project.heroImage}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-700"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                    {/* RED GLOW EFFECT */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.18),transparent_35%)]" />

                    {/* TOP BADGE */}
                    <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 text-xs tracking-[0.3em] uppercase bg-black backdrop-blur-xl border border-white/10 rounded-full text-white/50">
                            {project.category}
                        </span>
                    </div>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                        <div className="max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">

                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                {project.title}
                            </h2>

                            <p className="mt-4 text-white/70 text-sm md:text-lg leading-7">
                                {project.intro}
                            </p>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
                                View Project →
                            </div>

                        </div>
                    </div>

                    {/* NUMBER */}
                    <div className="absolute top-6 right-6">
                        <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white font-semibold">
                            {index+1}
                        </div>
                    </div>

                </div>
            </Link>
        </motion.div>
    );
}

export default function WorkSection() {
    return (
        <section className="bg-[#0c0c0e] py-10">

            {/* TITLE */}
            <div className="text-center px-6">
                <h1 className="text-6xl md:text-8xl font-black text-white/10 tracking-[-3px]">
                    WORK
                </h1>

                <p className="mt-6 text-white/50 max-w-xl mx-auto">
                    Selected projects crafted with performance, design and growth in mind.
                </p>
            </div>

            {/* STACK */}
            <div className="md:px-40 px-6">
                {workData.slice(0, 4).map((project, index) => (
                    <WorkCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>



        </section>
    );
}