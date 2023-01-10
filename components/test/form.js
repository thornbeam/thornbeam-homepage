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

import { useState } from "react";

const InputNew = ({ children, ...props }) => {
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

const FormControlNew = ({ children, ...props }) => {
  return (
    <FormControl mt={5} {...props}>
      {children}
    </FormControl>
  );
};

const Form = () => {
  const [input, setInput] = useState("");
  const isError = input === "";

  return (
    <Container maxW="container.sm">
      <FormControlNew
        isInvalid={isError}
      >
        <FormLabel>Name</FormLabel>
        <InputNew type="name" placeholder="Your Name"></InputNew>
        {isError && (
          <FormHelperText>
            Your Name is required.
          </FormHelperText>
        )}
      </FormControlNew>
      <FormControlNew isInvalid={isError}>
        <FormLabel>Email address</FormLabel>
        <InputNew type="email" placeholder="Your Email Address"></InputNew>
        {isError && (
          <FormHelperText>
            Your email address is required.
          </FormHelperText>
        )}
      </FormControlNew>
      <FormControlNew>
        <FormLabel>Message</FormLabel>
        <InputNew
          type="text"
          height="30vh"
          placeholder="Your Message"
        ></InputNew>
        {isError && (
          <FormHelperText>
            Please insert your message.
          </FormHelperText>
        )}
      </FormControlNew>
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
