"use client"
import { CommentItem } from "./comments"
import Image from "next/image"
import BuYuanHaoAvator from "../assets/BuYuanHaoAvator.jpg"
import ToTopIcon from "../assets/toTop.png"
import AppraiseIcon from "../assets/appraise.png"
import ReplyIcon from "../assets/replyIcon.png"
import CancelReplyIcon from "../assets/cancelReplyIcon.png"
import { useState } from "react"

export interface CommentSectionProps extends CommentItem {
    onAddReplyClick: () => void
}

export function CommentSection(props: CommentSectionProps) {

    const { id, content, createTime, publisher, onAddReplyClick } = props

    const [currentCommentId, setCurrentCommentId] = useState(-1)

    return (
        <div className="w-full flex gap-x-6">
            <Image src={BuYuanHaoAvator} alt={"用户头像"} width={46} className="rounded h-[46px]" />
            <div className="w-full flex flex-col gap-y-6">
                <div className="flex gap-x-4 text-xl items-center">
                    <div className="text-gray-800">{publisher.userName}</div>
                    <div className="text-gray-400">警号：{publisher.policeNo}</div>
                    <div className="text-gray-400">单位：{publisher.unit.unitName}</div>
                    <div className="text-gray-400">联系电话：{publisher.phone}</div>
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
                    {Number(id) === currentCommentId ? <div className="flex gap-x-2 items-center cursor-pointer" onClick={() => setCurrentCommentId(-1)}>
                        <Image src={CancelReplyIcon} alt={"评优图标"} width={20} height={20} />
                        <div className="text-blue-600">取消回复</div>
                    </div> :
                        <div className="flex gap-x-2 items-center cursor-pointer" onClick={() => setCurrentCommentId(Number(id))}>
                            <Image src={ReplyIcon} alt={"评优图标"} width={20} height={20} />
                            <div>回复</div>
                        </div>}
                </div>
                {Number(id) === currentCommentId && <div className="h-auto rounded-lg border-2 border-blue-600 p-2">
                    <textarea className="w-full min-h-[180px] max-h-[180px] text-xl focus:outline-none" placeholder={"回复" + publisher.userName} />
                    <div className="bg-blue-600 w-[100px] h-[40px] rounded-md flex justify-center items-center text-white ml-auto">回复</div>
                </div>}
            </div>
        </div>
    )
}