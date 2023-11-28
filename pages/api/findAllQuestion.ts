import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "./index"

export default async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") return res.status(405).json({ message: "请求方式出错！" })
    try {
        const findRes = await prisma.question.findMany({
            include: {
                publisher: true,
                comments: true
            }
        })
        if (!findRes) return
        res.status(200).json(findRes)
    } catch (err) {
        res.status(400).json({ message: "获取全部问题出错！" })
    }
}
