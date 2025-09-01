import React from "react";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoSaf from "../../../../assets/img/portada.png"
import { ScrollToTop } from '../../../../Helpers/reiniciarScroll';

/* Fotos */
import fotoPerfil from "../../../../assets/img/Productores/productor2/Perfil.jpg";
import fotoPortada from "../../../../assets/img/Productores/productor2/24.jpg";

import foto1 from "../../../../assets/img/Productores/productor2/1.jpg"
import foto2 from "../../../../assets/img/Productores/productor2/2.jpg"
import foto3 from "../../../../assets/img/Productores/productor2/3.jpg"
import foto4 from "../../../../assets/img/Productores/productor2/4.jpg"
import foto5 from "../../../../assets/img/Productores/productor2/5.jpg"
import foto6 from "../../../../assets/img/Productores/productor2/6.jpg"
import foto7 from "../../../../assets/img/Productores/productor2/7.jpg"
import foto8 from "../../../../assets/img/Productores/productor2/8.jpg"
import foto9 from "../../../../assets/img/Productores/productor2/9.jpg"
import foto10 from "../../../../assets/img/Productores/productor2/10.jpg"
import foto11 from "../../../../assets/img/Productores/productor2/11.jpg"
import foto12 from "../../../../assets/img/Productores/productor2/12.jpg"
import foto13 from "../../../../assets/img/Productores/productor2/13.jpg"
import foto14 from "../../../../assets/img/Productores/productor2/14.jpg"
import foto15 from "../../../../assets/img/Productores/productor2/15.jpg"
import foto16 from "../../../../assets/img/Productores/productor2/16.jpg"
import foto17 from "../../../../assets/img/Productores/productor2/17.jpg"
import foto18 from "../../../../assets/img/Productores/productor2/18.jpg"
import foto19 from "../../../../assets/img/Productores/productor2/19.jpg"
import foto20 from "../../../../assets/img/Productores/productor2/20.jpg"
import foto21 from "../../../../assets/img/Productores/productor2/21.jpg"
import foto22 from "../../../../assets/img/Productores/productor2/22.jpg"
import foto23 from "../../../../assets/img/Productores/productor2/23.jpg"
import foto24 from "../../../../assets/img/Productores/productor2/24.jpg"
import foto25 from "../../../../assets/img/Productores/productor2/25.jpg"
import foto26 from "../../../../assets/img/Productores/productor2/26.jpg"
import foto27 from "../../../../assets/img/Productores/productor2/27.jpg"
import foto28 from "../../../../assets/img/Productores/productor2/31.jpg"
import foto29 from "../../../../assets/img/Productores/productor2/29.jpg"
import foto30 from "../../../../assets/img/Productores/productor2/30.jpg"

