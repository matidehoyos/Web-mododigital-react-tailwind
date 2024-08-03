import React from 'react';

const data = [
  {
    title: 'Responsive design',
    image: 'respon.png',
    paragraph: 'Los sitios cuentan con un diseño pensado para una excelente adaptabilidad a los diferentes dispositivos.',
  },
  {
    title: 'Diseño exclusivo',
    image: 'disweb.jpg',
    paragraph: 'Creamos el sitio basado firmemente en tu marca y caracteristicas. Brindamos atencion personalizada para cada caso en particular.',
  },
  {
    title: 'SEO friendly',
    image: 'seo.jpg',
    paragraph: 'Arquitectamente estructurados para posicionarse organicamente en los principales buscadores, como Google, Bing, etc.',
  },
];

const Carasterist = () => {
  

  return (
    <div className="w-screen px-[25px] xl:px-[5%] xl:py-[130px] pb-[40px] flex flex-col xl:flex-row items-center xl:items-stretch justify-center xl:gap-10 bg-[rgb(220,220,220)]">
        {
            data.map((box,i) => (
                <div key={i} className="w-[100%] xl:w-[29%] mb-[45px] xl:py-[20px] xl:px-[20px] xl:mb-0 xl:bg-[rgb(240,240,240)] xl:rounded-sm xl:border xl:border-[#222]">
                    <h2 className="text-xl xl:text-[24px] text-gray-800 font-semibold xl:font-[700] mb-2 xl:mb-4">{box.title}</h2>
                    <img src={box.image} alt={box.title} className="w-full xl:w-[100%] h-[140px] xl:h-[200px] object-cover object-top mb-2 opacity-80"  />
                    <p className='text-gray-700 text-[17px] font-[650] tracking-[.5px] leading-[21px]'>{box.paragraph}</p>
                </div>
            ))
        }
    </div>
  );
};

export default Carasterist;
