"use client"
import { Fragment, useState } from "react"
import Avator from "../../../assets/avator.jpg"
import { StaticImageData } from "next/image"
import Image from "next/image"
import Header from "../../components/header"
import Comments from "../../components/comments"
import { PageProps } from "../../../.next/types/app/layout"
import DetailFirstSection from "../../components/detailFirstSection"
import DetailSecondSection from "../../components/detailSecondSection"

export interface User {
    userId: string
    avator: StaticImageData
    userName: string
    policeNo: string
    phone: string,
    unit: string
}

export interface QuestionDetail {
    id: string
    content: string
    goal: string
    createTime: string
    quizzer: User,
    comments: {
        id: string,
        content: string,
        createTime: string,
        quizzer: User
    }[]
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
        avator: Avator,
        userName: "王勇",
        policeNo: "082xxx",
        phone: "19942372693",
        unit: "黄码派出所"
    },
    comments: [
        {
            id: "0010",
            content: "这是第一条友善的评论",
            createTime: "2023-11-22 16:00:03",
            quizzer: {
                userId: "0000",
                avator: Avator,
                userName: "王勇",
                policeNo: "082xxx",
                phone: "19942372693",
                unit: "黄码派出所"
            }
        },
        {
            id: "0012",
            content: "这是第二条友善的评论",
            createTime: "2023-11-22 16:00:05",
            quizzer: {
                userId: "0000",
                avator: Avator,
                userName: "王勇",
                policeNo: "082xxx",
                phone: "19942372693",
                unit: "黄码派出所"
            }
        },
        {
            id: "0012",
            content: "这是第三条友善的评论",
            createTime: "2023-11-22 16:00:06",
            quizzer: {
                userId: "0000",
                avator: Avator,
                userName: "王勇",
                policeNo: "082xxx",
                phone: "19942372693",
                unit: "黄码派出所"
            }
        }
    ]
}

export default function Page({ params }: PageProps) {

    const { id } = params
    const [question, setQuestion] = useState<QuestionDetail>(questionDemo)

    function handleAvatorClick() {

    }

    function handlePublishProblem() {

    }

    return (
        <Fragment>
            <Header onAvatorClick={handleAvatorClick} onPublishProblem={handlePublishProblem} isHomePage={false} />
            <div className="w-full h-scree flex flex-col gap-y-10 justify-center items-center pt-[110px]">
                <DetailFirstSection id={question.id} content={question.content} goal={question.goal} createTime={question.createTime} quizzer={question.quizzer} comments={question.comments} />
                <DetailSecondSection userDemo={userDemo} question={question} />
            </div>
        </Fragment>
    )
}


