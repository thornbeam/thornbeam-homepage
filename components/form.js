import {
  Button,
  Container,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  useColorModeValue,
} from "@chakra-ui/react";

const InputEd = ({ children, ...props }) => {
  return (
    <Input
      borderColor="base00"
      hoverBorderColor="base01"
      focusBorderColor="base02"
      bg={useColorModeValue("base1", "base03")}
      {...props}
    >
      {children}
    </Input>
  );
};

const FormControlEd = ({ children, ...props }) => {
  return (
    <FormControl isInvalid={isError} mt={5} {...props}>
      {children}
    </FormControl>
  );
};

const isError = Input === "";

const Form = () => {
  return (
    <Container maxW="container.sm">
      <FormControlEd>
        <FormLabel>Name</FormLabel>
        <InputEd type="name" placeholder="Your Name"></InputEd>
      </FormControlEd>
      <FormControlEd>
        <FormLabel>Email address</FormLabel>
        <InputEd type="email" placeholder="Your Email Address"></InputEd>
      </FormControlEd>
      <FormControlEd>
        <FormLabel>Message</FormLabel>
        <InputEd type="text" height="30vh" placeholder="Your Message"></InputEd>
      </FormControlEd>
      <Button
        mt={5}
        bg={useColorModeValue("base0", "base01")}
        _hover={{ bg: useColorModeValue("base0", "base02") }}
      >
        Send
      </Button>
    </Container>
  );
};

export default Form;
