import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

export async function addQuestion() {
    const res = await fetch("/api/createQuestion", {
        method: "POST",
        body: JSON.stringify({
            content: "测试问题",
            goal: "测试目的",
            publisherId: 1
        })
    })
    if (res.status !== 200) throw new Error("创建问题出错！")
    const data = await res.json()
    return data
}
