import { Link, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function LinkItem({ href, children, ...props }) {
  return (
    <Link
      as={NextLink}
      href={href}
      py={2}
      px={4}
      borderRadius={10}
      fontSize="1.1rem"
      letterSpacing={-1}
      bg={useColorModeValue("base0", "base02")}
      _hover={{ color: useColorModeValue("#f8f4ed", "#16181d"), backgroundColor: useColorModeValue("base02", "base3") }}
      {...props}
    >
      {children}
    </Link>
  );
}
