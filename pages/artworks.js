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
import ModalImageContainer from "../components/test/modalImageContainer";

import Slideshow from "../components/test/slideshow-test.js"

export default function Artworks() {
  return (
    <Article title="Artworks">
      <ContentTitle>Artworks</ContentTitle>
      <ContentText fontFamily="Roboto Slab, serif" fontStyle="italic">
        Hidetoshi Mitsuzaki (geb. 1989) greift in seiner Malerei Symbole,
        Piktogramme, Infografiken und andere kommunikative Gestaltungsmittel
        auf, löst sie aus ihrem ursprünglichen Kontext heraus und fügt sie zu
        einer eigenen Bildsprache und einem Raum für Interpretationen zusammen.
      </ContentText>
      <ModalImageContainer
        src="/artworks/jpg/2021-skull.jpg"
        maxW="90%"
        maxH="50vh"
        mt={24}
      >
        Skull 2021, 100 × 130 cm
      </ModalImageContainer>
      <ModalImageContainer
        src="/artworks/jpg/2021-ohne_titel.jpg"
        maxW="60%"
        maxH="60vh"
      >
        Nontitled 2021, 170 × 130 cm
      </ModalImageContainer>
      <ModalImageContainer
        src="/artworks/jpg/2021-bang_01.jpg"
        maxW="60%"
        maxH="60vh"
      >
        Bang (part 1) 2021, 130 × 100 cm
      </ModalImageContainer>
      <ModalImageContainer
        src="/artworks/jpg/2021-bang_02.jpg"
        maxW="60%"
        maxH="60vh"
      >
        Bang (part 2) 2021, 130 × 100 cm
      </ModalImageContainer>
      <ModalImageContainer
        src="/artworks/jpg/2020-union_spiel-v1.jpg"
        maxW="90%"
        maxH="50vh"
      >
        Union/SPIEL 2020, 105 × 155 cm
      </ModalImageContainer>
      <ModalImageContainer
        id="small"
        src="/artworks/jpg/2020-bjt.jpg"
        maxW="40%"
        maxH="40vh"
      >
        BJT 2020, 50 × 50 cm
      </ModalImageContainer>
      <ModalImageContainer
        id="small"
        src="/artworks/jpg/2020-advertisement.jpg"
        maxW="50%"
        maxH="50vh"
      >
        Advertisement 2020, 50 × 50 cm
      </ModalImageContainer>
      <ModalImageContainer
        src="/artworks/jpg/2020-abd.jpg"
        maxW="60%"
        maxH="60vh"
      >
        A.B.D**** 2020, 180 × 130 cm
      </ModalImageContainer>
      <ModalImageContainer
        src="/artworks/jpg/2020-eurofighter_01.jpg"
        maxW="90%"
        maxH="50vh"
      >
        Eurofighter (part1) 2020, 105 × 155 cm
      </ModalImageContainer>
      <ModalImageContainer
        src="/artworks/jpg/2020-eurofighter_02.jpg"
        maxW="90%"
        maxH="50vh"
      >
        Eurofighter (part2) 2020, 105 × 155 cm
      </ModalImageContainer>

      <Slideshow></Slideshow>
    </Article>
  );
}
