import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../yup";

import { registerLogUser } from "../../redux/actions/userActions";

import { RootStore } from "../../redux/store";
import FormInput from "../FormInput";

import { RegisterFormWrapper } from "./RegisterForm.styles";
import { ErrorIcon } from "../../styles/Icons.Styles";

export type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string;
};

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootStore) => state.userState);

  const { register, handleSubmit, errors } = useForm<RegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = ({
    name,
    email,
    password,
  }) => {
    const newUser = { name, email, password };
    dispatch(registerLogUser("signup", newUser));
  };

  return (
    <RegisterFormWrapper>
      <h2>Register your account</h2>
      {error && (
        <span className="form-error">
          <ErrorIcon /> {error}
        </span>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="name"
          name="name"
          type="text"
          label="Name"
          register={register}
          errors={errors.name}
        />

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
          name="password"
          type="password"
          label="Password"
          register={register}
          errors={errors.password}
        />

        <FormInput
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          label="Confirm Password"
          register={register}
          errors={errors.passwordConfirm}
        />
        <button className="btn" type="submit" disabled={loading}>
          {!loading ? "register" : "loading..."}
        </button>
        <p>
          Do you have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
