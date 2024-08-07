import React from 'react'
import FirstSlice from './FirstSlice'
import SecondSlice from './SecondSlice'

const Dashboard = () => {
  return (
    <div className='p-4'>
      <h1 className='text-xl font-medium'>Dashboard</h1>
      <div className='flex gap-4 w-full pt-4 sm:flex flex-col md:flex-row lg:flex flex-row'>
        <div className='sm:w-[100%] md:w-[60%]'>
          <FirstSlice />
        </div>
        <div className='sm:w-[100%] md:w-[40%]'>
          <SecondSlice />
        </div>
      </div>
    </div>
  )
}

export default Dashboard