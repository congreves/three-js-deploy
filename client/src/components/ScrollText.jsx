import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function ScrollText() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });
  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  });

  const skewVelocityFactor = useTransform(
    skewVelocity,
    [-1000, 1000],
    [-30, 30]
  );

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -5 * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {/* <motion.span style={{ skew: skewVelocityFactor }}>I'm Sandy.</motion.span>
        <motion.span style={{ skew: skewVelocityFactor }}>I'm Passionated about</motion.span>
        <motion.span style={{ skew: skewVelocityFactor }}>design development</motion.span>
        <motion.span style={{ skew: skewVelocityFactor }} className="text-[#F7CA45]">(e)motions</motion.span>
        <motion.span style={{ skew: skewVelocityFactor }}>&</motion.span>
        <motion.span style={{ skew: skewVelocityFactor }}>experiences</motion.span> */}
        <motion.span style={{ skew: skewVelocityFactor }}>
        photos by me    
        </motion.span>
        <motion.span style={{ skew: skewVelocityFactor }}>
        photos by me   
        </motion.span>
        <motion.span style={{ skew: skewVelocityFactor }}>
        photos by me    
        </motion.span>
        <motion.span style={{ skew: skewVelocityFactor }} className="text-[#F7CA45]">
        photos by me   
        </motion.span>
        <motion.span style={{ skew: skewVelocityFactor }}>
          TEXT TO FILL SPACE ON LARGER SCREENS LOL
        </motion.span>
      </motion.div>
    </div>
  );
}
