import React, {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    motion,
    animate,
    useInView,
} from "framer-motion";

import {
    ArrowUpRight,
    Globe,
    Users,
    BriefcaseBusiness,
    BadgeCheck,
} from "lucide-react";

const clients=[
    {
        logo: "assets/company-partner/imgi_17_reliance-retail-logo.png",
    },
    {
        logo: "assets/company-partner/imgi_18_tata-logo.png",
    },
    {
        logo: "assets/company-partner/imgi_19_burger-king-logo-1999svg-1-removebg-preview.png",
    },
    {
        logo: "assets/company-partner/imgi_20_aditya-birla-group-logosvg-removebg-preview.png",
    },
    {
        logo: "assets/company-partner/imgi_21_dlf-removebg-preview.png",
    },
    {
        logo: "assets/company-partner/imgi_22_y1-10-removebg-preview-1.png",
    },
    {
        logo: "assets/company-partner/imgi_24_indianexpress.jpg",
    },
    {
        logo: "assets/company-partner/imgi_25_bluestar-removebg-preview-1.png",
    },
    {
        logo: "assets/company-partner/imgi_26_capgimini-removebg-preview.png",
    },
    {
        logo: "assets/company-partner/imgi_27_ficci-removebg-preview.png",
    },
    {
        logo: "assets/company-partner/imgi_29_kiko-milano-logo-6a3a0731b2-seeklogocom.jpg",
    },
];

const leaders=[
    {
        name: "Manish Mehra",
        role: "MD / CEO",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    },
    {
        name: "Kamal Chauhan",
        role: "Senior Sales Manager",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
        name: "Abhishek Kumar",
        role: "Team Leader (IT)",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
        name: "Shilpa Ghosh",
        role: "HR / DLT",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
];

function Counter({ value, suffix="" }) {
    const ref=useRef(null);

    const isInView=useInView(ref, {
        once: true,
    });

    const [displayValue, setDisplayValue]=useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls=animate(0, value, {
            duration: 2,
            ease: "easeOut",

            onUpdate(latest) {
                setDisplayValue(Math.floor(latest));
            },
        });

        return () => controls.stop();
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {displayValue}
            {suffix}
        </span>
    );
}

const About=() => {
    return (
        <div className="bg-[#f7f7f7] text-slate-900 overflow-hidden">

            {/* HERO */}
            <section className="relative px-5 md:px-16 lg:px-28 xl:px-40 pt-28 md:pt-36 pb-24">

                {/* BACKGROUND TEXT */}
                <div className="absolute inset-0 flex justify-center pointer-events-none overflow-hidden">
                    <h1 className="text-[90px] md:text-[220px] font-black text-black/[0.03] whitespace-nowrap">
                        G TECH
                    </h1>
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >

                        <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
                            About Company
                        </p>

                        <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-[0.95]">
                            Driving brands
                            <span className="block text-red-600">
                                through digital growth.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-base md:text-lg leading-8 text-slate-600">
                            G Tech Web Marketing is a leading digital marketing
                            and web solutions company helping businesses grow
                            through SEO, web development, WhatsApp solutions,
                            lead generation, performance marketing, and
                            customer engagement strategies.
                        </p>

                        {/* STATS */}
                        <div className="mt-12 grid grid-cols-2 gap-5">

                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <Users
                                    className="text-red-600"
                                    size={28}
                                />

                                <h3 className="mt-5 text-4xl font-bold">
                                    <Counter value={15} suffix="+" />
                                </h3>

                                <p className="mt-2 text-slate-500">
                                    Years Experience
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <BriefcaseBusiness
                                    className="text-red-600"
                                    size={28}
                                />

                                <h3 className="mt-5 text-4xl font-bold">
                                    <Counter value={200} suffix="+" />
                                </h3>

                                <p className="mt-2 text-slate-500">
                                    Projects Delivered
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <Globe
                                    className="text-red-600"
                                    size={28}
                                />

                                <h3 className="mt-5 text-4xl font-bold">
                                    <Counter value={25} suffix="M+" />
                                </h3>

                                <p className="mt-2 text-slate-500">
                                    Leads Generated
                                </p>
                            </div>

                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                                <BadgeCheck
                                    className="text-red-600"
                                    size={28}
                                />

                                <h3 className="mt-5 text-4xl font-bold">
                                    <Counter value={100} suffix="+" />
                                </h3>

                                <p className="mt-2 text-slate-500">
                                    Happy Clients
                                </p>
                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <div className="overflow-hidden rounded-[35px]">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
                                alt="team"
                                className="h-[600px] w-full object-cover"
                            />
                        </div>

                        <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 backdrop-blur-xl p-5 shadow-xl">
                            <p className="text-sm text-slate-500">
                                Trusted Marketing Partner
                            </p>

                            <h3 className="mt-1 text-2xl font-bold">
                                Since 2009
                            </h3>
                        </div>

                    </motion.div>

                </div>

            </section>

            {/* CLIENTS */}
            <section className="border-y border-slate-200 bg-white py-20">

                <div className="text-center">
                    <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
                        Trusted by businesses
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                        Happy Clients
                    </h2>
                </div>

                <div className="relative mt-14 overflow-hidden">

                    <div className="flex w-max animate-marquee gap-8">

                        {[...clients, ...clients].map((client, i) => (
                            <div
                                key={i}
                                className="flex min-w-[240px] items-center justify-center rounded-3xl border border-slate-200 bg-[#fafafa] p-8 shadow-sm"
                            >

                                <img
                                    src={client.logo}
                                    alt="client"
                                    className="h-20 object-contain grayscale hover:grayscale-0 transition cursor-pointer hover:scale-120 duration-300 w-[140px] object-center"
                                />

                            </div>
                        ))}

                    </div>

                </div>

                <style>
                    {`
                        @keyframes marquee {
                            0% {
                                transform: translateX(0);
                            }

                            100% {
                                transform: translateX(-50%);
                            }
                        }

                        .animate-marquee {
                            animation: marquee 24s linear infinite;
                        }
                    `}
                </style>

            </section>

            {/* LEADERSHIP */}
            {/* <section className="px-5 md:px-16 lg:px-28 xl:px-40 py-24">

                <div className="mb-16">

                    <p className="uppercase tracking-[0.3em] text-sm text-slate-500">
                        Core Team
                    </p>

                    <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                        Leadership Team
                    </h2>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        Experienced professionals driving innovation,
                        marketing strategy, technology, and business growth
                        at G Tech Web Marketing.
                    </p>

                </div>

                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

                    {leaders.map((leader, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i*0.1 }}
                            viewport={{ once: true }}
                            className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm"
                        >

                            <div className="relative overflow-hidden">

                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                            </div>

                            <div className="flex items-center justify-between p-6">

                                <div>

                                    <h3 className="text-xl font-semibold">
                                        {leader.name}
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-500">
                                        {leader.role}
                                    </p>

                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition group-hover:bg-black group-hover:text-white">
                                    <ArrowUpRight size={18} />
                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </section> */}

        </div>
    );
};

export default About;