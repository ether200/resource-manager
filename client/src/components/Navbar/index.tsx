import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { FaFolderPlus } from "react-icons/fa";

// Action creators
import { logoutUser } from "../../redux/actions/userActions";
import { resetSelectedSubject } from "../../redux/actions/subjectActions";

// Components
import {
  Stack,
  Button,
  Link,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import Sidebar from "../Sidebar";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack
        direction="row"
        bgColor="primary.800"
        height={70}
        alignItems="center"
        width="100%"
      >
        <Container
          maxW="container.xl"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            size="sm"
            bgColor="primary.400"
            onClick={onOpen}
            leftIcon={<FaFolderPlus />}
            _hover={{
              backgroundColor: "primary.500",
            }}
          >
            Subjects
          </Button>
          <Stack direction="row" spacing={4}>
            <Link
              to="/subjects"
              as={RouterLink}
              fontWeight="semibold"
              color="white"
              onClick={() => dispatch(resetSelectedSubject)}
            >
              Home
            </Link>
            <Link
              to="/"
              color="white"
              fontWeight="semibold"
              as={RouterLink}
              onClick={() => dispatch(logoutUser)}
            >
              Logout
            </Link>
          </Stack>
        </Container>
      </Stack>
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
