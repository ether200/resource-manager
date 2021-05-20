import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../redux/store";

// Action creators
import { resetUserErrors } from "../redux/actions/userActions";
import { resetSubjectState } from "../redux/actions/subjectActions";
import { resetResourceState } from "../redux/actions/resourceActions";

// Components
import LoginForm from "../components/LoginForm";
import Background from "../images/background.jpg";
import { Stack, Box } from "@chakra-ui/react";

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authorized } = useSelector((state: RootStore) => state.userState);

  useEffect(() => {
    // Redirect to main page when validated
    if (authorized) {
      history.push("/subjects");
    }
  }, [authorized, history]);

  useEffect(() => {
    // Reset errors on render
    dispatch(resetUserErrors);
    dispatch(resetSubjectState);
    dispatch(resetResourceState);
  }, [dispatch]);

  return (
    <Stack
      direction={{ base: "column-reverse", md: "row" }}
      width="100%"
      height="100vh"
    >
      <LoginForm />
      <Box
        bgImage={`url(${Background})`}
        bgPosition="cover"
        bgRepeat="no-repeat"
        flex={{ base: "auto", md: 1 }}
        height={{ base: "100px", md: "100%" }}
      ></Box>
    </Stack>
  );
};

export default Login;
