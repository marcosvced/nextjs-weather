import '../assets/scss/entry.scss'

import AppLayout from "../lib/layouts/AppLayout";

function MyApp({Component, pageProps}) {
    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    )
}

export default MyApp
