import React from 'react';
import { FaBuilding, FaCaretRight, FaCartPlus, FaCheck, FaPlaneArrival, FaStore, FaTencentWeibo } from 'react-icons/fa';
import Ecommerce from './Ecommerce';
import Emprend from './Emprend';
import Portfolio from './Portfolio';

const Tipos = () => {
  return (
    <div class="w-[100%] pt-[50px] md:pt-[100px] xl:pb-[30px]  bg-[rgb(30,30,30)] md:bg-[#111]" id="tipos">
        <h2 className='text-[20px] md:text-[24px] xl:text-[28px] font-[500] text-center tracking-[.5px] text-white opacity-70 drop-shadow'>¿Que tipos de webs creamos?</h2>
        <div className='w-[100%] xl:w-[90%] md:py-[80px] xl:py-[90px] xl:mx-auto md:flex md:justify-center md:items-stretch md:gap-4 md:flex-wrap xl:justify-center xl:items-strech xl:gap-10'>
          <div className='md:w-[44%] xl:w-[29%] md:bg-[#222] overflow-x-hidden md:border md:border-black xl:rounded-md'>
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