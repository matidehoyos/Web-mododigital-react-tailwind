import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheck } from 'react-icons/fa';

const Ecommerce = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className='w-[100%] pt-[50px] md:pt-[25px] pb-16 px-[15px] md:px-[20px] bg-[#fff] md:bg-[#151515]'>
    <h4 className='text-[22px] md:text-[24px] xl:text-[26px] text-azul-900 lg:text-verde-900 lg:opacity-70 font-bold'>Tiendas online</h4>
    <img src="./store1.jpeg" alt="imagen pagina web" className='w-[85%] md:w-[100%] h-[170px] md:h-[220px] mt-1 mb-3 object-cover object-top' />    
    <p className='text-[16px] md:text-[18px] text-gray-700 lg:text-gray-500 lg:opacity-50 font-bold'>Que incluye?</p>
    <ul className="mt-1 pt-3 list-none text-[18px] font-[600] lg:font-[300] lg:drop-shadow text-gray-700 lg:text-gray-400 tracking-[.5px] leading-tight border-t border-white border-opacity-10" data-aos="fade-right" data-aos-duration="800">
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Panel de control autoadministrable.</li>
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]"/>Productos y categorias ilimitados.</li>
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Métodos de pago en línea.</li>
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Aplicación de carrito de compras.</li>
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Botón a Whatsapp y redes sociales.</li>
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Formularios de contacto.</li>
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Sección rewiews de clientes.</li>
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Diseño exclusivo y de vanguardia.</li>
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Mapas de ubicacion.</li>
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />Adaptada a todos los tamaños y dispositivos.</li>
      <li className="flex items-baseline mb-[1px] md:font-[500]"><FaCheck className="mr-1 md:mr-2 text-verde-900 text-[10px] md:text-[14px]" />SEO (Posicionamiento en buscadores)</li>
    </ul>
</div>  
  );
};

export default Ecommerce;