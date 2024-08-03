import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const data = [
  {
    title: 'Responsive design',
    image: 'respon.jpg',
    paragraph: 'Los sitios cuentan con un diseño pensado para una excelente adaptabilidad a los diferentes dispositivos.',
  },
  {
    title: 'Diseño exclusivo',
    image: 'disweb.jpg',
    paragraph: 'Creamos el sitio basado firmemente en tu marca y características. Brindamos atención personalizada para cada cliente en particular.',
  },
  {
    title: 'SEO friendly',
    image: 'seo.jpg',
    paragraph: 'Arquitectónicamente estructurados para posicionarse organicamente en los principales buscadores, como Google, Bing, etc.',
  },
];

const Carasterist = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className="w-screen px-[25px] md:px-[5%] md:py-[130px] pb-[40px] flex flex-col md:flex-row items-center md:items-stretch justify-center md:gap-10 bg-[rgb(220,220,220)] md:bg-[#080808]">
        {
            data.map((box,i) => (
                <div key={i} className="w-[100%] md:w-[29%] mb-[45px] md:py-[20px] md:px-[20px] md:mb-0 md:bg-[rgb(240,240,240)] md:rounded-md md:border md:border-[#222]" data-aos="fade-left" data-aos-duration="800">
                    <h2 className="text-md md:text-[24px] text-gray-800 font-semibold md:font-[700] mb-2 md:mb-4">{box.title}</h2>
                    <img src={box.image} alt={box.title} className="w-full md:w-[100%] h-[140px] md:h-[200px] object-cover object-top mb-2 opacity-80"  />
                    <p className='text-gray-700 text-[17px] font-[650] tracking-[.5px] leading-[21px]'>{box.paragraph}</p>
                </div>
            ))
        }
    </div>
  );
};

export default Carasterist;
