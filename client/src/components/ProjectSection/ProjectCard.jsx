import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { github } from "../../assets";

export const ProjectCard = ({
  company,
  description,
  id,
  tags,
  image,
  source_code_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  function disableScroll() {
    setIsExpanded(!isExpanded);
  }
  return (
    <>
      <AnimatePresence onExitComplete>
        <motion.div
          key={id}
          onClick={() => disableScroll()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            layout: {
              duration: 1,
              type: "spring",
            },
          }}
          exit={{ opacity: 0 }}
          layout
          className={`${isExpanded ? "expanded-card" : "card"}`}
        >
          <Tilt className="">
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              exit={{ opacity: 0, type: "spring" }}
              layout="position"
              className="expanded-card-h"
            >
              {company}
            </motion.h4>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                exit={{ opacity: 0, type: "spring" }}
                layout="position"
              >
                <p className="leading-relaxed tracking-wide">{description}</p>
                <motion.div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="custom-button-container"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </motion.div>
                <motion.div className="custom-button-container">
                  {" "}
                  <button
                    onClick={() => window.open("https://dkmg-mvp.netlify.app/")}
                    className="custom-button"
                  >
                    {" "}
                    Go to Site
                  </button>
                </motion.div>
                <p>
                  {tags.map((tag) => (
                    <span key={tag.name} className="text-white font-thin">
                      {" "}
                      # {tag.name}{" "}
                    </span>
                  ))}
                </p>
              </motion.div>
            )}
          </Tilt>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { github } from "../assets";
// import SectionWrapper from "./hoc/SectionWrapper";
// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div className=" h-[35rem]" variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         className="sm:w-[22.5rem] w-full p-5 rounded-2xl card bg-[#FFF4E8]"
//         options={{ max: 45, scale: 1, speed: 450 }}
//       >
//         <div className="relative w-full h-[14.375rem]">
//           <img src={image} alt={name} className="w-full h-full object-cover" />
//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="github"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="github"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-5">
//           <h3 className=" font-bold text-[1.5rem] ">{name}</h3>
//           <p className="mt-2 text-[0.875rem]">{description}</p>
//         </div>
//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//         <div className="custom-button-container">
//           <button onClick={() => window.open("https://dkmg-mvp.netlify.app/")} className="custom-button"> Go to Site</button>
//           </div>
//       </Tilt>
//     </motion.div>
//   );
// };
