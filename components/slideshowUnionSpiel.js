import { useState, useEffect } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Image,
  Text,
} from "@chakra-ui/react";
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

import images from "./image_urls/unionSpiel"

const SlideshowBox = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      <Container maxW="container.sm">
        <AspectRatio maxW="100%" ratio={4 / 3}>
          <Box
            onClick={onOpen}
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontWeight="bold"
            bgImage={images[currentSlide]}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            textTransform="uppercase"
            letterSpacing="1px"
            cursor="pointer"
            filter="grayscale(90%)"
            _hover={{ filter: "none" }}
            transition="filter 0.3s"
          >
            {children}
          </Box>
        </AspectRatio>
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

export default SlideshowBox;
