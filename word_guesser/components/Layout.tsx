
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
            <h1 className="text-center text-slate-500 p-10 text-2xl">Welcome to Word Guesser!</h1>

            <div className="flex flex-1 p-2 m-2">
                <p>Game modes</p>
                <div className="flex flex-1 p-2 m-2 ">
                    <Link href="/">
                        <a>missing characters</a>
                    </Link>
                </div>

                <div className="flex flex-1 p-2 m-2 ">
                    <Link href="/mode1">
                        <a className="uppercase">all you can type in</a>
                    </Link>
                </div>
            </div>
            <main>{children}</main>

        </>)
}


export default Layout;