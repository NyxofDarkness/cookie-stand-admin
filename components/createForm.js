

export default function CreateForm(props){
    return(
      <form name="formData" onSubmit={onCreate} className="flex w-3/4 justify-self-center flex-col m-52 text-center my-6 bg-green-300 rounded-md p-4">
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
    )
  }