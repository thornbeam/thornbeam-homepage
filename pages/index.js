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
import Footer from "../components/footer";

export default function Home() {
  return (
    <Article>
      <Box
        className="profileBox"
        mt={{ base: 3, md: 7 }}
        p={2}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-around" }}
        alignItems="center"
        userSelect="none"
      >
        <Box
          className="textBox"
          bg={useColorModeValue("base0", "base02")}
          p={9}
          borderRadius={12}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box
            className="heading"
            fontFamily="Roboto Slab, serif"
            fontWeight="bold"
            letterSpacing="-0.7px"
            mb={3}
          >
            <Text fontSize="1.5rem">Hidetoshi Mitsuzaki</Text>
            <Text fontSize="1.2rem">@Thornbeam</Text>
          </Box>
          <Text fontSize="1.0rem">Artist * Photographer * Developer etc.</Text>
        </Box>
        <Image
          src="/profile.jpg"
          alt="Profile Image"
          borderStyle="solid"
          borderRadius="full"
          borderWidth={2}
          borderColor="grey"
          maxWidth={{ base: "200px", md: "250px" }}
          mt={{ base: 5, md: 10 }}
        />
      </Box>
      <ContentTitle mt={{ base: "3rem" }}>Works</ContentTitle>
      <Container maxW="container.sm" mb={12}>
        <Image src="/artworks/jpg/2020-union_spiel-v1.jpg" />
      </Container>
      <ContentText fontFamily="Roboto Slab, serif" fontStyle="italic">
        Hidetoshi Mitsuzaki takes up symbols, pictograms, infographics
        and other communicative design means in his painting, detaches them from
        their original context and combines them to create his own visual
        language and a space for interpretation.
      </ContentText>
      <Container maxW="container.sm">
        <HStack mt={7} spacing="20px">
          <LinkItem href="/artworks">To Artworks</LinkItem>
          <LinkItem href="/artworks">To Other Works</LinkItem>
        </HStack>
      </Container>
      <ContentTitle>About</ContentTitle>
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
      <ContentTitle>Contact</ContentTitle>
      <Container maxW="container.sm">
        <HStack mt={7} spacing="20px">
          <LinkItem href="mailto: thornbeam@posteo.eu">Email Thornbeam</LinkItem>
          <LinkItem href="/impressum">Impressum / Disclaimer</LinkItem>
        </HStack>
      </Container>
    </Article>
  );
}
