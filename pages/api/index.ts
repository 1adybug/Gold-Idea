import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

export async function addQuestion(content: string, publisherId: number) {
    const res = await fetch("/api/createQuestion", {
        method: "POST",
        body: JSON.stringify({
            content,
            publisherId
        })
    })
    if (res.status !== 200) throw new Error("创建问题出错！")
    const data = await res.json()
    return data
}
