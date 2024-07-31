import React from 'react';
import { FaCheck } from 'react-icons/fa'

const Tipos = () => {
  return (
    <div class="w-screen pt-[50px] bg-[rgba(256,256,256,.9)]">
        <h2 className='font-bold text-center text-[22px] text-black opacity-80 drop-shadow'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col pt-[50px]'>
            <div className='w-[84%] mx-auto mb-10 py-[4px] pl-[12px] pb-4 flex-col justify-start items-start bg-gray-700 rounded-sm'>
                <img src="./ecommerce.png" className='w-[26%]' alt="Ilustracion de comercio electronico." />
                <h3 className='pt-3 text-[20px] text-verde-900 drop-shadow font-bold'>E-commerce</h3>
                <p className='w-[90%] pt-2 text-[18px] text-white font-bold tracking-tight leading-[20px] opacity-95'>Vende por vos las 24hs. Carrito de compras y metodos de pago.</p>
            </div>
            <div className='w-[84%] mx-auto mb-10 py-[4px] pl-[12px] pb-4 flex-col justify-start items-start bg-gray-700 rounded-sm'>
                <img src="./institucional.png" className='w-[28%]' alt="Ilustracion de web institucional." />
                <h3 className='pt-3 text-[20px] text-verde-900 drop-shadow  font-bold'>Institucional</h3>
                <p className='w-[90%] pt-2 text-[18px] text-white font-bold tracking-tight leading-[20px] opacity-95'>Reune la informacion relevante del negocio, club, etc. Redes sociales, medios de contacto, blog, canal de difusion.</p>
            </div>
            <div className='w-[84%] mx-auto mb-10 py-[4px] pl-[20px] pb-4 flex-col justify-start items-start bg-gray-700 rounded-sm'>
                <img src="./landing.png" className='w-[28%]' alt="Ilustracion de  landing page." />
                <h3 className='pt-3 text-[20px] text-verde-900 drop-shadow font-bold'>Landing page</h3>
                <p className='w-[90%] pt-2 text-[18px] text-white font-bold tracking-tight leading-[20px] opacity-95'>Ideales para campañas publicitarias. Destinadas a un público y objetivo especifico. Convierte visitantes en clientes.</p>
            </div>
            <div className='w-screen mt-20 py-[120px] bg-[url(/diseno.jpeg)] bg-cover bg-bottom bg-slate-900'>
                <h3 className='text-[30px] tracking-widest leading-[50px] font-[900] text-center text-azul-900 drop-shadow'>BLOGS</h3>
                <h3 className='text-[30px] tracking-widest leading-[50px] font-[900] text-center  text-azul-900 drop-shadow'>PORTFOLIOS</h3>
                <h3 className='text-[30px] tracking-widest leading-[50px] font-[900] text-center text-azul-900 drop-shadow'>SOCIAL WEBS</h3>
            </div>
        </div>
    </div>
  );
};

export default Tipos;