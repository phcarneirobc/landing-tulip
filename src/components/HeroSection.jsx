import React from 'react'

import video1 from '../assets/video1.mp4' 
import video2 from '../assets/video2.mp4'
import CaixaAmor from '../assets/caixa-amor.jpg'
import Padrinho from '../assets/ts-padrinho.jpg'
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl text-[#4c050f] sm:text-6xl lg:text-5xl text-center tracking-wide">
      Especialistas em materializar sonhos.
        
   
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Dedicada à produção de todo o tipo de embalagens de cartão e cartolina
        </p>
        <div className='flex justify-center my-10'>
        {/*<a href="#" className='py-2 px-4 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>Start for free</a>*/}
        <a href="#" className='py-2 px-4 mx-3 rounded-md border bg-[#e11d39] text-white'>
          Contacte-nos
        </a>
        </div>
        <div className='flex mt-10 justify-center'>
              <img src={Padrinho} alt="" className='w-30 h-25 rounded-lg w-1/2 border border-orange-800 shadow-orange-400 mx-2 my-4 '/>
              <img src={CaixaAmor} alt="" className='w-30 h-25 rounded-lg w-1/2 border border-orange-800 shadow-orange-400 mx-2 my-4'/>
        </div>
    </div>
  )
}

export default HeroSection