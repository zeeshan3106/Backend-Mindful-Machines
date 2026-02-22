import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

function Cartput() {


    const [state, setstate] =useState({

      title:""
      ,company:""
      ,price:""
      ,oldPrice:""
      ,discount:""
      ,color:""
      ,weight:""
      ,category:""
 })

 const onChangeP =(e)=>{
    const { name, value}=e.target

    setstate(prev =>({

        ...prev,
        [name]:value



    }))



 }
 const onSubmitCart = (e)=>{

    e.preventDefault();


    axios.post('http://localhost:8000/api/cart/cart',state)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))




 }



console.log(state)


  return (
    <div className='flex justify-center'>
        <div className='flex flex-col w-[50%] justify-center items-center mt-5 bg-white'>
            <TextField 

            value={state.title} name='title' onChange={onChangeP}
            
            
            label="Title"></TextField>
             <TextField
             value={state.company} name='company' onChange={onChangeP}
              label
             
             
             
             ="Company"></TextField>
              <TextField 
              value={state.price} name='price' onChange={onChangeP}
              
              
              label="Price"></TextField>
               <TextField
               value={state.oldPrice} name='oldPrice' onChange={onChangeP} 
               label="OldPrice"></TextField>
                <TextField 
                value={state.discount} name='discount' onChange={onChangeP}
                label="Discount"></TextField>
                 <TextField 
                 value={state.color} name='color' onChange={onChangeP}
                 label="Color"></TextField>
                  <TextField
                  value={state.weight} name='weight' onChange={onChangeP}
                   label="Weight"></TextField>
                     <TextField 
                     value={state.category} name='category' onChange={onChangeP}
                     label="Category"></TextField>

                     <Button 
                     onClick={onSubmitCart}
                     className='btn-blue mt-3 w-[100%] mb-5'>Submit</Button>
        </div>






    </div>
  )
}

export default Cartput