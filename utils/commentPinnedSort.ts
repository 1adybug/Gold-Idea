import { wyDeepClone } from "wangyong-utils"
import { CommentItem } from "../components/comments"
import { User } from "../components/detailFirstSection"

export interface PinnedComment extends CommentItem {
    isPinned: boolean
    pinNote: string
    pinnedUserId: number
    isPinnedBy: User
}

export default function commentPinnedSort(comments: PinnedComment[]) {
    const commentCopy = wyDeepClone(comments)
    return commentCopy.sort((a, b) => {
        if (a.isPinned && !b.isPinned) {
            return -1
        }
        if (!a.isPinned && b.isPinned) {
            return 1
        }
        return 0
    })
}
