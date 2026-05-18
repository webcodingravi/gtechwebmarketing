import React from "react";
import { LinkIcon } from "lucide-react";

const logos=[
    "Enphase",
    "Lenovo",
    "Acer",
    "Hungama",
    "ASUS",
    "Times of India",
    "Tata",
    "Pedigree",
];

const leaders=[
    { name: "Arun Roy", role: "Co-Founder", image: "https://framerusercontent.com/images/2XSAJ7I9yuwPMmurVHgdO9vVHc.webp" },
    { name: "Vinod Kumar", role: "Co-Founder", image: "https://framerusercontent.com/images/pXCRR9wHRZ6fMkYZSiPy3bFLvdY.webp" },
    { name: "Rishi Raj Mishra", role: "Chief Business Officer", image: "https://framerusercontent.com/images/2XSAJ7I9yuwPMmurVHgdO9vVHc.webp" },
    { name: "Amar T Sannalk", role: "Director - Technical", image: "https://framerusercontent.com/images/pXCRR9wHRZ6fMkYZSiPy3bFLvdY.webp" },
    { name: "Amrit Raj Mishra", role: "Head - Product Design", image: "https://framerusercontent.com/images/2XSAJ7I9yuwPMmurVHgdO9vVHc.webp" },
    { name: "Parthiban Rajendran", role: "Product Manager / UX Lead", image: "https://framerusercontent.com/images/pXCRR9wHRZ6fMkYZSiPy3bFLvdY.webp" },
    { name: "Bindhu Krishnen", role: "Head - BPO Services", image: "https://framerusercontent.com/images/2XSAJ7I9yuwPMmurVHgdO9vVHc.webp" },
    { name: "Ramesh Kumar", role: "Head - Finance", image: "https://framerusercontent.com/images/pXCRR9wHRZ6fMkYZSiPy3bFLvdY.webp" },
];

const About=() => {
    return (
        <div className="bg-[#f6f6f6] text-slate-950">

            {/* HERO */}
            <section className="md:px-52 px-6 py-24">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    <div>
                        <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
                            We shape how brands{" "}
                            <span className="text-red-600">connect</span> with people.
                        </h1>

                        <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
                            We build digital experiences, brand systems, and marketing platforms that
                            help companies grow with clarity and impact.
                        </p>
                    </div>

                    {/* FLOAT CARD */}
                    <div className="rounded-[28px] bg-white border border-slate-200 shadow-sm p-10 space-y-10">

                        <div>
                            <p className="text-xs tracking-[0.35em] uppercase text-slate-500">
                                Experience
                            </p>
                            <p className="mt-4 text-4xl font-semibold text-red-600">10+</p>
                            <p className="text-sm text-slate-600">Years delivering work</p>
                        </div>

                        <div>
                            <p className="text-4xl font-semibold text-red-600">100+</p>
                            <p className="text-sm text-slate-600">Experts in team</p>
                        </div>

                        <div>
                            <p className="text-4xl font-semibold text-red-600">25M+</p>
                            <p className="text-sm text-slate-600">Users impacted</p>
                        </div>

                        <div>
                            <p className="text-4xl font-semibold text-red-600">200+</p>
                            <p className="text-sm text-slate-600">Projects delivered</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* MARQUEE LOGOS (HashConnect style) */}
            <section className="border-t border-slate-200 bg-white py-16 overflow-hidden">

                <p className="text-center text-xs tracking-[0.35em] uppercase text-slate-500">
                    Happy Customers
                </p>

                <div className="mt-10 relative overflow-hidden">
                    <div className="flex w-max gap-8 animate-marquee">
                        {[...logos, ...logos].map((item, i) => (
                            <div
                                key={i}
                                className="h-20 min-w-[180px] flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 font-medium"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <style>
                    {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          `}
                </style>
            </section>

            {/* LEADERS */}
            <section className="md:px-52 px-6 py-24">

                <div className="mb-12">
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Leadership Team
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-xl">
                        People driving product, design, technology and business growth.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {leaders.map((leader, i) => (
                        <div
                            key={i}
                            className="group rounded-[28px] overflow-hidden bg-white border border-slate-200 hover:shadow-xl transition"
                        >

                            {/* IMAGE BLOCK */}
                            <div className="relative h-72 overflow-hidden bg-slate-900">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="h-full w-full object-cover scale-105 group-hover:scale-110 transition duration-500"
                                />

                                {/* overlay like HashConnect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            </div>

                            {/* TEXT */}
                            <div className="p-5 flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        {leader.name}
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        {leader.role}
                                    </p>
                                </div>

                                <div className="text-slate-400 group-hover:text-slate-800 transition">
                                    →
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </section>

        </div>
    );
};

export default About;