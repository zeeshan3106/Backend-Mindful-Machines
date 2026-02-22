import React from 'react'
import './Benefits.css'
import {Link} from 'react-router-dom'


import { FaGift } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";






function Benefits() {
  return (
    <div className='Benefits'>



    <div className='beni  '>
       
        <div className='b-1'>
             <Link>
            <div className='ben-logo'><LiaShippingFastSolid /></div>
        <div className='top'>Fast Delivery</div>
        <div className='bottom'>Free on orders $100+</div>

        </Link>
        </div>
       

        <div className='b-2'>
  <Link>
<div className='ben-logo'><FaCalendarDays /></div>
         <div className='top'>30-Day Returns</div>
         
         <div className='bottom'>Return within 30 days</div>
         
         </Link>
         </div>
          


         <div className='b-3'>
             <Link>
            <div className='ben-logo'><MdOutlinePayment /></div>

          <div className='top'>Easy Payments</div>
          <div className='bottom'>Multiple payment options</div>

          </Link>
          
          
          </div>


          <div className='b-4'>
             <Link>
            <div className='ben-logo'><FaGift /></div>
           <div className='top'>Gift Offers</div>
            <div className='bottom'>Surprise gifts included</div></Link>


           </div>
          
           

           <div className='b-5'>
              <Link>
            <div className='ben-logo'><BiSupport /></div>
              <div className='top'>24/7 Support</div>
       <div className='bottom'>Always here to help</div> </Link>


              </div>



    </div>
    
    
    
    
    
    
    </div>
  )
}

export default Benefits