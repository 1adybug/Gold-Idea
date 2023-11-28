import QuestionCard from "./questionCard"

export interface Question {
    id: string
    content: string
    goal: string
    comments: Comment[]
    createTime: string
}

export interface QuestionContainerProps {
    questions: Question[]
}

export default async function QuestionContainer(props: QuestionContainerProps) {

    const { questions } = props

    return (
        <div className="w-9/12 flex flex-col gap-y-2.5 overflow-y-auto">
            {questions.map((question: Question) => <QuestionCard key={question.id} id={question.id} content={question.content} goal={question.goal} referCount={question.comments.length} createTime={question.createTime} />)}
        </div>
    )
}