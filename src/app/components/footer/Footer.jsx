import Image from 'next/image';
import React from 'react';
import Logo from "../../assist/Logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { LiaFacebookF } from "react-icons/lia";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='container mx-auto py-10 xl:px-4'>
            <div className="flex flex-wrap justify-between gap-4 border-b border-kai pb-12 xmd:justify-start">
                {/* logo */}
                <div className="footer-col">
                    <Image src={Logo} alt='Logo' />
                    <p className='text-xs text-lightblack font-normal mt-4'>Learn from the best instructors <br />
                        to gain insights, master skills, <br />
                        and excel in your endeavors.</p>
                </div>

                {/* Products */}

                <div className="footer-col">
                    <h4 className='text-kai text-xs font-bold'>Products</h4>
                    <ul className='flex flex-col gap-2 mt-4'>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Catalog</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Prepaid cards</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Gift cards</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Money</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Charity</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Amazon.com gift cards</li>
                    </ul>
                </div>

                {/* Solutions */}

                <div className="footer-col">
                    <h4 className='text-kai text-xs font-bold'>Solutions</h4>
                    <ul className='flex flex-col gap-2 mt-4'>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>For developers</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>For Sales</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>For research professionals</li>
                        <li className='text-xs text-lightblack font-normal'>For human resources</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>For UX researchers</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>For market reaerchers</li>
                    </ul>
                </div>

                {/* Resources */}

                <div className="footer-col">
                    <h4 className='text-kai text-xs font-bold'>Resources</h4>
                    <ul className='flex flex-col gap-2 mt-4'>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Pricing</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Blog</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Case studies</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Help center</li>
                    </ul>
                </div>

                {/* Developers */}

                <div className="footer-col">
                    <h4 className='text-kai text-xs font-bold'>Developers</h4>
                    <ul className='flex flex-col gap-2 mt-4'>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>API</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Status</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Documentation</li>
                    </ul>
                </div>

                {/* Company */}

                <div className="footer-col">
                    <h4 className='text-kai text-xs font-bold'>Company</h4>
                    <ul className='flex flex-col gap-2 mt-4'>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>About Us</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>History</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>VC-free</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>News</li>
                        <li className='text-xs text-lightblack font-normal cursor-pointer hover:text-theme'>Careers</li>
                    </ul>
                </div>


            </div>

            <div className="flex flex-wrap justify-between items-center gap-4 mt-4">
                {/* left */}
                <div className="flex flex-wrap gap-4">
                    <p className='text-kai font-medium text-xs'>© 2023 smartacademy.Ltd.</p>
                    <ul className='flex items-center gap-4'>
                        <li className='text-kai text-xs font-semibold cursor-pointer hover:text-theme'>Terms</li>
                        <li className='text-kai text-xs font-semibold cursor-pointer hover:text-theme'>Privacy</li>
                        <li className='text-kai text-xs font-semibold cursor-pointer hover:text-theme'>Security</li>
                        <li className='text-kai text-xs font-semibold cursor-pointer hover:text-theme'>Cookies</li>
                    </ul>
                </div>
                {/* right */}

                <ul className='flex items-center gap-4'>
                    <li><AiFillYoutube className='text-kai text-2xl cursor-pointer hover:text-theme' /></li>
                    <li><LiaFacebookF className='text-kai text-xl cursor-pointer hover:text-theme' /></li>
                    <li><AiFillInstagram className='text-kai text-2xl cursor-pointer hover:text-theme' /></li>
                </ul>

            </div>
        </div>
    );
};

export default Footer;
