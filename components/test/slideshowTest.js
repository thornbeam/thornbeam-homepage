import { useState, useEffect } from "react";

import {
  AspectRatio,
  Box,
  Button,
  Container,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const SlideshowTest = ({
  images = [],
  modalFooterText = "none",
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

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
      <Container maxW="container.sm" {...props}>
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
            zIndex={1}
            top="0px"
            left="0px"
            style={{ backdropFilter: "blur(5px)" }}
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box align="right">
              <CloseIcon
                m={7}
                boxSize={5}
                color={useColorModeValue("black", "white")}
                onClick={() => setModalDisclosure(false)}
                cursor="pointer"
              />
            </Box>
            <Box
              border="1px"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
            >
              <ChevronLeftIcon
                border="1px"
                cursor="pointer"
                boxSize={7}
                color={useColorModeValue("black", "white")}
                onClick={previous}
              />
              <Image src={images[currentSlide]} maxW="90vw" maxH="90vh" />
              <ChevronRightIcon
                border="1px"
                cursor="pointer"
                boxSize={7}
                color={useColorModeValue("black", "white")}
                onClick={next}
              />
            </Box>
            {modalFooterText != "none" && (
              <Text fontSize="0.9rem" fontStyle="italic" mx={7} mb={7}>
                {modalFooterText}
              </Text>
            )}
          </Box>
        )}
      </Container>
    </>
  );
};

export default SlideshowTest;
