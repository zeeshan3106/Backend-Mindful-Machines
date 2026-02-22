import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = [
  'green', 'red', 'blue', 'orange', 'purple', 'teal',
  'pink', 'brown', 'gray', 'cyan', 'yellow', 'magenta'
];

export default function DynamicLineChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/admin/dash')
      .then(res => {
        // Transform API data: each item becomes a row with name/value
        const transformed = res.data.piechat.map(item => ({
          name: item._id,
          value: item.value
        }));

        setData(transformed);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* Single line showing all values */}
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={3}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
