"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Props = {};

const About = (props: Props) => {
  // Tambahkan state untuk slideshow
  const [currentIndex, setCurrentIndex] = useState(0);

  // Daftar gambar yang mau ditampilkan
  const images = [
    assets.about_1,
    assets.about_2,
    assets.about_3,
    assets.about_4,
    assets.about_5,
    assets.about_6,
    assets.about_7,
  ];

  // Ganti gambar otomatis tiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div id="about" className="scroll-mt-[180px] px-40 mt-60 flex flex-col gap-10 max-[1200px]:px-4 max-[600px]:mt-20">
      <div className="w-full flex gap-20 items-center max-[1000px]:flex-col max-[1000px]:gap-10">
        <div className="w-[35%] max-[1000px]:w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // penting agar animasi dijalankan tiap ganti gambar
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full rounded-3xl"
              />
            </motion.div>
          </AnimatePresence>
          {/* <Image src={assets.about_5} alt="" className="w-full rounded-3xl" /> */}
        </div>
        <div className="w-[calc(65%-5rem)] flex flex-col gap-8 max-[1000px]:w-full max-[1000px]:items-center">
          <h1 className="text-5xl font-semibold max-[600px]:text-3xl">
            ABOUT ME
          </h1>
          <p className="max-[1000px]:text-justify">
            Hello, my name is Bhisma Parasurama a Frontend Developer with a
            strong passion for creating modern, responsive, and user-friendly
            websites. With solid experience in React, Next.js, and Tailwind CSS,
            I specialize in transforming ideas into seamless digital experiences
            that balance design and functionality. My focus is on building
            accessible, high-performance applications that not only look great
            but also deliver real value for users. I pay close attention to
            details, ensuring every project I work on meets professional
            standards while maintaining clean and maintainable code. Beyond
            coding, I enjoy exploring UI/UX principles to better understand how
            design impacts user behavior. This helps me collaborate effectively
            with designers and backend developers, bridging the gap between
            design concepts and technical implementation. My mission is simple
            to craft digital products that are intuitive, visually engaging, and
            impactful. I believe every line of code should contribute to a
            meaningful experience and I strive to bring that philosophy into
            every project I build.
          </p>
          <div className="flex items-center justify-between border border-blue-500 p-8 rounded-3xl max-[1500px]:hidden">
            <ul className="flex flex-col gap-4">
              <li className="font-medium">
                Full Name :{" "}
                <span className="font-normal">Putu Bhisma Parasurama</span>
              </li>
              <li className="font-medium">
                Location :{" "}
                <span className="font-normal">
                  Br Camenggaon, Celuk, Sukawati
                </span>
              </li>
              <li className="font-medium">
                My Birth : <span className="font-normal">27 November 2007</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-medium">
                My Job : <span className="font-normal">Student</span>
              </li>
              <li className="font-medium">
                Email :{" "}
                <span className="font-normal">
                  bhismaparasurama2023@gmail.com
                </span>
              </li>
              <li className="font-medium">
                Phone : <span className="font-normal">+6281529575490</span>
              </li>
            </ul>
          </div>
          <a
            href="/my-resume.pdf"
            target="_blank"
            className="py-3 px-6 text-white bg-blue-500 rounded-full flex items-center gap-2 w-fit"
          >
            <i className="bx bx-arrow-down-circle"></i>
            My Resume
          </a>
        </div>
      </div>
      <div className="items-center justify-between border border-blue-500 p-8 rounded-3xl hidden max-[1500px]:flex max-[600px]:flex-col max-[600px]:gap-4 max-[600px]:items-start max-[600px]:p-2">
        <ul className="flex flex-col gap-4">
          <li className="font-medium max-[500px]:text-sm">
            Full Name :{" "}
            <span className="font-normal">Putu Bhisma Parasurama</span>
          </li>
          <li className="font-medium max-[500px]:text-sm">
            Location :{" "}
            <span className="font-normal">Br Camenggaon, Celuk, Sukawati</span>
          </li>
          <li className="font-medium max-[500px]:text-sm">
            My Birth : <span className="font-normal">27 November 2007</span>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="font-medium max-[500px]:text-sm">
            My Job : <span className="font-normal">Student</span>
          </li>
          <li className="font-medium max-[500px]:text-sm">
            Email :{" "}
            <span className="font-normal">bhismaparasurama2023@gmail.com</span>
          </li>
          <li className="font-medium max-[500px]:text-sm">
            Phone : <span className="font-normal">+6281529575490</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
