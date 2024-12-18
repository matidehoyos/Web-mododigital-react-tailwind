import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div className="w-full fixed py-4 z-10 flex justify-between bg-transparent backdrop-blur-lg">
        <img className='w-11 md:w-12 xl:w-14 ml-[20px] xl:ml-[40px]' src="./logo.png" alt="Logo ModoDigital"  />
        <ul className={`hidden lg:flex space-x-4 mr-[40px]`}>
          <li><a href="#tipos" className='text-lg text-green-500 lg:hover:text-azul-900'>Servicios</a></li>
          <li><a href="#contacto" className='text-lg text-green-500 lg:hover:text-azul-900'>Contacto</a></li>
          <li><a href="#frec" className='text-lg text-green-500 lg:hover:text-azul-900'>Faq</a></li>
        </ul>
        <ul className={`flex space-x-2 md:space-x-5 mr-[10px] relative ${isVisible ? 'translate-x-0' : 'translate-x-[1000px]'} transition-transform duration-700 lg:hidden`}>
          <li><a href="#tipos" className='text-lg text-green-500'>Servicios</a></li>
          <li><a href="#contacto" className='text-lg text-green-500'>Contacto</a></li>
          <li><a href="#frec" className='text-lg text-green-500'>Faq</a></li>
        </ul>
        <button className='text-green-600 mr-[20px] lg:hidden' onClick={handleShowMenu}>
            {isVisible ? <HiX size={28}/> : <HiMenu size={28}/>}
        </button>   
    </div>
  );
};

export default NavBar;