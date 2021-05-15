import { useSelector } from "react-redux";
import { ResourceWrapper } from "./Resources.styles";
import { ModalProps } from "../../pages/Subjects";
import { RootStore } from "../../redux/store";

import { SimpleGrid, Container } from "@chakra-ui/react";

import Resource from "./Resource";

const Resources: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const { resources } = useSelector((state: RootStore) => state.resourceState);

  return (
    <SimpleGrid minChildWidth="370px" spacing="30px">
      {resources.map((resource) => (
        <Resource
          key={resource._id}
          setIsModalOpen={setIsModalOpen}
          {...resource}
        />
      ))}
    </SimpleGrid>
  );
};

export default Resources;
