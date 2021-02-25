import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubjectSchema } from "../../yup";
import { createSubject } from "../../redux/actions/subjectActions";
import { ErrorIcon } from "../../styles/Icons.Styles";
import { SubjectFormWrapper } from "./SubjectForm.styles";
import { RootStore } from "../../redux/store";
import FormInput from "../FormInput";

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
    <SubjectFormWrapper>
      <h2>Subjects</h2>
      {createSubjectError && (
        <span className="form-error">
          <ErrorIcon /> {createSubjectError}
        </span>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="subjectName"
          name="subjectName"
          type="text"
          label=""
          register={register}
          errors={errors.subjectName}
          placeholder="&#9888; Name must be unique"
        />
        <button className="btn" type="submit" disabled={subjectLoading}>
          {!subjectLoading ? "Create" : "Loading..."}
        </button>
      </form>
    </SubjectFormWrapper>
  );
};

export default SubjectForm;
