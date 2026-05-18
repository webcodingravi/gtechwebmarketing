import React, { useState } from 'react'
import {
    Search,
    Eye,
    Trash2,
    X,
    Mail,
    Phone,
    Building2,
    MessageSquare,
} from "lucide-react";
import CommonModal from '../../components/admin/CommonModal';

const Leads=() => {
    const [search, setSearch]=useState("");

    // VIEW MODAL
    const [viewModal, setViewModal]=useState(false);

    // DELETE MODAL
    const [deleteModal, setDeleteModal]=useState(false);

    // SELECTED LEAD
    const [selectedLead, setSelectedLead]=useState(null);

    const leads=[
        {
            id: 1,
            name: "Ravi Kumar",
            email: "ravi@gmail.com",
            phone: "+91 9876543210",
            company: "HashConnect",
            service: "Web Design",
            status: "New",
            message: "Need modern agency website for startup.",
        },

        {
            id: 2,
            name: "Aman Verma",
            email: "aman@gmail.com",
            phone: "+91 9999999999",
            company: "AI Labs",
            service: "Development",
            status: "Contacted",
            message: "Need AI SaaS dashboard development.",
        },

        {
            id: 3,
            name: "Sahil",
            email: "sahil@gmail.com",
            phone: "+91 8888888888",
            company: "Creative Studio",
            service: "Branding",
            status: "Closed",
            message: "Looking for complete rebranding package.",
        },
    ];




    /* =========================
       FILTER
    ========================= */

    const filteredLeads=leads.filter((lead) =>
        lead.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <>
            <div className="space-y-8">

                {/* HEADER */}
                <div>

                    <h1 className="text-3xl font-semibold text-white">
                        Leads
                    </h1>

                    <p className="text-white/40 mt-2">
                        Manage all incoming client inquiries.
                    </p>

                </div>



                {/* SEARCH */}
                <div
                    className="
                        flex items-center gap-3
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        px-4 py-3
                    "
                >

                    <Search size={18} className="text-white/40" />

                    <input
                        type="text"
                        placeholder="Search leads..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="
                            w-full bg-transparent
                            outline-none
                            text-white
                            placeholder:text-white/30
                        "
                    />

                </div>



                {/* TABLE */}
                <div
                    className="
                        overflow-x-auto
                        rounded-3xl
                        border border-white/10
                        bg-white/5
                        backdrop-blur-xl
                    "
                >

                    <table className="w-full min-w-[900px]">

                        <thead className="border-b border-white/10">

                            <tr className="text-left">

                                <th className="px-6 py-5 text-sm font-medium text-white/50">
                                    Client
                                </th>

                                <th className="px-6 py-5 text-sm font-medium text-white/50">
                                    Service
                                </th>

                                <th className="px-6 py-5 text-sm font-medium text-white/50">
                                    Status
                                </th>

                                <th className="px-6 py-5 text-sm font-medium text-white/50">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredLeads.map((lead) => (
                                <tr
                                    key={lead.id}
                                    className="
                                        border-b border-white/5
                                        hover:bg-white/[0.03]
                                        transition
                                    "
                                >

                                    {/* CLIENT */}
                                    <td className="px-6 py-5">

                                        <div>

                                            <h3 className="text-white font-medium">
                                                {lead.name}
                                            </h3>

                                            <p className="text-white/30 text-sm mt-1">
                                                {lead.email}
                                            </p>

                                        </div>

                                    </td>

                                    {/* SERVICE */}
                                    <td className="px-6 py-5 text-white/70">
                                        {lead.service}
                                    </td>

                                    {/* STATUS */}
                                    <td className="px-6 py-5">

                                        <span
                                            className={`
                                                px-4 py-2 rounded-full
                                                text-xs font-medium

                                                ${lead.status==="New"
                                                    ? "bg-green-500/10 text-green-400"
                                                    :lead.status==="Contacted"
                                                        ? "bg-yellow-500/10 text-yellow-400"
                                                        :"bg-blue-500/10 text-blue-400"
                                                }
                                            `}
                                        >
                                            {lead.status}
                                        </span>

                                    </td>

                                    {/* ACTIONS */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-3">

                                            {/* VIEW */}
                                            <button
                                                onClick={() => {
                                                    setSelectedLead(lead);
                                                    setViewModal(true);
                                                }}
                                                className="
                                                    h-10 w-10 rounded-xl
                                                    bg-white/5
                                                    flex items-center justify-center
                                                    text-white/60
                                                    hover:bg-purple-500
                                                    hover:text-white
                                                    transition cursor-pointer
                                                "
                                            >
                                                <Eye size={18} />
                                            </button>

                                            {/* DELETE */}
                                            <button
                                                onClick={() => {
                                                    setSelectedLead(lead);
                                                    setDeleteModal(true);
                                                }}
                                                className="
                                                    h-10 w-10 rounded-xl
                                                    bg-white/5
                                                    flex items-center justify-center
                                                    text-white/60
                                                    hover:bg-red-500
                                                    hover:text-white
                                                    transition cursor-pointer
                                                "
                                            >
                                                <Trash2 size={18} />
                                            </button>

                                        </div>

                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>



                {/* VIEW MODAL */}
                <CommonModal
                    open={viewModal}
                    onClose={() => setViewModal(false)}
                    title="Lead Details"
                >

                    <div className="space-y-6">

                        {/* NAME */}
                        <div className="flex items-start gap-4">

                            <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <MessageSquare size={22} />
                            </div>

                            <div>
                                <p className="text-white/40 text-sm">
                                    Client Name
                                </p>

                                <h3 className="text-white text-lg font-medium mt-1">
                                    {selectedLead?.name}
                                </h3>
                            </div>

                        </div>



                        {/* EMAIL */}
                        <div className="flex items-start gap-4">

                            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <Mail size={22} />
                            </div>

                            <div>
                                <p className="text-white/40 text-sm">
                                    Email Address
                                </p>

                                <h3 className="text-white text-lg font-medium mt-1">
                                    {selectedLead?.email}
                                </h3>
                            </div>

                        </div>



                        {/* PHONE */}
                        <div className="flex items-start gap-4">

                            <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400">
                                <Phone size={22} />
                            </div>

                            <div>
                                <p className="text-white/40 text-sm">
                                    Phone Number
                                </p>

                                <h3 className="text-white text-lg font-medium mt-1">
                                    {selectedLead?.phone}
                                </h3>
                            </div>

                        </div>



                        {/* COMPANY */}
                        <div className="flex items-start gap-4">

                            <div className="h-12 w-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                                <Building2 size={22} />
                            </div>

                            <div>
                                <p className="text-white/40 text-sm">
                                    Company
                                </p>

                                <h3 className="text-white text-lg font-medium mt-1">
                                    {selectedLead?.company}
                                </h3>
                            </div>

                        </div>



                        {/* MESSAGE */}
                        <div>

                            <p className="text-white/40 text-sm mb-3">
                                Message
                            </p>

                            <div
                                className="
                                    rounded-2xl
                                    border border-white/10
                                    bg-black/30
                                    p-5
                                    text-white/70
                                    leading-7
                                "
                            >
                                {selectedLead?.message}
                            </div>

                        </div>

                    </div>

                </CommonModal>



                {/* DELETE MODAL */}
                <CommonModal
                    open={deleteModal}
                    onClose={() => setDeleteModal(false)}
                    title="Delete Lead"
                >

                    <div>

                        <p className="text-white/50 leading-7">

                            Are you sure you want to delete

                            <span className="text-white font-medium">
                                {" "} {selectedLead?.name}
                            </span> ?

                        </p>

                        <div className="flex items-center justify-end gap-4 mt-8">

                            {/* CANCEL */}
                            <button
                                onClick={() => setDeleteModal(false)}
                                className="
                                    px-5 py-3 rounded-xl
                                    bg-white/5
                                    text-white/70
                                    hover:bg-white/10
                                    transition
                                "
                            >
                                Cancel
                            </button>

                            {/* DELETE */}
                            <button
                                onClick={() => {
                                    console.log("DELETE LEAD");
                                    setDeleteModal(false);
                                }}
                                className="
                                    px-5 py-3 rounded-xl
                                    bg-red-500
                                    text-white
                                    hover:bg-red-600
                                    transition
                                "
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </CommonModal>

            </div>

        </>
    )
}

export default Leads