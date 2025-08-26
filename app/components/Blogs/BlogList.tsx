"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string | null;
  category: string;
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetch("https://blog-filament-production.up.railway.app/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data); // cek struktur di console
        setBlogs(data.data); // ambil array dari `data.data`
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);
  // ambil daftar kategori unik
  const categories = [
    "all",
    ...Array.from(new Set(blogs.map((b) => b.category))),
  ];

  // filter sesuai kategori
  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  return (
    <div className="mt-40 px-40 flex flex-col gap-10 max-[1200px]:px-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-5xl max-[600px]:text-3xl">
          MY BLOGS
        </h1>
        <Link
          href="/#blogs"
          className="flex items-center gap-2 py-3 px-6 bg-blue-500 rounded-full text-white"
        >
          <i className="bx bx-arrow-left-stroke"></i>
          Back
        </Link>
      </div>
      {/* Filter kategori */}
      {/* Filter kategori */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat == "all" ? "All" : cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-10 max-[1600px]:grid-cols-2 max-[700px]:grid-cols-1">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="p-8 shadow-[0_4px_20px_rgba(0_0,_0,_0.09)] rounded-3xl flex flex-col gap-4 max-[700px]:p-4"
          >
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="w-full object-cover rounded-3xl"
              />
            )}
            <p className="py-2 px-4 bg-blue-500 text-white rounded-full w-fit flex items-center gap-2">
              <i className="bx bx-grid-circle-diagonal-left"></i>
              {blog.category}
            </p>
            <h1 className="text-lg">{blog.title}</h1>
            <Link
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="flex items-center gap-2 py-2 px-4 bg-black text-white rounded-full w-fit mt-auto"
            >
              <i className="bx bx-arrow-in-up-right-circle"></i>
              Read Blog
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
