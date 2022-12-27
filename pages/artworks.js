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

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import MenuLinkItem from "../components/menuLinkItem"

import ContentTitle from "../components/contentTitle";
import ContentText from "../components/contentText";
import LinkItem from "../components/linkItem";
import LinkImage from "../components/linkImage";
import ImageContainer from "../components/imageContainer";
import ModalImageContainer from "../components/modalImageContainer";
import SlideshowBox from "../components/slideshowBox";

import PublicationModal from "../components/test/publicationModal";

import PublicationModalLink from "../components/test/publicationModalLink"

import UnionSpiel from "../components/image_urls/unionSpiel";
import Kosmetik from "../components/image_urls/kosmetik";

import YoungArtist from "../components/image_urls/youngArtist";
import DerBogenImAugeExhibition from "../components/image_urls/derBogenImAuge-exhibition";
import DerBogenImAugePublication from "../components/image_urls/derBogenImAuge-publication";

const DerBogenImAugeModalFooter = (
  <Text>
    Test text with{" "}
    <Link as={NextLink} href="#">
      link
    </Link>
  </Text>
);

const DerBogenImAugeText = (
  <Text>
    2022 Der Bogen im Auge / Photos: Ivo Faber /{" "}
    <Link
      as={NextLink}
      textDecoration="underline"
      href="https://www.kunst-im-tunnel.de/exhibition/der-bogen-im-auge/"
      isExternal
    >
      More details
    </Link>
  </Text>
);

const KosmetikText = (
  <Text>
    2021 Kosmetik, with Denise Werth / Photos: Kai Werner Schmidt /{" "}
    <Link
      as={NextLink}
      textDecoration="underline"
      href="https://nails-room.com/kosmetik/"
      isExternal
    >
      More details
    </Link>
  </Text>
);

export default function Artworks() {
  return (
    <Article title="Artworks">
      <ContentTitle>Exhibitions</ContentTitle>
      <SlideshowBox
        images={DerBogenImAugeExhibition}
        mt={20}
        modalFooterText={DerBogenImAugeText}
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
      <SlideshowBox images={Kosmetik} modalFooterText={KosmetikText} mt={24}>
        Kosmetik
      </SlideshowBox>
      <ContentTitle>Publications</ContentTitle>
      <PublicationModal
        imgSrc="/artworks/publications/vlb_9783868326529_1.jpg"
        mdlSrc={YoungArtist}
        maxH="60vh"
        maxW="50%"
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
        <Link
          mt={3}
          as={NextLink}
          href="https://www.wienand-verlag.de/Programm/Zeitgenoessische-Kunst/Young-Artists-Hidetoshi-Mitsuzaki.html"
          fontFamily="Roboto Slab, serif"
          fontStyle="italic"
          textDecoration="underline"
          isExternal
        >
          More details
        </Link>
      </PublicationModal>
      <PublicationModal
        imgSrc="/artworks/publications/der_bogen_im_auge/der_bogen_im_auge_1.jpg"
        mdlSrc={DerBogenImAugePublication}
        maxH="60vh"
        maxW="50%"
      >
        <Text mt={7} fontWeight="bold">
          Der Bogen im Auge
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
          Herausgeber: KIT – Kunst im Tunnel und Kunsthalle Düsseldorf gGmbH
        </Text>
        <Link
          mt={3}
          as={NextLink}
          href="https://www.kunst-im-tunnel.de/publication/der-bogen-im-auge/"
          fontFamily="Roboto Slab, serif"
          fontStyle="italic"
          textDecoration="underline"
          isExternal
        >
          More details
        </Link>
      </PublicationModal>
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
      <Container mt={20} maxW="container.sm">
        <Menu>
          <MenuButton
            as={Button}
            fontWeight="regular"
            py={2}
            px={4}
            borderRadius={10}
            fontSize="1.1rem"
            letterSpacing={-1}
            bg={useColorModeValue("base0", "base02")}
            _hover={{
              color: useColorModeValue("#f8f4ed", "#16181d"),
              backgroundColor: useColorModeValue("base02", "base3"),
            }}
          >
            To Other Artworks
          </MenuButton>
          <MenuList
            p={0}
            bg={useColorModeValue("base0", "base01")}
            boxShadow="base"
          >
            <MenuLinkItem href="/artworks/portfolio_v8.1-boegen-mittel_v2.pdf" isExternal>Download PDF</MenuLinkItem>
          </MenuList>
        </Menu>
      </Container>
    </Article>
  );
}
