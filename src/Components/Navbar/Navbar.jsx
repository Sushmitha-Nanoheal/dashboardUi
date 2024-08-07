import React from 'react';
import { Avatar } from "@nextui-org/react";
import { NavbarItems } from './NavbarItems';
import Header from './Header';
import { Outlet, useLocation, NavLink } from "react-router-dom";

const Navbar = () => {
   const navbarItems = NavbarItems();
   const location = useLocation();
   const URLPath = location.pathname.split("/");
   return (
      <div className='bg-background flex flex-row '>
         <div className='h-screen border-r border-divider w-[60px]'>
            <div className='flex flex-col h-full justify-between'>
               <div className='flex flex-col gap-6 w-full justify-center'>
                  <div className=' p-3'>
                     <Avatar src='https://w7.pngwing.com/pngs/982/791/png-transparent-dashboard-computer-icons-report-computer-software-information-others-text-orange-logo.png' radius='full' size='sm' />
                  </div>
                  {navbarItems?.map((data, index) => {
                     console.log("URLPath", URLPath)
                     const Verified = URLPath[1] === '' && URLPath[2] === '' ? true : `/${URLPath[1]}` === data.path;
                     console.log("Verified", Verified)
                     return <NavLink to={data.path}>
                        <div className={`flex justify-center ${Verified ? 'text-primary border-l-3 border-primary' : ''}`}>
                           <lord-icon
                              src={data.icon}
                              trigger="hover"
                              state="morph-book"
                              target="#KnowledgeBase"
                              colors={`primary:${Verified === true ? "#006FEE" : "#ffffff"}`}
                              style={{ width: "24px", height: "24px" }}>
                           </lord-icon>
                        </div>
                     </NavLink>
                  })}
               </div>
               <div className='flex justify-center pb-2'>
                  <i class="fa-solid fa-arrow-right-from-bracket" style={{ "color": "#ffffff" }}></i>
               </div>
            </div>
         </div>
         <div className='w-full'>
            <Header />
            <div className='h-[calc(100vh-70px)] overflow-auto'>
               <div className='max-w-6xl mx-auto'>
                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar;