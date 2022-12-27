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
import ExhibitionSlideshow from "../components/exhibitionSlideshow";
import PublicationSlideshow from "../components/publicationSlideshow";

import Birkenstr61 from "../components/image_urls/birkenstr61";
import NewRoses from "../components/image_urls/newRoses";

import { NewRosesFooter, NailsFooter } from "../components/textElements.js";

export default function Others() {
  return (
    <Article>
      <ContentTitle>Photography</ContentTitle>
      <ExhibitionSlideshow
        images={NewRoses}
        mt={20}
        modalFooterText={NewRosesFooter}
      >
        New Roses / Bjoern Knapp
      </ExhibitionSlideshow>
      <ExhibitionSlideshow
        images={Birkenstr61}
        mt={24}
        modalFooterText={NailsFooter}
      >
        Nails Project Room
      </ExhibitionSlideshow>
    </Article>
  );
}
