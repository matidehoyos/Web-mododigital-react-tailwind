import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Emprend = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className="w-[100%] py-16 md:py-[40px] px-[15px] md:px-[20px] pb-[70px] overflow-hidden bg-gray-200 lg:bg-gray-50">
          <img src="dds.jpeg" alt="imagen website" className='w-[85%] md:w-[100%] opacity-90 rounded-md'  data-aos="fade-up" data-aos-duration="800"/>
          <h4 className=' mt-[15px] md:mt-[20px] text-[20px] md:text-[22px] text-gray-900 tracking-wide leading-[22px] font-[600] md:font-[700]' data-aos="fade-up" data-aos-duration="800">SITIOS PARA <br/><span className='text-[#005358] font-[650]'>EMPRENDIMIENTOS</span></h4>
          <p className='w-[100%] mt-[12px] md:mt-[20px] text-gray-900 text-[18px] md:text-[20px] leading-[21px] md:leading-[23px] tracking-[.6px] font-[500] md:font-[600] drop-shadow' data-aos="fade-up" data-aos-duration="800">Date a conocer frente a tus potenciales clientes, generando confianza y ganando prestigio, con un sitio web que grafique tu actividad, muestre tu producto, revele la  información importante, reúna las redes sociales y canales de difusión. Mantenete siempre actualizado y en comunicación directa con tu público. <br/> </p>
    </div>
  );
};

export default Emprend;