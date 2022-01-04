import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sliceText } from "../custom hooks/sliceText";
import PostInfoBox from "./PostInfoBox/PostInfoBox";
import SubMenu from "../custom hooks/SubMenu";
import { DeleteAnno } from "../services/store/actions/announcements";

export default function AnnoCard({ anno, userId }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let onDelete = () => {
    dispatch(DeleteAnno(anno.id));
  };
  let onEdit = () => navigate(`/announcements/${anno.id}/edit`);
  return (
    <div className="border border-sky-200  p-4">
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
