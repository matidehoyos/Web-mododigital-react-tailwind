import { MdFacebook } from "react-icons/md";
import { FaEnvelope, FaInstagram } from 'react-icons/fa';
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowUp } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          subject: 'Subject of email',
          html: 'HTML content of email',
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className='bg-black pt-[50px]'>
          <div className='mb-[40px]'>
            <p className="w-[100%] text-[20px] font-[600] text-gray-400 text-center"><IoLocationSharp className='inline text-azul-900 text-[22px] opacity-80 mr-1' /> Mar Del Plata - Arg</p>
            <p className="w-[100%] mt-1 text-[20px] font-[600] text-gray-400 text-center"><a href="mailto:mati.dehoyosmdp@gmail.com" target='_blank' ><FaEnvelope className='inline text-azul-900 text-[22px] opacity-80 mr-2'/>mododigital@gmail.com</a></p>
            <p className="w-[100%] mt-1 text-[20px] font-[600] text-gray-400 text-center"><a href="https://api.whatsapp.com/send?phone=542236901801" target='_blank'><FaWhatsapp  className='inline text-azul-900 text-[22px] opacity-80 mr-1' />+54 9 2235 448523</a></p>
            <p className="w-[100%] mt-1 text-[20px] font-[600] text-gray-400 text-center"><a target="_blank" href='https://www.instagram.com/mododigital.tech/'><FaInstagram className="inline text-azul-900 text-[22px] opacity-80 mr-2"/>mododigital.tech</a></p>
          </div>

         <div className="w-screen my-[60px] flex justify-center"><a className='px-5 py-3 bg-[#111] border border-[#222] rounded-md' href="#" onClick={() => window.scrollTo(0, 0)}><FaArrowUp className="text-gray-400 text-[24px] font-[800]"/></a></div>
        <footer className="py-3 text-[17px] text-gray-400 text-center trackig-[.6px] leading-[26px] border-t border-gray-800">Todos los derechos reservados.<br/>Sitio desarrollado por <span className="text-azul-900 font-[700]">Modo</span> <span className="text-verde-900 font-[700]">Digital</span> </footer>
    </div>
  )
}

export default Footer