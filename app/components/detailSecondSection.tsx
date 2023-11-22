import Image from "next/image"
import Comments from "./comments"
import { QuestionDetail, User } from "../detail/[id]/page"
import { QuestionModalProps } from "./questionModal"
import { useState } from "react"

interface DetailSecondSectionProps {
    userDemo: User
    question: QuestionDetail
}

export default function DetailSecondSection(props: DetailSecondSectionProps) {

    const { userDemo, question } = props
    
    const [inputedValue, setInputedValue] = useState("")

    return (
        <div className="w-[1200px] h-full flex flex-col gap-y-6 p-10 rounded bg-white shadow-sm">
            <div className="text-2xl text-black font-semibold">评论&nbsp;&nbsp;{question.comments.length}</div>
            <div className="flex gap-x-6">
                <Image src={userDemo.avator} alt="用户头像" width={56} className="rounded h-[56px]" />
                <div className="w-full flex flex-col gap-y-10 bg-gray-100 p-3 rounded-md">
                    <textarea className="h-[200px] text-2xl bg-gray-100 focus:outline-none" placeholder="发表一条评论吧！" />
                    <div className="flex items-center gap-x-6 ml-auto">
                        <div className="text-2xl text-gray-500">{inputedValue.length}/1000</div>
                        <button disabled={true} className="w-[110px] h-[50px] flex justify-center items-center text-white text-xl rounded bg-blue-600">发送</button>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}