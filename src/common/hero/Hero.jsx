import React from 'react'
import "./Hero.css"
import profile from "../../assets/download.png"

const Hero = () => {
  return (
    <div className='hero flex lg:flex-row  justify-around items-center md:flex-col sm:flex-col'>
            <div className="leftBox flex flex-col justify-around items-center lg:w-[500px] lg:h-[200px]  md:w-[100%] md:h-[50%]">
                    <h1 className='text-4xl'>Muhammad Farooq</h1>
                    <p className='w-[70%] pl-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, aspernatur?</p>
                    <button className='border-2 pl-3 pb-3 pt-3 pr-3 bg-[#3498db] text-white hover:ml-6'> Download Cv</button>
            </div>
            <div className="rightBox lg:w-[300px] lg:h-[400px]  md:w-[100%] md:h-[50%]   ">
                <img src={profile} alt="" className='w-full h-full'/>
            </div>
    </div>
  )
}

export default Hero