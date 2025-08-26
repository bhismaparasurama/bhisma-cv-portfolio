import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="px-40 p-8 flex bg-black flex-col items-center mt-60 gap-4 max-[1200px]:p-4 max-[600px]:mt-20">
      <div>
        <a href="" className="text-4xl text-white max-[600px]:text-2xl">
          Bhisma <span className="text-blue-500">.</span>
        </a>
      </div>
      <div className="flex gap-8 justify-center max-[600px]:grid max-[600px]:grid-cols-3 max-[600px]:gap-4">
        <a href="#" className="text-lg text-white max-[600px]:text-center">
          Home
        </a>
        <a href="#about" className="text-lg text-white max-[600px]:text-center">
          About
        </a>
        <a
          href="#skills"
          className="text-lg text-white max-[600px]:text-center"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-lg text-white max-[600px]:text-center"
        >
          Project
        </a>
        <a href="#blogs" className="text-lg text-white max-[600px]:text-center">
          Blog
        </a>
        <a
          href="#contact"
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
  );
};

export default Footer;
