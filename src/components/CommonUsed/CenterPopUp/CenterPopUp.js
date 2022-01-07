import { useEffect } from "react";
import { setBlockScreen } from "../../../custom hooks/setBlockScreen";

export default function CenterPopUp({ onClick, children }) {
  useEffect(() => {
    setBlockScreen();
    return () => setBlockScreen();
  }, []);
  return (
    <>
      <div
        className="fixed inset-0 bg-[rgba(96,165,250,.6)] z-40"
        onClick={onClick}
      ></div>
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-screen overflow-y-auto">
        <div className="animate-appear">{children}</div>
      </div>
    </>
  );
}