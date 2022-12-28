import styled from "@emotion/styled";
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const TitleBox = styled(Box)`
  margin: 0 2rem 3rem 0;
  display: flex;
`;

const TitleText = styled(Text)`
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  padding-bottom: 3px;
  border-bottom: 3px solid grey;
  user-select: none;
`;

const ContentTitle = ({ children, mt="5rem"}) => {
  return (
    <Container maxW="container.md" mt={mt}>
      <TitleBox>
        <TitleText>{children}</TitleText>
      </TitleBox>
    </Container>
  );
};

export default ContentTitle;
