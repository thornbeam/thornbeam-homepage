import { ChakraProvider } from "@chakra-ui/react";
import Global from "./layouts/main";
import theme from "../lib/theme"

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global>
        <Component {...pageProps} />
      </Global>
    </ChakraProvider>
  );
}

export default App;
