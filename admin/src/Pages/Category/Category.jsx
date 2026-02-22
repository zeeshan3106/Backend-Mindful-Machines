import React from 'react'
import './Category.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function Category() {


    const [cate, setcate]=useState({

        category:"",
        subcategory:""

    })

    const onSubmit = (e)=>{
        e.preventDefault()

        axios.post('http://localhost:8000/api/products/addCategory',cate).then(res => console.log(res.data)).catch(err => err)
    }


    const onchange = ((e)=>{

        const {name , value } = e.target;
        setcate(prev =>( {

            ...prev,
            [name]:value
        }

    )
        )






console.log("Selected:", name, value); 

    })


const [iscategory,setcategategory]= useState([])

    useEffect((e) => {

        axios.get('http://localhost:8000/api/products/getCategory')
        
        .then(res =>{ console.log(res.data)

            setcategategory(res.data.data)
        
    })
        .catch(err => res.err)


    
    }, [])



    useEffect( (e)=>{

        axios.get('http://localhost:8000/api/products/deleteCategory')
        .then(res => console.log(res.data)).catch(err => err)


    })
    

console.log(cate)


console.log("Data from API:", iscategory);

  return (
    <div className='Category-R1'>
    <div className='  flex Category  p-20 gap-4  justify-center '>
        <div>
        <div className='flex flex-col items-center gap-3'>

         <div className='text-[30px] text-bold font-type Category-R2 '>Category</div>

         <input

         name='category'
         value={cate.category}
         onChange={onchange}
         
         type='text' className='w-[300px] h-[40px] border Category-Res-Input'></input>


     


        </div>

        

    </div>


     <div>
        <div className='flex flex-col items-center gap-3'>

         <div className='text-[30px] text-bold font-type Category-R2  '>Sub-Category</div>


         <input

         name='subcategory'
         value={cate.subcategory}
         onChange={onchange}
         
         type='text' className='w-[300px] h-[40px] border Apple flex '></input>




        
        </div>

        

    </div>


<div className='Button-Cat mt-20'>
 <buutton type="submit" onClick={onSubmit} className=" border bg-red-600 cursor-pointer text-white font-bold p-3">Enter</buutton>
</div>





       </div>
       <div className='flex pl-80 w-[100%]'>
        <div className='w-[70%]'>

        <div className='font-bold p-5 border text-[20px]'>Categories:-</div>
<div className=" gap-4">
        {

            iscategory.map( (product,index) => (



         <div className='font-bold p-2  text-[20px]  '>
            <div key={index} className='font-bold p-2 text-[20px] '>Item{index+1}
     
           <ol className="list-decimal pl-5">
        <li>
       <div className='flex'><div className='w-[98%]'>{product.category}</div> 
       <div className='flex gap-2'>
       <div className='bg-blue-700 text-white text-center w-[30px] cursor-pointer shadow-md rounded-md'>E</div>
       <div className='bg-red-700 w-[30px] text-center text-white cursor-pointer shadow-md rounded-md'>D</div>
       </div>
       
       </div>
        </li>
        <li>{product.subcategory}</li>
      </ol>
          </div>  
            
            </div>
            )
        )
        }
</div>
</div>



       </div>
       </div>

  )
}

export default Category