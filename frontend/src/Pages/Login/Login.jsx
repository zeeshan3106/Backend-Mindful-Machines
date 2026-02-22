import React, { useState } from 'react'
import './Login.css'
import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

import { FcGoogle } from "react-icons/fc";


import { IoMdEyeOff } from "react-icons/io";


import { IoEyeSharp } from "react-icons/io5";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { blue, green } from '@mui/material/colors';
function Login() {


  const navigate = useNavigate();


  const [loading , isloading]=useState(false)

  const [login, setlogin]=useState({

    email:"",
    password:""
  })


  const onChangeInputLogin=((e) => {

    const {name, value}=e.target

    setlogin(prev =>({

      ...prev,
      [name]:value
      

    })
    )




  })


const onSub = (e) =>{



  e.preventDefault();
   isloading(true)

  if (login.email === "" ){

 toast.error("Please Enter Your Email.")

  }

if (login.password === "" ){

 toast.error("Please Enter Your Password.")

  }




 axios.post('http://localhost:8000/api/users/login',login

  )
  
  .then( res => {

    isloading(false)


 toast.success('Login Successfully!')

   localStorage.setItem("token", res.data.token);
      navigate("/home");

      setlogin({
        email:"",
        password:""
      })

      



  }

   
)
  .catch(err => 


   console.log(err => 

    toast.error("Your Credentials are Wrong.")



   )

  )




}

console.log(login)

const ontoast = (e)=>{



}



const[isshow, setisshow]=useState(false)


  const apple=()=>{

  

  console.log("Apple")


}
  return (
   
     
    <section>
     <Product/>
  
<div className='container-login'>
  <div className='Login'>
  <diV>Login To Your Account</diV>


  <form className='form'>
<div className='form-group'>
  <div>


    <Box sx={{ '& > :not(style)': { m: 1, width: '25ch'  } }}>
 
      <TextField
        id="input-with-icon-textfield"
        label="Email"

        name="email"value={login.email} onChange={onChangeInputLogin}






        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
        variant="standard"
      />
    </Box>

    </div>
    <div className='form-group'>





      <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="standard-password-input"
          label="Password"
          type={isshow===true ? 'text':'password' }

          
        name="password"value={login.password} onChange={onChangeInputLogin}

          autoComplete="current-password"
          variant="standard"
        />

        <Button 

        disabled={isloading===true ? true : false} 
        onClick={()=>{setisshow(!isshow)}}
        
         className=" show-btn !absolute top-[460px] right-[470px] z-1000 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full ! text-black">
          {

            isshow===true ?  <IoEyeSharp /> : <IoMdEyeOff />



          }
          
          </Button>


          
   
        </div>
      
     
    </Box>

    
</div>
  
   







</div>
<div className='Food'>

<Link to = "/ForgetPassword"className="Link    justify-start  cursor-pointer text-[15px] font-[600]" >Forget Password?</Link>
</div>


<div className='flex items-center w-full text-white'>
<Button

onClick={onSub}
  sx={{
    backgroundColor: '#1D4ED8',
    color: 'white',                
    width: '100%',
    height:'40px',
    '&:hover': {
      backgroundColor: '#2563EB', 
      color:'white'
    },
  }}
>{


isloading===true ?  <CircularProgress color="inherit" /> : ""
  
}
  
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
  <Link to="" className='text-white '> <div className='text-white '>
    <div className='flex items-center gap-2'>
     <div>
    
       </div>
  
    
    <div>
    
    Login</div></div></div></Link>

<div>



 


</div>

</Button>



</div>

<div className='Log-sign'>
<div className='register-signup '><Link className='  justify-start  cursor-pointer text-[15px] font-[600] to="" '>Not Registered yet?</Link></div>
<div className='Signup-login w-full .bg '>
  
  
  <Link to="/Signup">SignUp

</Link>

</div>







</div>
<div className='social   '><Link social className='justify-center w-full  cursor-pointer text-[15px] font-[600]'>Or Continue with Social Account</Link></div>
<div className=" Google-Login w-full bg-[#f1f1f1]">
  <Button className='food items-center'

  sx={{
    
    width:'100%',
    color:'black',
    '&:hover':{
      backgroundcolor:'red'
    }

  }}
  
  
  ><div
 className='log-google flex center w-full !bg-[#f1f1f1] !btn-lg text-black '>
 <div className='google-logo'> <FcGoogle /></div>
  
  Login with Google</div></Button>
</div>
</form>
</div>




</div>
<div>
  <Benefits/>
</div>








 </section>


  )
}

export default Login