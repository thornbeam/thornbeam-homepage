import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Text,
  Image,
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
  Button,
} from "@chakra-ui/react";

const publicationModal = ({
  id = "",
  imgSrc,
  mdlSrc,
  maxH,
  maxW,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(mdlSrc.length - 1);
    }
  }

  function next() {
    if (currentSlide === mdlSrc.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container mt={{ base: 12, md: 24 }} maxW="container.sm" {...props}>
      <Box display="flex" flexDirection="column" alignItems="left">
        {maxH && maxW && (
          <Image
            onClick={onOpen}
            cursor="pointer"
            src={imgSrc}
            maxH={maxH}
            maxW={maxW}
            fit="contain"
            align="left"
          />
        )}
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
                src={mdlSrc[currentSlide]}
                width="90vw"
                height="90vh"
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
          </ModalContent>
        </Modal>
          {children}
      </Box>
    </Container>
  );
};

export default publicationModal;
