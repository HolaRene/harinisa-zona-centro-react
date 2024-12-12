import { Link } from 'react-router-dom'
import './Estilos/Inicio.css'

function Home() {
  return (
    <header className='headerc'>
      <h2>!Bienvenido a Harinisa!</h2>
      <p>
        Nuestras harinas, tu creatividad. Cada uno de nuestros productos está
        diseñado para brindarte una textura perfecta, sabor excepcional y
        resultados consistentes en cada receta. ¿Qué puedes hacer con nuestras
        harinas? Panadería: Desde panes suaves hasta baguettes crujientes.
        Repostería: Bizcochos, muffins, galletas y mucho más. Postres y
        bocadillos: Tartas, pasteles y dulces. Batidos y empanizados: Perfectos
        para recetas saladas y frituras doradas. ¡Saca al chef que llevas
        dentro!
      </p>
      <Link className='btn end' to='/products'>
        Ver los productos <i className='fas fa-angle-double-right' />
      </Link>
    </header>
  )
}

export default Home
