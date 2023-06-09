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
          <Tilt className="">
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

                <img src={image}/>
                <p className="leading-relaxed tracking-wide">{description}</p>
                <div className="flex gap-4 flex-start px-4">
                  <div className="small-custom-button-container">
                    <button
                      onClick={() =>
                        window.open("https://dkmg-mvp.netlify.app/")
                      }
                      className="small-custom-button"
                    >
                      Go to Site
                    </button>
                  </div>
                  <div className="small-custom-button-container">
                    <button
                      onClick={() =>
                        window.open("https://dkmg-mvp.netlify.app/")
                      }
                      className="small-custom-button"
                    >
                      Go to Github
                    </button>
                  </div>
                </div>
              <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (           <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
             >
               #{tag.name}
            </p>
           ))}       </div>
              </motion.div>
            )}
          </Tilt>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
