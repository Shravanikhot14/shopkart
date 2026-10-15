import React from 'react'

function N({value,handleClick}) {

    console.log("N component")


  return (
    <div>
        <h2>N component {value}</h2>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default React.memo(N)