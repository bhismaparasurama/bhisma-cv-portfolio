import { projects } from "@/assets/assets";
import Image from "next/image";
import React from "react";

type Props = {};

const Project = (props: Props) => {
  return (
    <div id="projects" className="scroll-mt-[180px] px-40 flex flex-col mt-60 gap-10 max-[1200px]:p-4 max-[600px]:mt-20">
      <div className="">
        <h1 className="text-center text-5xl font-semibold max-[600px]:text-3xl">
          MY PROJECT
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-10 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1">
        {projects.map(({ img, title, tools, description, code, demo }, index) => (
          <div
            key={index}
            className="p-8 shadow-[0_4px_20px_rgba(0_0,_0,_0.09)] rounded-3xl flex flex-col gap-4 max-[700px]:p-4"
          >
            {/* Image */}
            <div className="">
              <Image src={img} alt={title} className="w-full" />
            </div>

            <div className="flex flex-col gap-4">
              {/* Title */}
              <h2 className="text-xl font-semibold">{title}</h2>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-500 font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <a
                href={code}
                className="flex items-center gap-2 py-2 px-4 bg-black rounded-full text-white"
              >
                <i className="bxl bx-github"></i>
                Source Code
              </a>
              <a
                href={demo}
                className="flex items-center gap-2 py-2 px-4 bg-blue-500 rounded-full text-white"
              >
                <i className="bx bx-play-circle"></i>
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
