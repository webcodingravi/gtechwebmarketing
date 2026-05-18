import React from 'react'
import { Link } from "react-router-dom";

const NotFound=() => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

                <div className="text-center">

                    {/* BIG 404 */}
                    <h1 className="text-[120px] md:text-[180px] font-bold text-slate-200 leading-none mb-8">
                        404
                    </h1>

                    {/* MESSAGE */}
                    <h2 className="text-2xl md:text-4xl font-semibold text-slate-800 mt-[-30px]">
                        Page Not Found
                    </h2>

                    <p className="text-slate-500 mt-4 max-w-md mx-auto">
                        The page you are looking for doesn’t exist or has been moved.
                    </p>

                    {/* BUTTON */}
                    <Link
                        to="/"
                        className="inline-block mt-8 bg-slate-950 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition"
                    >
                        Go Back Home
                    </Link>

                </div>

            </div>
        </>
    )
}

export default NotFound