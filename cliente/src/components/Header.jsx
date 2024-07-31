import React from 'react';

const Header = () => {
  return (
        <div className="bg-[url('/bg5.jpeg')] bg-cover bg-top h-auto w-screen py-[80px]">
                <p className='m-auto bg-black bg-opacity-5 tracking-[0.6px] text-white opacity-85 text-center text-[22px] font-bold drop-shadow'>¿Necesitas un sitio web?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-[64%] mx-auto mt-6' />
                <h1 className='mx-auto text-center text-white font-montserrat font-[600] text-[46px] tracking-[-1.1px] leading-[40px] drop-shadow-md'>Diseño web<br/>profesional</h1>
                <p className='w-[88%] mt-40 mx-auto p-2 text-pretty text-center text-white opacity-80 drop-shadow-sm font-montserrat text-[24px] font-semibold leading-[26px] bg-black bg-opacity-10'>Prestigio, jerarquia y posición con un software hecho<br/><span className='text-verde-900'>a su medida.</span></p>
        </div>
  );
};

export default Header;
