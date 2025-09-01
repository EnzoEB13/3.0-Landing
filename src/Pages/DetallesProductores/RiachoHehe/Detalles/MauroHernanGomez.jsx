import React from "react";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoSaf from "../../../../assets/img/portada.png";
import "./DetallesStyles.css";
import "./GaleriaProductor.css";
import { ScrollToTop } from '../../../../Helpers/reiniciarScroll';
/* Fotos */
import fotoPerfil from "../../../../assets/img/Productores/maurohernangomez.jpg";
import fotoPortada from "../../../../assets/img/Productores/productor1/13.jpg";

import foto1 from "../../../../assets/img/Productores/productor1/1.jpg";
import foto2 from "../../../../assets/img/Productores/productor1/2.jpg";
import foto3 from "../../../../assets/img/Productores/productor1/3.jpg";
import foto4 from "../../../../assets/img/Productores/productor1/4.jpg";
import foto5 from "../../../../assets/img/Productores/productor1/5.jpg";
import foto6 from "../../../../assets/img/Productores/productor1/6.jpg";
import foto7 from "../../../../assets/img/Productores/productor1/7.jpg";
import foto8 from "../../../../assets/img/Productores/productor1/8.jpg";
import foto9 from "../../../../assets/img/Productores/productor1/9.jpg";
import foto10 from "../../../../assets/img/Productores/productor1/10.jpg";
import foto11 from "../../../../assets/img/Productores/productor1/11.jpg";
import foto12 from "../../../../assets/img/Productores/productor1/12.jpg";
import foto13 from "../../../../assets/img/Productores/productor1/14.jpg";
import foto14 from "../../../../assets/img/Productores/productor1/15.jpg";
import foto15 from "../../../../assets/img/Productores/productor1/16.jpg";

const MauroHernanGomez = () => {
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
      fotoURl: foto10,
    },
    {
      fotoURl: foto9,
    },
    {
      fotoURl: foto3,
    },
    {
      fotoURl: foto8,
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
      fotoURl: foto1,
    },
    {
      fotoURl: foto15,
    },
    {
      fotoURl: foto2,
    },
    {
      fotoURl: foto4,
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
            <h1 className="sitename">Mauro Hernán Gómez</h1>
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
                <Link to="/productor-1">
                  <i className="bi bi-images navicon"></i> Juan de la Cruz Ríos
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
              <h2>Mauro Hernán Gómez</h2>
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
                    Mauro Hernán Gómez:{" "}
                    <span className="destacado-Detalles">
                      Producción sostenible en Colonia San Isidro
                    </span>
                  </h3>
                  <p>
                    En la localidad de{" "}
                    <strong>
                      Colonia San Isidro, Riacho He Hé, Mauro Hernán Gómez
                    </strong>{" "}
                    trabaja junto a su grupo familiar de{" "}
                    <strong>2 integrantes</strong> en la producción de alimentos
                    frescos y de calidad. Con un esfuerzo diario y un fuerte
                    compromiso con la soberanía alimentaria, cultiva{" "}
                    <strong>4 hectáreas</strong> de tierra, garantizando
                    productos saludables para la comunidad.
                  </p>
                  <p>
                    Para optimizar su producción, cuenta con un{" "}
                    <strong>sistema de riego</strong> y accede al agua a través
                    de una perforación, lo que le permite mantener sus cultivos
                    en óptimas condiciones durante todo el año.
                  </p>
                  <p>
                    🌽 <strong>Principales productos:</strong> poroto fresco,
                    mandioca, calabaza, pepino y melón, los cuales llegan a los
                    centros de Soberanía Alimentaria Formoseña, acercando
                    alimentos sanos y a precios justos a las familias
                    formoseñas.
                  </p>
                  <p>
                    El trabajo de Mauro refleja el esfuerzo de los pequeños
                    productores que, con dedicación y conocimiento del campo,
                    contribuyen al desarrollo productivo de la provincia.
                  </p>
                  <div className="cta-Detalles">
                    ¡Apoyemos a nuestros productores y sigamos fortaleciendo la
                    soberanía alimentaria en Formosa!
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
export default MauroHernanGomez;
