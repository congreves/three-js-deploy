import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { projects } from "../../constants";
import { styles } from "../../styles";
import { cardVariants, fadeIn, textVariant } from "../../utils/motion";


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
      setIsExpanded(!isExpanded)
   }
  return (
    <>
      <AnimatePresence onExitComplete>
        <motion.div
          key={id}
          onClick={() => disableScroll()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
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
                <p>
                  {tags.map((tag) => (
                    <span key={tag.name} className="text-white font-thin">
                      {" "}
                      {tag.name}{" "}
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
      <AnimatePresence onExitComplete>
        <motion.div layout layoutScroll className="card-list ">
          {projects.map((project, index) => (
            <ProjectCard key={project.company} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Works;
