import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import { projects } from "../../constants";
import { styles } from "../../styles";
import { cardVariants, fadeIn, textVariant } from "../../utils/motion";
import { ProjectCard } from "./ProjectCard";
import { fadeIn } from "../../utils/motion";
import { ProjectCard } from "./ProjectCard";
const ProjectList = ({ aboutSectionRef }) => {
  return (
    <>
      <AnimatePresence onExitComplete>
        <motion.div   variants={fadeIn("", "", 0.1, 1)} layout layoutScroll className="card-list ">
          {projects.map((project, index) => (
            <ProjectCard key={project.company} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProjectList;
