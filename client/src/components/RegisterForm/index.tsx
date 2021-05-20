import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../yup";
import { RootStore } from "../../redux/store";

// Action creators
import { registerLogUser } from "../../redux/actions/userActions";

// Components
import { Box, Heading, VStack, Button, Text, Link } from "@chakra-ui/react";
import ErrorBadge from "../ErrorBadge";
import FormInput from "../FormInput";

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
    <Box
      width={{ base: "300px", sm: "430px" }}
      bgColor={"white"}
      paddingY={8}
      paddingX={4}
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading
        marginBottom={8}
        size="lg"
        textAlign="center"
        color="primary.800"
      >
        Register your account
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          {error && <ErrorBadge message={error} />}
          <FormInput
            id="name"
            name="name"
            type="text"
            label="Name"
            register={register}
            errors={errors.name}
            invalid={errors.name ? true : false}
            required
          />

          <FormInput
            id="email"
            name="email"
            type="text"
            label="Email"
            register={register}
            errors={errors.email}
            invalid={errors.email ? true : false}
            required
          />

          <FormInput
            id="password"
            name="password"
            type="password"
            label="Password"
            register={register}
            errors={errors.password}
            invalid={errors.password ? true : false}
            required
          />

          <FormInput
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            label="Confirm Password"
            register={register}
            errors={errors.passwordConfirm}
            invalid={errors.passwordConfirm ? true : false}
            required
          />
          <Button
            variant="solid"
            size="md"
            isLoading={loading}
            type="submit"
            width="100%"
            colorScheme="primary"
          >
            Register
          </Button>
          <Text alignSelf="start" fontSize="md" color="gray.500">
            Do you have an account?{" "}
            <Link
              as={RouterLink}
              fontWeight="semibold"
              color="primary.800"
              _hover={{
                color: "primary.900",
              }}
              to="/"
            >
              Login
            </Link>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default RegisterForm;
