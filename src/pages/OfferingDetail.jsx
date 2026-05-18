import React from 'react'
import { offeringData } from "../data/offeringsData";
import { useParams } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OfferingDetail=() => {
    const { slug }=useParams();
    const service=offeringData.find((item) => item.slug===slug);

    if (!service) {
        return (
            <div className="flex h-screen items-center justify-center text-3xl font-semibold">
                Service Not Found
            </div>
        );
    }

    return (
        <>
            <div className="bg-white text-slate-950">
                {/* HERO */}
                <section className="relative h-[85vh] overflow-hidden">

                    {/* animated image */}
                    <motion.div
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1.12 }}
                        transition={{
                            duration: 14,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                    >
                        <img
                            src={service.heroImage}
                            alt={service.title}
                            className="h-full w-full object-cover object-center"
                        />
                    </motion.div>

                    {/* overlays */}
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                    {/* content */}
                    <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 lg:px-8">

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className="max-w-4xl"
                        >
                            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/70">
                                {service.category}
                            </p>

                            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                                {service.title}
                            </h1>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                                {service.description}
                            </p>
                        </motion.div>

                    </div>
                </section>

                {/* OVERVIEW */}
                <section className="border-b border-slate-200 py-24">
                    <div className="md:px-52 grid  gap-16 px-6 lg:grid-cols-2 ">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                                Overview
                            </p>

                            <h2 className="mt-6 text-4xl font-semibold leading-tight">
                                Creating connected customer experiences through strategy,
                                technology and design.
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg leading-9 text-slate-600">
                                {service.overview}
                            </p>
                        </div>
                    </div>
                </section>


                {/* OFFERINGS */}
                <section className="py-24">
                    <div className="md:px-52 px-6">

                        <div className="">
                            <div>
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 text-center">
                                    Our Offerings
                                </p>

                                <h2 className="mt-4 text-4xl font-semibold text-slate-950 text-center">
                                    Solutions we provide
                                </h2>
                            </div>
                        </div>

                        {/* offerings list */}
                        <div className="mt-20">

                            {service.offerings.map((item, index) => (
                                <div
                                    key={index}
                                    className="border-t border-slate-200 py-16"
                                >
                                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

                                        {/* LEFT */}
                                        <div className="lg:col-span-4">

                                            <p className="text-sm text-slate-400">
                                                0{index+1}
                                            </p>

                                            <h3 className="mt-5 text-3xl font-semibold leading-tight text-slate-950">
                                                {item.title}
                                            </h3>

                                        </div>

                                        {/* RIGHT */}
                                        <div className="lg:col-span-8">

                                            <p className="text-lg leading-9 text-slate-600">
                                                {item.description}
                                            </p>

                                            {/* features */}
                                            <div className="mt-10 space-y-5">

                                                {item.features.map((feature, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center justify-between border-b border-slate-200 pb-5"
                                                    >

                                                        <p className="text-base text-slate-700">
                                                            {feature}
                                                        </p>

                                                        <ArrowRight
                                                            size={18}
                                                            className="text-slate-400"
                                                        />

                                                    </div>
                                                ))}

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>


                <section className="border-t border-slate-200 py-24">
                    <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
                        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                            Let’s Build Together
                        </p>

                        <h2 className="mt-6 text-5xl font-semibold leading-tight">
                            Ready to transform your customer experience?
                        </h2>

                        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                            We help brands create immersive digital journeys that engage,
                            inspire and convert audiences across every touchpoint.
                        </p>

                        <Link
                            to="/contact"
                            className="mt-10 inline-block rounded-full bg-slate-950 px-8 py-4 text-sm font-medium text-white transition hover:bg-rose-600"
                        >
                            Start a Project
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OfferingDetail