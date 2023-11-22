import Image, { StaticImageData } from "next/image"
import SearchIcon from "../../assets/searchIcon.png"
import Avator from "../../assets/avator.jpg"
import ConcernedsIcon from "../../assets/concernedsIcon.png"
import CollectionsIcon from "../../assets/collectionsIcon.png"
import LogoutIcon from "../../assets/logoutIcon.png"
import Link from "next/link"

export function Search() {
    return (
        <div className="flex">
            <input className="h-14 pl-2 pr-2 text-xl w-96 border-2 border-gray-200 outline-none rounded-l" placeholder="探索“深海金点子”" />
            <div className="w-16 h-14 flex justify-center items-center bg-blue-700 rounded-r">
                <Image src={SearchIcon} alt={"搜索图标"} width={30} height={30} />
            </div>
        </div>
    )
}

interface AccountDropdownListItem {
    id: string
    content: string
    icon: StaticImageData
}

const accountDropdownListItems: AccountDropdownListItem[] = [
    {
        id: "000",
        content: "我的关注",
        icon: ConcernedsIcon
    },
    {
        id: "001",
        content: "我的收藏",
        icon: CollectionsIcon
    },
    {
        id: "002",
        content: "退出",
        icon: LogoutIcon
    }
]

export function AccountDropdown() {
    return (
        <div className="fixed top-20 right-11 flex flex-col items-center">
            <div className="w-0 h-0 border-b-[14px] border-l-[20px] border-r-[20px] border-x-transparent border-y-white shadow-md"></div>
            <div className=" bg-white shadow-md flex flex-col gap-y-3 p-6">
                {
                    accountDropdownListItems.map((item: AccountDropdownListItem) => {
                        return (
                            <div className="flex gap-x-2 items-center cursor-pointer">
                                <Image src={item.icon} alt={"列表项图标"} width={20} height={20} />
                                <div key={item.id} className="text-xl text-gray-500">{item.content}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export interface HeaderProps {
    isHomePage: boolean
    onPublishProblem: () => void
    onAvatorClick: () => void
}

export default function Header(props: HeaderProps) {

    const { isHomePage, onAvatorClick, onPublishProblem } = props

    return (
        <div className="w-full h-20 pl-10 pr-24 bg-white fixed top-0 flex z-10 items-center cursor-pointer shadow-sm justify-between" >
            <Link className="text-3xl font-semibold text-blue-700" href={"/"}>金点子”深海孵化器“</Link>
            <div className="flex gap-x-12">
                <div className="flex gap-x-2">
                    <Search />
                    {isHomePage && <div className="pl-4 pr-4 h-14 bg-blue-700 flex justify-center items-center text-white text-xl rounded font-normal tracking-widest" onClick={() => onPublishProblem()}>提问</div>}
                </div>
                <Image src={Avator} alt={"用户头像"} width={56} height={56} onClick={onAvatorClick} className="rounded" />
            </div>
        </div>
    )
}