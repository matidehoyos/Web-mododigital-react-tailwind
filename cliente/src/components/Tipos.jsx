import React from 'react';
import { FaCheck } from 'react-icons/fa'

const Tipos = () => {
  return (
    <div class="w-screen py-[50px] bg-gradient-to-r from-azul-900 to-verde-900">
        <h2 className='font-bold text-center text-[20px] tracking-wide text-white drop-shadow'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col pt-[50px]'>
            <div className='w-[84%] mx-auto mb-10 py-[4px] pl-[12px] pb-4 flex-col justify-start items-start bg-gray-100 bg-opacity-40 rounded-sm border border-slate-100'>
                <img src="./ecommerce.png" className='w-[22%]' alt="Ilustracion de comercio electronico." />
                <h3 className='pt-3 text-[20px] text-black drop-shadow font-bold'>E-commerce</h3>
                <p className='w-[90%] pt-2 text-[18px] text-gray-800 font-bold tracking-tight leading-[20px] opacity-95'>Vende por vos las 24hs. Carrito de compras y metodos de pago.</p>
            </div>
            <div className='w-[84%] mx-auto mb-10 py-[4px] pl-[12px] pb-4 flex-col justify-start items-start bg-gray-100 bg-opacity-40 rounded-sm border border-slate-100'>
                <img src="./institucional.png" className='w-[23%]' alt="Ilustracion de web institucional." />
                <h3 className='pt-3 text-[20px] text-black drop-shadow  font-bold'>Institucional</h3>
                <p className='w-[90%] pt-2 text-[18px] text-gray-800 font-bold tracking-tight leading-[20px] opacity-95'>Reune la informacion relevante del negocio, club, etc. Redes sociales, medios de contacto, blog, canal de difusion.</p>
            </div>
            <div className='w-[84%] mx-auto mb-10 py-[4px] pl-[20px] pb-4 flex-col justify-start items-start bg-gray-100 bg-opacity-40 rounded-sm border border-slate-100'>
                <img src="./landing.png" className='w-[23%]' alt="Ilustracion de  landing page." />
                <h3 className='pt-3 text-[20px] text-black drop-shadow font-bold'>Landing page</h3>
                <p className='w-[90%] pt-2 text-[18px] text-gray-800 font-bold tracking-tight leading-[20px] opacity-95'>Ideales para campañas publicitarias. Destinadas a un público y objetivo especifico. Convierte visitantes en clientes.</p>
            </div>
            <div className='w-[84%] mx-auto mt-20 py-[80px] bg-[url(/diseno.jpeg)] bg-cover bg-bottom bg-slate-900 border'>
                <h3 className='text-[26px] tracking-wide leading-[42px] font-[700] text-center text-white drop-shadow'>BLOGS</h3>
                <h3 className='text-[26px] tracking-wide leading-[42px] font-[700] text-center  text-white drop-shadow'>PORTFOLIOS</h3>
                <h3 className='text-[26px] tracking-wide leading-[42px] font-[700] text-center text-white drop-shadow'>SOCIAL WEBS</h3>
            </div>
        </div>
    </div>
  );
};

export default Tipos;