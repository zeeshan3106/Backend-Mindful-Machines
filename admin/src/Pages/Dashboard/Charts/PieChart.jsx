import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pie, PieChart, Sector } from 'recharts';





// Sample data
const data = [
  { name: 'AI Health', value: 300 },
  { name: 'AI Wellness', value: 280 },
  { name: 'AI Drones', value: 260 },
  { name: 'AI Homes', value: 240 },
  { name: 'AI Humanoid', value: 220 },
   { name: 'AI Industrial', value: 220 },
];

const RADIAN = Math.PI / 180;
const COLORS = [
  'blue',       // 1
       // 2
  'orange',        // 3
     // 4
  'purple',      // 5
       // 6 (instead of #2F3E46)
  'pink',        // 7
  'brown',       // 8
     // 9
  'green',        // 10
  'red',      // 11
   // 12
];

// Customized label
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);













  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};


const MyCustomPie = (props) => {
  return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
};


export default function PieChartWithCustomizedLabel({ isAnimationActive = true }) {

  
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
    <div style={{ width: '420px' }}>
      <PieChart
        style={{ width: '85%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1 }}
        responsive
      >
        <Pie
          data={pie}
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={isAnimationActive}
          shape={MyCustomPie}
        />
      </PieChart>

      {/* Legend below pie (AI categories) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, auto)',
          justifyContent: 'center',
          gap: '12px 18px',
          marginTop: '12px',
          fontSize: '14px',
          textAlign: 'left',
        }}
      >
        {pie.map((item, index) => (
          <div
            key={item.name}
            style={{
              display: 'flex',
          
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'wrap',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '12px',
                backgroundColor: COLORS[index % COLORS.length],
                display: 'inline-block',
                borderRadius: '2px',
              }}
            />
            <div  className='flex flex-wrap'>
            <span>{item.name}</span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
