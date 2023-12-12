import { wyDeepClone } from "wangyong-utils"
import { CommentItem } from "../components/comments"

export default function traverseChildComments(comment: CommentItem) {
    const result: CommentItem = wyDeepClone(comment)
    result.childComments = wyDeepClone(flattenChildComments(result.childComments))
    return result
}

export function flattenChildComments(comments: CommentItem[]) {
    let flattenedComments: CommentItem[] = []

    for (const comment of comments) {
        flattenedComments.push(comment)
        if (comment.childComments && comment.childComments.length > 0) {
            const childComments = flattenChildComments(comment.childComments)
            flattenedComments = flattenedComments.concat(childComments)
        }
    }

    return flattenedComments
}
