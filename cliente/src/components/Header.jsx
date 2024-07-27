import React from 'react';

const Header = () => {
  return (
        <div class="bg-[url('/bg2.jpeg')] bg-bottom bg-cover h-auto w-screen pt-16 pb-20">
                <p className='tracking-[.03em] text-slate-200 text-center text-[18px] opacity-80 font-semibold drop-shadow-sm w-60 m-auto leading-5'>¿Buscas un sitio web de categoria para tu negocio?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-60 mx-auto mt-14' />
                <h1 className='w-[90%] mx-auto text-center text-white opacity-95 font-montserrat font-semibold text-5xl tracking-tight leading-10 drop-shadow-md'>Diseño web <br/>profesional</h1>
                <p className='w-[84%] mt-8 mx-auto py-4 text-pretty text-center text-slate-200 opacity-90 drop-shadow-sm font-montserrat text-xl font-bold leading-6 rounded-lg'>Suma prestigio, jerarquia y posición a tu negocio con un software hecho <span className='text-azul-900'>a su medida.</span></p>
                <div class="flex justify-center mt-10">
                     <a href="#contacto" className='bg-transparent'> 
                        <button class="text-verde-900 py-2 px-3 bg-transparent border border-verde-900 rounded-md shadow-lg shadow-slate-700 leading-0 tracking-tighter">Comencemos</button>
                    </a>
                </div>
        </div>
  );
};

export default Header;
