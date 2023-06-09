import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import { projects } from "../../constants";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { ProjectCard } from "./ProjectCard";
const ProjectList = ({ aboutSectionRef }) => {
  return (
    <>
      <AnimatePresence onExitComplete>
        <motion.div   variants={fadeIn("", "", 0.1, 1)} layout layoutScroll className="card-list ">
          {projects.map((project, index) => (
            <ProjectCard  key={project.company} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProjectList;
