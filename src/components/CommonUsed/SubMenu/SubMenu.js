import editIcon from "../../../assets/icon/edit.svg";
import deleteIcon from "../../../assets/icon/delete.svg";
import QuestionBox from "../QuestionBox/QuestionBox";
import { usePopUp } from "../../../custom hooks/usePopUp";

export default function SubMenu({ onEdit, onDelete, deleteQuestion }) {
  let subMenuOpen = usePopUp();
  let deleteBoxOpen = usePopUp();

  let deleteClick = () => {
    onDelete();
    deleteBoxOpen.handler();
  };
  return (
    <>
      <div className={"absolute right-0 top-1 flex flex-col items-end z-20 "}>
        <div
          className="group cursor-pointer p-1 "
          onClick={subMenuOpen.handler}
        >
          <div className="w-1 h-1 rounded-full bg-gray-700 "></div>
          <div className="w-1 h-1 rounded-full bg-gray-700 my-1"></div>
          <div className="w-1 h-1 rounded-full bg-gray-700 "></div>
        </div>
        {subMenuOpen.value && (
          <>
            <div className="py-3 px-5 border rounded-md shadow flex flex-col items-start bg-white ">
              <div className="flex items-center mb-1" onClick={onEdit}>
                <img src={editIcon} className=" h-4 pr-2" alt="edit icon" />
                <button className="hover:underline">Edit</button>
              </div>
              <div
                className="flex items-center"
                onClick={() => {
                  deleteBoxOpen.handler();
                  subMenuOpen.handler();
                }}
              >
                <img src={deleteIcon} className=" h-4 pr-2" alt="delete icon" />
                <button className="hover:underline">Delete</button>
              </div>
            </div>
          </>
        )}
      </div>
      {subMenuOpen.value && (
        <div className="fixed inset-0 z-10" onClick={subMenuOpen.handler}></div>
      )}

      {deleteBoxOpen.value && (
        <QuestionBox
          YesText="Delete"
          YesClick={deleteClick}
          NoClick={deleteBoxOpen.handler}
          question={deleteQuestion}
        />
      )}
    </>
  );
}
