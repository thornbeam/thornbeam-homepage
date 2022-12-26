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
import ModalImageContainer from "../components/modalImageContainer";
import SlideshowBox from "../components/slideshowBox";
import UnionSpiel from "../components/image_urls/unionSpiel";
import Kosmetik from "../components/image_urls/kosmetik";
import BogenImAuge from "../components/image_urls/bogenImAuge";

export default function Artworks() {
  return (
    <Article title="Artworks">
      <ContentTitle>Exhibitions</ContentTitle>
      <SlideshowBox images={BogenImAuge} mt={20}>
        Der Bogen im Auge
      </SlideshowBox>
      <SlideshowBox
        images={UnionSpiel}
        modalFooterText="2021 Union/SPIEL, Photos: Hidetoshi Mitsuzaki"
        mt={24}
      >
        Union/Spiel
      </SlideshowBox>
      <SlideshowBox
        images={Kosmetik}
        modalFooterText="2021 Kosmetik, with Denise Werth / Photos: Kai Werner Schmidt"
        mt={24}
      >
        Kosmetik
      </SlideshowBox>
      <Container mt={12} maxW="container.sm">
        <LinkItem href="#">Other Exhibitions</LinkItem>
      </Container>
      <ContentTitle>Publications</ContentTitle>
      <ImageContainer src="/artworks/publications/vlb_9783868326529_1.jpg" maxH="80vh" maxW="70%">Young Artist</ImageContainer>
      <ImageContainer src="/artworks/publications/220412_Der_Bogen_im_Auge_v18_cover3-512x691.jpg" maxH="80vh" maxW="70%">Der Bogen Im Auge</ImageContainer>
      <Container mt={12} maxW="container.sm">
        <LinkItem href="#">Other Publications</LinkItem>
      </Container>
      <ContentTitle>Selected Artworks</ContentTitle>
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
        src="/artworks/jpg/2020-abd.jpg"
        maxW="60%"
        maxH="60vh"
      >
        A.B.D**** 2020, 180 × 130 cm
      </ModalImageContainer>
      <Container mt={24} maxW="container.sm">
      <LinkItem href="#">
      To Other Artworks
      </LinkItem>
      </Container>
    </Article>
  );
}
