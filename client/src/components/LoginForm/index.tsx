import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../yup";

import { registerLogUser } from "../../redux/actions/userActions";

import { RootStore } from "../../redux/store";
import FormInput from "../FormInput";
import ErrorBadge from "../ErrorBadge";

import { Box, Heading, VStack, Button, Text, Link } from "@chakra-ui/react";

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
    <Box
      minWidth={275}
      paddingY={8}
      paddingX={4}
      height="100%"
      width={{ base: "300px", md: "430px" }}
      margin="auto"
    >
      <Heading marginY={8} size="lg" textAlign="center" color="primary.800">
        Log in to your account
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          {error && <ErrorBadge message={error} />}
          {authError && <ErrorBadge message={authError} />}
          <FormInput
            id="email"
            name="email"
            type="text"
            label="Email"
            invalid={errors.email ? true : false}
            register={register}
            errors={errors.email}
          />
          <FormInput
            id="password"
            type="password"
            name="password"
            label="Password"
            register={register}
            invalid={errors.email ? true : false}
            errors={errors.password}
          />
          <Button
            variant="solid"
            size="md"
            isLoading={loading}
            type="submit"
            width="100%"
            colorScheme="primary"
          >
            Log In
          </Button>
          <Text alignSelf="start" fontSize="md" color="gray.500">
            Don't you have an account?{" "}
            <Link
              as={RouterLink}
              fontWeight="semibold"
              color="primary.800"
              _hover={{
                color: "primary.900",
              }}
              to="/register"
            >
              Sign up
            </Link>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginForm;
