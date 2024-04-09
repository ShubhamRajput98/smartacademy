"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import Man1 from '../../assist/Rectangle 80.png';
import Man2 from '../../assist/Rectangle 82.png';
import Man3 from '../../assist/Rectangle 83.png';
import Girl from '../../assist/Rectangle 84.png';

const Instrutors = () => {
    return (
        <div className='container mx-auto py-10 xl:px-4'>
            <div className="heading">
                <h2 className='text-white text-2xl font-bold capitalize xmd:text-center'>learn from the best instructors</h2>
                <p className='text-white font-normal text-[15px] capitalize text-extralightblack xmd:text-center'>Learn from the best instructors to gain insights, master skills, and excel in your endeavors. Their <br className='xmd:hidden' /> expertise accelerates your progress.
                </p>
            </div>

            <div className="w-full mt-8">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    className="mySwiper"
                    loop={true}
                    breakpoints={{
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },

                        980: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        414: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },

                    }}
                >
                    <SwiperSlide><Card Cardimg={Man1} /></SwiperSlide>
                    <SwiperSlide><Card Cardimg={Man2} /></SwiperSlide>
                    <SwiperSlide><Card Cardimg={Man3} /></SwiperSlide>
                    <SwiperSlide><Card Cardimg={Girl} /></SwiperSlide>
                    <SwiperSlide><Card Cardimg={Man1} /></SwiperSlide>
                    <SwiperSlide><Card Cardimg={Man2} /></SwiperSlide>
                    <SwiperSlide><Card Cardimg={Man3} /></SwiperSlide>
                    <SwiperSlide><Card Cardimg={Girl} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Instrutors;


const Card = ({ Cardimg, }) => {
    return (
        <div className="card w-full ">
            <Image src={Cardimg} alt='Group1' className='w-full' />
            {/* <div>
                <h4 className='text-lightblack font-semibold text-[15px]'>{heading}</h4>
                <p className='text-lightblack font-normal text-[15px] capitalize'>{sub}</p>
            </div> */}
        </div>
    );
};