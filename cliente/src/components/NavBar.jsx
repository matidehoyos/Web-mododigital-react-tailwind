import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 500) {
              setIsScrolled(true);
          } else {
              setIsScrolled(false);
          }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);


  const handleShowMenu = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div className={`w-full fixed py-2 md:py-4 z-50 flex justify-between transition-colors duration-300 ${isScrolled ? "bg-[#033b3f] border-b border-azul-900" : "bg-transparent"}`}>
        <img className='w-11 md:w-12 xl:w-14 ml-[10px] md:ml-[20px] xl:ml-[40px]' src="./logo.png" alt="Logo ModoDigital"  />
        <ul className={`hidden lg:flex space-x-4 mr-[40px]`}>
          <li><a href="#tipos" className='text-lg text-green-500 lg:hover:text-azul-900'>Servicios</a></li>
          <li><a href="#contacto" className='text-lg text-green-500 lg:hover:text-azul-900'>Contacto</a></li>
          <li><a href="#frec" className='text-lg text-green-500 lg:hover:text-azul-900'>Faq</a></li>
        </ul>
        <ul className={`w-full flex flex-col items-center space-y-3 md:space-x-5 mr-[10px] absolute ${isVisible ? 'top-[48px] h-[60vh] py-14 bg-[#033b3f]' : '-top-[1000] h-0 py-0 overflow-hidden bg-transparent'} transition-all duration-1000 lg:hidden z-40`}>
          <li><a href="#tipos" className='text-[24px] font-bold text-center text-green-500'>Servicios</a></li>
          <li><a href="#contacto" className='text-[24px] font-bold text-center text-green-500'>Contacto</a></li>
          <li><a href="#frec" className='text-[24px] font-bold text-center text-green-500'>Faq</a></li>
        </ul>
        <button className='text-green-500 mr-[10px] lg:hidden' onClick={handleShowMenu}>
            {isVisible ? <HiX size={32}/> : <HiMenu size={32}/>}
        </button>   
    </div>
  );
};

export default NavBar;