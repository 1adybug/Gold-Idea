import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") return res.status(405).json({ message: "请求方式出错！" })
    const { id } = req.query
    if (id !== undefined && typeof id !== "string") return res.status(400).json({ message: "请求参数错误！" })
    try {
        const findRes = await prisma.question.findUnique({
            where: {
                id
            }
        })
        if (!findRes) return
        res.status(200).json(findRes)
    } catch (err) {
        res.status(400).json("获取全部问题出错！")
    }
}
