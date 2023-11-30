"use server"
import { Fragment } from "react"
import Header from "../../../components/header"
import LeftSideToolbar from "../../../components/leftSideToolbar"
import { Question } from "../../../components/questionContainer"
import { API_BASE_URL } from "../../../constant/publicURL"
import Avator from "../../../assets/avator.jpg"
import DetailMid from "../../../components/detailMid"

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
            <DetailMid question={question} userDemo={userDemo}/>
        </Fragment>
    )
}


