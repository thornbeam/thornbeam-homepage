import { useState, useEffect } from "react";

import {
  AspectRatio,
  Box,
  Button,
  Container,
  Image,
  Text,
  useColorModaValue,
} from "@chakra-ui/react";

import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import UnionSpiel from "../../components/image_urls/unionSpiel";

const SlideshowTest = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  const images = [
    "/artworks/union_spiel/2021-abschluss_web-01.jpg",
    "/artworks/union_spiel/2021-abschluss_web-02.jpg",
    "/artworks/union_spiel/2021-abschluss_web-03.jpg",
    "/artworks/union_spiel/2021-abschluss_web-04.jpg",
    "/artworks/union_spiel/2021-abschluss_web-05.jpg",
    "/artworks/union_spiel/2021-abschluss_web-06.jpg",
  ];

  useEffect(() => {
    setCurrentSlideStyle({
      backgroundImage: "url('" + images[currentSlide] + "')",
    });
  }, [images, currentSlide]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(images.length - 1);
    }
  }

  function next() {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const [modalDisclosure, setModalDisclosure] = useState(false);

  return (
    <>
      <Container maxW="container.sm">
        <AspectRatio maxW="100%" ratio={4 / 3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            fontSize="1.2rem"
            color="whiteAlpha.900"
            style={currentSlideStyle}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            textTransform="uppercase"
            letterSpacing="1px"
            cursor="pointer"
            filter="grayscale(100%)"
            _hover={{ filter: "none" }}
            transition="filter 0.3s"
            textAlign="center"
            onClick={() => setModalDisclosure(true)}
          >
            {children}
          </Box>
        </AspectRatio>
        {modalDisclosure == true && (
          <Box
            position="fixed"
            zIndex="1"
            top="0px"
            left="0px"
            bgColor="blackAlpha.700"
            width="100vw"
            height="100vh"
          >
            <CloseIcon onClick={() => setModalDisclosure(false)} />
            <Box display="flex" flexDirection="row">
              <ChevronLeftIcon onClick={previous} />
              <Image src={images[currentSlide]} maxW="80%" maxH="80%"/>
              <ChevronRightIcon onClick={next} />
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
};

export default SlideshowTest;
