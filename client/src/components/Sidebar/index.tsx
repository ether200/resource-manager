import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

import Spinner from "../Spinner";
import SubjectForm from "../SubjectForm";
import Subjects from "../Subjects";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  const { subjectLoading } = useSelector(
    (state: RootStore) => state.subjectState
  );

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Heading
            fontSize="2xl"
            marginTop={8}
            marginBottom={4}
            textAlign="center"
            color="primary.800"
          >
            Subjects
          </Heading>
        </DrawerHeader>
        <DrawerBody>
          {!subjectLoading ? (
            <>
              <SubjectForm />
              <Subjects />
            </>
          ) : (
            <Spinner />
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
