import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PostForm } from "../../components/Form/PostForm";
import { CreateAnno } from "../../services/store/actions/announcements";

const AddAnno = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUserLogin } = useSelector((state) => ({
    isUserLogin: state.auth.isUserLogin,
  }));

  const onSubmit = (data) => {
    navigate("/announcements");
    dispatch(CreateAnno(data));
  };
  return (
    <div className="wrapper py-4">
      <h2 className="text-center text-xl font-bold tracking-wide text-sky-600">
        Create new Announcements
      </h2>
      {isUserLogin ? (
        <PostForm
          onSubmit={onSubmit}
          label={{ title: "Title", body: "Announcement text" }}
          placeholder={{ title: "Add title", body: " Add announcements text" }}
        />
      ) : (
        <p className="mb-4 font-semibold underline">
          Only authorized users can add post
        </p>
      )}
    </div>
  );
};

export { AddAnno };
