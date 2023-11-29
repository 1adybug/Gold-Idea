import Image, { StaticImageData } from "next/image"
import ConcernedsIcon from "../assets/concernedsIcon.png"
import CollectionsIcon from "../assets/collectionsIcon.png"
import LogoutIcon from "../assets/logoutIcon.png"

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