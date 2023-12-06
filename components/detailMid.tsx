"use client"
import { Fragment, useEffect, useState } from "react"
import DetailFirstSection, { User } from "./detailFirstSection"
import DetailSecondSection from "./detailSecondSection"
import { Question } from "./questionContainer"
import QuestionModal, { QuestionModalSource } from "./questionModal"
import { API_BASE_URL } from "../constant/publicURL"
import { Skeleton } from "antd"
import LeftSideToolbar from "./leftSideToolbar"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

export interface DetailMidProps {
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
    const [gotQuestion, setGotQuestion] = useState(false)

    useEffect(() => {
        NProgress.done()
        fetchQuestion()
    }, [])

    async function fetchQuestion() {
        const res = await findQuestionById(questionId)
        if (!res) return
        setGotQuestion(true)
        setQuestion(res)
    }

    function handleFunctionClick(source: QuestionModalSource, id?: number) {
        setModalSource(source)
        setThisQuestionId(id)
        setModalOpen(true)
    }

    async function onAddReplySucceed() {
        await fetchQuestion()
    }

    return (
        <Fragment>
            {
                gotQuestion ? <Fragment>
                    {question && <div className="w-full h-auto mt-[140px] flex flex-col gap-y-10 justify-center items-center">
                        <DetailFirstSection id={question.id} content={question.content} goal={question.goal} createTime={question.createTime} comments={question.comments} publisher={question.publisher} onFunctionClick={handleFunctionClick} attentions={question.attentions} />
                        <DetailSecondSection userDemo={userDemo} question={question} onAddReplySucceed={onAddReplySucceed} />
                    </div>}
                </Fragment> : <div className="flex justify-center">
                    <Skeleton active className="bg-white p-8 w-[1200px] mt-[140px]" />
                </div>
            }
            {question && <LeftSideToolbar questionId={question.id} collections={question.collections} />}
            <QuestionModal open={modalOpen} source={modalSource} onCloseModal={() => setModalOpen(false)} questionId={thisQuestionId} onFetchNewQuestionDetail={() => fetchQuestion()} />
        </Fragment>
    )
}