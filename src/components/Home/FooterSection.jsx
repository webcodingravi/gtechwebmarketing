import React from "react";

import {
    FaFacebookF,
    FaInstagram,
    FaPhoneVolume,
    FaYoutube,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

import { motion } from "framer-motion";

import {
    ArrowUpRight,
    MapPinHouse,
    Mail,
} from "lucide-react";

import { Link } from "react-router-dom";

const footerLinks=[
    ["Home", "/"],
    ["Work", "/work"],
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Privacy Policy", "/privacy-policy"],
];

const socialLinks=[
    {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/gtechwebmarketing/",
    },
    {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/gtechwebmarketing",
    },
    {
        icon: <FaYoutube />,
        link: "https://www.youtube.com/@gtechwebmarketing",
    },
    {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/company/gtechwebmarketing/",
    },
    {
        icon: <FaXTwitter />,
        link: "https://x.com/gtechweb123",
    },
];

const FooterSection=() => {
    return (
        <footer className="relative overflow-hidden bg-[#0b0c0f] text-white">

            {/* ANIMATED GLOW CIRCLES */}
            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[200px] left-[-120px] h-[350px] w-[350px] rounded-full bg-red-600/10 blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] right-[-140px] h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[140px]"
            />

            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-180px] left-[35%] h-[380px] w-[380px] rounded-full bg-white/[0.03] blur-[130px]"
            />

            {/* ANIMATED WAVES */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

                <svg
                    className="relative block w-[200%] h-[180px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >

                    {/* WAVE 1 */}
                    <motion.path
                        animate={{
                            x: [0, -1200],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80L1200,75V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0Z"
                        className="fill-red-600/10"
                    />

                    {/* WAVE 2 */}
                    <motion.path
                        animate={{
                            x: [-1200, 0],
                        }}
                        transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        d="M0,96L60,90C120,84,240,72,360,66C480,60,600,60,720,69C840,78,960,96,1080,96C1140,96,1170,96,1200,90V120H0Z"
                        className="fill-white/[0.04]"
                    />

                    {/* WAVE 3 */}
                    <motion.path
                        animate={{
                            x: [0, -800],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        d="M0,80L80,74C160,68,320,56,480,58C640,60,800,76,960,82C1120,88,1280,84,1360,82L1440,80V120H0Z"
                        className="fill-red-500/5"
                    />

                </svg>

            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16">

                {/* TOP CTA */}
                <div className="border-b border-white/10 py-20 md:py-28">

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >

                        <Link
                            to="/contact"
                            className="group flex flex-col md:flex-row md:items-center md:justify-between gap-10"
                        >

                            <div>

                                <p className="uppercase tracking-[0.35em] text-sm text-white/40 mb-6">
                                    Let’s build something impactful
                                </p>

                                <h2 className="text-[52px] sm:text-[70px] md:text-[110px] leading-[0.9] tracking-[-4px] font-semibold text-white">
                                    Let’s work
                                </h2>

                                <h2 className="text-[52px] sm:text-[70px] md:text-[110px] leading-[0.9] tracking-[-4px] font-semibold text-red-600">
                                    together.
                                </h2>

                            </div>

                            <motion.div
                                whileHover={{
                                    x: 8,
                                    y: -8,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                }}
                                className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
                            >

                                <ArrowUpRight
                                    size={42}
                                    strokeWidth={1.5}
                                    className="text-white"
                                />

                            </motion.div>

                        </Link>

                    </motion.div>

                </div>

                {/* FOOTER GRID */}
                <div className="grid gap-16 py-16 md:grid-cols-2 lg:grid-cols-3">

                    {/* ABOUT */}
                    <div>

                        <h3 className="text-3xl font-semibold tracking-tight">
                            G Tech Web Marketing
                        </h3>

                        <p className="mt-6 text-[15px] leading-8 text-white/60">
                            G Tech is a modern digital marketing and web
                            solutions agency helping businesses grow through
                            SEO, website development, lead generation,
                            branding, WhatsApp solutions, and performance
                            marketing strategies.
                        </p>

                        {/* SOCIAL */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">

                            {socialLinks.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        y: -6,
                                        scale: 1.05,
                                    }}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/80 backdrop-blur-xl transition hover:border-red-500 hover:bg-red-600 hover:text-white"
                                >
                                    {item.icon}
                                </motion.a>
                            ))}

                        </div>

                    </div>

                    {/* QUICK LINKS */}
                    <div className="lg:mx-auto">

                        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                            Quick Links
                        </p>

                        <div className="mt-8 flex flex-col gap-5">

                            {footerLinks.map(([title, link], index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        x: 8,
                                    }}
                                >

                                    <Link
                                        to={link}
                                        className="group inline-flex items-center gap-3 text-lg text-white/70 transition hover:text-white"
                                    >

                                        <span className="h-[6px] w-[6px] rounded-full bg-red-600 opacity-0 transition group-hover:opacity-100" />

                                        {title}

                                    </Link>

                                </motion.div>
                            ))}

                        </div>

                    </div>

                    {/* CONTACT */}
                    <div>

                        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                            Contact Information
                        </p>

                        <div className="mt-8 space-y-6">

                            <div className="flex items-start gap-4">

                                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <FaPhoneVolume size={16} />
                                </div>

                                <div>
                                    <p className="text-sm text-white/40">
                                        Phone
                                    </p>

                                    <p className="mt-1 text-lg text-white/80">
                                        +91 9810699052
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <Mail size={18} />
                                </div>

                                <div>
                                    <p className="text-sm text-white/40">
                                        Email
                                    </p>

                                    <p className="mt-1 text-lg break-all text-white/80">
                                        info@gtechwebmarketing.com
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-start gap-4">

                                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <MapPinHouse size={18} />
                                </div>

                                <div>
                                    <p className="text-sm text-white/40">
                                        Address
                                    </p>

                                    <p className="mt-1 text-[15px] leading-7 text-white/80">
                                        A - 19A, 3rd Floor,
                                        <br />
                                        Mayapuri Industrial Area,
                                        <br />
                                        Phase - II, New Delhi 110064,
                                        India
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">

                    <p>
                        © {new Date().getFullYear()} G Tech Web Marketing. All rights reserved.
                    </p>

                    <p>
                        Designed & Developed by G Tech Team
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default FooterSection;