import Link from 'next/link'
export default function Header(props){
    return(
        <header className="flex p-2 bg-green-500 text-xl">
        <h1>{props.title}</h1>
        <nav>
            <Link href='/overview'>
                <a className="pl-1 pr-1 mt-3 text-md mx-50 float-right">Overview</a>
            </Link>
        </nav>
        </header>
    )
}