import { useSelector } from "react-redux";
import { ModalProps } from "../../pages/Subjects";
import { RootStore } from "../../redux/store";

import ErrorPage from "../ErrorPage";
import SubjectInfo from "../SubjectInfo";
import Resources from "../Resources";
import Spinner from "../Spinner";

import { Container, Stack, Box } from "@chakra-ui/react";

const AppPage: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const { selectedSubject, subjectLoading, subjectError } = useSelector(
    (state: RootStore) => state.subjectState
  );
  const { resourceLoading } = useSelector(
    (state: RootStore) => state.resourceState
  );

  if (subjectError) return <ErrorPage errorMessage={subjectError} />;
  return (
    <>
      {!subjectLoading && !resourceLoading && selectedSubject.length > 0 ? (
        <Stack width="100%" height="100%" paddingY={2} flex={1}>
          <Container maxW="container.xl" marginX="auto">
            <SubjectInfo setIsModalOpen={setIsModalOpen} />
            <Resources setIsModalOpen={setIsModalOpen} />
          </Container>
        </Stack>
      ) : (
        <Box
          minHeight="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Spinner />
        </Box>
      )}
    </>
  );
};

export default AppPage;
