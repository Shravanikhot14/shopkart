import React, { useCallback, useMemo, useState } from 'react'
import N from './N'

function M() {

    const [count,setCount]=useState(0)
    const [numbers,setNumbers]=useState([12,34,90,34])
    const [value,setValue]=useState(0);

    const total=useMemo(()=>{
        console.log("Calculating total")
        return numbers.reduce((a,b)=>a+b)
    },[numbers])

    const increment=()=>{
      setCount(count+1)
      if(count%10==0)
      {
        setValue(count)
      }
    }

    const handleClick=useCallback(()=>{
      alert("Button clicked")
    } , [])

  return (
    <div>
        <h3>Parent Component</h3>
        <h5>{count}</h5>
        <button onClick={increment}>Increment</button>
        <hr />

        <h2>Total:{total}</h2>
        <button onClick={()=>setNumbers([1,2,3])}>Change numbers</button>



        <N value={value} handleClick={handleClick}/>
    </div>
  )
}

export default M