import {
  Image,
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
import { IoLogoGithub } from "react-icons/io5";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      top={0}
      as="nav"
      w="100%"
      py={3}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        maxW="container.md"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo href="/" />
        <Stack
          display={{ base: "none", md: "flex" }}
          direction={{ md: "row" }}
          fontSize="0.9rem"
          spacing="1.5vw"
          alignItems="center"
        >
          <LinkItem href="/">Home</LinkItem>
          <LinkItem href="/artworks">Artworks</LinkItem>
          <LinkItem href="/others">Other Works</LinkItem>
          <LinkItem
            href="https://github.com/thornbeam/thornbeam-homepage"
            isExternal
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
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
              <MenuList
                p={0}
                bg={useColorModeValue("base0", "base01")}
                boxShadow="base"
              >
                <MenuItem
                  as={NextLink}
                  p={2.5}
                  borderRadius="5px"
                  display="block"
                  textAlign="center"
                  fontSize="1.1rem"
                  letterSpacing={-1}
                  bg={useColorModeValue("base0", "base01")}
                  _hover={{
                    bg: useColorModeValue("base02", "base00"),
                    color: "white",
                  }}
                  href="/"
                >
                  Home
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  p={2.5}
                  borderRadius="5px"
                  display="block"
                  textAlign="center"
                  fontSize="1.1rem"
                  letterSpacing={-1}
                  bg={useColorModeValue("base0", "base01")}
                  _hover={{
                    bg: useColorModeValue("base02", "base00"),
                    color: "white",
                  }}
                  href="/artworks"
                >
                  Artworks
                </MenuItem>
                <MenuItem
                  as={NextLink}
                  p={2.5}
                  borderRadius="5px"
                  display="block"
                  textAlign="center"
                  fontSize="1.1rem"
                  letterSpacing={-1}
                  bg={useColorModeValue("base0", "base01")}
                  _hover={{
                    bg: useColorModeValue("base02", "base00"),
                    color: "white",
                  }}
                  href="/others"
                >
                  Other Works
                </MenuItem>
                <MenuItem
                  as={Link}
                  isExternal
                  p={2.5}
                  borderRadius="5px"
                  display="block"
                  textAlign="center"
                  fontSize="1.1rem"
                  letterSpacing={-1}
                  bg={useColorModeValue("base0", "base01")}
                  _hover={{
                    bg: useColorModeValue("base02", "base00"),
                    color: "white",
                    textDecoration: "none"
                  }}
                  href="https://www.github.com/thornbeam/thornbeam-homepage"
                >
                  Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
