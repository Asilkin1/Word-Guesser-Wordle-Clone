
import Link from "next/link";
const Layout = ({ children }): any => {

    return (
        <>

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