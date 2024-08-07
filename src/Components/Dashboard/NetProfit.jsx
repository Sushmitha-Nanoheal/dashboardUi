import React from 'react';
import "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import DoughnutChart from '../Charts/Donghnut';

const NetProfit = () => {

  return (
    <div className='flex flex-row justify-between gap-4 w-full'>
      <div className='w-[50%] flex flex-col justify-between pt-2 gap-2'>
      <p className="text-xs font-small">Net profit</p>
        <h1 className='text-4xl font-bold '>$6759.25</h1>
        <p className='text-success flex gap-1 items-center'><i class="fa-solid fa-caret-up"></i>3%</p>
      </div>
      <div className='w-[50%] flex flex-col'>
        <div className='flex flex-row justify-center'>
          <DoughnutChart />
        </div>
        <p className='text-xs text-center'>The value here as been rounded off. </p>
      </div>
    </div>
  )
}

export default NetProfit;