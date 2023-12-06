import NProgress from "nprogress"
import { Router } from "next/dist/client/router"

export const setupRouterProgress = (): void => {
    Router.events.on("routeChangeStart", () => {
        NProgress.start()
    })

    Router.events.on("routeChangeComplete", () => {
        NProgress.done()
    })

    Router.events.on("routeChangeError", () => {
        NProgress.done()
    })
}
