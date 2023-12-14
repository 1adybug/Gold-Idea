"use client"
import Comments from "./comments"
import { User } from "./detailFirstSection"
import { Question } from "./questionContainer"

export interface DetailSecondSectionProps {
    userDemo: User
    question: Question
    onAddReplySucceed: () => void
    onTopClick: (id: number) => void
}

export default function DetailSecondSection(props: DetailSecondSectionProps) {

    const { question, onAddReplySucceed, onTopClick } = props

    return (
        <div className="w-[1200px] h-auto min-h-[300px] flex flex-col gap-y-6 p-10 rounded bg-white shadow-sm">
            <div className="text-2xl text-black font-semibold">留言&nbsp;&nbsp;{question.comments.length}</div>
            <Comments comments={question.comments} onAddReplySucceed={onAddReplySucceed} onTopClick={onTopClick} />
        </div>
    )
}