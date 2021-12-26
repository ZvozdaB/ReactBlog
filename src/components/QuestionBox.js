import Btn from "./Btn";
import CenterPopUp from "./CenterPopUp";

export default function QuestionBox({YesText,YesClick,NoClick,question}){
    return (
        <CenterPopUp onClick={NoClick}>
            <div className=" bg-white rounded-lg max-w-md">
                <p className="py-4 px-6 text-center">{question}</p>
                <div className="flex">
                    <Btn className="bg-white text-black grow border-red-500 border" onClick={NoClick}>Cancel</Btn>
                    <Btn className="grow" onClick={YesClick}>{YesText}</Btn>
                </div>
            </div>
        </CenterPopUp >
    )
}