import { Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <ChakraSpinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="primary.600"
      size="xl"
    />
  );
};

export default Spinner;
