import React, { useState } from "react";
import CommonModal from "../../components/admin/CommonModal";
import {
    Plus,
    Search,
    Pencil,
    Trash2,
    Users,
    Mail,
    Phone,
    Shield,
} from "lucide-react";



const Team=() => {
    const [search, setSearch]=useState("");

    // MODALS
    const [openModal, setOpenModal]=useState(false);
    const [openDelete, setOpenDelete]=useState(false);

    // DATA
    const [editingMember, setEditingMember]=useState(null);
    const [selectedMember, setSelectedMember]=useState(null);

    const teamMembers=[
        {
            id: 1,
            name: "Ravi Kumar",
            role: "Web Developer",
            email: "ravi@hashconnect.in",
            phone: "+91 9876543210",
            status: "Active",
        },
        {
            id: 2,
            name: "Aman Sharma",
            role: "Frontend Developer",
            email: "aman@hashconnect.in",
            phone: "+91 9876543211",
            status: "Active",
        },
        {
            id: 3,
            name: "Priya Singh",
            role: "UI/UX Designer",
            email: "priya@hashconnect.in",
            phone: "+91 9876543212",
            status: "Inactive",
        },
    ];

    // FILTER
    const filteredMembers=teamMembers.filter((member) =>
        member.name.toLowerCase().includes(search.toLowerCase())
    );

    // ADD
    const handleAddMember=() => {
        setEditingMember(null);
        setOpenModal(true);
    };

    // EDIT
    const handleEditMember=(member) => {
        setEditingMember(member);
        setOpenModal(true);
    };

    // DELETE
    const handleDeleteMember=(member) => {
        setSelectedMember(member);
        setOpenDelete(true);
    };

    return (
        <>
            <div className="space-y-8">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>
                        <h1 className="text-3xl font-semibold text-white">
                            Team Members
                        </h1>

                        <p className="text-white/40 mt-2">
                            Manage your team members and staff.
                        </p>
                    </div>

                    {/* ADD BUTTON */}
                    <button
                        onClick={handleAddMember}
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
                        Add Member
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
                        placeholder="Search team member..."
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

                {/* TEAM GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {filteredMembers.map((member) => (
                        <div
                            key={member.id}
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

                            {/* TOP */}
                            <div className="flex items-start justify-between">

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            h-16 w-16 rounded-2xl
                                            bg-gradient-to-r from-purple-500 to-pink-500
                                            flex items-center justify-center
                                            text-white
                                        "
                                    >
                                        <Users size={26} />
                                    </div>

                                    <div>
                                        <h2 className="text-white font-semibold text-lg">
                                            {member.name}
                                        </h2>

                                        <p className="text-white/40 text-sm mt-1">
                                            {member.role}
                                        </p>
                                    </div>

                                </div>

                                <span
                                    className={`
                                        px-3 py-1 rounded-full text-xs font-medium

                                        ${member.status==="Active"
                                            ? "bg-green-500/10 text-green-400"
                                            :"bg-red-500/10 text-red-400"
                                        }
                                    `}
                                >
                                    {member.status}
                                </span>

                            </div>

                            {/* INFO */}
                            <div className="mt-6 space-y-4">

                                <div className="flex items-center gap-3 text-white/70 text-sm">
                                    <Mail size={16} />
                                    {member.email}
                                </div>

                                <div className="flex items-center gap-3 text-white/70 text-sm">
                                    <Phone size={16} />
                                    {member.phone}
                                </div>

                                <div className="flex items-center gap-3 text-white/70 text-sm">
                                    <Shield size={16} />
                                    {member.role}
                                </div>

                            </div>

                            {/* ACTIONS */}
                            <div className="flex items-center gap-3 mt-8">

                                {/* EDIT */}
                                <button
                                    onClick={() => handleEditMember(member)}
                                    className="
                                        flex-1 py-3 rounded-xl
                                        bg-blue-500/10 text-blue-400
                                        hover:bg-blue-500 hover:text-white
                                        transition cursor-pointer
                                    "
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Pencil size={16} />
                                        Edit
                                    </div>
                                </button>

                                {/* DELETE */}
                                <button
                                    onClick={() => handleDeleteMember(member)}
                                    className="
                                        h-12 w-12 rounded-xl
                                        bg-red-500/10 text-red-400
                                        hover:bg-red-500 hover:text-white
                                        flex items-center justify-center
                                        transition cursor-pointer
                                    "
                                >
                                    <Trash2 size={18} />
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

            {/* ADD / EDIT MODAL */}
            <CommonModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title={
                    editingMember
                        ? "Edit Team Member"
                        :"Add Team Member"
                }
                description="Manage your team member details."
                size="max-w-2xl"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* NAME */}
                    <div>
                        <label className="text-sm text-white/60">
                            Full Name
                        </label>

                        <input
                            type="text"
                            defaultValue={editingMember?.name||""}
                            placeholder="Enter name"
                            className="
                                w-full mt-2 px-4 py-3 rounded-xl
                                bg-black/40 border border-white/10
                                text-white outline-none
                                focus:border-purple-500
                            "
                        />
                    </div>

                    {/* ROLE */}
                    <div>
                        <label className="text-sm text-white/60">
                            Role
                        </label>

                        <input
                            type="text"
                            defaultValue={editingMember?.role||""}
                            placeholder="Frontend Developer"
                            className="
                                w-full mt-2 px-4 py-3 rounded-xl
                                bg-black/40 border border-white/10
                                text-white outline-none
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
                            defaultValue={editingMember?.email||""}
                            placeholder="team@hashconnect.in"
                            className="
                                w-full mt-2 px-4 py-3 rounded-xl
                                bg-black/40 border border-white/10
                                text-white outline-none
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
                            defaultValue={editingMember?.phone||""}
                            placeholder="+91 9876543210"
                            className="
                                w-full mt-2 px-4 py-3 rounded-xl
                                bg-black/40 border border-white/10
                                text-white outline-none
                                focus:border-purple-500
                            "
                        />
                    </div>

                    {/* STATUS */}
                    <div className="md:col-span-2">
                        <label className="text-sm text-white/60">
                            Status
                        </label>

                        <select
                            defaultValue={editingMember?.status||"Active"}
                            className="
                                w-full mt-2 px-4 py-3 rounded-xl
                                bg-black/40 border border-white/10
                                text-white outline-none
                                focus:border-purple-500
                            "
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    {/* BUTTON */}
                    <div className="md:col-span-2 flex justify-end">

                        <button
                            className="
                                px-6 py-3 rounded-xl
                                bg-gradient-to-r from-purple-500 to-pink-500
                                text-white font-medium
                                hover:scale-[1.02]
                                transition cursor-pointer
                            "
                        >
                            {editingMember
                                ? "Update Member"
                                :"Create Member"
                            }
                        </button>

                    </div>

                </div>

            </CommonModal>

            {/* DELETE MODAL */}
            <CommonModal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                title="Delete Member?"
                description={`Are you sure you want to delete ${selectedMember?.name}?`}
                size="max-w-md"
            >

                <div className="flex items-center gap-4 mt-4">

                    <button
                        onClick={() => setOpenDelete(false)}
                        className="
                            flex-1 py-3 rounded-xl
                            bg-white/5 text-white
                            hover:bg-white/10
                            transition cursor-pointer
                        "
                    >
                        Cancel
                    </button>

                    <button
                        className="
                            flex-1 py-3 rounded-xl
                            bg-red-500 text-white
                            hover:bg-red-600
                            transition cursor-pointer
                        "
                    >
                        Delete
                    </button>

                </div>

            </CommonModal>
        </>
    );
};

export default Team;