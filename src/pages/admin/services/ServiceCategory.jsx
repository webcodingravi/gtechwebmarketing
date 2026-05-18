import React, { useState } from 'react'
import CommonModal from "../../../components/admin/CommonModal";

import {
    Plus,
    Search,
    Pencil,
    Trash2,
    FolderTree,
} from "lucide-react";

const ServiceCategory=() => {
    const [search, setSearch]=useState("");

    // MODALS
    const [openModal, setOpenModal]=useState(false);
    const [openDelete, setOpenDelete]=useState(false);

    // DATA
    const [editingCategory, setEditingCategory]=useState(null);
    const [selectedCategory, setSelectedCategory]=useState(null);

    // DUMMY DATA
    const categories=[
        {
            id: 1,
            name: "Web Development",
            slug: "web-development",
            status: "Active",
        },

        {
            id: 2,
            name: "UI/UX Design",
            slug: "ui-ux-design",
            status: "Active",
        },

        {
            id: 3,
            name: "SEO Marketing",
            slug: "seo-marketing",
            status: "Inactive",
        },
    ];

    // FILTER
    const filteredCategories=categories.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
    );


    // ADD
    const handleAddCategory=() => {
        setEditingCategory(null);
        setOpenModal(true);
    };

    // EDIT
    const handleEditCategory=(category) => {
        setEditingCategory(category);
        setOpenModal(true);
    };

    // DELETE
    const handleDeleteCategory=(category) => {
        setSelectedCategory(category);
        setOpenDelete(true);
    };



    return (
        <>
            <div className="space-y-8">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>
                        <h1 className="text-3xl font-semibold text-white">
                            Service Categories
                        </h1>

                        <p className="text-white/40 mt-2">
                            Manage your service categories here.
                        </p>
                    </div>

                    {/* ADD BUTTON */}
                    <button
                        onClick={handleAddCategory}
                        className="
                            flex items-center gap-2
                            px-5 py-3 rounded-xl
                            bg-gradient-to-r from-pink-500 to-purple-500
                            text-white text-sm font-medium
                            hover:scale-[1.02]
                            transition
                            w-fit cursor-pointer
                        "
                    >
                        <Plus size={18} />
                        Add Category
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
                        placeholder="Search categories..."
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
                                    Category
                                </th>

                                <th className="px-6 py-5 text-sm font-medium text-white/50">
                                    Slug
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

                            {filteredCategories.map((category) => (
                                <tr
                                    key={category.id}
                                    className="
                                        border-b border-white/5
                                        hover:bg-white/[0.03]
                                        transition
                                    "
                                >

                                    {/* CATEGORY */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-4">

                                            <div
                                                className="
                                                    h-14 w-14 rounded-2xl
                                                    bg-gradient-to-r
                                                    from-pink-500 to-purple-500
                                                    flex items-center justify-center
                                                    text-white
                                                "
                                            >
                                                <FolderTree size={22} />
                                            </div>

                                            <div>

                                                <h3 className="text-white font-medium">
                                                    {category.name}
                                                </h3>

                                                <p className="text-white/30 text-sm mt-1">
                                                    ID #{category.id}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    {/* SLUG */}
                                    <td className="px-6 py-5 text-white/60">
                                        {category.slug}
                                    </td>

                                    {/* STATUS */}
                                    <td className="px-6 py-5">

                                        <span
                                            className={`
                                                px-4 py-2 rounded-full
                                                text-xs font-medium

                                                ${category.status==="Active"
                                                    ? "bg-green-500/10 text-green-400"
                                                    :"bg-red-500/10 text-red-400"
                                                }
                                            `}
                                        >
                                            {category.status}
                                        </span>

                                    </td>

                                    {/* ACTIONS */}
                                    <td className="px-6 py-5">

                                        <div className="flex items-center gap-3">

                                            {/* EDIT */}
                                            <button
                                                onClick={() => handleEditCategory(category)}
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
                                                onClick={() => handleDeleteCategory(category)}
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

            </div>

            {/* ADD / EDIT MODAL */}
            <CommonModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title={
                    editingCategory
                        ? "Edit Category"
                        :"Add Category"
                }
            >

                <div className="grid grid-cols-1 gap-5">

                    {/* NAME */}
                    <div>
                        <label className="text-sm text-white/60">
                            Category Name
                        </label>

                        <input
                            type="text"
                            defaultValue={editingCategory?.name||""}
                            placeholder="Enter category name"
                            className="
                                w-full mt-2 px-4 py-3 rounded-xl
                                bg-black/40 border border-white/10
                                text-white outline-none
                                focus:border-pink-500
                            "
                        />
                    </div>

                    {/* SLUG */}
                    <div>
                        <label className="text-sm text-white/60">
                            Slug
                        </label>

                        <input
                            type="text"
                            defaultValue={editingCategory?.slug||""}
                            placeholder="web-development"
                            className="
                                w-full mt-2 px-4 py-3 rounded-xl
                                bg-black/40 border border-white/10
                                text-white outline-none
                                focus:border-pink-500
                            "
                        />
                    </div>

                    {/* STATUS */}
                    <div>
                        <label className="text-sm text-white/60">
                            Status
                        </label>

                        <select
                            defaultValue={editingCategory?.status||"Active"}
                            className="
                                w-full mt-2 px-4 py-3 rounded-xl
                                bg-black/40 border border-white/10
                                text-white outline-none
                                focus:border-pink-500
                            "
                        >
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    {/* BUTTON */}
                    <div className="flex justify-end">

                        <button
                            className="
                                px-6 py-3 rounded-xl
                                bg-gradient-to-r
                                from-pink-500 to-purple-500
                                text-white font-medium
                                hover:scale-[1.02]
                                transition cursor-pointer
                            "
                        >
                            {editingCategory
                                ? "Update Category"
                                :"Create Category"
                            }
                        </button>

                    </div>

                </div>

            </CommonModal>

            {/* DELETE MODAL */}
            <CommonModal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                title="Delete Category?"
                width="max-w-md"
            >

                <p className="text-white/40">
                    Are you sure you want to delete{" "}
                    <span className="text-white">
                        {selectedCategory?.name}
                    </span> ?
                </p>

                <div className="flex items-center gap-4 mt-8">

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
    )
}

export default ServiceCategory