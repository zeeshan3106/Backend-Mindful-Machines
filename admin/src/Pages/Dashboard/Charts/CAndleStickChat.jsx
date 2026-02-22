import { generateMockMarketData, RechartsDevtools } from '@recharts/devtools';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ErrorBar,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
  DefaultZIndexes,
} from 'recharts';

// Generate mock market data
const data = generateMockMarketData(100, 1337, 100, 1768145757834);

// Bar min/max
const barDataKey = entry => [Math.min(entry.close, entry.open), Math.max(entry.close, entry.open)];

// Whisker (high/low) data
const whiskerDataKey = entry => {
  const highEnd = Math.max(entry.close, entry.open);
  return [highEnd - entry.low, entry.high - highEnd];
};

// Convert timestamp to "HH:MM"
const timestampToMinutes = timestamp => {
  const date = new Date(timestamp);
  return `${date.getUTCHours()}:${String(date.getUTCMinutes()).padStart(2, '0')}`;
};

// Format numbers as dollars
const formatDollars = value => `$${value.toFixed(2)}`;

// Candlestick shape
const Candlestick = props => {
  const color = props.open < props.close ? 'green' : 'red';
  return <Rectangle {...props} fill={color} />;
};

// Tooltip content
const TooltipContent = props => {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    const entry = payload[0].payload;
    return (
      <div style={{ backgroundColor: 'white', border: '1px solid #ccc', padding: '0 1em' }}>
        <p style={{ margin: 0 }}>{`Time: ${timestampToMinutes(entry.time)}`}</p>
        <p style={{ margin: 0 }}>{`Open: ${formatDollars(entry.open)}`}</p>
        <p style={{ margin: 0 }}>{`Close: ${formatDollars(entry.close)}`}</p>
        <p style={{ margin: 0 }}>{`Low: ${formatDollars(entry.low)}`}</p>
        <p style={{ margin: 0 }}>{`High: ${formatDollars(entry.high)}`}</p>
      </div>
    );
  }
  return null;
};

// Main component
export default function CandlestickChartVisual({ defaultIndex }) {
  return (
    <BarChart
      data={data}
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
    >
      <XAxis dataKey="time" tickFormatter={timestampToMinutes} />
      <YAxis domain={['dataMin - 1', 'dataMax + 1']} tickFormatter={formatDollars} />
      <CartesianGrid vertical={false} />
      <Bar dataKey={barDataKey} shape={Candlestick}>
        <ErrorBar dataKey={whiskerDataKey} width={0} zIndex={DefaultZIndexes.bar - 1} />
      </Bar>
      <Tooltip content={TooltipContent} defaultIndex={defaultIndex} />
      <RechartsDevtools />
    </BarChart>
  );
}
