import React, { useEffect, useState } from 'react'

export default function Counter() {

    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);


    useEffect(()=>{
      // console.log("useEffect Hook");

      const timer=setTimeout(()=>{
        console.log(count);
      }, 5500);

      return ()=> {
        clearTimeout(timer);
      };
    },[count]);
    

    // 3 conditions---[]empty dependency array, [count]dependency array with variable , no dependency array

    const increment=()=>{
        setCount(count+1);
    }

    const increment1=()=>{
        setCount1(count1+1);
    }


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Click</button>

        <hr />

        <h1>{count}</h1>
        <button onClick={increment1}>Click</button>

    </div>
  )
}
