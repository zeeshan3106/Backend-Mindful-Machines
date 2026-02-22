  import React from 'react'
  import './Navbar.css'
import { Link } from 'react-router-dom'
  import { FaListCheck } from "react-icons/fa6";
  import { MdKeyboardArrowDown } from "react-icons/md";
  import { FaGlobe } from "react-icons/fa6";

 
  function Navbar(){
    

    return(
      <div>

<div className='container2'>

  
        <div className='col101 border'>
            <button className='btn '>
          <div className='flex items-center'>
            <div>
              <FaListCheck />
              </div>
           <div className='Select-Header-Resposnive'>  &nbsp;  Select Item By Category &nbsp;</div>
             
             
           <div className='Select-Header-Resposnive'>  <MdKeyboardArrowDown /></div>
             </div>
             </button>

  </div>

  
  <div className='col102 w-[50%]'>
       
    <li className='links'>
    <Link to ='/Home'  className="Home1">Home
    
    
    
    </Link> 
 <div className="nav1">

      <ul className='submenu'>
        <li className='list-btn'>
          <Link to ="/Product" >Home
          
</Link>
        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Popular Products</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Featured Products</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Blogs</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Partners</Link>

        </li>

      </ul>




    </div>


   


    
    
     </li>


   <li className='links'>
     <Link to ='/Product' className="Products">AI Products
    
   </Link>   
   
   
   
   <div className="nav1">

      <ul className='submenu'>
        
          <li className='list-btn'>
          <Link to ="/Product" >Health and Wellness</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Home Devices</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >AI Powered Drones</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >AI Robotics</Link>

        </li>

      </ul>




    </div>


   
   
   
   
   </li>
    <li className='links Select-Header-Resposnive '> <Link to ='/Product'  className="Home">New Arrivals</Link>  
    
    <div className="nav1">

      <ul className='submenu'>
        
          <li className='list-btn'>
          <Link to ="/Product" >Latest Gadgets</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Software Tools</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >AI Models</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Accessories</Link>

        </li>

      </ul>




    </div>


    
    
    
    
    
    
    
    
    
    </li>
   <li className='links'>  <Link to ='Product'  className="Home">Offers</Link>  
   
   
   
   
      <div className="nav1">

      <ul className='submenu'>
        
          <li className='list-btn'>
          <Link to ="/Product" >Home Essentials Sale</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Wellness & Fitness Offers</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Drone Specials</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Robotics Discounts</Link>

        </li>

      </ul>




    </div>


   
   
   
   
   
   
   
   </li>
   <li className='links'>  <Link to ='Product' className="Home">Contact</Link> 
   
      <div className="nav1">

      <ul className='submenu'>
        
          <li className='list-btn'>
          <Link to ="/Product" >Customer Support</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Sales Inquiry</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Feedback</Link>

        </li>
          <li className='list-btn'>
          <Link to ="/Product" >Locations</Link>

        </li>

      </ul>




    </div>


   
   
   
   
   
   
    </li>
     
   

  </div>



  <div className='col103 flex !w-[20%] justify-center !items-center'>
    <Link className='flex !items-center gap-2 !w-full'>
    <div><FaGlobe />  
    </div>
    
   <div className='Select-Header-Resposnive'>Get Free Delievery</div>
    
    
    </Link>

  </div>
 
</div>

 </div>   
    )
}
export default Navbar


