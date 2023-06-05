import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "./hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
import PopUp from "./PopUp";
import { useState } from "react";

const ExperienceCard = ({ experience, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1C3CFA",
        color: "#fff",
        borderRadius: "20px",
        padding: "20px",
      }}
      contentArrowStyle={{ borderRight: "10px solid #000" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        backgroundColor: "white",
        color: "#000",
        border: "2px solid #000",
      }}
      icon={
        <div className="flex justify-center items-center  w-full h-full  filter-none">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="bg-[#1C3CFA]">
       <h3 className="bg-inherit  text-[1.5rem] font-bold ">
          {experience.title}
        </h3>
        <h4
          className="bg-inherit text-[1rem] font- tracking-wider"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </h4>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2 ">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[0.875rem] pl-1 tracking-wider font-medium"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="small-custom-button-container">
        <button
          onClick={() => setOpen(!open)}
          className="small-custom-button text-xs"
        >
          What they say 🤘
        </button>
           {open ? <PopUp experience={experience} index={index} setOpen={setOpen} /> : null}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
  

      <div className="mt-10 flex flex-col  rounded-xl">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              index={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
