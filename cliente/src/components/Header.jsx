import React from 'react';

const Header = () => {
  return (
        <div class="bg-[url('/bg1.jpeg')] bg-bottom bg-cover h-auto w-screen pt-28 pb-36">
                <p className='tracking-[.03em] text-slate-200 text-center text-xl font-semibold drop-shadow-md w-80 m-auto leading-6'>¿Buscas un sitio web que represente a tu negocio?</p>
                <img src="./marca.png" alt="Logo Modo Digital." className='w-60 mx-auto mt-16' />
                <h1 className='w-96 mt-1 mx-auto text-center text-white opacity-95 font-montserrat text-5xl tracking-tight leading-10 drop-shadow-md'>Diseño web <br/>profesional</h1>
                <p className='w-4/5 mt-16 mx-auto text-pretty text-center text-slate-200 font-montserrat text-xl font-bold drop-shadow-md leading-6'>Sumale prestigio, jerarquia y posicionamiento a tu negocio con un software hecho a su medida.</p>
                <div class="flex justify-center mt-16">
                     <a href="#contacto">
                        <button class="bg-gradient-to-r to-blue-500 from-green-500 text-white py-2 px-3 rounded-md shadow-2xl shadow-white leading-0 tracking-tighter">Comencemos</button>
                    </a>
                </div>
        </div>
  );
};

export default Header;
