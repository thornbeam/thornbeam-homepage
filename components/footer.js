import { Box, Container, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Text
      mt={20}
      borderTop="1px"
      borderColor="gray"
      py={5}
      textAlign="center"
      color="gray"
      fontSize="0.9rem"
      userSelect="none"
    >
      &copy; {new Date().getFullYear()} Thornbeam, Hidetoshi Mitsuzaki. All
      Rights Reserved.
    </Text>
  );
}
