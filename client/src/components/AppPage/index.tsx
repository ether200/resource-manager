import { useSelector } from "react-redux";
import { ModalProps } from "../../pages/Subjects";
import { RootStore } from "../../redux/store";

import ErrorPage from "../ErrorPage";
import SubjectInfo from "../SubjectInfo";
import Resources from "../Resources";
import Spinner from "../Spinner";

import { Container, Box } from "@chakra-ui/react";

const AppPage: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const { selectedSubject, subjectLoading, subjectError } = useSelector(
    (state: RootStore) => state.subjectState
  );
  const { resourceLoading } = useSelector(
    (state: RootStore) => state.resourceState
  );

  if (subjectError) return <ErrorPage errorMessage={subjectError} />;
  return (
    <Box width="100%" paddingY={2} flex={1} display="flex" alignItems="center">
      <Container maxW="container.xl" marginX="auto">
        {!subjectLoading && !resourceLoading && selectedSubject.length > 0 ? (
          <>
            <SubjectInfo setIsModalOpen={setIsModalOpen} />
            <Resources setIsModalOpen={setIsModalOpen} />
          </>
        ) : (
          <Spinner />
        )}
      </Container>
    </Box>
  );
};

export default AppPage;
