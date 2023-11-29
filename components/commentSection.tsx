import { CommentItem } from "./comments"
import Image from "next/image"
import BuYuanHaoAvator from "../assets/BuYuanHaoAvator.jpg"
import ToTopIcon from "../assets/toTop.png"
import AppraiseIcon from "../assets/appraise.png"

export function CommentSection(props: CommentItem) {

    const { content, createTime, publisher } = props

    return (
        <div className="flex gap-x-6">
            <Image src={BuYuanHaoAvator} alt={"用户头像"} width={46} className="rounded h-[46px]" />
            <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-4 text-xl items-center">
                    <div className="text-gray-800">{publisher.userName}</div>
                    <div className="text-gray-400">警号：{publisher.policeNo}</div>
                    <div className="text-gray-400">单位：{publisher.unitId}</div>
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
                </div>
            </div>
        </div>
    )
}