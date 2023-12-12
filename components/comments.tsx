import advanceTime from "../utils/timeFormatConversion"
import { CommentSection } from "./commentSection"
import { User } from "./detailFirstSection"
import commentsTimeDescSort from "../utils/commentsTimeDescSort"

export interface CommentItem {
    id: string
    content: string
    publisherId: number
    questionId: number
    createTime: string
    updateTime: string
    publisher: User
    parentId: number
    parent: CommentItem
    childComments: CommentItem[]
}

export interface ReplyItem {
    id: string
    content: string
    publisherId: number
    commentId: number
    createTime: string
    updateTime: string
    publisher: User
}

export interface CommentsProps {
    comments: CommentItem[]
    onAddReplySucceed: () => void
}

export default function Comments(props: CommentsProps) {

    const { comments, onAddReplySucceed } = props

    return (
        <div className="h-full flex flex-col justify-center items-cente">
            {comments.length ? <div className="w-full h-full p-2.5 flex flex-col gap-y-10 pt-10 pb-10">
                {commentsTimeDescSort(comments.filter((comment: CommentItem) => !comment.parentId)).map((comment: CommentItem) => <CommentSection key={comment.id} questionId={comment.questionId} content={comment.content} createTime={advanceTime(comment.createTime)} updateTime={comment.updateTime} id={comment.id} publisherId={comment.publisherId} publisher={comment.publisher} onAddReplySucceed={() => onAddReplySucceed()} comment={comment} parent={comment.parent} parentId={comment.parentId} />)}
            </div> : <div className="text-3xl text-gray-400 flex justify-center">暂无留言</div>}
        </div>
    )
}