import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const About = () => {
    AOS.init(); 
    useEffect(() => {
    }, []);


  return (
    <div class="w-screen py-[70px] md:py-[120px] px-[20px] md:px-[150px] overflow-x-hidden bg-[#111]">
       <img src="md.png" className='w-[50%] md:w-[400px] md:mx-auto opacity-90' alt="Logo modo digital" data-aos="fade-up" data-aos-duration="800"/>
       <p className='md:w-[100%] xl:w-[70%] mt-[22px] md:mx-auto md:mt-[30px] text-[18px] md:text-[24px] font-[500] md:text-center text-gray-500 tracking-[.3px] leading-[24px] md:leading-[30px] italic' data-aos="fade-up" data-aos-duration="800">Somos una agencia de desarrollo web, con base en Mar Del Plata, Argentina. Nos apaciona la innovacion y el descubrimiento de nuevas tecnologías. Nos actualizamos constantemente, para  garantizar siempre un producto vigente, innovador, y vanguardia.</p>
    </div>
  );
};

export default About;