import { Link } from 'react-router-dom'
import './Estilos/empresa.css'
function Empresa() {
  return (
    <>
      {/* Sección Quiénes Somos */}
      <div className='head'>
        <header className='headercase'>
          <h2>!Empresa Harinisa!</h2>
          <p className='parrafosEmp'>
            ¿QUIENES SOMOS? Harinera Agroindustrial de Nicaragua HARINISA, es
            una empresa nicaragüense de capital privado, con mas de cuatro
            décadas en el mercado que se dedica a la produccion y
            comercializaciån de Harinas de Trigo, materia prima båsica para la
            elaboraciön de pan.
          </p>
          <p className='parrafosEmp'>
            NUESTRA MISION Elaborar productos alimenticios de alta calidad y
            rendimiento, manteniendo excelencia en el servicio, buenas
            relaciones con nuestros clientes, proveedores y colaboradores y
            respeto por el medio ambiente
          </p>
          <p className='parrafosEmp'>
            NUESTRA VISION Ser reconocidos como una empresa lider en la
            elaboracion y comercializacion de nuestros productos, manteniendo
            clientes y consumidores satisfechos y fieles a nuestras marcas.
          </p>
          <Link
            className='btn end'
            target='_blank'
            to='https://www.agrosa.com.ni'
          >
            Ver Agrosa <i className='fas fa-angle-double-right' />
          </Link>
        </header>
        <hr />
        {/* Escuela de Panificación */}
        <section className='py-2 escu'>
          <div className='container'>
            <img src='/escuela.jpg' alt='escuela de pani' className='pani' />
            <p>
              Harinisa como responsabilidad social empresarial, a partir del año
              2015 apertura 2 centros de capacitación, conociendo la necesidad
              que carece este gremio en temas de capacitación lo cual ha tenido
              aceptación en el sector, siendo HARINISA hasta ahora la pionera de
              esta idea innovadora, los programas son 100% gratis.
            </p>
            <p>
              Harinisa ha venido desarrollando el programa de escuela de
              panificación, este programa nos ha permitido transferir
              conocimientos a panaderos empíricos de diferentes segmentos: desde
              el panadero informal hasta micro empresarios, pequeños
              empresarios, mujeres cabeza de familia y jóvenes desempleados.
            </p>
            <div className='iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center'>
              <Link
                to='https://www.agrosa.com.ni'
                target='_blank'
                rel='noopener noreferrer'
                className='red-social'
              >
                <i className='bi bi-globe' />
              </Link>
              <Link
                to='https://www.facebook.com/p/Escuela-De-Harinisa-100054649920053/?locale=es_LA'
                target='_blank'
                rel='noopener noreferrer'
                className='red-social'
              >
                <i className='bi bi-facebook' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Empresa
