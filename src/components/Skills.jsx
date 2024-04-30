import React from "react";
import { skills } from "../data/skills";
const Skills = () => {
  return (
    <div name="skills" className="h-screen w-full bg-[#ffffff]  text-[#a44747]">
      <div className="max-w-[1000px] w-full flex flex-col justify-center h-full mx-auto">
      
        <div >
          <p className="text-4xl font-bold inline border-b-4 border-[#a44747] text-[#eab5b5]">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill) => (
            <div key={skill.id} className="shadow-md bg-[#d0d0d0] shadow-[#eab5b5] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={skill.img} alt="" />
              <p className="my-4 uppercase">{skill.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
