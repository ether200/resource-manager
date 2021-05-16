import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetSelectedResource } from "../../redux/actions/resourceActions";
import { deleteSubject } from "../../redux/actions/subjectActions";
import { ModalProps } from "../../pages/Subjects";
import { RootStore } from "../../redux/store";
import Swal from "sweetalert2";
import moment from "moment";

import { Stack, Text, Button } from "@chakra-ui/react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";

const SubjectInfo: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { selectedSubject, subjectLoading } = useSelector(
    (state: RootStore) => state.subjectState
  );

  const onClickHandler = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "All resources will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ffc832",
      cancelButtonColor: "#2d678c",
      confirmButtonText: "Yes, delete them!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteSubject(id));
        history.push("/subjects");
      }
    });
  };

  return (
    <Stack
      border="1px"
      borderColor="gray.200"
      padding={4}
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent={{ base: "center", md: "space-between" }}
    >
      <Stack
        fontWeight="semibold"
        fontSize="lg"
        textTransform="uppercase"
        color="primary.800"
        textAlign={{ base: "center", md: "left" }}
      >
        <Text>
          Subject: <Text as="span">{selectedSubject[0].name}</Text>
        </Text>
        <Text>Created: {moment(selectedSubject[0].createdAt).fromNow()}</Text>
      </Stack>
      <Stack direction="row">
        <Button
          colorScheme="primary"
          size="sm"
          leftIcon={<AiOutlineFileAdd />}
          onClick={() => {
            dispatch(resetSelectedResource);
            setIsModalOpen(true);
          }}
        >
          New Resource
        </Button>
        <Button
          bgColor="primary.400"
          size="sm"
          leftIcon={<CgDanger />}
          onClick={() => onClickHandler(selectedSubject[0]._id)}
          disabled={subjectLoading}
          _hover={{
            backgroundColor: "primary.500",
          }}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};

export default SubjectInfo;
