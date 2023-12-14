import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "."

export async function toTopComment(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).json({ message: "请求方式出错！" })
    const body = JSON.parse(req.body)
    const { commentId, pinNote, userId } = body

    try {
        const toTopCommentRes = await prisma.comment.update({
            where: {
                id: commentId
            },
            data: {
                isPinned: true,
                pinNote,
                pinnedUserId: userId
            }
        })
        if (!toTopCommentRes) return
        res.status(200).json({ message: "置顶成功！" })
    } catch (error) {
        res.status(400).json({ message: "置顶评论出错！" + error })
    }
}
