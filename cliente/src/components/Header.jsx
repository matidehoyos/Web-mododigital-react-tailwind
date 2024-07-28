import React from 'react';

const Header = () => {
  return (
        <div class="bg-[url('/bg3.jpeg')] bg-bottom bg-cover h-auto w-screen pt-24 pb-20">
                <p className='w-[80%] m-auto tracking-[0.4px] text-slate-300 text-center text-[20px] font-semibold drop-shadow-sm leading-6'>¿Buscas un sitio web de categoria para tu negocio?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-60 mx-auto mt-14' />
                <h1 className='mx-auto text-center text-slate-200 font-montserrat font-semibold text-5xl tracking-[-1.1px] leading-10 drop-shadow-md'>Diseño web<br/>profesional</h1>
                <p className='w-[84%] mt-20 mx-auto py-4 text-pretty text-center text-slate-200 opacity-90 drop-shadow-sm font-montserrat text-xl font-bold leading-6 rounded-lg'>Suma prestigio, jerarquia y posición a tu negocio con un software hecho <span className='text-azul-900'>a su medida.</span></p>
                <div class="flex justify-center mt-16">
                     <a href="#contacto" className='bg-transparent'> 
                        <button class="bg-verde-900 bg-opacity-60 text-white py-2 px-3 font-semibold rounded-md shadow-lg shadow-slate-600 leading-0 tracking-[0.6px]">Comencemos</button>
                    </a>
                </div>
        </div>
  );
};

export default Header;
