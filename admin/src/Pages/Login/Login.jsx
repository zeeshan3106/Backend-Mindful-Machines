import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";


import toast, { Toaster } from 'react-hot-toast'
import Button from '@mui/material/Button';
import axios from 'axios';
function Login() {


    const [login, setlogin]=useState({

        email:"",
        password:""

    })

    const OnchageInputLogin= (e)=>{

        const{name, value}=e.target

        setlogin(prev =>({
            ...prev, 
            [name]:value
        }))


    }

    const onSubmitInformation = (e) =>{
        e.preventDefault();

        

  axios.post('http://localhost:8000/api/users/login',login


  )
        .then( res => {
            localStorage.setItem('token',res.data.token)
            console.log(login,res.data.token)

        }
          

        )
        .catch( err => console.log(err))







    }

    console.log(login)










  return (
   <section>

    <div className='Login-Form flex items-center justify-start'>

        <div className='bg-white flex shadow-md rounded-md w-[100%] p-4  Login-Mobile '>
            <div className='flex  gap-220 w-[100%] items-center justify-center text-center Login-Buttons'>

            <div className=''>
            <div></div>
            <div className='text-[22px] font-bold '>Mindful Machines</div>
            </div>
            <div className='flex items-center gap-2  Link'>
                <Link className=''>
            <div className='bg-blue-800 p-1 pl-5 pr-5 Login-Button shadow-md rounded-md'>Login</div></Link>
            <Link><div className='bg-green-800 p-1 pl-5 pr-5 shadow-md Login-Button'>SignUp</div></Link>
</div>
</div>

        </div>




    </div>

<div className=' flex items-center justify-center pt-4 Logi-Area'>
    <div className='w-[95%] pb-50 bg-white flex items-center justify-center shadow-md rounded-md Login-Card-Area '>
<div className='bg-white Login-Admin shadow-md Login-main-card rounded-md w-[40%]'>



    <div className=''>
    <div className='bg-white Login-Card-Area  w-[95%]   flex flex-col items-center justify-center pb-5 pt-0 Login-Card-Area Login-Setup '>
      
  <div className='text-[32px] font-bold Login-Card-Area-text  pt-10 '> Welcome Back!</div>
   <div className='text-[32px] font-bold Login-Card-Area-text  '> Signin With Your Credentials.</div>
   <div className='flex gap-5 pt-5 Logn-gap' >


   <Link><div className='Google '>
   <div className='flex items-center gap-2'>
   
  <div className='Login-Area-Authentications'>  Signin with Google</div>
   <div className='text-[20px] Login-Area-Authentications '><FcGoogle /></div>
    </div>
    
    </div></Link>
    <Link>
   <div className='Google flex items-center gap-2'>
   
    <div className='Login-Area-Authentications'>Signin with Facebook</div>
     <div className='text-[20px] Login-Area-Authentications'><FaFacebook /></div></div></Link>
   </div>
   <div className='flex  text-center'>

<div className='pt-5 font-bold Login-Area-Other '>Or, Signin with your email</div>


</div>
</div>



<div className='flex pl-5 flex-col justify-center Gap'>
    <div className='text-[20px] font-bold'>Email</div>

    <div>
        <input type='text' className='textbox t2'
        name='email' value={login.email} onChange={OnchageInputLogin}
        
        
        />
    </div>
</div>
<div className='flex pl-5 flex-col justify-center Gap'>
    <div className='text-[20px] font-bold pt-5'>Password</div>

    <div className=''>
        <input type='password' className='textbox  t2'
        name='password' value={login.password} onChange={OnchageInputLogin}
        />
    </div>
</div>
<div className='flex justify-center items-center'>
<div className='font-500 flex pt-5 items-center  justify-center w-[90%] gap-40 resposive-1 '>
   
    <div className='flex items-center gap-2 w-[50%]'>
<input type='checkbox' className='Checkbox' />
<div>Remember Me</div>
</div>

<div className='Fotget font-bold w-[50%] text-blue-800' >
    <Link>Forget Password?</Link></div>
</div>



</div>



<div className='pt-10 pl-5 pb-20'>
<div className='bg-blue-800 Button-Login font-bold shadow-md  '>
<Button

onClick={onSubmitInformation}

sx={{
    color:'white',
    height:45,
  

}}>
    
    
    
    
    SIGN IN</Button>
</div>
</div>

</div>
</div>



   </div>


   
   
</div>








   </section>

   
  )
}

export default Login