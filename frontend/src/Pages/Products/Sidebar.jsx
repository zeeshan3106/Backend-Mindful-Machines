import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { TbFilterCheck } from "react-icons/tb";
import axios from 'axios';


function Sidebar() {

  const [selected ,setselected]=useState([])



  const [filter,isfllter]=useState({

    category:[],
 availability:[],
 minprice:"" ,
 maxprice:"" ,
  ratings:"", 
  page:1, 
  limit:5,
  price:""

})

const [categoryitems , setcategoryitems]=useState([])


useEffect( (e)=>{

  axios.get("http://localhost:8000/api/products/getCategory")
  .then(res => 

    setcategoryitems(res.data.data)


  ).catch(err => err)


})




useEffect(()=>{
  if (selected.length === 0) return; // optional: prevent empty request

  axios.get('http://localhost:8000/api/products/getbycategory', {
    params: {
      categoryid: selected
    }
  })
  .then(res => console.log(res.data))
  .catch(err => err)




}


)



const[price,setprice]=useState([0,100000])

  const [state,setstate]=useState([])
     const [value, setValue] = React.useState([20, 37]);

  const handleChange = (e) => {
    const v = e.target.name
     setselected(v)
     const local = localStorage.setItem("item",v)
};







const [filtering , setfilterring]=useState([])


const [page , setpage]=useState(1)

const [totalpages, settotalpages]=useState([])


const [ischechbox , setcheckbox]=useState([])
const [isOpenCAtegoryFilter  , setisOpenCategoryFilter] =useState(true)


const onchange = (e) =>{

  setcheckbox()

}
console.log(selected)

  return (
    <aside className='Sidebar'>
     
      <h4  className='filters'>
        
        <div><button onClick={() => setisOpenCategoryFilter(!isOpenCAtegoryFilter)}>

        <div>  <div className='flex gap-3 items-center'><div className="flex w-[70%] items-center gap-2"> <div > <TbFilterCheck /></div> <div>Filters</div></div><div><FaAngleDown /></div></div> 
      </div> 
        </button>

        
</div>
      </h4>

      <Collapse isOpened={isOpenCAtegoryFilter} Style={{ overflow: 'hidden' }}>



      <h5 className='cate'>CATEGORIES</h5>

      
    <div className="category">


      
        <div className="scrol">




          


          <FormGroup className='text-f'>

            
{
      
      categoryitems.map((product,index)=>(

            <FormControlLabel control={<Checkbox />} name={product.category} onChange={handleChange}  
               label={product.category}    />
   
            
))}
           
          </FormGroup>




     







        </div>
      



  <div>
             <h5>Availability</h5>
                <FormGroup className='text-f'>
            <FormControlLabel control={<Checkbox />} label="Available"  name="Available" onChange={handleChange} />
            <FormControlLabel control={<Checkbox />} label="Out of Stock"name="Out of Stock" onChange={handleChange} 
            
            />
 
          
           
          </FormGroup>
</div>


        <h5>Filter By Price</h5>
        


            <div> <Box sx={{ width: 300 }}>
      <Slider







        getAriaLabel={() => 'Temperature range'}
        value={price}
        
        onChange={setprice}
        min={100}
        max={100000}
        step={5}

        valueLabelDisplay="auto"


       
      />
    </Box></div>

<div className='price-f'>




        <div>From:-{price[0]}</div>
        <div>To:-{price[1]}</div>
        </div>
     
     
      </div>

      <h5 className='price-f'>
        Ratings
      </h5>

      <div className="">
        <Link to= "" >
         <Stack spacing={1}>

      <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly
    
      
      />
    </Stack></Link>

      </div>
      
      
      <div className="">
        <Link>
         <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
    </Stack></Link>
      </div>
      
      <div className="">
       <Link> <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
    </Stack></Link> 
      </div>
      
      <div className="">
       <Link>  <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly />
    </Stack></Link>
      </div>
      
      <div className="">
         <Link><Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={1} precision={0.5} readOnly />
    </Stack></Link>
      </div>
      



      
    </Collapse>

    </aside>
  );
}

export default Sidebar;
