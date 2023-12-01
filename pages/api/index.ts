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

export async function addGoal(questionId: number, goal: string, publisherId: number) {
    const res = await fetch("/api/addGoal", {
        method: "POST",
        body: JSON.stringify({
            questionId,
            goal,
            publisherId
        })
    })
    if (res.status !== 200) throw new Error("创建目的出错！")
    const data = await res.json()
    return data
}

export async function addComment(questionId: number, content: string, publisherId: number) {
    const res = await fetch("/api/addComment", {
        method: "POST",
        body: JSON.stringify({
            questionId,
            content,
            publisherId
        })
    })
    if (res.status !== 200) throw new Error("添加评论出错！")
    const data = await res.json()
    return data
}
