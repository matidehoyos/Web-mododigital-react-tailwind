import React from 'react';
import { FaCheck } from 'react-icons/fa'

const Tipos = () => {
  return (
    <div class="w-screen bg-slate-300 pb-20">
        <div className='w-[86%] m-auto py-8 px-4 bg-gradient-to-r from-azul-900 to-verde-900 shadow-lg rounded-md relative -top-12 opacity-85'>
            <p className='text-white text-[24px] text-center text-pretty font-bold tracking-wide shadow-xl leading-[24px]'>Nos adaptamos a la imagen de tu marca, creando un diseño que la impulse, y auto administrable, para que tengas el total control.</p>
        </div>
        <h2 className='font-bold text-center text-[18px] text-neutral-800'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col mt-14'>
            <div className='w-80 mx-auto mb-10 p-5 pb-10 flex-col justify-center items-center bg-slate-200 rounded-md border border-black border-opacity-35'>
                <img src="./ecommerce.png" className='w-[34%]' alt="Ilustracion de comercio electronico." />
                <h3 className='pt-3 text-[18px] font-bold'>E-commerce</h3>
                <p className='w-60 pt-1 text-[16px] font-bold opacity-90 leading-4'>Vende por vos las 24hs. Carrito de compras y metodos de pago.</p>
            </div>
            <div className='w-80 mx-auto mb-10 p-5 pb-10 flex-col justify-center items-center bg-slate-200 rounded-md border border-black border-opacity-35'>
                <img src="./institucional.png" className='w-[34%]' alt="Ilustracion de web institucional." />
                <h3 className='pt-3 text-[18px] font-bold'>Institucional</h3>
                <p className='w-60 pt-1 text-[16px] font-bold opacity-90 leading-4'>Reune la informacion relevante del negocio, club, etc. Redes sociales, medios de contacto, blog, canal de difusion.</p>
            </div>
            <div className='w-80 mx-auto mb-10 p-5 pb-10 flex-col justify-center items-center bg-slate-200 rounded-md border border-black border-opacity-35'>
                <img src="./landing.png" className='w-[34%]' alt="Ilustracion de  landing page." />
                <h3 className='pt-3 text-[18px] font-bold'>Landing page</h3>
                <p className='w-60 pt-1 text-[16px] font-bold opacity-90 leading-4'>Ideales para campañas publicitarias. Destinadas a un público y objetivo especifico. Convierte visitantes en clientes.</p>
            </div>
        </div>
        <div className='w-screen mt-24 py-16 px-[20px] bg-gradient-to-r from-verde-900 to-azul-900'>
              <h4 className='text-[22px] text-white opacity-85 font-bold'>Ecommerce</h4>
              <p className='text-[18px] text-white opacity-65 font-bold'>Que puede incluir?</p>
              <ul class="mt-2 pt-4 list-none text-[16px] font-normal text-white opacity-80 tracking-wider leading-[20px] border-t">
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
        <div className='w-screen h-auto pt-24'>
            <p className='w-[80%] mx-auto py-40 px-2 text-white font-bold text-center text-[26px] bg-[url(/diseno.jpeg)] bg-cover bg-center'>
              Diseños interactivos, innovadores y elegantes.
            </p>
        </div>
    </div>
  );
};

export default Tipos;