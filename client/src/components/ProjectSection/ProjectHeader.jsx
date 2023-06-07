import React from "react";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../../styles";

const ProjectHeader = ({aboutSectionRef}) => {
  return (
    <>
      <motion.div
        ref={aboutSectionRef}
        variants={textVariant()}
        className="flex flex-col gap-2 "
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
    </>
  );
};

export default SectionWrapper(ProjectHeader, "works");
