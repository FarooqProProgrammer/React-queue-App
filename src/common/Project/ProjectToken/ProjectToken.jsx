import React from 'react'
import "./index.css"


const ProjectToken = ({image}) => {
  return (
    <div className='lg:w-[250px] h-[250px] md:w-full sm:w-full'>
            <img src={image} alt="" className='w-full h-full'/>
    </div>
  )
}

export default ProjectToken