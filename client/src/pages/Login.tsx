import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetUserErrors } from "../redux/actions/userActions";
import { resetSubjectState } from "../redux/actions/subjectActions";
import { resetResourceState } from "../redux/actions/resourceActions";
import { RootStore } from "../redux/store";

import Wrapper from "../styles/Login.styles";
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
    <Wrapper>
      <LoginForm />
      <div className="hero">
        <div className="welcome">
          <h1>Welcome</h1>
          <h4>
            Do you have all of your educational resources all over the place?
          </h4>
          <h4>We got you!</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
