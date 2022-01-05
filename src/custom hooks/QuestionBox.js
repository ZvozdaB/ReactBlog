import Btn from "../components/Btn/Btn";
import CenterPopUp from "../components/CenterPopUp/CenterPopUp";

export default function QuestionBox({ YesText, YesClick, NoClick, question }) {
  return (
    <CenterPopUp onClick={NoClick}>
      <div className=" bg-white rounded-lg max-w-md p-4">
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
