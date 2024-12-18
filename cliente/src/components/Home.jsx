import About from './About'
import Carasterist from './Caracterist'
import Carrusel from './Carrusel'
import Contacto from './Contacto'
import Footer from './Footer'
import Header from './Header'
import Interact from './Interact'
import NavBar from './NavBar'
import Preguntas from './Preguntas'
import Tipos from './Tipos'

function Home() {

  return (
        <>
        <NavBar />
        <Header />
        <Tipos />
        <Interact />
        <Carasterist />
        <Contacto />
        <Carrusel />
        <About />
        <Preguntas />
        <Footer />
        </>
  )
}

export default Home