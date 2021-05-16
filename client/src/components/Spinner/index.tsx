import { Spinner as ChakraSpinner, Box } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary.600"
        size="xl"
      />
    </Box>
  );
};

export default Spinner;
