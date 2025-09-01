import React, { useEffect, useState } from 'react'
import logo from "../assets/img/favicon2.png"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { ScrollToTop } from '../Helpers/reiniciarScroll';
const NavBar = () => {

     const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Controla la clase en <body>
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
  }, [menuOpen]);

  // Cierra el menú al hacer clic en un link
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  // Toggle dropdown
  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  /* className={`${location.pathname = "" ? "active" : ""}`} */
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
     <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <div className="logo d-flex align-items-center">
          <img src={logo} alt="LOGO" />
          <h1 className="sitename">S.A.F</h1>
        </div>

        {/* Nav */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/" className={`${nombreRuta === "inicio" ? "active" : ""}`} onClick={handleLinkClick}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/noticias" className={`${nombreRuta === "noticias" ? "active" : ""}`} onClick={handleLinkClick}>
                Noticias
              </Link>
            </li>
            <li>
              <Link to="/productos" className={`${nombreRuta === "productos" ? "active" : ""}`} onClick={handleLinkClick}>
                Productos
              </Link>
            </li>
            <li>
              <Link to="/puntos" className={`${nombreRuta === "puntos" ? "active" : ""}`} onClick={handleLinkClick}>
                Puntos
              </Link>
            </li>
            <li>
              <Link to="/productores" className={`${nombreRuta === "productores" ? "active" : ""}`} onClick={handleLinkClick}>
                Productores
              </Link>
            </li>
            <li>
              <Link to="/onda" className={`${nombreRuta === "onda" ? "active" : ""}`} onClick={handleLinkClick}>
                ONDA
              </Link>
            </li>
            <li className={`dropdown ${dropdownOpen ? "active" : ""}`}>
              <a
                href="#"
                className={`${["programas", "streamings"].includes(nombreRuta) ? "active" : ""}`}
                onClick={toggleDropdown}
              >
                <span>Programas</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={dropdownOpen ? "dropdown-active" : ""}>
                <li><Link to="/streamings" onClick={handleLinkClick}>Streamings Nutricionales</Link></li>
                <li><Link to="/programas" onClick={handleLinkClick}>Netamente Formoseño</Link></li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* Botón Hamburguesa */}
        <i
        style={{ fontSize: "40px" }}
          className={` d-xl-none bi ${menuOpen ? "bi-x" : "bi-list"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </div>
    </header>
  )
}

export default NavBar