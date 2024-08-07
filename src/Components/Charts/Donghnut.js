// src/DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {CircularProgress} from "@nextui-org/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const data = {
        labels: ['Filled', 'Empty'],
        datasets: [
            {
                label: '',
                data: [70, 30],
                backgroundColor: ['rgba(52, 116, 235,1)', 'rgba(255, 255, 255, 0.2)'],
                borderColor: ['rgba(52, 116, 235,1)', 'rgba(255, 255, 255, 0)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context) => `Value: ${context.raw}`,
                },
            },
        },
        
    };

    

    return (
        <>
         <CircularProgress
          classNames={{
            svg: "w-20 h-20 drop-shadow-md",
            indicator: "stroke-primary",
            track: "stroke-white/10",
            value: "text-md font-semibold text-white",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
        </>
    );
};

export default DoughnutChart;
