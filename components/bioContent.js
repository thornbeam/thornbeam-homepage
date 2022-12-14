import { Container, Grid, GridItem, Text } from "@chakra-ui/react";

const BioContent = ({ year, text }) => {
  return (
    <Container maxW="container.sm" mb={3}>
      <Grid templateColumns="repeat(7, 1fr)" gap={7}>
        <GridItem colSpan={2} >
          <Text fontWeight="bold">{year}</Text>
        </GridItem>
        <GridItem colSpan={5}>{text}</GridItem>
      </Grid>
    </Container>
  );
};

export default BioContent;
