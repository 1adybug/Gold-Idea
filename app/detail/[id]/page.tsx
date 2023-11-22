"use client"
import { Fragment, useState } from "react"
import Avator from "../../../assets/avator.jpg"
import { StaticImageData } from "next/image"
import Image from "next/image"
import Header from "../../components/header"
import Comments from "../../components/comments"

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

export default function Page({ params }: any) {

    const { id } = params
    const [question, setQuestion] = useState<QuestionDetail>(questionDemo)
    const [inputedValue, setInputedValue] = useState("")

    function handleAvatorClick() {

    }

    function handlePublishProblem() {

    }

    function handleTextareaInputChange(event: any) {
        // console.log(event);
        setInputedValue(event.target.value)
    }

    return (
        <Fragment>
            <Header onAvatorClick={handleAvatorClick} onPublishProblem={handlePublishProblem} isHomePage={false} />
            <div className="w-full h-scree flex flex-col gap-y-10 justify-center items-center pt-[110px]">
                <div className="w-[1200px] h-full p-10 rounded bg-white shadow-sm flex flex-col gap-y-10">
                    <div className="flex flex-col gap-y-4">
                        <div className="text-3xl font-semibold">{question.content}</div>
                        <div className="flex gap-x-4 items-center text-xl text-gray-600">
                            <div className="flex gap-x-2.5 items-center">
                                <Image src={question.quizzer.avator} alt="创建者头像" width={36} height={36} className="rounded" />
                                <div className="text-black font-medium">{question.quizzer.userName}</div>
                            </div>
                            <div className="flex gap-x-2.5 items-center">
                                <div>警号：{question.quizzer.policeNo}</div>
                                <div>所属单位：{question.quizzer.unit}</div>
                                <div>发表时间：{question.createTime}</div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-2xl text-gray-600 border-l-[8px] border-blue-600 pl-3">{question.goal}</div>
                    </div>
                </div>
                <div className="w-[1200px] h-full flex flex-col gap-y-6 p-10 rounded bg-white shadow-sm">
                    <div className="text-2xl text-black font-semibold">评论&nbsp;&nbsp;{question.comments.length}</div>
                    <div className="flex gap-x-6">
                        <Image src={userDemo.avator} alt="用户头像" width={56} className="rounded h-[56px]" />
                        <div className="w-full flex flex-col gap-y-10 bg-gray-100 p-3 rounded-md">
                            <textarea onChange={handleTextareaInputChange} className="h-[200px] text-2xl bg-gray-100 focus:outline-none" placeholder="发表一条评论吧！" />
                            <div className="flex items-center gap-x-6 ml-auto">
                                <div className="text-2xl text-gray-500">{inputedValue.length}/1000</div>
                                <button disabled={true} className="w-[110px] h-[50px] flex justify-center items-center text-white text-xl rounded bg-blue-600">发送</button>
                            </div>
                        </div>
                    </div>
                    <Comments />
                </div>
            </div>
        </Fragment>
    )
}


