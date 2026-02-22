import React, { useState } from 'react'
import './Contact.css'

import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'


import toast, { Toaster } from 'react-hot-toast'
import { Box, Typography, TextField, Button, Paper } from '@mui/material'
import axios from 'axios'

function ContactUs() {

  const [state, setstate] = useState({

    Name:"",
    Email:"",
    Company:"",
    Message:""


  })

  const onChange = (e) =>{

    const {name, value}=e.target

    setstate( prev =>({
      ...prev,
      [name]:value

    }))



  }

  const onSubmit= (e)=>{

    e.preventDefault()


    axios.post('http://localhost:8000/api/frontend/contact',state)
    .then(res => {console.log(res.data)
  toast.success("Query Successfully Submitted!")

  setstate({
    Name:"",
    Email:"",
    City:"",
    Message:"",
    Company:""
  })
  
    }
  )
    .catch(err => console.log(err))
 }










console.log(state)

  return (
    <section>
      <Product />

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact Mindful Machines</h1>
        <p>We build intelligent systems. Let’s talk.</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="contact-container">

        {/* LEFT — FORM */}
        <Paper elevation={3} className="contact-card">
          <Typography className="contact-title">
            Get in Touch
          </Typography>

          <Box className="contact-form">
            <TextField label="Full Name" variant="standard"

            name="Name" value={state.Name} onChange={onChange}
            
            
            />
            <TextField label="Email Address" variant="standard" 
            name="Email" value={state.Email} onChange={onChange}
            
            
            />
            <TextField label="Company / Organization" variant="standard"
            
            name="Company" value={state.Company} onChange={onChange}
            />
            <TextField label="Subject" variant="standard"
             name="Message" value={state.Message} onChange={onChange}
          
            />
            <TextField
              label="Your Message"
              variant="standard"
              multiline
              rows={4}
               
            />

            <Button className="contact-btn"

            onClick={onSubmit}
            
            
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
              Send Message
            </Button>
          </Box>
        </Paper>

     
        <Paper elevation={3} className="contact-info-card">
          <Typography className="info-title">Our Office</Typography>

          <Typography className="info-text">
            Mindful Machines<br />
            Melbourne, Australia<br />
            Global AI & Software Solutions
          </Typography>

          <div className="contact-map">
            <iframe
              title="Company Location"
             src="https://www.google.com/maps?q=Melbourne,Australia&z=12&output=embed" 
    loading="lazy"
            />
          </div>
        </Paper>

      </div>

      <Benefits />
    </section>
  )
}

export default ContactUs
