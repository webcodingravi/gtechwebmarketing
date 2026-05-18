import React from 'react'
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CommonModal=({ open, onClose, title, children, width="max-w-2xl" }) => {

    if (!open) return null;
    return (
        <>
            <AnimatePresence>

                {open&&(
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="
                        fixed inset-0 z-50
                        flex items-center justify-center
                        bg-black/70 backdrop-blur-sm
                        p-4
                    "
                    >

                        {/* MODAL BOX */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                y: 40,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                            relative
                            w-full max-w-2xl
                            rounded-3xl
                            border border-white/10
                            bg-[#111111]
                            p-8
                            shadow-2xl
                        "
                        >

                            {/* CLOSE BUTTON */}
                            <button
                                onClick={onClose}
                                className="
                                absolute top-5 right-5
                                h-10 w-10 rounded-xl
                                bg-white/5
                                flex items-center justify-center
                                text-white/60
                                hover:bg-red-500
                                hover:text-white
                                transition cursor-pointer
                            "
                            >
                                <X size={18} />
                            </button>

                            {/* TITLE */}
                            <h2 className="text-2xl font-semibold text-white">
                                {title}
                            </h2>

                            <p className="text-white/40 mt-2">
                                Manage project details easily.
                            </p>

                            {/* CONTENT */}
                            <div className="mt-8">
                                {children}
                            </div>

                        </motion.div>

                    </motion.div>
                )}

            </AnimatePresence>
        </>
    )
}

export default CommonModal