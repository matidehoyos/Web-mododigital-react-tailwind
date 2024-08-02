import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Ecommerce = () => {
  return (
    <div className='w-screen pt-[70px] pb-16 px-[15px] bg-[rgb(30,30,30)]'>
    <h4 className='text-[22px] text-[#249fa8] opacity-90 font-bold'>Ecommerce</h4>
    <img src="./store1.jpeg" alt="imagen pagina web" className='w-[60%] mt-1 mb-3 object-cover object-top' />    
    <p className='text-[16px] text-verde-900 opacity-40 font-bold'>Que incluye?</p>
    <ul class="mt-1 pt-3 list-none text-[18px] font-[300] drop-shadow text-gray-400 tracking-[.5px] leading-tight border-t border-white border-opacity-10">
      <li class="flex items-baseline mb-[1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Panel de control autoadministrable.</li>
      <li class="flex items-baseline mb-1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]"/>Productos y categorias ilimitados.</li>
      <li class="flex items-baseline mb-1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Metodos de pago en linea.</li>
      <li class="flex items-baseline mb-1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Aplicacion de carrito de compras.</li>
      <li class="flex items-baseline mb-1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Accesos directos a Whatsapp y redes sociales.</li>
      <li class="flex items-baseline mb-1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Formularios de contacto.</li>
      <li class="flex items-baseline mb-1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Sector de rewiews de clientes.</li>
      <li class="flex items-baseline mb-1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Diseño exclusivo y de vanguardia.</li>
      <li class="flex items-baseline mb-1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Mapas de ubicacion.</li>
      <li class="flex items-baseline mb-1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Adaptada a todos los dispositivos.</li>
      <li class="flex items-baseline mb-1px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />SEO (Posicionamiento en buscadores)</li>
    </ul>
</div>  
  );
};

export default Ecommerce;