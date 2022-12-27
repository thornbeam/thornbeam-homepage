import { Button, Link, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import MenuLinkItem from "../menuLinkItem"

export default function PublicationModalLink({ href, children, ...props }) {
  return (
    <>
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
          To Other Publications
        </MenuButton>
        <MenuList
          p={0}
          bg={useColorModeValue("base0", "base01")}
          boxShadow="base"
        >
          <MenuLinkItem href="/">Fog Butter</MenuLinkItem>
          <MenuLinkItem href="/artworks">Marpat</MenuLinkItem>
          <MenuLinkItem href="/webpages">Drei Prozent Schlacht</MenuLinkItem>
          <MenuLinkItem href="www.github.com/thornbeam">Follow Me Nowhere</MenuLinkItem>
          <MenuLinkItem href="/about">Salat Magazin</MenuLinkItem>
        </MenuList>
      </Menu>
    </>
  );
}
