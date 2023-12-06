"use client"
import { Spin } from "antd";
import { Fragment, useState } from "react";

export interface LoadingAnimationMaskProps {
    open: boolean
}

export default function LoadingAnimationMask(props: LoadingAnimationMaskProps) {

    const { open } = props

    return <Fragment>
        {open && <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-10" >
            <Spin className="fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>}
    </Fragment>
}