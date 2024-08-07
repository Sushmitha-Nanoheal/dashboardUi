import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Accordian from './Accordian';
import CustomerFeedback from './CustomerFeedback';
import NetProfit from './NetProfit';

const SecondSlice = () => {
    return (
        <div className='flex flex-col justify-between gap-6'>
            <Card className='w-full h-[130px] p-4'>
                    <NetProfit />
            </Card>
            <Card className='w-full h-[230px] overflow-auto'>
                <Accordian />
            </Card>
            <Card className='w-full h-[450px]'>
                <CardHeader className="pb-0 pt-4 pb-0 px-8 flex-col items-start">
                    <p className="text-xl font-base">Customer's Feedback</p>
                </CardHeader>
                <CardBody>
                    <CustomerFeedback />
                </CardBody>
            </Card>
        </div>
    )
}

export default SecondSlice;