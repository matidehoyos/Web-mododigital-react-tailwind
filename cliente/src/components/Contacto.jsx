import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaPhone } from 'react-icons/fa';



const Contacto = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div class="w-screen py-[70px] md:py-[120px] px-[20px] overflow-x-hidden bg-[rgb(245,245,245)]" >
          <p className='mt-[10px] text-black opacity-90 text-[20px] md:text-[42px] text-center font-[700] tracking-[0px] leading-[22px] md:leading-[36px]' data-aos="fade-up" data-aos-duration="800">Contanos sobre tu proyecto</p>
          <p className='mt-[10px] text-black opacity-85 text-[20px] md:text-[42px] text-center font-[700] tracking-[0px] leading-[22px] md:leading-[36px]' data-aos="fade-up" data-aos-duration="800">Cotizá tu sitio ya!</p>
          <div className='flex justify-center'>
                  <a href="https://api.whatsapp.com/send?phone=542236901801" target='blank' className="botom mt-[32px] md:mt-10 py-[6px] md:py-[8px] px-[12px] md:px-[16px] text-azul-900 text-[16px] md:text-[20px] font-[600] tracking-[.3px] drop-shadow border border-azul-900 rounded-[4px] shadow-xl shadow-[#45a4ad72] xl:hover:bg-azul-900 xl:hover:text-white" data-aos="fade-up" data-aos-duration="800">
                    Contáctanos
                  </a>
           </div>
    </div>
  );
};

export default Contacto;