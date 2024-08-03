import React, { useState } from 'react';

const Preguntas = () => {

  const [preguntas, setPreguntas] = useState([
    {
      id: 1,
      pregunta: '¿Cómo cotizar tu web?',
      respuesta: 'Envianos un WhatsApp o un mensaje en Instagram, contandonos la idea, caracteristicas del proyecto, objetivos, y cotizaremos a la brevedad.',
    },
    {
      id: 2,
      pregunta: '¿Precios?',
      respuesta: 'El presupuesto varía según la idea y caracteristicas de la misma. Será evaluado de manera porsonalizada.',
    },
    {
      id: 3,
      pregunta: '¿Formas de pago?',
      respuesta: 'Al momento del concretar el encargo, se debe abonar una seña. Lo restante sera abonado contra entrega.',
    },
    {
      id: 4,
      pregunta: '¿Tiempos de entrega?',
      respuesta: 'El producto estará listo para su entrega y usabilidad, a partir del septimo dia habil desde el ingraso de la seña correspondiente.',
    },
    {
      id: 5,
      pregunta: '¿Metodos de pago?',
      respuesta: 'Al momento aceptamos transferencia bancaria, o pago en efectivo.',
    },
    {
      id: 6,
      pregunta: '¿Que debes proporcionarnos?',
      respuesta: 'Deberas proporcionar, de tenerlos, logos, colores, informacion del negocio, publico a quien sera dirigida, y todo lo relevante que quieras plasmar en el sitio.',
    },
    

  ]);

  const toggleRespuesta = (id) => {
    setPreguntas((prevPreguntas) =>
      prevPreguntas.map((pregunta) =>
        pregunta.id === id ? { ...pregunta, abierto: !pregunta.abierto } : { ...pregunta, abierto: false }
      )
    );
  };

  return (
    <div className='py-[70px] xl:py-[100px] px-[15px] xl:px-[140px] bg-[#080808]' id='frec'>
      <h4 className='mb-[22px] xl:mb-[40px] text-[22px] xl:text-[28px] font-[700] tracking-[.6px] text-gray-400'>Preguntas frecuentes</h4>
      {preguntas.map((pregunta) => (
        <div key={pregunta.id} className='bg-[#0c0c0c] mb-2 xl:mb-3'>
          <button 
            className='w-[100%] py-1 xl:px-2 text-[#10855a] text-[18px] xl:text-[20px] font-[600] xl:font-[700] text-left tracking-[.5px] '
            onClick={() => toggleRespuesta(pregunta.id)}
          >
            {pregunta.pregunta}
          </button>
          {pregunta.abierto && <p className='xl:w-[75%] py-3 xl:py-4 xl:px-4 text-gray-400 text-[16px] xl:text-[18px] font-[600] tracking-[.6px] leading-[21px] xl:leading-[24px]'>{pregunta.respuesta}</p>}
        </div>
      ))}
    </div>
  );
};

export default Preguntas;
