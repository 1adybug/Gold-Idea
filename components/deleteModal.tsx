"use client"

import { Fragment } from "react"

export interface DeleteModalProps {
    open: boolean
}

export default function DeleteModal(props: DeleteModalProps) {

    const { open } = props

    return <Fragment>
        {open && <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-10">
            <div className="fixed w-80 h-36 bg-white rounded z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>}
    </Fragment>
}