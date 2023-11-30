"use client"
import { Fragment, useEffect, useState } from "react"
import ModalCloseIcon from "../assets/modalCloseIcon.png"
import Image from "next/image"
import Avator from "../assets/avator.jpg"
import { addGoal, addQuestion } from "../pages/api"
import { useRouter } from "next/navigation"

export type QuestionModalSource = "publishQuestion" | "addGoal" | "addComment" | "addReply"
export interface QuestionModalProps {
    open: boolean
    source: QuestionModalSource
    questionId?: number
    onCloseModal: () => void
}

export const Placeholders: Record<string, string> = {
    "publishQuestion": "写下您的问题，准确地描述问题更容易得到解答",
    "addGoal": "写下您的目的...",
    "addComment": "写下您的留言...",
    "addReply": "写下您的回复..."
}

export const ModalSubmitBtnText: Record<string, string> = {
    "publishQuestion": "发布",
    "addGoal": "提交",
    "addComment": "提交",
    "addReply": "提交"
}

export default function QuestionModal(props: QuestionModalProps) {

    const { open, source, questionId, onCloseModal } = props

    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [inputedValue, setInputedValue] = useState("")

    useEffect(() => {
        setIsOpen(open)
        const disableScroll = (e: WheelEvent) => {
            e.preventDefault()
            e.stopPropagation()
        }
        if (open) {
            document.body.addEventListener('wheel', disableScroll, { passive: false })
        } else {
            document.body.removeEventListener('wheel', disableScroll)
        }
        return () => {
            document.body.removeEventListener('wheel', disableScroll)
        }
    }, [open])

    function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setInputedValue(e.target.value)
    }

    async function submit() {
        setIsOpen(false)
        setInputedValue("")
        if (source === "publishQuestion") {
            const res = await addQuestion(inputedValue, 1)
            if (!res.id) return
            router.push(`/detail/${res.id}`)
            return
        }
        if (source === "addGoal" && questionId) {
            const res = await addGoal(questionId, inputedValue, 1)
            if (!res) return
            router.refresh()
            return
        }
    }

    return (
        <Fragment>
            {isOpen && <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-10">
                <div className="fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-x-2.5">
                    <div className="w-[1000px] h-[500px] bg-white rounded flex flex-col gap-y-3 p-10">
                        <div className="flex h-full gap-x-2.5">
                            <Image src={Avator} width={56} alt="用户头像" className="h-[56px] rounded" />
                            <textarea className="min-h-[357px] max-h-[357px] w-full text-2xl rounded-sm border border-gray-200 focus:outline-none p-2.5" placeholder={Placeholders[source]} onChange={handleInput} />
                        </div>
                        <div className="w-[130px] h-[60px] text-white text-xl rounded bg-blue-700 flex justify-center items-center ml-auto cursor-pointer" onClick={submit}>{ModalSubmitBtnText[source]}</div>
                    </div>
                    <Image src={ModalCloseIcon} alt="弹窗关闭图标" width={40} onClick={() => onCloseModal()} className="h-[40px] cursor-pointer" />
                </div>
            </div>}
        </Fragment>
    )
}