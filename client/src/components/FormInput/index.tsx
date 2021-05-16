import { ValidationRule, UseFormMethods } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

interface InputProps
  extends Partial<Pick<UseFormMethods, "register" | "errors">> {
  rules?: ValidationRule;
  id: string;
  label: string;
  name: string;
  invalid?: boolean;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string | undefined;
  type: "text" | "email" | "password";
}

const FormInput: React.FC<InputProps> = ({
  register,
  errors,
  label,
  id,
  invalid,
  required,
  ...inputProps
}): JSX.Element => {
  return (
    <FormControl id={id} isInvalid={invalid} isRequired={required}>
      <FormLabel htmlFor={id} color="gray.400">
        {label}
      </FormLabel>
      <Input
        id={id}
        ref={register}
        {...inputProps}
        focusBorderColor="primary.400"
        errorBorderColor="red.300"
      />
      <FormErrorMessage fontSize="md" fontWeight="semibold">
        {errors && errors.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
