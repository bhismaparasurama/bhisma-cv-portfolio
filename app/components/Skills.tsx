import { skills, tools } from "@/assets/assets";
import Image from "next/image";
import React from "react";


const Skills = () => {
  return (
    <div id="skills" className="scroll-mt-[180px] px-40 flex flex-col mt-60 gap-10 max-[1200px]:px-4 max-[600px]:mt-20">
      <div>
        <h1 className="text-center font-semibold text-5xl max-[600px]:text-3xl">
          MY SKILLS
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10 max-[900px]:grid-cols-2 max-[700px]:grid-cols-1">
        {skills.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-8 shadow-[0_4px_20px_rgba(0_0,_0,_0.09)] rounded-3xl max-[700px]:h-80"
          >
            <i
              className={`${icon} text-4xl text-white p-4 bg-blue-500 w-fit rounded-3xl`}
            ></i>
            <h1 className="text-2xl font-medium">{title}</h1>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-10 mt-10 max-[900px]:flex-col-reverse">
        <div className="grid grid-cols-5 gap-10 max-[700px]:grid-cols-2">
          {tools.map(({ img }, index) => (
            <div
              key={index}
              className="shadow-[0_4px_20px_rgba(0_0,_0,_0.09)] p-15 rounded-3xl max-[1600px]:p-8"
            >
              <Image src={img} alt="" className="w-full" />
            </div>
          ))}
        </div>
        <div className="bg-black rounded-3xl flex justify-center items-center max-[900px]:bg-transparent max-[900px]:items-start max-[900px]:justify-start">
          <h1 className="text-white rotate-90 text-4xl font-semibold text-center max-[1300px]:text-base max-[900px]:rotate-0 max-[900px]:text-black max-[900px]:text-left max-[900px]:font-normal">
            TOOLS & APPLICATION
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
