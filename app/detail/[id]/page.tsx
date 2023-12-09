import Header from "../../../components/header"
// import { Question } from "../../../components/questionContainer"
// import { API_BASE_URL } from "../../../constant/publicURL"
import Avator from "../../../assets/avator.jpg"
import DetailMid from "../../../components/detailMid"
import UserProvider from "../../../components/userProvider"
export interface Unit {
    id: number
    unitNo: string
    unitName: string
}

const userDemo = {
    id: 0,
    avator: Avator,
    userName: "王勇",
    policeNo: "082xxx",
    phone: "19942372693",
    unitId: "黄码派出所",
    commentId: 1,
    unit: {
        id: 1,
        unitNo: "0000",
        unitName: "黄码派出所"
    }
}

// async function findQuestionById(id: number) {
//     const res = await fetch(`${API_BASE_URL}/findQuestionByID?id=${id}`, { cache: 'no-store' })
//     if (!res.ok) return
//     return res.json()
// }

export default async function Page({ params }: { params: { id: string } }) {

    const { id } = params

    // const question: Question = await findQuestionById(Number(id))

    return (
        <UserProvider>
            <Header isHomePage={false} />
            <DetailMid userDemo={userDemo} questionId={Number(id)} />
        </UserProvider>
    )
}



