import advanceTime from "../utils/timeFormatConversion"
import { CommentSection } from "./commentSection"
import { User } from "./detailFirstSection"
import { TabBar } from "./tabbar"

export interface CommentItem {
    id: string
    content: string
    publisherId: number
    questionId: number
    createTime: string
    updateTime: string
    publisher: User
}

export default function Comments(props: { comments: CommentItem[] }) {

    const { comments } = props
    
    return (
        <div className="w-full h-full mt-10 flex flex-col">
            <TabBar />
            <div className="w-full h-full p-2.5 flex flex-col gap-y-10 pt-10 pb-10">
                {comments.map((comment: CommentItem) => <CommentSection key={comment.id} questionId={comment.questionId} content={comment.content} createTime={advanceTime(comment.createTime)} updateTime={comment.updateTime} id={comment.id} publisherId={comment.publisherId} publisher={comment.publisher} />)}
            </div>
        </div>
    )
}