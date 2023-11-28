import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "."

export default async function createQuestion(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body)
    try {
        const addRes = await prisma.question.create({ data: { content: body.content } })
        res.status(200).json(addRes)
    } catch (err) {
        res.status(400).json({ message: "创建问题出错！" })
    }
}