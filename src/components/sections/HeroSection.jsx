import React from "react";
import heroImg from "../../assets/heroImg.png";
import heroImage from "../../assets/heroimage.png";
import { motion } from "motion/react";
import { fadeRight, fadeUp } from "./../animations/fade";
import { scaleHover } from "../animations/scale";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 relative bg-[#FBCEDD]/60 overflow-hidden">
      
      {/* background image */}
      <img
        src={heroImg}
        className="absolute bottom-0 left-0 lg:-bottom-10 w-full "
      />

      <div className="grid lg:grid-cols-2 items-center gap-10 py-12 md:py-20 text-center lg:text-left">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-500 leading-tight">
            Glow Naturally. <br className="hidden sm:block"/> Shine Confidently.
          </h1>

          <p className="text-sm md:text-base text-gray-700 max-w-md mx-auto lg:mx-0">
            Experience smooth, glowing and healthy skin with our premium
            skincare formula. Say goodbye to dull skin and hello to glowing
            confidence.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.button
              {...scaleHover}
              className="bg-[#F6339A] px-6 py-3 rounded-xl font-semibold text-white w-full sm:w-auto cursor-pointer"
            >
              Buy Now
            </motion.button>

            <motion.button
              {...scaleHover}
              className="border border-pink-500 text-pink-500 px-6 py-3 rounded-xl w-full sm:w-auto cursor-pointer"
            >
              View Product
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          animate="visible"
          className="relative flex justify-center"
        >
          <img
            src={heroImage}
            className="w-2/3 sm:w-1/2 md:w-2/3 lg:w-3/4 bg-[#F6339A] p-3 rounded-full"
          />

          {/* FLOATING CARD */}
          <motion.div
            variants={fadeRight()}
            initial="hidden"
            animate="visible"
            className="absolute bg-pink-500 text-white w-[70%] sm:w-[60%] md:w-[50%] shadow-xl h-auto right-2 md:right-0 -top-6 md:-top-8 rounded-xl
            [clip-path:polygon(0_14%,100%_12%,100%_75%,75%_75%,32%_97%,44%_75%,0%_75%)]
            pt-6 pb-10 pl-3 text-xs sm:text-sm"
          >
            <ul className="space-y-1">
              <li>🌿 100% Natural Ingredients</li>
              <li>💧 Deep Skin Hydration</li>
              <li>🛡️ Safe for All Skin Types</li>
              <li>🚫 No Harmful Chemicals</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;