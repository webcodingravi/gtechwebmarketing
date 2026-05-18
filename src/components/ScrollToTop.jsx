import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { ArrowUp } from 'lucide-react';


const ScrollToTop=() => {

    const [visible, setVisible]=useState(false);

    useEffect(() => {
        const handleScroll=() => {
            setVisible(window.scrollY>300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop=() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;
    return (
        <>
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                className="fixed cursor-pointer bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg hover:bg-rose-600 transition"
            >
                <ArrowUp size={20} />
            </motion.button>
        </>
    )
}

export default ScrollToTop