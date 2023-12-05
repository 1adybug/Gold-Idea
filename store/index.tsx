import { createPersistentStore } from "easy-zustand"
import { User } from "../components/detailFirstSection"
import WangyongAvator from "../assets/avator.jpg"

export const useUserInfo = createPersistentStore<User>({
    id: 1,
    avator: WangyongAvator,
    userName: "王勇",
    policeNo: "082xxx",
    phone: "19945372692",
    unitId: "1",
    commentId: 1,
    unit: {
        id: 1,
        unitNo: "1233333",
        unitName: "清安派出所"
    }
}, "userInfo")


