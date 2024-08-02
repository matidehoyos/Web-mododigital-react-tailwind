import React from 'react';
import { FaCaretRight, FaCartPlus, FaCheck, FaStore } from 'react-icons/fa';

const Tipos = () => {
  return (
    <div class="w-screen py-[50px] bg-gradient-to-tl from-white to-gray-200">
        <h2 className='font-bold text-center text-[20px] tracking-wide text-gray-800 drop-shadow'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col pt-[40px]'>
            <div className='w-[84%] mx-auto mb-6 p-4 flex-col justify-start items-center rounded-sm bg-[#111] bg-opacity-85 rounded-[4px] border border-verde-900'>
                  <FaStore className='text-verde-900 text-[20px] opacity-70' />
                  <h3 className='text-[24px] mt-2 text-white drop-shadow font-bold'>Tienda online</h3>
                  <ul class="mt-2 pt-2 list-none text-[16px] font-semibold drop-shadow text-white tracking-[.3px] opacity-70 border-t border-white border-opacity-10">
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-verde-900 opacity-80 text-[12px]" />Abierto las 24hs.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-verde-900 opacity-80 text-[12px]" />Carrito de compras.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-verde-900 opacity-80 text-[12px]" />Metodos de pago en linea.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-verde-900 opacity-80 text-[12px]"/>Productos ilimitados.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-verde-900 opacity-80 text-[12px]" />Autoadministrable.</li>
                    </ul>            
              </div>
            <div className='w-[84%] mx-auto mb-6 flex justify-start items-center rounded-sm bg-gray-200'>
                <img src="./insti.jpeg" className='w-[42%] grayscale-[40%]' alt="Ilustracion de comercio electronico." />
                <div className='pl-3'>
                  <h3 className='text-[20px] text-gray-800 drop-shadow font-bold'>Institucional</h3>
                  <p className='text-[16px] text-gray-800 font-bold tracking-tight leading-[20px] opacity-80'>Reune la informacion del negocio.</p>
                </div>
            </div>
            <div className='w-[84%] mx-auto mb-6 flex justify-start items-center rounded-sm bg-gray-200'>
                <img src="./land.jpeg" className='w-[42%] grayscale-[40%]' alt="Ilustracion de comercio electronico." />
                <div className='pl-3'>
                  <h3 className='text-[20px] text-gray-800 drop-shadow font-bold'>Landing page</h3>
                  <p className='text-[16px] text-gray-800 font-bold tracking-tight leading-[20px] opacity-80'>Ideales para campanas publicitarias.</p>
                </div>
            </div>
           
         {/*}   <div className='w-[84%] mx-auto py-[40px] rounded-sm bg-gray-300'>
                <h3 className='text-[24px] tracking-wide leading-[40px] font-[700] text-center text-gray-800 opacity-75 drop-shadow border border-gray-900'>BLOGS</h3>
                <h3 className='text-[24px] tracking-wide leading-[40px] font-[700] text-center  text-gray-800 opacity-75 drop-shadow border border-gray-900'>PORTFOLIOS</h3>
                <h3 className='text-[24px] tracking-wide leading-[40px] font-[700] text-center text-gray-800 opacity-75 drop-shadow border border-gray-900'>SOCIAL WEBS</h3>
            </div>*/ }
        </div> 
    </div>
  );
};

export default Tipos;