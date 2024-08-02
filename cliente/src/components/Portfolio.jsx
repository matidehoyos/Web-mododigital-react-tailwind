import React from 'react';

const Portfolio = () => {
  return (
    <div class="w-screen py-16 px-[15px] pb-[100px] overflow-x-hidden bg-[#1c3133]">
          <img src="porfolio1.jpeg" alt="imagen website" className='w-[80%] opacity-80 rounded-md' />
          <h4 className=' mt-[12px] text-[22px] text-[#b9b9b9] tracking-wide leading-none font-[600]'>PORTFOLIOS<br/><span className='text-[#548589] text-[18px] leading-none'>para profesionales</span></h4>
          <p className='w-[98%] mt-[12px] text-white text-[20px] leading-tight tracking-[.8px] font-[300]'>Una web que muestre a la perfeccion tus proyectos, tu carrera profesional, tu preparacion, y todo lo que se rediera a lo profesional. <br/> </p>
    </div>
  );
};

export default Portfolio;