import React, { useEffect, useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
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
import axios from 'axios';

import LineBarAreaComposedChart from './Barchart';
import PieChartWithCustomizedLabel from './Charts/PieChart';
import LineChart from './Charts/Linechart';
import LineChartVisual from './Charts/Linechart';
import CandlestickChartVisual from './Charts/CAndleStickChat';
import WorldMap from './Charts/Mapchart';
import SimpleAreaChart from './Charts/AreaChart';



function Header() {




  const [get,setget]=useState({})


  useEffect(() => {

    axios.get('http://localhost:8000/api/admin/dash').then(res =>{
      console.log(res.data)
      setget(res.data)
    }).catch(err => err)
   
    
  }, [])


  
  







  return (
    <section>

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
               <Link  to="/List"><div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px] pl-5 text-[#535353]'>
                
                
                <div><BsCartCheck /></div>
               <div>Ecomerence</div>
                </div> 
                
                
                </Link> 
               <Link  to="/orders"> <div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px] pl-5 text-[#535353]' >
                
                <div><BsRocketTakeoff /></div>
               <div>Orders</div>
                
                
                </div>
                 </Link>  
                 <Link  to='/users'>   
                 <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                    
                    <div><FaDonate /></div>
                    <div> Users</div>
                    
                    
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
               <Link  to="/Feedback" >  <div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px]  text-[#535353]' >
                
                <div className='pl-4 '><AiOutlineFundProjectionScreen /></div>
               <div>Feedbacks</div>

                 <div>
               <div className=' pl-18 '><FaAngleDown /></div>
               </div>
               
               
                
                
                </div>
                 </Link>  
                 <Link Link to="/contact">   
                 <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                    
                    <div><BsFillPeopleFill /></div>
                    <div>Queries</div>
                     <div className='point3 pl-5'><FaAngleDown /></div>
             
                    
                    
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
                   <Link to={'/login'}>     <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                  <div><RiAccountCircleFill /></div>
                  <Link > <div>Account</div></Link>
                    <div className='point6'><FaAngleDown /></div>
             
                    
                    
                    </div>
                 </Link>    



                 </div>


            </div>


</div>





            </div>


            <div className='flex flex-col'>
            
<div>

            <div className='right-col bg-white shadow-md rounded-md !w-[full] h-[70px] p-5 TableResposiveness'>

                <div className='bg-white w-[full] TableResposiveness'>

       <div className='flex gap-218 items-center Flex-Table-Resposiveness'>     
<div>
<div className='flex left-icons items-center gap-2'>
                <div><Link>  <div className=' Menu-icon text-[20px]'><BsFillMenuButtonWideFill /></div></Link></div>
 <Link><div className='Search-icon text-[25px] Menu-icon'><CiSearch /></div></Link>

</div>
</div>
<div className='flex text-[20px] gap-4 '>

       <Link to='/feedback' className='Menu-icon'><div><GrLanguage /></div></Link>
      <Link to='/orders'> <div className='text-[22px] Menu-icon'><IoNotificationsOutline /></div></Link>
      <Link to='/upload'> <div className='text-[22px] Menu-icon'><IoSettingsOutline /></div></Link>
      <Link to='/contact'> <div className='text-[22px] Menu-icon' ><MdAccountCircle /></div></Link>

</div>
  </div>  
    </div> 




</div>
   </div>
<div className='flex Dashes  '>

<div className='w-[60%]'>
   <div className='p-5 '>



    <div className='bg-white p-8 font-bold text-[22px] shadow-md rounded-md Dash-container  right-side Analytics-Dashboard-Resposiveness'>




      <div className='flex gap-90 items-center Overview-Resposiveness'>

        <div className='pb-5'>
          Overview
            </div>
        <div className=' Option '>
            <div className='h-[30px] border text-[15px] flex items-center gap-2 options rounded-md'>
                
              <Link>  <div>Options</div></Link>
                <div><FaAngleDown /></div> </div>
    


        </div>
        </div>


        <div className='Cards p-4 flex gap-5 justify-center Analytics-Cards-Resposiveness'>





            <div className='text-[14px] text-[#8a8888] bg-white p-5 w-[30%] shadow-md rounded-md Card '>
<div className='Percentage-Resposveness'>
<div className='text-[40px] text-blue-700'><HiCurrencyDollar /></div>

<div className='pb-0'> Total Profit</div>

                <div className='total-profit text-[black]'>${get.totalPrice}</div>
                <div className='increament'>+10%</div>
                </div>
                  <div className='text-[13px] pt-2'>from last month</div>



            </div>
                <div className='text-[14px] text-[#8a8888] bg-white p-5 w-[30%] shadow-md rounded-md Card'>
<div className='Total-Orders-Responsiveness'>
<div className='text-[40px] text-blue-700  text-green-500'>

    <div className=''><TbBasketDown /></div>
    </div>

<div className='pb-0'> Total Orders</div>

                <div className='total-profit text-[black]'>{get.ordercounts}</div>
                <div className='increament'>+10%</div>
                </div>
                
                  <div className='text-[13px] pt-2'>from last month</div>



            </div>

                         <div className='text-[14px] text-[#8a8888] bg-white p-5 w-[30%] shadow-md rounded-md Card'>
<div className='Total-Orders-Responsiveness'>
<div className='text-[40px] text-purple-600'><MdRemoveRedEye /></div>
  <div className='Percentage-Resposveness'>
<div className='pb-0'> Impressions </div>
                <div className='total-profit text-[black]'>{get.userscount}</div>
                <div className='increament'>+10%</div>
                </div></div>
                  <div className='text-[13px] pt-2'>from last month</div>



            </div>
            




        </div>
    </div>
    



   </div>
   </div>
     <div className='p-0 pt-5'>

        <div className='bg-white Dash-container w-[120%] h-[13pc] p-2 shadow-md rounded-md Sales-Resposiveness'>
           <div className=' flex '>


            <div className='p-4 font-bold text-[22px]   '> Sales Target</div>
            </div>
            <div className='flex items-center gap-15'>
            <div className='pb-20'>
            <div className='flex items-center pl-4  gap-1 count'>
            <div className=' font-bold text-[30px] '> 10.1k</div>
            <div className='total-items-dashboard'>/20.5k units</div>
            </div>
            <div className='font-bold pl-4 text-gray-500 text-[13px] '>Made this month year</div>

</div>
<div className='percentage-circle pb-50px'>
<div class="progress-wrapper">
    <svg width="160" height="160">
        <circle class="bg" cx="80" cy="80" r="70"/>
        <circle class="progress" cx="80" cy="80" r="70"/>
    </svg>
    <div class="percent">75%</div>
</div>
</div>


</div>
  



  </div>

 


</div>


     </div>

     <div className='flex gap-0 mb-10 mt-5 gap-2 CAtegory-Analytics-Resposivenss'>


 <div className='bg-white rounded-md  flex items-center justify-center   justify-center w-[33%] shadow-md justify-center  items-center   ml-8 mt-2'>

   <div className='text-black font-bold  text-[20px] p-5 '>Total Customers</div>
 </div>

 <div className='bg-white rounded-md  flex items-center justify-center justify-center w-[33%] shadow-md justify-center  mt-2'>

   <div className='text-black font-bold text-[20px] p-5 '>Daily Sales</div>
 </div>
  <div className='bg-white rounded-md  flex items-center justify-center  justify-center w-[33%] shadow-md justify-center    mt-2'>

   <div className='text-black font-bold  text-[20px] p-5 '>Monthly Sales</div>
 </div>
  <div className='bg-white rounded-md  flex items-center justify-center  justify-center w-[33%] shadow-md justify-center  mt-2'>

   <div className='text-black font-bold text-[20px] p-5 '>Yearly Sale</div>
 </div>


 </div>
























































     
     <div className='flex w-[] Charts-Resposiveness'>
 <div className='bg-white rounded-md shadow-md justify-center w-[50%] dashcard ml-8 mt-2 Pie-Resposiveness'>

   <div className='text-black font-bold text-[20px] p-5 pb-0 '>Pie Chart</div>

   <div className='flex justify-center items-center pt-0'><PieChartWithCustomizedLabel/></div>

</div>

  <div className='bg-white rounded-md shadow-md justify-center  w-[50%]  dashcard ml-6 mt-2 BarChart-Resposiveness '>
  <div className='text-black font-bold text-[20px] p-5'>Bar Chart</div>

 <LineBarAreaComposedChart/>
</div>




 </div>






 


 <div className='bg-white rounded-md shadow-md justify-center w-[95%] dashcard ml-8 mt-7 LineChart-Resposiveness'>

   <div className='text-black font-bold text-[20px] p-5 '>Line Chart</div>


   <LineChartVisual/>




 </div>

 <div className='bg-white rounded-md shadow-md justify-center w-[95%] dashcard ml-8 mt-2 '>

   <div className='text-black font-bold text-[20px] p-5 MApping-cart'>Map Chart</div>

<WorldMap/>






 </div>
 <div className='bg-white rounded-md shadow-md  flex gap-2 justify-center  mt-5 p-2 dashcard MapChart-Resposiveness '>

   <div className='text-black font-bold p-2 '>Area Chart</div>


<SimpleAreaChart/>

 </div>


 <div className='bg-white rounded-md shadow-md  flex gap-2 justify-start  mt-5 p-2 dashcard '>

   <div className='text-black font-bold p-2 '>Geography Chart</div>

   


 </div>



     </div>







</div>



     </div>




    </section>
  )
}

export default Header