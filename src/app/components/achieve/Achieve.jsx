import Image from 'next/image';
import React from 'react';
import Laptop from "../../assist/laptop.png";


const Achieve = () => {
    return (
        <div className='xl:px-4 xmd:py-10'>

            <div className="flex justify-between items-center ps-28 2xl:ps-[9.5em] xl-pl-3 lg-pl-3 xmd:flex-wrap xmd:ps-0 ">
                {/* left side */}
                <div className='xmd:w-full'>
                    <div className="heading">
                        <h2 className='text-white font-semibold text-[28px] capitalize xmd:text-center leading-[34px]'>achieve your goal with</h2>
                        <h4 className='text-white text-2xl font-semibold capitalize xmd:text-center leading-[34px]'>smart academy</h4>

                        <p className='text-[#EDEDED] font-medium text-sm mt-2 leading-[
21px] xmd:text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                            Lorem Ipsum has been the industry's standard dummy <br />
                            text ever since the 1500s. </p>
                    </div>

                    <div className="mt-5 flex xmd:justify-center">
                        <button className='outline-0 border-0 bg-theme text-white font-semibold capitalize w-[159px] h-[38px] rounded-[10px] hover:bg-[#8708c2d1]'>register here</button>
                    </div>
                </div>

                {/* right side */}

                <div className='xmd:hidden'>
                    <Image src={Laptop} alt='Laptop' />
                </div>
            </div>
        </div>
    );
};

export default Achieve;
