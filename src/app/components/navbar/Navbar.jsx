"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "../../assist/Logo.png";
import Search from "../../assist/search.png";
import Catagory from "../../assist/catagry.png";
import Cart from "../../assist/Cart.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='container mx-auto xl:px-4'>
            <div className="flex justify-between items-center h-[100px] bg-white md:justify-start">
                {/* logo */}
                <div className="logo">
                    <Image src={Logo} width="104" height="70" alt='Logo' />
                </div>

                {/* nav links */}

                <ul className={`navlinks ${toggle && 'active'} flex items-center gap-8`}>
                    <li className='font-semibold text-sm text-lightblack cursor-pointer hover:text-theme font-montserrat'>HOME</li>
                    <li className='font-semibold text-sm text-lightblack cursor-pointer hover:text-theme font-montserrat'>COURSES</li>
                    <li className='font-semibold text-sm text-lightblack cursor-pointer hover:text-theme font-montserrat'>SHOP</li>
                    <li className='font-semibold text-sm text-lightblack cursor-pointer hover:text-theme font-montserrat'>BLOGS</li>
                </ul>

                <div className="flex gap-3 md:flex-wrap md:justify-center md:ms-auto md:me-4">
                    <div className="relative md:hidden">
                        <input type="text" placeholder='search for course' className='outline-0 border border-theme rounded-xl w-[214px] h-[40px] px-4 ps-10 placeholder:text-theme placeholder:font-semibold placeholder:text-sm placeholder:font-montserrat placeholder:uppercase' />
                        <Image src={Search} alt='Search' className='absolute top-1/2 left-4 translate-y-[-50%]' />
                    </div>

                    <button className='outline-0 border-0 rounded-xl bg-extrimlighttheme text-theme categories font-semibold text-sm font-montserrat h-[40px] px-4 flex justify-center items-center gap-2 md:hidden'>
                        <Image src={Catagory} alt='catagory' />
                        CATEGORIES
                    </button>



                    {/* cart icon */}
                    <div className="flex items-center gap-10 ms-4 md:m-0 sm:gap-6">
                        <div className="cart relative bg-[#FAEFFF] rounded-lg p-2">
                            <Image src={Cart} alt='cart' className='cursor-pointer' />
                            <div className="absolute top-[-8px] right-[-8px] text-[12px] bg-theme h-[16px] w-[16px] rounded-full flex justify-center items-center">
                                <span className='text-white mt-[0.1px]'>0</span>
                            </div>
                        </div>

                        {/* login */}
                        <button className='outline-0 border-0 font-montserrat text-sm leading-[24px] bg-theme text-white font-semibold h-[40px] px-6 rounded-xl hover:bg-[#8708c2d1]'>LOGIN</button>
                    </div>
                </div>


                <div className="burgru hidden xl:block">
                    <GiHamburgerMenu onClick={() => setToggle(!toggle)} className='cursor-pointer' fontSize={25} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
