import Link from 'next/link';
import React from 'react';

const NewsLetter = () => {
    return (
        <div className='container mx-auto py-24 xl:px-4'>
            <div className="flex justify-between items-center gap-4 xmd:flex-wrap xmd:justify-center">
                {/* left */}
                <div className="heading xmd:w-full">
                    <h2 className='text-4xl leading-[44px] text-lightblack font-bold capitalize xmd:text-center lg:text-3xl lg:leading-[44px]'>Sign up for our newsletter</h2>
                    <p className='mt-3 font-normal text-xl leading-[30px] capitalize text-extralightblack xmd:text-center lg:text-base'>Stay in the loop with everything you need to know.
                    </p>
                </div>

                {/* right */}
                <div>
                    <div className="flex flex-wrap sm:flex-wrap sm:justify-center gap-4">
                        <input type="email" placeholder='Enter your email' className='px-3 outline-0 border border-[#D5DAE1] rounded-lg w-[320px] h-[40px] sm:w-full' />

                        <button className='bg-theme text-white rounded-md w-[117px] h-[40px] hover:bg-[#8708c2d1]'>Subscribe</button>
                    </div>

                    <p className='text-xs text-[#556987] font-medium mt-2 md:text-center'>We care about your data in our <Link href={"#"} className='text-theme'>privacy policy</Link></p>
                </div>
            </div>


        </div>
    );
};

export default NewsLetter;
