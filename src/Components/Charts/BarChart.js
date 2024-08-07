import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { name: '5', uv: 4000 },
    { name: '9', uv: 3000 },
    { name: '11', uv: 2000 },
    { name: '13', uv: 2780 },
    { name: '15', uv: 1890 },
    { name: '17', uv: 2390 },
    { name: '19', uv: 3490 },
    { name: '21', uv: 2000 },
    { name: '23', uv: 2780 },
    { name: '25', uv: 1890 },
    { name: '27', uv: 2390 },
    { name: '29', uv: 2290 },
    { name: '31', uv: 2340 },
    { name: '33', uv: 2380 },
    { name: '35', uv: 2380 },
    { name: '37', uv: 2380 },
];


const CustomBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={162}>
            <BarChart
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="none" horizontal={true} vertical={false} />
                <XAxis dataKey="name" />
                <YAxis tickLine={false} axisLine={false} />
                <Bar dataKey="uv" fill="#006FEE" radius={[20, 20, 0, 0]} barSize={20} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default CustomBarChart;
