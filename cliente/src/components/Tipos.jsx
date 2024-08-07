import Ecommerce from './Ecommerce';
import Emprend from './Emprend';
import Portfolio from './Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Tipos = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div class="w-[100%] pt-[50px] md:py-[180px] bg-[rgb(20,20,20)] md:bg-[#111]" id="tipos">
        <h2 className='text-[20px] md:text-[24px] xl:text-[28px] font-[500] text-center tracking-[.5px] text-white opacity-70 drop-shadow' data-aos="zoom-in" data-aos-duration="800">¿Que tipos de webs creamos?</h2>
        <div className='w-[100%] xl:w-[90%] md:py-[80px] xl:py-[90px] xl:mx-auto md:flex md:justify-center md:items-stretch md:gap-4 md:flex-wrap xl:justify-center xl:items-strech xl:gap-10'>
          <div className='md:w-[44%] xl:w-[29%] md:bg-[#222] overflow-x-hidden md:border md:border-black xl:rounded-md' data-aos="fade-up" data-aos-duration="800">
            <Ecommerce />
          </div>
          <div className='md:w-[44%] xl:w-[29%] md:bg-gray-200 overflow-x-hidden md:border md:border-black xl:rounded-md'>
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