import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { LoginContext } from '../LoginContext';

function Login() {

  const {login}=useContext(LoginContext);        

  const {register,handleSubmit,formState:{errors}}=useForm();

  const onSubmit=(data)=>{
    console.log(data);
    login(data.email)
  }

  
  return (
    <div>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Enter email</label>
        <input type="email" {...register("email",{required:{value:true, message:"Email is required"} })} />

        <p className="text-danger">{errors.email && errors.email.message}</p>

        <br />

        <label htmlFor="">Enter password</label>
        <input type="password" {...register("password",{required:{value:true, message:"Password is required"} })} />
        <p className="text-danger">{errors.password && errors.password.message}</p>

        <br />

        <input type="submit" />
        
      </form>
    </div>
  )
}

export default Login