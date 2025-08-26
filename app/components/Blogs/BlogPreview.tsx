"use client";

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

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data); // cek struktur di console
        setBlogs(data.data); // ambil array dari `data.data`
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);
  const latestBlogs = blogs.slice(0, 4);

  return (
    <div id="blogs" className="scroll-mt-[180px] px-40 flex flex-col mt-60 gap-10 max-[1200px]:px-4 max-[600px]:mt-20">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-5xl max-[600px]:text-3xl">
          MY BLOGS
        </h1>
        {blogs.length > 4 && (
          <a
            href="/blogs"
            className="flex items-center gap-2 py-3 px-6 bg-blue-500 rounded-full text-white"
          >
            <i className="bx bx-eye"></i>
            More Blog
          </a>
        )}
      </div>
      <div className="grid grid-cols-4 gap-10 max-[1600px]:grid-cols-2 max-[700px]:grid-cols-1">
        {latestBlogs.map((blog) => (
          <div className="p-8 shadow-[0_4px_20px_rgba(0_0,_0,_0.09)] rounded-3xl flex flex-col gap-4 max-[700px]:p-4">
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full object-cover rounded-3xl"
              />
            )}
            <p className="py-2 px-4 bg-blue-500 text-white rounded-full w-fit flex items-center gap-2">
              <i className="bx bx-grid-circle-diagonal-left"></i>
              {blog.category}
            </p>
            <h1 className="text-lg">{blog.title}</h1>
            <a
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="flex items-center gap-2 py-2 px-4 bg-black text-white rounded-full w-fit mt-auto"
            >
              <i className="bx bx-arrow-in-up-right-circle"></i>
              Read Blog
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
