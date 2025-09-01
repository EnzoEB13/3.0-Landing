import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  /* Funcion para reiniciar el scroll y que no quede a mitad a cambiar de modulo */
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}