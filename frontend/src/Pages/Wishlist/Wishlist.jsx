import React, { useEffect, useState } from 'react'
import './Wishlist.css'

import Header from '../../Components/Navabar/Header/Header'
import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'
import { Link } from 'react-router-dom'


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import img1 from './Components/1.jpg'
import { Button } from '@mui/material'
import ProductItem from '../../Components/Navabar/Header/ProductItem'
import axios from 'axios'
import Pagination from '@mui/material/Pagination';








function Wishlist() {


  const [thipage , setthispage]=useState()

  const onChnagePage = (event , value)=>{

    setthispage(value)
    console.log(value)
  }




  
const [wishget, setwishget]=useState([])

const [totalwish , settotalwish]=useState(0)

useEffect(()=>{

const token = localStorage.getItem("token")
  axios.get('http://localhost:8000/api/wish/wishGet',{
    params:{
      page : thipage
    }
  },{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }

  




  ).then(res =>{


    setwishget(res.data.data)
     settotalwish(res.data.totalwish)



  }).catch(err => err)



},[])



console.log(wishget)



  const [list, setlist]= useState([])




  return (
  <section>
    <Product/>

    <div className='sec p-5'>
      <div className='Cart-container center flex  w-[80%] max-w-[100%] justify-center gap-10'>


        <div className='left w-[100%] '>
          <div className='bg-white rounded-md shadow-md Top'>

           <h2 className='heading'>Your Wishlist</h2>
           <div className='flex items-center justify-center'>
            <div className='font-bold'>
          <span className='text-gray-700'>Total Items: <span>{totalwish}</span><span> </span></span>

          </div>
          </div>
</div>

<div>

  {wishget.map((product, index) => (
        
<div className='cart-side   shadow-md rounded-md p-5 bg-white '>
  <div className='Title-cart  border-[rgba(0,0,0,0.1)] p-20' >
 
         
</div>
<div>

<div className='  flex  Items '>

  <div className='img w-[20%] rounded-md overflow-hidden group-hover:scale-105'>
    <Link>
     <img src= {img1}  className=' w-full h-[200px]   transition-all'/>
    
    </Link>
  </div>
  
<div className='info w-[90%] '>

  
  <div className=' text-gray-600 '>{product.company}</div>

   <Link> <div className='' >{product.title}</div></Link>
    
      <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
    <div>Price:</div>
    <div className='flex gap-3'>
          <div className='new'>{product.price}</div>
    <div className='old'>{product.oldPrice}</div>
        <div className=' text-blue-700'>{product.discount}</div>

     
   

    </div>
     <div className='cart-offer '> 
    
      <div className='Field'>
      <div>
      <span className='days'>30 days</span> return available
     </div>
     <div>
    
     <Button className='btn-blue mt-4 months '>Add to Cart</Button>

     </div>
     </div>
     </div>
     
  
     
     
    
     <br/>
     <br/>
    
                 

</div>


</div>













</div>








</div>
 ))}


 <div className='flex justify-center Cart-Pagination'>



  <Pagination
  onChange={onChnagePage}

  color='primary'
  
  count={10}/>
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