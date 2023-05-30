import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "./hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  name,
  image,
  testimonial,
  designation,
  index,
  company,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="w-full bg-black-200 p-5 rounded-3xl xs:w-[20rem]"
    >
      <p className="text-white font-black text-[3rem]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[1rem]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[0.875rem]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[0.5rem]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[1.25rem]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[18.75rem]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What people say about me</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} {...testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
