import { motion } from "framer-motion";

const FramerMotionTestV3 = ({ children }) => {
  return <motion.div whileTap={{ scale: 0.9 }}>{children}</motion.div>;
};

export default FramerMotionTestV3;
