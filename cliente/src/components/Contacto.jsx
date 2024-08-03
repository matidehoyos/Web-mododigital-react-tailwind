import React from 'react';

const Contacto = () => {
  return (
    <div class="w-screen py-[70px] xl:py-[100px] px-[20px] overflow-x-hidden bg-[rgb(245,245,245)] xl:bg-[#111]">
          <p className='text-black text-[22px] xl:text-[32px] text-center font-[700] xl:font-[700] tracking-[0px] leading-[22px] xl:leading-[36px]'>Hagamos algo increible juntos</p>
          <p className='mt-[10px] text-black opacity-90 text-[20px] xl:text-[32px] text-center font-[700] tracking-[0px] leading-[22px] xl:leading-[36px] '>Contanos sobre tu proyecto</p>
          <p className='mt-[10px] text-black opacity-80 text-[18px] xl:text-[32px] text-center font-[700] tracking-[0px] leading-[22px] xl:leading-[36px] '>Cotiza tu sitio ya!</p>
          <div className='flex justify-center'>
                  <a href="https://api.whatsapp.com/send?phone=542236901801" target='blank' className="botom mt-[32px] xl:mt-6 py-[6px] xl:py-[10px] px-[12px] xl:px-[20px] text-azul-900 text-[14px] xl:text-[20px] font-[600] tracking-[.3px] drop-shadow border border-azul-900 rounded-[6px] shadow-xl shadow-[#45a5ad98]">
                    Contáctanos
                  </a>
           </div>
    </div>
  );
};

export default Contacto;