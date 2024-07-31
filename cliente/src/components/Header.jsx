import React from 'react';

const Header = () => {
  return (
        <div className="bg-[url('/bg5.jpeg')] bg-cover bg-center h-[90vh] w-screen pt-[60px]">
                <p className='w-auto m-auto tracking-[0.8px] text-[#fff] opacity-85 text-center text-[20px] font-extrabold leading-[21px] drop-shadow-sm'>¿Buscas un sitio web <br/>de categoria?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-[64%] mx-auto mt-12' />
                <h1 className='mx-auto text-center text-white font-montserrat font-[600] text-[46px] tracking-[-1.1px] leading-[40px] drop-shadow-md'>Diseño web<br/>profesional</h1>
                <p className='w-[84%] mt-20 mx-auto text-pretty text-center text-white opacity-90 drop-shadow-sm font-montserrat text-[20px] font-bold leading-[22px]'>Suma prestigio, jerarquia y posición a tu negocio con un software hecho <span className='text-verde-900'>a su medida.</span></p>
        </div>
  );
};

export default Header;
