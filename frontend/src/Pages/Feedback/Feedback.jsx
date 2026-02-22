import React, { useState } from 'react'
import './Feedback.css'
import Header from '../../Components/Navabar/Header/Header'
import Benefits from '../../Components/Navabar/Header/Benefits'
import Product from '../../Components/Navabar/Header/Header1'


import toast, { Toaster } from 'react-hot-toast'

import axios from 'axios'

function Feedback() {


  const [state , setstate]=useState({

Name:"",
Email:"",
Message:""


  })

  const onchange=((e) =>{

    const {name , value}=e.target

    setstate(prev =>({

  ...prev,
      [name]:value  
    }))




  })


  const onsubmit =( (e) =>{
     e.preventDefault();

    axios.post('http://localhost:8000/api/frontend/feedback',state)
 
    .then(res => {
      console.log(res.data)

      toast.success("Feedback Successfully Submitted!")
    
    
    }


    


    )
    .catch(err => console.log(err))



  })


console.log(state)

 console.log(state)



  return (
    <div>

        <Product/>


   
    <div className='flex items-center justify-center mt-5 '>
        <div className=' Feed-Card w-[40%] flex  items-center justify-center Feeds-Resposive bg-white rounded-md shadow-md'>
    <div className="feedback-section">
  <h2 className='font-bold'>Send Us Your Feedback!</h2>
  <input type="text" placeholder="Your Name"
  name='Name' value={state.Name} onChange={onchange}
  />
  <input type="email" placeholder="Your Email"
  
  name='Email' value={state.Email} onChange={onchange}
  
  />
  <textarea placeholder="Your Message"
  
  name='Message' value={state.Message} onChange={onchange}
  
  ></textarea>
  <button
  onClick={onsubmit}
  
  >
       <Toaster 
    toastOptions={{

      style:{
        background:"white",
        color:"black",
        borderRadius:"20px",
        fontSize:"14px",
        fontFamily:"Roboto",

      }


    }}
    
    
    
    />
    
    
    Submit Feedback</button>
</div>
</div>
</div>

<Benefits/>
</div>

  )
}

export default Feedback