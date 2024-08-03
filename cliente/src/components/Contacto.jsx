import React from 'react';

const Contacto = () => {
  return (
    <div class="w-screen py-[70px] xl:py-[100px] px-[20px] overflow-x-hidden bg-[#111]">
          <p className='text-gray-200 opacity-90 text-[20px] xl:text-[32px] xl:text-center font-[600] xl:font-[700]  leading-[22px] xl:leading-[36px]'>Hagamos algo increible juntos</p>
          <p className='mt-[10px] text-gray-400 opacity-70 text-[20px] xl:text-[32px] xl:text-center font-[600] leading-[22px] xl:leading-[36px] '>Contanos sobre tu proyecto</p>
          <p className='mt-[10px] text-gray-600 opacity-90 text-[20px] xl:text-[32px] xl:text-center font-[600] leading-[22px] xl:leading-[36px] '>Cotizamos tu sitio a la brevedad</p>
          <div className='mt-[40px] xl:flex xl:justify-center'>
                  <a href="#tipos" className="botom mt-14 xl:mt-6 py-[6px] xl:py-[10px] px-[14px] xl:px-[20px] text-azul-900 text-[16px] xl:text-[20px] font-[600] tracking-[.3px] drop-shadow border border-azul-900 rounded-[6px]">
                    Contáctanos
                  </a>
           </div>
    </div>
  );
};

export default Contacto;