import './App.css'
import Emprend from './components/Emprend'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Tipos from './components/Tipos'

function App() {

  return (
    <div className='h-auto'>
        <NavBar />
        <Header />
        <Tipos />
        <Emprend />
    </div>
  )
}

export default App
