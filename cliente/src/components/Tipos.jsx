import React from 'react';
import { FaCheck } from 'react-icons/fa'

const Tipos = () => {
  return (
    <div class="w-screen py-[50px] bg-gradient-to-tl from-azul-900 to-gray-500">
        <h2 className='font-bold text-center text-[20px] tracking-wide text-white drop-shadow'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col pt-[40px]'>
            <div className='w-[84%] mx-auto mb-6 py-[4px] pl-[12px] pb-4 flex-col justify-start items-start bg-gray-100 bg-opacity-20 rounded-sm border border-verde-900 border-opacity-25'>
                <img src="./ecommerce.png" className='w-[22%]' alt="Ilustracion de comercio electronico." />
                <h3 className='pt-2 text-[20px] text-gray-900 drop-shadow font-bold'>E-commerce</h3>
                <p className='w-[90%] pt-1 text-[18px] text-gray-800 font-bold tracking-tight leading-[20px] opacity-95'>Vende por vos las 24hs. Carrito de compras y metodos de pago.</p>
            </div>
            <div className='w-[84%] mx-auto mb-6 py-[4px] pl-[12px] pb-4 flex-col justify-start items-start bg-gray-100 bg-opacity-20 rounded-sm border border-verde-900 border-opacity-25'>
                <img src="./institucional.png" className='w-[23%]' alt="Ilustracion de web institucional." />
                <h3 className='pt-2 text-[20px] text-gray-900 drop-shadow  font-bold'>Institucional</h3>
                <p className='w-[90%] pt-1 text-[18px] text-gray-800 font-bold tracking-tight leading-[20px] opacity-95'>Reune la informacion relevante del negocio, club, etc. Redes sociales, medios de contacto, blog, canal de difusion.</p>
            </div>
            <div className='w-[84%] mx-auto mb-6 py-[4px] pl-[12px] pb-4 flex-col justify-start items-start bg-gray-100 bg-opacity-20 rounded-sm border border-verde-900 border-opacity-25'>
                <img src="./landing.png" className='w-[23%]' alt="Ilustracion de  landing page." />
                <h3 className='pt-2 text-[20px] text-gray-900 drop-shadow font-bold'>Landing page</h3>
                <p className='w-[90%] pt-1 text-[18px] text-gray-800 font-bold tracking-tight leading-[20px] opacity-95'>Ideales para campañas publicitarias. Destinadas a un público y objetivo especifico. Convierte visitantes en clientes.</p>
            </div>
            <div className='w-[84%] mx-auto py-[40px] rounded-sm border border-verde-900'>
                <h3 className='text-[24px] tracking-wide leading-[40px] font-[700] text-center text-white opacity-75 drop-shadow border border-verde-900'>BLOGS</h3>
                <h3 className='text-[24px] tracking-wide leading-[40px] font-[700] text-center  text-white opacity-75 drop-shadow border border-verde-900'>PORTFOLIOS</h3>
                <h3 className='text-[24px] tracking-wide leading-[40px] font-[700] text-center text-white opacity-75 drop-shadow border border-verde-900'>SOCIAL WEBS</h3>
            </div>
        </div>
    </div>
  );
};

export default Tipos;