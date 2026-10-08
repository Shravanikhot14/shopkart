import React, { useEffect, useState } from 'react'

export default function Recipes() {
    const [recipes,setRecipes]=useState(null);

    const fetchRecipes=async()=>{
        try {
           const response= await fetch("https://dummyjson.com/recipes");
           console.log(response);
           const data=await response.json()
           setRecipes(data.recipes)
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };

    useEffect(()=>{
        fetchRecipes()
    },[])




  return (
    <div>{recipes?<>

        {recipes.map((r)=>
        <>
        <p>{r.name}</p>
        {r.ingredients.map(i=><li>{i}</li>)}
        <img src={r.image} width={"20%"}/>
        </>
        )}
    
    </>:<p>Loading........</p>}</div>
  )
}


