import Link from 'next/link'
import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci';
import { BiLogoFacebook, BiLogoLinkedin  } from 'react-icons/bi';
import { AiOutlineTwitter  } from 'react-icons/ai';




const Footer = () => {
  return (
    <div className='p-5 md:p-20'>
        <div className='lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-3 text-[#7E92AC] gap-14'>
            <div className='space-y-4'>
                <h4 className='font-semibold text-2xl text-black'>About Real Track</h4>
                <p className='text-justify'>We are the driving force behind real estate success! Explore our game changing tools for seamless financials, project mastery, and instant property insight. Join us and reshape the future of real estate</p>
            </div>
            
            <div className='flex flex-col gap-4'>
                <h4 className='font-semibold text-2xl text-black'>Quick Link</h4>
                <Link href="#homeSection">Home</Link>
                {/* <Link href="#">Testimonail</Link> */}
                <Link href="#featuresSection">Features</Link>
                <Link href="#inquirySection">Contact Us</Link>                
            </div>
            
            <div className='flex flex-col gap-4'>
                <h4 className='font-semibold text-2xl text-black'>Subscribe to Our Newsletter</h4>
                <div className='flex flex-col md:flex-row'>
                    <input 
                        type="text" 
                        className='border border-gray-300 rounded-tl-md rounded-bl-md outline-none py-2 px-5' 
                        placeholder='Enter Email Address'
                    />
                    <button className='flex items-center bg-yellow-400 py-2 px-5 rounded-tr-md rounded-br-md text-white gap-2'>
                        SUBSCRIBE
                        <CiLocationArrow1 />
                    </button>
                </div>
                <div className='flex gap-3 mt-3'>
                    <Link href="#" className='bg-[#5B2AEE] text-white h-[50px] w-[50px] rounded-full flex items-center justify-center hover:bg-opacity-80'><BiLogoFacebook size={30} /> </Link>
                    <Link href="#" className='bg-[#5B2AEE] text-white h-[50px] w-[50px] rounded-full flex items-center justify-center hover:bg-opacity-80'><AiOutlineTwitter size={30} /> </Link>
                    <Link href="#" className='bg-[#5B2AEE] text-white h-[50px] w-[50px] rounded-full flex items-center justify-center hover:bg-opacity-80'><BiLogoLinkedin size={30} /> </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer