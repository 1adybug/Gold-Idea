import Image, { StaticImageData } from "next/image"
import { CommentItem } from "./comments"
import XvTengAvator from "../assets/XvTengAvator.jpg"
import { Unit } from "../app/detail/[id]/page"
import advanceTime from "../utils/timeFormatConversion"
import GoalIcon from "../assets/flagIcon.png"
import ReplyIcon from "../assets/replyIcon.png"
import { Fragment } from "react"
import { QuestionModalSource } from "./questionModal"

export interface User {
    id: string
    avator: StaticImageData
    userName: string
    policeNo: string
    phone: string
    unitId: string
    commentId: number
    unit: Unit
}

export interface QuestionDetail {
    id: number
    content: string
    goal: string
    createTime: string
    publisher: User,
    comments: CommentItem[]
    onFunctionClick: (source: QuestionModalSource) => void
}

export default function DetailFirstSection(props: QuestionDetail) {

    const { content, publisher, createTime, goal, onFunctionClick } = props

    return (
        <Fragment>
            <div className="w-[1200px] h-full p-10 rounded bg-white shadow-sm flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-4">
                    <div className="text-3xl font-semibold">{content}</div>
                    <div className="flex gap-x-4 items-center text-xl text-gray-600">
                        <div className="flex gap-x-2.5 items-center">
                            <Image src={XvTengAvator} alt="创建者头像" width={36} height={36} className="rounded" />
                            <div className="text-black font-medium">{publisher.userName}</div>
                        </div>
                        <div className="flex gap-x-4 items-center text-gray-400">
                            <div>警号：{publisher.policeNo}</div>
                            <div>所属单位：{publisher.unit.unitName}</div>
                            <div>联系电话：{publisher.phone}</div>
                        </div>
                    </div>
                </div>
                <div className="text-2xl text-gray-600 border-l-[8px] border-blue-600 pl-3">{goal}</div>
                <div className="flex gap-x-6 items-center text-xl text-gray-400">
                    <div>发表时间：{advanceTime(createTime)}</div>
                    <div className="flex gap-x-2 items-center cursor-pointer" onClick={() => onFunctionClick("addGoal")}>
                        <Image src={GoalIcon} alt={"置顶图标"} width={21} height={21} />
                        <div>添加目的</div>
                    </div>
                    <div className="flex gap-x-2 items-center cursor-pointer" onClick={() => onFunctionClick("addComment")}>
                        <Image src={ReplyIcon} alt={"评优图标"} width={20} height={20} />
                        <div>添加评论</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}