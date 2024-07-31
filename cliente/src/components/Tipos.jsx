import React from 'react';
import { FaCheck } from 'react-icons/fa'

const Tipos = () => {
  return (
    <div class="w-screen pt-[40px] bg-white">
        <h2 className='font-bold text-center text-[20px] text-black opacity-85'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col pt-[40px]'>
            <div className='mb-12 pl-[20px] flex-col justify-start items-start'>
                <img src="./ecommerce.png" className='w-[30%]' alt="Ilustracion de comercio electronico." />
                <h3 className='pt-3 text-[20px] font-bold'>E-commerce</h3>
                <p className='w-[90%] pt-2 text-[16px] font-bold tracking-tighter leading-none opacity-95'>Vende por vos las 24hs. Carrito de compras y metodos de pago.</p>
            </div>
            <div className='mb-12 pl-[20px] flex-col justify-start items-start'>
                <img src="./institucional.png" className='w-[34%]' alt="Ilustracion de web institucional." />
                <h3 className='pt-3 text-[20px] font-bold'>Institucional</h3>
                <p className='w-[90%] pt-2 text-[16px] font-bold tracking-tighter leading-none opacity-95'>Reune la informacion relevante del negocio, club, etc. Redes sociales, medios de contacto, blog, canal de difusion.</p>
            </div>
            <div className='pl-[20px] flex-col justify-start items-start'>
                <img src="./landing.png" className='w-[34%]' alt="Ilustracion de  landing page." />
                <h3 className='pt-3 text-[20px] font-bold'>Landing page</h3>
                <p className='w-[90%] pt-2 text-[16px] font-bold tracking-tighter leading-none opacity-95'>Ideales para campañas publicitarias. Destinadas a un público y objetivo especifico. Convierte visitantes en clientes.</p>
            </div>
        </div>
        <div className='w-screen mt-24 py-16 px-[20px] bg-verde-900'>
              <h4 className='text-[24px] text-white font-bold'>Ecommerce</h4>
              <p className='text-[18px] text-white opacity-85 font-normal'>Que incluye?</p>
              <ul class="mt-2 pt-4 list-none text-[20px] font-semibold drop-shadow text-white tracking-tight border-t">
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]" />Panel de control autoadministrable.</li>
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]"/>Productos y categorias ilimitados.</li>
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]" />Metodos de pago en linea.</li>
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]" />Aplicacion de carrito de compras.</li>
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]" />Accesos directos a Whatsapp y redes sociales.</li>
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]" />Formularios de contacto.</li>
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]" />Sector de rewiews de clientes.</li>
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]" />Diseño exclusivo y de vanguardia.</li>
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]" />Mapas de ubicacion.</li>
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]" />Adaptada a todos los dispositivos.</li>
                <li class="flex items-baseline mb-[4px] w-screen pr-[5px]"><FaCheck class="mr-2 text-[12px]" />SEO (Posicionamiento en buscadores)</li>
              </ul>
        </div>    
        <div className='w-screen h-auto mt-[40px]'>
            <p className='w-screen mx-auto py-28 px-2 text-white font-bold text-center text-[22px] bg-[url(/diseno.jpeg)] bg-cover bg-center'>
              Diseños interactivos, innovadores y elegantes.
            </p>
        </div>
    </div>
  );
};

export default Tipos;