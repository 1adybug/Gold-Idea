"use client"
import { useState } from "react"
import Image from "next/image"
import ToTopIcon from "../assets/toTop.png"
import AppraiseIcon from "../assets/appraise.png"
import BuYuanHaoAvator from "../assets/BuYuanHaoAvator.jpg"
import advanceTime from "../utils/timeFormatConversion"

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
        <div className="flex gap-x-6">
            <Image src={BuYuanHaoAvator} alt={"用户头像"} width={46} className="rounded h-[46px]" />
            <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-4 text-xl items-center">
                    <div className="text-gray-800">卜元浩</div>
                    <div className="text-gray-400">警号：082xxx</div>
                    <div className="text-gray-400">单位：清安派出所</div>
                    <div className="text-gray-400">联系电话：15526265653</div>
                </div>
                <div className="text-2xl">{content}</div>
                <div className="flex gap-x-6 items-center text-xl text-gray-400">
                    <div>发布时间：{createTime}</div>
                    <div className="flex gap-x-2 items-center cursor-pointer">
                        <Image src={ToTopIcon} alt={"置顶图标"} width={21} height={21} />
                        <div>置顶</div>
                    </div>
                    <div className="flex gap-x-2 items-center cursor-pointer">
                        <Image src={AppraiseIcon} alt={"评优图标"} width={20} height={20} />
                        <div>评优</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export interface CommentItem {
    id: string
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
            <div className="w-full h-full p-2.5 flex flex-col gap-y-10 pt-10 pb-10">
                {comments.map((comment: CommentItem) => <CommentSection key={comment.id} questionId={comment.questionId} userId={comment.userId} parentCommentId={comment.parentCommentId} content={comment.content} createTime={advanceTime(comment.createTime)} updateTime={comment.updateTime} id={comment.id} />)}
            </div>
        </div>
    )
}