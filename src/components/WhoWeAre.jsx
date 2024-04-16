import React from 'react'
import ImgAmor from '../assets/com-amor.jpg'	

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] " id='whoweare'>
        <div className='text-center'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 traciking wide text-[#4c050f]'>Quem somos nós? </h2>
        </div>

        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 lg:mt-20'>
                <div className='flex flex-col items-center justify-center'>
                    <img className='rounded-lg' src={ImgAmor} alt="Com amor"></img>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='mt-6 text-2xl text-neutral-500'>A Tulip Cartonagem é uma empresa especializada na produção de embalagens de cartão e cartolina. A nossa missão é fornecer produtos de qualidade superior que atendam às necessidades dos nossos clientes. Estamos empenhados em fornecer um serviço excepcional e garantir a satisfação do cliente em todos os momentos.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureSection