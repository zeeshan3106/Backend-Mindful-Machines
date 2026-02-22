import './Blog.css'
import './Popular.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import './PopularSlider.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './CateSlider.css'
import ProductItem from './ProductItem';
import LatestSlider from './LatestSlider';
import FeaturedsLider from './FeaturedsLider';
import BlogSlider from './BlogSlider';


function Blog() {


      const [value, setValue] = React.useState(0);
            
              const handleChange = (event, newValue) => {
                setValue(newValue);
              };





  return (
    <div className='all'>
        <div className='Blog1'>


    <div className='Pop shadow-md rounded-md'>

    <div className='pop1 shadow-md rounded-md'>
        <h3 className='Blog-Title'>Blogs</h3>
        <p className='desc'>
            <div className='Blog-Title'>Read about our advanced AI Products</div></p>
    </div>
    
</div>
    
     

    
    
    </div>
<div className='our'>
    
    </div>

    <BlogSlider items={5}/>
   










    </div>
  )
}

export default Blog