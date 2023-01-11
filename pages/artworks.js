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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import MenuLinkItem from "../components/menuLinkItem";
import ContentTitle from "../components/contentTitle";
import ContentText from "../components/contentText";
import LinkItem from "../components/linkItem";
import ImageModal from "../components/imageModal";
import ExhibitionSlideshow from "../components/exhibitionSlideshowV1";
import PublicationSlideshow from "../components/publicationSlideshow";

import UnionSpiel from "../components/image_urls/unionSpiel";
import Kosmetik from "../components/image_urls/kosmetik";
import YoungArtist from "../components/image_urls/youngArtist";
import DerBogenImAugeExhibition from "../components/image_urls/derBogenImAuge-exhibition";
import DerBogenImAugePublication from "../components/image_urls/derBogenImAuge-publication";

import {
  DerBogenImAugeExhibitionFooter,
  KosmetikExhibitionFooter,
  YoungArtistPublicationData,
  DerBogenImAugePublicationData,
  UnionSpielFooter,
} from "../components/textElements";

export default function Artworks() {
  return (
    <Article title="Artworks">
      <ContentTitle>Exhibitions</ContentTitle>
      <ExhibitionSlideshow
        images={DerBogenImAugeExhibition}
        mt={20}
        modalFooterText={DerBogenImAugeExhibitionFooter}
      >
        Der Bogen im Auge
      </ExhibitionSlideshow>
      <ExhibitionSlideshow
        images={UnionSpiel}
        modalFooterText={UnionSpielFooter}
        mt={24}
      >
        Union/Spiel
      </ExhibitionSlideshow>
      <ExhibitionSlideshow
        images={Kosmetik}
        modalFooterText={KosmetikExhibitionFooter}
        mt={24}
      >
        Kosmetik
      </ExhibitionSlideshow>

      <ContentTitle>Publications</ContentTitle>
      <PublicationSlideshow
        imgSrc="/artworks/publications/cover/young_artist-cover.jpg"
        mdlSrc={YoungArtist}
        maxH="60vh"
        maxW="50%"
      >
        {YoungArtistPublicationData}
      </PublicationSlideshow>
      <PublicationSlideshow
        imgSrc="/artworks/publications/der_bogen_im_auge/der_bogen_im_auge_1.jpg"
        mdlSrc={DerBogenImAugePublication}
        maxH="60vh"
        maxW="50%"
      >
        {DerBogenImAugePublicationData}
      </PublicationSlideshow>
      <ContentTitle>Selected Artworks</ContentTitle>
      <ImageModal
        src="/artworks/jpg/2021-skull.jpg"
        maxW="90%"
        maxH="50vh"
        mt={24}
      >
        Skull 2021, 100 × 130 cm
      </ImageModal>
      <ImageModal
        src="/artworks/jpg/2021-ohne_titel.jpg"
        maxW="60%"
        maxH="60vh"
      >
        Nontitled 2021, 170 × 130 cm
      </ImageModal>
      <ImageModal
        src="/artworks/jpg/2020-union_spiel.jpg"
        maxW="90%"
        maxH="50vh"
      >
        Union/SPIEL 2020, 105 × 155 cm
      </ImageModal>
      <ImageModal
        id="small"
        src="/artworks/jpg/2020-bjt.jpg"
        maxW="40%"
        maxH="40vh"
      >
        BJT 2020, 50 × 50 cm
      </ImageModal>
      <ImageModal src="/artworks/jpg/2020-abd.jpg" maxW="60%" maxH="60vh">
        A.B.D. 2020, 180 × 130 cm
      </ImageModal>
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
            <MenuLinkItem
              href="/artworks/pdf/portfolio_v8.2.pdf"
              isExternal
            >
              Download PDF
            </MenuLinkItem>
          </MenuList>
        </Menu>
      </Container>
    </Article>
  );
}
