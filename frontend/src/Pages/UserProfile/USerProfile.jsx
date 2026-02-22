import React, { useState, useEffect } from 'react'
import './USerProfile.css'
import img1 from './Images/1.jpeg'
import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'
import { Button } from '@mui/material'
import { FaUserCheck } from "react-icons/fa";
import { NavLink } from "react-router"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


function USerProfile() {


  const [profile, setprofile] = useState({
    Name:"",

    Email:"",
     Mobile:"",
     Whatsapp:"",
      Country:"",
      City:"",
        PostalCode:"",
         State:""


  })

  const [newdata, setdata]=useState([])


  const onChangeInputProile =(e)=>{

    const {name, value}=e.target;
    setprofile( prev => ({

      ...prev, 
      [name]:value
    
    
    })
  )

  } 

  const onSubmit=(e)=>{
    e.preventDefault();

  
  


    axios.post('http://localhost:8000/api/frontend/profile',profile)
 
    .then( res =>{ 

  
      {

        
      }
        toast.success("Profile Updated Successfu;;y!")



      })
    .catch( err => console.log(err))

    







  }



  useEffect((e) => {

    const token =  localStorage.getItem("token")
    
    axios.get('http://localhost:8000/api/frontend/getprofiles',
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    )
   
    .then(res => {
      console.log(res.data.data)


      setdata(res.data.data)

  
    
    })
    
      .catch(err => err)

    
    
  
   
  }, [])
  



     console.log(profile)













  return (
    <section>
      <Product/>
      <div className='p-10 w-full'>
        <div className=' Profile flex gap-1  '>
          <div className='col1 w-[10%]'>
          <div className=' bg-white shadow-md rounded-md  w-[70%]'>
            <div className='w-[90%] flex items-center justify-center flex-col'>
           
                <div className=' Name-section pt-5 Name pl-10 pb-3 justify-center'>Muhammad Zeeshan Ali Zafar</div>
                <h6 className='text-gray-400 font-bold pb-4'>zeeshanalizafar53@gmail.com</h6>

                <div className='Menubar MyaccountTabs'>


<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>

                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div className='Logo'><FaUserCheck /></div>
                  <div>   User Profile</div>
                  </div>
                </Button>
</NavLink>

<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>

                
                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div><FaUserCheck /></div>
                  <div>  My Cart</div>
                  </div>
                </Button>
</NavLink>

<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>

                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div><FaUserCheck /></div>
                  <div> My List  </div>
                  </div>
                </Button>

</NavLink>
<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
></NavLink>
<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>
                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div><FaUserCheck /></div>
                  <div>  Log-out</div>
                  </div>
                </Button>


</NavLink>

            </div>



                
              </div>
            </div>
          </div>
       
       
       <div className='right-col w-[60%] items-center !justify-center'>

        <div className='bg-white w-full rounded-md shadow-md p-5 '>

          <h3 className='my-profile pb-3'>My Profile</h3>

          <div className=' Box1w-[100%] flex gap-3 ' >
            <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" 


name="Name"
value={newdata.length > 0 ? newdata[0].Name : "Loading..."}
onChange={onChangeInputProile}
      
      
      
      />
      
    </Box></div>
      <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="Email" variant="outlined"
      
      
name="Email"
value={newdata.length > 0 ? newdata[0].Email : "Loading..."}
onChange={onChangeInputProile}
      />
      
    </Box></div>




          </div>
          <div className='flex gap-3'>
                <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="Mobile" variant="outlined" 
      
      
name="Mobile"
value={newdata.length > 0 ? newdata[0].Mobile : "Loading..."}
onChange={onChangeInputProile}
      />
      
    </Box></div>
      <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="WhatsApp" variant="outlined" 
      
name="Whatsapp"
value={newdata.length > 0 ? newdata[0].Whatsapp : "Loading..."}
onChange={onChangeInputProile}
      />
      
    </Box></div>

</div>

     <div className='flex gap-3 w-full'>
                <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="Country" variant="outlined" 
      
name="Country"
value={newdata.length > 0 ? newdata[0].Country : "Loading..."}
onChange={onChangeInputProile}
      />
      
    </Box></div>
      <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="State" variant="outlined" 
      
name="State"
value={newdata.length > 0 ? newdata[0].State: "Loading..."}
onChange={onChangeInputProile}
      />
      
    </Box></div>

</div>
     <div className='flex gap-3'>
                <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="City" variant="outlined"
      
name="City"
value={newdata.length > 0 ? newdata[0].City: "Loading..."}
onChange={onChangeInputProile}
       />
      
    </Box></div>
      <div className='w-[50%]'><Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
   
    >
      <TextField id="outlined-basic" label="Postal Code" variant="outlined"
      
name="PostalCode"
value={newdata.length > 0 ? newdata[0].PostalCode: "Loading..."}
onChange={onChangeInputProile}
       />
      
    </Box></div>




</div>
<div className='flex center gap-2  Buttons'>
<Button className='btn-blue  btn-lg w-[100%]



'  onClick={onSubmit}      >
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
  
  
  
  Save</Button>
<Button className='btn-blue  btn-border btn-lg w-[100%]'>Cancel</Button>
</div>
        </div>
<div className='bg-white w-[50px] mt-5'>
       
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
</div>
       </div>
       
       
        </div>
      </div>

    



<Benefits/>

    </section>
  )
}

export default USerProfile