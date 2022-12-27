import { Box, Link, Text, MenuItem, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function MenuLinkItem({ href, children, ...props }) {
  return (
    <MenuItem
      p={2.5}
      borderRadius="5px"
      display="block"
      textAlign="center"
      bg={useColorModeValue("base0", "base01")}
      _hover={{ bg: useColorModeValue("base01", "base00"), color: "white" }}
    >
      <Link
        as={NextLink}
        href={href}
        fontSize="1.1rem"
        letterSpacing={-1}
        _hover={{ textDecoration: "none" }}
        {...props}
      >
        {children}
      </Link>
    </MenuItem>
  );
}
