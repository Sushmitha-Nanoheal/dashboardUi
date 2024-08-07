import React from 'react';
import { Card, CardBody, Button, CardFooter, CardHeader, Select, SelectItem, NextUIProvider } from "@nextui-org/react";
import RecentOrders from './RecentOrders';
import { firstSlice } from '../Navbar/NavbarItems';
import CustomBarChart from '../Charts/BarChart';
import { ThemeProvider as NextThemesProvider } from "next-themes";

const FirstSlice = () => {
    const dataItems = firstSlice();

    const workReport = [
        { key: "Weekly", label: "Weekly" },
        { key: "Monthly", label: "Monthly" },
        { key: "Yearly", label: "Yearly" },
    ];
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex gap-4 w-full grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4'>
                {dataItems?.map((data) => {
                    return <Card className='w-full h-[130px]'>
                        <CardBody className="">
                            <Button isIconOnly color='primary' variant="flat" size='md' radius='full'>
                                {data.icon}
                            </Button>
                            <p className='text-xs text-foreground'>{data.title}</p>
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b className='font-bold text-2xl'>{data.count}</b>
                            <p className={`items-center flex gap-1 ${data.ratio ? "text-danger" : 'text-success'}`}>
                                {data.arrow}{data.percent}
                            </p>
                        </CardFooter>
                    </Card>
                })}
            </div>
            <div>
                <Card className='w-full h-[230px]'>
                    <CardHeader className="pb-0 pt-4 pb-0 pl-8 pr-4 flex-row items-start justify-between">
                        <p className="text-xl font-base w-full">Activity</p>
                        <NextUIProvider theme='dark' className='w-full flex justify-end'>
                            <NextThemesProvider attribute="class" defaultTheme="dark">
                                <Select
                                    key={"full"}
                                    radius={"full"}
                                    size='sm'
                                    defaultSelectedKeys={["Weekly"]}
                                    className="max-w-[96px] max-h-[28px]"
                                >
                                    {workReport?.map((report) => (
                                        <SelectItem key={report.key} className='text-xs'>
                                            {report.label}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </NextThemesProvider>
                        </NextUIProvider>
                    </CardHeader>
                    <CardBody>
                        <CustomBarChart />
                    </CardBody>
                </Card>
            </div>
            <div>
                <Card className='w-full h-[450px] p-0'>
                    <CardHeader className="pb-0 pt-4 pb-0 px-8 flex-col items-start">
                        <p className="text-xl font-base">Recent Orders</p>
                    </CardHeader>
                    <CardBody className=''>
                        <RecentOrders />
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default FirstSlice;