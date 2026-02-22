import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useEffect, useState } from 'react';
import axios from 'axios';

// #region Sample data
const data = [
  {
    name: 'AI Health',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'AI Wellness',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'AI Home',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Drones',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Humniod',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Industrial',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },

];

// #endregion
const SimpleAreaChart = () => {


  
    
  const [pie ,setpie ]=useState([])
     
      
    useEffect(() => {
  
      axios.get('http://localhost:8000/api/admin/dash').then(res =>{
  
  
        console.log(res.data)
        
   const transformed = res.data.piechat.map(Product=>({
  
          name:Product._id,
          value:Product.value
  
      }))
  
      setpie(transformed)
  
  
  
      }).catch(err => err)
     
      
    }, [])
  
        console.log("Information REgardddddddding",pie)






  return (
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '22vh', aspectRatio: 1.618 }}
      responsive
      data={pie}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      <RechartsDevtools />
    </AreaChart>
  );
};

export default SimpleAreaChart;