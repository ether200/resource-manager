import { useSelector } from "react-redux";
import { ModalProps } from "../../pages/Subjects";
import { RootStore } from "../../redux/store";

import { SimpleGrid } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import Resource from "./Resource";

const Resources: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const { resources } = useSelector((state: RootStore) => state.resourceState);

  return (
    <SimpleGrid minChildWidth="310px" spacing="24px" paddingY={4}>
      <AnimatePresence>
        {resources.map((resource) => (
          <Resource
            key={resource._id}
            setIsModalOpen={setIsModalOpen}
            {...resource}
          />
        ))}
      </AnimatePresence>
    </SimpleGrid>
  );
};

export default Resources;
