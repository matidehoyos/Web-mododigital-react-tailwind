import React from 'react';

const Contacto = () => {
  return (
    <div class="w-screen py-16 px-[20px] overflow-x-hidden bg-black">
          <p className='text-azul-900 opacity-90 text-[20px] font-[600] leading-[22px]'>Hagamos algo increible juntos.</p>
          <p className='mt-[10px] text-verde-900 opacity-70 text-[20px] font-[600] leading-[22px]'>Contanos sobre tu proyecto y objetivos.</p>
          <p className='mt-[10px] text-gray-400 opacity-90 text-[20px] font-[600] leading-[22px]'>Cotizamos tu sitio a la brevedad.</p>
          <div className='mt-[40px]'>
                  <a href="#tipos" className="botom mt-14 py-[6px] px-[14px] text-white text-[16px] font-[600] tracking-[.3px] drop-shadow border border-white rounded-[6px]">
                    Contáctanos
                  </a>
           </div>
    </div>
  );
};

export default Contacto;