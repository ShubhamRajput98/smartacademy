import React from 'react';
import Image from 'next/image';
import { Background } from '@/app/svg/Svg';
import Girl from "../../svg/girl.svg";
import Book from "../../svg/book.svg";
import Boy from "../../svg/boy.svg";
import Play from "../../svg/play.svg";
import Star4 from "../../assist/Group 64.png";
import Robot from "../../assist/robot.png";
import Discoverimage from "../../assist/discoverimage.png";


const Discover = () => {
    return (
        <div className='container mx-auto relative xl:px-4'>
            {/* background images */}
            <div className="absolute top-[-52px] left-[-26px] xl:left-0">
                <Image src={Star4} alt="star" />
            </div>
            <div className="absolute bottom-[-26px] right-[-6px] xl:right-0">
                <Image src={Star4} alt="star" />
            </div>


            <div className="px-10 flex justify-between items-center xl:px-0 xmd:flex-wrap xmd:justify-center xmd:gap-12">
                {/* left side */}
                <div className='xmd:w-full'>
                    <div className="heading">
                        <p className='text-theme font-fuzzy xmd:text-center mb-2'>Get to know about us</p>
                        <h1 className='text-lightblack font-bold text-[36px] capitalize leading-[48px] xmd:text-center'>discover top instructors<br />
                            around the world
                        </h1>
                        <p className='text-extralightblack text-[15.5px] leading-[22.5px] mt-3 font-normal capitalize xmd:text-center'>Explore global experts who are leading in their fields, offering <br className='xmd:hidden' />
                            unparalleled knowledge and guidance as top <br className='xmd:hidden' />
                            instructors from every corner of the world.</p>
                    </div>


                    <div className="mt-6 flex flex-wrap items-center gap-[5.5em] xmd:justify-center sm:gap-4">
                        <Card Picture={Girl} color={"#DBDBDB"} up={"4px"} left={"8px"} heading={"12,500"} sub={"expert tutors"} />
                        <Card Picture={Book} color={"#F0B5CB"} up={"6px"} left={"12px"} heading={"100k+"} sub={"top lessons"} />

                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-[5.5em] xmd:justify-center sm:gap-4">
                        <Card Picture={Boy} color={"#96A5C3"} up={"4px"} left={"8px"} heading={"56,556+"} sub={"over students"} />
                        <Card Picture={Play} color={"#9AAEDF"} up={"10px"} left={"10px"} heading={"23,890"} sub={"pro videos"} />

                    </div>


                    <div className="button mt-12 xmd:flex xmd:justify-center">
                        <button className='outline-0 border-0 rounded-full bg-theme w-[159px] h-[44px] text-white font-bold hover:bg-[#8708c2d1]'>explore more</button>
                    </div>
                </div>


                {/* right side */}

                <div className="image z-[2] relative">
                    <div className="absolute top-[-60px] left-[-57px] z-[1]">
                        <Image src={Robot} alt="star" />
                    </div>

                    <Image src={Discoverimage} alt='Discoverimage' className='z-[2] relative' />
                </div>
            </div>
        </div>
    );
};

export default Discover;


const Card = ({ Picture, color, up, left, heading, sub }) => {
    return (
        <div className="flex justify-center items-center gap-4">
            <div className="image relative">
                <Background color={color} />
                <Image src={Picture} alt={color} style={{ top: up, left: left }} className={`absolute`} />
            </div>

            <div className="text">
                <h4 className='text-[20px] font-semibold text-lightblack'>{heading}</h4>
                <p className='text-lightblack font-normal'>{sub}</p>
            </div>
        </div>
    );
};