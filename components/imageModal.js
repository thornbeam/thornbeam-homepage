import {
  Box,
  Container,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
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

function ModalImage(id, src) {
  if (id === "small") {
    return <Image src={src} width="50%" height="50vh" fit="contain" />;
  } else {
    return <Image src={src} width="90%" height="80vh" fit="contain" />;
  }
}

const ImageModal = ({
  id = "",
  src,
  maxH,
  maxW,
  children,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container mt={{ base: 24, md: 32 }} maxW="container.sm" {...props}>
      <Box display="flex" flexDirection="column" alignItems="left">
        {maxH && maxW && (
          <Image
            onClick={onOpen}
            cursor="pointer"
            src={src}
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
          motionPreset="scale"
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
              justifyContent="center"
              alignItems="center"
            >
              {ModalImage(id, src)}
            </ModalBody>
            <ModalFooter>
              <Text fontSize="0.9rem" fontStyle="italic">
                {children}
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Text mt={5} fontSize="0.9rem" fontStyle="italic">
        {children}
      </Text>
    </Container>
  );
};

export default ImageModal;
