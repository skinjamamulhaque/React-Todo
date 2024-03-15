import React, { useState } from "react"


function App() {
 
  const [task, settask]= useState("")

  const submitHandler = (e)=>{
    e.preventDefault() // this mathode prevent the default behavior of the form submittion.
    console.log(e.target.value);
  }


  
  return (
    <>
    <div className="w-full h-16 p-4 bg-black text-center text-white ">
      <h2 className="font-bold text-2xl">My TODO's List</h2>
    </div>

    <form 
      onSubmit={submitHandler}
      className="text-center mt-5 w-full p-10 ">
      <div className="mb-5 flex items-center">
      <label className="mr-5 ">Title : </label>
      <input 
        value={task}
        type="text" className="border border-black w-1/2 p-2 rounded" placeholder="Enter title here"/>
      </div>

      <div className="mb-5 flex items-center">
      <label className="mr-5 ">Desc : </label>
      <input type="text" className="border border-black w-1/2 p-2 rounded" placeholder="Enter description here"/>
      </div>
      
      <button type="submit" className=" border px-5 py-3 rounded bg-blue-800 text-white ">Add Task</button>
    </form>
  </>
  )
      
}

export default App
