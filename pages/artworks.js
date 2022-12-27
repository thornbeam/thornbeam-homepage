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
import LinkImage from "../components/linkImage";
import ImageContainer from "../components/imageContainer";
import ModalImageContainer from "../components/modalImageContainer";
import SlideshowBox from "../components/slideshowBox";

import PublicationModal from "../components/test/publicationModal";

import UnionSpiel from "../components/image_urls/unionSpiel";
import Kosmetik from "../components/image_urls/kosmetik";

import YoungArtist from "../components/image_urls/youngArtist";
import DerBogenImAugeExhibition from "../components/image_urls/derBogenImAuge-exhibition";
import DerBogenImAugePublication from "../components/image_urls/derBogenImAuge-publication";

export default function Artworks() {
  return (
    <Article title="Artworks">
      <ContentTitle>Exhibitions</ContentTitle>
      <SlideshowBox
        images={DerBogenImAugeExhibition}
        mt={20}
        modalFooterText="Der Bogen im Auge / 5. März bis 12. Juni 2022, KIT – Kunst im Tunnel Düsseldorf / with Luca Calaras, Sophie Esslinger, Mirjam Falkensteiner, Piet Fischera, Luca Florian
Filip Gudović
Johannes Herrmann
Minju Kang
Björn Knapp
Hidetoshi Mitsuzaki
Luc Palmer
Katharina Stadler
Andreas Steinbrecher
Denise Werth
Julian Westermann
und als Gast Prof. Thomas Scheibitz
        "
      >
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
      <PublicationModal
        imgSrc="/artworks/publications/vlb_9783868326529_1.jpg"
        mdlSrc={YoungArtist}
        maxH="70vh"
        maxW="60%"
      >
        <Text mt={7} fontWeight="bold">
          Young Artists / Hidetoshi Mitsuzaki
        </Text>
        <Text mt={3} fontFamily="Roboto Slab, serif" fontStyle="italic">
          Katalog
          <br />
          28,0 cm x 22,0 cm
          <br />
          80 Seiten
          <br />
          41 farbigen Abb.
        </Text>
        <Text mt={3} fontFamily="Roboto Slab, serif" fontStyle="italic">
          Herausgeber: Matthias Erntges
          <br />
          Verlag Wienand
          <br />
          ISBN 978-3-86832-652-9
        </Text>
      </PublicationModal>
      <PublicationModal
        imgSrc="/artworks/publications/der_bogen_im_auge/der_bogen_im_auge_1.jpg"
        mdlSrc={DerBogenImAugePublication}
        maxH="80vh"
        maxW="70%"
      >
        Der Bogen Im Auge
      </PublicationModal>
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
        <LinkItem href="#">To Other Artworks</LinkItem>
      </Container>
    </Article>
  );
}
