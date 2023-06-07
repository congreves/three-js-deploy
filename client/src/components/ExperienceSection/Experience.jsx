import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../styles";
import { experiences } from "../../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../../utils/motion";
import ExperienceTab from "./ExperienceTab";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: experience.bg,
        color: "#FFF4E8",
        borderRadius: "20px",
        padding: "20px",
      }}
      contentArrowStyle={{ borderRight: "10px solid #000" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        backgroundColor: "#000",
        color: "#000",
        border: "2px solid #000",
      }}
      icon={
        <div className="flex justify-center items-center  w-full h-full  filter-none">
          <img
            src={experience.image}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <ExperienceTab experience={experience}/>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
  

      <div className="mt-10 flex flex-col ">
      <motion.div variants={textVariant()} className="mb-4">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Curriculum Vitae 👣</h2>
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
