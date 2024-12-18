import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);


  return (
        <div id='header' className="bg-[url('/bg7.jpg')] xl:bg-[url('/bgxl.jpeg')] bg-center xl:bg-bottom bg-cover xl:bg-fixed h-[100vh] xl:h-[900px] xl:pb-[120px] w-screen">
                <div className='w-screen h-[100vh] xl:h-[900px] bg-black bg-opacity-75 md:bg-opacity-85 xl:bg-opacity-55 absolute overflow-hidden'></div>
                <button className='p-[9px] xl:p-[20px] z-50 bg-[#111] fixed bottom-[15px] right-[10px] xl:right-[20px] rounded-[50%] border border-verde-900'><a href="https://api.whatsapp.com/send?phone=542236901801" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-[34px] text-verde-900'/></a></button>
                <p className='m-auto pt-[80px] md:pt-[100px] xl:pt-[120px] tracking-[0.3px] text-[#ddd] text-center text-[16px] md:text-[22px] xl:text-[28px] font-montserrat font-[600] italic' data-aos="fade-up" data-aos-duration="1000">¿Buscas un sitio web a tu medida?</p>
                <img src="./logoxl.png" alt="Logo Modo Digital." className='w-[240px] md:w-[400px] xl:w-[500px] h-[50px] xl:h-auto px-2 center object-contain mx-auto mt-12 opacity-95 bg-black bg-opacity-10' data-aos="fade-up" data-aos-duration="1000"/>
                <h1 className='mx-auto mt-2 md:mt-4 xl:mt-5 text-center text-white font-[550] text-[42px] md:text-[56px] xl:text-[72px] font-montserrat tracking-[-.8px] leading-[28px] drop-shadow' data-aos="fade-up" data-aos-duration="1000">Desarrollo web<br/><span className='opacity-85 text-[32px] md:text-[36px] md:relative md:top-3 xl:relative xl:top-5 xl:text-[46px] font-[600]'>profesional</span></h1>
                <p className='w-[92%] mt-20 md:mt-[140px] xl:mt-[140px] mx-auto p-2 text-pretty text-center text-[#ddd] text-[18px] md:text-[22px] xl:text-[23px] font-[600] tracking-[.3px] leading-[25px] font-montserrat italic' data-aos="fade-up" data-aos-duration="1000">Prestigio, jerarquía y credibilidad para tu negocio.</p>
                <div className="flex justify-center">
                    <a href="#tipos" className="mt-12 py-[6px] px-[14px] bg-green-900 text-[16px] md:text-[18px] font-[600] tracking-[.3px] drop-shadow border border-azul-900 rounded-[6px]">
                      Comencemos
                    </a>
                </div>
        </div>
  );
};

export default Header;
