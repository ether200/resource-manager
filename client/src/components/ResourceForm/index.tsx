import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResourceSchema } from "../../yup";
import { ModalProps } from "../../pages/Subjects";
import { RootStore } from "../../redux/store";

// Action creators
import {
  createResource,
  editResource,
} from "../../redux/actions/resourceActions";

// Components
import FormInput from "../FormInput";
import { Box, Heading, VStack, Button } from "@chakra-ui/react";

export interface ResourceFormValues {
  title: string;
  url: string;
  tag?: string;
}

const ResourceForm: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();
  const { selectedSubject } = useSelector(
    (state: RootStore) => state.subjectState
  );
  const { selectedResource } = useSelector(
    (state: RootStore) => state.resourceState
  );

  // Define the action the form will take
  const action =
    selectedResource.length === 0
      ? { title: "Create new resource", action: "Create" }
      : { title: "Edit resource", action: "Edit" };

  const { register, handleSubmit, errors } = useForm<ResourceFormValues>({
    mode: "onBlur",
    resolver: yupResolver(ResourceSchema),
  });

  const onSubmit: SubmitHandler<ResourceFormValues> = ({ title, url, tag }) => {
    if (action.action === "Create") {
      const newResource = { title, url, tag, subject: selectedSubject[0]._id };
      dispatch(createResource(newResource));
      setIsModalOpen(false);
    } else {
      const editedResource = { title, url, tag };
      dispatch(editResource(editedResource, selectedResource[0]._id));
      setIsModalOpen(false);
    }
  };

  return (
    <Box
      width={{ base: "300px", sm: "430px" }}
      bgColor="white"
      paddingY={8}
      paddingX={4}
      borderRadius="lg"
      boxShadow="lg"
      onClick={(e) => e.stopPropagation()}
    >
      <Heading
        marginBottom={8}
        size="lg"
        textAlign="center"
        color="primary.600"
      >
        {action.title}
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormInput
            id="title"
            name="title"
            type="text"
            label="Title"
            register={register}
            errors={errors.title}
            placeholder="Title of your resource"
            required
            defaultValue={selectedResource[0]?.title}
          />
          <FormInput
            id="url"
            name="url"
            type="text"
            label="Video URL"
            register={register}
            errors={errors.url}
            placeholder="https://youtu.be/DdvhZj7SsEM"
            required
            defaultValue={selectedResource[0]?.url}
          />
          <FormInput
            id="tag"
            name="tag"
            type="text"
            label="Tag"
            register={register}
            errors={errors.tag}
            placeholder="This field is optional"
            defaultValue={selectedResource[0]?.tag}
          />
          <Button
            variant="solid"
            size="md"
            type="submit"
            width="100%"
            colorScheme="primary"
          >
            {action.action}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ResourceForm;
