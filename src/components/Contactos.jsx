import { Link } from 'react-router-dom'
import './Estilos/contacto.css'
function Contactos() {
  return (
    <>
      {/* Contacto */}
      <section className='contacto py-5'>
        <div className='container'>
          <div className='text-center mb-4'>
            <h2>Contacto</h2>
          </div>
          <div className='row justify-content-center align-items-center'>
            <div className='col-12 col-md-4 text-center mb-4'>
              <img
                src='logo/Don-agustin1.jpg'
                alt='Foto del Ejecutivo de Ventas'
                className='img-fluid'
                width={250}
              />
            </div>
            <div className='col-12 col-md-8 mb-4'>
              <p className='lead'>
                Ejecutivo de Ventas. Con más de 20 años de experiencia en la
                rama de las ventas, el Lic. José Espinoza se dedica a ofrecer
                los mejores productos de Harinisa. Contáctelo para obtener
                información sobre nuestros productos y servicios.
              </p>
              <div className='d-flex flex-column flex-md-row justify-content-center'>
                <Link
                  to='mailto:gia.agenzmmh3@gmail.com'
                  className='btn btn-primary me-md-2 mb-2 mb-md-0'
                >
                  Contacto por Email
                  <i className='bi bi-envelope-check-fill ms-2' />
                </Link>
                <Link
                  to='https://wa.me/+50585602076?text=Hola%20estoy%20interesado%20en%20sus%20productos'
                  className='btn btn-success ms-md-2'
                >
                  Contacto por WhatsApp
                  <i className='bi bi-whatsapp ms-2' />
                </Link>
              </div>
            </div>
          </div>
          <div className='row justify-content-center mt-4'>
            <div className='col-12 text-center'>
              <div className='iconos-redes-sociales d-flex justify-content-center'>
                <Link
                  to='https://www.facebook.com/profile.php?id=61561952506701'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='red-social mx-2'
                >
                  <i className='bi bi-facebook' />
                </Link>
                <Link
                  to='https://www.instagram.com/harinisazonacentro/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='red-social mx-2'
                >
                  <i className='bi bi-instagram' />
                </Link>
                <Link
                  to='https://www.tiktok.com/@harinisa_zona_centro'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='red-social mx-2'
                >
                  <i className='bi bi-tiktok' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactos
