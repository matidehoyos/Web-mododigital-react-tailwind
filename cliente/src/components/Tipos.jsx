import React from 'react';
import { FaBuilding, FaCaretRight, FaCartPlus, FaCheck, FaPlaneArrival, FaStore, FaTencentWeibo } from 'react-icons/fa';
import Ecommerce from './Ecommerce';
import Emprend from './Emprend';
import Portfolio from './Portfolio';

const Tipos = () => {
  return (
    <div class="w-[100%] pt-[50px] xl:pt-[100px] xl:pb-[30px]  bg-[rgb(30,30,30)] xl:bg-[#111]" id="tipos">
        <h2 className='text-[20px] xl:text-[28px] font-[500] text-center tracking-[.5px] text-white opacity-70 drop-shadow'>¿Que tipos de webs creamos?</h2>
        <div className='w-[100%] xl:w-[90%] xl:py-[90px] xl:mx-auto xl:flex xl:justify-center xl:items-strech xl:gap-10'>
          <div className='xl:w-[29%] xl:bg-[#111] overflow-x-hidden xl:border xl:border-black xl:rounded-md'>
            <Ecommerce />
          </div>
          <div className='xl:w-[29%] xl:bg-gray-200 overflow-x-hidden xl:border xl:border-black xl:rounded-md'>
            <Emprend />
          </div>
          <div className='xl:w-[29%] xl:bg-[#1c3133] overflow-x-hidden xl:border xl:border-black xl:rounded-md'>
            <Portfolio />
          </div>
        </div>
      {/*}  <div className='w-screen flex-col pt-[40px]'>
            <div className='w-[80%] mx-auto mb-8 p-4 flex-col justify-start items-center bg-[#171717] rounded-[12px] border border-[#07676e] shadow-xl shadow-[#07676e7b]'>
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
            <div className='w-[80%] mx-auto mb-8 p-4 flex-col justify-start items-center bg-[#171717] rounded-[12px] border border-[#07676e] shadow-xl shadow-[#07676e6b]'>
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
            <div className='w-[80%] mx-auto mb-8 p-4 flex-col justify-start items-center bg-[#171717] rounded-[12px] border border-[#07676e] shadow-xl shadow-[#07676e6c]'>
                  <FaPlaneArrival className='text-[#07676e] text-[20px]' />
                  <h3 className='text-[22px] mt-2 text-white opacity-70 drop-shadow font-bold'>Landing page</h3>
                  <ul class="mt-2 pt-2 list-none text-[16px] font-semibold drop-shadow text-white tracking-[.3px] opacity-60 border-t border-[#07676e] border-opacity-50">
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Ideal p/ campaña publicitaria.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Convierte visitantes en clientes.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]"/>Diseño basado en el producto.</li>
                      <li class="flex items-baseline"><FaCheck class="mr-2 text-[#07676e] text-[12px]" />Enbudo de venta.</li>
                    </ul>            
              </div>
              <div className="w-screen mt-[70px] bg-[url('/diseno.jpeg')] bg-cover bg-center ">
                  <h3 className='py-[150px] bg-black bg-opacity-30 text-white text-[26px] font-[600] text-center leading-[32px] tracking-[.4px] drop-shadow'>Diseños interactivos, profesionales y elegantes</h3>
                  </div> 
              </div>*/}
    </div>
  );
};

export default Tipos;