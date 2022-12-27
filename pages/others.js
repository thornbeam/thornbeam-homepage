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

export default function Others() {
  return (
    <Article>
      <ContentTitle>Other Works</ContentTitle>
      <ContentText>Text</ContentText>
    </Article>
  );
}
