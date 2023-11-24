"use client"
import { useState } from "react"

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
        <div className="w-full h-[1000px] mt-10 flex flex-col">
            <TabBar />
            <div className="w-full h-full p-2.5">
                {comments.map((comment: CommentItem) => <div key={comment.commentId}>{comment.content}</div>)}
            </div>
        </div>
    )
}