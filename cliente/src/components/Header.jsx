import React from 'react';

const Header = () => {
  return (
        <div className="bg-[url('/bg6.jpeg')] bg-cover h-[100vh] w-screen">
                <p className='m-auto pt-[100px] tracking-[0.3px] text-white opacity-80 text-center text-[18px] font-montserrat font-[600] italic'>¿Buscas un sitio a tu medida?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-[64%] mx-auto mt-12 bg-black bg-opacity-10' />
                <h1 className='mx-auto mt-3 text-center text-white font-[550] text-[46px] font-montserrat tracking-[-.8px] leading-[30px] drop-shadow'>Desarrollo web<br/><span className='opacity-50 text-[32px] font-[600]'>profesional</span></h1>
                <p className='w-[92%] mt-20 mx-auto p-2 text-pretty text-center text-white opacity-70 drop-shadow text-[22px] font-[600] tracking-[.3px] leading-[25px] font-montserrat italic'>Prestigio, jerarquia y credibilidad para tu negocio.</p>
                <div className="flex justify-center">
                  <a href="#" className="mt-14 py-[6px] px-[14px] text-white text-[16px] font-[600] tracking-[.3px] drop-shadow border rounded-sm">
                    Comencemos
                  </a>
                </div>
        </div>
  );
};

export default Header;
