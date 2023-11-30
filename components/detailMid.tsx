"use client"
import { Fragment, useState } from "react"
import DetailFirstSection, { User } from "./detailFirstSection"
import DetailSecondSection from "./detailSecondSection"
import { Question } from "./questionContainer"
import QuestionModal, { QuestionModalSource } from "./questionModal"

export interface DetailMidProps {
    question: Question
    userDemo: User
}

export default function DetailMid(props: DetailMidProps) {

    const { question, userDemo } = props

    const [modalOpen, setModalOpen] = useState(false)
    const [modalSource, setModalSource] = useState<QuestionModalSource>("addGoal")

    function handleFunctionClick(source: QuestionModalSource) {
        console.log(source);
        setModalSource(source)
        setModalOpen(true)
    }

    function handleAddReplyClick(source: QuestionModalSource) {
        console.log(source);
        setModalSource(source)
        setModalOpen(true)
    }

    return (
        <Fragment>
            <div className="w-full h-screen mt-[140px] flex flex-col gap-y-10 justify-center items-center pt-[110px]">
                <DetailFirstSection id={question.id} content={question.content} goal={question.goal} createTime={question.createTime} comments={question.comments} publisher={question.publisher} onFunctionClick={handleFunctionClick} />
                <DetailSecondSection userDemo={userDemo} question={question} onAddReplyClick={handleAddReplyClick} />
            </div>
            <QuestionModal open={modalOpen} source={modalSource} onCloseModal={() => setModalOpen(false)} />
        </Fragment>
    )
}