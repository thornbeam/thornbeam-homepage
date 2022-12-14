import { motion, AnimatePresence } from "framer-motion";

const ButtonAnimation = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ButtonAnimation;
