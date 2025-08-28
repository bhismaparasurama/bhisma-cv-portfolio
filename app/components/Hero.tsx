"use client";
import React, { useEffect, useState } from "react";

const roles = ["Frontend Developer", "Backend Developer"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // trigger fade out
      setFade(false);

      // setelah fade out selesai → ganti teks → fade in lagi
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 500); // waktu fade out (ms)
    }, 3000); // durasi tiap kata sebelum ganti (ms)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="px-40 h-screen relative flex justify-center items-center pt-[82px] max-[1100px]:px-4 max-[600px]:h-dvh">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/background_profile.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 -z-10"></div>
      <div className="flex flex-col items-center gap-4 max-[550px]:gap-2">
        <h1 className="text-white text-9xl font-semibold text-center max-[1700px]:text-7xl max-[800px]:text-5xl max-[550px]:text-3xl max-[400px]:text-2xl">
          Bhisma Parasurama
        </h1>
        <h2
          className={`text-blue-500 text-center text-9xl font-semibold transition-opacity duration-500 max-[1700px]:text-7xl max-[800px]:text-5xl max-[550px]:text-3xl max-[400px]:text-2xl ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {roles[index]}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
