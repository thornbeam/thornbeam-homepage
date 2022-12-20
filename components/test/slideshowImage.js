import { useState, useEffect } from "react";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const SlideshowImage = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/artworks/graduate_exhibition/2021-abschluss_web-01.jpg",
    "/artworks/graduate_exhibition/2021-abschluss_web-02.jpg",
    "/artworks/graduate_exhibition/2021-abschluss_web-03.jpg",
    "/artworks/graduate_exhibition/2021-abschluss_web-04.jpg",
    "/artworks/graduate_exhibition/2021-abschluss_web-05.jpg",
    "/artworks/graduate_exhibition/2021-abschluss_web-06.jpg",
  ];

  const previous = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(images.length - 1);
    }
  };

  const next = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container maxW="container.sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            onClick={onOpen}
            src={images[currentSlide]}
            maxW="100%"
            cursor="pointer"
            filter="grayscale(90%)"
            _hover={{ filter: "none" }}
            transition="filter 0.3s"
          />
          <Text fontStyle="italic" fontSize="0.9rem" mt={5}>
            {children}
          </Text>
        </Box>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <ChevronLeftIcon
                onClick={previous}
                cursor="pointer"
                position="absolute"
                top="50%"
                left="5%"
                w={7}
                h={7}
              />
              <Image
                src={images[currentSlide]}
                w="90vw"
                h="90vh"
                objectFit="contain"
              />
              <ChevronRightIcon
                onClick={next}
                cursor="pointer"
                position="absolute"
                top="50%"
                right="5%"
                w={7}
                h={7}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SlideshowImage;
