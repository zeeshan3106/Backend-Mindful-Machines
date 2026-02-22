import React, { useState } from 'react'
import './Search.css'

import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from '@mui/material';
import axios from 'axios';

function Search() {

  const [state, setstate] = useState({
    name:""
  })

  const onchageInput = (e)=>{
    const {name, value}=e.target

    setstate( prev =>({
      ...prev,
      [name]:value
    }))

    axios.get('http://localhost:8000/api/products/SearchItem',
      {
        params:{
          searchId:value
        }
      }
    ).then
    (res => console.log(res.data.data)).catch(err => err)




  }


  console.log(state)


  return (
    <div className='container-s'>
    <div className='Search'>
      <input  type='text' placeholder='Search for products...' 

      name='name' value={state.name}
      onChange={onchageInput}
      
      
      className="Box" />
      
      <div className='flex  Search-icons Search-Resposiveness'>
        
      <button className='Search-icon cursor-pointer '><FaSearch /></button>
       <button className=' cursor-pointer text-[25px] Search-icon'><IoCloseSharp /></button>


          </div>
      
    </div>
</div>
   
       
    
  )
}

export default Search