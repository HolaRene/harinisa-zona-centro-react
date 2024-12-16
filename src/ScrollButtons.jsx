import { useState, useEffect } from 'react'
import './scroll.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Función para mostrar el botón cuando el usuario hace scroll hacia abajo
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Función para desplazarse hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='scroll-to-top'
          title='Ir al inicio'
        >
          ↑ Ir Arriba
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton
