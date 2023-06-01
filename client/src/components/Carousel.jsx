import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { ServiceCard } from "./About";
const cards = [1, 2, 3, 4, 5];
const cardVariants = {
  selected: {
    rotateY: 180,
    scale: 1.1,
    transition: { duration: 0.35 },
    zIndex: 10,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },
  notSelected: (i) => ({
    rotateY: i * 15,
    scale: 1 - Math.abs(i * 0.15),
    x: i ? i * 50 : 0,
    opacity: 1 - Math.abs(i * 0.15),
    zIndex: 10 - Math.abs(i),
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    transition: { duration: 0.35 },
  }),
};
const Carousel = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [{ startX, startScrollLeft, isDragging }, setDragStart] = useState({
    startX: undefined,
    startScrollLeft: undefined,
    isDragging: false,
  });
  const containerRef = useRef();
  const cardRefs = useRef(new Array());
  useEffect(() => {
    const { scrollWidth, clientWidth } = containerRef.current;
    const halfScroll = (scrollWidth - clientWidth) / 2;
    containerRef.current.scrollLeft = halfScroll;
  }, [containerRef.current]);
  const handleMouseDown = (e) => {
    setDragStart({
      startX: e.pageX - containerRef.current.offsetLeft,
      startScrollLeft: containerRef.current.scrollLeft,
      isDragging: true,
    });
  };
  const handleMouseMove = (e) => {
    if (!isDragging || selectedCard) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = startScrollLeft - walk;
  };
  const selectCard = (card) => {
    setSelectedCard(selectedCard ? null : card);

    if (card && !selectedCard) {
      cardRefs.current[card - 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };
  const handleCardMouseUp = (e, card) => {
    if (isDragging) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) < 5) selectCard(card);
    } else selectCard(card);
  };
  return (
    <div
      className="h-full w-full grid place-items-center bg-[#1C3CFA]"
      onMouseDown={handleMouseDown}
      onMouseUp={() => setDragStart((prev) => ({ ...prev, isDragging: false }))}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-full whitespace-nowrap overflow-x-auto perspective-150 scrollbar-none" ref={containerRef}>
        {services.map((service, index) => (
          <motion.div
            className="relative inline-block h-80 w-80 bg-white m-8 rounded-lg cursor-pointer"
            key={service.id}
            ref={(el) => cardRefs.current.push(el)}
            onMouseUp={(e) => handleCardMouseUp(e, service.id)}
            variants={cardVariants}
            animate={selectedCard === service ? "selected" : "notSelected"}
            custom={selectedCard ? selectedCard - service.id : 0}
          >
          <ServiceCard
            index={index}
            {...service}
          />
     
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;