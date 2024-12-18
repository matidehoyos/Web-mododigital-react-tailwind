import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Ecommerce from './Ecommerce';
import Emprend from './Emprend';
import Portfolio from './Portfolio';

const Tipos = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className="w-[100%] pt-[50px] md:py-[80px] bg-white lg:bg-[#aaa]" id="tipos">
        <h2 className='text-[22px] md:pb-[30px] md:text-[24px] xl:text-[32px] font-[700] text-center tracking-[.5px] text-[#222] opacity-80 drop-shadow' data-aos="zoom-in" data-aos-duration="800">¿Que tipos de webs creamos?</h2>
        <div className='w-[100%] xl:w-[90%] md:py-[0px] xl:mx-auto md:flex md:justify-center md:items-stretch md:gap-4 md:flex-wrap xl:justify-center xl:items-strech xl:gap-10'>
          <div className='md:w-[44%] xl:w-[29%] lg:bg-[#151515] overflow-x-hidden md:border md:border-black xl:rounded-md' data-aos="fade-up" data-aos-duration="800">
            <Ecommerce />
          </div>
          <div className='md:w-[44%] xl:w-[29%] md:bg-gray-50 overflow-x-hidden md:border md:border-black xl:rounded-md'>
            <Emprend />
          </div>
          <div className=' md:w-[90%] xl:w-[29%] md:bg-[#1c3133] overflow-x-hidden md:border md:border-black xl:rounded-md'>
            <Portfolio />
          </div>
        </div>
    </div>
  );
};

export default Tipos;