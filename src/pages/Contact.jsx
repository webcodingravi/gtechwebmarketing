import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#f2f2f2] text-black overflow-hidden">

            {/* BIG BACKGROUND TEXT */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <h1 className="text-[180px] md:text-[280px] font-black text-black/5 tracking-tight mt-24">
                    CONTACT
                </h1>
            </div>

            {/* TOP SECTION */}
            <section className="relative z-10 md:px-54 px-6 pt-40 pb-20 grid md:grid-cols-2 gap-16 items-start">

                {/* LEFT */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-semibold leading-[0.95]"
                    >
                        Let’s work
                        <span className="block text-red-600">together.</span>
                    </motion.h1>

                    <p className="mt-8 text-slate-600 text-lg leading-8 max-w-xl">
                        We help brands design digital experiences, platforms, and products that create real business impact. Let’s build something meaningful together.
                    </p>

                    <div className="mt-10 space-y-3 text-sm text-slate-600">
                        <p>connect@hashconnect.in</p>
                        <p>+91 80 49064400</p>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-sm">

                    <h2 className="text-2xl font-semibold mb-8">
                        Your needs, our solution
                    </h2>

                    <form className="space-y-6">

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                placeholder="First Name"
                                className="border-b border-slate-300 py-3 outline-none focus:border-black bg-transparent"
                            />
                            <input
                                placeholder="Last Name"
                                className="border-b border-slate-300 py-3 outline-none focus:border-black bg-transparent"
                            />
                        </div>

                        <input
                            placeholder="Email"
                            className="w-full border-b border-slate-300 py-3 outline-none focus:border-black bg-transparent"
                        />

                        <input
                            placeholder="Company"
                            className="w-full border-b border-slate-300 py-3 outline-none focus:border-black bg-transparent"
                        />

                        <input
                            placeholder="Project Link (optional)"
                            className="w-full border-b border-slate-300 py-3 outline-none focus:border-black bg-transparent"
                        />

                        <textarea
                            rows="4"
                            placeholder="Tell us about your project"
                            className="w-full border-b border-slate-300 py-3 outline-none focus:border-black bg-transparent"
                        />

                        <button
                            className="mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                        >
                            Submit
                        </button>

                    </form>
                </div>

            </section>

            {/* LOCATION SECTION */}
            <section className="relative z-10 border-t border-slate-200 py-20">
                <div className="md:px-54 px-6 grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-semibold">Bangalore</h3>
                        <p className="mt-4 text-sm text-slate-600 leading-6">
                            Indiranagar, Bangalore<br />
                            Karnataka, India
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-semibold">Cochin</h3>
                        <p className="mt-4 text-sm text-slate-600 leading-6">
                            Kakkanad, Kochi<br />
                            Kerala, India
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-xl font-semibold">Email</h3>
                        <p className="mt-4 text-sm text-slate-600">
                            connect@hashconnect.in
                        </p>
                        <p className="text-sm text-slate-600">
                            careers@hashconnect.in
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}