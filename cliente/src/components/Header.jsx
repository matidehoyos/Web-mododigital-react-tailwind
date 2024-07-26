import React from 'react';

const Header = () => {
  return (
        <div class="bg-[url('/bg1.jpeg')] bg-bottom bg-cover min-h-screen w-screen pt-20">
                <p className='font-normal tracking-[.03em] text-white opacity-60 text-center text-lg drop-shadow-md w-60 m-auto leading-5'>¿Buscas un sitio web que represente a tu negocio?</p>
                <img src="./marca.png" alt="Logo Modo Digital." className='w-60 mx-auto mt-16' />
                <h1 className='w-96 mt-1 mx-auto text-center text-white opacity-85 font-montserrat font-bold text-5xl tracking-tighter leading-10 drop-shadow-md'>Diseño web <br/>profesional</h1>
                <p className='w-11/12 mt-16 mx-auto text-pretty text-center text-white opacity-80 font-montserrat text-xl drop-shadow-md leading-5'>Suma prestigio, jerarquia y posicionamiento para tu negocio con un software hecho a tu medida.</p>
                <div class="flex justify-center mt-12">
                     <a href="#contacto">
                        <button class="bg-red-800 text-white opacity-70 py-2 px-4 rounded-md shadow-2xl shadow-red-600 leading-0 tracking-tighter">Comencemos</button>
                    </a>
                </div>
        </div>
  );
};

export default Header;
