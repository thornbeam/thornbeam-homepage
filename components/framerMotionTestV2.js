import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";

const FramerMotionTestV2 = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <Box borderWidth={50} borderColor="black"></Box>
    </motion.div>
  );
};

export default FramerMotionTestV2
