import Head from 'next/head'
import Link from 'next/link'


export default function Overview() {
    return (
        <>
         <Head>
            <title>Overview</title>
         </Head>
         <main>
             {/* <Header>Overview</Header> */}
            <h2>Something new coming soon...</h2>
         </main>
         <h2>
             <Link href="/">
                 <a>Back To Home</a>
             </Link>
         </h2>
        </>
    )
}