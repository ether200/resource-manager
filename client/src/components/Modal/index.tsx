import { createPortal } from "react-dom";
import { Box } from "@chakra-ui/react";

type Props = {
  children: JSX.Element;
  isModalOpen: boolean;
  setIsModalOpen: (a: boolean) => void;
};

const Modal: React.FC<Props> = ({ children, isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) return null;

  return createPortal(
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: "100%",
        minHeight: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        display: "grid",
        placeContent: "center",
      }}
      onClick={() => setIsModalOpen(false)}
    >
      {children}
    </Box>,
    document.body
  );
};

export default Modal;
