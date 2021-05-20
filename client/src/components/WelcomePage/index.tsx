import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

// Components
import Image from "../../images/home.svg";
import Spinner from "../Spinner";
import {
  Container,
  Image as ChakraImage,
  Heading,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";

const WelcomeMessage = () => {
  const { user, loading } = useSelector((state: RootStore) => state.userState);

  return (
    <Box width="100%" flex={1} display="flex" alignItems="center">
      <Container maxW="container.xl" marginX="auto">
        <VStack>
          {user && !loading ? (
            <>
              <Heading size="2xl" color="primary.800" marginY={4}>
                Welcome{" "}
                <Text as="span" textAlign="center" color="secondary.300">
                  {user.name}
                </Text>
              </Heading>
              <Text
                fontWeight="semibold"
                color="primary.800"
                fontSize="xl"
                textAlign="center"
              >
                Start by picking or making a new subject
              </Text>
              <ChakraImage
                src={Image}
                alt="Welcome"
                boxSize={{ base: "md", md: "lg" }}
              />{" "}
            </>
          ) : (
            <Spinner />
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default WelcomeMessage;
