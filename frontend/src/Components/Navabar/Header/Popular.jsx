import React from 'react'
import './Popular.css'
import PopularSlider from './PopularSlider'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';








function Popular() {
    
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='all bg-black'>


    <div className='Pop'>

    <div >
        <h3>Popular Products</h3>
        <h7 className='desc Mobie-Text-Responsive '>Dont miss the Opportunity until March 2026</h7>
    </div>
    

    
     <div className="right-sec">
         <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
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
    <PopularSlider items={5}/>
    </div>
  )
}

export default Popular