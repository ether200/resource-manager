import { useSelector } from "react-redux";
import { SidebarWrapper } from "./Sidebar.styles";
import { CloseIcon } from "../../styles/Icons.Styles";
import { SidebarNavProps } from "../../pages/Subjects";
import { RootStore } from "../../redux/store";

import Spinner from "../Spinner";
import SubjectForm from "../SubjectForm";
import Subjects from "../Subjects";

const Sidebar: React.FC<SidebarNavProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { subjectLoading } = useSelector(
    (state: RootStore) => state.subjectState
  );

  return (
    <SidebarWrapper className={isSidebarOpen ? "open" : ""}>
      <div className="buttonWrapper">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <CloseIcon />
        </button>
      </div>
      {!subjectLoading ? (
        <>
          <SubjectForm />
          <hr />
          <Subjects />
        </>
      ) : (
        <Spinner />
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
