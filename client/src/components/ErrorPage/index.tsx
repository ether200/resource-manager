import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import ErrorImage from "../../images/error.svg";
import { resetSelectedSubject } from "../../redux/actions/subjectActions";

import {
  Container,
  Image as ChakraImage,
  Heading,
  Text,
  VStack,
  Box,
  Link,
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
          <Heading
            size="2xl"
            color="primary.800"
            marginY={4}
            textAlign="center"
          >
            An error has ocurred
          </Heading>
          <Link
            as={RouterLink}
            fontWeight="semibold"
            color="primary.800"
            _hover={{
              color: "primary.900",
            }}
            to="/subjects"
            onClick={() => dispatch(resetSelectedSubject)}
          >
            Return to home
          </Link>
          <Text
            fontWeight="semibold"
            fontSize="xl"
            textAlign="center"
            color="red.500"
          >
            {errorMessage}
          </Text>
          <ChakraImage
            src={ErrorImage}
            alt="Error"
            boxSize={{ base: "md", md: "lg" }}
          />
        </VStack>
      </Container>
    </Box>
  );
};

export default ErrorPage;
