import EditIcon from "../assets/editIcon.png"
import AttentionIcon from "../assets/attentionIcon.png"
import DeleteIcon from "../assets/deleteIcon.png"
import Image from "next/image"

export default function LeftSideToolbar() {
    return (
        <div className="flex flex-col gap-y-6 fixed top-1/2 transform -translate-y-1/2 left-0 pl-4">
            <div className="p-4 rounded-full bg-white cursor-pointer">
                <Image src={EditIcon} width={40} height={40} alt="编辑图标" />
            </div>
            <div className="p-4 rounded-full bg-white cursor-pointer">
                <Image src={AttentionIcon} width={40} height={40} alt="关注图标" />
            </div>
            <div className="p-4 rounded-full bg-white cursor-pointer flex justify-center items-center">
                <Image src={DeleteIcon} width={34} height={34} alt="删除图标" />
            </div>
        </div>
    )
}