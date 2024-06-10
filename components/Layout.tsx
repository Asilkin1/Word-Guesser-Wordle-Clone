
import Link from "next/link";
import Head from "next/head";
const Layout = ({ children }: any) => {

    return (
        <>
            <Head>
                <title>Word Guesser</title>
                <meta name="description" content="novel word guessing game" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-center  p-10 text-5xl from-orange-300 to-slate-500 font-thin tracking-wider font-mono">🥇Welcome to Word Guesser!😀</h1>

            <div className="flex flex-1 text-center  justify-center max-h-full overflow-hidden">
                <div className="flex items-center font-mono font-sm text-xl opacity-75">Game modes:</div>
                <div className="flex p-2 m-2 text-2xl opacity-75">
                    🎱
                    <Link href="/">
                        <a className="font-mono">FILL IN</a>
                    </Link>
                </div>

                <div className="flex p-2 m-2 text-2xl opacity-75">
                    🎲
                    <Link href="/mode1">
                        <a className="font-mono">A.Y.C.T.I</a>
                    </Link>
                </div>
            </div>
            <main className="opacity-75 max-h-fit bg-slate-600 bg-opacity-40">{children}</main>

        </>)
}


export default Layout;