import React from 'react';

const Header = () => {
  return (
        <div class="bg-[url('/bg2.jpeg')] bg-bottom bg-cover h-auto w-screen pt-16 pb-36">
                <p className='tracking-[.03em] text-slate-200 text-center text-[18px] opacity-80 font-semibold drop-shadow-sm w-60 m-auto leading-5'>¿Buscas un sitio web de categoria para tu negocio?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-60 mx-auto mt-14' />
                <h1 className='w-[90%] mx-auto text-center text-white opacity-95 font-montserrat font-semibold text-5xl tracking-tight leading-10 drop-shadow-md'>Diseño web <br/>profesional</h1>
                <p className='w-[84%] mt-14 mx-auto py-4 text-pretty text-center text-slate-300 opacity-90 font-montserrat text-xl font-bold drop-shadow-md leading-6 rounded-lg'>Suma prestigio, jerarquia y posición a tu negocio con un software hecho <span className='text-verde-900'>a su medida.</span></p>
                <div class="flex justify-center mt-14">
                     <a href="#contacto">
                        <button class="text-white py-2 px-3 border rounded-md shadow-2xl shadow-white leading-0 tracking-tighter">Comencemos</button>
                    </a>
                </div>
        </div>
  );
};

export default Header;
