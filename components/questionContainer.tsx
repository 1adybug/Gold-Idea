"use client"
import QuestionCard from "./questionCard"
import { User } from "./detailFirstSection"
import { CommentItem } from "./comments"
import { useEffect } from "react"
import { Skeleton } from "antd"
export interface Question {
    id: number
    content: string
    goal: string
    comments: CommentItem[]
    createTime: string
    updateTime: string
    publisher: User
}

export interface QuestionContainerProps {
    questions: Question[]
}

export default async function QuestionContainer(props: QuestionContainerProps) {

    const { questions } = props

    useEffect(() => {
        function handleScroll() {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight) {
                // 页面滚动到底部了，执行相应的操作
                console.log('已滚动到底部');
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className="w-9/12 flex flex-col gap-y-2.5 overflow-y-auto">
            {questions.map((question: Question) => <QuestionCard key={question.id} id={question.id} content={question.content} goal={question.goal} referCount={question.comments.length} createTime={question.createTime} publisher={question.publisher} updateTime={question.updateTime} />)}
            <Skeleton active className="bg-white p-8"/>
        </div>
    )
}