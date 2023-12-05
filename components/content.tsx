"use client"
import QuestionContainer, { Question } from "./questionContainer";
import Drainage from "./drainage";
import { sortByCommentsCount, sortByUpdateTimeDesc } from "../utils/questionSort";
import { useEffect, useState } from "react";

export interface ContentProps {
    questions: Question[]
}

export default function Content(props: ContentProps) {

    const { questions } = props

    const [latestQuestions, setLatestQuestions] = useState<Question[]>(sortByUpdateTimeDesc(questions))

    function handleSortChangeClick(firstKey: number, secondKey: number) {
        if (firstKey === 2) {
            setLatestQuestions(sortByCommentsCount(questions))
            return
        }
    }

    return (
        <div className="absolute pt-6 w-10/12 left-1/2 top-20 transform -translate-x-1/2 flex gap-x-2.5">
            <Drainage onSortChange={handleSortChangeClick} />
            <QuestionContainer questions={latestQuestions} />
        </div>
    )
}