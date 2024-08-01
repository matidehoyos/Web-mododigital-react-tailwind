import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Ecommerce = () => {
  return (
    <div className='w-screen py-16 px-[15px] bg-gray-200'>
    <img src="./eco.png" alt="imagen pagina web" className='w-[40%] mb-4' />    
    <h4 className='text-[24px] text-gray-800 opacity-90 font-bold'>Ecommerce</h4>
    <p className='text-[18px text-gray-700 opacity-70 font-bold'>Que incluye?</p>
    <ul class="mt-1 pt-4 list-none text-[16px] font-semibold drop-shadow text-gray-700 tracking-tight border-t border-white border-opacity-60">
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
  );
};

export default Ecommerce;