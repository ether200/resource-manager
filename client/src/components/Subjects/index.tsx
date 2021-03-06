import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

// Action creators
import { getAllSubjects } from "../../redux/actions/subjectActions";
import { SubjectInterface } from "../../redux/actions/subjectActionsTypes";

// Components
import { VStack } from "@chakra-ui/react";
import Subject from "./Subject";

const Subjects = () => {
  const dispatch = useDispatch();
  const { authorized } = useSelector((state: RootStore) => state.userState);
  const { subjects } = useSelector((state: RootStore) => state.subjectState);

  useEffect(() => {
    if (authorized) {
      dispatch(getAllSubjects);
    }
  }, [authorized, dispatch]);

  return (
    <VStack spacing={4} marginY={8}>
      {subjects.map((subject: SubjectInterface) => (
        <Subject key={subject._id} name={subject.name} _id={subject._id} />
      ))}
    </VStack>
  );
};

export default Subjects;
