import { Link } from "react-router-dom";
import { usePopUp } from "../../../custom hooks/usePopUp";

const addLink = [
  { id: 1, text: "Post", path: "/addPost" },
  { id: 2, text: "Announcements", path: "/addAnno" },
];

export default function AddBox() {
  let addPopUpOpen = usePopUp();
  return (
    <div className="relative pr-4 font-medium z-20">
      <p
        className="group hover:text-sky-900 transition duration-300 cursor-pointer flex items-center "
        onClick={addPopUpOpen.handler}
      >
        <span>Add</span>
        <span className="font-medium relative w-2 mx-3 transition-transform ">
          <span
            className={
              "w-2.5 h-0.5 bg-white absolute top-2/4 -translate-y-2/4 group-hover:bg-sky-900  duration-300 transition-all  " +
              (addPopUpOpen.value ? " -rotate-[40deg]" : "rotate-[40deg]")
            }
          ></span>
          <span
            className={
              "w-2.5 h-0.5 bg-white absolute top-2/4 left-1.5 -translate-y-2/4 group-hover:bg-sky-900  duration-300 transition-all  " +
              (addPopUpOpen.value ? " rotate-[40deg]" : "-rotate-[40deg]")
            }
          ></span>
        </span>
      </p>

      {addPopUpOpen.value && (
        <>
          <div className="absolute top-full -left-2 bg-slate-50 text-sky-500 border rounded-md p-4 z-20 w-max flex flex-col transition-all ">
            {addLink.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="hover:text-sky-900 transition"
                onClick={addPopUpOpen.handler}
              >
                {link.text}
              </Link>
            ))}
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
