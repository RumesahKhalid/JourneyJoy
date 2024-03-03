import React from 'react';
import { BsFillArchiveFill,BsBank2, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { Bar,XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart,Line } from 'recharts';
import {ComposedChart,Area, Scatter,} from 'recharts';
import './home.css';

const Home = () => {
  
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  return (
    <div className='main-container'>
        <div className='main-title'> 
           <h3>DASHBOARD</h3>
        </div>
        <div className='main-cards'>
          <div className='dashboard-card'>
            <div className='card-inner'>
              <h3>SERVICE</h3>
              <BsFillArchiveFill className='card-icon'/>
            </div>
            <h1>5</h1>
          </div>
          <div className='dashboard-card'>
            <div className='card-inner'>
              <h3>BOOKING</h3>
              <BsBank2 className='card-icon'/>
            </div>
            <h1>30</h1>
          </div>
          <div className='dashboard-card'>
            <div className='card-inner'>
              <h3>CUSTOMER</h3>
              <BsPeopleFill className='card-icon'/>
            </div>
            <h1>33</h1>
          </div>
          <div className='dashboard-card'>
            <div className='card-inner'>
              <h3>ALERTS</h3>
              <BsFillBellFill className='card-icon'/>
            </div>
            <h1>42</h1>
          </div>
        </div>
        <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Home;