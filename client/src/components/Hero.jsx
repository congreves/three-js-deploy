import { motion } from "framer-motion";
import { me } from "../assets";
import { useState } from "react";
import { styles } from "../styles";
import { herobg } from "../assets";
const Hero = ({ scrollToAboutSection }) => {
  const [changeText, setChangeText] = useState(false);

  return (
    <section className="relative w-full mx-auto">
      <div className=" mt-16 top-[8rem] ">
        <div
          className="flex flex-col justify-center items-center p-4 border-t-2 border-black md:max-lg:border-l-2 md:max-lg:border-black bg-[image:var(--image-url)]"
          style={{ "--image-url": `url(${herobg})` }}
        >
          <motion.img
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            src={me}
            alt="me"
            width={400}
          />
          <div className="custom-button-container">
            <button
              onClick={() => setChangeText(!changeText)}
              className="custom-button text-white bg-black"
            >
              {!changeText
                ? "Hey!👋🏾 I've been sitting here all day, move me around 👆🏾"
                : "ME Up there 👆🏾👆🏾👆🏾 "}
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about" onClick={scrollToAboutSection}>
          <div className="w-[2.2rem] h-[4rem] rounded-3xl border-4  border-black flex justify-center items-start shadow  ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-black mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
