"use client"
import QuestionContainer from "./questionContainer";
import RightSide from "./rightSide";

export default function Content() {
    return (
        <div className="absolute pt-6 w-10/12 left-1/2 top-20 transform -translate-x-1/2 flex gap-x-2.5">
            <RightSide />
            <QuestionContainer />
        </div>
    )
}