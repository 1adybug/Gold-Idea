import { Fragment } from "react"
import advanceTime from "../utils/timeFormatConversion"
import { CommentSection } from "./commentSection"
import { User } from "./detailFirstSection"
import { QuestionModalSource } from "./questionModal"

export interface CommentItem {
    id: string
    content: string
    publisherId: number
    questionId: number
    createTime: string
    updateTime: string
    publisher: User
}

export interface CommentsProps {
    comments: CommentItem[]
    onAddReplyClick: (source: QuestionModalSource) => void
}

export default function Comments(props: CommentsProps) {

    const { comments, onAddReplyClick } = props

    return (
        <Fragment>
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-full p-2.5 flex flex-col gap-y-10 pt-10 pb-10">
                    {comments.map((comment: CommentItem) => <CommentSection key={comment.id} questionId={comment.questionId} content={comment.content} createTime={advanceTime(comment.createTime)} updateTime={comment.updateTime} id={comment.id} publisherId={comment.publisherId} publisher={comment.publisher} onAddReplyClick={() => onAddReplyClick("addReply")} />)}
                </div>
            </div>
        </Fragment>
    )
}