import Article from "./layouts/article";
import NextLink from "next/link";
import {
  Button,
  Container,
  Box,
  Heading,
  Text,
  Image,
  Link,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import ContentTitle from "../components/contentTitle";
import ContentText from "../components/contentText";
import LinkItem from "../components/linkItem";
import BioContent from "../components/bioContent";

const ColorBox = ({ ...props }) => {
  return <Box h="32px" w="32px" {...props}></Box>;
};

export default function About() {
  return (
    <Article>
      <Container maxW="container.sm" mt={12}>
        <Box
          display="flex"
          border="1px"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
        >
          <ColorBox bg="base03"></ColorBox>
          <ColorBox bg="base02"></ColorBox>
          <ColorBox bg="base01"></ColorBox>
          <ColorBox bg="base00"></ColorBox>
          <ColorBox bg="base0"></ColorBox>
          <ColorBox bg="base1"></ColorBox>
          <ColorBox bg="base2"></ColorBox>
          <ColorBox bg="base3"></ColorBox>
        </Box>
      </Container>
      <ContentTitle>Biography</ContentTitle>
      <BioContent year="1989" text="Born in Osaka, Japan"></BioContent>
      <BioContent
        year="2013"
        text="Completed the Bachelor's Program at Kyoto University of Art and Design"
      ></BioContent>
      <BioContent text="Start to live in Germany"></BioContent>
      <BioContent
        year="2021"
        text="Completed the Diplom's Program at the Art Academy Duesseldorf"
      ></BioContent>
      <BioContent
        year="2021 to present"
        text="Lives and works as artist in Duesseldorf"
      ></BioContent>
    </Article>
  );
}
