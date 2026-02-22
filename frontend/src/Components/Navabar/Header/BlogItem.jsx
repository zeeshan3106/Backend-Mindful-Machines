import React from 'react'
import './ProductItem.css'
import img1 from './Images/Latest Products/1.jpg'
import {Link} from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { MdOutlineZoomInMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import './style.css'
import './BlogItem.css'

import img201 from './Images/Blogs/1.jpg'
import img202 from './Images/Blogs/2.jpg'
import img301 from './Images/Blogs/3.jpg'



import { FaCalendarCheck } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";









function BlogItem() {
  return (
    <div className='Blog'>
   <div className='Pitem shadow-md rounded-md'>

        <div className='imgwrap'>
            <img src={img201} className='Img shadow-md rounded-md'/>
            <div className='date shadow-md rounded-md'>
                <p className='SVG'><FaCalendarCheck /></p>
                <p>9/12/2025</p>
                
                </div>
           

              <h6 className='info1'> <Link>New Advancements in Medical Tools using AI</Link></h6>


                 <h7 className='info'>Explore how AI is revolutionizing medical tools, enabling faster diagnoses, smarter devices, and improved patient care </h7>

                  <Stack spacing={1}>
      
   

       <div className='price'>
      <span className='learn'><Link>Learn More <FaAngleRight /></Link></span>
      
      </div>
    </Stack>


              
     </div>
      



    </div>
    </div>
  )
}

export default BlogItem