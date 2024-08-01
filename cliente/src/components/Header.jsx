import React from 'react';

const Header = () => {
  return (
        <div className="bg-[url('/bg.jpeg')] bg-cover bg-bottom h-[100vh] w-screen">
                <div className='w-screen h-[100vh] bg-black opacity-60 absolute'></div>
                <p className='m-auto pt-[90px] tracking-[0.3px] text-white opacity-80 text-center text-[18px] font-montserrat font-[600] italic'>¿Buscas una web a tu medida?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-[72%] mx-auto mt-12 opacity-65' />
                <h1 className='mx-auto text-center text-white font-[600] text-[52px] font-montserrat tracking-[-.8px] leading-[40px] drop-shadow opacity-80'>Diseño web<br/><span className='opacity-60'>profesional</span></h1>
                <p className='w-[90%] mt-28 mx-auto p-2 text-pretty text-center text-white opacity-80 drop-shadow text-[22px] font-semibold leading-[24px]'>Prestigio, jerarquia y credibilidad para tu negocio.</p>
        </div>
  );
};

export default Header;
