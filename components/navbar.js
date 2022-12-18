import {
  Link,
  Box,
  Container,
  Stack,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import LinkItem from "../components/linkItem";
import MenuLinkItem from "../components/menuLinkItem";
import Logo from "./logo";
import ToggleButton from "./toggleButton";

const Navbar = (...props) => {
  return (
    <Box
      position="fixed"
      top={0}
      as="nav"
      w="100%"
      py={3}
      style={{ backdropFilter: "blur(20px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        maxW="container.lg"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo href="/" />
        <Stack
          display={{ base: "none", md: "flex" }}
          direction={{ md: "row" }}
          fontSize="0.9rem"
          spacing="2vw"
          alignItems="center"
        >
          <LinkItem href="/">Home</LinkItem>
          <LinkItem href="/artworks">Artworks</LinkItem>
          <LinkItem href="/webpages">Source</LinkItem>
          <LinkItem href="https://github.com/thornbeam">GitHub</LinkItem>
          <LinkItem href="/about">About</LinkItem>
        </Stack>
        <Box className="navbarRight" display="flex">
          <ToggleButton />
          <Box display={{ base: "block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                ml={3}
                bg={useColorModeValue("base0", "base01")}
                _hover={{ bg: useColorModeValue("base3", "base00") }}
                _expanded={{ bg: useColorModeValue("base0", "base00") }}
              />
              <MenuList p={0} bg={useColorModeValue("base0", "base01")} boxShadow="base">
                <MenuLinkItem href="/">Home</MenuLinkItem>
                <MenuLinkItem href="/artworks">Artworks</MenuLinkItem>
                <MenuLinkItem href="/webpages">Webpages</MenuLinkItem>
                <MenuLinkItem href="www.github.com/thornbeam">
                  GitHub
                </MenuLinkItem>
                <MenuLinkItem href="/about">About</MenuLinkItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
