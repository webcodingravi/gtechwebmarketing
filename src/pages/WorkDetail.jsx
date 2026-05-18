import React from "react";
import { Link, useParams } from "react-router-dom";
import { workData } from "../data/workData";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";

const WorkDetail=() => {
    const { slug }=useParams();

    const project=workData.find((item) => item.slug===slug);

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center text-xl text-slate-500">
                Project Not Found
            </div>
        );
    }

    return (
        <div className="bg-[#0b0c0f] text-white">

            {/* HERO */}
            <section className="relative h-[85vh] overflow-hidden">

                <motion.img
                    src={project.heroImage}
                    className="absolute inset-0 w-full h-full object-cover scale-110"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">

                    <div className="max-w-4xl">

                        <p className="uppercase tracking-[0.35em] text-sm text-white/60 mb-5">
                            {project.category}
                        </p>

                        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                            {project.title}
                        </h1>

                        <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
                            {project.intro}
                        </p>

                    </div>

                </div>

            </section>

            {/* OVERVIEW */}
            <section className="py-28">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <p className=" text-purple-400 text-[28px] mb-6 capitalize">
                        Overview
                    </p>

                    <p className="text-sm md:text-xl text-white/70 leading-9 font-light">
                        {project.description}
                    </p>

                </div>
            </section>

            {/* CHALLENGE / SOLUTION / RESULTS */}
            <section className="py-28 bg-[#0f1115]">
                <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">

                    {/* Challenge */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="p-8 rounded-3xl border border-white/10 bg-white/5"
                    >
                        <AlertTriangle className="text-red-400 mb-5" />
                        <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                        <p className="text-white/60 leading-7">{project.challenge}</p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="p-8 rounded-3xl border border-white/10 bg-white/5"
                    >
                        <Lightbulb className="text-yellow-400 mb-5" />
                        <h3 className="text-xl font-semibold mb-4">Solution</h3>
                        <p className="text-white/60 leading-7">{project.solution}</p>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        className="p-8 rounded-3xl border border-white/10 bg-white/5"
                    >
                        <TrendingUp className="text-green-400 mb-5" />
                        <h3 className="text-xl font-semibold mb-4">Results</h3>
                        <p className="text-white/60 leading-7">{project.results}</p>
                    </motion.div>

                </div>
            </section>

            {/* MAIN IMAGE */}
            <section className="py-28">
                <div className="max-w-6xl mx-auto px-6">

                    <motion.img
                        src={project.heroImage}
                        className="w-full h-[650px] object-cover rounded-3xl"
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />

                </div>
            </section>

            {/* GALLERY */}
            {/* <section className="pb-28">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

                    {project.gallery.map((img, i) => (
                        <motion.img
                            key={i}
                            src={img}
                            className="w-full h-[380px] object-cover rounded-2xl"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i*0.1 }}
                        />
                    ))}

                </div>
            </section> */}

            {/* CTA */}
            <section className="py-28 text-center bg-[#0f1115]">

                <h2 className="text-4xl md:text-5xl font-semibold">
                    Want something like this?
                </h2>

                <p className="text-white/60 mt-6 max-w-xl mx-auto">
                    We design and build modern digital experiences that convert and scale.
                </p>

                <Link
                    to="/contact"
                    className="mt-10 inline-block px-10 py-4 rounded-full bg-white text-black font-medium hover:bg-purple-500 hover:text-white transition"
                >
                    Start a Project
                </Link>

            </section>

        </div>
    );
};

export default WorkDetail;