import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Interact = () => {
      useEffect(() => {
            AOS.init(); 
          }, []);

  return (

        <div className="w-screen px-[25px] md:px-0 py-[50px] md:py-[180px] bg-[rgb(220,220,220)] md:bg-[rgb(225,225,225)]">
            <div className="w-[100%] md:w-[90%] xl:w-[82%] md:mx-auto bg-[url('/diseno.jpeg')] bg-cover bg-center md:bg-[url('/disenoxl.jpeg')] md:bg-fixed rounded-sm md:rounded-md" data-aos="fade-up" data-aos-duration="1000">
                  <h3 className='py-[90px] md:py-[140px] bg-[#111] bg-opacity-60 text-[#077a82] text-[18px] md:text-[38px] font-[500] md:font-[700] text-center leading-[22px] md:leading-[52px] tracking-[.6px] drop-shadow'>DISEÑOS INTERACTIVOS,<br/>ATRACTIVOS Y ELEGANTES</h3>
            </div>  
        </div>
  );
};

export default Interact;