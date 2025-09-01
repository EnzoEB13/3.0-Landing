import React from "react";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoSaf from "../../../../assets/img/portada.png";
import { ScrollToTop } from '../../../../Helpers/reiniciarScroll';
/* Fotos */
import fotoPerfil from "../../../../assets/img/Productores/productor3/perfil.jpg";
import fotoPortada from "../../../../assets/img/Productores/sergiomareco.jpg";

import foto1 from "../../../../assets/img/Productores/productor3/1.jpg";
import foto2 from "../../../../assets/img/Productores/productor3/2.jpg";
import foto3 from "../../../../assets/img/Productores/productor3/3.jpg";
import foto4 from "../../../../assets/img/Productores/productor3/4.jpg";
import foto5 from "../../../../assets/img/Productores/productor3/5.jpg";
import foto6 from "../../../../assets/img/Productores/productor3/6.jpg";
import foto7 from "../../../../assets/img/Productores/productor3/7.jpg";
import foto8 from "../../../../assets/img/Productores/productor3/8.jpg";
import foto9 from "../../../../assets/img/Productores/productor3/9.jpg";
import foto10 from "../../../../assets/img/Productores/productor3/10.jpg";
import foto11 from "../../../../assets/img/Productores/productor3/11.jpg";
import foto12 from "../../../../assets/img/Productores/productor3/12.jpg";
import foto13 from "../../../../assets/img/Productores/productor3/13.jpg";
import foto14 from "../../../../assets/img/Productores/productor3/14.jpg";
import foto15 from "../../../../assets/img/Productores/productor3/15.jpg";
import foto16 from "../../../../assets/img/Productores/productor3/16.jpg";
import foto17 from "../../../../assets/img/Productores/productor3/17.jpg";
import foto18 from "../../../../assets/img/Productores/productor3/18.jpg";
import foto19 from "../../../../assets/img/Productores/productor3/19.jpg";
import foto20 from "../../../../assets/img/Productores/productor3/20.jpg";
import foto21 from "../../../../assets/img/Productores/productor3/21.jpg";
const SergioMareco = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenActual, setImagenActual] = useState(null);

  const abrirModal = (img) => {
    
    setImagenActual(img);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setImagenActual(null);
  };

  const fotosProductor = [
    {
      fotoURl: foto21,
    },
    {
      fotoURl: foto2,
    },
    {
      fotoURl: foto3,
    },
    {
      fotoURl: foto4,
    },
    {
      fotoURl: foto5,
    },
    {
      fotoURl: foto6,
    },
    {
      fotoURl: foto7,
    },
    {
      fotoURl: foto8,
    },
    {
      fotoURl: foto9,
    },
    {
      fotoURl: foto10,
    },
    {
      fotoURl: foto11,
    },
    {
      fotoURl: foto12,
    },
    {
      fotoURl: foto13,
    },
    {
      fotoURl: foto14,
    },
    {
      fotoURl: foto15,
    },

    {
      fotoURl: foto16,
    },
    {
      fotoURl: foto17,
    },
    {
      fotoURl: foto18,
    },
    {
      fotoURl: foto19,
    },
    {
      fotoURl: foto20,
    },
    {
      fotoURl: foto1,
    },
  ];

  
  return (
    <div>
      <ScrollToTop/>
      <div>
        <header
          id="header-Detalles-Productor"
          className={`header-Detalles-Productor dark-background-Productores d-flex flex-column ${
            menuVisible ? "header-show" : null
          }`}
        >
          <i
            className={`header-toggle d-xl-none bi bi-${
              menuVisible ? "x" : "list"
            }`}
            onClick={() => {
              setMenuVisible(!menuVisible);
            }}
          ></i>

          <div className="profile-img-detalles-productores">
            <img src={fotoPerfil} alt="" className="img-fluid rounded-circle" />
          </div>

          <a className="logo-detalles-productores d-flex align-items-center justify-content-center">
            {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
            {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
            <h1 className="sitename">Sergio Rolando Mareco</h1>
          </a>

          <div align="center">
            <p className="text-bold text-white">Otros Productores</p>
          </div>
          <nav
            id="navmenu-detalles-productores"
            className="navmenu-detalles-productores"
          >
            <ul>
              <li>
                <Link to="/productor-3">
                  <i className="bi bi-images navicon"></i> Rufino Moreira
                </Link>
              </li>
            </ul>
          </nav>
          <div className="d-flex flex-column align-items-center my-5">
            <Link to="/productores" className="btn btn-success mb-2">
              Ver todos los productores
            </Link>
            <img src={logoSaf} alt="logo saf" width={100} />
          </div>
        </header>

        <main className="main">
          {/* <!-- Hero Section --> */}
          <section
            id="hero"
            className="hero-detallles-productores section-detalles-productores dark-background"
          >
            <img src={fotoPortada} alt="" data-aos="fade-in" className="" />

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <h2>Sergio Rolando Mareco:</h2>
              <p style={{ color: "white", fontWeight: "bold" }}>
                Es un <span className="typed">Productor</span>
              </p>
            </div>
          </section>
          {/* <!-- /Hero Section --> */}

          {/*  <!-- Portfolio Section --> */}
          <section
            id="portfolio-detalles-productores"
            className="portfolio-detalles-productores section-detalles-productores light-background"
          >
            {/* <!-- Section Title --> */}
            <div
              className="container section-title-detalles-productores"
              data-aos="fade-up"
            >
              <section className="section-productor-Detalles">
                <h2 className="titulo-seccion-Detalles">Sobre el productor</h2>
                <div className="tarjeta-productor-Detalles">
                  <h3>
                    Sergio Rolando Mareco:{" "}
                    <span className="destacado-Detalles">
                      Compromiso con la producción local
                    </span>
                  </h3>
                  <p>
                    En la localidad de{" "}
                    <strong>
                      Cachaza, Tres Lagunas, Sergio Rolando Mareco
                    </strong>{" "}
                    y su grupo familiar de <strong>4 personas</strong> trabajan
                    con esfuerzo y dedicación en el cultivo de alimentos frescos
                    y saludables. Con una superficie de{" "}
                    <strong>2 hectáreas</strong>, ha logrado optimizar su
                    producción gracias al uso de herramientas como{" "}
                    <strong>
                      media sombra, sistema de riego y fertilizantes
                    </strong>
                    .
                  </p>

                  <p>
                    🥬<strong>Entre sus cultivos se destacan:</strong>{" "}
                    cebollita, rúcula, achicoria y mandioca, productos
                    esenciales en la alimentación diaria de muchas familias.
                    Gracias a su trabajo, estos alimentos llegan frescos y a
                    precios justos a través del programa{" "}
                    <i>Soberanía Alimentaria Formoseña</i>.
                  </p>

                  <p>
                    El compromiso de Sergio no solo fortalece la economía local,
                    sino que también contribuye a la seguridad alimentaria de la
                    provincia. Su esfuerzo y el de cientos de productores forman
                    la base de un sistema de producción sostenible y solidario.
                  </p>

                  <div className="cta-Detalles">
                    ¡Apoyamos el crecimiento de nuestros productores y seguimos
                    construyendo juntos una Formosa más sustentable!
                  </div>
                </div>
                <h2 className="titulo-seccion-Detalles my-5">
                  Galeria de fotos del productor
                </h2>
              </section>
            </div>
            {/* <!-- End Section Title --> */}

            <div className="container">
              <div
                className="isotope-layout"
                data-default-filter="*"
                data-layout="masonry"
                data-sort="original-order"
              >
                <div
                  className="row gy-4 isotope-container"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {fotosProductor?.length > 0 &&
                    fotosProductor?.map((item, i) => {
                      return (
                        <div className="col-lg-4 col-md-6 portfolio-item-detalles-productores isotope-item filter-app">
                          <div
                            className="portfolio-content-detalles-productores h-100"
                            onClick={() => abrirModal(item.fotoURl)}
                          >
                            <img
                              src={item?.fotoURl}
                              className="img-fluid"
                              alt={`Foto ${i + 1}`}
                            />
                            <div className="portfolio-info-detalles-productores">
                              <h4>Foto {i + 1}</h4>
                              <p>Click para ver la foto</p>
                              <div align="center">
                                <a
                                  title="App 1"
                                  className="glightbox preview-link-detalles-productores"
                                >
                                  <i className="bi bi-zoom-in"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                {/* <!-- End Portfolio Container --> */}
              </div>
            </div>
          </section>
          {/* <!-- /Portfolio Section --> */}
        </main>
      </div>

      {modalAbierto && (
        <div className="modal-imagen" onClick={cerrarModal}>
          <span className="cerrar-modal" onClick={cerrarModal}>
            ×
          </span>
          <img
            src={imagenActual}
            alt="Imagen en grande"
            className="imagen-modal"
          />
        </div>
      )}
    </div>
  );
};

export default SergioMareco;
