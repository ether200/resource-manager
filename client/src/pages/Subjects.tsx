import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../redux/store";

// Action creators
import { getSubject } from "../redux/actions/subjectActions";

// Components
import { Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import WelcomePage from "../components/WelcomePage";
import AppPage from "../components/AppPage";
import ResourceForm from "../components/ResourceForm";
import Modal from "../components/Modal";

type MatchParams = {
  id: string;
};

export type ModalProps = {
  isModalOpen?: boolean;
  setIsModalOpen: (a: boolean) => void;
};

const Subjects: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const dispatch = useDispatch();
  // Subject ID: shows when it's selected
  const keyword = match.params.id;

  const { authorized } = useSelector((state: RootStore) => state.userState);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch subject if there's a subject selected
    if (keyword && authorized) {
      dispatch(getSubject(keyword));
    }
  }, [keyword, authorized, dispatch]);

  return (
    <Stack minHeight="100vh" direction="column">
      <Navbar />
      {/* If there's no subject selected, show the home page */}
      {!keyword ? <WelcomePage /> : <AppPage setIsModalOpen={setIsModalOpen} />}

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ResourceForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </Stack>
  );
};

export default Subjects;
