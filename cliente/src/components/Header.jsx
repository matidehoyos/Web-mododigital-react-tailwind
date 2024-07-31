import React from 'react';

const Header = () => {
  return (
        <div className="h-[80vh] overflow-hidden">
              <img src="./bg5.jpeg" className='w-screen h-auto object-cover absolute' alt="Imagen de escritorio." />
              <div className='pt-[70px]'>
                <p className='w-auto m-auto tracking-[0.4px] text-[#fff] opacity-75 text-center text-[16px] font-bold drop-shadow-sm'>¿Buscas un sitio web de categoria?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-[64%] mx-auto mt-[40px] opacity-95' />
                <h1 className='mx-auto text-center text-white opacity-95 font-montserrat font-[600] text-[46px] tracking-[-1.1px] leading-10 drop-shadow-md'>Diseño web<br/>profesional</h1>
                <p className='w-[84%] mt-20 mx-auto text-pretty text-center text-white opacity-90 drop-shadow-sm font-montserrat text-xl font-bold leading-6 rounded-lg'>Suma prestigio, jerarquia y posición a tu negocio con un software hecho <span className='text-verde-900'>a su medida.</span></p>
              </div>
        </div>
  );
};

export default Header;
