
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const RenderLineChart = () => {
  const data = [
    { name: '', food: 0, drink: 0 },
    { name: 'Tháng 1', food: 400, drink: 33 },
    { name: 'Tháng 2', food: 900, drink: 270 },
    { name: 'Tháng 3', food: 375, drink: 270 },
    { name: 'Tháng 4', food: 392, drink: 270 },
    { name: 'Tháng 5', food: 779, drink: 270 },
    { name: 'Tháng 6', food: 293, drink: 240 },
    { name: 'Tháng 7', food: 522, drink: 240 },
    { name: 'Tháng 8', food: 522, drink: 240 },
    { name: 'Tháng 9', food: 522, drink: 240 },
    { name: 'Tháng 10', food: 522, drink: 240 },
    { name: 'Tháng 11', food: 522, drink: 240 },
    { name: 'Tháng 12', food: 522, drink: 240 }
  ];

  
  return (
    <div>
      <h1 className='text-center'>Line Chart</h1>
      <LineChart width={1300} height={500} data={data}>
        <Line type="monotone" dataKey="drink" stroke="#8884d8" />
        <Line type="monotone" dataKey="food" stroke="#372282" />
        <CartesianGrid stroke="#ccc" strokeDasharray="" />
        <Tooltip />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>


    </div>
  )
}

export default RenderLineChart
