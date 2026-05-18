import React from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    Phone,
    MapPin,
    MapPinHouse,
} from "lucide-react";

export default function Contact() {
    return (
        <div className="relative overflow-hidden bg-[#f5f5f5] text-black">

            {/* BACKGROUND TEXT */}
            <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
                <h1 className="mt-20 text-[90px] md:text-[220px] font-black tracking-tight text-black/[0.03] whitespace-nowrap">
                    CONTACT
                </h1>
            </div>

            {/* HERO SECTION */}
            <section className="relative z-10 px-5 md:px-16 lg:px-28 xl:px-40 pt-32 md:pt-40 pb-20">

                <div className="grid lg:grid-cols-2 gap-14 items-start">

                    {/* LEFT CONTENT */}
                    <div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >

                            <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
                                Contact us
                            </p>
                            <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-[0.95]">
                                Digital growth
                                <span className="block text-red-600">
                                    starts here.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base md:text-lg leading-8 text-slate-600">
                                At G Tech Web Marketing, we craft high-performing
                                websites, SEO strategies, and digital campaigns
                                designed to increase visibility, engagement,
                                and long-term business growth.
                            </p>

                        </motion.div>

                        {/* CONTACT INFO */}
                        <div className="mt-12 space-y-5">

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-slate-200">
                                    <Mail size={18} />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Email
                                    </p>

                                    <p className="font-medium">
                                        info@gtechwebmarketing.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-slate-200">
                                    <Phone size={18} />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Phone
                                    </p>

                                    <p className="font-medium">
                                        +91-9810699052
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-slate-200">
                                    <MapPinHouse size={18} />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Address
                                    </p>

                                    <p className="font-medium">
                                        A - 19A, 3rd Floor, Mayapuri Industrial Area, Phase - II, New Delhi 110064, INDIA
                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>

                    {/* FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="rounded-[30px] border border-white/50 bg-white/80 backdrop-blur-xl p-6 md:p-10 shadow-[0_10px_60px_rgba(0,0,0,0.08)]"
                    >

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                                    Start Project
                                </p>

                                <h2 className="mt-2 text-3xl font-bold">
                                    Tell us about your idea
                                </h2>
                            </div>


                        </div>

                        <form className="mt-10 space-y-8">

                            {/* NAME */}
                            <div className="grid md:grid-cols-2 gap-6">

                                <div>
                                    <label className="text-sm text-slate-500">
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="mt-3 w-full border-b border-slate-300 bg-transparent pb-3 outline-none transition focus:border-black"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-slate-500">
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="mt-3 w-full border-b border-slate-300 bg-transparent pb-3 outline-none transition focus:border-black"
                                    />
                                </div>

                            </div>

                            {/* EMAIL */}
                            <div>
                                <label className="text-sm text-slate-500">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="mt-3 w-full border-b border-slate-300 bg-transparent pb-3 outline-none transition focus:border-black"
                                />
                            </div>

                            {/* COMPANY */}
                            <div>
                                <label className="text-sm text-slate-500">
                                    Company
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your company"
                                    className="mt-3 w-full border-b border-slate-300 bg-transparent pb-3 outline-none transition focus:border-black"
                                />
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <label className="text-sm text-slate-500">
                                    Project Details
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    className="mt-3 w-full resize-none border-b border-slate-300 bg-transparent pb-3 outline-none transition focus:border-black"
                                />
                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="group flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:scale-[1.02]"
                            >
                                Send Message

                                <span className="transition group-hover:translate-x-1">
                                    <ArrowUpRight size={18} />
                                </span>
                            </button>

                        </form>

                    </motion.div>

                </div>

            </section>

            {/* LOCATIONS */}
            {/* <section className="relative z-10 px-5 md:px-16 lg:px-28 xl:px-40 pb-24">

                <div className="grid md:grid-cols-3 gap-6">


                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1">

                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                            <MapPin size={20} />
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold">
                            Bangalore
                        </h3>

                        <p className="mt-4 text-slate-600 leading-7">
                            Indiranagar, Bangalore,
                            Karnataka, India
                        </p>

                    </div>


                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1">

                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                            <MapPin size={20} />
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold">
                            Cochin
                        </h3>

                        <p className="mt-4 text-slate-600 leading-7">
                            Kakkanad, Kochi,
                            Kerala, India
                        </p>

                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1">

                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                            <Mail size={20} />
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold">
                            Support
                        </h3>

                        <p className="mt-4 text-slate-600 leading-7">
                            connect@hashconnect.in
                            <br />
                            careers@hashconnect.in
                        </p>

                    </div>

                </div>

            </section> */}

        </div>
    );
}