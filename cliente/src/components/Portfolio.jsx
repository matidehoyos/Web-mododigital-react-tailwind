import React from 'react';

const Portfolio = () => {
  return (
    <div class="w-screen py-16 px-[15px] pb-[100px] overflow-x-hidden bg-[#092527]">
          <img src="portfolio.jpeg" alt="imagen website" className='w-[100%] opacity-70 rounded-md' />
          <h4 className=' mt-[15px] text-[24px] text-[#50c6cc] tracking-wide leading-[28px] font-[600]'>PORTFOLIOS<br/><span className='text-gray-300 text-[20px] leading-[20px]'>PARA PROFESIONALES</span></h4>
          <p className='w-[98%] mt-[12px] text-white text-[20px] leading-tight tracking-[.8px] font-[300]'>Da a conocer tu negocio frente a tus potenciales clientes, generando confianza y ganando prestigio, con un sitio web que grafique tu actividad, muestre tu producto, revele la  informacion importante de tu emprendimiento, reuna las redes sociales y canales de difusion. Mantenete siempre actualizado y en comunicacion directa con tu publico. <br/> </p>
    </div>
  );
};

export default Portfolio;