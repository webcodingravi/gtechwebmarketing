import React, { useState } from 'react'
import CommonModal from '../../../components/admin/CommonModal';
import {
    Plus,
    Search,
    Pencil,
    Trash2,
    Eye,
    X,
    Briefcase,
} from "lucide-react";

const Service=() => {
    const [search, setSearch]=useState("");

    // ADD / EDIT MODAL
    const [openModal, setOpenModal]=useState(false);

    // DELETE MODAL
    const [deleteModal, setDeleteModal]=useState(false);

    // EDIT DATA
    const [editingService, setEditingService]=useState(null);

    // DELETE DATA
    const [selectedService, setSelectedService]=useState(null);


    /* =========================
      DUMMY DATA
   ========================= */

    const services=[
        {
            id: 1,
            title: "Web Design",
            category: "UI/UX",
            status: "Active",
        },

        {
            id: 2,
            title: "Development",
            category: "Frontend",
            status: "Popular",
        },

        {
            id: 3,
            title: "Brand Identity",
            category: "Branding",
            status: "Inactive",
        },
    ];


    /* =========================
      FILTER
   ========================= */

    const filteredServices=services.filter((service) =>
        service.title.toLowerCase().includes(search.toLowerCase())
    );



    /* =========================
       ADD SERVICE
    ========================= */

    const handleAddService=() => {
        setEditingService(null);
        setOpenModal(true);
    };


    /* =========================
          EDIT SERVICE
       ========================= */

    const handleEditService=(service) => {
        setEditingService(service);
        setOpenModal(true);
    };




    return (
        <>
            <div className="space-y-8">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>
                        <h1 className="text-3xl font-semibold text-white">
                            Services
                        </h1>

                        <p className="text-white/40 mt-2">
                            Manage all your services here.
                        </p>
                    </div>

                    {/* ADD BUTTON */}
                    <button
                        onClick={handleAddService}
                        className="
                            flex items-center gap-2
                            px-5 py-3 rounded-xl
                            bg-gradient-to-r from-purple-500 to-pink-500
                            text-white text-sm font-medium
                            hover:scale-[1.02]
                            transition
                            w-fit cursor-pointer
                        "
                    >
                        <Plus size={18} />
                        Add Service
                    </button>

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
                        placeholder="Search services..."
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

                    <table className="w-full min-w-[700px]">

                        <thead className="border-b border-white/10">

                            <tr className="text-left">

                                <th className="px-6 py-5 text-sm font-medium text-white/50">
                                    Service
                                </th>

                                <th className="px-6 py-5 text-sm font-medium text-white/50">
                                    Category
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

                            {filteredServices.map((service) => (
                                <tr
                                    key={service.id}
                                    className="
                                        border-b border-white/5
                                        hover:bg-white/[0.03]
                                        transition
                                    "
                                >

                                    {/* SERVICE */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                                                    h-14 w-14 rounded-2xl
                                                    bg-gradient-to-r
                                                    from-purple-500
                                                    to-pink-500
                                                    flex items-center justify-center
                                                    text-white
                                                "
                                            >
                                                <Briefcase size={24} />
                                            </div>

                                            <div>

                                                <h3 className="text-white font-medium">
                                                    {service.title}
                                                </h3>

                                                <p className="text-white/30 text-sm mt-1">
                                                    ID #{service.id}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    {/* CATEGORY */}
                                    <td className="px-6 py-5 text-white/70">
                                        {service.category}
                                    </td>

                                    {/* STATUS */}
                                    <td className="px-6 py-5">

                                        <span
                                            className={`
                                                px-4 py-2 rounded-full
                                                text-xs font-medium

                                                ${service.status==="Active"
                                                    ? "bg-green-500/10 text-green-400"
                                                    :service.status==="Popular"
                                                        ? "bg-yellow-500/10 text-yellow-400"
                                                        :"bg-red-500/10 text-red-400"
                                                }
                                            `}
                                        >
                                            {service.status}
                                        </span>

                                    </td>

                                    {/* ACTIONS */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-3">

                                            {/* VIEW */}
                                            {/* <button
                                                className="
                                                    h-10 w-10 rounded-xl
                                                    bg-white/5
                                                    flex items-center justify-center
                                                    text-white/60
                                                    hover:bg-purple-500
                                                    hover:text-white
                                                    transition
                                                "
                                            >
                                                <Eye size={18} />
                                            </button> */}

                                            {/* EDIT */}
                                            <button
                                                onClick={() => handleEditService(service)}
                                                className="
                                                    h-10 w-10 rounded-xl
                                                    bg-white/5
                                                    flex items-center justify-center
                                                    text-white/60
                                                    hover:bg-blue-500
                                                    hover:text-white
                                                    transition cursor-pointer
                                                "
                                            >
                                                <Pencil size={18} />
                                            </button>

                                            {/* DELETE */}
                                            <button
                                                onClick={() => {
                                                    setSelectedService(service);
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



                {/* ADD / EDIT MODAL */}
                <CommonModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    title={
                        editingService
                            ? "Edit Service"
                            :"Add Service"
                    }
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* TITLE */}
                        <div className="md:col-span-2">

                            <label className="text-sm text-white/60">
                                Service Title
                            </label>

                            <input
                                type="text"
                                defaultValue={editingService?.title||""}
                                placeholder="Enter service title"
                                className="
                                    w-full mt-2 px-4 py-3 rounded-xl
                                    bg-black/40 border border-white/10
                                    text-white outline-none
                                    focus:border-purple-500
                                "
                            />

                        </div>


                        {/* CATEGORY */}
                        <div>

                            <label className="text-sm text-white/60">
                                Category
                            </label>

                            <input
                                type="text"
                                defaultValue={editingService?.category||""}
                                placeholder="UI/UX"
                                className="
                                    w-full mt-2 px-4 py-3 rounded-xl
                                    bg-black/40 border border-white/10
                                    text-white outline-none
                                    focus:border-purple-500
                                "
                            />

                        </div>


                        {/* STATUS */}
                        <div>

                            <label className="text-sm text-white/60">
                                Status
                            </label>

                            <select
                                defaultValue={editingService?.status||"Active"}
                                className="
                                    w-full mt-2 px-4 py-3 rounded-xl
                                    bg-black/40 border border-white/10
                                    text-white outline-none
                                    focus:border-purple-500
                                "
                            >
                                <option>Active</option>
                                <option>Popular</option>
                                <option>Inactive</option>
                            </select>

                        </div>


                        {/* DESCRIPTION */}
                        <div className="md:col-span-2">

                            <label className="text-sm text-white/60">
                                Description
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Service description..."
                                className="
                                    w-full mt-2 px-4 py-3 rounded-xl
                                    bg-black/40 border border-white/10
                                    text-white outline-none
                                    focus:border-purple-500
                                    resize-none
                                "
                            />

                        </div>


                        {/* BUTTON */}
                        <div className="md:col-span-2 flex justify-end">

                            <button
                                className="
                                    px-6 py-3 rounded-xl
                                    bg-gradient-to-r
                                    from-purple-500
                                    to-pink-500
                                    text-white font-medium
                                    hover:scale-[1.02]
                                    transition cursor-pointer
                                "
                            >
                                {editingService
                                    ? "Update Service"
                                    :"Create Service"
                                }
                            </button>

                        </div>

                    </div>

                </CommonModal>



                {/* DELETE MODAL */}
                <CommonModal
                    open={deleteModal}
                    onClose={() => setDeleteModal(false)}
                    title="Delete Service"
                >

                    <div>

                        <p className="text-white/50 leading-7">

                            Are you sure you want to delete

                            <span className="text-white font-medium">
                                {" "} {selectedService?.title}
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
                                    console.log("DELETE SERVICE");
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

export default Service