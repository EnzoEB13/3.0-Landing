import React from 'react'
import logo from "../assets/img/favicon2.png"
const NavBar = () => {
  return (
    <header id="header" class="header d-flex align-items-center fixed-top">
            <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
              <div  class="logo d-flex align-items-center">
                <img src={logo} alt="LOGO" />
                <h1 class="sitename">S.A.F</h1>
              </div>
    
              <nav id="navmenu" class="navmenu">
                <ul>
                  <li>
                    <a href="#hero" class="active">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#about">Noticias</a>
                  </li>
                  <li>
                    <a href="#features">Productos</a>
                  </li>
                  <li>
                    <a href="#gallery">Puntos</a>
                  </li>
                  <li>
                    <a href="#team">Productores</a>
                  </li>
                  <li>
                    <a href="#pricing">ONDA</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Programas</span>{" "}
                      <i class="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Streamings Nutricionales</a>
                      </li>
                      <li>
                        <a href="#">Netamente Formoseno</a>
                      </li>
                    </ul>
                  </li>
                  <div class="d-none d-lg-flex ms-2">
                    <a
                      class="btn-sm-square bg-white rounded-circle ms-1 "
                      href="https://www.facebook.com/Programasoberaniaalimentaria"
                    >
                      <small class="bi bi-facebook text-body"></small>
                    </a>
                    <a
                      class="btn-sm-square bg-white rounded-circle ms-3"
                      href="https://www.instagram.com/soberaniaalimentariaformosena"
                    >
                      <small class="bi bi-instagram text-body"></small>
                    </a>
                    <a
                      class="btn-sm-square bg-white rounded-circle ms-3"
                      href="https://www.youtube.com/@soberaniaalimentariafsa"
                    >
                      <small class="bi bi-youtube text-body"></small>
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