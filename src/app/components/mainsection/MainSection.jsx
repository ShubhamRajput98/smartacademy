"use client";
import React from 'react';
import Image from 'next/image';
import Video from "../../assist/video.png";
import Stars from "../../assist/stars.png";
import MainImage from "../../assist/mainimg.png";
import Group1 from "../../assist/Group 87.png";
import Group2 from "../../assist/Group 88.png";
import Group3 from "../../assist/Group 89.png";
import Group4 from "../../assist/Group 90.png";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules

const MainSection = () => {
    return (
        <div className='container mx-auto py-36 relative xl:px-4'>
            <div className="flex justify-between gap-6 xmd:flex-wrap xmd:justify-center xmd:items-center xmd:flex-col-reverse">
                {/* side heading */}
                <div>
                    <div className="heading">
                        <p className='text-theme font-fuzzy'>100% satisfaction guarantee</p>
                        <h1 className='text-lightblack font-bold text-[60px] capitalize leading-[80px] lg:text-[52px] lg:leading-[70px] sm:text-[39px] sm:leading-[49px]'>learn skills from <br className='sm:hidden' />
                            our top instructors
                        </h1>
                        <p className='text-extralightblack text-[18px] leading-[30px] mt-4 font-normal'>Enhance your skills with guidance from our premier instructors. <br className='sm:hidden' />
                            Our website offers a unique opportunity to learn from <br className='sm:hidden' />
                            the best, gaining expertise in various fields.</p>
                    </div>

                    <div className="flex items-center gap-7 mt-12">
                        <button className='outline-0 border-0 bg-theme text-white rounded-xl px-[1.6em] py-2 capitalize hover:bg-[#8708c2d1]'>sign up now</button>
                        <button className='outline-0 border-0 flex items-center gap-2'>
                            <Image src={Video} alt='Video' />
                            <span className='text-theme font-light text-xl capitalize'>how it works</span>
                        </button>
                    </div>

                    <p className='mt-6 text-extralightblack font-normal capitalize'>trusted by over 5 million+ students <br />
                        worldwide since 2003
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                        <h4 className='text-[15px] font-semibold text-lightblack capitalize'>500k+ reviews</h4>
                        <p className='text-[15px] font-bold text-lightblack capitalize'>4.5</p>
                        <Image src={Stars} alt='Stars' />
                    </div>
                </div>

                {/* main image */}

                <div className="image">
                    <Image src={MainImage} alt='MainImage' />
                </div>


                {/* bottom content */}




                <div className="absolute bottom-[-63px] left-0 w-full flex flex-wrap justify-between items-center  xl:px-4">

                    <div className="w-full">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={40}
                            containerModifierClass="mySwiper-"
                            loop={true}
                            breakpoints={{
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },

                                980: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },

                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                420: {
                                    slidesPerView: 1,
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
                            <SwiperSlide><Card Cardimg={Group1} heading={'50k+'} sub={'online courses'} /></SwiperSlide>
                            <SwiperSlide><Card Cardimg={Group2} heading={'12k+'} sub={'expert tutors'} /></SwiperSlide>
                            <SwiperSlide><Card Cardimg={Group3} heading={'10k+'} sub={'certified courses'} /></SwiperSlide>
                            <SwiperSlide><Card Cardimg={Group4} heading={'150k+'} sub={'students'} /></SwiperSlide>
                            <SwiperSlide><Card Cardimg={Group1} heading={'50k+'} sub={'online courses'} /></SwiperSlide>
                            <SwiperSlide><Card Cardimg={Group2} heading={'12k+'} sub={'expert tutors'} /></SwiperSlide>
                            <SwiperSlide><Card Cardimg={Group3} heading={'10k+'} sub={'certified courses'} /></SwiperSlide>
                            <SwiperSlide><Card Cardimg={Group4} heading={'150k+'} sub={'students'} /></SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;


const Card = ({ Cardimg, heading, sub }) => {
    return (
        <div className="card w-full bg-white px-3 py-4 flex items-center gap-3 rounded-[20px] shadow-cardshadow">
            <Image src={Cardimg} alt='Group1' />
            <div>
                <h4 className='text-lightblack font-semibold text-[15px]'>{heading}</h4>
                <p className='text-lightblack font-normal text-[15px] capitalize'>{sub}</p>
            </div>
        </div>
    );
};
