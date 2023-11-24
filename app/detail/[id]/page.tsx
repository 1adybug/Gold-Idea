import { Fragment } from "react"
import Avator from "../../../assets/avator.jpg"
import XvTengAvator from "../../../assets/XvTengAvator.jpg"
import Header from "../../../components/header"
import DetailFirstSection from "../../../components/detailFirstSection"
import DetailSecondSection from "../../../components/detailSecondSection"
import LeftSideToolbar from "../../../components/leftSideToolbar"

export interface Unit {
    id: string
    unitNo: string
    unitName: string
}

const userDemo = {
    userId: "0000",
    avator: Avator,
    userName: "王勇",
    policeNo: "082xxx",
    phone: "19942372693",
    unit: "黄码派出所"
}

const questionDemo = {
    id: "000",
    content: "为什么我将网站用Next.js重写了？",
    goal: "Next.js 是一个用于构建 React 应用的开发框架，它提供了一些功能和优势，使得开发者能够更轻松、高效地构建现代的 Web 应用。",
    createTime: "2023-11-22 13:55:01",
    quizzer: {
        userId: "0000",
        avator: XvTengAvator,
        userName: "徐腾",
        policeNo: "082xxx",
        phone: "19942372693",
        unit: "黄码派出所"
    },
    comments: [
        {
            commentId: "c000",
            questionId: "q000",
            userId: "u000",
            parentCommentId: "pc000",
            content: "这是第一条友善的评论",
            createTime: "2023-11-23 09:51",
            updateTime: "2023-11-23 09:51"
        },
        {
            commentId: "c000",
            questionId: "q000",
            userId: "u000",
            parentCommentId: "pc000",
            content: "这是第二条友善的评论",
            createTime: "2023-11-23 09:51",
            updateTime: "2023-11-23 09:51"
        },
        {
            commentId: "c000",
            questionId: "q000",
            userId: "u000",
            parentCommentId: "pc000",
            content: "这是第三条友善的评论",
            createTime: "2023-11-23 09:51",
            updateTime: "2023-11-23 09:51"
        }
    ]
}

export default function Page({ params }: { params: { id: string } }) {

    const { id } = params

    function handleAvatorClick() {

    }

    function handlePublishProblem() {

    }

    return (
        <Fragment>
            <Header isHomePage={false} />
            <LeftSideToolbar />
            <div className="w-full h-scree flex flex-col gap-y-10 justify-center items-center pt-[110px]">
                <DetailFirstSection id={questionDemo.id} content={questionDemo.content} goal={questionDemo.goal} createTime={questionDemo.createTime} quizzer={questionDemo.quizzer} comments={questionDemo.comments} />
                <DetailSecondSection userDemo={userDemo} question={questionDemo} />
            </div>
        </Fragment>
    )
}


