"use client"
import EditIcon from "../assets/editIcon.png"
import DeleteIcon from "../assets/deleteIcon.png"
import UnCollectionIcon from "../assets/defaultCollect.png"
import CollectedIcon from "../assets/collected.png"
import Image from "next/image"
import { Collection } from "./questionContainer"
import { useEffect, useState } from "react"
import { useUserInfo } from "../store"
import { collectQuestion } from "../pages/api"

export interface LeftSideToolbarProps {
    questionId: number
    collections: Collection[]
}

export default function LeftSideToolbar(props: LeftSideToolbarProps) {

    const { questionId, collections } = props
    const [userInfo, setUserInfo] = useUserInfo()
    const [isCollected, setIsCollected] = useState(false)

    useEffect(() => {
        judgeIsCollected()
    }, [collections])

    function judgeIsCollected() {
        if (collections.find((colllection: Collection) => colllection.userId === userInfo.id)) {
            setIsCollected(true)
            return
        }
        if (!collections.find((colllection: Collection) => colllection.userId === userInfo.id)) {
            setIsCollected(false)
            return
        }
    }

    async function handleAttentionClick(){
        const res = await collectQuestion(questionId, userInfo.id, isCollected)
        if (!res) return
        if (isCollected) {
            setIsCollected(false)
            return
        }
        if (!isCollected) {
            setIsCollected(true)
            return
        }
    }

    return (
        <div className="flex flex-col gap-y-6 fixed top-1/2 transform -translate-y-1/2 left-0 pl-4">
            <div className="p-4 rounded-full bg-white cursor-pointer hover:shadow-lg">
                <Image src={EditIcon} width={40} height={40} alt="编辑图标" />
            </div>
            <div className="p-4 rounded-full bg-white cursor-pointer hover:shadow-lg" onClick={handleAttentionClick}>
                <Image src={isCollected ? CollectedIcon : UnCollectionIcon} width={40} height={40} alt="关注图标" />
            </div>
            <div className="p-4 rounded-full bg-white cursor-pointer flex justify-center items-center hover:shadow-lg">
                <Image src={DeleteIcon} width={34} height={34} alt="删除图标" />
            </div>
        </div>
    )
}