import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { FaFolderOpen } from "react-icons/fa";

import { Button } from "@chakra-ui/react";

type SubjectProps = {
  name: string;
  _id: string;
};

const Subject = ({ name, _id }: SubjectProps) => {
  const history = useHistory();
  const { selectedSubject } = useSelector(
    (state: RootStore) => state.subjectState
  );
  return (
    <Button
      disabled={selectedSubject[0]?._id === _id}
      onClick={() => history.push(`/subjects/${_id}`)}
      bgColor="primary.400"
      _hover={{
        backgroundColor: "primary.500",
      }}
      variant="outline"
      leftIcon={<FaFolderOpen />}
      color="white"
      textTransform="capitalize"
      width="100%"
    >
      {name}
    </Button>
  );
};

export default Subject;
