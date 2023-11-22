"use client"
import { createQuestion, findAllQuestions } from "../pages/api";
import Header, { AccountDropdown } from "./components/header";
import Content from "./components/content";
import { useEffect, useState } from "react";
import QuestionModal from "./components/questionModal";

export default function Home() {

    const [accountDropdownSHow, setAccountDropdownSHow] = useState(false)
    const [publishQuestionOpen, setPublishQuestionOpen] = useState(false)

    function handleAvatorClick() {
        setAccountDropdownSHow(!accountDropdownSHow)
    }

    function handlePublishProblem() {
        console.log(1);
        
        if (publishQuestionOpen) return
        setPublishQuestionOpen(true)
    }

    return (
        <>
            <Header onAvatorClick={handleAvatorClick} onPublishProblem={handlePublishProblem} isHomePage={true} />
            <Content />
            <QuestionModal open={publishQuestionOpen} onCloseModal={() => setPublishQuestionOpen(false)} />
            {accountDropdownSHow && <AccountDropdown />}
        </>
    )
}
