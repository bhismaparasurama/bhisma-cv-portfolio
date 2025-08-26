"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string | null;
  category: string;
}

export default function BlogDetail() {
  const params = useParams();
  const { id } = params;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [related, setRelated] = useState<Blog[]>([]);

  useEffect(() => {
    if (id) {
      // fetch detail blog
      fetch(`https://blog-filament-production.up.railway.app/api/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          const currentBlog = data.data;
          setBlog(currentBlog);

          // fetch semua blog untuk cari related
          fetch("https://blog-filament-production.up.railway.app/api/blogs")
            .then((res) => res.json())
            .then((all) => {
              const relatedBlogs = all.data.filter(
                (b: Blog) =>
                  b.category === currentBlog.category && b.id !== currentBlog.id
              );
              setRelated(relatedBlogs);
            });
        })
        .catch((err) => console.error("Error fetching blog:", err));
    }
  }, [id]);

  if (!blog) return <p className="p-8">Loading...</p>;

  return (
    <div className="px-40 mt-[100px] flex flex-col gap-4 max-[1200px]:px-4">
      <div>
        <Link
          href="/blogs"
          className="flex items-center gap-2 py-3 px-6 bg-blue-500 rounded-full text-white w-fit"
        >
          <i className="bx bx-arrow-left-stroke"></i>
          Back
        </Link>
      </div>
      <div className="flex items-start gap-10 w-full max-[1000px]:flex-col">
        <div className="w-[70%] shadow-[0_4px_20px_rgba(0_0,_0,_0.09)] p-8 flex gap-4 flex-col rounded-3xl max-[1000px]:w-full max-[1000px]:p-4">
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              width={600}
              height={400}
              className="w-full object-cover rounded-3xl"
            />
          )}
          <h1 className="text-3xl font-medium max-[1000px]:text-lg">
            {blog.title}
          </h1>
          <p className="py-3 px-6 bg-blue-500 w-fit rounded-full text-white flex items-center gap-2">
            <i className="bx bx-grid-circle-diagonal-left"></i>
            {blog.category}
          </p>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
        {/* Related Blogs */}
        {related.length > 0 && (
          <div className="w-[calc(30%-2.5rem)] flex flex-col gap-4 max-[1000px]:w-full">
            <h2 className="text-2xl font-medium text-gray-600">RELATED BLOG</h2>
            <div className="grid grid-cols-1 gap-10">
              {related.map((item) => (
                <div
                  key={item.id}
                  className="p-8 shadow-[0_4px_20px_rgba(0_0,_0,_0.09)] rounded-3xl flex flex-col gap-4 max-[700px]:p-4"
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full object-cover rounded-3xl"
                    />
                  )}
                  <p className="py-2 px-4 bg-blue-500 text-white rounded-full w-fit flex items-center gap-2">
                    <i
                      key="icon-category"
                      className="bx bx-grid-circle-diagonal-left"
                    ></i>
                    <span key="label-category">{item.category}</span>
                  </p>
                  <h1 className="text-lg">{item.title}</h1>
                  <Link
                    href={`/blogs/${item.id}`}
                    className="flex items-center gap-2 py-2 px-4 bg-black text-white rounded-full w-fit mt-auto"
                  >
                    <i key="icon-read" className="bx bx-arrow-in-up-right-circle"></i>
                    <span key="label-read">Read Blog</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
