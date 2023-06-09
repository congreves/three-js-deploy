import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "./hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <div id="#about">
      <motion.div variants={textVariant()} className="mb-4">
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>💃 About Moi </h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className="w-full flex">
        <motion.p className="text-[1rem] max-w-3xl leading-[1.8rem] tracking-wide">
          I experience working with e-commerce clients such as Mateus, Stronger,
          Xlash, and more, I specialize in JavaScript frameworks like React and
          Vue. I also have expertise in headless e-commerce platforms like
          CENTRA and integrations like Findify. My diverse background includes
          UX/UI design and international experiences. Let's discuss how I can
          contribute to your company and create exisiting digital solutions.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
