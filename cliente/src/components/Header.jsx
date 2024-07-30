import React from 'react';

const Header = () => {
  return (
        <div className="h-auto w-screen pt-24 pb-20 bg-stone-50">
                <p className='w-auto m-auto tracking-[0.4px] text-slate-600 text-center text-[20px] font-bold drop-shadow-sm leading-6 break-keep'>¿Buscas un sitio web de categoria?</p>
                <img src="./marca1.png" alt="Logo Modo Digital." className='w-[64%] mx-auto mt-14' />
                <h1 className='mx-auto text-center text-slate-600 font-montserrat font-[600] text-[46px] tracking-[-1.1px] leading-10 drop-shadow-md'>Diseño web<br/>profesional</h1>
                <img src="./dev.jpeg" alt="Imagen desarrollador" className='w-[92%] mx-auto mt-4 border border-verde-900' />
                <p className='w-[84%] mt-2 mx-auto py-2 text-pretty text-center text-slate-700 opacity-90 drop-shadow-sm font-montserrat text-xl font-bold leading-6 rounded-lg'>Suma prestigio, jerarquia y posición a tu negocio con un software hecho <span className='text-azul-900'>a su medida.</span></p>
                <div class="flex justify-center mt-12">
                     <a href="#contacto" className='bg-transparent'> 
                        <button class="text-verde-900 py-2 px-3 font-bold rounded-md border border-verde-900 leading-0 tracking-[0.6px] shadow-xl shadow-verde-900">Comencemos</button>
                    </a>
                </div>
        </div>
  );
};

export default Header;
