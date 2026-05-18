import React from 'react'
import {FaFacebook,FaInstagram,FaPhoneVolume,FaYoutube,FaLinkedin,FaXTwitter  } from "react-icons/fa6";


import { motion } from "framer-motion";
import { ArrowUpRight,  MapPinHouse,Mail} from "lucide-react";
import { Link } from 'react-router-dom';

const footerLinks=[
    ["Home", "/"],
    ["Work", "/work"],
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Privacy Policy", "#privacy-policy"],
];


const socialLinks=[
    [<FaFacebook />, "https://www.facebook.com/gtechwebmarketing/"],
    [<FaInstagram />, "https://www.instagram.com/gtechwebmarketing"],
    [<FaYoutube />, "https://www.youtube.com/@gtechwebmarketing"],
    [<FaLinkedin />, "https://www.linkedin.com/company/gtechwebmarketing/"],
    [<FaXTwitter/>, "https://x.com/gtechweb123"],

   
   

   
    
    
];

const FooterSection=() => {
    return (
        <>
            <footer className="bg-[#1b1c1f] text-white overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 pb-10">

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="border-b border-white/10 pb-16"
                    >
                        <Link
                            to="/contact"
                            className="group inline-flex items-start gap-6"
                        >
                            <div>
                                <h2 className="text-[52px] md:text-[90px] leading-[0.95] tracking-[-4px] font-light text-[#d1d1d1]">
                                    Let’s work
                                </h2>

                                <h2 className="text-[52px] md:text-[90px] leading-[0.95] tracking-[-4px] font-light text-[#d1d1d1]">
                                    together
                                </h2>
                            </div>

                            <div className="mt-3 overflow-hidden">
                                <motion.div
                                    whileHover={{ x: 6, y: -6 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <ArrowUpRight
                                        size={60}
                                        strokeWidth={1.5}
                                        className="text-[#d1d1d1]"
                                    />
                                </motion.div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* FOOTER LINKS */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 py-16">


                        {/* ABOUT */}
                         <div>

                            <p className="text-white/60 leading-8 text-xl font-light">
                              {/* <img src="./assets/white logo (2).png" alt="logo" className='h-25 mb-6'/> */}
                              G Tech is a leading web marketing agency setting growth marks in the world of communication. With the time and requirements, we have opted different level of strategic skills to help our clients & brands to optimize their engagements and value their efforts with minimum ROI.
                            </p>

                            <div className="flex items-center gap-3 mt-6">
                                {socialLinks.map(([title, link], index) => (
                                    <motion.div key={index} whileHover={{ y: -10 }}>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-[20px] text-[#f2f2f2] font-extralight transition-all duration-300"
                                        >
                                            {title}
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* MENU */}

                        <div className="space-y-5">
                            <p className="text-xl uppercase tracking-[3px] text-white/40 mb-4">
                                Quick Links
                            </p>
                            {footerLinks.map(([title, link], index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                >
                                    <Link
                                        to={link}
                                        className="block text-xl text-white/60 font-extralight transition-all duration-300"
                                    >
                                        {title}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>



                 

                        {/* CONTACT */}
                        <div className="space-y-3 flex flex-col gap-2">
                            <p className="text-xl uppercase tracking-[3px] text-white/40">
                                Contact Information
                            </p>

                         <p className="text-xl font-light text-white/60 inline-flex gap-1 items-center">
                         <FaPhoneVolume size={19} />  +91-9810699052
                            </p>

                            <p className="text-xl font-light text-white/60  inline-flex gap-2">
                           <Mail size={23} />info@gtechwebmarketing.com
                            </p>

                            <p className="text-xl font-light text-white/60 inline-flex gap-2">
                           <MapPinHouse size={47} />
                               A - 19A, 3rd Floor, Mayapuri Industrial Area, Phase - II, New Delhi 110064, INDIA
                            </p>
                        </div>

                    </div>

                    {/* HUGE BRAND TEXT */}
                    {/* <div className="relative pt-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className="
              text-[70px]
              md:text-[180px]
              lg:text-[260px]
              font-medium
              tracking-[-10px]
              leading-none
              text-[#595959]
              lowercase
              whitespace-nowrap
            "
                        >
                            hashconnect
                        </motion.h1>
                    </div> */}

                </div>
            </footer>

        </>
    )
}

export default FooterSection