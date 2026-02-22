import React, { useEffect, useState } from 'react'
import './Cart.css'
import Cartbar from './Cartbar'
import Header from '../../Components/Navabar/Header/Header'
import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'
import { Link } from 'react-router-dom'


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import img1 from './Components/1.jpg'
import { Button } from '@mui/material'
import axios from 'axios'
import Products from '../Products/Products'
import toast, { Toaster } from 'react-hot-toast'
import Pagination from '@mui/material/Pagination';



function Cart() {



  const [thispage , setthispage ]=useState()


  const OnchangePage = (event , value)=>{
    setthispage(value)
    console.log(value)
  }





  const [state, setstate]=useState([])

  const [cart, setcart] = useState([])
const [total,settotal]=useState(0)

const [carttotal, setcarttotal]=useState(0)

const [click,setclick]=useState([])

const onClick = async(e)=>{

const token = localStorage.getItem("token")
 await  axios.get('http://localhost:8000/api/cart/cartget',{

    headers:{
      Authorization:`Bearer ${token}`
    },

    params:{
      "_id":"697059371da92d34f34769f3"
    }



  }).then(
    res => {
      toast.success("Added Successfully...")
      setclick(res.data)
      console.log(res.data)
    }
  ).catch(err => {err

  toast.error("Already Existed...")
  }



  )


   await axios.get('http://localhost:8000/api/cart/get',{

    params:{
      page: thispage
    }

   },

      {
        headers:{
           Authorization: `Bearer ${token}`
        }
      }



    )
    .then(res => {
      setcart(res.data.data)
      settotal(res.data.totalItems)
      setcarttotal(res.data.carttotal)
      console.log(res.data)

    
     

    }
    )
    .catch(err => console.log(err))
 






}










 useEffect(() => {
  const token = localStorage.getItem("token")
    axios.get('http://localhost:8000/api/cart/get',

      {
        headers:{
           Authorization: `Bearer ${token}`
        }
      }



    )
    .then(res => {
      setcart(res.data.data)
      settotal(res.data.totalItems)
      setcarttotal(res.data.carttotal)
      console.log(res.data)

    
     

    }
    )
    .catch(err => console.log(err))
 
  
 }, [])
 
 console.log()



  return (
  <section>
    <Product/>

    <div className='sec p-5'>
      <div className='Cart-container center flex  w-[80%] max-w-[100%] justify-center gap-20 Mobile-Cart'>


        <div className='left w-[70%]  '>



        
        
<div className='cart-side apple   shadow-md rounded-md p-5 bg-white '>
  <div className='Title-cart border-b border-[rgba(0,0,0,0.1)] h-[100%]' >
  <h2 className='heading'>Your Delightful Cart</h2>
          <div className='font-bold text-blue-500 h-[100%]'>
          <span>Has: <span>{total}</span><span> items</span></span>

          </div>
</div>

</div>


{cart.map((product) => (

<div className='cart-side   shadow-md rounded-md p-1  bg-white'>


<div className='cart-item p-3 flex items-center gap-4 border'>

  <div className='img w-[20%] rounded-md overflow-hidden group-hover:scale-105'>
    <Link>

    <img src= {img1}  className='image w-full  transition-all'/>
    
    
    </Link>
  </div>
<div className='info w-[90%] '>
  <div className=' text-gray-600'>{product.company}</div>
    <div>{product.title}</div>
    
      <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
    <div>Price:</div>
    <div className='flex gap-3'>
          <div className='new'>{product.price}</div>
    <div className='old'>{product.oldPrice}</div>
        <div className=' text-blue-700'>{product.discount}</div>

     
   

    </div>
     <div className='cart-offer'> <span className='days'>30days</span> return available</div>
     <div className='flex gap-10'>
           <div className=' text-gray-500'>Quantity:<span className='text-black'>{product.quantity}</span></div>
                <div className=' text-gray-500'>Total Price:<span className='text-black'>{product.Totalprice}</span></div>

                </div>
       

</div>














</div>












</div>


))}






<div className='flex justify-center Cart-Pagination '>

   <Pagination count={10}

   onChange={OnchangePage}
   
   color='primary'/>

</div>
        </div>


<div className="right-part w-[35%] flex center Total-Responsive">

  <div className=' right w-full shadow-md rounded-md !h-80 bg-white text-[22px]  '>CART TOTALS
 <div className='Cart-Border'></div>
  <p className="flex items-center justify-between Subtotal">

    
     <span className='  text-[15px] text-bold pt-20 '>Sub Total</span>
        <span className='new text-[14px] text-bold '>{carttotal}</span>
        
  </p>

    <p className="flex items-center justify-between Subtotal">

    
     <span className='  text-[15px] text-bold pt-20 '>Shipping</span>
        <span className='text-[14px] text-bold '>$200</span>
        
  </p>

  <p className="flex items-center justify-between Subtotal">

    
     <span className='  text-[15px] text-bold pt-20 '>Estimate For</span>
        <span className=' text-[14px] text-bold '>Australia</span>
        
  </p>

   <p className=" Total-Price flex items-center justify-between Subtotal">
  <span className=' text-blue-600 text-[15px] text-bold pt-20 '>Total</span>
           <span className=' text-blue-600 text-[14px] text-bold '>$10200</span>      
  </p>

<div>
  <Button  className='Check-out-btn w-full'

sx={{

  color:'white',
background:'blue',
fontFamily:'Times New Roman'




}}


>

  <Link to="/Billing" className='text-white'> <div className='text-white'><Button




  sx={{color:'white'}}
  
  
  
  
  >

    
    
    Check-Out</Button></div></Link>
  
  
  
 </Button></div>
  <div>


</div>
  </div>


</div>




      </div>


    </div>





<Benefits/>
  </section>


  )
}

export default Cart