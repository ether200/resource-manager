import ReactPlayer from "react-player";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
  deleteResource,
  selectResourceToEdit,
} from "../../redux/actions/resourceActions";

import { HiHashtag } from "react-icons/hi";
import { FiEdit, FiTrash } from "react-icons/fi";

import {
  Box,
  Tag,
  TagLabel,
  TagLeftIcon,
  Stack,
  IconButton,
  StackDivider,
  Heading,
} from "@chakra-ui/react";

type Props = {
  _id: string;
  title: string;
  url: string;
  tag?: string | undefined;
  setIsModalOpen: (a: boolean) => void;
};

const Resource: React.FC<Props> = ({
  _id,
  title,
  url,
  tag,
  setIsModalOpen,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = (resourceId: string) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ffc832",
      cancelButtonColor: "#2d678c",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteResource(resourceId));
      }
    });
  };

  const editHandler = (resourceId: string) => {
    dispatch(selectResourceToEdit({ _id: resourceId, title, url, tag }));
    setIsModalOpen(true);
  };

  return (
    <Stack
      direction="column"
      padding={4}
      boxShadow="xl"
      spacing={4}
      divider={<StackDivider />}
    >
      <Box width="100%" height="280px">
        <ReactPlayer url={url} width="100%" height="100%" controls={true} />
      </Box>
      <Heading size="md" color="primary.800" textAlign="center">
        {title}
      </Heading>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Box>
          <Tag
            size="md"
            variant="subtle"
            bgColor="primary.400"
            color="white"
            textTransform="uppercase"
          >
            <TagLeftIcon boxSize="14px" as={HiHashtag} />
            <TagLabel>{tag}</TagLabel>
          </Tag>
        </Box>
        <Stack
          direction="row"
          width="100%"
          alignItems="center"
          justifyContent="flex-end"
        >
          <IconButton
            variant="outline"
            size="sm"
            colorScheme="twitter"
            aria-label="Edit resource"
            icon={<FiEdit />}
            onClick={() => editHandler(_id)}
          />
          <IconButton
            size="sm"
            variant="outline"
            colorScheme="twitter"
            aria-label="Edit resource"
            icon={<FiTrash />}
            onClick={() => deleteHandler(_id)}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Resource;
