import React from 'react';
import { FaCheck } from 'react-icons/fa'

const Tipos = () => {
  return (
    <div class="w-screen py-[50px] bg-gradient-to-tl from-white to-gray-200">
        <h2 className='font-bold text-center text-[20px] tracking-wide text-gray-800 drop-shadow'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col pt-[40px]'>
            <div className='w-[84%] mx-auto mb-6 flex justify-start items-center rounded-sm bg-gray-300'>
                <img src="./ecommerce.jpeg" className='w-[26%]' alt="Ilustracion de comercio electronico." />
                <div className='pl-3'>
                  <h3 className='text-[20px] text-gray-900 drop-shadow font-bold'>E-commerce</h3>
                  <p className='text-[16px] text-gray-900 font-bold tracking-tight leading-[20px] opacity-80'>Vende por vos las 24hs.</p>
                </div>
            </div>
            <div className='w-[84%] mx-auto mb-6 flex justify-start items-center rounded-sm bg-gray-300'>
                <img src="./insti.jpeg" className='w-[26%]' alt="Ilustracion de comercio electronico." />
                <div className='pl-3'>
                  <h3 className='text-[20px] text-gray-900 drop-shadow font-bold'>Institucional</h3>
                  <p className='text-[16px] text-gray-900 font-bold tracking-tight leading-[20px] opacity-80'>Reune la info de tu negocio.</p>
                </div>
            </div>
            <div className='w-[84%] mx-auto mb-6 flex justify-start items-center rounded-sm bg-gray-300'>
                <img src="./land.jpeg" className='w-[26%]' alt="Ilustracion de comercio electronico." />
                <div className='pl-3'>
                  <h3 className='text-[20px] text-gray-900 drop-shadow font-bold'>Landing page</h3>
                  <p className='text-[16px] text-gray-900 font-bold tracking-tight leading-[20px] opacity-80'>Ideal para campaña publicitaria.</p>
                </div>
            </div>
            <div className='w-[84%] mx-auto py-[40px] rounded-sm bg-gray-300'>
                <h3 className='text-[24px] tracking-wide leading-[40px] font-[700] text-center text-gray-800 opacity-75 drop-shadow border border-gray-900'>BLOGS</h3>
                <h3 className='text-[24px] tracking-wide leading-[40px] font-[700] text-center  text-gray-800 opacity-75 drop-shadow border border-gray-900'>PORTFOLIOS</h3>
                <h3 className='text-[24px] tracking-wide leading-[40px] font-[700] text-center text-gray-800 opacity-75 drop-shadow border border-gray-900'>SOCIAL WEBS</h3>
            </div>
        </div>
    </div>
  );
};

export default Tipos;