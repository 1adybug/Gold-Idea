"use server"
import { Fragment } from "react"
import Avator from "../../../assets/avator.jpg"
import Header from "../../../components/header"
import DetailFirstSection from "../../../components/detailFirstSection"
import DetailSecondSection from "../../../components/detailSecondSection"
import LeftSideToolbar from "../../../components/leftSideToolbar"
import { Question } from "../../../components/questionContainer"
import { API_BASE_URL } from "../../../constant/publicURL"

export interface Unit {
    id: string
    unitNo: string
    unitName: string
}

const userDemo = {
    id: "0000",
    avator: Avator,
    userName: "王勇",
    policeNo: "082xxx",
    phone: "19942372693",
    unitId: "黄码派出所",
    commentId: 1,
    unit: {
        id: "0000",
        unitNo: "0000",
        unitName: "黄码派出所"
    }
}

async function findQuestionById(id: string) {
    const res = await fetch(`${API_BASE_URL}/findQuestionByID?id=${id}`, { cache: 'no-store' })
    if (!res.ok) return
    return res.json()
}

export default async function Page({ params }: { params: { id: string } }) {

    const { id } = params

    const question: Question = await findQuestionById(id)

    return (
        <Fragment>
            <Header isHomePage={false} />
            <LeftSideToolbar />
            <div className="w-full h-scree flex flex-col gap-y-10 justify-center items-center pt-[110px]">
                <DetailFirstSection id={question.id} content={question.content} goal={question.goal} createTime={question.createTime} comments={question.comments} publisher={question.publisher} />
                <DetailSecondSection userDemo={userDemo} question={question} />
            </div>
        </Fragment>
    )
}


