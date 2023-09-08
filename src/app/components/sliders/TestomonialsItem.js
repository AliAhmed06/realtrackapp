import React from 'react'

const TestomonialsItem = ({name, designation, img, text}) => {
  return (
    <div className=' flex flex-col items-center justify-center p-5 rounded-md bg-white shadow-md'>
        <img src={img} alt="" />
        <h4 className='font-bold text-lg mt-5'>{name}</h4>
        <p className='text-gray-400 text-sm'>{designation}</p>
        <p className='text-center text-gray-400 mt-5'>{text}</p>
        <img src="/images/rating.png" alt="" className='mt-5 h-[14px]' />
    </div>
  )
}

export default TestomonialsItem