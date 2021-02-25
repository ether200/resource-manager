import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetUserErrors } from "../redux/actions/userActions";
import { RootStore } from "../redux/store";

import { RegisterWrapper } from "../styles/Register.styles";
import RegisterForm from "../components/RegisterForm";

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
    <RegisterWrapper>
      <RegisterForm />
    </RegisterWrapper>
  );
};

export default Register;
