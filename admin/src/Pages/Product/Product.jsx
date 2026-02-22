import React, { useContext, useEffect, useState } from 'react'
import './Productlist.css'
import {Link} from 'react-router-dom'
import { BsCartCheck } from "react-icons/bs";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaBold, FaDonate } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { SiCoveralls } from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import { RiAccountCircleFill, RiBarChartGroupedFill } from "react-icons/ri";
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
import { IoMdAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbFilterDown } from "react-icons/tb";
import img1 from './1.jpg'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Header from '../Dashboard/Header';

import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

import axios from 'axios';
import { useFieldState } from './addProduct';




function Product() {

  const { open, handleOpen, handleClose } = useContext(MyContext);
  const [field, setField] = useState([])

const [ide, stateid]=useState({

 id:"Apple"


})
 
  const [count , setcount] = useState([0])


  useEffect(() => {
    axios.get('http://localhost:8000/api/users/getall')
      .then( (res) =>
        
        setField(res.data.data),
       

  
    )

      .catch(err => console.log(err))
  }, [])




  const onEdit = ((editID)=>{

      axios.get(`http://localhost:8000/api/users/getall/${editID}`)
      .then(res => setf(res.data.data))
      .catch(err => console.log(err))})



  const onDelete = ((e) =>{

    a




  })

console.log(field)

  return (
    <section className='Productlist'>
      <div className='contianer gap-2'>
        <div className='container-box  flex w-[100%] gap-2 '>

          <div className='left-col bg-white shadow-md rounded-md w-[18%] h-[604px]'>
            <div></div>

            <div className='Company-title font-bold p-5  text-[30px] flex gap-15'>
              <div>Machines</div>
            </div>

            <div>
              <div className='Dashboard font-bold p-5 text-[#414040]  text-[17px]'>Dashboard</div>
              <div className=''>
                <Link to="/"><div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px] pl-5 text-[#535353]'>
                  <div><BsCartCheck /></div>
                  <div> Ecomerence</div>
                </div> 
                </Link> 
                <Link to="/">  
                  <div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px] pl-5 text-[#535353]' >
                    <div><BsRocketTakeoff /></div>
                    <div> Projects</div>
                  </div>
                </Link>  
                <Link to="/">   
                  <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                    <div><FaDonate /></div>
                    <div>Marketing</div>
                  </div>
                </Link> 
                <Link to="/Header">     
                  <div className=' Dashbaord-Items1 flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                    <div><TbBrandGoogleAnalytics /></div>
                    <div> Analytics</div>
                  </div>
                </Link>    

                <div className='Concepts font-bold p-5 text-[#414040]  text-[17px]'>Concepts</div>
                <div>
                  <Link to="/">
                    <div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px] pl-5 text-[#535353]'>
                      <div><PiShootingStarLight /></div>
                      <div> AI</div>
                      <div className='point1'><FaAngleDown /></div>
                    </div> 
                  </Link> 
                  <Link to="/">  
                    <div className=' Dashbaord-Items flex gap-2 items-center font-bold text-[16px] pl-5 text-[#535353]' >
                      <div><AiOutlineFundProjectionScreen /></div>
                      <div>Projects</div>
                      <div className='point2'><FaAngleDown /></div>
                    </div>
                  </Link>  
                  <Link to="/">   
                    <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                      <div><BsFillPeopleFill /></div>
                      <div>Customers</div>
                      <div className='point3'><FaAngleDown /></div>
                    </div>
                  </Link> 

                  <div className="accordion">
                    <input type="checkbox" id="create" />
                    <label htmlFor="create">
                      <div className='flex'>
                        <div> Products Create </div>
                        <div className='point7'><FaAngleDown /></div>
                      </div>
                    </label>
                    <div className="content flex-col justify-start bg-black items-start w-[70%]">
                   <Link to="/Upload">A   <Button onClick={handleOpen} >dd new Products</Button></Link>
                      Update Products
                      <Link to={'/Header'}>List of Products</Link>
                    </div>
                  </div>

                  <Link to="/">     
                    <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                      <div><ImCart /></div>
                      <div> Orders</div>
                      <div className='point5'><FaAngleDown /></div>
                    </div>
                  </Link> 
                  <Link to="/">     
                    <div className=' Dashbaord-Items flex gap-2 items-center  font-bold text-[16px] pl-5 text-[#535353]'>
                      <div><RiAccountCircleFill /></div>
                      <div>Account</div>
                      <div className='point6'><FaAngleDown /></div>
                    </div>
                  </Link>    

                </div>
              </div>
            </div>

          </div>

          <div className='flex flex-col Appp '>
            <div>
              <div className='right-col  bg-white shadow-md rounded-md !w-[full] h-[70px] p-5'>
                <div className='bg-white w-[full] '>
                  <div className='flex gap-218 items-center'>     
                    <div>
                      <div className='flex left-icons items-center gap-2'>
                        <div><Link>  <div className=' Menu-icon text-[20px]'><BsFillMenuButtonWideFill /></div></Link></div>
                        <Link to="/"><div className='Search-icon text-[25px] Menu-icon'><CiSearch /></div></Link>
                      </div>
                    </div>
                    <div className='flex text-[20px] gap-4 '>
                      <Link className='Menu-icon'><div><GrLanguage /></div></Link>
                      <Link to="/"> <div className='text-[22px] Menu-icon'><IoNotificationsOutline /></div></Link>
                      <Link to="/"> <div className='text-[22px] Menu-icon'><IoSettingsOutline /></div></Link>
                      <Link to="/"> <div className='text-[22px] Menu-icon' ><MdAccountCircle /></div></Link>
                    </div>
                  </div>  
                </div> 
              </div>

              <div className='Dashes w-[100%]'>
                <div className='w-[100%]'>
                  <div className='p-3 mt-5 mr-5 pr-0'>
                    <div className='bg-white p-8 font-bold text-[22px] shadow-md rounded-md Dash-container  right-side'>
                      <div className='flex gap-150 items-center justify-center w-[full] '>
                        <div className='pb-5 text-[25px]'>Product</div>
                        <div className=' Option '>
                          <div className='h-[30px] border text-[15px] flex items-center gap-2 options rounded-md'>
                            <button className='bg-white border  pl-5 pr-5 h-[45px] flex items-center justify-center text-gray-509 p-3 Export rounded-md shadow-md cursor-pointer'>Export</button>
                            <button className='bg-blue-500 flex items-center gap-1 justify-center text-white p-3 rounded-md shadow-md cursor-pointer'>
                              <div className='text-[20px] font-bold '> <IoMdAdd /></div>
                              <div className='w-[100px] h-[25px]'> <Link to="/Upload">Add Product</Link></div>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className='flex items-center gap-5 h-[50px] pb-2'>
                        <div className='Cards p-0 flex gap-0 justify-start pl-4  w-[85%] h-[100%] ' >
                          <input className= "w-[100%] h-[100%] p-4 text-[15px] shadow-md Search rounded-md Search " type='text' placeholder='Search items...'></input>
                        </div>
                        <div>
                          <button className='text-black flex items-center  border-gray-300 justify-center gap-1 text-[15px] border p-3 cursor-pointer pl-4 pr-4 Button-Filter'>
                            <div><TbFilterDown /></div>
                            <div> Filters</div>
                          </button>
                        </div>
                      </div>

                      <div className='w-[100%] flex justify-center bg-white'>
                        <div className='pt-5 w-[100%] flex items-center justify-center bg-white gap-2 rounded-md'>
                          <table className='w-[100%]  table rounded-md bg-white '>
                            <thead >
                              <th>Sr</th>
                              <th className='food'>Product</th>
                              <th>Quantity</th>
                              <th>Sales</th>
                              <th>Price</th>
                              <th>Edit/Delete</th>
                            </thead>
                            <tbody>
                              {field.map((product , index ) => (
                                <tr>
                                  <td>{index+1}-</td>
                                  <td className='food1'>
                                    <div className='flex gap-2 items-start justify-start w-[300px]'>
                                      <img className='w-[40px]' src={product.image || img1} alt={product.title} />
                                      <div className='flex flex-col !justify-start gap-1 items-start'>
                                       
                                        <div className=''>{product.title}</div>
                                      
                                        <div className='text-gray-500 text-[14px]'>ID:{product._id}</div>
                                      
                                      </div>
                                    </div>
                                  </td>
                                  <td className='custom-td'>{product.productStock || 0}</td>
                                  <td>{product.category}</td>
                                  <td>${product.price}</td>
                                  <td>
                                    <div className='flex items-center gap-2 text-[10px] '>
                                      <div><button className='hover cursor-pointer '><CiEdit /></button></div>
                                      <div><button className='hover cursor-pointer'><RiDeleteBin6Line /></button></div>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
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

export default Product
