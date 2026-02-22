import React, { useState,useEffect } from 'react'
import './Orders.css'
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
import { FaChevronDown } from "react-icons/fa";
import axios from 'axios';
import Button from '@mui/material/Button';

import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';

function Orders() {


  const [thispage , setthispage]=useState(1)
  const onChangeItem = (event, value) =>{

    setthispage(value)
    console.log(value)

  }

  
  const [totalpages, settotalpages]=useState()





    const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(page)
  };

  const handleChangeRowsPerPage = (event) => {
   const value = parseInt(event.target.value, 10);
    setPage(0);
    setRowsPerPage(value)
    console.log(value)
  };




const [openindex, setopenindex]=useState(null)










  const [count,setcount] =useState([])

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

   


console.log(state)
const [order,setorder]=useState([])
useEffect(() => {
  const token = localStorage.getItem("token")
  axios.get('http://localhost:8000/api/orders/getorders',

    {
      params:{

      
        page:thispage
      }
    }





  )
    .then(res => {
      setUsers(res.data.data) // MUST be an array
      setcount(res.data.totalOrders)
      settotalpages(res.data.totalpages)
      setorder(res.data)
      console.log(res.data)
    })
    .catch(err => console.error(err))


    axios.get('http://localhost:8000/api/cart/cartget').then(res => {


    
     console.log(res.data)

    }).catch(err => err)









}, [thispage])



  

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

<div className=' mt-5 w-[100%] flex items-center justify-center Table-Resposiveness'>
    <div className='bg-white shadow-md rounded-md w-[97%] p-10 text-[22px] font-bold Table-Resposiveness '>
<div className='flex items-center justify-center gap-120 Table-Resposiveness Table-Search Table-Search-Orders'>
        <div>All Orders({count})</div>
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

    <div className='table-orders'>

        <table className=''>

         <thead>
          <th><FaChevronDown /></th>

            <th className=''>
            DATE

            </th>
             <th>USER ID</th>
             <th>USER NAME</th>
<th>USER EMAIL</th>
<th>USER CITY</th>
<th>USER PHONE</th>
<th>USER HOUSE</th>
<th>USER WhATSAPP</th>
<th>ORDER STATUS</th>
</thead>


<tbody>


    {users.map((product,index) => (


<>

    <tr>
     
       
     <td className="text-center align-middle">
       <Button  

       sx={{

         width: 10,
    height: 40,
    borderRadius: "500px",
     
        backgroundColor:"transparent",
        "&:hover":{
          backgroundColor:"transparent"
        }

      
       }}
       
       
       
       
       className=''  onClick={()=> setopenindex(openindex===index ? null : index)}     >
        <FaChevronDown size={18}/></Button>
                
                    
      
</td>   
       



 <td className='T1'>
  {product._id ? new Date(parseInt(product._id.substring(0, 8), 16) * 1000).toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
  
      hour12: true,   // <-- this forces AM/PM
      year: '2-digit',
      month: '2-digit',
      day: '2-digit'
    }) : 'N/A'}
</td>
              <td className='text-blue-800'>
      {product.userId}
    </td>
                <td>{product.FullName}</td>
                <td>{product.Email}</td>
                <td>{product.City}</td>
                   <td>{product. PhoneNo}</td>
                      <td>{product.HouseNo}</td>
                        <td>{product.Whatsapp}</td>
                          <td>

                            <div className='Order-Status'>
                              
                              <select className='w-full h-full cursor-pointer'>

                          <option value="pending">⏳ Pending</option>
  <option value="delivered">✅ Delivered</option>
  <option value="cancel">❌ Cancel</option>
                              


                              </select>
                              
                              
                              </div>
                        
                            
                            </td>
                
                
                
                
                </tr>

                { openindex === index && (
                       <>

                <tr>
                   <td>Sr </td>
                
                  <td>Title </td>
                      <td>Quantity </td>
                          <td>Price </td>
                             <td>Discount</td>
                                <td>Color </td>
                                 <td>Category </td>
                             <td>Product Id </td>
                                <td>Company </td>
                           
                </tr>

{
                 product.items?.map((item,index) => (

                <tr className='text-blue-900 '>

                  

                  <td className="text-blue-900 ">{index+1} </td>
                  <td className="text-blue-900 ">{item.title} </td>
                      <td>{item.quantity}</td>
                          <td>{item.price}</td>
                             <td>{item.discount}</td>
                                <td>{item.color} </td>
                                 <td>{item.category} </td>
                             <td>{item._id} </td>
                                <td>{item.company} 

                                </td>
                           
                </tr>
        ))
      }

</>
                )}

           


              
</>
         
         
         
   
    ))}



   
       








</tbody>



        </table>





    </div>






</div>


<div className='flex flex-col items-center justify-center'>




     



          <Pagination count={totalpages}

          
          
      onChange={onChangeItem}
          
          color='primary' />





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

export default Orders