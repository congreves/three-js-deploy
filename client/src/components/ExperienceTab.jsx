import { motion } from "framer-motion";
import { useState } from "react";
import PopUp from "./PopUp";

const TabContent = ({ activeTab, experience }) => {
  const technologies = experience.technologies;
  const [open, setOpen] = useState(false);
  if (activeTab === 1) {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="bg-inherit mt-4  ">{experience.title}</h3>
        <h4 className="bg-inherit tracking-wider" style={{ margin: 0 }}>
          {experience.company_name}
        </h4>
        <div className="small-custom-button-container">
        <button
          onClick={() => setOpen(!open)}
          className="small-custom-button text-xs"
        >
          What they say 🤘
        </button>
           {open ? <PopUp experience={experience} setOpen={setOpen} /> : null}
      </div>
      </div>
    );
  } else if (activeTab === 2) {
    return (
      <ul className="mt-4 list-disc ml-2 space-y-2 text-wrap">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[0.875rem] pl-1 tracking-wider font-medium  "
          >
            {point}
          </li>
        ))}
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
      </ul>
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
          <div>
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/60"
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
