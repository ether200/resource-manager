import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubjectSchema } from "../../yup";
import { createSubject } from "../../redux/actions/subjectActions";
import { ErrorIcon } from "../../styles/Icons.Styles";
import { SubjectFormWrapper } from "./SubjectForm.styles";
import { RootStore } from "../../redux/store";
import FormInput from "../FormInput";
import { Box, StackDivider, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import ErrorBadge from "../ErrorBadge";
import { FormHelperText } from "@chakra-ui/form-control";

type SubjectFormValues = {
  subjectName: string;
};

const SubjectForm: React.FC = () => {
  const dispatch = useDispatch();
  const { subjectLoading, createSubjectError } = useSelector(
    (state: RootStore) => state.subjectState
  );

  const { register, handleSubmit, errors } = useForm<SubjectFormValues>({
    resolver: yupResolver(SubjectSchema),
  });

  const onSubmit: SubmitHandler<SubjectFormValues> = ({ subjectName }) => {
    const newSubject = { name: subjectName };
    dispatch(createSubject(newSubject));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        {createSubjectError && <ErrorBadge message={createSubjectError} />}
        <FormInput
          id="subjectName"
          name="subjectName"
          type="text"
          label="Create a subject"
          register={register}
          invalid={errors.subjectName ? true : false}
          errors={errors.subjectName}
          placeholder="Name must be unique"
        />
        <Button
          variant="solid"
          size="md"
          isLoading={subjectLoading}
          type="submit"
          width="100%"
          colorScheme="primary"
        >
          Create
        </Button>
      </VStack>
    </form>
  );
};

export default SubjectForm;
