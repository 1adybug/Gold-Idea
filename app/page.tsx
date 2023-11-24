import Header from "../components/header";
import Content from "../components/content";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <Header isHomePage={true} />
            <Content />
        </Fragment>
    )
}
