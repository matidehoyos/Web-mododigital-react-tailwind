import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const About = () => {
    AOS.init(); 
    useEffect(() => {
    }, []);


  return (
    <div class="w-[100%] py-[40px] md:py-[120px] md:mx-auto md:flex md:flex-col px-[20px] md:px-[4%] overflow-x-hidden bg-[#161616] md:bg-[#111">
       <div className='md:w-[90%] mx-auto'>
          <img src="/ab.jpeg" className='w-[100%] h-[280px] object-cover object-center  md:w-[100%] md:h-[auto] rounded-sm' alt="Imagen oficina" data-aos="fade-up" data-aos-duration="800"/>
       </div>
       <div className='md:flex-col md:justify-start items-start md:w-[90%] mx-auto'>
            <p className='md:w-[100%] xl:w-[100%] mt-[20px] md:mt-[20px] text-[18px] md:text-[26px] font-[500] md:text-left text-gray-500 tracking-[.3px] leading-[24px] md:leading-[30px] italic' data-aos="fade-up" data-aos-duration="800">Somos una agencia de desarrollo web, con base en Mar Del Plata, Argentina. Nos apasiona la innovacion y el descubrimiento de nuevas tecnologías. Nos actualizamos constantemente, para  garantizar siempre un producto vigente, innovador, y de categoria.</p>
       </div>
       <img src="./4.png" className='w-[100%] md:hidden mx-auto' alt="logo modo digital." />
    </div>
  );
};

export default About;