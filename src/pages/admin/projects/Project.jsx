import React, { useState } from 'react'
import {
    Plus,
    Search,
    Pencil,
    Trash2,
    Eye,
} from "lucide-react";
import CommonModal from '../../../components/admin/CommonModal';


const Project=() => {
    const [deleteModal, setDeleteModal]=useState(false);
    const [selectedProject, setSelectedProject]=useState(null);

    const [search, setSearch]=useState("");

    // MODAL
    const [openModal, setOpenModal]=useState(false);

    // EDIT DATA
    const [editingProject, setEditingProject]=useState(null);



    const projects=[
        {
            id: 1,
            title: "HashConnect Portfolio",
            category: "Web Design",
            status: "Active",
        },
        {
            id: 2,
            title: "AI Commerce Platform",
            category: "Development",
            status: "Pending",
        },
        {
            id: 3,
            title: "Creative Agency Website",
            category: "Branding",
            status: "Completed",
        },
    ];

    // FILTER
    const filteredProjects=projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
    );


    // ADD
    const handleAddProject=() => {
        setEditingProject(null);
        setOpenModal(true);
    };

    // EDIT
    const handleEditProject=(project) => {
        setEditingProject(project);
        setOpenModal(true);
    };



    return (
        <>
            <div className="space-y-8">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>
                        <h1 className="text-3xl font-semibold text-white">
                            Projects
                        </h1>

                        <p className="text-white/40 mt-2">
                            Manage all your projects here.
                        </p>
                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={handleAddProject}
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
                        Add Project
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
                        placeholder="Search projects..."
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
                                    Project
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

                            {filteredProjects.map((project) => (
                                <tr
                                    key={project.id}
                                    className="
                                        border-b border-white/5
                                        hover:bg-white/[0.03]
                                        transition
                                    "
                                >

                                    {/* PROJECT */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                                                    h-14 w-14 rounded-2xl
                                                    bg-gradient-to-r
                                                    from-purple-500
                                                    to-pink-500
                                                "
                                            />

                                            <div>

                                                <h3 className="text-white font-medium">
                                                    {project.title}
                                                </h3>

                                                <p className="text-white/30 text-sm mt-1">
                                                    ID #{project.id}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    {/* CATEGORY */}
                                    <td className="px-6 py-5 text-white/70">
                                        {project.category}
                                    </td>

                                    {/* STATUS */}
                                    <td className="px-6 py-5">

                                        <span
                                            className={`
                                                px-4 py-2 rounded-full
                                                text-xs font-medium

                                                ${project.status==="Active"
                                                    ? "bg-green-500/10 text-green-400"
                                                    :project.status==="Pending"
                                                        ? "bg-yellow-500/10 text-yellow-400"
                                                        :"bg-blue-500/10 text-blue-400"
                                                }
                                            `}
                                        >
                                            {project.status}
                                        </span>

                                    </td>

                                    {/* ACTIONS */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-3">



                                            {/* EDIT */}
                                            <button
                                                onClick={() => handleEditProject(project)}
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
                                                    setSelectedProject(project);
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

                {/* DELETE MODAL */}
                <CommonModal
                    open={deleteModal}
                    onClose={() => setDeleteModal(false)}
                    title="Delete Project"
                >

                    <div>

                        <p className="text-white/50 leading-7">
                            Are you sure you want to delete
                            <span className="text-white font-medium">
                                {" "} {selectedProject?.title}
                            </span> ?
                        </p>

                        {/* BUTTONS */}
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
                                    console.log("DELETE PROJECT");

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


                {/* COMMON MODAL */}
                <CommonModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    title={
                        editingProject
                            ? "Edit Project"
                            :"Add Project"
                    }
                >

                    {/* FORM */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* TITLE */}
                        <div className="md:col-span-2">

                            <label className="text-sm text-white/60">
                                Project Title
                            </label>

                            <input
                                type="text"
                                defaultValue={editingProject?.title||""}
                                placeholder="Enter project title"
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


                        {/* CATEGORY */}
                        <div>

                            <label className="text-sm text-white/60">
                                Category
                            </label>

                            <input
                                type="text"
                                defaultValue={editingProject?.category||""}
                                placeholder="Web Design"
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


                        {/* STATUS */}
                        <div>

                            <label className="text-sm text-white/60">
                                Status
                            </label>

                            <select
                                defaultValue={editingProject?.status||"Active"}
                                className="
                                    w-full mt-2 px-4 py-3 rounded-xl
                                    bg-black/40
                                    border border-white/10
                                    text-white
                                    outline-none
                                    focus:border-purple-500
                                "
                            >
                                <option>Active</option>
                                <option>Pending</option>
                                <option>Completed</option>
                            </select>

                        </div>


                        {/* DESCRIPTION */}
                        <div className="md:col-span-2">

                            <label className="text-sm text-white/60">
                                Description
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Project description..."
                                className="
                                    w-full mt-2 px-4 py-3 rounded-xl
                                    bg-black/40
                                    border border-white/10
                                    text-white
                                    outline-none
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
                                {editingProject
                                    ? "Update Project"
                                    :"Create Project"
                                }
                            </button>

                        </div>

                    </div>

                </CommonModal>

            </div>

        </>
    )
}

export default Project