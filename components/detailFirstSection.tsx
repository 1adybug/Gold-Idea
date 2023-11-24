import Image, { StaticImageData } from "next/image"
import { CommentItem } from "./comments"

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
    comments: CommentItem[]
}

export default function DetailFirstSection(props: QuestionDetail) {

    const { content, quizzer, createTime, goal } = props

    return (
        <div className="w-[1200px] h-full p-10 rounded bg-white shadow-sm flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-4">
                <div className="text-3xl font-semibold">{content}</div>
                <div className="flex gap-x-4 items-center text-xl text-gray-600">
                    <div className="flex gap-x-2.5 items-center">
                        <Image src={quizzer.avator} alt="创建者头像" width={36} height={36} className="rounded" />
                        <div className="text-black font-medium">{quizzer.userName}</div>
                    </div>
                    <div className="flex gap-x-2.5 items-center text-gray-400">
                        <div>警号：{quizzer.policeNo}</div>
                        <div>所属单位：{quizzer.unit}</div>
                        <div>发表时间：{createTime}</div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="text-2xl text-gray-600 border-l-[8px] border-blue-600 pl-3">{goal}</div>
            </div>
        </div>
    )
}