import React from 'react'
import portada from "../assets/img/portada.png";
import fondo from "../assets/img/loginfondo.jpg";
const Portada = ({titulo, subtitulo, tipoFondo}) => {

  return (
    <section id="hero" className="hero section dark-background">
              <img src={fondo} alt="" className="hero-bg" />
    
              <div className="container">
                <div className="row gy-4 justify-content-between">
                  <div
                    className="col-lg-5 order-lg-last hero-img"
                    data-aos="zoom-out"
                    data-aos-delay="100"
                  >
                    <img  className="img-fluid animated" alt="" />
                  </div>
    
                  <div
                    className="col-lg-6  d-flex flex-column justify-content-center"
                    data-aos="fade-in"
                  >
                    <h1>
                       <span>{titulo}</span>
                    </h1>
                    <p>
                      {subtitulo}
                    </p>
                    {/* <div className="d-flex">
                      <a href="#about" className="btn-get-started">
                        Ver mas
                      </a>
                      <a
                        href=""
                        className="glightbox btn-watch-video d-flex align-items-center"
                      >
                        <i className="bi bi-play-circle"></i>
                        <span>Ver Video</span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
    
              {/* <svg
                className="hero-waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28 "
                preserveAspectRatio="none"
              >
                <defs>
                  <path
                    id="wave-path"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  ></path>
                </defs>
                <g className="wave1">
                  <use xlinkHref="#wave-path" x="50" y="3"></use>
                </g>
                <g className="wave2">
                  <use xlinkHref="#wave-path" x="50" y="0"></use>
                </g>
                <g className="wave3">
                  <use xlinkHref="#wave-path" x="50" y="9"></use>
                </g>
              </svg> */}
            </section>
  )
}

export default Portada