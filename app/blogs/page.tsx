"use client";

import React, { useRef } from "react";
import BlogList from "../components/Blogs/BlogList";

type Props = {};

const page = (props: Props) => {
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
        <a href="" className="text-4xl font-semibold max-[600px]:text-2xl">
          Bhisma <span className="text-blue-500">.</span>
        </a>

        <ul className="flex items-center gap-10 max-[1024px]:hidden">
          <li>
            <a href="/" className="">
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className="">
              About
            </a>
          </li>
          <li>
            <a href="/#skills" className="">
              Skills
            </a>
          </li>
          <li>
            <a href="/#projects" className="">
              Project
            </a>
          </li>
          <li>
            <a href="/#blogs" className="">
              Blog
            </a>
          </li>
          <li>
            <a href="/#contact" className="">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="flex items-center gap-2 border border-blue-500 rounded-full py-3 px-10 max-[1024px]:hidden"
          >
            <i className="bx bxs-arrow-up-right-stroke"></i>
            <span>Contact</span>
          </a>
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
            <a href="/" className="">
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className="">
              About
            </a>
          </li>
          <li>
            <a href="/#skills" className="">
              Skills
            </a>
          </li>
          <li>
            <a href="/#projects" className="">
              Project
            </a>
          </li>
          <li>
            <a href="/#blog" className="">
              Blog
            </a>
          </li>
          <li>
            <a href="/#contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <BlogList />
      <div className="px-40 p-8 flex bg-black flex-col items-center mt-60 gap-4 max-[1200px]:p-4 max-[600px]:mt-20">
        <div>
          <a href="" className="text-4xl text-white max-[600px]:text-2xl">
            Bhisma <span className="text-blue-500">.</span>
          </a>
        </div>
        <div className="flex gap-8 justify-center max-[600px]:grid max-[600px]:grid-cols-3 max-[600px]:gap-4">
          <a href="/" className="text-lg text-white max-[600px]:text-center">
            Home
          </a>
          <a
            href="/#about"
            className="text-lg text-white max-[600px]:text-center"
          >
            About
          </a>
          <a
            href="/#skills"
            className="text-lg text-white max-[600px]:text-center"
          >
            Skills
          </a>
          <a
            href="/#projects"
            className="text-lg text-white max-[600px]:text-center"
          >
            Project
          </a>
          <a
            href="/#blogs"
            className="text-lg text-white max-[600px]:text-center"
          >
            Blog
          </a>
          <a
            href="/#contact"
            className="text-lg text-white max-[600px]:text-center"
          >
            Contact
          </a>
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

export default page;
