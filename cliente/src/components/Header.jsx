import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';


const Header = () => {


  return (
        <div className="bg-[url('/bg7.jpg')] bg-cover bg-center bg-no-repeat xl:bg-[url('/bgxl.jpeg')] xl:bg-bottom xl:bg-fixed h-[100vh] xl:h-[900px] xl:pb-[120px] w-screen">
                <div className='w-screen h-[100vh] xl:h-[900px] bg-black bg-opacity-70 xl:bg-opacity-65 blur-sm xl:blur-lg absolute overflow-hidden'></div>
                <button className='p-[10px] xl:p-[16px] z-50 bg-[#000] fixed bottom-[15px] right-[10px] xl:right-[20px] rounded-[50%] border border-verde-900'><a href="https://api.whatsapp.com/send?phone=542236901801" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-[36px] text-verde-900'/></a></button>
                <p className='m-auto pt-[80px] xl:pt-[120px] tracking-[0.3px] text-[rgb(180,180,180)] opacity-95 text-center text-[16px] xl:text-[24px] font-montserrat font-[600] italic'>¿Buscas un sitio a tu medida?</p>
                <img src="./logoxl.png" alt="Logo Modo Digital." className='w-[58%] xl:w-[420px] h-[50px] xl:h-auto px-2 center object-contain mx-auto mt-12 opacity-95 bg-black bg-opacity-10' />
                <h1 className='mx-auto mt-2 xl:mt-5 text-center text-white opacity-75 font-[550] text-[42px] xl:text-[72px] font-montserrat tracking-[-.8px] leading-[28px] drop-shadow'>Desarrollo web<br/><span className='opacity-55 text-[32px] xl:relative xl:top-5 xl:text-[42px] font-[600]'>profesional</span></h1>
                <p className='w-[92%] mt-20 xl:mt-[140px] mx-auto p-2 text-pretty text-center text-[rgb(180,180,180)] opacity-95 text-[18px] xl:text-[22px] font-[600] tracking-[.3px] leading-[25px] font-montserrat italic'>Prestigio, jerarquia y credibilidad para tu negocio.</p>
                <div className="flex justify-center">
                  <a href="#tipos" className="botom mt-14 py-[6px] px-[14px] text-azul-900 text-[16px] font-[600] tracking-[.3px] drop-shadow border border-azul-900 rounded-[6px]">
                    Comencemos
                  </a>
                </div>
        </div>
  );
};

export default Header;
