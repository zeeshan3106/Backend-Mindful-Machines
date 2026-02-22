import React, { useContext, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'
import logo from './logo.PNG';
import Search from './Search';
import Slider from './Slider'
import CateSlider from './CateSlider'
import Offer from './Offer'
import Popular from './Popular'
import AdsBanner from './AdsBanner';

import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiDeviceRotateBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import Navbar from './Navbar';
import LatestProducts from './LatestProducts';
import AdsBanner2 from './AdsBanner2';
import FeaturedProducts from './FeaturedProducts';
import AdsBanner3 from './AdsBanner3';

import Blog from './Blog';
import Benefits from './Benefits';
import Products from '../../../Pages/Products/Products';
import Cart from '../../../Pages/Cart/Cart';
import { Button } from '@mui/material';
import Cartbar from '../../../Pages/Cart/Cartbar';


import { MyContext } from '../../../App';
import { useEffect } from 'react';
import axios from 'axios';
import SearchProduct from './SearchProduct';



function Product2() {
  
const [state,setstate]=useState([])


  const [islogin, setislogin]=useState(false)

  const context = useContext(MyContext )




useEffect( (e)=>{
  const token = localStorage.getItem("token")
   axios.get('http://localhost:8000/api/frontend/getprofiles',
    {
      headers:{
        Authorization: ` Bearer ${token}`
      }
    }

   ).then(res =>
    { console.log(res.data.data)
    setstate(res.data.data[0])
    
    
})
    .catch(err => console.log(err))
  },[])





  return (
<header>

     <div className='strip'>
       <div className='container'>
   
             <div className='element-1'> 
                   <p className='deal'>Its your best chance to get 50% off delightful products,Limited offer</p>
                   </div>
                    <div className='element-2'> 
                          <ul >
                            <li className='list'>
                             <Link to = "help-center"  className='link'> Help Center</Link>
                             
                            
                            <li>

                            <Link to ="order-his" className='link' link >Order History</Link>
                           
                            </li>
                            </li>
                        </ul>






  
    
     </div>

    </div>



       </div>

    <div className='header'>
       <div className='container-head'>
      
        <div className='col1' >
              <Link to = {"/Home"} >  <img src= {logo}/></Link>

        </div>
         <div className='col2'>
       <SearchProduct/>
         
         </div>
          <div className='col3'>
          <ul className='Options'>
   
            <li className='login'>


              <div className='flex flex-col justify-start mr-4 Login-Badge'>

              <Link to = "/profile"  className='login2 text-black'>{state.Name} </Link> 
            <Link to = "profile"  className='signup'>{state.Email} </Link>
            </div>
            </li>
            </ul>
             </div>
  <div> 


<ul className='carts'>

<li className='cart'>
   <Link to="/Wishlist" className='link1'><FaRegHeart /></Link>
</li>
<li className='cart'>
   
   <button className='link1'   
   onClick={()=>context.setOpenDrawer(true)}  
   
   ><FaCartArrowDown /></button>
</li>

</ul>




         
            </div>  
         
         
       </div>
    </div>
    <div>
      <Navbar/>
    </div>
 


</header>
  )
}

export default Product2