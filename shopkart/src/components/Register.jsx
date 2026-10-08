import React from "react";
import { useForm } from "react-hook-form";

function Register() {
    const {register,handleSubmit,formState:{errors},watch}=useForm()
    const onSubmit=(data) => {
        console.log(data)
    }

    const password=watch("password")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>First Name:</label>
      <input type="text"{...register("firstName",{
        required:{value:true,message:"firstName is required"},
        minLength:{value:2, message:"Minimum 2 characters are required"},
      })} />
      {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
      
      <br />

      <br /> <label>Last Name:</label>
      <input type="text"{...register("lastName",{
        required:{value:true,message:"lastName is required"},
        minLength:{value:2, message:"Minimum 2 characters are required"},
        })} />
      {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
      
      <br />

      <br />
      <label>Email:</label>
      <input type="email"{...register("email",{
        required:{value:true,message:"email is required"},
        pattern:{value:/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/, message:"Enter valid email address"},
        })} />
      {errors.email && <p className="text-danger">{errors.email.message}</p>}
      
      <br />

      <br />
      <label>Password:</label>
      <input type="password" {...register("password",{
        required:{value:true,message:"password is required"},
        pattern:{value:/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,16})\S$/, message:"password should contain minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces"},
        })} /> 
      {errors.password && <p className="text-danger">{errors.password.message}</p>}
      
      <br />

      <br />
      <label>Confirm Password:</label>
      <input type="password" {...register("confirmPassword",{
        required:{value:true,message:"confirmpassword is required"},
        validate:(value)=> value==password || "password and confirm password is not same",
        })} /> 
      {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
      
      <br />

      <br />
      <input type="submit" value="Register" />
    </form>
  );
}

export default Register;