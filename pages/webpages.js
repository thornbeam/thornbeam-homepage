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
import ContentText from "../components/contentText";
import ContentTitle from "../components/contentTitle";

export default function Webpages() {
  return (
    <Article>
      <ContentTitle>Webpages</ContentTitle>
      <ContentText>testTExt</ContentText>
    </Article>
  );
}
