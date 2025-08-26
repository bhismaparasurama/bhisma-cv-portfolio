"use client";

import BlogDetail from "@/app/components/Blogs/BlogDetail";
import Link from "next/link";
import React, { useRef } from "react";

const Page = () => {
  const sideMenu = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenu.current) {
      sideMenu.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenu.current) {
      sideMenu.current.style.transform = "translateX(16rem)";
    }
  };
  return (
    <div>
      <nav className="w-full fixed top-0 right-0 left-0 px-40 py-4 flex items-center justify-between z-50 max-[1200px]:px-4 transition duration-300 bg-white shadow-sm">
        <Link href="" className="text-4xl font-semibold max-[600px]:text-2xl">
          Bhisma <span className="text-blue-500">.</span>
        </Link>

        <ul className="flex items-center gap-10 max-[1024px]:hidden">
          <li>
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="">
              About
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="">
              Project
            </Link>
          </li>
          <li>
            <Link href="/#blogs" className="">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="flex items-center gap-2 border border-blue-500 rounded-full py-3 px-10 max-[1024px]:hidden"
          >
            <i className="bx bxs-arrow-up-right-stroke"></i>
            <span>Contact</span>
          </Link>
          <button className="hidden max-[1024px]:flex" onClick={openMenu}>
            <i className="bx bxs-menu-right text-3xl"></i>
          </button>
        </div>

        {/* MOBILE MENU */}
        <ul
          ref={sideMenu}
          className="fixed flex-col gap-10 py-20 px-10 -right-64 top-0 bottom-0 h-screen z-50 bg-gray-200 w-64 flex transition duration-500"
        >
          <button className="absolute top-6 right-6" onClick={closeMenu}>
            <i className="bx bxs-x text-3xl"></i>
          </button>

          <li>
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" className="">
              About
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="">
              Project
            </Link>
          </li>
          <li>
            <Link href="/#blog" className="">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <BlogDetail />
      <div className="px-40 p-8 flex bg-black flex-col items-center mt-60 gap-4 max-[1200px]:p-4 max-[600px]:mt-20">
        <div>
          <Link href="" className="text-4xl text-white max-[600px]:text-2xl">
            Bhisma <span className="text-blue-500">.</span>
          </Link>
        </div>
        <div className="flex gap-8 justify-center max-[600px]:grid max-[600px]:grid-cols-3 max-[600px]:gap-4">
          <Link href="/" className="text-lg text-white max-[600px]:text-center">
            Home
          </Link>
          <Link
            href="/#about"
            className="text-lg text-white max-[600px]:text-center"
          >
            About
          </Link>
          <Link
            href="/#skills"
            className="text-lg text-white max-[600px]:text-center"
          >
            Skills
          </Link>
          <Link
            href="/#projects"
            className="text-lg text-white max-[600px]:text-center"
          >
            Project
          </Link>
          <Link
            href="/#blogs"
            className="text-lg text-white max-[600px]:text-center"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="text-lg text-white max-[600px]:text-center"
          >
            Contact
          </Link>
        </div>
        <div>
          <h1 className="text-lg text-white text-center">
            © 2025 Putu Bhisma Parasurama.{" "}
            <span className="text-blue-500">All rights reserved.</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <a href="https://www.youtube.com/@bhismaramaaa">
            <i className="bxl bx-youtube text-white text-4xl"></i>
          </a>
          <a href="https://www.facebook.com/share/175XJojJsH/">
            <i className="bxl bx-facebook text-white text-4xl"></i>
          </a>
          <a href="https://www.instagram.com/bhismaramaaa">
            <i className="bxl bx-instagram text-white text-4xl"></i>
          </a>
          <a href="https://www.tiktok.com/@bhismaramaaa">
            <i className="bxl bx-tiktok text-white text-4xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Page;
