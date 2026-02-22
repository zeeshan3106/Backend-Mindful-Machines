import React from 'react'
import './Wishlist.css'

import Header from '../../Components/Navabar/Header/Header'
import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'
import { Link } from 'react-router-dom'


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import img1 from './Components/1.jpg'
import { Button } from '@mui/material'



function Wishlist() {
  return (
  <section>
    <Product/>

    <div className='sec p-5'>
      <div className='Cart-container center flex  w-[80%] max-w-[100%] justify-center gap-10'>


        <div className='left w-[70%] '>



        
        
<div className='cart-side   shadow-md rounded-md p-5 bg-white '>
  <div className='Title-cart border-b border-[rgba(0,0,0,0.1)] p-20' >
  <h2 className='heading'>Your Wishlist</h2>
          <div className='font-bold text-blue-500'>
          <span>Has: <span>500</span><span> items</span></span>

          </div>
</div>

<div className='cart-item p-3 flex items-center gap-4 border '>

  <div className='img w-[20%] rounded-md overflow-hidden group-hover:scale-105'>
    <Link>

    <img src= {img1}  className='image w-full  transition-all'/>
    
    
    </Link>
  </div>
<div className='info w-[90%] '>
  <div className='title text-grey'>Mindful Machines</div>
    <div>AI Powered advance Drones Ultra 4k</div>
    
      <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
    <div>Price:</div>
    <div className='flex gap-3'>
          <div className='new'>1000$</div>
    <div className='old'>1200$</div>
        <div className=' text-blue-700'>100% off</div>

     
   

    </div>
     <div className='cart-offer'> <span className='days'>30 days</span> return available</div>
                 

</div>
















</div>








</div>





<div className='cart-side   shadow-md rounded-md p-1  bg-white'>



<div className='cart-item p-3 flex items-center gap-4 border'>

  <div className='img w-[20%] rounded-md overflow-hidden group-hover:scale-105'>
    <Link>

    <img src= {img1}  className='image w-full  transition-all'/>
    
    
    </Link>
  </div>
<div className='info w-[90%] '>
  <div className='title text-grey'>Mindful Machines</div>
    <div>AI Powered advance Drones Ultra 4k</div>
    
      <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
    <div>Price:</div>
    <div className='flex gap-3'>
          <div className='new'>1000$</div>
    <div className='old'>1200$</div>
        <div className=' text-blue-700'>100% off</div>

     
   

    </div>
     <div className='cart-offer'> <span className='days'>30 days</span> return available</div>
                 

</div>
















</div>








</div>




<div className='cart-side   shadow-md rounded-md p-1  bg-white'>


<div className='cart-item p-3 flex items-center gap-4 border'>

  <div className='img w-[20%] rounded-md overflow-hidden group-hover:scale-105'>
    <Link>

    <img src= {img1}  className='image w-full  transition-all'/>
    
    
    </Link>
  </div>
<div className='info w-[90%] '>
  <div className='title text-grey'>Mindful Machines</div>
    <div>AI Powered advance Drones Ultra 4k</div>
    
      <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
    <div>Price:</div>
    <div className='flex gap-3'>
          <div className='new'>1000$</div>
    <div className='old'>1200$</div>
        <div className=' text-blue-700'>100% off</div>

     
   

    </div>
     <div className='cart-offer'> <span className='days'>30 days</span> return available</div>
                 

</div>



















</div>








</div>


<div className='cart-side   shadow-md rounded-md p-1  bg-white'>


<div className='cart-item p-3 flex items-center gap-4 border'>

  <div className='img w-[20%] rounded-md overflow-hidden group-hover:scale-105'>
    <Link>

    <img src= {img1}  className='image w-full  transition-all'/>
    
    
    </Link>
  </div>
<div className='info w-[90%] '>
  <div className='title text-grey'>Mindful Machines</div>
    <div>AI Powered advance Drones Ultra 4k</div>
    
      <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
    <div>Price:</div>
    <div className='flex gap-3'>
          <div className='new'>1000$</div>
    <div className='old'>1200$</div>
        <div className=' text-blue-700'>100% off</div>

     
   

    </div>
     <div className='cart-offer'> <span className='days'>30 days</span> return available</div>
                 

</div>
















</div>








</div>





        </div>








      </div>
      

    </div>





<Benefits/>
  </section>


  )
}

export default Wishlist