import React, { useState } from "react"


function App() {
 
  const [title, setTitle]= useState("")
  const [desc, setDesc] = useState("")

  const [mainTask, setMainTask] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault() // this mathode prevent the default behavior of the form submittion.
    setMainTask([...mainTask, {title}, {desc}]) // ("...mainTask") is a spred operator, which will add all the data without deleting prev data. & the "title", "desc" which coming from the input filed, will contain the data. 

    console.log(mainTask); // this will show the entered task details.

    setTitle(""); // to set the input blank after submisstion the form. 
    setDesc("");  // same as above.
  }

    let renderTask = <h2>There is no task</h2> // this will render the UL where all the added task will shown.

  
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
        value={title}
        onChange={ (e)=>{
          setTitle(e.target.value) 
        }
      }
        type="text" className="border border-black w-1/2 p-2 rounded" placeholder="Enter title here"/>
      </div>

      <div className="mb-5 flex items-center">
      <label className="mr-5 ">Desc : </label>
      <input 
          value={desc}                    // we add a attribute named 'value' to get the details
          onChange={(e)=>{               //this is a methode whih we run when we want to   get data from any changes done
              setDesc(e.target.value)
          }
        }
          type="text" className="border border-black w-1/2 p-2 rounded" placeholder="Enter description here"/>
      </div>
      
      <button type="submit" className=" border px-5 py-3 rounded bg-blue-800 text-white ">Add Task</button>
    </form>

    <hr />

    <div>
      <ul>
        {renderTask}
      </ul>
    </div>
  </>
  )
      
}

export default App
