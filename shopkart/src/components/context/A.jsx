import React, { createContext, useState } from 'react'
import B from './B';

// step 1- create context
export const firstContext= createContext()

function A() {

    const[msg,setMsg]=useState("Good Morning");



  return (
    <div>

    <h1>A Component</h1>
    <p className='text-danger m-3 p-2'>message: {msg}</p>

    <hr />

     {/*step 2- provide data to context with the help of provider  */}

    <firstContext.Provider value={{msg}}>

      <B/>                              
      {/* C and D will also get the data */}

    </firstContext.Provider>

    
   

    </div>
  )
}

export default A