"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [isScroll, setIsScroll] = useState(false);
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });

  return (
    <nav
      className={`w-full fixed top-0 right-0 left-0 px-40 py-4 flex items-center justify-between z-50 max-[1200px]:px-4 transition duration-300 ${
        isScroll ? "bg-white shadow-sm " : ""
      }`}
    >
      <a
        href=""
        className={`text-4xl font-semibold max-[600px]:text-2xl ${
          isScroll ? "text-black" : "text-white"
        }`}
      >
        Bhisma <span className="text-blue-500">.</span>
      </a>

      <ul className="flex items-center gap-10 max-[1024px]:hidden">
        <li>
          <a href="#" className={` ${isScroll ? "text-black" : "text-white"}`}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={` ${isScroll ? "text-black" : "text-white"}`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={` ${isScroll ? "text-black" : "text-white"}`}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={` ${isScroll ? "text-black" : "text-white"}`}
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#blogs"
            className={` ${isScroll ? "text-black" : "text-white"}`}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={` ${isScroll ? "text-black" : "text-white"}`}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className={`flex items-center gap-2 border border-blue-500 rounded-full py-3 px-10  max-[1024px]:hidden ${
            isScroll ? "text-black" : "text-white"
          }`}
        >
          <i className="bx bxs-arrow-up-right-stroke"></i>
          <span>Contact</span>
        </a>
        <button className="hidden max-[1024px]:flex" onClick={openMenu}>
          <i
            className={`bx bxs-menu-right text-3xl ${
              isScroll ? "text-black" : "text-white"
            }`}
          ></i>
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
          <a href="#" className="">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="">
            Project
          </a>
        </li>
        <li>
          <a href="#blogs" className="">
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" className="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
