import { wyDeepClone } from "wangyong-utils"
import { CommentItem } from "../components/comments"

export default function traverseChildComments(comment: CommentItem) {
    let resultArr: CommentItem[] = []
    for (const childComment of comment.childComments) {
        resultArr = resultArr.concat(traverseChildComments(childComment))
    }
    comment.childComments = wyDeepClone(resultArr)
    return comment
}
