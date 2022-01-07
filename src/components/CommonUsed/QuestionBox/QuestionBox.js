import Btn from "../Btn/Btn";
import CenterPopUp from "../CenterPopUp/CenterPopUp";

export default function QuestionBox({ YesText, YesClick, NoClick, question }) {
  return (
    <CenterPopUp onClick={NoClick}>
      <div className=" bg-white rounded-lg max-w-md p-4 text-black">
        <p className="py-4 px-1 text-center font-semibold max-w-xs">
          {question}
        </p>
        <div className="flex justify-between ">
          <Btn cancel onClick={NoClick}>
            Cancel
          </Btn>
          <Btn onClick={YesClick}>{YesText}</Btn>
        </div>
      </div>
    </CenterPopUp>
  );
}
