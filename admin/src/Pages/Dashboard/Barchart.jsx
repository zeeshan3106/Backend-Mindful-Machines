import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, Cell } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import axios from 'axios';
import { useEffect, useState } from 'react';

// #region Your AI product categories data
const data = [
  { category: 'Health', sales: 4800, revenue: 9000, profit: 4300, returns: 200 },
  { category: 'Wellness', sales: 4600, revenue: 8700, profit: 4100, returns: 180 },
  { category: 'Drones', sales: 5000, revenue: 9500, profit: 4700, returns: 220 },
  { category: 'Homes', sales: 1500, revenue: 8800, profit: 4000, returns: 190 },
  { category: 'Humanoid', sales: 7900, revenue: 9200, profit: 4400, returns: 210 },
  { category: 'Industrial', sales: 5200, revenue: 9800, profit: 5000, returns: 250 },
];

const COLORS = [
  'blue',       // 1
  'blue',         // 2
  'red',        // 3
  'orange',      // 4
  'purple',      // 5
  'teal',        // 6 (instead of #2F3E46)
  'pink',        // 7
  'brown',       // 8
  'gray',        // 9
  'green',        // 10
  'yellow',      // 11
  'magenta'      // 12
];


// #endregion

const LineBarAreaComposedChart = () => {


    
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
<ComposedChart
  style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
  responsive
  data={pie}
  margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
>
  <CartesianGrid stroke="#f5f5f5" />
  <XAxis dataKey="name" scale="band" />
  <YAxis width="auto" />
  <Tooltip />
  <Legend />

  {/* Only one Bar with individual colors */}
  <Bar dataKey="value" barSize={20} name="Sales">
    {pie.map((entry, index) => (
      <Cell key={index} fill={COLORS[index % COLORS.length]} />
    ))}
  </Bar>

  {/* Optional: remove these or keep if you add corresponding keys in pie */}
  {/* <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" name="Revenue" />
  <Line type="monotone" dataKey="profit" stroke="#ff7300" name="Profit" />
  <Scatter dataKey="returns" fill="red" name="Returns" /> */}

  <RechartsDevtools />
</ComposedChart>

  );
};

export default LineBarAreaComposedChart;
