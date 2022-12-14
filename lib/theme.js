import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import styled from "@emotion/styled"

// More details under: https://chakra-ui.com/docs/styled-system/global-styles

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f1e8da", "#21252b")(props),
      fontFamily: "Roboto, sans-serif",
      color: mode("#282c34", "#f1f2f4")(props)
      // Note: `mode(lightMode, darkMode)(props)` function is the same as `props.colorMode === "dark" ? darkMode : lightMode`
    },
    a: {
      userSelect: "none",
    },
  }),
};

const colors = {
  plateColorLight: "#f8f4ed",
  plateColorDark: "#373d49",
  base03: "#21252b",
  base02: "#373e48",
  base01: "#4e5765",
  base00: "#6f7c90",
  base0: "#f8f4ed",
  base1: "#f1e8da",
  base2: "#e3d1b5",
  base3: "#d5bb90",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ styles, colors, config });

export default theme;
