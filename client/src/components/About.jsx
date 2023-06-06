import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { projects } from "../constants";
import { styles } from "../styles";
import { cardVariants, fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";
// import Lottie from "react-lottie";
import animationData from "./../lottie/bloo-hat-3.json";
import range from "lodash/range";

export const ServiceCard = ({
  company,
  description,
  id,
  tags,
  image,
  source_code_link,
}) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [isExpanded, setIsExpanded] = useState(false);
  return (
   <AnimatePresence onExitComplete>
      {isExpanded ? (
        <motion.div
          key={id}
          onClick={() => setIsExpanded(!isExpanded)}
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout="position"
          className={` 
    expanded-card`}
        >
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
                {/* <motion.img layout="position" src={image} width="50%" height="100px" /> */}
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
        </motion.div>
      ) : (
        <motion.div
          key={id}
          onClick={() => setIsExpanded(!isExpanded)}
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout={true}
          className={`bg-[#EA5836] rounded-lg p-4 min-h-[17.5rem] min-w-[15rem] flex justify-center items-center flex-col gap-2  
           normal-card`}
        >
          <Tilt className="">
     
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, type: "spring" }}
                exit={{ opacity: 0, type: "spring" }}
                layout={true}
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  exit={{ opacity: 0 }}
                  layout="position"
                  className="bg-inherit text-[1.25rem] font-bold text-center"
                >
                  {company}
                </motion.h3>
              </motion.div>
          </Tilt>
        </motion.div>
      )}
      </AnimatePresence>
  );
};


const About = ({ aboutSectionRef }) => {


  return (
    <div ref={aboutSectionRef}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About moi</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[1rem] max-w-3xl leading-[1.8rem]"
      >
        I experience working with e-commerce clients such as Mateus, Stronger,
        Xlash, and more, I specialize in JavaScript frameworks like React and
        Vue. I also have expertise in headless e-commerce platforms like CENTRA
        and integrations like Findify. My diverse background includes UX/UI
        design and international experiences. Let's discuss how I can contribute
        to your e-commerce-focused web agency and create exisiting digital
        solutions.
      </motion.p>
      <div className="flex overflow-scroll gap-10 ">
        <LayoutGroup>
          {projects.map((project, index) => (
            <ServiceCard
              layoutId="expandable-card"
              variants={cardVariants}
              key={project.company}
              {...project}
            />
          ))}
        </LayoutGroup>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
