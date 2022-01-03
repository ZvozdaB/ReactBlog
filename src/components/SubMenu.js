import { useState } from "react";
import editIcon from "../assets/icon/edit.svg";
import deleteIcon from "../assets/icon/delete.svg";
import QuestionBox from "../custom hooks/QuestionBox";

export default function SubMenu({ onEdit, onDelete, deleteQuestion }) {
  let [subMenuOpen, setSubMenuOpen] = useState(false);
  let subMenuHandler = () => setSubMenuOpen(!subMenuOpen);

  let [deleteBox, setDeleteBox] = useState(false);
  let deleteHandler = () => setDeleteBox(!deleteBox);
  let deleteClick = () => {
    onDelete();
    deleteHandler();
  };
  return (
    <>
      <div
        className={
          "absolute right-2 top-3 flex flex-col items-end " +
          (subMenuOpen && "z-20")
        }
      >
        <div className=" cursor-pointer p-1 " onClick={subMenuHandler}>
          <div className="w-1 h-1 rounded-full bg-gray-700 "></div>
          <div className="w-1 h-1 rounded-full bg-gray-700 my-1"></div>
          <div className="w-1 h-1 rounded-full bg-gray-700 "></div>
        </div>
        {subMenuOpen && (
          <div className="py-3 px-5 border flex flex-col items-start bg-white">
            <div className="flex items-center" onClick={onEdit}>
              <img src={editIcon} className=" h-4 pr-2" />
              <button className="hover:underline">Edit</button>
            </div>

            <div
              className="flex items-center"
              onClick={() => {
                deleteHandler();
                subMenuHandler();
              }}
            >
              <img src={deleteIcon} className=" h-4 pr-2" />
              <button className="hover:underline">Delete</button>
            </div>
          </div>
        )}
      </div>
      {subMenuOpen && (
        <div className="fixed inset-0 z-10" onClick={subMenuHandler}></div>
      )}
      {deleteBox && (
        <QuestionBox
          YesText="Delete"
          YesClick={deleteClick}
          NoClick={deleteHandler}
          question={deleteQuestion}
        />
      )}
    </>
  );
}
