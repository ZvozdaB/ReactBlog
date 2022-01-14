import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PostInfoBox } from "../CommonUsed/PostInfoBox/PostInfoBox";
import { SubMenu } from "../CommonUsed/SubMenu/SubMenu";
import { DeleteAnno } from "../../services/store/actions/announcements";

const AnnoCard = ({ anno, userId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(DeleteAnno(anno.id));
  };
  const onEdit = () => navigate(`/announcements/${anno.id}/edit`);
  return (
    <div className="  bg-white rounded-md p-4 shadow-lg">
      <div className="relative">
        <PostInfoBox updatedAt={anno.updatedAt} user={anno.user} />
        {anno.userId === userId && (
          <SubMenu
            onDelete={onDelete}
            deleteQuestion="Sure you want to delete the announcement ?"
            onEdit={onEdit}
          />
        )}
      </div>
      <div className="font-bold text-xl mb-2">{anno.title}</div>
      <p>{anno.body}</p>
    </div>
  );
};

export { AnnoCard };
