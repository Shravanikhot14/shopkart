import React from 'react'
import C from './C'

function B() {
  return (
    <div>

    <h1>B Component</h1>
    <p className='text-danger m-3 p-2'>message: </p>

    <hr />

    <C/>

    </div>
  )
}

export default B