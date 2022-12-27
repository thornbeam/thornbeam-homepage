import { Box, Container, Text, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function LinkItem({
  href,
  src,
  maxH,
  maxW,
  children,
  ...props
}) {
  return (
    <Link as={NextLink} href={href}>
      <Container maxW="container.sm" {...props}>
        <Box display="flex" flexDirection="column" alignItems="left">
          {maxH && maxW && (
            <Image
              src={src}
              maxH={maxH}
              maxW={maxW}
              fit="contain"
              align="left"
            />
          )}
          <Text mt={5}>{children}</Text>
        </Box>
      </Container>
    </Link>
  );
}
