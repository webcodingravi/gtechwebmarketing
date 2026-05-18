import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Menu, LogOut, X, FolderKanban, LayoutDashboard, Settings } from 'lucide-react'
import Header from './admin/Header';
import Sidebar from './admin/Sidebar';

const AdminLayout=() => {
    const [sidebarOpen, setSidebarOpen]=useState(false);

    return (
        <>
            <div className="min-h-screen bg-[#0b0b0c] text-white flex">

                {/* MOBILE OVERLAY */}
                {sidebarOpen&&(
                    <div
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    />
                )}

                <Sidebar sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen} />
                {/* MAIN AREA */}
                <div className="flex-1 flex flex-col min-h-screen">

                    {/* NAVBAR */}
                    <Header setSidebarOpen={setSidebarOpen} />

                    {/* CONTENT */}
                    <main className="flex-1 p-6 md:p-8 overflow-auto">

                        <div
                            className="
                            min-h-[calc(100vh-140px)]
                            rounded-3xl
                            border border-white/10
                            bg-white/5
                            backdrop-blur-xl
                            p-6
                        "
                        >

                            <Outlet />
                        </div>

                    </main>

                </div>

            </div>

        </>
    )
}

export default AdminLayout