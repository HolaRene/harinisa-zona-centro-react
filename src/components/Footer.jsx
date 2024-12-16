import './Estilos/footer.css'
function Footer() {
  return (
    <footer className='py-4'>
      <div className='container'>
        <div className='row'>
          {/* Sección de información de contacto */}
          <div className='col-md-4 mb-3'>
            <h5>Contáctame:</h5>
            <ul className='list-unstyled'>
              <li>
                <i className='bi bi-envelope-fill text-warning' />{' '}
                ajedrez116@gmail.com
              </li>
              <li>
                <i className='bi bi-geo-alt-fill text-danger' /> Boaco,
                Nicaragua
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className='text-center mt-3'>
          <p className='mb-0'>
            &copy; {new Date().getFullYear()} Harinisa. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
