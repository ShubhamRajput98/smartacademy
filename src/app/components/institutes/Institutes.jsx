import React from 'react';
import Image from 'next/image';
import Frame1 from "../../assist/Frame 123.png";
import Frame2 from "../../assist/Frame 132.png";
import Frame3 from "../../assist/Group 136.png";
import Frame4 from "../../assist/Group 134.png";
import Frame5 from "../../assist/Group 131.png";
import Frame6 from "../../assist/Group 132.png";
import Frame7 from "../../assist/Group 135.png";
import Frame8 from "../../assist/Group 138.png";
import Frame9 from "../../assist/Group 137.png";
const Institutes = () => {
    return (
        <div className='container mx-auto py-24 xl:px-4'>
            <div className="heading">
                <h2 className='text-2xl font-bold capitalize xmd:text-center'>these institutes trust us</h2>
                <p className='font-normal text-[15px] capitalize text-extralightblack xmd:text-center'>Institutes rely on our expertise, experience, and proven track record. Trust <br className='xmd:hidden' /> us for innovative solutions and reliable support.
                </p>
            </div>

            <div className="flex flex-wrap justify-between items-center mt-16 sm:justify-center sm:gap-6">
                <Image src={Frame1} alt='Frame1' />
                <Image src={Frame2} alt='Frame2' />
                <Image src={Frame3} alt='Frame3' />
                <Image src={Frame4} alt='Frame4' />
                <Image src={Frame5} alt='Frame5' />

            </div>

            <div className="flex flex-wrap justify-between items-center mt-16 sm:justify-center sm:gap-6">
                <Image src={Frame6} alt='Frame6' />
                <Image src={Frame7} alt='Frame7' />
                <Image src={Frame8} alt='Frame8' />
                <Image src={Frame9} alt='Frame9' />
                <Image src={Frame3} alt='Frame3' />
            </div>
        </div>
    );
};

export default Institutes;
