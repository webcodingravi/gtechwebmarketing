import React from 'react'
import {
    FolderKanban,
    Users,
    Eye,
    MessageSquare,
    ArrowUpRight,
} from "lucide-react";

const Dashboard=() => {
    const stats=[
        {
            title: "Total Projects",
            value: "24",
            icon: <FolderKanban size={22} />,
        },
        {
            title: "Total Visitors",
            value: "18.2K",
            icon: <Eye size={22} />,
        },
        {
            title: "New Messages",
            value: "12",
            icon: <MessageSquare size={22} />,
        },
        {
            title: "Clients",
            value: "08",
            icon: <Users size={22} />,
        },
    ];

    return (
        <>
            <div className="space-y-8">

                {/* PAGE HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>
                        <h1 className="text-3xl font-semibold text-white">
                            Dashboard
                        </h1>

                        <p className="text-white/40 mt-2">
                            Welcome back, manage your website easily.
                        </p>
                    </div>



                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="
                            rounded-3xl
                            border border-white/10
                            bg-white/5
                            backdrop-blur-xl
                            p-6
                            hover:border-purple-500/30
                            transition
                        "
                        >

                            <div className="flex items-center justify-between">

                                <div
                                    className="
                                    h-12 w-12 rounded-2xl
                                    bg-gradient-to-r from-purple-500 to-pink-500
                                    flex items-center justify-center
                                    text-white
                                "
                                >
                                    {item.icon}
                                </div>

                                <span className="text-green-400 text-sm">
                                    +12%
                                </span>

                            </div>

                            <h2 className="text-3xl font-semibold text-white mt-6">
                                {item.value}
                            </h2>

                            <p className="text-white/40 mt-2 text-sm">
                                {item.title}
                            </p>

                        </div>
                    ))}

                </div>

                {/* CONTENT AREA */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                    {/* RECENT PROJECTS */}
                    <div
                        className="
                        xl:col-span-2
                        rounded-3xl
                        border border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        p-6
                    "
                    >

                        <div className="flex items-center justify-between mb-6">

                            <h2 className="text-xl font-semibold text-white">
                                Recent Projects
                            </h2>

                            <button className="text-sm text-purple-400 hover:text-purple-300 transition">
                                View All
                            </button>

                        </div>

                        <div className="space-y-4">

                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="
                                    flex items-center justify-between
                                    p-4 rounded-2xl
                                    bg-black/30
                                    border border-white/5
                                "
                                >

                                    <div>
                                        <h3 className="text-white font-medium">
                                            HashConnect Portfolio
                                        </h3>

                                        <p className="text-white/40 text-sm mt-1">
                                            UI/UX Design • Development
                                        </p>
                                    </div>

                                    <span className="text-green-400 text-sm">
                                        Active
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* ACTIVITY */}
                    <div
                        className="
                        rounded-3xl
                        border border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        p-6
                    "
                    >

                        <h2 className="text-xl font-semibold text-white mb-6">
                            Recent Activity
                        </h2>

                        <div className="space-y-5">

                            {[1, 2, 3, 4].map((item) => (
                                <div
                                    key={item}
                                    className="flex gap-4"
                                >

                                    <div
                                        className="
                                        h-10 w-10 rounded-full
                                        bg-gradient-to-r from-purple-500 to-pink-500
                                        shrink-0
                                    "
                                    />

                                    <div>
                                        <p className="text-white text-sm">
                                            New project added successfully.
                                        </p>

                                        <span className="text-white/30 text-xs">
                                            2 min ago
                                        </span>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Dashboard