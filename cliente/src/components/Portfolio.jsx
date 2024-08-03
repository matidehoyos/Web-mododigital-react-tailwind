import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Portfolio = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);


  return (
    <div class="w-[100%] py-[70px] md:pt-[30px] px-[15px] md:px-[20px] overflow-x-hidden bg-[#1c3133]">
          <h4 className=' mb-[12px] md:mb-[20px] text-[20px] md:text-[24px] text-[#b9b9b9] tracking-wide leading-[21px] font-[600] md:font-[700]' data-aos="fade-up" data-aos-duration="800" >PORTFOLIOS<br/><span className='text-[#548589] text-[17px] xl:text-[19px] leading-none'>para profesionales</span></h4>
          <img src="porfolio1.jpeg" alt="imagen website" className='w-[75%] md:w-[100%] h-[140px] md:h-[240px] xl:h-auto object-cover object-top opacity-80 rounded-md' data-aos="fade-up" data-aos-duration="800" />
          <p className='w-[98%] md:w-[100%] mt-[12px] md:mt-[20px] text-white opacity-85 text-[16px] md:text-[20px] font-[600] leading-tight tracking-[.86px]' data-aos="fade-up" data-aos-duration="800">Una web que muestre a la perfeccion tus proyectos, tu carrera, tu preparacion, y todo lo que se refiera a tu profesion. <br/> </p>
    </div>
  );
};

export default Portfolio;