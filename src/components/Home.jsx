import { Link } from 'react-router-dom'
import './Estilos/Inicio.css'

function Home() {
  return (
    <header className='headerc'>
      <h2>
        <i className='bi bi-heart-fill text-danger' /> ¡Bienvenido a Harinisa!
      </h2>
      <p>
        <i> Nuestras harinas, tu creatividad</i>. Cada uno de nuestros productos
        está diseñado para brindarte una textura perfecta, sabor excepcional y
        resultados consistentes en cada receta. ¿Qué puedes hacer con nuestras
        harinas?
        <br /> <i className='bi bi-bag-check-fill text-primary' /> Panadería:
        Desde panes suaves hasta baguettes crujientes.{' '}
        <i className='bi bi-cupcake text-success' /> Repostería: Bizcochos,
        muffins, galletas y mucho más. <i className='bi bi-cake text-warning' />{' '}
        Postres y bocadillos: Tartas, pasteles y dulces.
      </p>
      <p className='inic'>
        <i className='bi bi-emoji-smile text-info' /> ¡Saca al chef que llevas
        dentro!
      </p>
      <Link className='btn btn-primary end' to='/products'>
        Ver los productos <i className='bi bi-arrow-right-circle' />
      </Link>
    </header>
  )
}

export default Home
