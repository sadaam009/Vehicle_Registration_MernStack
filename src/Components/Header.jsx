import React from 'react'

const Header = () => {
  return (
    <div className='flex  justify-between items-center mx-[5rem] mt-[1rem] '>
      <h1 className=' text-[1.5rem] text-[#EA3C3C] font-semibold font-Poppins '>CarLink</h1>

      {/* Navigation Bars */}
      <div className="">
        <ul className=' flex space-x-5 '>
            <li><a className='  font-semibold  hover:border-b-2 border-black text-gray-500 hover:text-black pb-[0.4rem] ' href="">Home</a></li>
            <li><a className=' font-semibold  hover:border-b-2 border-black  text-gray-500 hover:text-black pb-[0.4rem] ' href="">About</a></li>
            <li><a className='  font-semibold hover:border-b-2 border-black  text-gray-500 hover:text-black pb-[0.4rem]  ' href="">Vehicle Register</a></li>
            <li><a className='  font-semibold  hover:border-b-2 border-black text-gray-500 hover:text-black pb-[0.4rem] ' href="">Categories</a></li>
        </ul>
      </div>

    {/* Botton Container */}
      <div className="flex space-x-3">
       <button  className=' bg-[#EA3C3C] text-white py-2 px-7 rounded-md text-[1rem]  font-semibold  '>Login</button>
       <button className=' bg-[#EA3C3C] text-white py-2 px-7 rounded-md text-[1rem]  font-semibold  '>SignUp</button>
      </div>
    </div>
  )
}

export default Header
