import React from 'react';

const Portfolio = () => {
  return (
    <div class="w-screen py-[70px] px-[15px] overflow-x-hidden bg-[#1c3133]">
          <h4 className=' mb-[12px] text-[20px] text-[#b9b9b9] tracking-wide leading-[21px] font-[600]'>PORTFOLIOS<br/><span className='text-[#548589] text-[17px] leading-none'>para profesionales</span></h4>
          <img src="porfolio1.jpeg" alt="imagen website" className='w-[75%] h-[140px] object-cover object-top opacity-80 rounded-md' />
          <p className='w-[98%] mt-[12px] text-white opacity-85 text-[16px] font-[600] leading-tight tracking-[.86px] '>Una web que muestre a la perfeccion tus proyectos, tu carrera, tu preparacion, y todo lo que se refiera a tu profesion. <br/> </p>
    </div>
  );
};

export default Portfolio;