import React, { useState,useEffect } from 'react'
import './Feedback.css'
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
import { FaSearch } from "react-icons/fa";
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function Feedback() {

  const [thispage ,setthispage]=useState()

  const onchnagepage =(event , value)=>{
    setthispage(value)
    console.log(value)
  }
  
  
      const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

   const [state, newstate] =useState({
      name:""
   })
const [users, setUsers] = useState([])
   const onChange=((e)=>{

      const {name , value}=e.target

      newstate(prev =>({

         ...prev,
         [name]:value

      }))


   })

   const [count,setcount]=useState([])





console.log(state)

useEffect(() => {
  const token = localStorage.getItem("token");

  axios.get('http://localhost:8000/api/frontend/feeds',{
    params:{
      page:thispage
    }
  },{
    headers:{ Authorization: `Bearer ${token}` }}
  )


    .then(res => {
      setUsers(res.data.data) 
      setcount(res.data)
      console.log(res.data)

    })
    .catch(err => console.error(err))
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

       <Link className='Menu-icon'><div><GrLanguage /></div></Link>
      <Link> <div className='text-[22px] Menu-icon'><IoNotificationsOutline /></div></Link>
      <Link> <div className='text-[22px] Menu-icon'><IoSettingsOutline /></div></Link>
      <Link> <div className='text-[22px] Menu-icon' ><MdAccountCircle /></div></Link>

</div>
  </div>  
    </div> 




</div>

<div className=' mt-5 w-[100%] flex items-center justify-center Table-Resposiveness '>
    <div className='bg-white shadow-md rounded-md w-[97%] p-10 text-[22px] font-bold Table-Resposiveness'>
<div className='flex items-center justify-center gap-150 Table-Resposiveness Table-Search-Orders '>
        <div>Feedbacks({count.FeedbackCount})</div>
        <div className='bg-blue-50 pl-4 Users-search bg-gray-300 flex items-center  '><FaSearch />
        <div className='  justify-center'>

            <input type='text' className='p-2 text-[15px] Searchbar' 

            name="name"
            value={state.name}
            onChange={onChange}
            
            
            placeholder='Search Users...'/>
        </div>
        </div>

        




        </div>
<div className='pt-10 flex items-center justify-center Cont Table-Scroll'>

    <div>

        <table className=''>

         <thead>

            <th className=''>
                <input type='checkbox' className='Checkbox'/>




            </th>
             <th>USER IMAGE</th>
             <th>USER NAME</th>
<th>USER EMAIL</th>
<th>USER PHONE</th>
</thead>


<tbody>


    {users.map((product,index) => (

    <tr>
        <td className='T1'>
             <input type='checkbox' className='Checkbox'/> </td>
              <td>
      {index+1}
    </td>
                <td>{product.Name}</td>
                <td>{product.Email}</td>
                <td>{product.Message}</td></tr>
   
    ))}



</tbody>



        </table>





    </div>






</div>


<div className='flex items-center justify-center'>

  <div>


  <Pagination 

  color='primary'

  count={10}
onChange={onchnagepage}
  
  
  
  />

    
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

export default Feedback