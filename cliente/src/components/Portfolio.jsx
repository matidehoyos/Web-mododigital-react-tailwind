import React from 'react';

const Portfolio = () => {
  return (
    <div class="w-screen py-16 px-[15px] pb-[100px] overflow-x-hidden bg-[#1c3133]">
          <h4 className=' mb-[12px] text-[20px] text-[#b9b9b9] tracking-wide leading-[21px] font-[600]'>PORTFOLIOS<br/><span className='text-[#548589] text-[17px] leading-none'>para profesionales</span></h4>
          <img src="porfolio1.jpeg" alt="imagen website" className='w-[60%] opacity-80 rounded-md' />
          <p className='w-[98%] mt-[12px] text-white opacity-85 text-[18px] font-[300] leading-tight tracking-[.8px] '>Una web que muestre a la perfeccion tus proyectos, tu carrera profesional, tu preparacion, y todo lo que se rediera a lo profesional. <br/> </p>
    </div>
  );
};

export default Portfolio;