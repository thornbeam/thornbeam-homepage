import { Box, Button, Image } from "@chakra-ui/react";
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

const Slideshow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sources = [
    "/artworks/2021-skull.png",
    "/artworks/2021-ohne_titel.png",
    "/artworks/2021-bang_01.png",
    "/artworks/2021-bang_02.png",
    "/artworks/2020-bjt.png",
    "/artworks/2020-advertisement.png",
    "/artworks/2020-abd.png",
  ];

  let image;
  let images = [];

  // Assumption: Modal reloads all values when it's called, so the value can not be saved in the state of loop process. -> you get the last pic of sources list!

  for (let i = 0; i < sources.length; i++) {
    image = (
      <>
        <Box onClick={onOpen}>
          <Image src={sources[i]} />
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button>Previous</Button>
              <Image
                src={sources[i]}
                width="60vw"
                height="80vh"
                objectFit="contain"
                m={20}
              />
              <Button>Next</Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
    images.push(image);
  }

  return <Box>Slideshow {images}</Box>;
};

export default Slideshow;
