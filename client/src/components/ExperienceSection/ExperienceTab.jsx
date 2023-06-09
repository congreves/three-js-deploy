import { motion } from "framer-motion";
import { useState } from "react";


const TabContent = ({ activeTab, experience }) => {
  const technologies = experience.technologies;

  if (activeTab === 1) {
    return (
      <div className="mt-4 flex flex-col gap-2">
        <h4 className="bg-inherit tracking-wider text-slate-200" >
          {experience.company_name}
        </h4>
        <h3 className="bg-inherit ">{experience.title}</h3>
      </div>
    );
  } else if (activeTab === 2) {
    return (
      <ul className="mt-4 list-disc ml-2 space-y-2 text-wrap">
        <div className="flex gap-4 mb-4 flex-wrap">
          {technologies.map((tech) => (
            <img
              className="bg-white p-0.5 rounded-full object-contain"
              key={tech.name}
              src={tech.icon}
              width="25px"
              height="25px"
            />
          ))}
        </div>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[0.875rem] pl-1 tracking-wider font-medium  "
          >
            {point}
          </li>
        ))}
      </ul>
    );
    return <div>No content to display</div>;
  }else if (activeTab === 3) {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      exit={{ opacity: 0, type: "spring" }}
      layout="position"
      className="mt-1"
    >
      <motion.p layout="position" className="tracking-wider text-[1rem]">
       " {experience.testimonial} "
      </motion.p>

      <motion.div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className=" font-medium text-[0.875rem]">
            <span className="">@</span> {experience.name}
          </p>
          <p className="mt-1  text-[0.5rem]">
            {experience.designation} of {experience.company}
          </p>
        </div>
        <img
          src={experience.image}
          alt={`feedback-by-${experience.name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </motion.div>
    </motion.div>
    );
    return <div>No content to display</div>;
  }

};

function ExperienceTab({ experience }) {
  const tabs = experience.tabs;
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex gap-2 flex-col">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <div key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/60 underline"
              } relative rounded-full px-2 py-1.5 text-sm font-medium text-white transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-3 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          </div>
        ))}
      </div>
      <TabContent activeTab={activeTab} experience={experience} />
    </div>
  );
}

export default ExperienceTab;
