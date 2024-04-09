import React from 'react';
import Image from 'next/image';
import Design from '../../assist/design.png';
import WebDevelopment from '../../assist/webdevelopment.png';
import AppDevelopment from '../../assist/appdevelopment.png';
import Dataanaylyst from '../../assist/dataanalyst.png';
import Articals from '../../assist/artificial.png';
import Cyber from '../../assist/syber.png';
import Project from '../../assist/projectmenager.png';
import Business from '../../assist/buisness.png';


const Category = () => {
    return (
        <div className='container mx-auto py-36 xl:px-4'>
            <div className="heading">
                <h2 className='text-2xl font-bold capitalize xmd:text-center'>our top category</h2>
                <p className='font-normal text-[15px] capitalize text-extralightblack xmd:text-center'>Explore global experts who are leading in their fields, offering unparalleled knowledge and <br className='xmd:hidden' /> guidance as top instructors from every corner of the world.</p>
            </div>

            <div className="mt-7 flex flex-wrap justify-between items-center gap-9 xl:justify-center">
                <CategoryCard Picture={Design} sub={'Desing'} />
                <CategoryCard Picture={WebDevelopment} sub={'Web Development'} />
                <CategoryCard Picture={AppDevelopment} sub={'App Development'} />
                <CategoryCard Picture={Dataanaylyst} sub={'data analyst'} />
                <CategoryCard Picture={Articals} sub={'artificial intelligence'} />
                <CategoryCard Picture={Cyber} sub={'cyber security'} />
                <CategoryCard Picture={Project} sub={'project management'} />
                <CategoryCard Picture={Business} sub={'business'} />
            </div>
        </div>
    );
};

export default Category;



const CategoryCard = ({ Picture, sub }) => {
    return (
        <div className="relative shadow-imageshadow overflow-hidden rounded-3xl">
            <Image src={Picture} alt={sub} />
            <div className="absolute bottom-3 left-1/2 translate-x-[-50%]">
                <p className='text-[15px] z-10 font-medium text-white text-nowrap capitalize'>{sub}</p>
            </div>
        </div>
    );
};
