import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const vairents = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:text-left md:mt-40 ">
      {/* desktop view  */}

      <div className=" flex-col hidden md:flex c-space">
        <motion.h1
          className="font-medium text-4xl "
          variants={vairents}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          Hi I'm Harsimran
        </motion.h1>
        <div className="flex felx-col items-start">
          <motion.p className="text-5xl font-medium text-neutral-300" variants={vairents}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}>
            A Developer <br />
            dedicated to crafting
          </motion.p>
        </div>
        <motion.div variants={vairents}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}>
          <FlipWords words={words} className=" font-bold text-white text-8xl" />
        </motion.div>
        <motion.p className="text-4xl font-medium text-neutral-300" variants={vairents}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}>
          Web solutions
        </motion.p>
      </div>
      {/* Mobile view */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium" variants={vairents}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8}}>Hi I'm Harsimran</motion.p>
        <div>
          <motion.p className="text-5xl font-black text-neutral-300" variants={vairents}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}>
            Building
          </motion.p>
          <motion.div className="font-bold text-white text-7xl" variants={vairents}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}>
            <FlipWords words={words} />
          </motion.div>
        </div>
        <motion.p className="text-4xl font-black text-neutral-300" variants={vairents}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}>
          Web Applications
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
