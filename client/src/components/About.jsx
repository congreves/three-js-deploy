import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, insta, linkd } from "../assets";
import SectionWrapper from "./hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col gap-4">
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>💃 About Moi </h2>

      </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" max-w-3xl leading-[1.8rem] tracking-wide mt-4 "
        >
          I experience working with e-commerce clients such as Mateus, Stronger,
          Xlash, and more, I specialize in JavaScript frameworks like React and
          Vue. I also have expertise in headless e-commerce platforms like
          Storyblok, cloud services like Centra.. My diverse background includes
          UX/UI design and international experiences. Let's discuss how I can
          contribute to your company and create exisiting digital solutions.
        </motion.p>

      <motion.div   variants={fadeIn("", "", 0.1, 1)} className="pt-4 flex gap-4 mb-4 ">
        <motion.div
          onClick={() => window.open("https://github.com/congreves", "_blank")}
          className=" link-button-container cursor-pointer"
        >
          <button className="link-button">
            <img src={github} alt="github" className="object-contain" />
          </button>
        </motion.div>
        <motion.div
          onClick={() =>
            window.open("https://www.linkedin.com/in/sandycongreve/", "_blank")
          }
          className="link-button-container cursor-pointer"
        >
          <button className="link-button">
            <img src={linkd} alt="linkedin" className="object-contain" />
          </button>
        </motion.div>
        <motion.div
          onClick={() =>
            window.open(
              "https://www.instagram.com/sandysonrisa/?hl=en",
              "_blank"
            )
          }
          className="link-button-container cursor-pointer "
        >
          <button className="link-button">
            <img src={insta} alt="instagram" className=" object-contain " />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
