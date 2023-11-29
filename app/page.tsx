import Header from "../components/header";
import Content from "../components/content";
import { Fragment } from "react";

async function getQuestions() {
    const res = await fetch('http://localhost:3000/api/findAllQuestion', { cache: 'no-store' })
    if (!res.ok) return
    return res.json()
}

export default async function Home() {

    const questions = await getQuestions()
    
    return (
        <Fragment>
            <Header isHomePage={true} />
            <Content questions={questions} />
        </Fragment>
    )
}
