import React from 'react';

const Header = () => {
  return (
        <div className="bg-[url('/bg.jpeg')] bg-cover bg-top h-[100vh] w-screen">
                <div className='w-screen h-[100vh] bg-black opacity-45 absolute'></div>
                <p className='m-auto pt-[90px] tracking-[0.6px] text-white opacity-80 text-center text-[18px] font-montserrat font-bold italic drop-shadow-sm'>¿Buscas una web a tu medida?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-[72%] mx-auto mt-24 opacity-75' />
                <h1 className='mx-auto text-center text-white font-[600] text-[52px] font-montserrat tracking-[-.8px] leading-[40px] drop-shadow opacity-90'>Diseño web<br/><span className='font-[300] text-[32px] relative -top-[8px] left-[56px] opacity-50'>profesional</span></h1>
                <p className='w-[82%] mt-32 mx-auto text-pretty text-center text-white opacity-80 drop-shadow text-[20px] font-semibold leading-[24px]'>Dale prestigio y credibilidad a tu negocio con un sitio a su medida.</p>
        </div>
  );
};

export default Header;
