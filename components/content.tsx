"use client"
import QuestionContainer, { Question } from "./questionContainer";
import Drainage from "./drainage";
import { sortByCommentsCount, sortByUpdateTimeDesc } from "../utils/questionSort";
import { useEffect, useState } from "react";
import { pagingRequest } from "../pages/api";

export default function Content() {

    const [questions, setQuestions] = useState<Question[]>([])
    const [pageNo, setPageNo] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        init()
    }, [pageNo])

    async function init() {
        const res = await pagingRequest(pageNo, pageSize)
        if (!res) return
        if (questions.length) {
            setQuestions(sortByCommentsCount([...questions, ...res]))
            return
        }
        setQuestions(res)
    }

    function handleSortChangeClick(firstKey: number, secondKey: number) {
        if (firstKey === 2) {
            setQuestions(sortByCommentsCount(questions))
            return
        }
    }

    function handleScrollToBottom(newPageNo: number) {
        setPageNo(newPageNo)
    }

    return (
        <div className="absolute pt-6 w-10/12 left-1/2 top-20 transform -translate-x-1/2 flex gap-x-2.5">
            <Drainage onSortChange={handleSortChangeClick} />
            <QuestionContainer questions={questions} pageNo={pageNo} onScrollToBottom={handleScrollToBottom} />
        </div>
    )
}