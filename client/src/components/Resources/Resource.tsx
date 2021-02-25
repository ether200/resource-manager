import ReactPlayer from "react-player";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
  deleteResource,
  selectResourceToEdit,
} from "../../redux/actions/resourceActions";
import { ResourceCard } from "./Resources.styles";
import { EditIcon, TrashIcon } from "../../styles/Icons.Styles";

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
    <ResourceCard>
      <div className="video-wrapper">
        <ReactPlayer url={url} width="100%" height="100%" controls={true} />
      </div>
      <h4>{title}</h4>
      <div className="content">
        <div className="tag">{tag && "#" + tag}</div>
        <div className="icons">
          <button>
            <EditIcon onClick={() => editHandler(_id)} />
          </button>
          <button onClick={() => deleteHandler(_id)}>
            <TrashIcon />
          </button>
        </div>
      </div>
    </ResourceCard>
  );
};

export default Resource;
