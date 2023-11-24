import { Question } from "./questionContainer"
import Quote from "../../assets/quote.png"
import CollectIcon from "../../assets/collectIcon.png"
import Image from "next/image"
import Link from "next/link"

export default function QuestionCard(props: Question) {

    const { id, content, goal, referCount, createTime } = props

    return (
        <Link className="w-full h-60 bg-white text-black flex flex-col gap-y-8 p-8 cursor-pointer" href={`/detail/${id}`}>
            <div className="text-2xl font-semibold text-stone-800">{content}</div>
            <div className="flex flex-wrap text-xl text-zinc-600 line-clamp-2 overflow-hidden">
                {goal}
            </div>
            <div className="mt-auto flex gap-x-4 items-center text-xl text-gray-500">
                <div className="flex gap-x-1">
                    <Image src={Quote} alt={"引用"} width={26} height={18} className="transform rotate-225 scale-x-[-1]" />
                    <div>{referCount}条引用</div>
                </div>
                <div>发布时间：{createTime}</div>
                <div className="flex gap-x-1 items-center">
                    <Image src={CollectIcon} alt={"收藏"} width={26} height={18} />
                    <div>收藏</div>
                </div>
            </div>
        </Link>
    )
}