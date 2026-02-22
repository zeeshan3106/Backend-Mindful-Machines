import React from 'react'
import './Orderhis.css'
import Product from '../../Components/Navabar/Header/Header1'
import Benefits from '../../Components/Navabar/Header/Benefits'
import { FaUserCheck } from "react-icons/fa";
import { NavLink } from "react-router";
import './Table.css'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function Orderhis(props) {
   
  return (
 <section>


 <Product/>


<div className='flex Order-Container p-5 gap-5  justify-center '>

   <div className='  w-[20%] !justify-center '>
          <div className=' bg-white shadow-md rounded-md  w-[100%]'>
            <div className='w-[90%] flex items-center justify-center flex-col'>
           
                <div className=' Name-section pt-5 Name pl-10 pb-3 justify-center'>Muhammad Zeeshan Ali Zafar</div>
                <h6 className='text-gray-400 font-bold pb-4'>zeeshanalizafar53@gmail.com</h6>

                <div className='Menubar MyaccountTabs'>

<NavLink

 exact={true}
  to="/User"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>

                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div className='Logo'><FaUserCheck /></div>
                  <div>   User Profile</div>
                  </div>
                </Button>
</NavLink>

<NavLink

 exact={true}
  to="/History"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>

                
                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div><FaUserCheck /></div>
                  <div>  My Orders</div>
                  </div>
                </Button>
</NavLink>

<NavLink

 exact={true}
  to="/Cart"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>

                
                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div><FaUserCheck /></div>
                  <div>  My Cart</div>
                  </div>
                </Button>
</NavLink>

<NavLink

 exact={true}
  to="/Wishlist"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>

                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div><FaUserCheck /></div>
                  <div> My List  </div>
                  </div>
                </Button>

</NavLink>
<NavLink

 exact={true}
  to="/Log-out"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
></NavLink>
<NavLink

 exact={true}
  to="/Home"
  className={({ isActive}) =>
     isActive ? "active" : ""

  }
>
                <Button className="w-full capitalize flex !justify-start !text-[rgba(0,0,0,0.7)]">
                  <div className='flex items-center gap-2 '>
                  <div><FaUserCheck /></div>
                  <div>  Log-out</div>
                  </div>
                </Button>


</NavLink>

            </div>



                
              </div>
            </div>


          </div>

          <div className='flex flex-col w-[70%] gap-20'>

          <div className='Orders w-full  px-3  '>
            
            
            <div className='bg-white  Orders-Page rounded-md shadow-md !py-4 !px-4 '>
            
           <h5>My Orders</h5>
            <div className='Font'>There are <span className='Primary-Orders'>2</span> Orders in your Cart</div>
      
            
            <div>
              

      </div>

    
</div>












  </div>



<div className='bg-white w-full Table'>
 <div>

           <table className='root'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
             
              <tr>
                <td>AI Drones</td>
                <td>AI Pex Fully Auomated Drone</td>
                <td>AI Drones</td>
                <td>$2000</td>
                <td>
              14- Dec -2025
                </td>
              </tr>
                <tr>
                <td>AI Drones</td>
                <td>AI Pex Fully Auomated Drone</td>
                <td>AI Drones</td>
                <td>$2000</td>
                <td>
              14- Dec -2025
                </td>
              </tr>
                <tr>
                <td>AI Drones</td>
                <td>AI Pex Fully Auomated Drone</td>
                <td>AI Drones</td>
                <td>$2000</td>
                <td>
              14- Dec -2025
                </td>
              </tr>
                <tr>
                <td>AI Drones</td>
                <td>AI Pex Fully Auomated Drone</td>
                <td>AI Drones</td>
                <td>$2000</td>
                <td>
              14- Dec -2025
                </td>
              </tr>
                <tr>
                <td>AI Drones</td>
                <td>AI Pex Fully Auomated Drone</td>
                <td>AI Drones</td>
                <td>$2000</td>
                <td>
              14- Dec -2025
                </td>
              </tr>
                <tr>
                <td>AI Drones</td>
                <td>AI Pex Fully Auomated Drone</td>
                <td>AI Drones</td>
                <td>$2000</td>
                <td>
              14- Dec -2025
                </td>
              </tr>
                <tr>
                <td>AI Drones</td>
                <td>AI Pex Fully Auomated Drone</td>
                <td>AI Drones</td>
                <td>$2000</td>
                <td>
              14- Dec -2025
                </td>
              </tr>
                <tr>
                <td>AI Drones</td>
                <td>AI Pex Fully Auomated Drone</td>
                <td>AI Drones</td>
                <td>$2000</td>
                <td>
              14- Dec -2025
                </td>
              </tr>
                <tr>
                <td>AI Drones</td>
                <td>AI Pex Fully Auomated Drone</td>
                <td>AI Drones</td>
                <td>$2000</td>
                <td>
              14- Dec -2025
                </td>
              </tr>
            
          </tbody>
        </table>
    




    </div>

<div className='Food'>Food</div>


</div>
</div>





</div>






<div>
  <Benefits/>
</div>
 </section>
  )
}

export default Orderhis