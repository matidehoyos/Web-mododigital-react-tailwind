import React from 'react';

const Header = () => {
  return (
        <div class="bg-[url('/bg1.jpeg')] bg-bottom bg-cover min-h-screen w-screen pt-20">
                <p className='tracking-[.05em] text-white opacity-80 text-center text-xl font-semibold drop-shadow-md w-80 m-auto leading-6'>¿Buscas un sitio web que represente a tu negocio?</p>
                <img src="./marca.png" alt="Logo Modo Digital." className='w-80 mx-auto mt-20' />
                <h1 className='w-96 mt-1 mx-auto text-center text-white opacity-95 font-montserrat font-bold text-5xl tracking-tight leading-10 drop-shadow-md'>Diseño web <br/>profesional</h1>
                <p className='w-11/12 mt-16 mx-auto text-pretty text-center text-white opacity-80 font-montserrat text-2xl drop-shadow-md leading-6'>Sumale posicionamiento, jerarquia y prestigio a tu negocio con un software hecho a su medida.</p>
                <div class="flex justify-center mt-12">
                     <a href="#contacto">
                        <button class="bg-gradient-to-r to-blue-500 from-green-500 text-white opacity-70 py-2 px-4 rounded-md shadow-2xl shadow-white leading-0 tracking-tighter">Comencemos</button>
                    </a>
                </div>
        </div>
  );
};

export default Header;
