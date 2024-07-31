import React from 'react';
import { FaCheck } from 'react-icons/fa'

const Tipos = () => {
  return (
    <div class="w-screen pt-[80px] bg-[rgba(256,256,256,.9)]">
        <h2 className='font-extrabold text-center text-[20px] text-black opacity-85 drop-shadow'>¿Que tipos de webs creamos?</h2>
        <div className='w-screen flex-col pt-[60px]'>
            <div className='w-[84%] mx-auto mb-10 py-[4px] pl-[12px] flex-col justify-start items-start bg-slate-800 border border-azul-900'>
                <img src="./ecommerce.png" className='w-[26%]' alt="Ilustracion de comercio electronico." />
                <h3 className='pt-3 text-[20px] text-verde-900 drop-shadow font-bold'>E-commerce</h3>
                <p className='w-[90%] pt-2 text-[18px] text-white font-bold tracking-tight leading-[20px] opacity-95'>Vende por vos las 24hs. Carrito de compras y metodos de pago.</p>
            </div>
            <div className='w-[84%] mx-auto mb-10 py-[4px] pl-[12px] flex-col justify-start items-start bg-slate-800 border border-azul-900'>
                <img src="./institucional.png" className='w-[28%]' alt="Ilustracion de web institucional." />
                <h3 className='pt-3 text-[20px] text-verde-900 drop-shadow  font-bold'>Institucional</h3>
                <p className='w-[90%] pt-2 text-[18px] text-white font-bold tracking-tight leading-[20px] opacity-95'>Reune la informacion relevante del negocio, club, etc. Redes sociales, medios de contacto, blog, canal de difusion.</p>
            </div>
            <div className='w-[84%] mx-auto mb-10 py-[4px] pl-[20px] flex-col justify-start items-start bg-slate-800 border border-azul-900'>
                <img src="./landing.png" className='w-[28%]' alt="Ilustracion de  landing page." />
                <h3 className='pt-3 text-[20px] text-verde-900 drop-shadow font-bold'>Landing page</h3>
                <p className='w-[90%] pt-2 text-[18px] text-white font-bold tracking-tight leading-[20px] opacity-95'>Ideales para campañas publicitarias. Destinadas a un público y objetivo especifico. Convierte visitantes en clientes.</p>
            </div>
            <div className='w-screen mt-20 py-[120px] bg-[url(/diseno.jpeg)] bg-cover bg-bottom bg-slate-900'>
                <h3 className='text-[30px] tracking-widest leading-[50px] font-[900] text-center text-azul-900 drop-shadow'>BLOGS</h3>
                <h3 className='text-[30px] tracking-widest leading-[50px] font-[900] text-center  text-azul-900 drop-shadow'>PORTFOLIOS</h3>
                <h3 className='text-[30px] tracking-widest leading-[50px] font-[900] text-center text-azul-900 drop-shadow'>SOCIAL WEBS</h3>
            </div>
        </div>
        <div className='w-screen py-16 px-[15px]'>
              <h4 className='text-[24px] text-black opacity-90 font-bold'>Ecommerce</h4>
              <p className='text-[18px] text-black opacity-70 font-bold'>Que incluye?</p>
              <ul class="mt-1 pt-4 list-none text-[16px] font-semibold drop-shadow text-black opacity-80 tracking-tight border-t border-black border-opacity-60">
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Panel de control autoadministrable.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]"/>Productos y categorias ilimitados.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Metodos de pago en linea.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Aplicacion de carrito de compras.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Accesos directos a Whatsapp y redes sociales.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Formularios de contacto.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Sector de rewiews de clientes.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Diseño exclusivo y de vanguardia.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Mapas de ubicacion.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />Adaptada a todos los dispositivos.</li>
                <li class="flex items-baseline mb-[2px]"><FaCheck class="mr-1 text-verde-900 text-[10px]" />SEO (Posicionamiento en buscadores)</li>
              </ul>
        </div>    
    </div>
  );
};

export default Tipos;