import { useState, useEffect } from "react";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
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

const Slideshow = ({ images = [], children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  images = [
    "/artworks/2021-skull.png",
    "/artworks/2021-ohne_titel.png",
    "/artworks/2021-bang_01.png",
    "/artworks/2021-bang_02.png",
    "/artworks/2020-bjt.png",
    "/artworks/2020-advertisement.png",
    "/artworks/2020-abd.png",
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

  return (
    <>
      <Container maxW="container.sm" mt={{ base: 24, md: 32 }}>
        <Image
          onClick={onOpen}
          cursor="pointer"
          src={images[currentSlide]}
          maxW="90%"
          maxH="50vh"
        />
        {children}
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button onClick={previous}>Previous</Button>
              <Image
                src={images[currentSlide]}
                width="60vw"
                height="80vh"
                objectFit="contain"
                m={20}
              ></Image>
              <Button onClick={next}>Next</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Slideshow;
