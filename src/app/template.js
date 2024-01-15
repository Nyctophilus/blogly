"use client";
import { motion } from "framer-motion";

const Template = ({ children }) => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
export default Template;
