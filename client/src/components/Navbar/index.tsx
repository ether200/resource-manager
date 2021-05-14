import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { logoutUser } from "../../redux/actions/userActions";
import { resetSelectedSubject } from "../../redux/actions/subjectActions";
import { SidebarNavProps } from "../../pages/Subjects";

import { NavbarWrapper } from "./Navbar.styles";
import { ThreeBars } from "../../styles/Icons.Styles";
import { BsFolderPlus } from "react-icons/bs";

import { Stack, Button, Link } from "@chakra-ui/react";

const Navbar: React.FC<SidebarNavProps> = ({
  setIsSidebarOpen,
  isSidebarOpen,
}) => {
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      bgColor="primary.600"
      height={75}
      alignItems="center"
      justifyContent="space-between"
      paddingX={8}
    >
      {/* ADD NO ME LA CONTAINER */}
      <Button
        size="md"
        bgColor="secondary.400"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        leftIcon={<BsFolderPlus />}
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
  );
};

export default Navbar;
