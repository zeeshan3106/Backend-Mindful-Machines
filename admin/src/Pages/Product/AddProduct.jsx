import React, { useEffect, useState } from 'react'
import './AddProduct.css'
import {Form, Link} from 'react-router-dom'
import { BsCartCheck } from "react-icons/bs";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaDonate } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiCoveralls } from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import { RiAccountCircleFill } from "react-icons/ri";
import { PiShootingStarLight } from "react-icons/pi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { TbBasketDown } from "react-icons/tb";
import { MdRemoveRedEye } from "react-icons/md";
import Button from '@mui/material/Button';

import { MdOutlineCloudDone } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
import axios from 'axios';


export function useFieldState() {
  const [fields, setfield] = useState({
    title: "",
    description: "",
    category: "",
    subcategory: "",
    price: "",
    oldPrice: "",
    isFeatured: "",
    productStock: "",
    company: "",
    discount: "",
    color: "",
    weight: "",
    size: "",
  });

  return [fields, setfield];
}



function AddProduct() {


  const [field, setfield] = useState({

    title:"",
    description:"",
    category:"",
    subcategory:"",
    price:"",
    oldPrice:"",
    isFeatured:"",
    productStock:"",
    company:"",
    discount:"",
    color:"",
    weight:"",
    size:"",
  




  })

  const OnchageInput = (e) =>{

    const {name,value}= e.target

    setfield(prev =>({
 
        ...prev,
        [name]: value

      


    }))
  }

const onSubmitData = (e) =>{

  axios.post('http://localhost:8000/api/users/product',field)

  .then( res => console.log(res.data))

  .catch( err => console.log(err))

}

 /*useEffect(() => {
    // ✅ Everything using `res` is INSIDE this arrow function
    axios.get('http://localhost:8000/api/users/getall')
    .then(res => {
      console.log("RES.DATA:", res.data);
      console.log("TYPE OF PRODUCTS ARRAY:", Array.isArray(res.data.data));

      if ( res.data.data.length > 0) {
        setfield(res.data.data[0]); // populate form with first product
      }
    })
.catch(err => err)



}, [])
*/


const onEdit =(() => {


  axios.get(`http://localhost:8000/api/users/getall`)
    .then(res => {
      console.log("RES.DATA:", res.data);
      console.log("TYPE OF PRODUCTS ARRAY:", Array.isArray(res.data.data));

      if ( res.data.data.length > 0) {
        setfield(res.data.data[0]); // populate form with first product
      }
    })
.catch(err => err)


})

const onUpdateData = (e) =>{

  axios.put(`http://localhost:8000/api/users/product/${id}`,field)

  .then( res => console.log(res.data))

  .catch( err => console.log(err))

}

 
console.log(field)








  return (
    <section>









        <div id='MainHeader'>

        <div className='contianer gap-2'>
            <div className='container-box  flex w-[100%] gap-1 '>
               
            <div className='left-col bg-white shadow-md rounded-md w-[18%] h-[604px]'>



                <div> 
           
                </div>
                <div className='Company-title font-bold p-5 text-[30px] flex gap-15'>
                    <div>Machines</div>

               
                </div>

                <div>

                   
                   <div className='Dashboard font-bold p-5 text-[#414040]  text-[17px]'>Dashboard</div>


                      <div className=''>
               <Link><div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px] pl-5 text-[#535353]'>
                
                
                <div><BsCartCheck /></div>
               <div> Ecomerence</div>
                </div> 
                
                
                </Link> 
               <Link>  <div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px] pl-5 text-[#535353]' >
                
                <div><BsRocketTakeoff /></div>
               <div> Projects</div>
                
                
                </div>
                 </Link>  
                 <Link>   
                 <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                    
                    <div><FaDonate /></div>
                    <div>Marketing</div>
                    
                    
                    </div>
                </Link> 
                 <Link>     <div className=' Dashbaord-Items1 flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                  <div><TbBrandGoogleAnalytics /></div>
                   <div> Analytics</div>
                    
                    
                    </div>
                 </Link>    
                
                  
                  
                   <div className='Concepts font-bold p-5 text-[#414040]  text-[17px]'>Concepts</div>
                 <div>
                      <Link>
            <div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px] pl-5 text-[#535353]'>
                
                
                <div><PiShootingStarLight /></div>
               <div> AI</div>
            
               <div className='point1'><FaAngleDown /></div>
             
                </div> 
                
                
                </Link> 
               <Link>  <div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px] pl-5 text-[#535353]' >
                
                <div><AiOutlineFundProjectionScreen /></div>
               <div>Projects</div>

                 <div>
               <div className='point2'><FaAngleDown /></div>
               </div>
               
               
                
                
                </div>
                 </Link>  
                 <Link>   
                 <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                    
                    <div><BsFillPeopleFill /></div>
                    <div>Customers</div>
                     <div className='point3'><FaAngleDown /></div>
             
                    
                    
                    </div>
                </Link> 
                 <Link to="/List" >     <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                  <div><AiFillProduct /></div>
                   <div> Products</div>
                    <div className='point4'><FaAngleDown /></div>
             
                    
                    
                    </div>
                 </Link>   
                   <Link>     <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                  <div><ImCart /></div>
                   <div> Orders</div>
                    <div className='point5'><FaAngleDown /></div>
             
                    
                    
                    </div>
                 </Link> 
                   <Link>     <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                  <div><RiAccountCircleFill /></div>
                   <div>Account</div>
                    <div className='point6'><FaAngleDown /></div>
             
                    
                    
                    </div>
                 </Link>    



                 </div>


            </div>


</div>





            </div>
         



            <div className='flex flex-col AddProduct-Resposniveness'>
            
<div>

            <div className='right-col bg-white shadow-md rounded-md !w-[full] h-[70px] p-5 TableResposiveness'>

                <div className='bg-white w-[full] TableResposiveness'>

       <div className='flex gap-218 items-center Flex-Table-Resposiveness'>     
<div>
<div className='flex left-icons items-center gap-2'>
                <div><Link className=''  onClick={onEdit}>  <div className=' Menu-icon text-[20px]'><BsFillMenuButtonWideFill c
                
                
                /></div></Link></div>
 <Link><div className='Search-icon text-[25px] Menu-icon'><CiSearch /></div></Link>

</div>
</div>
<div className='flex text-[20px] gap-4 '>

       <Link className='Menu-icon'><div><GrLanguage /></div></Link>
      <Link> <div className='text-[22px] Menu-icon'><IoNotificationsOutline /></div></Link>
      <Link> <div className='text-[22px] Menu-icon'><IoSettingsOutline /></div></Link>
      <Link> <div className='text-[22px] Menu-icon' ><MdAccountCircle /></div></Link>


    </div> 




</div>
   </div>

   <div className='p-10 pl-0 pt-10 w-[100%] mb-0 pb-0 ' >

    <div className='bg-white  rounded-md shadow-md w-[80%] p-5 text-[20px] font-bold Products'>Add Products</div>
   </div>



   

    <div className='bg-white rounded-md shadow-md pt-5 mt-5 w-[78%] p-5   text-[23px]  Products'>

      <h4 className='font-bold'>Basic Information</h4>
      <div className=' Products-Labels La'>Product Title</div>
      <div>
        <input type='text' className='textbox textbox2' placeholder='Enter Title...



        
        
        
        ' name='title'  value={field.title} onChange={OnchageInput} />


        <div className='Products-Labels'>Description</div>
<div className=''>
  <textarea type='text-area' 

  name='description'  value={field.description} onChange={OnchageInput}
  
  
  className='textbox textarea'
  
  
  placeholder='Enter Description...'/>
</div>
<div className='flex w-[100%] gap-5 Textboxes-Responsivenesss'>
 <div className='flex flex-col gap-0 w-[33%] Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Category</div>
   <input type='' className='textbox textbox2' placeholder='Enter Category...'
     name='category'  value={field.category} onChange={OnchageInput}
   />
   
   </div>
<div className='flex flex-col gap-0 w-[33%] Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Sub Category</div>
   <input type='text-area' className='textbox textbox2'placeholder='Enter Sub-Category...'
   name='subcategory'  value={field.subcategory} onChange={OnchageInput}  />
   
   </div>
<div className='flex flex-col gap-0 w-[33%] Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Price</div>
   <input type='text-area' className='textbox textbox2'placeholder='Enter Price eg.($50) '
     name='price'  value={field.price} onChange={OnchageInput} />
   
   </div>
   
</div>


<div className='flex w-[100%] gap-5 Textboxes-Responsivenesss'>
 <div className='flex flex-col gap-0 w-[33%] Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Old Price</div>
   <input type='text-area' className='textbox textbox2' placeholder='Old Price'
    name='oldPrice'  value={field.oldPrice} onChange={OnchageInput}  />
   
   </div>
<div className='flex flex-col gap-0 w-[33%] Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Is Featured</div>
   <input type='text-area' className='textbox textbox2'placeholder='Features..'
    name='isFeatured'  value={field.isFeatured} onChange={OnchageInput}  />
   
   </div>
<div className='flex flex-col gap-0 w-[33%]Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Prodcut Stock</div>
   <input type='text-area' className='textbox textbox2'placeholder='Enter Stock Items...'
  name='productStock'  value={field.productStock} onChange={OnchageInput}  />
   
   </div>
   
</div>
<div className='flex w-[100%] gap-5 Textboxes-Responsivenesss'>
 <div className='flex flex-col gap-0 w-[33%] Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Brand</div>
   <input type='text-area' className='textbox textbox2' placeholder='Enter Company Name...'
     name='company'  value={field.company} onChange={OnchageInput}  />
   
   </div>
<div className='flex flex-col gap-0 w-[33%] Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Discount</div>
   <input type='text-area' className='textbox textbox2' placeholder='Enter Discount Price...'
    name='discount'  value={field.discount} onChange={OnchageInput}  />
   
   </div>
<div className='flex flex-col gap-0 w-[33%] Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Color</div>
   <input type='text-area' className='textbox textbox2' placeholder='Enter Color...'
    name='color'  value={field.color} onChange={OnchageInput}  />
   
   </div>
   
</div>
<div className='flex w-[100%] gap-5 Textboxes-Responsivenesss'>
 <div className='flex flex-col gap-0 w-[33%] Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Weight</div>
   <input type='text-area' className='textbox textbox2'placeholder='Enter Product Weight...'
    name='weight'  value={field.weight} onChange={OnchageInput}  />
   
   </div>
<div className='flex flex-col gap-0 w-[33%] Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Size</div>
   <input type='text-area' className='textbox textbox2'placeholder='Mention Product Size...'
  name='size'  value={field.size} onChange={OnchageInput} />
   
   </div>
<div className='flex flex-col gap-0 w-[33%] pb-10 Textboxes-Responsivenesss-Textbox'>
  <div className='Products-Labels '>Location</div>
   <input type='text-area' className='textbox textbox2 ' placeholder='Select Location...'
  name='location'  value={field.location} onChange={OnchageInput}  />
   
   </div>
   
   
</div>





      </div>





    </div>
         
<div className='pt-10  '>
  <div className='bg-white p-5 pt-5 pl-10   w-[78%] shadow-md rounded-md  Publish  '>
  <h1 className='text-[22px] font-bold '>Media And Published</h1>

  <div className='mt-10 Image w-[150px] h-[150px] rounded-md flex items-center justify-center cursor-pointer font-bold'>

    <div className='text-gray-400 flex flex-col items-center'>
      <div className='text-gray-400 text-[60px] items-center'><BiImageAdd /></div>
      Upload Image
      
      
      </div>

  </div>


 <div className=' Form-Button flex justify-center items-center border mt-10 bg-blue-700  text-white'>

      <Button 

      onClick={onSubmitData}
      
      
      sx={{

        color:'white',
        fontWeight:'bold',
        height:'45px'


      }} >
        <div className='flex items-center justify-center gap-2'>
         
        <div className='text-[22px] items-center justify-center'><MdOutlineCloudDone /></div>
        <div>Publish And View</div>
         
        </div>
        
        </Button>


        
      
      
      </div>


      
</div>

   


</div>
    



</div>




     </div>
     </div>





</div>
     </div>


</div>

    </section>
  )
}

export default AddProduct