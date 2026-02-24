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
import logo from './Images/Banners/103.jpg'
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
                            <li className='list'>
                             <Link to = "/Contact"  className='link'> Help Center</Link>
                             
                            
                            <li>

                            <Link to ="/Feedback" className='link' link >Order History</Link>
                           
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
         <Search/>
         
         </div>
          <div className='col3'>
          <ul className='Options'>
   
            <li className='login'>

              <div className='flex flex-col bg-blue shadow-md rounded-md Login-Badge'>

               <Link to = "/login"  className='login2 text-black'>{userdata.length ? userdata[0].Name:"Login"}</Link>
            <Link to = "/Signup"  className='signup'>{userdata.length ? userdata[0].Email:"Signup"} </Link> 

</div>
              
            
            </li>
            </ul>
             </div>
  <div> 


<ul className='carts'>
<li className='cart'>
   <Link to="/Profile" className='link1'><CgProfile /></Link>
   
</li>
<li className='cart'>
   <Link to="/wishlist" className='link1'><FaRegHeart /></Link>
</li>
<li className='cart'>
   
   <button className='link1'   
   onClick={()=>context.setOpenDrawer(true)}  
   
   ><FaCartArrowDown /></button>
</li>


<li className='cart'>
   
   <button className='link1'   
  
   
   >
    
   <Link to="/History" className='link1'><FaHistory /></Link>
   </button>
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