import { useState, useEffect } from "react";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Slideshow = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/artworks/graduate_exhibition/2021-abschluss_web-01.jpg",
    "/artworks/graduate_exhibition/2021-abschluss_web-02.jpg",
    "/artworks/graduate_exhibition/2021-abschluss_web-03.jpg",
    "/artworks/graduate_exhibition/2021-abschluss_web-04.jpg",
    "/artworks/graduate_exhibition/2021-abschluss_web-05.jpg",
    "/artworks/graduate_exhibition/2021-abschluss_web-06.jpg",
  ];

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

  const { isOpen, onOpen, onClose } = useDisclosure();

  // By using Box instead of Image, you can't fit the box size to the actual image size, sothat no sence to use Box instead of Image except on the point, that you can use the text message on the picture!

  return (
    <>
      <Container maxW="container.sm">
        <Box
          border="1px"
          onClick={onOpen}
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
          boxSize="container.sm"
          bgImage={images[currentSlide]}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="contain"
          cursor="pointer"
          filter="grayscale(90%)"
          _hover={{ filter: "none" }}
          transition="filter 0.3s"
        >
          {children}
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
              justifyContent="space-around"
              alignItems="center"
            >
              <ChevronLeftIcon
                position="absolute"
                top="50%"
                left="30px"
                w={7}
                h={7}
                onClick={previous}
                cursor="pointer"
                color="gray"
                _hover={{ color: "black" }}
              />
              <Image
                src={images[currentSlide]}
                width="80vw"
                height="80vh"
                objectFit="contain"
                m={20}
              ></Image>
              <ChevronRightIcon
                position="absolute"
                top="50%"
                right="30px"
                w={7}
                h={7}
                onClick={next}
                cursor="pointer"
                color="gray"
                _hover={{ color: "black" }}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Slideshow;
