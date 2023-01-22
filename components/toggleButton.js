import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion"

const ToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <IconButton
        aria-label="Toggle theme"
        colorScheme={useColorModeValue("blackAlpha", "orange")}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      />
    </motion.div>
  );
};

export default ToggleButton;
