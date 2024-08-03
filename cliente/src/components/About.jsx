import React from 'react';

const About = () => {
  return (
    <div class="w-screen py-[70px] xl:py-[120px] px-[20px] xl:px-[150px] overflow-x-hidden bg-[#111]">
       <img src="md.png" className='w-[50%] xl:w-[34%] xl:mx-auto opacity-90' alt="Logo modo digital" />
       <p className='xl:w-[70%] mt-[22px] xl:mx-auto xl:mt-[30px] text-[18px] xl:text-[24px] font-[500] xl:text-center text-gray-500 tracking-[.3px] leading-[24px] xl:leading-[30px] italic'>Somos una agencia de desarrollo web, con base en Mar Del Plata, Argentina. Nos apaciona la innovacion y el descubrimiento de nuevas tecnologias. Nos actualizamos constantemente, para siempre garantizar un producto vigente, innovador, y vanguardia.</p>
    </div>
  );
};

export default About;