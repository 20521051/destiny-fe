import React from 'react'
import { CartesianGrid, AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts'

const data = [
  {
    nameX: 'Jan',
    revenue: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    nameX: 'Feb',
    revenue: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    nameX: 'Mar',
    revenue: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    nameX: 'Apr',
    revenue: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    nameX: 'May',
    revenue: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    nameX: 'Jun',
    revenue: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    nameX: 'Jul',
    revenue: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    nameX: 'Aug',
    revenue: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    nameX: 'Sep',
    revenue: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    nameX: 'Oct',
    revenue: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    nameX: 'Nov',
    revenue: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    nameX: 'Dec',
    revenue: 3490,
    pv: 4300,
    amt: 2100
  }
]
const Chart = () => {
  return (
    <React.Fragment>
      <h1>Today</h1>

      <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
        <defs>
          {/* Chart */}
          <linearGradient id='colorRevenue' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#9047ff' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#9047ff' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#ec4899' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#ec4899' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='nameX' label={{ value: 'Months', angle: 0, position: 'insideBottom' }} />
        <YAxis label={{ value: 'Nghìn đồng (VNĐ)', angle: -90, position: 'insideLeft' }} />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        {/* Data */}
        <Area type='monotone' dataKey='revenue' stroke='#9047ff' fillOpacity={1} fill='url(#colorRevenue)' />
        <Area type='monotone' dataKey='pv' stroke='#ec4899' fillOpacity={1} fill='url(#colorPv)' />
      </AreaChart>
    </React.Fragment>
  )
}

export default Chart
