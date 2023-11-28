import QuestionContainer, { Question } from "./questionContainer";
import RightSide from "./rightSide";

export interface ContentProps {
    questions: Question[]
}

export default function Content(props: ContentProps) {

    const { questions } = props

    return (
        <div className="absolute pt-6 w-10/12 left-1/2 top-20 transform -translate-x-1/2 flex gap-x-2.5">
            <RightSide />
            <QuestionContainer questions={questions} />
        </div>
    )
}