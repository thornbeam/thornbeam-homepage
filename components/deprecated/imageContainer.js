import { Box, Container, Text, Image } from "@chakra-ui/react";

const ImageContainer = ({ src, maxH, maxW, children, ...props }) => {
  return (
    <Container maxW="container.sm" mt={24} {...props}>
      <Box display="flex" flexDirection="column" alignItems="left">
        {maxH && maxW && (
          <Image src={src} maxH={maxH} maxW={maxW} fit="contain" align="left" />
        )}
        <Text mt={5} fontSize="0.9rem" fontStyle="italic">
          {children}
        </Text>
      </Box>
    </Container>
  );
};

export default ImageContainer
