import { wyDeepClone } from "wangyong-utils"
import { CommentItem } from "../components/comments"

export default function traverseChildComments(comment: CommentItem) {
    const result: CommentItem = wyDeepClone(comment)
    result.childComments = wyDeepClone(processComments(flattenChildComments(result.childComments)))
    return result
}

function flattenChildComments(comments: CommentItem[]) {
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

function processComments(comments: CommentItem[]) {
    let processedComments: CommentItem[] = []
    let visitedComments = new Set()

    comments.forEach(comment => {
        if (!visitedComments.has(comment.id) && comments.some(child => child.parentId === comment.id)) {
            let mainComment = comment
            let childComments = comments.filter(child => child.parentId === comment.id)

            childComments.sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime())
            processedComments.push(mainComment, ...childComments)

            visitedComments.add(comment.id)
            childComments.forEach(child => visitedComments.add(child.id))
        }
    })

    // 添加未匹配的评论
    comments.forEach(comment => {
        if (!visitedComments.has(comment.id)) {
            processedComments.push(comment)
        }
    })

    return processedComments
}
