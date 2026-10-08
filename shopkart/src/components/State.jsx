import React, { useState } from 'react'

export default function State() {
    const [name, setName]=useState("");
    const [subjects,setSubject]=useState(["HTML","CSS","Javascript"]);
    const [user,setUser]=useState({id:101, name:"Anisha"})
    

  return (
    <div>

        {name && <h1>Student name is {name}</h1>}

        <hr />

        <h1>{name || "Name not provided"}</h1>

        <hr />

        <p>Ternary operator</p>
        {name ? <p>Welcome {name}</p> : <p>Name is not provided</p>}

        <button onClick={()=>{setName("Anisha")}}>Change name</button>

        <hr />

        {
            subjects.map((s,i)=> <p key={i}>{s}</p>)
        }

        <button onClick={()=>setSubject([...subjects,"Java"])}>Add java</button>

        <h1>{user.id} {user.name} {user.age}</h1>
        <button onClick={()=> setUser({...user,age:19})}>Add age property</button>

    </div>
    
  )
}
