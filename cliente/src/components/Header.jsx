import React from 'react';

const Header = () => {
  return (
        <div className="bg-[url('/bg5.jpeg')] bg-cover bg-center h-[90vh] w-screen pt-[85px]">
                <p className='w-60 m-auto bg-black bg-opacity-10 tracking-[0.6px] text-white text-center text-[22px] font-normal leading-[22px] drop-shadow-lg rounded-sm'>¿Buscas un sitio web <br/>de categoria?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-[64%] mx-auto mt-6' />
                <h1 className='mx-auto text-center text-white font-montserrat font-[600] text-[46px] tracking-[-1.1px] leading-[40px] drop-shadow-md'>Diseño web<br/>profesional</h1>
                <p className='w-[84%] mt-40 mx-auto text-pretty text-center text-white opacity-90 drop-shadow-sm font-montserrat text-[20px] font-bold leading-[22px]'>Suma prestigio, jerarquia y posición a tu negocio con un software hecho <span className='text-verde-900'>a su medida.</span></p>
        </div>
  );
};

export default Header;
