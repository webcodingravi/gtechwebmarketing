import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { workData } from "../data/workData";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";



const WorkDetail=() => {
    const { slug }=useParams();

    const project=workData.find((item) => item.slug===slug);

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center text-2xl">
                Project Not Found
            </div>
        );
    }

    return (
        <div className="bg-white text-slate-950">

            {/* HERO */}
            <section className="relative h-[600px] overflow-hidden">

                <motion.img
                    src={project.heroImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover scale-110"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                />

                <div className="absolute inset-0 bg-black/60" />

                {/* CENTER CONTENT */}
                <div className="absolute inset-0 flex items-center justify-center text-center">

                    <div className="max-w-4xl px-6">

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white/70 uppercase tracking-[0.35em] text-sm mb-4"
                        >
                            {project.category}
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold"
                        >
                            {project.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-white/80 max-w-2xl mx-auto mt-6 text-lg"
                        >
                            {project.description}
                        </motion.p>

                    </div>

                </div>

            </section>

            {/* INTRO */}
            <section className="py-28">
                <div className="md:px-52 px-6 grid md:grid-cols-2 gap-16">

                    {/* <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                            Overview
                        </p>

                        <h2 className="text-4xl font-semibold mt-6 leading-tight">
                            {project.intro}
                        </h2>
                    </div> */}

                    <div className="text-slate-600 text-lg leading-8">
                        <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-4">
                            Overview
                        </p>
                        {project.description}
                    </div>

                </div>
            </section>

            {/* CHALLENGE / SOLUTION */}
            <section className="py-28 bg-slate-50">
                <div className="md:px-52 px-6 space-y-12">

                    {/* Challenge */}
                    <div className="group flex gap-5 p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
                            <AlertTriangle size={22} />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-slate-900">
                                Challenge
                            </h3>
                            <p className="text-slate-600 mt-3 leading-7">
                                {project.challenge}
                            </p>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="group flex gap-5 p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 text-yellow-600">
                            <Lightbulb size={22} />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-slate-900">
                                Solution
                            </h3>
                            <p className="text-slate-600 mt-3 leading-7">
                                {project.solution}
                            </p>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="group flex gap-5 p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
                            <TrendingUp size={22} />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-slate-900">
                                Results
                            </h3>
                            <p className="text-slate-600 mt-3 leading-7">
                                {project.results}
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* MAIN IMAGE */}
            <section className="py-28">
                <div className="md:px-52 px-6">

                    <motion.img
                        src={project.heroImage}
                        className="w-full h-[650px] object-cover rounded-[2rem]"
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />

                </div>
            </section>

            {/* GALLERY (animated) */}
            <section className="pb-28">
                <div className="md:px-52 px-6 grid md:grid-cols-2 gap-8">

                    {project.gallery.map((img, index) => (
                        <motion.img
                            key={index}
                            src={img}
                            className="w-full h-[400px] object-cover rounded-2xl"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index*0.2 }}
                        />
                    ))}

                </div>
            </section>

            {/* CTA */}
            <section className="py-28 text-center bg-white">

                <h2 className="text-4xl md:text-5xl font-semibold">
                    Want something like this?
                </h2>

                <p className="text-slate-600 mt-6 max-w-xl mx-auto">
                    We build high performance digital experiences that convert and scale.
                </p>

                <Link
                    to="/contact"
                    className="mt-10 inline-block bg-slate-950 text-white px-10 py-4 rounded-full hover:bg-rose-600 transition"
                >
                    Start a Project
                </Link>

            </section>

        </div>
        // <div className="min-h-screen bg-slate-100 text-slate-950">
        //     <section className="overflow-hidden bg-slate-100 pb-20 pt-16">
        //         <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        //             <div className="lg:w-5/12">
        //                 <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{project.category}</p>
        //                 <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
        //                     {project.title}
        //                 </h1>
        //                 <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-500">{project.partner}</p>
        //                 <p className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
        //                     A spark for India’s future in sport, powered through digital storytelling, campaign design, and an immersive responsive experience.
        //                 </p>
        //             </div>

        //             <div className="lg:w-7/12">
        //                 <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_120px_-45px_rgba(15,23,42,0.25)]">
        //                     <img
        //                         src={project.heroImage}
        //                         alt={project.title}
        //                         className="h-full w-full object-cover"
        //                     />
        //                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        //                     <div className="absolute left-6 bottom-6 rounded-3xl border border-white/20 bg-white/90 p-5 shadow-lg shadow-slate-950/10 backdrop-blur-sm">
        //                         <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Campaign Landing Page</p>
        //                         <h2 className="mt-3 text-lg font-semibold text-slate-950">A Spark for India’s Future in Sport.</h2>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>

        //     <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        //         <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-start">
        //             <div>
        //                 <p className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        //                     How {project.title.split(' ')[0]} is powering the dreams of India’s future women athletes.
        //                 </p>
        //                 <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
        //                     {project.caseStudyText}
        //                 </p>
        //                 <div className="mt-10 space-y-8 rounded-[2rem] bg-white p-10 shadow-sm shadow-slate-900/5 ring-1 ring-slate-200">
        //                     <div className="grid gap-6 sm:grid-cols-2">
        //                         <div>
        //                             <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Campaign duration</p>
        //                             <p className="mt-3 text-lg font-semibold text-slate-950">6 months</p>
        //                         </div>
        //                         <div>
        //                             <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Target audience</p>
        //                             <p className="mt-3 text-lg font-semibold text-slate-950">Young women athletes</p>
        //                         </div>
        //                         <div>
        //                             <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Web page link</p>
        //                             <p className="mt-3 text-lg font-semibold text-slate-950">her-spark.britannia.in</p>
        //                         </div>
        //                         <div>
        //                             <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Creative focus</p>
        //                             <p className="mt-3 text-lg font-semibold text-slate-950">Sports, storytelling, engagement</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="grid gap-5">
        //                 {project.stats.map((stat) => (
        //                     <div key={stat.label} className="rounded-[2rem] bg-white p-7 shadow-sm shadow-slate-900/5 ring-1 ring-slate-200">
        //                         <p className="text-5xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
        //                         <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500">{stat.label}</p>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </section>

        //     <section className="bg-red-600 py-10">
        //         <div className="mx-auto max-w-7xl px-6 text-center text-white lg:px-8">
        //             <p className="text-xs uppercase tracking-[0.45em] text-red-100/90">Deliverables</p>
        //             <p className="mt-4 max-w-2xl mx-auto text-2xl font-semibold sm:text-3xl">Landing page design, campaign microsite, responsive website.</p>
        //         </div>
        //     </section>

        //     <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        //         <div className="grid gap-12">
        //             <div className="grid gap-10 lg:grid-cols-[.95fr_.8fr] lg:items-center">
        //                 <div className="rounded-[2rem] bg-slate-950 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)] lg:p-8">
        //                     <img
        //                         src={project.images.project}
        //                         alt="Project showcase"
        //                         className="w-full rounded-[1.75rem] object-cover"
        //                     />
        //                 </div>
        //                 <div className="space-y-6">
        //                     <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Britannia Marie Gold HerSpark, in proud collaboration with Paralympic Gold Medalist shooter, Avani Lekhara.</p>
        //                     <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
        //                         <p className="text-lg font-semibold text-slate-950">From dream to application. A journey made simple.</p>
        //                         <div className="mt-6 grid gap-4 sm:grid-cols-2">
        //                             <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
        //                                 <p className="text-sm font-semibold text-slate-950">Real-time form validation</p>
        //                             </div>
        //                             <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
        //                                 <p className="text-sm font-semibold text-slate-950">2x language integration</p>
        //                             </div>
        //                             <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
        //                                 <p className="text-sm font-semibold text-slate-950">Progressive in-app onboarding</p>
        //                             </div>
        //                             <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
        //                                 <p className="text-sm font-semibold text-slate-950">Mobile-first discovery interface</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="grid gap-8 md:grid-cols-2">
        //                 <div className="rounded-[2rem] bg-white p-6 shadow-sm shadow-slate-900/5 ring-1 ring-slate-200">
        //                     <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Website page design</p>
        //                     <img
        //                         src={project.images.project}
        //                         alt="Website page design"
        //                         className="mt-6 w-full rounded-[1.5rem] object-cover"
        //                     />
        //                 </div>
        //                 <div className="rounded-[2rem] bg-slate-950 p-6 shadow-sm shadow-slate-900/10">
        //                     <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Registration form design</p>
        //                     <img
        //                         src={project.images.form}
        //                         alt="Registration form design"
        //                         className="mt-6 w-full rounded-[1.5rem] object-cover"
        //                     />
        //                 </div>
        //             </div>

        //             <div className="space-y-6">
        //                 <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Responsive versions</p>
        //                 <div className="grid gap-6 lg:grid-cols-2">
        //                     <img src={project.images.devices} alt="Tablet view" className="w-full rounded-[1.75rem] object-cover shadow-sm shadow-slate-900/5" />
        //                     <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-sm shadow-slate-900/20">
        //                         <p className="mb-4 text-xl font-semibold">Responsive versions</p>
        //                         <div className="grid gap-4 rounded-3xl bg-slate-950 p-5">
        //                             <p className="text-sm text-slate-400">Tablet and mobile layouts designed for fast performance and easy consumption.</p>
        //                             <div className="rounded-3xl bg-slate-800 p-4 text-sm">Tablet view</div>
        //                             <div className="rounded-3xl bg-slate-800 p-4 text-sm">Mobile view</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>

        //     <section className="bg-slate-100 py-16">
        //         <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        //             <p className="max-w-2xl text-xl font-semibold leading-tight text-slate-950">
        //                 {project.closingText}
        //             </p>
        //         </div>
        //     </section>

        //     <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        //         <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.75)] lg:p-12">
        //             <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        //                 <div>
        //                     <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Next Project</p>
        //                     <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        //                         {otherProject?.title||project.nextProject.title}
        //                     </h2>
        //                 </div>
        //                 <Link
        //                     to={`/work/${project.nextProject.slug}`}
        //                     className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15"
        //                 >
        //                     View Project
        //                 </Link>
        //             </div>
        //         </div>
        //     </section>
        // </div>
    )
}

export default WorkDetail