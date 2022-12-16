import { Box, Container, Text, Image } from "@chakra-ui/react";
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

const ImageContainerModal = ({ src, maxH, maxW, children, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container mt={32} {...props}>
      <Box display="flex" flexDirection="column" alignItems="left">
        <Box onClick={onOpen} cursor="pointer">
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            blockScrollOnMount={false}
            isCentered
            motionPreset="scale"
            size="full"
          >
            <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Image src={src} width="90%" height="80vh" fit="contain"/>
              </ModalBody>
            </ModalContent>
          </Modal>

          {maxH && maxW && (
            <Image
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
      </Box>
    </Container>
  );
};

export default ImageContainerModal;
