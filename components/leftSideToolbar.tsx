"use client"
import EditIcon from "../assets/editIcon.png"
import DeleteIcon from "../assets/deleteIcon.png"
import UnCollectedIcon from "../assets/defaultCollect.png"
import CollectedIcon from "../assets/collected.png"
import Image from "next/image"
import { Attention } from "./questionContainer"
import { useEffect, useState } from "react"
import { useUserInfo } from "../store"

export interface LeftSideToolbarProps {
    questionId: number
    attentions: Attention[]
}

export default function LeftSideToolbar(props: LeftSideToolbarProps) {

    const { questionId, attentions } = props
    const [userInfo, setUserInfo] = useUserInfo()
    const [isAttentioned, setIsAttentioned] = useState(false)

    useEffect(() => {
        judgeIsAttentioned()
    }, [])

    function judgeIsAttentioned() {
        if (attentions.find((attention: Attention) => attention.userId === userInfo.id)) {
            setIsAttentioned(true)
            return
        }
    }

    return (
        <div className="flex flex-col gap-y-6 fixed top-1/2 transform -translate-y-1/2 left-0 pl-4">
            <div className="p-4 rounded-full bg-white cursor-pointer hover:shadow-lg">
                <Image src={EditIcon} width={40} height={40} alt="编辑图标" />
            </div>
            <div className="p-4 rounded-full bg-white cursor-pointer hover:shadow-lg">
                <Image src={isAttentioned ? CollectedIcon : UnCollectedIcon} width={40} height={40} alt="关注图标" />
            </div>
            <div className="p-4 rounded-full bg-white cursor-pointer flex justify-center items-center hover:shadow-lg">
                <Image src={DeleteIcon} width={34} height={34} alt="删除图标" />
            </div>
        </div>
    )
}