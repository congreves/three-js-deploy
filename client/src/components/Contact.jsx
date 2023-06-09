import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import SectionWrapper from "./hoc/SectionWrapper";
import { fadeIn, slideIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { github, insta, linkd } from "../assets";

// UctaQY5oJDAwTZTId
// template_58ufs6h
// service_ig1ttsq
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_ig1ttsq",
        "template_58ufs6h",
        {
          from_name: form.name,
          to_name: "Sandy",
          from_email: form.email,
          to_email: "congreves3@gmail.com",
          message: form.message,
        },
        "UctaQY5oJDAwTZTId"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully! I'll get back to you soon.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Message failed to send.");
        }
      );
  };

  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 500 }}
      className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] 2xl:max-w-[50vw] mx-auto"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.04, 0.9)}
        className="flex-[0.75] bg-[#F7CA45] p-8 rounded-2xl  "
      >
        <p className={`${styles.sectionSubText} `}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} + `}>🤝🏾 Connect</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className=" font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#FFF4E8] font-[500] py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none "
            />
          </label>
          <label className="flex flex-col">
            <span className=" font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[#FFF4E8]  font-[500] py-4 px-6 placeholder:text-grey rounded-lg outline-none border-none "
            />
          </label>
          <label className="flex flex-col">
            <span className=" font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-[#FFF4E8] font-[500] py-4 px-6 placeholder:text-grey  rounded-lg outline-none border-none "
            />
          </label>
          <button className="custom-button bg-white font-black" type="submit">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(Contact, "contact");
