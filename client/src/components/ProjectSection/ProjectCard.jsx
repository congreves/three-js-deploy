import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { github } from "../../assets";

export const ProjectCard = ({
  company,
  description,
  id,
  tags,
  image,
  source_code_link,
  technologies,
  github_link,
  delivery,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  function disableScroll() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <AnimatePresence onExitComplete>
        <motion.div
          key={id}
          onClick={() => disableScroll()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            layout: {
              duration: 1,
              type: "spring",
            },
          }}
          exit={{ opacity: 0 }}
          layout
          className={`${isExpanded ? "expanded-card" : "card"}`}
        >
          <Tilt
            className=""
            options={{
              max: 5,
              scale: 0.5,
              speed: 0.5,
              easing: "cubic-bezier(.03,.98,.52,.99)",
            }}
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              exit={{ opacity: 0, type: "spring" }}
              layout="position"
              className="expanded-card-h"
            >
              {company}
            </motion.h4>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                exit={{ opacity: 0, type: "spring" }}
                layout="position"
              >
                <img
                  src={image}
                  className="min-w-[17rem] h-auto] lg:max-w-[40rem]"
                />
                <div className="flex flex-col gap-2 p-4">
                  <span className="leading-relaxed tracking-wider text-[0.9rem] font-bold">
                    Client need:
                  </span>
                  <span className="leading-relaxed tracking-wide text-[0.9rem] font-medium">
                    {description}
                  </span>
                  <span className="leading-relaxed tracking-wide text-[0.9rem]  font-bold ">
                    Delivery:
                  </span>
                  <span className="leading-relaxed tracking-wide text-[0.9rem] font-medium ">
                    {delivery}
                  </span>
                </div>
                <div className="flex gap-4 flex-start px-4">
                  <div className="small-custom-button-container">
                    <button
                      onClick={() => window.open(source_code_link)}
                      className="small-custom-button"
                    >
                      Go to Site
                    </button>
                  </div>
                  <div className="small-custom-button-container">
                    <button
                      onClick={() => window.open(github_link)}
                      className="small-custom-button"
                    >
                      Go to Github
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </Tilt>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
