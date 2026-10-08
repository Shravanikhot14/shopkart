import React from 'react'

function Category({id,name,description}) {
  return (
    <div>

    <p>Category id is {id}</p>
    <p>Category name is {name}</p>
    <p>Description: {description} </p>

    </div>
  )
}

export default Category