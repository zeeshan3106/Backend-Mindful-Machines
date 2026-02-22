import React, { useState } from 'react'
import './Signup.css'

import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BadgeIcon from '@mui/icons-material/Badge'
import toast, { Toaster } from 'react-hot-toast'
import { FcGoogle } from "react-icons/fc"
import { IoMdEyeOff } from "react-icons/io"
import { IoEyeSharp } from "react-icons/io5"

import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Signup() {
  const [showPassword, setShowPassword] = useState(false)


const [form, setForm] = useState({
  name: "",
  username: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  profession: "",
  company: "",
  password: "",
  confirmpassword: ""
})


  const onChangeInput=(e)=>{

    const {name, value}= e.target

  setForm(prev => ({
  ...prev,
  [name]: value
}))


  }





  const OnSubmit = (e) =>{
    e.preventDefault();

    if (form === "")
    {
      return false,
      alert("Plase add information in Name section")
    }
    axios.post('http://localhost:8000/api/users/signup',form)
  
    .then(res => {
      console.log(res.data);


      toast.success("Account Created Successfully!")
    
    
    }
    )
    .catch( err =>
      console.log(err))
    


  
   




  }

  
   console.log(form)




  return (
    <section>
      <Product />

      <div className="signup-container">
        <div className="signup-card">

          <div className="signup-title">
            
               <Toaster 
    toastOptions={{

      style:{
        background:"white",
        color:"black",
        borderRadius:"20px",
        fontSize:"14px",
        fontFamily:"Roboto",

      }


    }}
    
    
    
    />
            Create Your Account</div>

          <form className="signup-form">

            <TextField label="Full Name" variant="standard"    label="Full Name"
  name="name"
  value={form.name}
  variant="standard"
  onChange={onChangeInput} />
            <TextField label="Username" variant="standard" onChange={onChangeInput}

            name="username" value={form.username}
          
            
            
            />
            <TextField label="Email" variant="standard"
           
 value={form.email}
 name="email"
          onChange={onChangeInput}   
            
            />

            <TextField
              label="Phone Number"
              variant="standard"

              name="phone" 

               value={form.phone}
          onChange={onChangeInput} 







              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"        >
                    <PhoneIcon />
                  </InputAdornment>
                )
              }}
            />

            <TextField label="Country" variant="standard" 

             value={form.country}
            name="country" onChange={onChangeInput} 
            
            
            />
            <TextField label="City" variant="standard"
              name="city" 

               value={form.city}
          onChange={onChangeInput}  />

            <TextField
              label="Profession"
              variant="standard"
              
              name="profession" 

               value={form.profession}
          onChange={onChangeInput} 
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BadgeIcon />
                  </InputAdornment>
                )
              }}
            />

            <TextField label="Company / Organization"

             value={form.company}
            name="company" onChange={onChangeInput} 
            
            
            variant="standard" />

            <div className="password-wrapper">
              <TextField
                label="Password"

                 value={form.password}
            name="password" onChange={onChangeInput} 
                type={showPassword ? 'text' : 'password'}
                variant="standard"
                fullWidth
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeSharp /> : <IoMdEyeOff />}
              </button>
            </div>

            <TextField

             value={form.confirmpassword}
            name="confirmpassword" onChange={onChangeInput} 
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              variant="standard"
            />

            <Button className="signup-btn" onClick={OnSubmit}    >
              <Link to="">Create Account</Link>
            </Button>

            <div className="signup-login-link">
              <span>Already have an account?</span>
              <Link to="/Login">Login</Link>
            </div>

            <div className="signup-social-text">
              Or Continue with Social Account
            </div>

            <Button className="google-signup-btn">
              <div className="google-content">
                <FcGoogle />
                Sign up with Google
              </div>
            </Button>

          </form>
        </div>
      </div>

      <Benefits />

    </section>
  )
}

export default Signup
