import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from '../assets/code.jpg'
import { checklistItems } from '../constants'
import video from '../assets/video-caixa.mp4'
const Workflow = () => {
  return (
    <div className="mt-20">
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-[#4c050f]'>Nossas caixas</h2>
        <div className="flex flex-wrap justify-center">
        <div className='flex justify-center items-center p-2 w-full lg:w-1/2'>
  <video autoPlay loop muted className='p-4  justify-center align-center text-center tracking-wide'>
    <source src={video} type="video/mp4"/>
  </video>
</div>
<div className='mt-80 pb-30 lg:w-1/2'>
  {checklistItems.map((item,index)=>(
    <div key={index} className='flex mb-10'> 
      <div className='text-green-400 mx-6  p-2 justify-center items-center rounded-full'>
        <CheckCircle2/>
      </div>
      <div>
        <h5 className='mt-1 mb-2 text-xl'>
          {item.title}
        </h5>
      </div>
    </div>   
  ))}
</div>
        </div>
    </div>
    
  )
}

export default Workflow