import './App.css'
import Ecommerce from './components/Ecommerce'
import Emprend from './components/Emprend'
import Header from './components/Header'
import Interact from './components/Interact'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Tipos from './components/Tipos'

function App() {

  return (
    <div className='h-auto'>
        <NavBar />
        <Header />
        <Tipos />
        <Ecommerce />
        <Emprend />
        <Portfolio />
        <Interact />
    </div>
  )
}

export default App
