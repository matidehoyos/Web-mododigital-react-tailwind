import React from 'react';

const Header = () => {
  return (
        <div className="bg-[url('/bg5.jpeg')] bg-cover bg-top h-auto w-screen pt-[75px] pb-[90px]">
                <p className='m-auto tracking-[0.6px] text-white opacity-95 text-center text-[18px] font-medium drop-shadow'>¿Necesitas un sitio web?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-[60%] mx-auto mt-6 bg-black bg-opacity-20 relative -left-[20px]' />
                <h1 className='mx-auto text-center text-white font-[800] text-[54px] tracking-[-.8px] leading-[40px] drop-shadow'>Diseño web<br/><span className='font-[300] text-[32px] relative -top-[8px] left-[50px]'>profesional</span></h1>
                <p className='w-[90%] mt-32 mx-auto text-pretty text-center text-white opacity-90 drop-shadow text-[21px] font-semibold leading-[26px] bg-black bg-opacity-30'>Prestigio, jerarquia y posición con un software hecho <span className='text-verde-900'>a su medida.</span></p>
        </div>
  );
};

export default Header;
