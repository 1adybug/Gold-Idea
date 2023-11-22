"use client"
import Header, { AccountDropdown } from "./components/header";
import Content from "./components/content";
import { Fragment, useState } from "react";
import QuestionModal from "./components/questionModal";

export default function Home() {

    const [accountDropdownSHow, setAccountDropdownSHow] = useState(false)
    const [publishQuestionOpen, setPublishQuestionOpen] = useState(false)

    function handlePublishProblem() {
        if (publishQuestionOpen) return
        setPublishQuestionOpen(true)
    }

    return (
        <Fragment>
            <Header onAvatorClick={() => setAccountDropdownSHow(!accountDropdownSHow)} onPublishProblem={handlePublishProblem} isHomePage={true} />
            <Content />
            <QuestionModal open={publishQuestionOpen} onCloseModal={() => setPublishQuestionOpen(false)} />
            {accountDropdownSHow && <AccountDropdown />}
        </Fragment>
    )
}
