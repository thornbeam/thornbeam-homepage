import { Box, Image, Container, Text } from "@chakra-ui/react";

const BlurTest = () => {
  return (
    <>
      <Container maxW="container.sm" mt={30}>
        <Image
          src="/artworks/jpg/2020-union_spiel-v1.jpg"
          maxW="90%"
          maxH="50vh"
          filter="grayscale(100%)"
          _hover={{ filter: "none" }}
        />
      </Container>
    </>
  );
};

export default BlurTest;
