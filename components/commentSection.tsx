"use client"
import { CommentItem } from "./comments"
import Image from "next/image"
import ToTopIcon from "../assets/toTop.png"
import AppraiseIcon from "../assets/appraise.png"
import ReplyIcon from "../assets/replyIcon.png"
import CancelReplyIcon from "../assets/cancelReplyIcon.png"
import { useState } from "react"
import { AvatorMap } from "./detailFirstSection"
import advanceTime from "../utils/timeFormatConversion"
import { addComment, addReply } from "../pages/api"
import traverseChildComments from "../utils/traverseChildComments"
import RightArrow from "../assets/rightArrow.png"

export interface CommentItemProps extends Omit<CommentItem, "childComments"> {
    parent: CommentItem
    onAddReplySucceed: (parentId: number, replyContent: string) => void
}

export function Comment(props: CommentItemProps) {

    const { id, content, parent, createTime, publisher, onAddReplySucceed } = props

    const [currentCommentId, setCurrentCommentId] = useState(-1)
    const [inputedValue, setinputedValue] = useState("")

    function textareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setinputedValue(e.target.value)
    }

    async function handleReply() {
        const res = await addReply(Number(id), inputedValue, 1)
        if (!res) return
        setCurrentCommentId(-1)
    }

    return <div className="w-full flex gap-x-6">
        <Image src={AvatorMap[publisher.userName]} alt={"用户头像"} width={46} className="rounded h-[46px]" />
        <div className="w-full flex flex-col gap-y-6">
            <div className="flex gap-x-4 text-xl items-center text-gray-400">
                <div className="text-gray-800 font-bold">{publisher.userName}</div>
                <div className="flex items-center">
                    <Image src={RightArrow} alt={"右箭头图标"} width={20} height={20} />
                    <div className="text-gray-800 font-bold">{parent.publisher.userName}</div>
                </div>
                <div>警号：{publisher.policeNo}</div>
                <div>单位：{publisher.unit.unitName}</div>
                <div>联系电话：{publisher.phone}</div>
            </div>
            <div className="text-2xl">{content}</div>
            <div className="flex gap-x-6 items-center text-xl text-gray-400">
                <div>发布时间：{advanceTime(createTime)}</div>
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
                    </div>
                }
            </div>
            {Number(id) === currentCommentId && <div className="h-auto rounded-lg border-2 border-blue-600 p-2">
                <textarea className="w-full min-h-[180px] max-h-[180px] text-xl focus:outline-none" placeholder={"回复" + publisher.userName} onChange={textareaChange} />
                <div className="bg-blue-600 w-[100px] h-[40px] rounded-md flex justify-center items-center text-white ml-auto cursor-pointer" onClick={handleReply}>回复</div>
            </div>}
        </div>
    </div>
}

export interface CommentSectionProps extends Omit<CommentItem, "childComments"> {
    questionId: number
    comment: CommentItem
    onAddReplySucceed: () => void
}

export function CommentSection(props: CommentSectionProps) {

    const { questionId, id, content, createTime, publisher, comment, onAddReplySucceed } = props

    const [currentCommentId, setCurrentCommentId] = useState(-1)
    const [inputedValue, setinputedValue] = useState("")

    function textareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setinputedValue(e.target.value)
    }

    async function handleReply() {
        const res = await addComment(Number(questionId), inputedValue, 1)
        if (!res) return
        setCurrentCommentId(-1)
        onAddReplySucceed()
    }

    async function handleAddReplySucceed(parentId: number, replyContent: string) {
        const res = await addComment(Number(questionId), replyContent, 1, parentId);
        if (!res) return
        onAddReplySucceed()
    }

    return (
        <div className="w-full flex gap-x-6">
            <Image src={AvatorMap[publisher.userName]} alt={"用户头像"} width={46} className="rounded h-[46px] w-auto" />
            <div className="w-full flex flex-col gap-y-6">
                <div className="flex gap-x-4 text-xl items-center text-gray-400">
                    <div className="text-gray-800 font-bold">{publisher.userName}</div>
                    <div>警号：{publisher.policeNo}</div>
                    <div>单位：{publisher.unit.unitName}</div>
                    <div>联系电话：{publisher.phone}</div>
                </div>
                <div className="text-2xl">{content}</div>
                <div className="flex gap-x-6 items-center text-xl text-gray-400">
                    <div>发布时间：{advanceTime(createTime)}</div>
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
                        </div>
                    }
                </div>
                {Number(id) === currentCommentId && <div className="h-auto rounded-lg border-2 border-blue-600 p-2">
                    <textarea className="w-full min-h-[180px] max-h-[180px] text-xl focus:outline-none" placeholder={"回复" + publisher.userName} onChange={textareaChange} />
                    <div className="bg-blue-600 w-[100px] h-[40px] rounded-md flex justify-center items-center text-white ml-auto cursor-pointer" onClick={handleReply}>回复</div>
                </div>}
                {traverseChildComments(comment).childComments.map((childComment: CommentItem) => {
                    return <Comment onAddReplySucceed={handleAddReplySucceed} id={childComment.id} content={childComment.content} publisherId={childComment.publisherId} questionId={childComment.questionId} createTime={childComment.createTime} updateTime={childComment.updateTime} publisher={childComment.publisher} parent={childComment.parent} />
                })}
            </div>
        </div>
    )
}