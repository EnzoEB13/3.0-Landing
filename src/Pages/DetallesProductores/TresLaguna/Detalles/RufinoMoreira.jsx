import React from "react";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoSaf from "../../../../assets/img/portada.png";
import { ScrollToTop } from '../../../../Helpers/reiniciarScroll';
/* Fotos */
import fotoPerfil from "../../../../assets/img/Productores/rufinoMoreira2.jpg";
import fotoPortada from "../../../../assets/img/Productores/rufinoMoreira2.jpg";

import foto1 from "../../../../assets/img/Productores/productor4/1.jpg";
import foto2 from "../../../../assets/img/Productores/productor4/2.jpg";

const RufinoMoreira = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenActual, setImagenActual] = useState(null);

  const abrirModal = (img) => {
    console.log("entro");
    setImagenActual(img);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setImagenActual(null);
  };

  const fotosProductor = [
    {
      fotoURl: foto1,
    },
    {
      fotoURl: foto2,
    },
    {
      fotoURl: fotoPerfil,
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
            <h1 className="sitename">Rufino Moreira</h1>
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
                <Link to="/productor-4">
                  <i className="bi bi-images navicon"></i> Sergio Mareco
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
              <h2>Rufino Moreira:</h2>
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
                    Rufino Moreira:{" "}
                    <span className="destacado-Detalles">
                      Producción en Loma Zapatú, Tres Lagunas
                    </span>
                  </h3>
                  <p>
                    En el marco del programa{" "}
                    <i>Soberanía Alimentaria Formoseña</i>, destacamos el
                    trabajo de Rufino Moreira, un productor de la localidad de{" "}
                    <strong>Loma Zapatú, Tres Lagunas</strong>.
                  </p>
                  <p>
                    Junto a su grupo familiar de <strong>5 personas</strong>,
                    Rufino cultiva con esfuerzo y dedicación una superficie de{" "}
                    <strong>1 hectárea</strong>, donde produce una variedad de
                    alimentos frescos y de calidad.
                  </p>
                  <p>
                    🌱 <strong>Entre sus cultivos se encuentran:</strong>{" "}
                    acelga, perejil, remolacha, zapallito, batata y rúcula.
                  </p>
                  <p>
                    Su labor no solo garantiza el sustento de su familia, sino
                    que también contribuye a la disponibilidad de productos
                    saludables y accesibles para toda la comunidad.
                  </p>
                  <p>
                    A través del programa, Rufino y muchos otros productores
                    locales tienen la posibilidad de ofrecer sus cosechas de
                    manera directa, asegurando precios justos tanto para quienes
                    producen como para quienes consumen.
                  </p>
                  <div className="cta-Detalles">
                    ¡Seguimos apoyando el trabajo de nuestros productores para
                    fortalecer la soberanía alimentaria en Formosa!
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

export default RufinoMoreira;
