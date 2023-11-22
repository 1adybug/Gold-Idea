import { Fragment, useEffect, useState } from "react"
import ModalCloseIcon from "../../assets/modalCloseIcon.png"
import Image from "next/image"
import Avator from "../../assets/avator.jpg"

export interface QuestionModalProps {
    open: boolean
    onCloseModal: () => void
}

export default function QuestionModal(props: QuestionModalProps) {

    const { open, onCloseModal } = props

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

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Fragment>
            {isOpen && <div className="w-full h-full bg-black bg-opacity-60 fixed z-10">
                <div className="fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-x-2.5">
                    <div className="w-[1000px] h-[500px] bg-white rounded flex flex-col gap-y-3 p-10">
                        <div className="flex h-full gap-x-2.5">
                            <Image src={Avator} width={56} alt="用户头像" className="h-[56px] rounded" />
                            <textarea className="w-full text-2xl rounded-sm border border-gray-300 focus:outline-none p-2.5" placeholder="写下你的问题，准确地描述问题更容易得到解答" />
                        </div>
                        <div className="w-[130px] h-[60px] text-white text-xl rounded bg-blue-700 flex justify-center items-center ml-auto">发布问题</div>
                    </div>
                    <Image src={ModalCloseIcon} alt="弹窗关闭图标" width={40} onClick={() => onCloseModal()} className="h-[40px] cursor-pointer" />
                </div>
            </div>}
        </Fragment>
    )
}