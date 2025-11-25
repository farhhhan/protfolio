import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Image from "next/image";

const Startup = (props) => {
  let WidthBy2 = 0;
  let HeightBy2 = 0;
  let greaterThanSmall = false;

  if (typeof window !== "undefined") {
    if (window.innerWidth > 768) {
      WidthBy2 = window.innerWidth / 2 - 48 - 20;
      HeightBy2 = window.innerHeight / 2 - 44;
      greaterThanSmall = true;
    } else {
      WidthBy2 = window.innerWidth / 2 - 28;
      HeightBy2 = window.innerHeight / 2 - 40;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ opacity: { delay: 4.9, duration: 0 } }}
      className="absolute h-full w-full flex justify-center items-center bg-StartupBackground"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{
          opacity: [0, 1, 1, 0, 1],
          scale: [0.5, 1.2, 1, 1, greaterThanSmall ? 0.57 : 0.5],
          rotate: [0, 0, 360, 360, 360],
          x: [0, 0, 0, 0, -WidthBy2],
          y: [0, 0, 0, 0, -HeightBy2]
        }}
        transition={{
          opacity: { times: [0, 0.3, 0.6, 0.8, 1], duration: 5 },
          scale: { times: [0, 0.3, 0.6, 0.9, 1], duration: 5 },
          rotate: { delay: 1, duration: 2 },
          x: { duration: 0.5, delay: 4.5 },
          y: { duration: 0.5, delay: 4.5 },
        }}
        className="relative h-32 w-32 flex justify-center items-center"
      >
        {/* Replace "/favicon.ico" with your image path */}
        {/* You can use: "/favicon.ico", "/logo.png", "/your-logo.svg", etc. */}
        <img
          src="/favicon.ico"
          alt="Loading Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default Startup;
