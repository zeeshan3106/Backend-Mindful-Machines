import React, { useState } from 'react'
import './Products.css'
import Product from '../../Components/Navabar/Header/Header1'
import Sidebar from './Sidebar'
import Benefits from '../../Components/Navabar/Header/Benefits'
import Productbar from './Productbar'
import ProductItem from '../../Components/Navabar/Header/ProductItem'
import {Link} from 'react-router-dom'


import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { IoGridSharp } from "react-icons/io5";
import { GoRows } from "react-icons/go";
import axios from 'axios'
import { useEffect } from 'react'
import ProductItemSearch from '../../Components/Navabar/Header/ProductItemSearch'
import Pagination from '@mui/material/Pagination';



function Products() {





  const [thispage , sethispage]=useState()

  const onPageChange = (event , value)=>{

    sethispage(value)
    console.log(value)

const pagenumber = localStorage.setItem("PageNumber",value)


alert("pagenumber")

  }




  const[sort,setsort]=useState([])


const OnChangeSort=((e) =>{

  const sorting = e.target.value
  setsort(sorting)
  console.log(sorting)
 axios.get('http://localhost:8000/api/products/getbycategory', {
    params: {
      categoryid: localStorage.getItem("token"),
      sortingId: sorting
    }
  })
  .then(res => {
    alert("Sorted")
    console.log(res.data);
    setitems(res.data.data);      // data is in res.data.data
    setpages(res.data.totalPages);
  })
  .catch(err => console.log(err))

})

  
  const [itemview, setisitemview]=useState('grid')

  const [pages, setpages]=useState([])

const [items, setitems]=useState([])

useEffect(()=>{

  const token = localStorage.getItem("token")
  
  const filteritem = localStorage.getItem("item")
  axios.get('http://localhost:8000/api/products/getbycategory',
    {
      params:{
           categoryid:filteritem,
           sortingId:sort

      }
    }
  ).then(res => {console.log(res.data.ProductsCounts)

    setpages(res.data.totalPages)
    console.log("Ttttttttttttttttttttotalpages",res.data.totalPages)

    setitems(res.data)

  })
  .catch(err => err)

},[sort])



const pagenumbers = []

for (let i = 1; i<=pages; i++){

  pagenumbers.push(i)
  
}

console.log('Page numberrrrrrrrrrrrrrrrs',pagenumbers)

  return (

    <section>
       <div><Product/></div>

        <div className='container-side'>

             <div className='wellness'>Wellness Devices
            </div>
            <div className='ProductPage '>



            <div className='side'>
                <Sidebar/>
            </div>

            

<div className='w-full'>

  <div className='filter-bar cursor-pointer Products-Counts'>
    
    <div className='f-col1 w-[10%]'>

      <div className='text-blue-600'><IoGridSharp /></div>
   

    </div>
  <div className='f-col2 w-[78%] Font-of-title  '>
   
  <div className='item-title-font w-full '>We have almost {items.ProductsCounts} Products</div>
 
  </div>
   <div className='f-col3 '>

    <div className='Sorting-resposiveness font-bold'>Sort By:- </div>

       <select className='option-bar' onChange={OnChangeSort}>
               <option>Relevant</option>
        <option>Name A to Z</option>
         <option>Name Z to A</option>
            <option>Latest to Oldest</option>
               <option>Oldest to Latest</option>
             
       
      </select>

  
    </div>
   





  </div>
 
  


              <div className="right-bar bg-black">
               
           
            <ProductItem/>
            
            
         
              








        




            </div>




            <div className=' flex justify-center pt-4 '>
<div className='bg-white w-[50%] Products-Pagination  rounded-md shadow-md p-2 flex justify-center'>
  <Pagination
  color='primary'
  count={10}
  onChange={onPageChange}
  
  />
</div>




</div>
            </div>

            
            </div>





 <div >
               <Benefits/>
            </div>

          


        </div>
    







       


    </section>
 
  )
}

export default Products