import styled from "@emotion/styled";
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const TitleBox = styled(Box)`
  margin: 5rem 2rem 3rem 0;
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

const ContentTitle = ({ children }) => {
  return (
    <Container maxW="container.md">
      <TitleBox>
        <TitleText>{children}</TitleText>
      </TitleBox>
    </Container>
  );
};

export default ContentTitle;
