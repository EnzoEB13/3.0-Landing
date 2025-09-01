import React, { useEffect, useState } from 'react'
import logo from "../assets/img/favicon2.png"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { ScrollToTop } from '../Helpers/reiniciarScroll';
const NavBar = () => {

  

  /* class={`${location.pathname = "" ? "active" : ""}`} */
  const [nombreRuta, setNombreRuta] = useState("")
  useEffect(()=>{
    switch (location.pathname) {
      case "/noticias":
        setNombreRuta("noticias")
        break;
        case "/programas":
        setNombreRuta("programas")
        break;
        case "/onda":
        setNombreRuta("onda")
        break;
        case "/productores":
        setNombreRuta("productores")
        break;
        case "/productos":
        setNombreRuta("productos")
        break;
        case "/puntos":
        setNombreRuta("puntos")
        break;
        case "/streamings":
        setNombreRuta("streamings")
        break;
        case "/noticia":
        setNombreRuta("noticias")
        break;
    default:
      setNombreRuta("inicio")
      break;
  }
  },[location.pathname])

 /*  console.log(location.pathname) */
useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header id="header" class="header d-flex align-items-center fixed-top">
            <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
              <div  class="logo d-flex align-items-center">
                <img src={logo} alt="LOGO" />
                <h1 class="sitename">S.A.F</h1>
              </div>
             <ScrollToTop/>
              <nav id="navmenu" class="navmenu">
                <ul>
                  <li>
                    <Link to="/" className={`${nombreRuta == "inicio" ? "active" : ""}`}>
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link to="/noticias" className={`${nombreRuta == "noticias" ? "active" : ""}`}>Noticias</Link>
                  </li>
                  <li>
                    <Link to="/productos" className={`${nombreRuta == "productos" ? "active" : ""}`}>Productos</Link>
                  </li>
                  <li>
                    <Link to="/puntos" className={`${nombreRuta == "puntos" ? "active" : ""}`}>Puntos</Link>
                  </li>
                  <li>
                    <Link to="/productores" className={`${nombreRuta == "productores" ? "active" : ""}`}>Productores</Link>
                  </li>
                  <li>
                    <Link to="/onda" className={`${nombreRuta == "onda" ? "active" : ""}`}>ONDA</Link>
                  </li>
                  <li class="dropdown">
                    <a href="#" className={`${nombreRuta == "programas" || nombreRuta == "streamings" ? "active" : ""}`}>
                      <span>Programas</span>{" "}
                      <i class="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <Link to="/streamings" >Streamings Nutricionales</Link>
                      </li>
                      <li>
                        <Link to="/programas" >Netamente Formoseno</Link>
                      </li>
                    </ul>
                  </li>
                  <div class="d-none d-lg-flex ms-2 fondoIconoRedes">
                    <a class="btn-sm-square rounded-circle ms-1 icon-social facebook" href="https://www.facebook.com/soberaniaalimentariaformosena">
                      <small class="bi bi-facebook"></small>
                    </a>
                    <a class="btn-sm-square rounded-circle ms-3 icon-social instagram" href="https://www.instagram.com/soberaniaalimentariaformosena">
                      <small class="bi bi-instagram"></small>
                    </a>
                    <a class="btn-sm-square rounded-circle ms-3 icon-social youtube" href="https://www.youtube.com/@SAF_2025">
                      <small class="bi bi-youtube"></small>
                    </a>
                  </div>
                </ul>
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
              </nav>
            </div>
          </header>
  )
}

export default NavBar