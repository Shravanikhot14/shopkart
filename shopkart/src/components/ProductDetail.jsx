import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    const [product, setProduct]=useState(null)

    const {id}=useParams()

    const fetchProduct=async()=>{
        try {
           const response=await fetch(`https://fakestoreapi.com/products/${id}`)
           const data=await response.json()
           setProduct(data)
        } catch (error) {
            alert("Something went wrong")
        }
    }

    useEffect(()=>{
        fetchProduct()
    },[])

  return (
    <div>

    {product ? <>
    <h1>{product.title}</h1>
    <img src={product.image} alt="" />
    </>: <p> Loading......................</p>}

    </div>
  )
}

export default ProductDetail