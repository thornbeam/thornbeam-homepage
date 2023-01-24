import NextLink from "next/link";
import { useRouter } from "next/router";
import { HiLanguage } from "react-icons/hi2";
import {
  Text,
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

export default function LocaleSwitcher({ ...props }) {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HiLanguage />}
        bg={useColorModeValue("base0", "base01")}
        {...props}
      />
      <MenuList
        minWidth="5px"
        p={0}
        bg={useColorModeValue("base0", "base01")}
        boxShadow="base"
      >
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <MenuItem
              p={0}
              borderRadius="5px"
              display="block"
              textAlign="center"
              bg={useColorModeValue("base0", "base01")}
              _hover={{
                bg: useColorModeValue("base02", "base00"),
                color: "white",
              }}
            >
              <NextLink
                key={locale}
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                legacyBehavior
              >
                <Text textTransform="uppercase" py={2} px={3}>
                  {locale}
                </Text>
              </NextLink>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
