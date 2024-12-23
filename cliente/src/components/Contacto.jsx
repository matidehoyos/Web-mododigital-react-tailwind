import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Contacto = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div id='contacto' className="w-screen py-[120px] md:py-[80px] px-[20px] overflow-x-hidden bg-[#fff]" >
          <p className='mt-[10px] text-black opacity-90 text-[23px] md:text-[42px] text-center font-[700] tracking-[0px] leading-[22px] md:leading-[36px]' data-aos="fade-up" data-aos-duration="800">Contanos sobre tu proyecto</p>
          <p className='mt-[10px] text-black opacity-85 text-[23px] md:text-[42px] text-center font-[700] tracking-[0px] leading-[22px] md:leading-[36px]' data-aos="fade-up" data-aos-duration="800">Cotizá tu sitio ya!</p>
          <div className='flex justify-center'>
                  <a href="https://api.whatsapp.com/send?phone=542236901801" target='blank' className="mt-[22px] md:mt-10 py-[6px] md:py-[8px] px-[12px] md:px-[16px] text-white bg-azul-900 text-[16px] md:text-[20px] font-[600] tracking-[.3px] drop-shadow border lg:border-azul-900 rounded-[4px] shadow-xl shadow-[#45a4ad72] xl:hover:bg-azul-900 xl:hover:text-white" data-aos="fade-up" data-aos-duration="800">
                    Contáctanos
                  </a>
           </div>
    </div>
  );
};

export default Contacto;