import React from "react";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const PopUp = ({ experience, index, setOpen }) => {
  return (
    <div className="bg-[#FFBB01] text-black bottom-[5rem]  left-[-1rem] absolute shadow rounded-xl px-4 py-8 z-10 w-full">
      <div className="flex justify-between">
        {" "}
        <p className=" text-lg text-[3rem]">"</p>
        <button className="small-custom-button" onClick={() => setOpen(!open)}>
          x
        </button>
      </div>

      <div className="mt-1">
        <p className="tracking-wider text-[1rem]">{experience.testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className=" font-medium text-[0.875rem]">
              <span className="">@</span> {experience.name}
            </p>
            <p className="mt-1  text-[0.5rem]">
              {experience.designation} of {experience.company}
            </p>
          </div>
          <img
            src={experience.image}
            alt={`feedback-by-${experience.name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
