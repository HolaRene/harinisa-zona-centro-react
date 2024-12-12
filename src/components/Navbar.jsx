import { Link } from 'react-router-dom' // Importa Link de React Router
import './Estilos/Navbar.css'

export default function Navbar() {
  return (
    <>
      {/* Barra de navegación */}
      <nav className='navbar navbar-expand-md bg-light animate__animated animate__pulse'>
        <div className='container-fluid'>
          <h1 className='navbar-phrase'>¡HARINISA ZONA CENTRO!</h1>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Inicio
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/empresa'>
                  Empresa
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/products'>
                  Productos
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
