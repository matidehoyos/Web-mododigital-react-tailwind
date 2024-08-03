import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';


const Header = () => {


  return (
        <div className="bg-[url('/bg7.jpg')] bg-cover bg-center bg-no-repeat h-[100vh] xl:h-auto w-screen">
                <div className='w-screen h-[100vh] bg-black bg-opacity-75 blur-sm absolute overflow-hidden'></div>
                <button className='p-[8px] z-50 bg-[#000] fixed bottom-[15px] right-[10px] rounded-[50%] border border-gray-800'><a href="https://api.whatsapp.com/send?phone=542236901801" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-[32px] text-azul-900'/></a></button>
                <p className='m-auto pt-[80px] xl:pt-[120px] tracking-[0.3px] text-[rgb(180,180,180)] opacity-95 text-center text-[16px] xl:text-[24px] font-montserrat font-[600] italic'>¿Buscas un sitio a tu medida?</p>
                <img src="./logoxl.png" alt="Logo Modo Digital." className='w-[58%] xl:w-[500px] h-[50px] xl:h-[200px] px-2 center object-contain mx-auto mt-12 opacity-95 bg-black bg-opacity-10' />
                <h1 className='mx-auto mt-2 xl:mt-0 text-center text-white opacity-75 font-[550] text-[42px] xl:text-[72px] font-montserrat tracking-[-.8px] leading-[28px] drop-shadow'>Desarrollo web<br/><span className='opacity-55 text-[32px] font-[600]'>profesional</span></h1>
                <p className='w-[92%] mt-20 mx-auto p-2 text-pretty text-center text-[rgb(180,180,180)] opacity-95 text-[18px] font-[600] tracking-[.3px] leading-[25px] font-montserrat italic'>Prestigio, jerarquia y credibilidad para tu negocio.</p>
                <div className="flex justify-center">
                  <a href="#tipos" className="botom mt-14 py-[6px] px-[14px] text-verde-900 text-[16px] font-[600] tracking-[.3px] drop-shadow border border-verde-900 rounded-[6px]">
                    Comencemos
                  </a>
                </div>
        </div>
  );
};

export default Header;
