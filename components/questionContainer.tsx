import QuestionCard from "./questionCard"
import { User } from "./detailFirstSection"
import { CommentItem } from "./comments"
export interface Question {
    id: number
    content: string
    goal: string
    comments: CommentItem[]
    createTime: string
    updateTime: string
    publisher: User
}

export interface QuestionContainerProps {
    questions: Question[]
}

export default async function QuestionContainer(props: QuestionContainerProps) {

    const { questions } = props

    return (
        <div className="w-9/12 flex flex-col gap-y-2.5 overflow-y-auto">
            {questions.map((question: Question) => <QuestionCard key={question.id} id={question.id} content={question.content} goal={question.goal} referCount={question.comments.length} createTime={question.createTime} publisher={question.publisher} updateTime={question.updateTime} />)}
        </div>
    )
}