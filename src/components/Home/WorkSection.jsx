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
            className="sticky top-24 mb-24 z-10"
        >
            <Link to={`/work/${project.slug}`}>

                {/* IMPORTANT: FULL BACKGROUND WRAP */}
                <div className="relative h-[75vh] w-full overflow-hidden rounded-2xl bg-black">

                    {/* IMAGE */}
                    <img
                        src={project.heroImage}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover scale-105"
                    />

                    {/* DARK OVERLAY (SOLID) */}
                    <div className="absolute inset-0 bg-black/70" />

                    {/* TEXT */}
                    <div className="absolute bottom-12 left-10 z-20 text-white max-w-xl bg-black/50 p-6 rounded-lg">
                        <p className="text-sm uppercase tracking-widest opacity-70">
                            {project.category}
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold mt-3">
                            {project.title}
                        </h2>

                        <p className="mt-4 text-white/60 font-light leading-relaxed text-xl">
                            {project.intro}
                        </p>
                    </div>

                </div>

            </Link>
        </motion.div>
    );
}

export default function WorkSection() {
    return (
        <section className="bg-black py-32">

            {/* TITLE */}
            <div className="text-center px-6">
                <h1 className="text-6xl md:text-8xl font-bold text-white/10">
                    WORK
                </h1>
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