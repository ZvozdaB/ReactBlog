import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import PostInfoBox from "../CommonUsed/PostInfoBox/PostInfoBox";
import SubMenu from "../CommonUsed/SubMenu/SubMenu";
import { DeleteAnno } from "../../services/store/actions/announcements";

export default function AnnoCard({ anno, userId }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let onDelete = () => {
    dispatch(DeleteAnno(anno.id));
  };
  let onEdit = () => navigate(`/announcements/${anno.id}/edit`);
  return (
    <div className="  bg-white rounded-md p-4 shadow-lg">
      <div className="relative">
        <PostInfoBox updatedAt={anno.updatedAt} userId={anno.userId} />
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
}
