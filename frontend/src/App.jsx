import React from 'react'
import Header from './Components/Navabar/Header/Header'
import { BrowserRouter, Routes , Route, Link} from 'react-router-dom'


import { createContext } from 'react'

import Signup from './Pages/Signup/Signup'
import Products from './Pages/Products/Products'
import Product from './Components/Navabar/Header/Header1'
import Productdetail from './Pages/Products/ProductDetail/Productdetail'

import Login from './Pages/Login/Login'
import Cart from './Pages/Cart/Cart'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';



import { IoClose } from "react-icons/io5";

import { useState } from 'react'

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
export const MyContext = createContext();


import img1 from './Pages/Products/Components/1.jpg'
import Billing from './Pages/Billing-Information/Billing'
import USerProfile from './Pages/UserProfile/USerProfile'
import Wishlist from './Pages/Wishlist/Wishlist'

import orderhis from './Pages/Order History/Orderhis'
import Orderhis from './Pages/Order History/Orderhis'
import { Table } from '@mui/material'
import Feedback from './Pages/Feedback/Feedback'
import ContactUs from './Pages/ContactUs/contact'
import FAQ from './Pages/FAQ\'s/FAQ'
import Cartput from './Pages/CartPut/Cartput'

import ProductsSearch from './Pages/Products/ProductsSearch'
import ProductItemSearch from './Components/Navabar/Header/ProductItemSearch'



