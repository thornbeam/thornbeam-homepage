import { MenuItem, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function MenuLinkItem({ href, children, ...props }) {
  return (
    <MenuItem
      as={NextLink}
      p={2.5}
      borderRadius="5px"
      display="block"
      textAlign="center"
      fontSize="1.1rem"
      letterSpacing={-1}
      bg={useColorModeValue("base0", "base01")}
      _hover={{
        bg: useColorModeValue("base02", "base00"),
        color: "white",
      }}
      href={href}
      {...props}
    >
      {children}
    </MenuItem>
  );
}
