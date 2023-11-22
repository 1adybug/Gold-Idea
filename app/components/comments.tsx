import { Fragment, useState } from "react"

export interface TabItem {
    key: number
    content: string
}

const tablist: TabItem[] = [
    {
        key: 0,
        content: "最新"
    },
    {
        key: 1,
        content: "最热"
    }
]

export function TabBar() {

    const [activedTab, setActivedTab] = useState(0)

    function tabClick(tab: TabItem) {
        setActivedTab(tab.key)
    }

    return (
        <div className="flex items-center gap-x-2">
            {
                tablist.map((tab: TabItem) => {
                    return (
                        <div key={tab.key}>
                            <div className={`text-xl cursor-pointer ${activedTab === tab.key ? "text-blue-600" : "text-gray-500"}`} onClick={() => tabClick(tab)}>{tab.content}</div>
                            {tab.key !== tablist.length - 1 && <div className="px-1 text-gray-500">|</div>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default function Comments() {
    return (
        <div className="w-full h-[1000px] mt-10 flex flex-col">
            <TabBar />
        </div>
    )
}