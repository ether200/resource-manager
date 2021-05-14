import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { logoutUser } from "../../redux/actions/userActions";
import { resetSelectedSubject } from "../../redux/actions/subjectActions";

import { FaFolderPlus } from "react-icons/fa";

import { Stack, Button, Link, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../Sidebar";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack
        direction="row"
        bgColor="primary.600"
        height={70}
        alignItems="center"
        justifyContent="space-between"
        paddingX={8}
      >
        {/* ADD NO ME LA CONTAINER */}
        <Button
          size="md"
          bgColor="secondary.400"
          onClick={onOpen}
          leftIcon={<FaFolderPlus />}
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
      </Stack>
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
