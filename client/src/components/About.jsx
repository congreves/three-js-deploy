import { motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { services } from "../constants";
import { styles } from "../styles";
import { cardVariants, fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";
import Lottie from "react-lottie";
import animationData from "./../lottie/bloo-hat-3.json";
import range from "lodash/range";
import Carousel from "./Carousel";

export const ServiceCard = ({ title, description, index, icon }) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Tilt className="">
      {" "}
      <div
      >
        <div
          className="bg-[#EA5836] py-5  min-h-[17.5rem] flex justify-center items-center flex-col"
        >
          <Lottie options={defaultOptions} width={200} />

          <h3 className="bg-inherit text-[1.25rem] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};
const About = () => {
  const [selectedCard, setSelectedCard] = useState(false);
 

  return (
    <>
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
    </>
  );
};

export default SectionWrapper(About, "about");
