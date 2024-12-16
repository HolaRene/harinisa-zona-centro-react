import './Estilos/Products.css' // Archivo de estilos personalizados
import { Link } from 'react-router-dom'

export default function Productos() {
  const products = [
    {
      id: 1,
      name: 'Ricarina Multiuso',
      img: './productos/ricarina-multiusos100lbs.jpg',
      desc: 'Ricarina es la elección perfecta para la elaboración de bollería y panes comerciales. Con su calidad superior, garantiza resultados consistentes y deliciosos en todas tus recetas.',
    },
    {
      id: 2,
      name: 'Harina Integral',
      img: './productos/superstar-multiproposito.jpg',
      desc: 'La harina integral es ideal para la elaboración de bollería y panes nutritivos. Con su calidad superior, garantiza resultados consistentes y deliciosos en cada preparación.',
    },
    {
      id: 3,
      name: 'Harina de Avena',
      img: './productos/prima-harina100lbs.jpg',
      desc: 'Esta harina de textura suave es ideal para la elaboración de batidos, bizcochos y galletas. Garantiza los mejores resultados en sabor y calidad.',
    },
    {
      id: 4,
      name: 'Harina Integral',
      img: './productos/superstar-integral1.jpg',
      desc: 'Esta harina está cuidadosamente formulada para la preparación de una amplia gama de productos de pastelería y repostería integral. Su composición única permite que los ingredientes se integren de manera uniforme, asegurando una consistencia perfecta en cada preparación.',
    },
    {
      id: 5,
      name: 'Superstar Especial Pizza',
      img: './productos/superstar-pizza.jpg',
      desc: 'Esta harina especial está formulada específicamente para la elaboración de masas de pizza, proporcionando la base perfecta para una variedad de productos deliciosos. Ideal para preparar pizzas auténticas con una corteza crujiente y suave, también es perfecta para calzones, focaccias aromáticas y más.',
    },
    {
      id: 6,
      name: 'Prima Harina 1lb',
      img: './productos/prima-harina1lbs.jpg',
      desc: 'Esta harina es perfecta para tus necesidades domésticas: empanizar, preparar churros, manuelas, donas, galletas comerciales y mucho más.',
    },
    {
      id: 7,
      name: 'Instaferm Levadura',
      img: './productos/instafern.jpg',
      desc: 'La levadura Instaferm® es un producto de alta calidad con función dual que permite una fermentación eficiente independientemente del clima. Diseñada para utilizarse tanto en la preparación de masas dulces como saladas. Su formulación enriquecida con Vitamina D no solo mejora el valor nutricional de los productos, sino que también asegura un rendimiento óptimo en cada uso.',
    },
    {
      id: 8,
      name: 'Doral Mantequilla',
      img: './productos/doral1.jpg',
      desc: 'DORAL MANTEQUILLA 1X24LBS. La manteca hidrogenada Doral sabor mantequilla combina la estabilidad y versatilidad de la manteca hidrogenada con el delicioso y auténtico sabor de la mantequilla. Perfecta para aquellos que buscan añadir un toque extra de sabor a sus productos. Su rica y cremosa textura aporta un sabor inigualable que resalta en cualquier receta.  DORAL SIMPLE 1X24LBS.  La manteca hidrogenada Doral en su versión sabor natural es un ingrediente esencial para la elaboración de una amplia variedad de productos de panadería y repostería. Esta manteca ofrece una excelente textura y estabilidad, asegurando resultados consistentes y de alta calidad. ',
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
                <Link to='/about' className='btn btn-primary'>
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
