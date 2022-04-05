
import Link from "next/link";
import Head from "next/head";
const Layout = ({ children }): any => {

    return (
        <>
            <Head>
                <title>Word Guesser</title>
                <meta name="description" content="novel word guessing game" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-center text-slate-300 p-10 text-5xl bg-slate-600 font-thin tracking-wider font-mono">Welcome to Word Guesser!</h1>

            <div className="flex flex-1 text-center bg-slate-100 justify-center">
                <div className="flex p-2 m-2 ">
                    🏁
                    <Link href="/">
                        <a>FILL IN</a>
                    </Link>
                </div>

                <div className="flex p-2 m-2 ">
                    🔤
                    <Link href="/mode1">
                        <a className="uppercase">AUCTI</a>
                    </Link>
                </div>
            </div>
            <main>{children}</main>

        </>)
}


export default Layout;