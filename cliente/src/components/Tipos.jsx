import React from 'react';
import { FaBuilding, FaCaretRight, FaCartPlus, FaCheck, FaPlaneArrival, FaStore, FaTencentWeibo } from 'react-icons/fa';

const Tipos = () => {
  return (
    <div class="w-screen pt-[50px] bg-[rgb(90,90,90)]">
        <h2 className='font-bold text-center text-[20px] tracking-wide text-[#10d6e4] drop-shadow'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col pt-[40px]'>
            <div className='w-[80%] mx-auto mb-8 p-4 flex-col justify-start items-center bg-[#272727] rounded-[12px] border border-[#07676e] shadow-lg shadow-[#07676e]'>
                  <FaStore className='text-[#07676e] text-[20px]' />
                  <h3 className='text-[22px] mt-2 text-white opacity-70 drop-shadow font-bold'>Tienda online</h3>
                  <ul class="mt-2 pt-2 list-none text-[16px] font-semibold drop-shadow text-white tracking-[.3px] opacity-60 border-t border-[#07676e] border-opacity-50">
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Abierto las 24hs.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Carrito de compras.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Metodos de pago en linea.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]"/>Productos ilimitados.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Autoadministrable.</li>
                    </ul>            
              </div>
            <div className='w-[80%] mx-auto mb-8 p-4 flex-col justify-start items-center bg-[#272727] rounded-[12px] border border-[#07676e] shadow-lg shadow-[#07676e]'>
                  <FaBuilding className='text-[#07676e] text-[20px]' />
                  <h3 className='text-[22px] mt-2 text-white opacity-70 drop-shadow font-bold'>Institucional</h3>
                  <ul class="mt-2 pt-2 list-none text-[16px] font-semibold drop-shadow text-white tracking-[.3px] opacity-60 border-t border-[#07676e] border-opacity-50">
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Toda la info de tu negocio.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Redes sociales.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Formularios de contacto.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]"/>Seccion about us.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Newsletter.</li>
                    </ul>            
              </div>
            <div className='w-[80%] mx-auto mb-8 p-4 flex-col justify-start items-center bg-[#272727] rounded-[12px] border border-[#07676e] shadow-lg shadow-[#07676e]'>
                  <FaPlaneArrival className='text-[#07676e] text-[20px]' />
                  <h3 className='text-[22px] mt-2 text-white opacity-70 drop-shadow font-bold'>Landing page</h3>
                  <ul class="mt-2 pt-2 list-none text-[16px] font-semibold drop-shadow text-white tracking-[.3px] opacity-60 border-t border-[#07676e] border-opacity-50">
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Ideal p/ campaña publicitaria.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Convierte visitantes en clientes.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]"/>Diseño basado en el producto.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Enbudo de venta.</li>
                    </ul>            
              </div>
              <h3 className='w-screen h-auto mt-[70px] py-[150px] bg-[url(diseno.jpeg)] bg-cover bg-bottom text-[28px] font-[700] text-center leading-[32px] tracking-[.4px] drop-shadow'>Diseños interactivos, profesionales y elegantes</h3>
        </div> 
    </div>
  );
};

export default Tipos;