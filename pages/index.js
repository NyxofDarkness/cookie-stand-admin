import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [cookieStand, setCookieStand] = useState("")

  function formHandler(event){
    event.preventDefault();

    const formData = new FormData(event.target)
    const cookieStand = JSON.stringify(Object.fromEntries(formData))
    setCookieStand(cookieStand);
  }
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex p-2 bg-green-500 text-xl">
        <h1>Cookie Stand Admin</h1>
      </header>

      <main className="">
        <form name="formData" onSubmit={formHandler} className="flex w-3/4 justify-self-center flex-col m-52 text-center my-6 bg-green-300 rounded-md p-4">
          <div className="my-2">
            <h2>Create Cookie Stand</h2>
          </div>
          <div className="flex items-row my-2 text-xs">
            <label for="location" className="pr-2">Location</label>
            <input className="flex-grow" name="location"></input>
          </div>
         
          <div className="flex items-bottom justify-between text-xs pt-6">
            <div>
            <label for="minimum" className="">Minimum Customers per Hour</label>
            <input className="" name="minimum"></input>
            </div>
            <div>
            <label for="maximum" className="">Maximum Customers per Hour</label>
            <input className="" name="maximum"></input>
            </div>
            <div>
            <label for="average" className="">Average Cookies per Sale</label>
            <input className="" name="average"></input>
            </div>
            <button className="bg-green-500 flex-bottom-0 w-1/4 mx-auto">Create</button>
          </div>
        </form>
        <p className="pb-1 text-center pl-4 text-xs text-gray-600">
          Report Table Coming Soon...

          {/* <pre>{`
          {"location":"Barcelona","minCustomers":2,"maxCustomers":4,"avgCookies":2.5}
          `}</pre> */}
        </p>
        <p className="pb-1 text-center pl-4 text-xs text-gray-600">{cookieStand}</p>
      </main>

      <footer className="bg-green-500 pl-4 text-xs text-gray-600 py-3">
        &copy;2021
      </footer>
    </div>
  )
}
