import { Stack, Box } from "@chakra-ui/react";
import Background from "../images/background.jpg";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetUserErrors } from "../redux/actions/userActions";
import { resetSubjectState } from "../redux/actions/subjectActions";
import { resetResourceState } from "../redux/actions/resourceActions";
import { RootStore } from "../redux/store";

import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authorized } = useSelector((state: RootStore) => state.userState);

  useEffect(() => {
    if (authorized) {
      history.push("/subjects");
    }
  }, [authorized, history]);

  useEffect(() => {
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
