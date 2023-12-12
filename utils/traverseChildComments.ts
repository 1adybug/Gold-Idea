import { CommentItem } from "../components/comments"

export default function traverseChildComments(comment: CommentItem) {
    let resultArr = [comment]
    for (const childComment of comment.childComments) {
        resultArr = resultArr.concat(traverseChildComments(childComment))
    }
    return resultArr
}
