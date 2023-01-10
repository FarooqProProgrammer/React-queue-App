import React from 'react'
import "./Project.css"
import ProjectToken from './ProjectToken/ProjectToken'
import Mobile from "../../assets/Mobile.png"
import Hospital from "../../assets/hospital.png"
import Gym from "../../assets/Gym.png"
import Uber from "../../assets/Uber app.png"
const Project = () => {
  return (
    <div className='w-full lg:h-[600px] md:lg-[auto] sm:h-[auto]'>
        <div className="title w-full h-[70px]  flex justify-center items-center">
         <p className='text-4xl'>Project Section</p>
        </div>
        
        <div className="projectSection w-full lg:h-[530px] md:lg-[auto] sm:h-[auto]  grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-1 place-items-center">
            <ProjectToken image={Mobile}/>
            <ProjectToken image={Hospital}/>
            <ProjectToken image={Gym}/>
            <ProjectToken image={Uber}/>
            
        </div>
        
    </div>
  )
}

export default Project