import Link from 'next/link'
import React from 'react'
import { CiLocationArrow1 } from 'react-icons/ci';


const Footer = () => {
  return (
    <div className='p-5 md:p-20'>
        <div className='lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-3 text-[#7E92AC] gap-14'>
            <div className='space-y-4'>
                <h4 className='font-semibold text-2xl text-black'>About Real Track</h4>
                <p className='text-justify'>Aliquam fermentum tellus vitae nisl dictum vel sodales diam molestie. Pellentesque nec orci posuere, feugiat quam sed. Nam tincidunt lectus quis nibh ultrices, vitae congue risus porta mauris eros.</p>
            </div>
            
            <div className='flex flex-col gap-4'>
                <h4 className='font-semibold text-2xl text-black'>Quick Link</h4>
                <Link href="#">Home</Link>
                <Link href="#">Testimonail</Link>
                <Link href="#">Features</Link>
                <Link href="#">Contact Us</Link>                
            </div>
            
            <div className='flex flex-col gap-4'>
                <h4 className='font-semibold text-2xl text-black'>Subscribe Our Newsletter</h4>
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
            </div>
        </div>
    </div>
  )
}

export default Footer