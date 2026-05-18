import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
    X,
    LogOut,
    ChevronDown,
    LayoutDashboard,
    FolderKanban,
    Briefcase,
    MessageSquare,
    Users,
    Settings,
    FolderTree,
} from "lucide-react";

const Sidebar=({ sidebarOpen, setSidebarOpen }) => {

    const [openProject, setOpenProject]=useState(true);
    const [openService, setOpenService]=useState(false);

    return (
        <>
            {/* SIDEBAR */}
            <aside
                className={`
                    fixed lg:static top-0 left-0 z-50
                    h-screen w-[280px]
                    bg-[#0f0f0f]
                    backdrop-blur-2xl
                    border-r border-white/10
                    p-6
                    overflow-y-auto
                    transition-all duration-300

                    ${sidebarOpen
                        ? "translate-x-0"
                        :"-translate-x-full lg:translate-x-0"
                    }
                `}
            >

                {/* LOGO */}
                <div className="flex items-center justify-between mb-10">

                    <h1 className="text-2xl font-semibold tracking-wide text-white">
                        HashConnect
                    </h1>

                    {/* MOBILE CLOSE */}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden text-white"
                    >
                        <X size={24} />
                    </button>

                </div>

                {/* MENU */}
                <nav className="space-y-3">

                    {/* DASHBOARD */}
                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) =>
                            `
                            flex items-center gap-4
                            px-4 py-3 rounded-xl
                            transition-all duration-300

                            ${isActive
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                :"text-white/60 hover:bg-white/5 hover:text-white"
                            }
                        `
                        }
                    >
                        <LayoutDashboard size={20} />

                        <span className="text-sm font-medium">
                            Dashboard
                        </span>

                    </NavLink>

                    {/* PROJECT GROUP */}
                    <div className="space-y-2">

                        <button
                            onClick={() => setOpenProject(!openProject)}
                            className="
                                w-full
                                flex items-center justify-between
                                px-4 py-3 rounded-xl
                                text-white/70
                                hover:bg-white/5
                                hover:text-white
                                transition cursor-pointer
                            "
                        >

                            <div className="flex items-center gap-4">
                                <FolderKanban size={20} />

                                <span className="text-sm font-medium">
                                    Projects
                                </span>
                            </div>

                            <ChevronDown
                                size={18}
                                className={`
                                    transition duration-300
                                    ${openProject? "rotate-180":""}
                                `}
                            />

                        </button>

                        {/* DROPDOWN */}
                        <div
                            className={`
                                overflow-hidden transition-all duration-300
                                ${openProject? "max-h-40":"max-h-0"}
                            `}
                        >

                            <div className="ml-6 mt-2 space-y-2 border-l border-white/10 pl-4">

                                <NavLink
                                    to="/admin/projects"
                                    end
                                    className={({ isActive }) =>
                                        `
                        flex items-center gap-3
                        px-3 py-2 rounded-lg
                        text-sm transition

                        ${isActive
                                            ? "bg-purple-500/20 text-white"
                                            :"text-white/50 hover:text-white hover:bg-white/5"
                                        }
                                      `
                                    }
                                >
                                    <FolderKanban size={16} />
                                    All Projects
                                </NavLink>

                                <NavLink
                                    to="/admin/project/categories"
                                    className={({ isActive }) =>
                                        `
                                        flex items-center gap-3
                                        px-3 py-2 rounded-lg
                                        text-sm transition

                                        ${isActive
                                            ? "bg-purple-500/20 text-white"
                                            :"text-white/50 hover:text-white hover:bg-white/5"
                                        }
                                    `
                                    }
                                >
                                    <FolderTree size={16} />
                                    Categories
                                </NavLink>

                            </div>

                        </div>

                    </div>

                    {/* SERVICE GROUP */}
                    <div className="space-y-2">

                        <button
                            onClick={() => setOpenService(!openService)}
                            className="
                                w-full
                                flex items-center justify-between
                                px-4 py-3 rounded-xl
                                text-white/70
                                hover:bg-white/5
                                hover:text-white
                                transition cursor-pointer
                            "
                        >

                            <div className="flex items-center gap-4">
                                <Briefcase size={20} />

                                <span className="text-sm font-medium">
                                    Services
                                </span>
                            </div>

                            <ChevronDown
                                size={18}
                                className={`
                                    transition duration-300
                                    ${openService? "rotate-180":""}
                                `}
                            />

                        </button>

                        {/* DROPDOWN */}
                        <div
                            className={`
                                overflow-hidden transition-all duration-300
                                ${openService? "max-h-40":"max-h-0"}
                            `}
                        >

                            <div className="ml-6 mt-2 space-y-2 border-l border-white/10 pl-4">

                                <NavLink
                                    end
                                    to="/admin/services"
                                    className={({ isActive }) =>
                                        `
                                        flex items-center gap-3
                                        px-3 py-2 rounded-lg
                                        text-sm transition

                                        ${isActive
                                            ? "bg-pink-500/20 text-white"
                                            :"text-white/50 hover:text-white hover:bg-white/5"
                                        }
                                    `
                                    }
                                >
                                    <Briefcase size={16} />
                                    All Services
                                </NavLink>

                                <NavLink
                                    to="/admin/service/categories"
                                    className={({ isActive }) =>
                                        `
                                        flex items-center gap-3
                                        px-3 py-2 rounded-lg
                                        text-sm transition

                                        ${isActive
                                            ? "bg-pink-500/20 text-white"
                                            :"text-white/50 hover:text-white hover:bg-white/5"
                                        }
                                    `
                                    }
                                >
                                    <FolderTree size={16} />
                                    Categories
                                </NavLink>

                            </div>

                        </div>

                    </div>

                    {/* LEADS */}
                    <NavLink
                        to="/admin/leads"
                        className={({ isActive }) =>
                            `
                            flex items-center gap-4
                            px-4 py-3 rounded-xl
                            transition-all duration-300

                            ${isActive
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                :"text-white/60 hover:bg-white/5 hover:text-white"
                            }
                        `
                        }
                    >
                        <MessageSquare size={20} />

                        <span className="text-sm font-medium">
                            Leads
                        </span>

                    </NavLink>

                    {/* TEAM */}
                    <NavLink
                        to="/admin/team"
                        className={({ isActive }) =>
                            `
                            flex items-center gap-4
                            px-4 py-3 rounded-xl
                            transition-all duration-300

                            ${isActive
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                :"text-white/60 hover:bg-white/5 hover:text-white"
                            }
                        `
                        }
                    >
                        <Users size={20} />

                        <span className="text-sm font-medium">
                            Team
                        </span>

                    </NavLink>

                    {/* SETTINGS */}
                    <NavLink
                        to="/admin/settings"
                        className={({ isActive }) =>
                            `
                            flex items-center gap-4
                            px-4 py-3 rounded-xl
                            transition-all duration-300

                            ${isActive
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                :"text-white/60 hover:bg-white/5 hover:text-white"
                            }
                        `
                        }
                    >
                        <Settings size={20} />

                        <span className="text-sm font-medium">
                            Settings
                        </span>

                    </NavLink>

                </nav>

                {/* LOGOUT */}
                <button
                    className="
                        absolute bottom-6 left-6 right-6
                        flex items-center justify-center gap-3
                        py-3 rounded-xl
                        bg-red-500/10 text-red-400
                        hover:bg-red-500/20
                        transition cursor-pointer
                    "
                >
                    <LogOut size={18} />

                    Logout
                </button>

            </aside>
        </>
    )
}

export default Sidebar