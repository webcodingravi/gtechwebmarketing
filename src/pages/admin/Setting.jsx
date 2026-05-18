import React, { useState } from 'react'
import {
    Settings,
    User,
    Lock,
    Bell,
    Globe,
    Upload,
    Save,
} from "lucide-react";


const Setting=() => {
    const [preview, setPreview]=useState(null);

    const handleImage=(e) => {
        const file=e.target.files[0];

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };


    return (
        <>
            <div className="space-y-8">

                {/* PAGE HEADER */}
                <div>
                    <h1 className="text-3xl font-semibold text-white">
                        Settings
                    </h1>

                    <p className="text-white/40 mt-2">
                        Manage your website and admin settings.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                    {/* LEFT SIDE */}
                    <div className="xl:col-span-2 space-y-6">

                        {/* PROFILE SETTINGS */}
                        <div
                            className="
                                rounded-3xl
                                border border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                p-6
                            "
                        >

                            <div className="flex items-center gap-3 mb-6">
                                <User size={22} className="text-purple-400" />

                                <h2 className="text-xl font-semibold text-white">
                                    Profile Settings
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                {/* NAME */}
                                <div>
                                    <label className="text-sm text-white/60">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Ravi Kumar"
                                        className="
                                            w-full mt-2 px-4 py-3 rounded-xl
                                            bg-black/40
                                            border border-white/10
                                            text-white
                                            outline-none
                                            focus:border-purple-500
                                        "
                                    />
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <label className="text-sm text-white/60">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="admin@hashconnect.in"
                                        className="
                                            w-full mt-2 px-4 py-3 rounded-xl
                                            bg-black/40
                                            border border-white/10
                                            text-white
                                            outline-none
                                            focus:border-purple-500
                                        "
                                    />
                                </div>

                                {/* PHONE */}
                                <div>
                                    <label className="text-sm text-white/60">
                                        Phone
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="+91 9876543210"
                                        className="
                                            w-full mt-2 px-4 py-3 rounded-xl
                                            bg-black/40
                                            border border-white/10
                                            text-white
                                            outline-none
                                            focus:border-purple-500
                                        "
                                    />
                                </div>

                                {/* WEBSITE */}
                                <div>
                                    <label className="text-sm text-white/60">
                                        Website
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="https://hashconnect.in"
                                        className="
                                            w-full mt-2 px-4 py-3 rounded-xl
                                            bg-black/40
                                            border border-white/10
                                            text-white
                                            outline-none
                                            focus:border-purple-500
                                        "
                                    />
                                </div>

                            </div>

                        </div>

                        {/* SECURITY */}
                        <div
                            className="
                                rounded-3xl
                                border border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                p-6
                            "
                        >

                            <div className="flex items-center gap-3 mb-6">
                                <Lock size={22} className="text-pink-400" />

                                <h2 className="text-xl font-semibold text-white">
                                    Security
                                </h2>
                            </div>

                            <div className="space-y-5">

                                {/* CURRENT PASSWORD */}
                                <div>
                                    <label className="text-sm text-white/60">
                                        Current Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="
                                            w-full mt-2 px-4 py-3 rounded-xl
                                            bg-black/40
                                            border border-white/10
                                            text-white
                                            outline-none
                                            focus:border-purple-500
                                        "
                                    />
                                </div>

                                {/* NEW PASSWORD */}
                                <div>
                                    <label className="text-sm text-white/60">
                                        New Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="
                                            w-full mt-2 px-4 py-3 rounded-xl
                                            bg-black/40
                                            border border-white/10
                                            text-white
                                            outline-none
                                            focus:border-purple-500
                                        "
                                    />
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">

                        {/* LOGO */}
                        <div
                            className="
                                rounded-3xl
                                border border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                p-6
                            "
                        >

                            <div className="flex items-center gap-3 mb-6">
                                <Upload size={22} className="text-blue-400" />

                                <h2 className="text-xl font-semibold text-white">
                                    Logo Upload
                                </h2>
                            </div>

                            <div className="flex flex-col items-center">

                                <div
                                    className="
                                        h-32 w-32 rounded-3xl
                                        bg-black/40
                                        border border-dashed border-white/10
                                        overflow-hidden
                                        flex items-center justify-center
                                    "
                                >

                                    {preview? (
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="h-full w-full object-cover"
                                        />
                                    ):(
                                        <Settings
                                            size={40}
                                            className="text-white/20"
                                        />
                                    )}

                                </div>

                                <label
                                    className="
                                        mt-5 px-5 py-3 rounded-xl
                                        bg-gradient-to-r
                                        from-purple-500
                                        to-pink-500
                                        text-white
                                        text-sm
                                        cursor-pointer
                                    "
                                >
                                    Upload Logo

                                    <input
                                        type="file"
                                        hidden
                                        onChange={handleImage}
                                    />
                                </label>

                            </div>

                        </div>

                        {/* NOTIFICATIONS */}
                        <div
                            className="
                                rounded-3xl
                                border border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                p-6
                            "
                        >

                            <div className="flex items-center gap-3 mb-6">
                                <Bell size={22} className="text-yellow-400" />

                                <h2 className="text-xl font-semibold text-white">
                                    Notifications
                                </h2>
                            </div>

                            <div className="space-y-4">

                                <div className="flex items-center justify-between">
                                    <p className="text-white/70">
                                        Email Notifications
                                    </p>

                                    <input type="checkbox" className="h-5 w-5" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-white/70">
                                        New Lead Alerts
                                    </p>

                                    <input type="checkbox" className="h-5 w-5" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-white/70">
                                        Team Activity
                                    </p>

                                    <input type="checkbox" className="h-5 w-5" />
                                </div>

                            </div>

                        </div>

                        {/* LANGUAGE */}
                        <div
                            className="
                                rounded-3xl
                                border border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                p-6
                            "
                        >

                            <div className="flex items-center gap-3 mb-6">
                                <Globe size={22} className="text-green-400" />

                                <h2 className="text-xl font-semibold text-white">
                                    Language
                                </h2>
                            </div>

                            <select
                                className="
                                    w-full px-4 py-3 rounded-xl
                                    bg-black/40
                                    border border-white/10
                                    text-white
                                    outline-none
                                    focus:border-purple-500
                                "
                            >
                                <option>English</option>
                                <option>Hindi</option>
                            </select>

                        </div>

                    </div>

                </div>

                {/* SAVE BUTTON */}
                <div className="flex justify-end">

                    <button
                        className="
                            flex items-center gap-2
                            px-6 py-3 rounded-xl
                            bg-gradient-to-r
                            from-purple-500
                            to-pink-500
                            text-white
                            font-medium
                            hover:scale-[1.02]
                            transition
                            cursor-pointer
                        "
                    >
                        <Save size={18} />
                        Save Settings
                    </button>

                </div>

            </div>

        </>
    )
}

export default Setting