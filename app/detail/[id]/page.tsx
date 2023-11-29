"use server"
import { Fragment } from "react"
import Avator from "../../../assets/avator.jpg"
import Header from "../../../components/header"
import DetailFirstSection from "../../../components/detailFirstSection"
import DetailSecondSection from "../../../components/detailSecondSection"
import LeftSideToolbar from "../../../components/leftSideToolbar"
import { Question } from "../../../components/questionContainer"

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
}

// const questionDemo = {
//     id: "000",
//     content: "为什么我将网站用Next.js重写了？",
//     goal: "Next.js 是一个用于构建 React 应用的开发框架，它提供了一些功能和优势，使得开发者能够更轻松、高效地构建现代的 Web 应用。",
//     createTime: "2023-11-22 13:55:01",
//     quizzer: {
//         userId: "0000",
//         avator: XvTengAvator,
//         userName: "徐腾",
//         policeNo: "082xxx",
//         phone: "19942372693",
//         unit: "黄码派出所"
//     },
//     comments: [
//         {
//             commentId: "c000",
//             questionId: "q000",
//             userId: "u000",
//             parentCommentId: "pc000",
//             content: "这是第一条友善的评论",
//             createTime: "2023-11-23 09:51",
//             updateTime: "2023-11-23 09:51"
//         },
//         {
//             commentId: "c000",
//             questionId: "q000",
//             userId: "u000",
//             parentCommentId: "pc000",
//             content: "这是第二条友善的评论",
//             createTime: "2023-11-23 09:51",
//             updateTime: "2023-11-23 09:51"
//         },
//         {
//             commentId: "c000",
//             questionId: "q000",
//             userId: "u000",
//             parentCommentId: "pc000",
//             content: "这是第三条友善的评论",
//             createTime: "2023-11-23 09:51",
//             updateTime: "2023-11-23 09:51"
//         }
//     ]
// }

async function findQuestionById(id: string) {
    const res = await fetch(`http://localhost:3000/api/findQuestionByID?id=${id}`, { cache: 'no-store' })
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


