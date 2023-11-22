import { useEffect } from "react"
import { findAllQuestions } from "../../pages/api"
import QuestionCard from "./questionCard"

export interface Question {
    id: string
    content: string
    goal: string
    referCount: number
    createTime: string
}

const questions = [
    {
        id: "000",
        content: "Next.js实战项目- 基本操作：掌握MongoDB的基本增删改查操作！",
        goal: "随着项目越来越大,前端编译打包流程巨慢。（算上图片视频等资源，仓库有3.9G大小） 2.运营需要经常改动网站内容，由于需要SEO，哪怕改几个字也需要前端打包发布。 3.旧框架的核心还是Jquery，虽然结果3年开发积累了很多组件，但在数据维护、模块化以及开发体验上已经落后了。",
        referCount: 5,
        createTime: "2023-11-17"
    },
    {
        id: "001",
        content: "React和Next.js已死，真的要被取代了？",
        goal: "hutubox：作为一个后端，感觉nextjs的工程化就像一坨狗。。？算了，不侮辱狗！ 按照官方来，next build一堆乱七八糟报错",
        referCount: 5,
        createTime: "2023-11-17"
    },
    {
        id: "002",
        content: "为什么我将网站用Next.js重写了",
        goal: "Snowflyz：我体感倒是没发现 Next.js 有什么因为 SSR 导致的严重缺点，但是 Next.js 有些地方 Opinioned",
        referCount: 5,
        createTime: "2023-11-17"
    },
    {
        id: "003",
        content: "使用Next.js搭建一个全栈前端知识库项目",
        goal: "前端充电宝：其增长速度达到了每月 80%。 image.png 自 Next.js 13.4 版本以来，Next.js 团队的重点一直是改进",
        referCount: 5,
        createTime: "2023-11-17"
    },
    {
        id: "004",
        content: "Next.js 的路由为什么这么奇怪？",
        goal: "nekocode：而且可以看出很多代码中有参考了 next.js 的痕迹：nuxt/nuxt.js 所以，可以推测出 nuxt.js 的作",
        referCount: 5,
        createTime: "2023-11-17"
    },
    {
        id: "005",
        content: "Next.js Conf 2023：为 React 未来指明了方向",
        goal: "nekocode：而且可以看出很多代码中有参考了 next.js 的痕迹：nuxt/nuxt.js 所以，可以推测出 nuxt.js 的作",
        referCount: 5,
        createTime: "2023-11-17"
    },
    {
        id: "006",
        content: "Next.js 14 发布啦",
        goal: "如果需要使用动态数据来创建路由时，比如，请求时才知道的当前的id，用户交互才知道的当前tab。",
        referCount: 5,
        createTime: "2023-11-17"
    },
    {
        id: "007",
        content: "第120期：Next.js 和 React 到底该选哪一个？",
        goal: "在App router中，嵌套文件夹会被映射成URL路径，但是，可以通过将文件夹标记为路由组，来绕开这个限制。",
        referCount: 5,
        createTime: "2023-11-17"
    },
    {
        id: "008",
        content: "next.js 或 nuxt.js 除了服务端渲染还有其他作用或优势吗？",
        goal: "约定：平行路由使用命名插槽创建。插槽@folder的形式定义。并作为props传递到同一级别的Layout中。通常用在页面中需要多个插槽显示，且每个插槽都有自己的页面loading/error甚至layout需要处理；或者条件路由时",
        referCount: 5,
        createTime: "2023-11-17"
    },
    {
        id: "009",
        content: "next.js 为什么要走PHP ASP MVC的老路？",
        goal: "Next.js 是一个功能强大且灵活的 React 框架，可以帮助开发者构建高性能、SEO友好的现代 Web 应用程序。它的预渲染和静态生成特性为应用程序带来了更好的性能和用户体验。路由管理系统使得页面导航变得简单，帮助开发者维护清晰的项目结构和更好地管理页面。",
        referCount: 5,
        createTime: "2023-11-17"
    }
]

export default function QuestionContainer() {

    // const [questions, setQuestions] = useState<Question[]>([])

    // useEffect(() => {
    //     getAllQuestions()
    // }, [])

    // async function getAllQuestions() {
    //     const res = await findAllQuestions()
    //     if (!res) return
    //     console.log(res);
    // }

    return (
        <div className="w-9/12 flex flex-col gap-y-2.5 overflow-y-auto">
            {questions.map((question: Question) => <QuestionCard key={question.id} id={question.id} content={question.content} goal={question.goal} referCount={question.referCount} createTime={question.createTime} />)}
        </div>
    )
}