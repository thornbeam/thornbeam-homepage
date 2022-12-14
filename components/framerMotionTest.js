import { motion, AnimatePresence } from "framer-motion";
import styles from "./framerMotionTest.module.css"

const FramerMotionTest = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      ></motion.div>
    </AnimatePresence>
  );
};

export default FramerMotionTest;
