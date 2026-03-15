import React, { useContext, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes } from 'react-router-dom'

import Search from './Search';
import Slider from './Slider'
import CateSlider from './CateSlider'
import Offer from './Offer'
import Popular from './Popular'
import AdsBanner from './AdsBanner';
import Product from './Header1'


import { FaHistory } from "react-icons/fa";

import { FaCartArrowDown } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { PiDeviceRotateBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import Navbar from './Navbar';
import LatestProducts from './LatestProducts';
import AdsBanner2 from './AdsBanner2';
import FeaturedProducts from './FeaturedProducts';
import AdsBanner3 from './AdsBanner3';
import logo from './Images/Banners/logo.jpg'
import Blog from './Blog';
import Benefits from './Benefits';
import Products from '../../../Pages/Products/Products';
import Cart from '../../../Pages/Cart/Cart';
import { Button } from '@mui/material';
import Cartbar from '../../../Pages/Cart/Cartbar';


import { MyContext } from '../../../App';
import { useEffect } from 'react';
import axios from 'axios';














function Header() {
const [userdata, setdata] = useState([])

  const [islogin, setislogin]=useState(false)
useEffect( (e)=>{

  try{
const token = localStorage.getItem("token")
    axios.get('http://localhost:8000/api/frontend/getprofiles',
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }



    ).then(res => {
     
      setdata(res.data.data)
   
    })
    .catch(err => console.log(err))


  }
  catch(error){console.log(error)}



})









  const context = useContext(MyContext )
  return (
<header>

     <div className='strip'>
       <div className='container'>
   
             <div className='element-1'> 
                   <p className='deal'>Its your best chance to get 50% off delightful products,Limited offer</p>
                   </div>
                    <div className='element-2'> 
                          <ul >
                            <li className='list pb-4'>
                             <Link to = "/Contact"  className='link'> Help Center</Link>
                             
                            
                            <li>

                            <Link to ="/Feedback" className='link' link >Order History</Link>
                           
                            </li>
                            </li>
                        </ul>






  
    
     </div>

    </div>



       </div>

    <div className='header w-full'>
       <div className='container-head'>
      
        <div className='w-[20%] col1' >
              <Link to = {"/Home"} >  <img src= {logo}/></Link>

        </div>
         <div className='w-[60%] Col-2'>
         <Search/>
         
         </div>
          <div className=' w-[20%] col3 gap-20 items-center '>
          <ul className='Options'>
   
            <li className='login '>

              <div className='pl-10 flex bg-blue gap-3 items-center justify-center cart '>

              
<div className=' cart-theme'>
                  <Link to="/Profile" className='link1 '><CgProfile /></Link>
</div>
              <li className='cart cart-theme'>
   <Link to="/wishlist" className='link1'><FaRegHeart /></Link>
   
   
   
</li>

 <div className=' cart-theme'>
   
   <button className='link1'   
   onClick={()=>context.setOpenDrawer(true)}  


   
   ><FaCartArrowDown /></button>

             </div>

</div>
              
            
            </li>
            </ul>
        

         
            </div>  
         
         
       </div>
    </div>
    <div>
      <Navbar/>
    </div>
  <div>
  <Slider/>
    </div>

<div>
<CateSlider/>
</div>


<div>
<Popular/>
</div>


<div>
<Offer/>
</div>

<div>
<AdsBanner/>
</div>




<div>
<LatestProducts/>
</div>


<div>
<Offer/>
</div>





<div>
<AdsBanner2/>
</div>


<div>
<FeaturedProducts/>
</div>



<div>
<Offer/>
</div>


<div>
<AdsBanner3/>
</div>


<div>
<Blog/>
</div>


<div>
  <Benefits/>

</div>
<div>

</div>



</header>
  )
}

export default Header