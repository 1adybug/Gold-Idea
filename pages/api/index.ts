export async function createQuestion(data: { content: string }) {
    const res = await fetch("./createQuestion", {
        method: "POST",
        body: JSON.stringify(data)
    })
    if (!res.ok) return
    return res.json()
}

export async function findAllQuestions() {
    const res = await fetch("/api/findAllQuestion", {
        method: "GET"
    })
    if (!res.ok) return
    return res.json()
}

export async function findQuestionByID(id: string) {
    const res = await fetch(`./findQuestionByID?id=${id}`, {
        method: "GET"
    })
    if (!res.ok) return
    return res.json()
}
