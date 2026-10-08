import React, { useState } from 'react'
import B from './B';

function A() {

    const[msg,setMsg]=useState("Good Morning");

  return (
    <div>

    <h1>A Component</h1>
    <p className='text-danger m-3 p-2'>message: {msg}</p>

    <hr />

    <B/>

   

    </div>
  )
}

export default A