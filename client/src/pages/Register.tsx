import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../redux/store";

// Action creators
import { resetUserErrors } from "../redux/actions/userActions";

// Components
import RegisterForm from "../components/RegisterForm";
import Background from "../images/background.jpg";
import { Box } from "@chakra-ui/react";

const Register: React.FC = () => {
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
