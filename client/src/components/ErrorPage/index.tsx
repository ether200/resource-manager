import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { WelcomeWrapper } from "../WelcomePage/Welcome.styles";
import Error from "../../images/error.svg";
import { resetSelectedSubject } from "../../redux/actions/subjectActions";

import {
  Container,
  Image as ChakraImage,
  Heading,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";

type Props = {
  errorMessage: string | null;
};

const ErrorPage: React.FC<Props> = ({ errorMessage }) => {
  const dispatch = useDispatch();

  return (
    <Box width="100%" flex={1} display="flex" alignItems="center">
      <Container maxW="container.xl" marginX="auto">
        <VStack>
          <Heading size="2xl" color="primary.800" marginY={4}>
            An error has ocurred
          </Heading>
          <Link to="/subjects" onClick={() => dispatch(resetSelectedSubject)}>
            Return to home
          </Link>
          <Text
            fontWeight="semibold"
            color="primary.800"
            fontSize="xl"
            textAlign="center"
          >
            {errorMessage}
          </Text>
          <ChakraImage
            src={Error}
            alt="Error"
            boxSize={{ base: "md", md: "lg" }}
          />
        </VStack>
      </Container>
    </Box>
  );
};

export default ErrorPage;
