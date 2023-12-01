import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "."

export default async function addComment(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).json({ message: "请求方式出错！" })
    const body = JSON.parse(req.body)
    const { questionId, content, publisherId } = body

    if (questionId !== undefined && typeof questionId !== "number") return res.status(400).json({ message: "问题id参数类型错误！" })
    if (content !== undefined && typeof content !== "string") return res.status(400).json({ message: "内容参数类型错误！" })
    if (publisherId !== undefined && typeof publisherId !== "number") return res.status(400).json({ message: "发布者id参数类型错误！" })

    try {
        const addCommentRes = await prisma.comment.create({
            data: {
                questionId,
                content,
                publisherId
            }
        })
        res.status(200).json(addCommentRes)
    } catch (err) {
        res.status(400).json({ message: "添加评论出错！" })
    }
}
