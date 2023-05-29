import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";


const ServiceCard = ({ title, description, index, icon }) => {
  return (
    <Tilt className="xs:w-[16rem] w-full">
      {" "}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[0.1rem] rounded-[1.25rem] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[1.25rem] py-5 px-12 min-h-[17.5rem] flex justify-evenly items-center flex-col"
        >
          {" "}
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[1.25rem] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[1rem] max-w-3xl leading-[1.8rem]"
      >
        experience working with e-commerce clients such as Mateus, Stronger,
        Xlash, and more, I specialize in JavaScript frameworks like React and
        Vue. I also have expertise in headless e-commerce platforms like CENTRA
        and integrations like Findify. My diverse background includes UX/UI
        design and international experiences. Let's discuss how I can contribute
        to your e-commerce-focused web agency and create remarkable digital
        solutions.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
