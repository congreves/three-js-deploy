import { motion } from "framer-motion";
import { styles } from "../styles";
import { StarsCanvas } from "./canvas";
import { me } from "../assets";
import { useState } from "react";
// import { ComputersCanvas } from "./canvas";
const Hero = () => {
  const [changeText, setChangeText] = useState(false);

  return (
    <section className="relative w-full mx-auto">
      <div className="grid-halves mt-16 top-[8rem] ">
      <div
        className={`${styles.paddingX} mt-20 pb-8 inset-0  max-w-7xl m-auto flex-row items-start gap-5 hidden lg:flex `}
      >
        <div>
          <h1 className={`${styles.heroHeadText} `}>
            Hi, I'm <span className="text-[#F7CA45] font-medium">Sandy!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Passionated about{" "}
            <span className=" ">design development</span> ,
            <br className="sm:block hidden" />
            <span className=" ">motion</span> & 
            <span className=""> experiences</span>.
          </p>
  
        </div>
      </div>
      <div  className="flex flex-col justify-center items-center p-4 border-t-2 border-black md:max-lg:border-l-2 md:max-lg:border-black bg-[url('https://cdn.dribbble.com/users/1433291/screenshots/15078415/media/d10c93b8e835c6cfcd473a980cdb6203.jpg')]">
        <motion.img drag  dragElastic={0.1}src={me} alt="me" width={400}/>
        <div className="custom-button-container">
          <button onClick={() => setChangeText(!changeText)} className="custom-button">{ !changeText ? 'Hey Im Sandy! Ive been sitting here all day, move me around 👆🏾' : 'Not the button silly ME up there 👆🏾👆🏾👆🏾 '}</button>
          </div>
      </div>
      </div>
      <div className="mt-6 xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[2.2rem] h-[4rem] rounded-3xl border-4 border-black flex justify-center items-start shadow  ">
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
