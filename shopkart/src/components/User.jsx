import React from 'react'

function User({fname,lname,email}) {
  return (
    <div>
        <h1>User</h1>
        <p>My name is {fname} {lname}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default User