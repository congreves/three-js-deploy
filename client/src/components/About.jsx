import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import SectionWrapper from "./hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div className=" h-[35rem]" variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         className="sm:w-[22.5rem] w-full p-5 rounded-2xl card bg-[#FFF4E8]"
//         options={{ max: 45, scale: 1, speed: 450 }}
//       >
//         <div className="relative w-full h-[14.375rem]">
//           <img src={image} alt={name} className="w-full h-full object-cover" />
//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="github"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="github"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-5">
//           <h3 className=" font-bold text-[1.5rem] ">{name}</h3>
//           <p className="mt-2 text-[0.875rem]">{description}</p>
//         </div>
//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//         <div className="custom-button-container">
//           <button onClick={() => window.open("https://dkmg-mvp.netlify.app/")} className="custom-button"> Go to Site</button>
//           </div>
//       </Tilt>
//     </motion.div>
//   );
// };

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>About Moi</h2>
      </motion.div>

      <div className="w-full flex">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-[1rem] max-w-3xl leading-[1.8rem]"
      >
        I experience working with e-commerce clients such as Mateus, Stronger,
        Xlash, and more, I specialize in JavaScript frameworks like React and
        Vue. I also have expertise in headless e-commerce platforms like CENTRA
        and integrations like Findify. My diverse background includes UX/UI
        design and international experiences. Let's discuss how I can contribute
        to your company and create exisiting digital
        solutions.
      </motion.p>
          </div>
    </>
  );
};

export default SectionWrapper(About, "");
