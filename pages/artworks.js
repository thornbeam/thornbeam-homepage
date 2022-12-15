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
import ImageContainer from "../components/imageContainer";
import ImageContainerModal from "../components/imageContainerModal"
import Slideshow from "../components/slideshow"

export default function Artworks() {
  return (
    <Article title="Artworks">
      <ContentTitle>Artworks</ContentTitle>
      <ContentText>
        Hidetoshi Mitsuzaki (geb. 1989) greift in seiner Malerei Symbole,
        Piktogramme, Infografiken und andere kommunikative Gestaltungsmittel
        auf, löst sie aus ihrem ursprünglichen Kontext heraus und fügt sie zu
        einer eigenen Bildsprache und einem Raum für Interpretationen zusammen.
      </ContentText>
      <ImageContainer
        src="/artworks/2021-ohne_titel.png"
        maxW="80%"
        maxH="60vh"
        mt={24}
      >
        Nontitled 2021, 170 * 130cm
      </ImageContainer>
      <ImageContainer src="/artworks/2021-skull.png" maxW="100%" maxH="50vh">
        Skull 2021, 100 * 130cm
      </ImageContainer>
      <ImageContainer src="/artworks/2021-bang_01.png" maxW="80%" maxH="60vh">
        Bang (part 1) 2021, 130 * 100cm
      </ImageContainer>
      <ImageContainer src="/artworks/2021-bang_02.png" maxW="80%" maxH="60vh">
        Bang (part 2) 2021, 130 * 100cm
      </ImageContainer>
      <ImageContainer src="/artworks/2020-abd.png" maxW="80%" maxH="60vh">
        A.B.D**** 2020, 180 × 130cm
      </ImageContainer>
      <ImageContainer src="/artworks/2020-bjt.png" maxW="40%" maxH="40vh">
        BJT 2020, 50 * 50cm
      </ImageContainer>
      <ImageContainerModal src="/artworks/2020-bjt.png" maxW="40%" maxH="40vh">
        BJT 2020, 50 * 50cm
      </ImageContainerModal>
      <ImageContainerModal src="/artworks/2021-skull.png" maxW="100%" maxH="50vh">
        Skull 2021, 100 * 130cm
      </ImageContainerModal>
      <ImageContainerModal src="/artworks/2021-bang_01.png" maxW="80%" maxH="60vh">
        Bang (part 1) 2021, 130 * 100cm
      </ImageContainerModal>
      <Slideshow></Slideshow>
    </Article>
  );
}
