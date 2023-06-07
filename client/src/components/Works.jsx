import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants";
import { styles } from "../styles";
import { cardVariants, fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";

export const ProjectCard = ({
  company,
  description,
  id,
  tags,
  image,
  source_code_link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <>
      {isExpanded ? (
        <motion.div
            key={id}
            onClick={() => setIsExpanded(!isExpanded)}
            transition={{ layout: { duration: 1, type: "spring" } }}
            layout="position"
            className={`
            expanded-card`}
          >
            <AnimatePresence onExitComplete>
            <Tilt className="">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                exit={{ opacity: 0 }}
                layout="position"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, type: "spring" }}
                  exit={{ opacity: 0, type: "spring" }}
                  layout="position"
                  className="expanded-card-h"
                >
                  {company}
                </motion.h3>
                <p className="leading-relaxed tracking-wide">{description}</p>
                <p>
                  {tags.map((tag) => (
                    <span key={tag.name} className="text-white font-thin">
                      {" "}
                      {tag.name}{" "}
                    </span>
                  ))}
                </p>
              </motion.div>
            </Tilt>
        </AnimatePresence>
          </motion.div>
      ) : (
        <AnimatePresence onExitComplete>
          <Tilt>
            <motion.div
              key={id}
              onClick={() => setIsExpanded(!isExpanded)}
              transition={{ layout: { duration: 1, type: "spring" } }}
              layout="position"
              className={`h-[17rem] w-[17rem] card
           `}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, type: "spring" }}
                exit={{ opacity: 0, type: "spring" }}
                layout="position"
              >
                <motion.img
                  src={image}
                  alt={company}
                  width="100"
                  height="50"
                  className="card-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, type: "spring" }}
                  exit={{ opacity: 0, type: "spring" }}
                  layout="position"
                  
                />
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0 }}
                  layout="position"
                  className="bg-inherit text-[1.25rem] text-center"
                >
                  {company}
                </motion.h3>
              </motion.div>
            </motion.div>
          </Tilt>
        </AnimatePresence>
      )}
    </>
  );
};

const Works = ({ aboutSectionRef }) => {

  return (
    <>
      <motion.div
        ref={aboutSectionRef}
        variants={textVariant()}
        className="flex flex-col gap-2 mb-4"
      >
        <p className={styles.sectionSubText}>Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-[1rem] max-w-3xl leading-[1.8rem]"
        >
          Some projects of my skills
        </motion.p>
      </motion.div>
      <motion.div layout layoutRoot className="card-list ">
          {projects.map((project, index) => (
            <ProjectCard key={project.company} {...project} />
          ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "works");
