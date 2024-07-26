import React from 'react';

const Header = () => {
  return (
<div class="bg-[url('/bg.png')] bg-bottom bg-cover min-h-screen w-screen pt-12">
    <p className='font-semibold tracking-[.03em] text-white opacity-80 text-center text-xl drop-shadow-md w-80 m-auto leading-5'>¿Buscas un sitio web que represente a tu negocio?</p>
    <h5 className='w-60 mx-auto mt-12 text-center text-cyan-700 font-montserrat font-extrabold text-6xl tracking-tighter leading-9'>Modo <br/> <span className='text-verde-900 font-semibold pl-10 relative top-3'>digital</span></h5>
    <h1 className='w-96 mt-5 mx-auto text-center text-white opacity-85 font-montserrat font-bold text-5xl tracking-tight leading-9 drop-shadow-md'>Diseño web <br/>profesional</h1>
    <h1 className='w-80 mt-14 mx-auto text-center text-white opacity-90 font-montserrat text-lg -tracking-tight drop-shadow-md leading-none'>Suma prestigio, jerarquia y posicionamiento para tu negocio con un software hecho a tu medida.</h1>
    <button className='p-0 w-auto mt-16 mx-36 -tracking-tight rouded-md'><a href='' className='bg-red-500 opacity-80 py-2 px-2 rounded-md shadow-2xl shadow-red-900'>Comencemos</a></button>
    </div>
  );
};

export default Header;
