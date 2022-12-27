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

const ExhibitionSlideshow = ({ images, modalFooterText="", children, ...props }) => {
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
      <Container maxW="container.sm" {...props}>
        <AspectRatio maxW="100%" ratio={4 / 3}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            onClick={onOpen}
            fontWeight="bold"
            fontSize="1.2rem"
            color="whiteAlpha.900"
            bgImage={images[currentSlide]}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            textTransform="uppercase"
            letterSpacing="1px"
            cursor="pointer"
            filter="grayscale(100%)"
            _hover={{ filter: "none" }}
            transition="filter 0.3s"
          >
            {children}
          </Box>
        </AspectRatio>
      </Container>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="full"
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent
          bg={useColorModeValue("blackAlpha.400", "whiteAlpha.200")}
          color={useColorModeValue("whiteAlpha.900", "whiteAlpha.900")}
          backdropFilter="auto"
          backdropBlur="7px"
        >
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <ChevronLeftIcon
              w={7}
              h={7}
              onClick={previous}
              cursor="pointer"
              color="whiteAlpha.600"
              _hover={{ color: "whiteAlpha.900" }}
            />
            <Image
              src={images[currentSlide]}
              width="90vw"
              height="80vh"
              objectFit="contain"
            />
            <ChevronRightIcon
              w={7}
              h={7}
              onClick={next}
              cursor="pointer"
              color="whiteAlpha.600"
              _hover={{ color: "whiteAlpha.900" }}
            />
          </ModalBody>
          {(modalFooterText != "") && (
            <ModalFooter>
              <Text fontSize="0.9rem" fontStyle="italic">
                {modalFooterText}
              </Text>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExhibitionSlideshow;
