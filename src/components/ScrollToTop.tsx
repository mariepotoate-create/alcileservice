import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remettre le scroll en haut à chaque changement de route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Scroll immédiat sans animation
    });
  }, [pathname]);

  return null; // Ce composant ne rend rien visuellement
};

export default ScrollToTop;