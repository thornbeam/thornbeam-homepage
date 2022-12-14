import { Container, Text } from "@chakra-ui/react";

const ContentText = ({ children, ...props }) => {
  return (
    <Container maxW="container.sm" mb={3}>
      <Text {...props}>{children}</Text>
    </Container>
  );
};

export default ContentText;
