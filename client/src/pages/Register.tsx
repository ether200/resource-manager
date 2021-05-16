import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetUserErrors } from "../redux/actions/userActions";
import { RootStore } from "../redux/store";

import Background from "../images/background.jpg";

import RegisterForm from "../components/RegisterForm";

import { Box } from "@chakra-ui/react";

const Register: React.FC = () => {
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
  }, [dispatch]);

  return (
    <Box
      height="100vh"
      bgImage={`url(${Background})`}
      bgPosition="cover"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <RegisterForm />
    </Box>
  );
};

export default Register;
