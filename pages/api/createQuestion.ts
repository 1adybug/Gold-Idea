import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).json({ message: "请求方式出错！" })
    const body = JSON.parse(req.body)
    try {
        const addRes = await prisma.question.create({ data: { content: body.content } })
        res.status(200).json(addRes)
    } catch (err) {
        res.status(400).json({ message: "创建问题出错！" })
    }
}
