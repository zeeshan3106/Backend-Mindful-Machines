import React, { useEffect, useState } from 'react'
import './Billing.css'
import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'
import toast, { Toaster } from 'react-hot-toast'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Checkbox, colors } from '@mui/material';
import axios from 'axios';
import { BsStripe } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { SiPaypal } from "react-icons/si";
import { BsCashCoin } from "react-icons/bs";
import Stripe from './Stripe'
function Billing() {
  

  const [items , settiems ]=useState({
    FullName:"",
     Email:"",
     HouseNo:"",
     StreetNo:"",
      City:"",
      Country:"",
       PhoneNo:"",
         Whatsapp:"",
         PostalCode:"",




  })

  const onchnage =((e) =>{

    const {name , value}=e.target

        settiems(prev => ({
          ...prev,
          [name]:value
        }))





  })


  const CashonDelievery = ((e) =>{

    toast.success("Cash On Delievery Added as Paymant Method...")

  })


  useEffect ( (e) =>{

    axios.get('http://localhost:8000/api/orders/getorders').then(res => console.log(res.data)).catch(err => err)



  },[])

  const onSubmit = ((e)=>{
const token = localStorage.getItem("token")

    axios.post('http://localhost:8000/api/orders/putorders',items,{

      headers:{
        Authorization:`Bearer ${token}`
      }





    })
    .then(res =>{ console.log(res.data)

toast.success('Order Placed Successfully...!')

    }
  
  ).catch(err => {

    toast.error("Email Already Available..")
  })



  })





console.log(items)
  return (

    <div>
        <Product/>


         <div className=' billing py-10  '> 
    <div className='flex gap-5 p-10 Card w-[95%]  Billing-Responsiveneess  '>
       <div className='left-part w-[70%]  '>

        <div className='card bg-white shadow-md p-5 rounded-md w-full Left-Responsiveness '>
            <h1 className='title'>BILLING INFORMATION</h1>
            <form className='w-full '>
                <h5 className="text-gray-400">User Details</h5>
                <div className='flex items-center gap-3 '>
                    
                    <div className='col w-[50%]'>

                         <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField className='w-full' label="Full Name" variant="outlined" size="small"

      value={items.value} onChange={onchnage} name='FullName'
      
      
      />

    </Box>


                    </div>


                     <div className='col w-[50%]'>


                         <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField className='w-full'

          value={items.value} onChange={onchnage} name='Email'
      type="email"
      
      label="Email" variant="outlined" size="small"/>

    </Box>


                    </div>

                   
                </div>
                 <div className='Number1'>
                 <h5>Street Adress *</h5>
               
 <div className='col w-[100%] '>

                         <Box
      component="form"
   
      noValidate
      autoComplete="off"
    >
      <TextField
          value={items.value} onChange={onchnage} name='HouseNo'
       className='w-full' label="House Number And Street Name" variant="outlined" size="small"/>

    </Box></div>
    


                    </div>
                    
<div className='Number1'>
<div className=''>
 <div className='col   w-[100%]'>

                         <Box
      component="form"
   
      noValidate
      autoComplete="off"
    >
      <TextField 
          value={items.value} onChange={onchnage} name='StreetNo'
      className='w-full' label="House Number And Street Name" variant="outlined" size="small"/>

    </Box>
                    </div></div>
<div className='Number'>
<h5>Town/City *</h5>
 <div className='col w-[100%] '>

                         <Box
      component="form"
   
      noValidate
      autoComplete="off"
    >
      <TextField
          value={items.value} onChange={onchnage} name='City'
      className='w-full' label="Enter Your City/ Suburb/ Village" variant="outlined" size="small"/>

    </Box>
    </div>

</div>
    <div className='Number'>
    <h5>State or Country *</h5>

     <div className='col w-[100%] '>

                         <Box
      component="form"
   
      noValidate
      autoComplete="off"
    >
      <TextField
          value={items.value} onChange={onchnage} name='Country'
      
      className='w-full' label="State or Country" variant="outlined" size="small"/>

    </Box>
    </div>
<div className='Number'>
    <h5>Country</h5>

     <div className='col w-[100%] '>

                         <Box
      component="form"
   
      noValidate
      autoComplete="off"
    >
      <TextField
          value={items.value} onChange={onchnage} name='Country'
      className='w-full' label="Country" variant="outlined" size="small"/>

    </Box>
    </div>
    <div className='Number'>
    <h5>Post Code</h5>
     <div className='col w-[100%]  '>

                         <Box
      component="form"
   
      noValidate
      autoComplete="off"
    >
      <TextField 
          value={items.value} onChange={onchnage} name='PostalCode'
      className='w-full' label="Zip Code" variant="outlined" size="small"/>

    </Box>
</div>
<div className='Number'>
    <div className='flex flex items-center gap-3  '>
         <div className='col w-[30%] '>

                         <Box
      component="form"
   
      noValidate
      autoComplete="off"
    >
      <TextField 
          value={items.value} onChange={onchnage} name='PhoneNo'
      className='w-full' label="Phone Number" variant="outlined" size="small"/>

    </Box>
</div>

     <div className='col w-[30%] '>

                         <Box
      component="form"
   
      noValidate
      autoComplete="off"
    >
      <TextField 
          value={items.value} onChange={onchnage} name='Whatsapp'
      className='w-full' label="WhatsApp Number" variant="outlined" size="small"/>

    </Box>
    


                  
    


                    </div>

                    
                    
                    </div>
    


                    </div>


                    </div>



                    </div>


                    </div>



                    
</div>

            </form>

         



        </div>



       </div>
<div className='right-col w-[30%] Right-Responsiveness '>
    <div className='card shadow-md rounded-md w-full '>

        <div className='text-[20px] w-full font-bold'>YOUR ORDER </div>
        <div className='w-full '> 

            <div className=' Menu flex items-center gap-35 justify-items-center text-center border'>

            <div className='order-items font-bold '>Product</div>
            <div className='order-items font-bold '>SubTotal</div>
            </div>

              <div className=' Items flex items-center  gap-10 justify-items-center text-center '>
<div className=' names w-[90%] start justify-start'>
            <div className='order-items-list  '>AI Powered Drone</div></div>
            <div className='w-[30%]'>
            <div className='order-items-list  '>$10000</div></div>
            </div>




            
              <div className=' Items flex items-center  gap-10 justify-items-center text-center '>
<div className=' names w-[90%] start justify-start'>
            <div className='order-items-list  '>AI Powered Drone</div></div>
            <div className='w-[30%]'>
            <div className='order-items-list  '>$10000</div></div>
            </div>



            
              <div className=' Items flex items-center  gap-10 justify-items-center text-center '>
<div className=' names w-[90%] start justify-start'>
            <div className='order-items-list  '>AI Powered Drone</div></div>
            <div className='w-[30%]'>
            <div className='order-items-list  '>$10000</div></div>
            </div>




            
              <div className=' Items flex items-center  gap-10 justify-items-center text-center '>
<div className=' names w-[90%] start justify-start'>
            <div className='order-items-list  '>AI Powered Drone</div></div>
            <div className='w-[30%]'>
            <div className='order-items-list  '>$10000</div></div>
            </div>


            
              <div className=' Items flex items-center  gap-10 justify-items-center text-center '>
<div className=' names w-[90%] start justify-start'>
            <div className='order-items-list  '>AI Powered Drone</div></div>
            <div className='w-[30%]'>
            <div className='order-items-list  '>$10000</div></div>
            </div>
</div>

<div>
  <hr/>

  <div className='flex gap-30 items-center justify-center text-[18px] pb-2'>
    <diV>Total Amount:</diV>
    <diV>$10000</diV>



  </div>


</div>

<div>

   <Button className='w-full rounded-md shadow-md'
   onClick={onSubmit}
   sx={{
    background:"blue",
    color:"white"

   }}


   
   
   
   
   
   
   >Check-Out



   
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
   
   
   
   
   
   
   </Button>


</div>




    </div>


    
<div className=' bg-white runded-md shadow-md p-4 '>

  <div className='text-[20px] PAymentOptions pb-2'>Payment Options</div>

 <Link onClick={CashonDelievery}><div className='mt-4 ABC flex justify-center shadow-md p-2 border-rgba(0,0,0,0.1) text-gray-700  '>
  <div className='flex items-center gap-2'>
    <div>

    </div>
  <div><BsCashCoin /></div>
  <div>
    
    Cash On Delievery
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
    
    </div></div>
  </div></Link>  

  <Link> <div className='mt-4 ABC  flex justify-center shadow-md p-2 border-rgba(0,0,0,0.1) text-gray-700  pb-2 pb-2 '> 
    <div className='payment '>
   
      <div>
        <Stripe/>
      </div>
       <div >
  Payoneer
      </div>
      
      
      </div>
        
        
        
        </div>
</Link>
  <Link> <div className='mt-4 ABC  flex justify-center shadow-md p-2 border-rgba(0,0,0,0.1) items-center text-gray-700  pb-2 pb-2 '> 
    <div className='payment '>
    <div className='w-[20px]'>

     <img src='https://logo.svgcdn.com/logos/paypal.png'></img>
      </div>
      <div>Paypal</div></div>
        
        
        
        </div>
</Link>
  <Link> <div className='mt-4 ABC  flex justify-center text-gray-700 shadow-md p-2 border-rgba(0,0,0,0.1)  pb-2 pb-2 '> 
    <div className='payment '>
    <div className='w-[25px]'>
   
     <img src='https://crystalpng.com/wp-content/uploads/2024/10/Easypaisa-logo-600x600.png'></img>
      </div>
      <div>Easy Paisa</div></div>
        
        
        
        </div>
</Link>
  <Link> <div className='mt-4 ABC  flex justify-center text-gray-700  pb-2 pb-2 '> 
    <div className='payment '>
    <div >

      </div>
      <div className='flex gap-3 items-center shadow-md p-2 shadow-md p-2 border-rgba(0,0,0,0.1) border-rgba(0,0,0,0.1)'>

<div className=' w-[30px] '>
       <img src='https://crystalpng.com/wp-content/uploads/2024/12/new-Jazzcash-logo-600x600.png'></img>
        
        
        </div>

        <div>JazzCash</div>
        
        
        </div>
        
        
        
        </div>
        </div>
</Link>

</div>


</div>




    </div>





    </div>


<Benefits/>

    </div>
 
   
  )
}

export default Billing