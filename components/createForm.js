import { useState } from 'react'

export default function CreateForm({ onCreate }){
  const startValues = {
    location: '',
    maximum: 0,
    minimum: 0,
    average: 0,
  };

  const [values, setValues] = useState(startValues);

  function submitHandle(event) {
    event.preventDefault();
    onCreate(values);
    setValues(startValues)
  }

  function inputChangeHandle(event) {
    let { name, value, type } = event.target;

    if (type === "number") {
      value = parseFloat(value);
    }

    setValues({ ...values, [name]: value });
  }
  return(
    <form name="formData" onSubmit={ submitHandle } className="flex w-3/4 justify-self-center flex-col m-52 text-center my-6 bg-green-300 rounded-md p-4">
      <div className="my-2">
        <h2>Create Cookie Stand</h2>
      </div>
      <div className="flex items-row my-2 text-xs">
        <label htmlFor="location" className="pr-2">Location</label>
        <input type="text" id="location" value={values.location} onChange={inputChangeHandle} className="flex-grow" name="location"></input>
      </div>
    
      <div className="flex items-bottom justify-between text-xs pt-6">
        <FormInputSection>
          <label htmlFor="minimum" className="">Minimum Customers per Hour</label>
          <input type="number" id="minimum" value={values.minimum} onChange={inputChangeHandle} className="" name="minimum"></input>
        </FormInputSection>
        <FormInputSection>
          <label htmlFor="maximum" className="">Maximum Customers per Hour</label>
          <input type="number" id="maximum" id="maximum" value={values.maximum} onChange={inputChangeHandle} className="" name="maximum"></input>
        </FormInputSection>
        <FormInputSection>
          <label htmlFor="average" className="">Average Cookies per Sale</label>
          <input type="number" id="average" value={values.average} onChange={inputChangeHandle} className="" name="average"></input>
        </FormInputSection>
        <button type="submit" className="bg-green-500 flex-bottom-0 w-1/4 mx-auto">Create</button>
      </div>
    </form>
  );
}

function FormInputSelection({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}