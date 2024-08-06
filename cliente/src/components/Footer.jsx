import { FaEnvelope, FaInstagram } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowUp } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      });
    };
  }, []);
 
  return (
    <div className='bg-black pt-[70px] xl:pt-[120px]'>
          <div className='mb-[40px]'>
            <p className="w-[100%] text-[18px] xl:text-[22px] font-[500] text-gray-500 text-center"><IoLocationSharp className='inline text-azul-900 text-[22px] xl:text-[26px] opacity-80 mr-1' /> Mar Del Plata - Arg</p>
            <p className="w-[100%] mt-3 text-[18px] xl:text-[22px] font-[500] text-gray-500 text-center"><a href="mailto:mati.dehoyosmdp@gmail.com" target='_blank' ><FaEnvelope className='inline text-azul-900 text-[22px] xl:text-[26px] opacity-70 mr-2'/>contacto@mododigital.com</a></p>
            <p className="w-[100%] mt-3 text-[18px] xl:text-[22px] font-[500] text-gray-500 text-center"><a href="https://api.whatsapp.com/send?phone=542236901801" target='_blank'><FaWhatsapp  className='inline text-azul-900 text-[22px] xl:text-[26px] opacity-80 mr-1' />+54 9 2236901801</a></p>
            <p className="w-[100%] mt-3 text-[18px] xl:text-[22px] font-[500] text-gray-500 text-center"><a target="_blank" href='https://www.instagram.com/mododigital.tech/'><FaInstagram className="inline text-azul-900 text-[22px] xl:text-[26px] opacity-80 mr-2"/>instagram</a></p>
          </div>

         <div className="w-screen my-[60px] flex justify-center"><a className='px-5 py-3 bg-[#111] border border-[#222] rounded-md' href="#header" onClick={() => window.scrollTo(0, 0)}><FaArrowUp className="text-gray-400 text-[24px] font-[800]"/></a></div>
        <footer className="py-3 xl:py-5 text-[14px] xl:text-[18px] xl:font-[500] text-gray-400 text-center trackig-[.6px] leading-[23px] border-t border-gray-800">Todos los derechos reservados - Copyright 2024 </footer>
    </div>
  )
}

export default Footer