import React from 'react'
import car_imgs1 from'../assets/car1.png'
import car_imgs2 from'../assets/car2.png'
import car_imgs3 from'../assets/car3.png'
const Categories = () => {
  return (
    <div className=' bg-white space-y-4'>
      <h1 className=' text-center text-[2.3rem] font-bold '>Top
         <span className='text-[#EA3C3C]'>Categories</span></h1>

         <div className="">
         <ul className=' flex space-x-5 justify-center '>
            <li><a className='  font-semibold  hover:border-b-2 border-black text-gray-500 hover:text-black pb-[0.4rem] ' href="">Home</a></li>
            <li><a className=' font-semibold  hover:border-b-2 border-black  text-gray-500 hover:text-black pb-[0.4rem] ' href="">About</a></li>
            <li><a className='  font-semibold hover:border-b-2 border-black  text-gray-500 hover:text-black pb-[0.4rem]  ' href="">Vehicle Register</a></li>
            <li><a className='  font-semibold  hover:border-b-2 border-black text-gray-500 hover:text-black pb-[0.4rem] ' href="">Categories</a></li>
        </ul>
         </div>

      <div className="flex justify-center space-x-3">
        <div className=" w-[300px] h-[300px] bg-white shadow-lg  ">
            <img className=' w-full' src={car_imgs1} />
        </div>
        <div className=" w-[300px] h-[300px] bg-white shadow-lg ">
        <img className='w-full' src={car_imgs1} />
        <h1 className=' text-[1.2rem] font-semibold  text-center'>Minivans</h1>
        <p className=' tex'>Compact yet versatile for everyday use</p>
        </div>
        <div className="  w-[300px] h-[300px] bg-white shadow-lg ">
        <img className='w-full' src={car_imgs1} />
        </div>
      </div>
    </div>
  )
}

export default Categories
