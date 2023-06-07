import React from "react";
import { fadeIn } from "../../utils/motion";
import { AnimatePresence, motion } from "framer-motion";

const PopUp = ({ experience, setOpen }) => {
  return (
    <AnimatePresence onExitComplete>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          layout: {
            duration: 1,
            type: "spring",
          },
        }}
        exit={{ opacity: 0 }}
        layout="position"
        className=" fixed bg-[#FFBB01] text-black inset-x-0 inset-y-40 shadow rounded-xl px-4 py-8 z-10 w-full"
      >
        <motion.div layout className="flex justify-between">
          {" "}
          <p className=" text-lg text-[3rem]">"</p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              layout: {
                duration: 1,
                type: "spring",
              },
            }}
            exit={{ opacity: 0 }}
            className="small-custom-button"
            onClick={() => setOpen(!open)}
          >
            x
          </motion.button>
        </motion.div>

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
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUp;
