import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSubject } from "../redux/actions/subjectActions";
import { RootStore } from "../redux/store";
import Navbar from "../components/Navbar";
import WelcomePage from "../components/WelcomePage";
import AppPage from "../components/AppPage";
import ResourceForm from "../components/ResourceForm";
import Modal from "../components/Modal";

import { Stack } from "@chakra-ui/react";

type MatchParams = {
  id: string;
};

export type ModalProps = {
  isModalOpen?: boolean;
  setIsModalOpen: (a: boolean) => void;
};

const Subjects: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const dispatch = useDispatch();
  const keyword = match.params.id;

  const { authorized } = useSelector((state: RootStore) => state.userState);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (keyword && authorized) {
      dispatch(getSubject(keyword));
    }
  }, [keyword, authorized, dispatch]);

  return (
    <Stack minHeight="100vh" direction="column">
      <Navbar />
      {!keyword ? <WelcomePage /> : <AppPage setIsModalOpen={setIsModalOpen} />}

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ResourceForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </Stack>
  );
};

export default Subjects;
