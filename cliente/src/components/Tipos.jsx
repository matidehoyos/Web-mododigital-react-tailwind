import React from 'react';
import { FaCheck } from 'react-icons/fa'

const Tipos = () => {
  return (
    <div class="w-screen pt-[80px] bg-white">
        <h2 className='font-extrabold text-center text-[20px] text-black opacity-85 drop-shadow'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col pt-[60px]'>
            <div className='mb-12 pl-[20px] flex-col justify-start items-start'>
                <img src="./ecommerce.png" className='w-[26%]' alt="Ilustracion de comercio electronico." />
                <h3 className='pt-3 text-[20px] text-azul-900 drop-shadow font-bold'>E-commerce</h3>
                <p className='w-[90%] pt-2 text-[18px] font-bold tracking-tight leading-[20px] opacity-85'>Vende por vos las 24hs. Carrito de compras y metodos de pago.</p>
            </div>
            <div className='mb-12 pl-[20px] flex-col justify-start items-start'>
                <img src="./institucional.png" className='w-[28%]' alt="Ilustracion de web institucional." />
                <h3 className='pt-3 text-[20px] text-azul-900 drop-shadow  font-bold'>Institucional</h3>
                <p className='w-[90%] pt-2 text-[18px] font-bold tracking-tight leading-[20px] opacity-85'>Reune la informacion relevante del negocio, club, etc. Redes sociales, medios de contacto, blog, canal de difusion.</p>
            </div>
            <div className='mb-12 pl-[20px] flex-col justify-start items-start'>
                <img src="./landing.png" className='w-[28%]' alt="Ilustracion de  landing page." />
                <h3 className='pt-3 text-[20px] text-azul-900 drop-shadow font-bold'>Landing page</h3>
                <p className='w-[90%] pt-2 text-[18px] font-bold tracking-tight leading-[20px] opacity-85'>Ideales para campañas publicitarias. Destinadas a un público y objetivo especifico. Convierte visitantes en clientes.</p>
            </div>
        </div>
        <div className='w-screen h-auto mt-20'>
            <p className='w-screen mx-auto py-28 px-2 text-white font-bold text-center text-[22px] drop-shadow bg-[url(/diseno.jpeg)] bg-cover bg-center'>
              Diseños interactivos, innovadores y elegantes.
            </p>
        </div>
        <div className='w-screen py-16 px-[15px]'>
              <h4 className='text-[24px] text-black opacity-90 font-bold'>Ecommerce</h4>
              <p className='text-[18px] text-black opacity-70 font-bold'>Que incluye?</p>
              <ul class="mt-1 pt-4 list-none text-[18px] font-semibold drop-shadow text-black opacity-80 tracking-tight border-t border-black border-opacity-60">
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Panel de control autoadministrable.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]"/>Productos y categorias ilimitados.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Metodos de pago en linea.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Aplicacion de carrito de compras.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Accesos directos a Whatsapp y redes sociales.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Formularios de contacto.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Sector de rewiews de clientes.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Diseño exclusivo y de vanguardia.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Mapas de ubicacion.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Adaptada a todos los dispositivos.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />SEO (Posicionamiento en buscadores)</li>
              </ul>
        </div>    
    </div>
  );
};

export default Tipos;