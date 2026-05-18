import { useState } from "react";
import { Link, Outlet } from 'react-router-dom'
import { Menu, X } from "lucide-react";
import FooterSection from "./Home/FooterSection";
import { NavLink } from "react-router-dom";


const Layout=() => {
    const [isOpen, setIsOpen]=useState(false);
    const manus=[
        {
            label: "Home",
            link: '/'
        },

        {
            label: "Work",
            link: '/work'
        },

        {
            label: "About",
            link: '/about'
        },

        {
            label: "Contact",
            link: '/contact'
        },



    ]
    return (
        <>
            <div className="min-h-screen bg-slate-50 text-slate-900">
                <header className="sticky top-0 z-50 border-b border-white/10 bg-white backdrop-blur-xl shadow-md">
                    <div className="mx-auto flex  items-center justify-between px-5 py-2 md:px-53">

                        {/* LOGO */}
                        <Link to="/">
                            <img src="/assets/gtech logo.png" alt="Logo" className="h-8 md:h-18" />
                        </Link>


                        {/* DESKTOP MENU */}
                        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-black/80">
                            {manus&&
                                manus.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.link}
                                        className={({ isActive }) =>
                                            `relative group transition ${isActive
                                                ? "text-black font-semibold"
                                                :"text-black/60 hover:text-black hover:translate-x-1"
                                            }`
                                        }
                                    >
                                        {item.label}

                                        <span
                                            className="absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 w-0 group-hover:w-full"
                                        />
                                    </NavLink>
                                ))}
                        </nav>
                        {/* MOBILE BUTTON */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-black/80"
                        >
                            {isOpen? <X size={28} />:<Menu size={28} />}
                        </button>
                    </div>

                    {/* MOBILE MENU */}
                    <div
                        className={`
                            md:hidden
                            overflow-hidden
                            transition-all
                            duration-500
                            ${isOpen? "max-h-[500px] opacity-100":"max-h-0 opacity-0"}
                            `}
                    >
                        <nav className="flex flex-col gap-6 border-t border-white/10 bg-black px-6 py-8 text-white">

                            {manus&&
                                manus.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.link}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `text-lg font-light tracking-wide transition ${isActive
                                                ? "text-purple-400 font-medium"
                                                :"text-white/70 hover:text-purple-400 hover:translate-x-2"
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                        </nav>
                    </div>
                </header>


                <main >
                    {<Outlet />}
                </main>

                <FooterSection />

            </div>
        </>
    )
}

export default Layout