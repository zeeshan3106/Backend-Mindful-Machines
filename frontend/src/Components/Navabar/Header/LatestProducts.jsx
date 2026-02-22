import './LatestProducts.css'
import './Popular.css'
import PopularSlider from './PopularSlider'
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





function LatestProducts() {
    const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <div className='all'>

<div className='Latest'>
    <div className='Pop'>

    <div  >
        <h3>Latest Products</h3>
        <p className='desc  Mobie-Text-Responsive '>Explore our lastest collection of 2026</p>
    </div>
    

    
     <div className="right-sec">
         <Box sx={{ width:"100%", maxWidth: 600, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Health" />
        <Tab label="Wellness" />
        <Tab label="Home Devices" />
        <Tab label="AI Drones" />
        <Tab label="Robots" />
        <Tab label="Humaniod Robots" />
        <Tab label="Industrial Robots" />
      </Tabs>
    </Box>








     </div>
    
     
   

    
    
    </div>
<div className='our'>
    
    </div>
</div>



    <LatestSlider items={5}/>







    </div>
  )
}

 

export default LatestProducts