import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'

const Login=() => {
    const [showPassword, setShowPassword]=useState(false);
    return (
        <>
            <div className="min-h-screen overflow-hidden flex items-center justify-center bg-[#0a0a0a] px-6 relative">

                {/* BACKGROUND GLOW */}
                <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

                <div className="absolute w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

                {/* LOGIN CARD */}
                <div className="relative w-full max-w-md z-10">

                    <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl p-10 shadow-2xl">

                        {/* TITLE */}
                        <h1 className="text-3xl font-semibold text-white text-center tracking-wide">
                            Admin Panel
                        </h1>

                        <p className="text-white/40 text-sm text-center mt-2">
                            Sign in to continue
                        </p>

                        {/* FORM */}
                        <form

                            className="mt-8 space-y-6"
                        >

                            {/* EMAIL */}
                            <div>
                                <label className="text-white/60 text-sm">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name='email'
                                    placeholder="admin@hashconnect.com"
                                    className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-purple-500 transition"
                                />
                            </div>

                            {/* PASSWORD */}
                            <div className='relative'>
                                <label className="text-white/60 text-sm">
                                    Password
                                </label>

                                <input
                                    type={showPassword? "text":"password"}
                                    name='password'
                                    placeholder="••••••••"
                                    className="w-full mt-2 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-purple-500 transition"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-12 text-white/50 hover:text-white transition cursor-pointer"
                                >
                                    {showPassword? <EyeOff size={20} />:<Eye size={20} />}
                                </button>

                            </div>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full cursor-pointer py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white font-medium hover:scale-[1.02] transition"
                            >
                                Sign In
                            </button>

                        </form>

                        {/* FOOTER */}
                        <p className="text-white/20 text-xs text-center mt-6">
                            Secure access only
                        </p>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Login