import './App.css'
import Carasterist from './components/Caracterist'
import Contacto from './components/Contacto'
import Ecommerce from './components/Ecommerce'
import Emprend from './components/Emprend'
import Footer from './components/Footer'
import Header from './components/Header'
import Interact from './components/Interact'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Preguntas from './components/Preguntas'
import Tipos from './components/Tipos'

function App() {

  return (
    <div className='h-auto'>
        <NavBar />
        <Header />
        <Tipos />
        <Interact />
        <Carasterist />
        <Contacto />
        <Preguntas />
        <Footer />
    </div>
  )
}

export default App
