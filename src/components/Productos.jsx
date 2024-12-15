import './Estilos/Products.css' // Archivo de estilos personalizados
import { Link } from 'react-router-dom'

export default function Productos() {
  const products = [
    {
      id: 1,
      name: 'Ricarina Multiuso',
      img: './productos/ricarina100lb.jpg',
      desc: 'Ricarina es la eleccion perfecta para la elaboraci6n de bolleria y panes comerciales.Con su calidad superior, garantiza resultados consistentes y deliciosos en todas tus recetas',
    },
    {
      id: 2,
      name: 'Harina Integral',
      img: './productos/superstar-multi.jpg',
      desc: 'Ricarina es la eleccion perfecta para la elaboracion de bolleria y panes comerciales. Con su calidad superior, garantiza resultados consistentes ydeliciosos en todas tus recetas',
    },
    {
      id: 3,
      name: 'Harina de Avena',
      img: './productos/prima-harina.jpg',
      desc: 'Esta harina de textura suave, es ideal para la elaboraciön de batidos, bizcochos y galleteria, Con ella, te garantizamos los mejores resultados en sabor y en calidad.',
    },
    {
      id: 4,
      name: 'Harina Integral',
      img: './productos/superstar-integral.jpg',
      desc: 'Esta harina estå cuidadosamente formulada para la de una amplia gama de de pasteleria y reposterfa integral. Su composiciön unica permite que los ingredientes se integren de manera uniforme. asegurando una censistencia perfecta en cada reparaciOn.',
    },
    {
      id: 5,
      name: 'Superstar Especial pizza',
      img: './productos/superstar-especial-pizza.jpg',
      desc: 'Esta harina especial estå formulada especificamente para la elaboraciOn de masas de pizzeria. proporcionando la base perfecta para una variedad de productos deliciosos. Ideal para preparar pizzas auténticas con una corteza crujiente y un suave, esta harina también es perfecta para calzones sabrosos, focaccias aromåticas y mucho mås.',
    },
    {
      id: 6,
      name: 'Prima Harina 1lb',
      img: './productos/prima-harina1l.jpg',
      desc: 'Esta harina es perfecta para tus necesidades domésticas: para empanizar, churros, manuelitas donas, galletas comerciales y mås.',
    },
    {
      id: 7,
      name: 'Prima Harina 1lb',
      img: './productos/instaferm.jpg',
      desc: 'La levadura Instaferm@ es un producto de alta calidad con funciOn dual que perrn.tte el la masa independientemente del clima. diseöada para utilizarse tanto en la preparaObn de mans dukes corno saladas Su formulaciOn ervriquecida con Vitamina O no solo mejora el valor nutritional de los prowactos_ Sino que también asequra rentfirniento Optima en cada uso,',
    },
    {
      id: 8,
      name: 'Doral mantequilla',
      img: './productos/doral.jpg',
      desc: 'La levadura Instaferm@ es un producto de alta calidad con funciOn dual que perrn.tte el la masa independientemente del clima. diseöada para utilizarse tanto en la preparaObn de mans dukes corno saladas Su formulaciOn ervriquecida con Vitamina O no solo mejora el valor nutritional de los prowactos_ Sino que también asequra rentfirniento Optima en cada uso,',
    },
  ]

  return (
    <div className='products-container container mt-5'>
      <h2 className='text-center mb-4'>Nuestros Productos</h2>
      <div className='row g-4'>
        {products.map(product => (
          <div key={product.id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <div className='card product-card h-100'>
              <img
                src={product.img}
                className='card-img-top product-img'
                alt={product.name}
              />
              <div className='card-body text-center'>
                <h5 className='card-title product-name'>{product.name}</h5>
                <p className='card-text product-desc'>{product.desc}</p>
              </div>
              <div className='card-footer text-center'>
                <Link to='/contact' className='btn btn-primary'>
                  Ver más <i className='bi bi-arrow-right-circle' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