const App = () => {
const apiurl = import.meta.env.VITE_API_URL
  const [islogin, setislogin]=useState(false)


   const [selectedCategory, setSelectedCategory] = useState([]); 



  const [openDrawer, setOpenDrawer] =useState(false);

   const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };
  return (

  <MyContext.Provider value={{ setOpenDrawer, selectedCategory, setSelectedCategory }}>



    <>

<BrowserRouter>

       
<Routes>


 
 <Route path={'/'} exact={true} element={<Header/>}/>
 <Route path={'/Product'} exact={true} element={<Products/>}/>
 <Route path={'/Detail'} exact={true} element={<Productdetail/>}/>
 


   <Route path={'/Login'} exact={true} element={<Login/>}/>
   <Route path={'/Cart'} exact={true} element={<Cart/>}/>

    <Route path={'/Billing'} exact={true} element={<Billing/>}/>

    <Route path={'/Profile'} exact={true} element={<USerProfile/>}/>
  <Route path={'/Wishlist'} exact={true} element={<Wishlist/>}/>
  <Route path={'/History'} exact={true} element={<Orderhis/>}/>

  <Route path={'/Table'} exact={true} element={<Table/>}/>
  <Route path={'/Feedback'} exact={true} element={<Feedback/>}/>
    <Route path={'/Signup'} exact={true} element={<Signup/>}/>
    <Route path={'/Contact'} exact={true} element={<ContactUs/>}/>
       <Route path={'/Faq'} exact={true} element={<FAQ/>}/>
<Route path={'/Cartput'} exact={true} element={<Cartput/>}/>

       <Route path={'/Cartput'} exact={true} element={<Cartput/>}/>
        <Route path={'/Search'} exact={true} element={<ProductsSearch/>}/>

              <Route path={'/SearchProduct'} exact={true} element={<ProductItemSearch/>}/>
         
      </Routes>


       <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor='right'
              
              className='cartPanel w-[500px]'>

                <div className='flex items-center justify-between py-3 px-4 gap-3 text-center border pb-1
                
                
                '>

                  <h5 className='cartbar'>Shopping Cart (1)</h5>
                  <IoClose className='text-[20px] cursor-pointer font-bold' onClick={toggleDrawer(false)}/>
                </div>




                <div className='scrol w-full max-h-200px overflow-y-scroll overflow-x-hidden p-10'>

                  <div className='cartItem w-full flex justify-start gap-4 border '>

                    <div className='img w-[25%]'>
                      <img src={img1}/>
 </div>
                      <div className='information w-[75%] b-2 flex flex-col !justify-start !items-start'><Link>Advanced AI Powered Robot</Link>
                       <div className='flex gap-5'>
                        <span>Qty:<span>2</span> </span>
                        <span className='text-green-800 font-bold'>Price:<span>2000$</span></span>

                 <div>
                     



                        </div>
                        




                       </div>
                            <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
                      </div>
                     








                     
                   







                  </div>
 <div className='cartItem w-full flex justify-start gap-4 border'>

                    <div className='img w-[25%]'>
                      <img src={img1}/>
 </div>
                      <div className='information w-[75%] b-2 flex flex-col !justify-start !items-start'><Link>Advanced AI Powered Robot</Link>
                       <div className='flex gap-5'>
                        <span>Qty:<span>2</span> </span>
                        <span className='text-green-800 font-bold'>Price:<span>2000$</span></span>

                 <div> </div> </div>
                            <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
                      </div>
            
                  </div>





                  <div className='cartItem w-full flex justify-start gap-4 border'>

                    <div className='img w-[25%]'>
                      <img src={img1}/>
 </div>
                      <div className='information w-[75%] b-2 flex flex-col !justify-start !items-start'><Link>Advanced AI Powered Robot</Link>
                       <div className='flex gap-5'>
                        <span>Qty:<span>2</span> </span>
                        <span className='text-green-800 font-bold'>Price:<span>2000$</span></span>

                 <div> </div> </div>
                            <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
                      </div>
            
                  </div>



<div className='cartItem w-full flex justify-start gap-4 border'>

                    <div className='img w-[25%]'>
                      <img src={img1}/>
 </div>
                      <div className='information w-[75%] b-2 flex flex-col !justify-start !items-start'><Link>Advanced AI Powered Robot</Link>
                       <div className='flex gap-5'>
                        <span>Qty:<span>2</span> </span>
                        <span className='text-green-800 font-bold'>Price:<span>2000$</span></span>

                 <div> </div> </div>
                            <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
                      </div>
            
                  </div>


                  <div className='cartItem w-full flex justify-start gap-4 border'>

                    <div className='img w-[25%]'>
                      <img src={img1}/>
 </div>
                      <div className='information w-[75%] b-2 flex flex-col !justify-start !items-start'><Link>Advanced AI Powered Robot</Link>
                       <div className='flex gap-5'>
                        <span>Qty:<span>2</span> </span>
                        <span className='text-green-800 font-bold'>Price:<span>2000$</span></span>

                 <div> </div> </div>
                            <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
                      </div>
            
                  </div>






                  <div className='cartItem w-full flex justify-start gap-4 border'>

                    <div className='img w-[25%]'>
                      <img src={img1}/>
 </div>
                      <div className='information w-[75%] b-2 flex flex-col !justify-start !items-start'><Link>Advanced AI Powered Robot</Link>
                       <div className='flex gap-5'>
                        <span>Qty:<span>2</span> </span>
                        <span className='text-green-800 font-bold'>Price:<span>2000$</span></span>

                 <div> </div> </div>
                            <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
                      </div>
            
                  </div>







                  <div className='cartItem w-full flex justify-start gap-4 border'>

                    <div className='img w-[25%]'>
                      <img src={img1}/>
 </div>
                      <div className='information w-[75%] b-2 flex flex-col !justify-start !items-start'><Link>Advanced AI Powered Robot</Link>
                       <div className='flex gap-5'>
                        <span>Qty:<span>2</span> </span>
                        <span className='text-green-800 font-bold'>Price:<span>2000$</span></span>

                 <div> </div> </div>
                            <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
                      </div>
            
                  </div>








                  <div className='cartItem w-full flex justify-start gap-4 border'>

                    <div className='img w-[25%]'>
                      <img src={img1}/>
 </div>
                      <div className='information w-[75%] b-2 flex flex-col !justify-start !items-start'><Link>Advanced AI Powered Robot</Link>
                       <div className='flex gap-5'>
                        <span>Qty:<span>2</span> </span>
                        <span className='text-green-800 font-bold'>Price:<span>2000$</span></span>

                 <div> </div> </div>
                            <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
                      </div>
            
                  </div>






                  <div className='cartItem w-full flex justify-start gap-4 border'>

                    <div className='img w-[25%]'>
                      <img src={img1}/>
 </div>
                      <div className='information w-[75%] b-2 flex flex-col !justify-start !items-start'><Link>Advanced AI Powered Robot</Link>
                       <div className='flex gap-5'>
                        <span>Qty:<span>2</span> </span>
                        <span className='text-green-800 font-bold'>Price:<span>2000$</span></span>

                 <div> </div> </div>
                            <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
                      </div>
            
                  </div>







                  <div className='cartItem w-full flex justify-start gap-4 border'>

                    <div className='img w-[25%]'>
                      <img src={img1}/>
 </div>
                      <div className='information w-[75%] b-2 flex flex-col !justify-start !items-start'><Link>Advanced AI Powered Robot</Link>
                       <div className='flex gap-5'>
                        <span>Qty:<span>2</span> </span>
                        <span className='text-green-800 font-bold'>Price:<span>2000$</span></span>

                 <div> </div> </div>
                            <div>   <Stack spacing={1}>
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></div>
                      </div>
            
                  </div>

<div className='w-full bg-white '>

                  <div className='Cart-Bar-Button flex w-full'>

<Link to="/Cart"


onClick={toggleDrawer(false)}
>  

View Full Cart</Link>


                  </div>


</div>








                  
                </div>



       
      </Drawer>

  </BrowserRouter>


  
             
</>
</MyContext.Provider>

  )
}

export default App