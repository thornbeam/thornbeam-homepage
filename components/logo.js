import { HStack, Link, Image, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo({ href }) {
  const logoImage = `/logo${useColorModeValue("-light", "-dark")}.svg`;
  return (
    <Link as={NextLink} href={href} _hover={{ textDecoration: "none" }}>
      <HStack spacing="10px" align="center">
        <Image
          src={logoImage}
          alt="Thornbeam Logo"
          boxSize="35px"
          objectFit="cover"
        />
        <Text
          fontFamily="Roboto Slab, serif"
          fontWeight="bold"
          fontSize="20px"
          letterSpacing="-1px"
        >
          Thornbeam
        </Text>
      </HStack>
    </Link>
  );
}
