import React from 'react'
import { Menu } from 'lucide-react'

const Header=({ setSidebarOpen }) => {
    return (
        <>
            <header
                className="
                        h-[80px]
                        border-b border-white/10
                        bg-white/5 backdrop-blur-xl
                        flex items-center justify-between
                        px-6
                        sticky top-0 z-30
                    "
            >

                {/* LEFT */}
                <div className="flex items-center gap-4">

                    {/* MOBILE MENU BTN */}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden"
                    >
                        <Menu size={24} />
                    </button>

                    <h2 className="text-xl font-semibold">
                        Admin Dashboard
                    </h2>

                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">

                    <div className="hidden md:block text-sm text-white/50">
                        Welcome back, Admin
                    </div>

                    <div
                        className="
                                h-10 w-10 rounded-full
                                bg-gradient-to-r from-purple-500 to-pink-500
                                flex items-center justify-center
                                font-semibold
                            "
                    >
                        A
                    </div>

                </div>

            </header>

        </>
    )
}

export default Header