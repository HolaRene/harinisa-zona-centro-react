import Contactos from './components/Contactos'
import Productos from './components/Productos'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Empresa from './components/Empresa'
import ScrollButons from './ScrollButtons'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Contactos />} />
        <Route path='/empresa' element={<Empresa />} />
        <Route path='/products' element={<Productos />} />
      </Routes>
      <ScrollButons />
    </BrowserRouter>
  )
}

export default App
