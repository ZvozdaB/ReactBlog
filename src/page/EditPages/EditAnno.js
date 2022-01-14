import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PostForm } from "../../components/Form/PostForm";
import {
  getAnnoById,
  UpdateAnno,
} from "../../services/store/actions/announcements";

const EditAnno = () => {
  let { annoId } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { anno, user } = useSelector((state) => ({
    anno: state.anno.anno,
    user: state.auth.user,
  }));

  let onSubmit = (data) => {
    navigate("/announcements");
    dispatch(UpdateAnno({ ...data, annoId }));
  };
  useEffect(() => {
    dispatch(getAnnoById(annoId));
  }, [annoId]);

  return (
    <div className="wrapper py-4">
      <h2 className="text-center text-xl font-bold tracking-wide text-sky-600">
        Edit your announcements
      </h2>
      {user.id === anno?.userId ? (
        <PostForm
          textObg={anno}
          onSubmit={onSubmit}
          label={{ title: "Title", body: "Announcement text" }}
        />
      ) : (
        <p className="mb-4 font-semibold underline">
          {user?.firstname || ""} you can edit only your post
        </p>
      )}
    </div>
  );
};

export { EditAnno };
