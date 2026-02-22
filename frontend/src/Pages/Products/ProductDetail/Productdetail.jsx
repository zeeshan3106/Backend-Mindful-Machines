import React, { useState } from 'react'
import Product from '../../../Components/Navabar/Header/Header1'
import Benefits from '../../../Components/Navabar/Header/Benefits'
import './ProductDetail.css'
import Productzoom from './Productzoom'


import { FaHeart } from "react-icons/fa";


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import {Link} from 'react-router-dom';
import img1 from '../Components/1.jpg'
import { Button } from '@mui/material'

import { FaCartArrowDown } from "react-icons/fa";


function Productdetail() {

    const [productsize, setproductsize]=useState(0)

    



  return (
    <div>
    
   <section>
    <Product/>
   </section>



<div className='container-d'>


    <div className='Slide'>
         <div className="Product-zoom">
        <Productzoom/>

    </div>

        <div className='Detail'>
  
    </div>
    <div className='Swipe'>
        <Swiper
       
      
        slidesPerView={3}
        spaceBetween={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
       
      >
        
        <SwiperSlide>
          <Link className='Link'>
            <img src={img1}></img></Link></SwiperSlide>
            <SwiperSlide>
          <Link className='Link'>
            <img src={img1}></img></Link></SwiperSlide>
            <SwiperSlide>
          <Link className='Link'>
            <img src={img1}></img></Link></SwiperSlide>
            <SwiperSlide>
          <Link className='Link'>
            <img src={img1}></img></Link></SwiperSlide>
        </Swiper>

   </div>

    



</div >
<div className='container-p'>
<div className='package'>

<div className='title-p'>AI Powered Advance Drone</div>
<div className='company-p'><Link to="/Home">Mindful Machines</Link></div>

<div className='price'>
<span class="stock-badge in-stock">In Stock</span>
    <div className='old' > $2000.00</div>
     <div className="new">$1500.00</div>


</div>
<Stack spacing={1} className='ratings'>
  
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>



<div class="product-description">
    <p>
      This AI Powered Advanced Drone is built for precise, stable, and intelligent flight. 
      It adapts in real time to its environment, maintaining control and balance even when 
      conditions change. Smart navigation and tracking reduce manual effort, allowing you 
      to focus on capturing clean, steady aerial footage. The modern, streamlined build 
      prioritizes durability and performance, making it reliable for both creative and 
      practical use.
    </p>
  </div>

  <div class="product-highlights">
    <h5>Features</h5>

    <ul>
      <li>AI-assisted flight stabilization for smooth control</li>
      <li>Intelligent subject tracking and navigation</li>
      <li>Real-time environmental adjustment for safer flights</li>
      <li>Modern aerodynamic design built for durability</li>
      <li>Consistent, steady aerial performance</li>
    </ul>
  </div>
<div className='price-d'>
  <h5>Available in Stocks:-</h5>
   <h5 className='b'>400 items</h5>
</div>

<div>


    <h5 className='size'>Size:-

   


    </h5>
    <div className='size-p'>
           <Button className={`${productsize=== 0 ? 'Productsize' : ''}`} onClick={()=>setproductsize(0)}><div>S</div> </Button> 
            <Button className={`${productsize=== 1 ? 'Productsize' : ''}`} onClick={()=>setproductsize(1)}><div>M</div> </Button> 
             <Button className={`${productsize===2 ? 'Productsize' : ''}`} onClick={()=>setproductsize(2)}><div>L</div> </Button> 
             <Button className={`${productsize=== 3 ? 'Productsize' : ''}`} onClick={()=>setproductsize(3)}><div>XL</div> </Button> 
       


    </div>

<diV className="cart-button flex  gap-10 !py-9 bg-white">
  <Button className='btn-blue '>Add To Cart</Button>
      
     
<div className='wish-t flex'><Link  className='flex items-center gap-2 justify-start '>
<div className='text-red-500'> <FaHeart /></div>
<div> Add to Wishlist</div>

 
  </Link></div>



</diV>


   
   








</div>




<h5></h5>


   </div>
 
   </div>
   

   </div>








<div className='tab'>
    <div className='p-description'>

   <h5 className='descriptions'> <Link>Description</Link>
</h5>

   <h5 className='review' > <Link>Reviews</Link>



   </h5>
   </div>


<section class="description">

  <h4>AI Powered Advanced Drone – Technical Overview</h4>
  <p>
    This AI Powered Advanced Drone is engineered for controlled, intelligent, and adaptive aerial operation.
    It continuously analyzes environmental and internal flight data to maintain stability, precision,
    and predictable behavior under changing conditions.
  </p>

  <h6>Artificial Intelligence & Flight Intelligence</h6>
  <ul>
    <li>Real-time environmental analysis using onboard sensors</li>
    <li>Automatic adjustment of speed, altitude, and orientation</li>
    <li>Dynamic correction of drift, tilt, and instability</li>
    <li>Reduced pilot workload through AI-assisted decisions</li>
    <li>Improved consistency during complex flight scenarios</li>
  </ul>

  <h6>Flight Stability & Control System</h6>
  <ul>
    <li>Advanced gyroscopic stabilization for smooth hovering</li>
    <li>Balanced response during acceleration and turns</li>
    <li>Precision motor synchronization</li>
    <li>Minimized vibration transfer</li>
    <li>Optimized for controlled, steady flight</li>
  </ul>

  <h6>Navigation & Tracking Capabilities</h6>
  <ul>
    <li>Smart navigation for controlled movement paths</li>
    <li>AI-assisted subject tracking</li>
    <li>Reduced overcorrection during motion</li>
    <li>Stable framing for aerial shots</li>
    <li>Improved reliability in dynamic environments</li>
  </ul>

  <h6>Camera & Aerial Imaging Support</h6>
  <ul>
    <li>Designed for smooth, stable footage</li>
    <li>Reduced shake during hover and forward flight</li>
    <li>Enhanced visual consistency</li>
    <li>Suitable for cinematic and inspection use</li>
    <li>Lower post-processing requirements</li>
  </ul>

  <h6>Structural Design & Build Quality</h6>
  <ul>
    <li>Streamlined aerodynamic frame</li>
    <li>Durable materials for outdoor operation</li>
    <li>Balanced weight distribution</li>
    <li>Compact yet performance-focused design</li>
    <li>Resistant to operational stress</li>
  </ul>

  <h6>Performance & Reliability</h6>
  <ul>
    <li>Consistent performance in varying conditions</li>
    <li>Stable handling over extended use</li>
    <li>Reduced need for constant manual correction</li>
    <li>Predictable and safe operation</li>
    <li>Built for repeated professional use</li>
  </ul>

  <h6>User Experience & Operation</h6>
  <ul>
    <li>Lower learning curve compared to basic drones</li>
    <li>AI assistance supports solo operation</li>
    <li>Focus on output rather than flight mechanics</li>
    <li>Balanced control for manual and assisted flying</li>
    <li>Improved confidence for non-expert users</li>
  </ul>

  <h6>Practical Use Cases</h6>
  <ul>
    <li>Aerial photography and videography</li>
    <li>Content creation</li>
    <li>Property and landscape inspection</li>
    <li>Surveying and monitoring</li>
    <li>Recreational professional-grade flying</li>
  </ul>

  <h6>What This Drone Is — And Is Not</h6>
  <ul>
    <li>✔ Built for stability and intelligent control</li>
    <li>✔ Designed to reduce pilot effort</li>
    <li>✔ Optimized for clean footage</li>
    <li>✘ Not a toy</li>
    <li>✘ Not for stunt or racing use</li>
  </ul>

  <h6>Summary</h6>
  <p>
    This AI Powered Advanced Drone focuses on intelligent stabilization, dependable performance,
    and controlled flight behavior. It is built for users who prioritize precision, reliability,
    and consistent aerial results.
  </p>

</section>



   </div>
   
   













<div>
    <Benefits/>

</div>




</div>


  )
}

export default Productdetail