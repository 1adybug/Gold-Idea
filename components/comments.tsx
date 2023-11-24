"use client"
import { useState } from "react"
import Image from "next/image"
import Avator from "../assets/avator.jpg"

export interface TabItem {
    key: number
    content: string
}

const tablist: TabItem[] = [
    {
        key: 0,
        content: "最新"
    },
    {
        key: 1,
        content: "最热"
    }
]

export function TabBar() {

    const [activedTab, setActivedTab] = useState(0)

    return (
        <div className="flex items-center gap-x-2">
            {
                tablist.map((tab: TabItem) => {
                    return (
                        <div key={tab.key} className="flex items-center gap-x-2">
                            <div className={`text-xl cursor-pointer ${activedTab === tab.key ? "text-blue-600" : "text-gray-500"}`} onClick={() => setActivedTab(tab.key)}>{tab.content}</div>
                            {tab.key !== tablist.length - 1 && <div className="text-gray-500">|</div>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export function CommentSection(props: CommentItem) {

    const { content, createTime } = props

    return (
        <div className="flex flex-col gap-y-8 p-8">
            <div className="flex gap-x-6 items-center">
                <Image src={Avator} alt={"用户头像"} width={42} height={42} className="rounded" />
                <div className="flex gap-x-4 text-xl items-center">
                    <div className="text-gray-600">王勇</div>
                    <div className="text-gray-400">警号：082xxx</div>
                    <div className="text-gray-400">单位：清安派出所</div>
                </div>
            </div>
            <div className="text-xl pl-12">{content}</div>
            <div className="text-gray-400">发布时间：{createTime}</div>
        </div>
    )
}

export interface CommentItem {
    commentId: string
    questionId: string
    userId: string
    parentCommentId: string
    content: string
    createTime: string
    updateTime: string
}

export default function Comments(props: { comments: CommentItem[] }) {

    const { comments } = props

    return (
        <div className="w-full h-full mt-10 flex flex-col">
            <TabBar />
            <div className="w-full h-full p-2.5 flex flex-col">
                {comments.map((comment: CommentItem) => <CommentSection key={comment.commentId} commentId={comment.commentId} questionId={comment.questionId} userId={comment.userId} parentCommentId={comment.parentCommentId} content={comment.content} createTime={comment.createTime} updateTime={comment.updateTime} />)}
            </div>
        </div>
    )
}