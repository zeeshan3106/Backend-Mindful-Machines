import React, { useContext, useState } from 'react'
import './ProductItem.css'
import img1 from './Images/Latest Products/1.jpg'
import {Link} from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { MdOutlineZoomInMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useEffect } from 'react'

import './style.css'
import axios from 'axios';
import { Button } from '@mui/material';

import { MyContext } from '../../../App';

function ProductItemSearch() {

  
 const [selected, setSelected] = useState(() => {
  return localStorage.getItem("item") || ""; // fallback empty string
});

  const [pro , setpro] = useState([])
  
  const [count , setcount] = useState([0])
      useEffect(() => {
        
        const token = localStorage.getItem("token")
        const fileritem = localStorage.getItem("item")
        const searchitem = localStorage.getItem("search")

        axios.get('http://localhost:8000/api/products/SearchItem',

          {
            params:{
              searchId:searchitem
            }
          }



          



        )
        .then( res =>
           setpro(res.data.data)  ,
         
                
        )
        .catch(err => err)   
  
     }, [])


     

  return (


    
<div className='w-[] Product-Apple'>

    {pro.map((product) => (





    <div className='Pitem flex'>


 




        <div className='imgwrap'>
            <img src={img1} className='Img'/>
            <span className='discount'>{product.discount}</span>
            <span className='zoom'><Link><MdOutlineZoomInMap /></Link></span>
            <span className='heart'><Link> <FaRegHeart /> </Link></span>


              <h6 className='info1'>{product.company}</h6>
            
              
                 <Link to= "/Detail"> <h7 className='info'>{product.title} </h7></Link>

                  <Stack spacing={1}>
      
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />

    </Stack>
       <div className='price items-center'>
      <span className='old'>${product.oldPrice}</span>
      
       <span className='new'>${product.price}</span>
      <span>{product.productStock}available</span>
      </div>
      <div className='flex items-center pb-4 mb-10 ButtonCard'>
      <div className='w-[100%]'>{product.category}</div>
          <div className='w-[100%]  flex justify-end'>
            <div className=''>
              <Link to="/cart">
            <Button className='btn-blue '>
              Add To Cart</Button></Link>
            </div>


            
            
            </div>

            
  </div>
      


              
     </div>
      



    </div>

 ))}


</div>




  )
}

export default ProductItemSearch