const JuanDeLaCruzRios = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const [modalAbierto, setModalAbierto] = useState(false);
  const [imagenActual, setImagenActual] = useState(null);

  const abrirModal = (img) => {
    console.log("entro")
    setImagenActual(img);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setImagenActual(null);
  };

  const fotosProductor = [
    {
      fotoURl: foto1
    },
    {
        fotoURl: foto2
      },
      {
        fotoURl: foto3
      },
      {
        fotoURl: foto4
      },
      {
        fotoURl: foto5
      },
      {
        fotoURl: foto6
      },
      {
        fotoURl: foto7
      },
      {
        fotoURl: foto8
      },
      {
        fotoURl: foto9
      },
      {
        fotoURl: foto10
      },
      {
        fotoURl: foto11
      },
      {
        fotoURl: foto12
      },
      {
        fotoURl: foto13
      },
      {
        fotoURl: foto14
      },
      {
        fotoURl: foto15
      },

      {
        fotoURl: foto16
      },
      {
        fotoURl: foto17
      },
      {
        fotoURl: foto18
      },
      {
        fotoURl: foto19
      },
      {
        fotoURl: foto20
      },
      {
        fotoURl: foto21
      },
      {
        fotoURl: foto22
      },
      {
        fotoURl: foto23
      },
      {
        fotoURl: foto24
      },
      {
        fotoURl: foto25
      },
      {
        fotoURl: foto26
      },
      {
        fotoURl: foto27
      },
      {
        fotoURl: foto28
      },
      {
        fotoURl: foto29
      },
      {
        fotoURl: foto30
      }
  ]
  return (
    <div>
    
      <ScrollToTop/>
      <div>
      <header id="header-Detalles-Productor" className={`header-Detalles-Productor dark-background-Productores d-flex flex-column ${menuVisible ? "header-show" : null}`}>
        <i className={`header-toggle d-xl-none bi bi-${menuVisible ? "x" : "list"}`} onClick={()=>{setMenuVisible(!menuVisible)}}></i>

        <div className="profile-img-detalles-productores">
          <img src={fotoPerfil} alt="" className="img-fluid rounded-circle" />
        </div>

        <a
          className="logo-detalles-productores d-flex align-items-center justify-content-center"
        >
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
          {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
          <h1 className="sitename">Juan de la Cruz Ríos</h1>
          
        </a>

        <div align="center">
        <p className="text-bold text-white">Otros Productores</p>
        </div>
        <nav id="navmenu-detalles-productores" className="navmenu-detalles-productores">
        
          <ul>
            <li>
              <Link to="/productor-2">
                <i className="bi bi-images navicon"></i> Mauro Hernán Gómez
              </Link>
            </li>
          </ul>
        </nav>
        <div className="d-flex flex-column align-items-center my-5">
          <Link to="/productores" className="btn btn-success mb-2">Ver todos los productores</Link>
          <img src={logoSaf} alt="logo saf" width={100} />
        </div>
      </header>
      
      <main className="main">
            {/* <!-- Hero Section --> */}
            <section id="hero" className="hero-detallles-productores section-detalles-productores dark-background">

            <img src={fotoPortada} alt="" data-aos="fade-in" className=""/>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <h2>Juan de la Cruz Ríos:</h2>
                <p style={{color:"white", fontWeight:"bold"}}>Es un <span className="typed" >Productor</span></p>
            </div>

            </section>
            {/* <!-- /Hero Section --> */}

           {/*  <!-- Portfolio Section --> */}
    <section id="portfolio-detalles-productores" className="portfolio-detalles-productores section-detalles-productores light-background">

      {/* <!-- Section Title --> */}
      <div className="container section-title-detalles-productores" data-aos="fade-up">
      <section className="section-productor-Detalles">
      <h2 className="titulo-seccion-Detalles">Sobre el productor</h2>
      <div className="tarjeta-productor-Detalles">
        <h3>
        Juan de la Cruz Ríos y Julio Gómez: <span className="destacado-Detalles">Producción en Riacho He Hé</span>
        </h3>
        <p>
        En el <strong>B° La Esperanza, Riacho He Hé, Juan de la Cruz Ríos y Julio Gómez</strong> llevan adelante un 
        valioso trabajo de producción junto a su grupo familiar de <strong>3 integrantes</strong>. 
        En sus <strong>2 hectáreas</strong> de cultivo, han logrado diversificar su producción, garantizando alimentos 
        frescos y saludables para la comunidad.
        </p>
        <p>
        Cuentan con herramientas fundamentales como <strong>media sombra, 
        sistema de riego y fertilizantes,</strong> además de disponer de una fuente natural de 
        agua gracias a un <strong>riacho cercano</strong>, lo que les permite optimizar su producción 
        y mejorar el rendimiento de sus cultivos.
        </p>
        <p>
        🌱 <strong>Entre los productos que cultivan se encuentran</strong>: achicoria, rúcula, cebollita, mandioca, 
          limón, batata, lechuga, bananas, morrón y poroto fresco. A través del programa 
          Soberanía Alimentaria Formoseña, estos alimentos llegan directamente a las mesas 
          de los formoseños, asegurando calidad y precios justos.
        </p>
        <p>
        El trabajo de Juan y Julio es un claro ejemplo del esfuerzo y compromiso de nuestros productores
         locales, quienes con dedicación fortalecen la soberanía alimentaria y el desarrollo 
         productivo de la provincia.
        </p>
        <div className="cta-Detalles">
        ¡Apoyamos el crecimiento de nuestros productores y seguimos construyendo juntos una Formosa más sustentable!
        </div>
      </div>
      <h2 className="titulo-seccion-Detalles my-5">Galeria de fotos del productor</h2>
    </section>
      </div>{/* <!-- End Section Title --> */}

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            {
              fotosProductor?.length > 0 && fotosProductor?.map((item, i)=>{
                return(
                  <div className="col-lg-4 col-md-6 portfolio-item-detalles-productores isotope-item filter-app">
                    <div className="portfolio-content-detalles-productores h-100"  onClick={() => abrirModal(item.fotoURl)}>
                      <img src={item?.fotoURl} className="img-fluid" alt={`Foto ${i + 1}`} />
                      <div className="portfolio-info-detalles-productores">
                        <h4>Foto {i + 1}</h4>
                        <p>Click para ver la foto</p>
                        <div align="center">
                          <a  title="App 1" className="glightbox preview-link-detalles-productores"><i className="bi bi-zoom-in"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>{/* <!-- End Portfolio Container --> */}

        </div>

      </div>

    </section>{/* <!-- /Portfolio Section --> */}
      </main>
      </div>

      {modalAbierto && (
        <div className="modal-imagen" onClick={cerrarModal}>
          <span className="cerrar-modal" onClick={cerrarModal}>×</span>
          <img src={imagenActual} alt="Imagen en grande" className="imagen-modal" />
        </div>
      )}

     
    </div>
  );
};


export default JuanDeLaCruzRios