"use client"
import { Fragment, useEffect, useState } from "react"
import DetailFirstSection, { User } from "./detailFirstSection"
import DetailSecondSection from "./detailSecondSection"
import { Question } from "./questionContainer"
import QuestionModal, { QuestionModalSource } from "./questionModal"
import { API_BASE_URL } from "../constant/publicURL"

export interface DetailMidProps {
    // question: Question
    questionId: number
    userDemo: User
}

async function findQuestionById(id: number) {
    const res = await fetch(`${API_BASE_URL}/findQuestionByID?id=${id}`, { cache: 'no-store' })
    if (!res.ok) return
    return res.json()
}

export default function DetailMid(props: DetailMidProps) {

    const { questionId, userDemo } = props

    const [modalOpen, setModalOpen] = useState(false)
    const [modalSource, setModalSource] = useState<QuestionModalSource>("addGoal")
    const [thisQuestionId, setThisQuestionId] = useState<number | undefined>(0)
    const [question, setQuestion] = useState<Question | null>(null)

    useEffect(() => {
        fetchQuestion()
    }, [])

    async function fetchQuestion() {
        const res = await findQuestionById(questionId)
        if (!res) return
        setQuestion(res)
    }

    function handleFunctionClick(source: QuestionModalSource, id?: number) {
        setModalSource(source)
        setThisQuestionId(id)
        setModalOpen(true)
    }

    function handleAddReplyClick(source: QuestionModalSource) {
        setModalSource(source)
        setModalOpen(true)
    }

    return (
        <Fragment>
            {question && <div className="w-full h-auto mt-[140px] flex flex-col gap-y-10 justify-center items-center">
                <DetailFirstSection id={question.id} content={question.content} goal={question.goal} createTime={question.createTime} comments={question.comments} publisher={question.publisher} onFunctionClick={handleFunctionClick} />
                <DetailSecondSection userDemo={userDemo} question={question} onAddReplyClick={handleAddReplyClick} />
            </div>}
            <QuestionModal open={modalOpen} source={modalSource} onCloseModal={() => setModalOpen(false)} questionId={thisQuestionId} onFetchNewQuestionDetail={() => fetchQuestion()} />
        </Fragment>
    )
}