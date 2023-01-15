import React, { useState } from "react";
import {
  Box,
  Container,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function ModalImage(id, src) {
  if (id === "small") {
    return (
      <Image
        src={src}
        width={{ base: "70%", md: "50%" }}
        height={{ base: "70vh", md: "50vh" }}
        fit="contain"
      />
    );
  } else {
    return (
      <Image
        src={src}
        width={{ base: "100%", md: "80%" }}
        height="80vh"
        fit="contain"
      />
    );
  }
}

const ImageModal = ({ id = "", src, maxH, maxW, children, ...props }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setCurrentSlide(0);
      setLoaded(true);
    },
    destroyed() {
      setLoaded(false);
    },
  });

  const [modalDisclosure, setModalDisclosure] = useState(false);

  return (
    <>
      <Container mt={{ base: 24, md: 32 }} maxW="container.sm" {...props}>
        <Box display="flex" flexDirection="column" alignItems="left">
          {maxH && maxW && (
            <Image
              onClick={() => setModalDisclosure(true)}
              cursor="pointer"
              src={src}
              maxH={maxH}
              maxW={maxW}
              fit="contain"
              align="left"
            />
          )}
        </Box>
        <Text mt={5} fontSize="0.9rem" fontStyle="italic">
          {children}
        </Text>
      </Container>
      {modalDisclosure == true && (
        <VStack
          position="fixed"
          top="0px"
          left="0px"
          zIndex={1}
          bgColor="none"
          css={{ backdropFilter: "blur(10px)" }}
          width="100%"
          height="100%"
        >
          <Box
            w="100%"
            h="7vh"
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <CloseIcon
              m={{ base: 3, md: 7 }}
              width="30px"
              height="30px"
              p="7px"
              color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
              onClick={() => setModalDisclosure(false)}
              cursor="pointer"
              _hover={{ bgColor: "whiteAlpha.400" }}
              borderRadius="7px"
            />
          </Box>
          <Box
            w="100%"
            h="80vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {ModalImage(id, src)}
          </Box>
          <Box
            h="10vh"
            w="100%"
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <Text
              mr={{ base: 3, md: 7 }}
              fontSize="0.9rem"
              fontStyle="italic"
              color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
            >
              {children}
            </Text>
          </Box>
        </VStack>
      )}
    </>
  );
};

export default ImageModal;
