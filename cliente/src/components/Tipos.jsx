import React from 'react';
import { FaCheck } from 'react-icons/fa'

const Tipos = () => {
  return (
    <div class="w-screen bg-white pb-20">
        <div className='w-[86%] m-auto py-8 px-4 bg-gradient-to-r from-azul-900 to-verde-900 shadow-lg rounded-md relative -top-12 opacity-85'>
            <p className='text-white text-[24px] text-center text-pretty font-bold tracking-wide shadow-xl leading-[24px]'>Nos adaptamos a la imagen de tu marca, creando un diseño que la impulse, y auto administrable, para que tengas el total control.</p>
        </div>
        <h2 className='mt-8 font-bold text-center text-[20px] text-neutral-700'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col mt-14'>
            <div className='w-[72%] mx-auto mb-8 p-5 pb-10 flex-col justify-center items-center bg-slate-100 shadow-lg rounded-md border border-black border-opacity-35'>
                <img src="./ecommerce.png" className='w-[34%] mx-auto' alt="Ilustracion de comercio electronico." />
                <h3 className='pt-3 text-[18px] text-center font-bold'>E-commerce</h3>
                <p className='w-[94%] mx-auto pt-2 text-[16px] font-bold text-center opacity-90 leading-[18px]'>Vende por vos las 24hs. Carrito de compras y metodos de pago.</p>
            </div>
            <div className='w-[72%] mx-auto mb-8 p-5 pb-10 flex-col justify-center items-center bg-slate-100 shadow-lg rounded-md border border-black border-opacity-35'>
                <img src="./institucional.png" className='w-[34%] mx-auto' alt="Ilustracion de web institucional." />
                <h3 className='pt-3 text-[18px] text-center font-bold'>Institucional</h3>
                <p className='w-[94%] mx-auto pt-2 text-[16px] font-bold text-center opacity-90 leading-[18px]'>Reune la informacion relevante del negocio, club, etc. Redes sociales, medios de contacto, blog, canal de difusion.</p>
            </div>
            <div className='w-[72%] mx-auto p-5 pb-10 flex-col justify-center items-center bg-slate-100 shadow-lg rounded-md border border-black border-opacity-35'>
                <img src="./landing.png" className='w-[34%] mx-auto' alt="Ilustracion de  landing page." />
                <h3 className='pt-3 text-[18px] text-center font-bold'>Landing page</h3>
                <p className='w-[94%] pt-2 text-[16px] font-bold text-center opacity-90 leading-[18px]'>Ideales para campañas publicitarias. Destinadas a un público y objetivo especifico. Convierte visitantes en clientes.</p>
            </div>
        </div>
        <div className='w-screen mt-24 py-16 px-[20px] bg-black bg-opacity-85'>
              <h4 className='text-[22px] text-white font-bold'>Ecommerce</h4>
              <p className='text-[18px] text-white opacity-85 font-normal'>Que puede incluir?</p>
              <ul class="mt-2 pt-4 list-none text-[18px] font-medium text-white tracking-wider leading-[24px] border-t">
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]" />Panel de control autoadministrable.</li>
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]"/>Productos y categorias ilimitados.</li>
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]" />Metodos de pago en linea.</li>
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]" />Aplicacion de carrito de compras.</li>
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]" />Accesos directos a Whatsapp y redes sociales.</li>
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]" />Formularios de contacto.</li>
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]" />Sector de rewiews de clientes.</li>
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]" />Diseño exclusivo y de vanguardia.</li>
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]" />Mapas de ubicacion.</li>
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]" />Adaptada a todos los dispositivos.</li>
                <li class="flex items-center"><FaCheck class="mr-2 text-[12px]" />SEO (Posicionamiento en buscadores)</li>
              </ul>
        </div>    
        <div className='w-screen h-auto'>
            <p className='w-screen mx-auto py-28 px-2 text-white font-bold text-center text-[22px] bg-[url(/diseno.jpeg)] bg-cover bg-center'>
              Diseños interactivos, innovadores y elegantes.
            </p>
        </div>
    </div>
  );
};

export default Tipos;