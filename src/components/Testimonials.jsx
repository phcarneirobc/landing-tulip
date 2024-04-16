import React from 'react'
import { testimonials } from '../constants/index'

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-[#4c050f]'>Algumas das empresas que já trabalhamos</h2>
        <div className='flex flex-wrap justify-center'>
            {testimonials.map((testimonial,index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <div className='bg-neutral rounded-md p-4 text-md border border-neutral-800 '>
                     
                        <div className="flex  items-start">
                            <img className="w-16 h-16 mr-4 rounded-full border border-neutral-600" src={testimonial.image} alt="" />
                            <div>
                                <h6 className=' text-2xl text-[#4c050f]'>{testimonial.user}</h6>  
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials