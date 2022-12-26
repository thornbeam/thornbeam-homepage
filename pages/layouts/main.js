import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

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
      <Footer></Footer>
      </Container>
    </Box>
  );
};

export default Global;
