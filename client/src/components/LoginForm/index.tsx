import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../yup";

import { registerLogUser } from "../../redux/actions/userActions";

import { RootStore } from "../../redux/store";
import FormInput from "../FormInput";

import { LoginFormWrapper } from "./LoginForm.styles";
import { ErrorIcon } from "../../styles/Icons.Styles";

export type LogFormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const { error, loading, authError } = useSelector(
    (state: RootStore) => state.userState
  );

  const { register, handleSubmit, errors } = useForm<LogFormValues>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LogFormValues> = ({ email, password }) => {
    const user = { email, password };
    dispatch(registerLogUser("login", user));
  };

  return (
    <LoginFormWrapper>
      <h2>Log in to your account</h2>
      {error && (
        <span className="form-error">
          <ErrorIcon /> {error}
        </span>
      )}
      {authError && (
        <span className="form-error">
          <ErrorIcon /> {authError}
        </span>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="email"
          name="email"
          type="text"
          label="Email"
          register={register}
          errors={errors.email}
        />
        <FormInput
          id="password"
          type="password"
          name="password"
          label="Password"
          register={register}
          errors={errors.password}
        />
        <button className="btn" type="submit" disabled={loading}>
          {!loading ? "Next" : "Loading..."}
        </button>
        <p>
          Don't you have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
