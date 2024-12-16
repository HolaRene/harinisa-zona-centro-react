import { Link } from 'react-router-dom'
import './Estilos/Inicio.css'

function Home() {
  return (
    <div>
      <header className='headerc'>
        {/* Título principal */}
        <h2>
          <i className='bi bi-heart-fill text-danger' /> ¡Bienvenido a Harinisa!
        </h2>

        {/* Descripción inicial */}
        <p>
          <i> Nuestras harinas, tu creatividad</i>. Cada uno de nuestros
          productos está diseñado para brindarte una textura perfecta, sabor
          excepcional y resultados consistentes en cada receta. ¿Qué puedes
          hacer con nuestras harinas?
          <br /> <i className='bi bi-bag-check-fill text-primary' /> Panadería:
          Desde panes suaves hasta baguettes crujientes.{' '}
          <i className='bi bi-cupcake text-success' /> Repostería: Bizcochos,
          muffins, galletas y mucho más.{' '}
          <i className='bi bi-cake text-warning' /> Postres y bocadillos:
          Tartas, pasteles y dulces.
        </p>

        {/* Frase motivadora */}
        <p className='inic'>
          <i className='bi bi-emoji-smile text-info' /> ¡Saca al chef que llevas
          dentro!
        </p>
      </header>
      {/* Sección de logos de productos */}
      <section className='productos-logos'>
        <h3 className='text-center mb-3'>Nuestros Productos</h3>
        <div className='d-flex justify-content-center gap-4'>
          <img
            src='./logo/logo-prima-harina.jpg'
            alt='Logo producto 1'
            className='logo-img'
          />
          <img
            src='./logo/logo-ricarina.jpg'
            alt='Logo producto 2'
            className='logo-img'
          />
          <img
            src='./logo/logo-superstar.jpg'
            alt='Logo producto 3'
            className='logo-img'
          />
        </div>
      </section>

      {/* Información de atención */}
      <section className='atencion'>
        <h3 className='text-center mt-5'>Lugares donde atendemos</h3>
        <ul className='text-center'>
          <li>
            <i className='bi bi-geo-alt-fill text-danger' /> Boaco
          </li>
          <li>
            <i className='bi bi-geo-alt-fill text-danger' /> Chontales
          </li>
          <li>
            <i className='bi bi-geo-alt-fill text-danger' /> Costa Caribe Sur
          </li>
        </ul>
      </section>

      {/* Botón para ir a productos */}
      <div className='text-center mt-4'>
        <Link className='btn btn-primary end' to='/products'>
          Ver los productos <i className='bi bi-arrow-right-circle' />
        </Link>
      </div>
    </div>
  )
}

export default Home
