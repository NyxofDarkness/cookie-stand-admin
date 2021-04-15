import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { hours } from '../data'
import Header from '../components/header'
import Footer from '../components/footer'
import CreateForm from '../components/createForm'
import ReportTable from '../components/reportTable'
// import Image from 'next/image'

let total_sales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
export default function Home() {

  // const [cookieStand, setCookieStand] = useState("")
  const [reports, setReports] = useState([])

  // function onCreate(event){
  //   event.preventDefault();

  //   const report = {
  //     location: event.target.location.value,
  //     hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
  //     hourly_total: 516,
  //     report_length: reports.length,
  //     total: new_total([48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516], total_sales)
  //   }
  //   setReports([...reports, report])
  // }

  function new_total(arr, total_sales){
    let new_total= []
    arr.forEach((i) => {
      total_sales[i] += arr[i]
      new_total.push(total_sales[i])
    })
    total_sales = new_total
    return new_total
  }

  // function OnCreate22222222(location, minimum, maximum, average, hourlySales){
  //   // passed argument object representing new cookie stand w/ location property. hourly_sales hardcoded
  //   this.location = location;
  //   this.minimum = minimum;
  //   this.maximum = maximum;
  //   this.average = average;
  //   this.hourlySales = hourlySales;
  // }

  function latestTotalSales(){
    if(reports.length === 0){
      return 'Report Table Coming Soon...'
    }
    return reports[reports.length -1].total
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header title="Cookie Stand Admin"/>
        <CreateForm />
        <ReportTable hours_thing={hours} report_table={reports} latest_totals={latestTotalSales()} />
      </main>
      <Footer report_table={reports}/>
    </div>
  )
  
  function onCreate(event){
    event.preventDefault();

    const report = {
      location: event.target.location.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
      hourly_total: 516,
      report_length: reports.length,
      total: new_total([48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516], total_sales)
    }
    setReports([...reports, report])
  }

  // function Header(props){
  //   return(
  //     <header className="flex p-2 bg-green-500 text-xl">
  //       <h1>{props.title}</h1>
  //     </header>
  //   )
  // }

  // function CreateForm(props){
  //   return(
  //     <form name="formData" onSubmit={formHandler} className="flex w-3/4 justify-self-center flex-col m-52 text-center my-6 bg-green-300 rounded-md p-4">
  //       <div className="my-2">
  //         <h2>Create Cookie Stand</h2>
  //       </div>
  //       <div className="flex items-row my-2 text-xs">
  //         <label for="location" className="pr-2">Location</label>
  //         <input className="flex-grow" name="location"></input>
  //       </div>
      
  //       <div className="flex items-bottom justify-between text-xs pt-6">
  //         <div>
  //         <label for="minimum" className="">Minimum Customers per Hour</label>
  //         <input className="" name="minimum"></input>
  //         </div>
  //         <div>
  //         <label for="maximum" className="">Maximum Customers per Hour</label>
  //         <input className="" name="maximum"></input>
  //         </div>
  //         <div>
  //         <label for="average" className="">Average Cookies per Sale</label>
  //         <input className="" name="average"></input>
  //         </div>
  //         <button className="bg-green-500 flex-bottom-0 w-1/4 mx-auto">Create</button>
  //       </div>
  //     </form>
  //   )
  // }

  // function ReportTable(props){
  //   return(
  //     <div>
  //     {/* <p className="pb-1 text-center pl-4 text-xs text-gray-600">Report Table Coming Soon..</p> */}
  //     <p className="pb-1 text-center pl-4 text-xs text-gray-600">{cookieStand}</p>
  //     </div>
  //   )
  // }

  // function ReportEmpty(props){
  //   return(
  //     <p className="pb-1 text-center pl-4 text-xs text-gray-600">Report Table Coming Soon..</p>
  //   )
  // }
  

  // function Footer(props){
  //   return(
  //     <footer className="bg-green-500 pl-4 text-xs text-gray-600 py-3">
  //       &copy;2021
  //     </footer>
  //   )
  // }
  
  // image Component
  // const DeleteIcon = () => (
  //   <Image
  //     src="/images/delete-1727486_640.png"
  //     height={12}
  //     width={12}
  //     alt={delete}
  //   />
  // )
}