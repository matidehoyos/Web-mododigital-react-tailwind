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
    <div className="w-screen py-[40px] flex-col items-center justify-center bg-[rgb(220,220,220)]">
        {
            data.map(box => (
                <div className="w-[100%] mb-[45px] px-8">
                    <h2 className="text-xl text-gray-800 font-semibold mb-2">{box.title}</h2>
                    <img src={box.image} alt={box.title} className="w-full h-[140px] object-cover object-top mb-2 opacity-80"  />
                    <p className='text-gray-900 text-[17px] font-[500] tracking-[.5px] leading-[21px]'>{box.paragraph}</p>
                </div>
            ))
        }
    </div>
  );
};

export default Carasterist;
