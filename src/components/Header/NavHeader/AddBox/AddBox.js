import { Link } from "react-router-dom";
import { usePopUp } from "../../../../custom hooks/usePopUp";

export default function AddBox() {
  let addPopUpOpen = usePopUp();
  return (
    <div className="relative pr-4 font-medium ">
      <p
        className="hover:text-sky-900 transition cursor-pointer"
        onClick={addPopUpOpen.handler}
      >
        <span className="text-lg font-medium">+ </span>
        <span>Add</span>
      </p>

      {addPopUpOpen.value && (
        <>
          <div className="absolute top-full -left-2 bg-blue-400 rounded-md p-2 z-20 w-max flex flex-col">
            <Link to="/addPost" className="hover:text-sky-900 ">
              Post
            </Link>
            <Link to="/addAnno" className="hover:text-sky-900 ">
              Announcements
            </Link>
          </div>
          <div
            className="fixed inset-0 z-10"
            onClick={addPopUpOpen.handler}
          ></div>
        </>
      )}
    </div>
  );
}
