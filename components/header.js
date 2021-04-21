import Link from 'next/link'

export default function Header({ username, onLogout }) {
    return(
        <header className="flex p-2 bg-green-500 text-xl">
            <h1>Cookie Stand Admin</h1>
            <div>
                <p>{username}</p>
                <link href="/">
                    <a onClick={onLogout} >Sign Out</a>
                </link>
                <nav>
                    <Link href='/overview'><a className="pl-1 pr-1 mt-3 text-md mx-50 float-right">Overview</a></Link>
                </nav>
            </div>
        </header>
    )
}