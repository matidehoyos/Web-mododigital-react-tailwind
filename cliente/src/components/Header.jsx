import React from 'react';

const Header = () => {
  return (
        <div class="bg-[url('/bg2.jpeg')] bg-bottom bg-cover h-auto w-screen pt-16 pb-28">
                <p className='tracking-[.03em] text-slate-200 text-center text-[16px] md:text- font-normal drop-shadow-sm w-60 m-auto leading-5'>¿Buscas un sitio web de categoria para tu negocio?</p>
                <img src="./marca.png" alt="Logo Modo Digital." className='w-60 mx-auto mt-14' />
                <h1 className='w-[70%] mx-auto bg-black bg-opacity-15 text-center text-white opacity-95 font-montserrat text-5xl tracking-tight leading-10 drop-shadow-md'>Diseño web <br/>profesional</h1>
                <p className='w-4/5 mt-14 mx-auto py-4 text-pretty text-center text-azul-900 opacity-70 font-montserrat text-xl font-bold drop-shadow-md leading-6 rounded-lg'>Suma prestigio, jerarquia y posición a tu negocio con un software hecho a su medida.</p>
                <div class="flex justify-center mt-14">
                     <a href="#contacto">
                        <button class="bg-gradient-to-r to-blue-500 from-green-500 text-white py-2 px-3 rounded-md shadow-2xl shadow-white leading-0 tracking-tighter">Comencemos</button>
                    </a>
                </div>
        </div>
  );
};

export default Header;
