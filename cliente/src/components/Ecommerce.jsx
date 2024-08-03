import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Ecommerce = () => {
  return (
    <div className='w-[100%] pt-[50px] md:pt-[25px] pb-16 px-[15px] md:px-[20px] bg-[rgb(30,30,30)] md:bg-[#222]'>
    <h4 className='text-[22px] md:text-[24px] xl:text-[26px] text-verde-900 opacity-70 font-bold'>Tiendas online</h4>
    <img src="./store1.jpeg" alt="imagen pagina web" className='w-[85%] md:w-[100%] h-[170px] md:h-[220px] mt-1 mb-3 object-cover object-top' />    
    <p className='text-[16px] md:text-[18px] text-gray-500 opacity-50 font-bold'>Que incluye?</p>
    <ul class="mt-1 pt-3 list-none text-[18px] font-[300] drop-shadow text-gray-400 tracking-[.5px] leading-tight border-t border-white border-opacity-10">
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Panel de control autoadministrable.</li>
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]"/>Productos y categorias ilimitados.</li>
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Metodos de pago en linea.</li>
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Aplicacion de carrito de compras.</li>
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Boton a Whatsapp y redes sociales.</li>
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Formularios de contacto.</li>
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Sector de rewiews de clientes.</li>
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Diseño exclusivo y de vanguardia.</li>
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Mapas de ubicacion.</li>
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Adaptada a todos los dispositivos.</li>
      <li class="flex items-baseline mb-[1px] md:font-[500]"><FaCheck class="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />SEO (Posicionamiento en buscadores)</li>
    </ul>
</div>  
  );
};

export default Ecommerce;