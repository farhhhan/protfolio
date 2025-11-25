import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
        }}
        className="relative h-12 w-12 flex items-center justify-center cursor-pointer"
      >
        {/* Replace with your logo image */}
        <img
          src="/favicon.ico"
          alt="Logo"
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-200"
        />
      </motion.div>
    </>
  );
}

