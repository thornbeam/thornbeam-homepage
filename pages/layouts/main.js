import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Fotter from "../../components/footer";

// Defines:
// * Global information of this website
// * Main website-title (further details in article.js)
// * Navbar for all pages
// * Container for all pages (by default, maxWidth is set to 60 characters (60ch))

const Global = ({ children }) => {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Thornbeam's Homepage" />
        <meta name="author" content="Thornbeam" />
        <meta name="author" content="Hidetoshi Mitsuzaki" />
        <title>Thornbeam - Homepage</title>
      </Head>
      <Navbar />
      <Container position="relative" top={70} maxW="container.md">
        {children}
        <Fotter></Fotter>
      </Container>
    </Box>
  );
};

export default Global;
