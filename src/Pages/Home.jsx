import react, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import FotoCentroAlta from "../assets/img/foto2.jpeg";
import FotoCentro12 from "../assets/img/centro12.webp";
import FotoCentroc5 from "../assets/img/centroc5.webp";
import FotoCentroVilla from "../assets/img/centrovilla.webp";
import fotoFurgon from "../assets/img/Furgon.png";
import fotoDistribuidores from "../assets/img/distribuidores.png";
import fotoNTF from "../assets/img/ntf.png";
import fotoStreaming from "../assets/img/Streamings.png";
import logoNutrifor from "../assets/img/logoNutrifor.jpg";
import logoPanDeCasa from "../assets/img/logoPanDeCasa.jpg";
import logoRefsaGas from "../assets/img/logoRefsaGas.jpg";
import portada from "../assets/img/portada.png";
import imgOnda from "../assets/img/onda.png"
import firmaOnda from "../assets/img/firmaOnda1.jpg"
import firmaOnda2 from "../assets/img/firmaOnda2.jpg"
import firmaOnda3 from "../assets/img/firmaOnda3.jpg"
import fondoProductores from "../assets/img/fondo.jpeg";


/* Fotos Riacho */
import fotojuandelacruzrios from "../assets/img/Productores/juandelacruzrios.jpg"
import fotomaurohernangomez from "../assets/img/Productores/maurohernangomez.jpg"

/* Fotos Tres Lagunas */
import fotorufinoMoreira2 from "../assets/img/Productores/rufinoMoreira2.jpg"
import fotosergiomareco from "../assets/img/Productores/sergiomareco.jpg"

/* Galeria */
import foto1 from "../assets/img/galeria/foto1.jpg";
import foto2 from "../assets/img/galeria/foto2.jpg";
import foto3 from "../assets/img/galeria/foto3.jpg";
import foto4 from "../assets/img/galeria/foto4.jpg";
import foto5 from "../assets/img/galeria/foto5.jpg";
import foto6 from "../assets/img/galeria/foto6.jpg";
import foto7 from "../assets/img/galeria/foto7.jpg";
import foto8 from "../assets/img/galeria/foto8.jpg";
import foto9 from "../assets/img/galeria/foto9.jpg";
import foto10 from "../assets/img/galeria/foto10.jpg";
import foto11 from "../assets/img/galeria/foto11.jpg";
import foto12 from "../assets/img/galeria/foto12.jpg";
import foto13 from "../assets/img/galeria/foto13.jpg";
import foto14 from "../assets/img/galeria/foto14.jpg";
import foto15 from "../assets/img/galeria/foto15.jpg";
import foto16 from "../assets/img/galeria/foto16.jpg";
import Footer from "../Layouts/Footer";
import Container from "../Layouts/Container";
import { Link } from "react-router-dom";
/* Fin Galeria */
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación
      once: true, // si querés que se ejecute solo una vez
    });
  }, []);

  

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

  const [preguntaActiva1, setPreguntaActiva1] = useState(false)
  const [preguntaActiva2, setPreguntaActiva2] = useState(false)

  return (
    
      <Container>
        {/* <!-- Portada --> */}
        <section id="hero" className="hero section dark-background">
          <img src={`/src/assets/img/loginfondo.jpg`} alt="" className="hero-bg" />

          <div className="container">
            <div className="row gy-4 justify-content-between">
              <div
                className="col-lg-5 order-lg-last hero-img"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <img src={portada} className="img-fluid animated" alt="" />
              </div>

              <div
                className="col-lg-6  d-flex flex-column justify-content-center"
                data-aos="fade-in"
              >
                <h1>
                  Soberania Alimentaria <span>Formoseña</span>
                </h1>
                <p>
                  Un programa impulsado por la Subsecretaría de Defensa al
                  Consumidor y Usuarios.
                </p>
                <div className="d-flex">
                  <a href="https://www.facebook.com/soberaniaalimentariaformosena" target="_blank" className="btn-get-started">
                    Ver mas
                  </a>
                  {/* <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i className="bi bi-play-circle"></i>
                    <span>Ver Video</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <svg
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
          </svg>
        </section>
        {/* <!-- Fin Portada --> */}

        {/* <!-- Centros Fijos Section --> */}
        <section id="about" className="about section">
          <div className="container" data-aos="fade-right" data-aos-delay="100">
            <div className="row align-items-xl-center gy-5">
              <div className="col-xl-5 content">
                <h3>Puntos De Venta</h3>
                <h2>Soberanía Alimentaria Formoseña</h2>
                <p>
                  Te esperamos en nuestros centros fijos los días{" "}
                  <strong>jueves y sábados </strong>
                  de <strong>07:30 a 12:30</strong>. También realizamos ventas
                  itinerantes en distintos barrios de la ciudad de Formosa y
                  localidades del interior de la provincia, acercando productos
                  frescos y a precio justo.
                </p>
                <Link to={"/puntos"} className="read-more">
                  <span>Ver Puntos</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>

              <div className="col-xl-7">
                <div className="row gy-4 icon-boxes">
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box">
                      <div className="icon-circle">
                        <img src={FotoCentro12} alt="icono" />
                      </div>
                      <h3>Av. Néstor Kirchner 5595</h3>
                      <p>
                        <strong>Centro fijo</strong>, abierto jueves y sábados
                        de 07:30 a 12:30.
                      </p>
                    </div>
                  </div>{" "}
                  {/* <!-- End Icon Box --> */}
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box">
                      <div className="icon-circle">
                        <img src={FotoCentroVilla} alt="icono" />
                      </div>
                      <h3>Av. Frondizi 4205</h3>
                      <p>
                        <strong>Centro fijo</strong>, abierto jueves y sábados
                        de 07:30 a 12:30.
                      </p>
                    </div>
                  </div>{" "}
                  {/* <!-- End Icon Box --> */}
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon-box">
                      <div className="icon-circle">
                        <img src={FotoCentroAlta} alt="icono" />
                      </div>
                      <h3>Av. Néstor Kirchner 1855</h3>
                      <p>
                        <strong>Centro fijo</strong>, abierto jueves y sábados
                        de 07:30 a 12:30.
                      </p>
                    </div>
                  </div>{" "}
                  {/* <!-- End Icon Box --> */}
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="icon-box">
                      <div className="icon-circle">
                        <img src={FotoCentroc5} alt="icono" />
                      </div>
                      <h3>Paula Albarracín 2735</h3>
                      <p>
                        <strong>Centro fijo</strong>, abierto jueves y sábados
                        de 07:30 a 12:30.
                      </p>
                    </div>
                  </div>{" "}
                  {/* <!-- End Icon Box --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Centros Fijos Section --> */}

        {/*  <!-- Details Section --> */}
        <section id="details" className="details section">
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Sobre Nosotros</h2>
            <div>
              <span>TODO SOBRE</span>{" "}
              <span className="description-title">S.A.F</span>
            </div>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container">
            <div className="row gy-1 align-items-center features-item">
              <div
                className="col-md-5 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="100"
              >
                <img src={fotoFurgon} className="img-fluid" alt="" />
              </div>
              <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
                <h3>¿Qué es el programa Soberanía Alimentaria Formoseña?</h3>
                <p className="">
                  El <strong>programa Soberanía Alimentaria Formoseña</strong> o
                  por sus siglas <strong>S.A.F </strong>
                  es un programa impulsado por la Subsecretaría de Defensa al
                  Consumidor y Usuarios dependiente del Ministerio de Economía,
                  Haciendas y Finanzas.
                  <br />
                  <br />
                  Busca fortalecer y promocionar los canales de comercialización
                  de los alimentos producidos por nuestras familias de
                  productores paipperas, generando espacios de comercialización
                  que permitan la venta directa del productor al consumidor
                  eliminando la intermediación.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check"></i>
                    <span>
                      {" "}
                      <strong>
                        Del productor a tu mesa a un precio justo.
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Features Item --> */}

            <div className="row gy-1 align-items-center features-item">
              <div
                className="col-md-5 order-1 order-md-2 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src={fotoDistribuidores} className="img-fluid" alt="" />
              </div>
              <div
                className="col-md-7 order-2 order-md-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Nuestros productores locales</h3>
                <p>
                  Los productores que forman parte de{" "}
                  <strong>Soberanía Alimentaria Formoseña</strong> son, en su
                  mayoría, familias trabajadoras de diferentes puntos de la
                  provincia, provenientes de comunidades como{" "}
                  <strong>Riacho He-Hé, Tres Lagunas, Naineck</strong> y muchas
                  otras. Ellos son el corazón de este programa, ya que con
                  esfuerzo y dedicación cultivan, elaboran y acercan alimentos
                  frescos y de calidad para todos los formoseños.
                  <br />
                  <br />
                  Además, trabajamos en conjunto con importantes distribuidores
                  locales que fortalecen la cadena de valor, como:
                </p>
                <div className="icon-container-dis">
                  <div className="icon-circle-dis">
                    <img src={logoNutrifor} alt="icono" />
                  </div>
                  <div className="icon-circle-dis">
                    <img src={logoPanDeCasa} alt="icono" />
                  </div>
                  <div className="icon-circle-dis">
                    <img src={logoRefsaGas} alt="icono" />
                  </div>
                </div>

                <p className="fst-italic py-4">
                  <strong>
                    De esta forma, juntos construimos una red sólida de
                    producción y distribución, que siempre prioriza lo local y
                    refuerza nuestra identidad formoseña.
                  </strong>
                </p>
              </div>
            </div>
            {/* <!-- Features Item --> */}

            <div className="row gy-1 align-items-center features-item">
              <div
                className="col-md-5 d-flex align-items-center"
                data-aos="zoom-out"
              >
                <img src={fotoNTF} className="img-fluid" alt="" />
              </div>
              <div className="col-md-7" data-aos="fade-up">
                <h3>Comunicación y Comunidad</h3>
                <p>
                  El programa también tiene un espacio en la televisión local a
                  través de <strong>“Netamente Formoseño”</strong>, un ciclo que
                  difunde el trabajo de nuestros productores, los avances del
                  programa y consejos para los consumidores. <br />
                  Además, <strong>S.A.F.</strong> recorre barrios y localidades,
                  llevando alimentos frescos y saludables a miles de familias
                  formoseñas.
                </p>
                <p className="fst-italic">
                  <strong>
                    Nuestro compromiso es con la soberanía alimentaria, el
                    desarrollo local y el bienestar de nuestra gente.
                  </strong>
                </p>
              </div>
            </div>
            {/* <!-- Features Item --> */}

            <div className="row gy-1 align-items-center features-item">
              <div
                className="col-md-5 order-1 order-md-2 d-flex align-items-center"
                data-aos="zoom-out"
              >
                <img src={fotoStreaming} className="img-fluid" alt="" />
              </div>
              <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
                <h3>Streaming Nutricionales</h3>
                <p>
                  Dentro del marco del programa{" "}
                  <strong>Soberanía Alimentaria Formoseña</strong>, se
                  desarrollan los <strong>Streaming Nutricionales</strong>, un
                  espacio pensado para brindar a la comunidad información útil y
                  accesible sobre la alimentación saludable.
                  <br />
                  Cada transmisión busca orientar a las familias formoseñas con
                  consejos prácticos sobre qué alimentos consumir, cómo
                  combinarlos y de qué manera incorporarlos en la vida diaria
                  para mejorar la calidad de vida.
                </p>
                <p>
                  En estos encuentros virtuales también se comparten recetas
                  nutritivas y económicas, además de actividades y novedades
                  relacionadas al programa SAF. Los streamings funcionan como un
                  puente directo entre productores, especialistas en nutrición y
                  consumidores, reforzando el lema
                  <strong className="fst-italic">
                    “Del productor a tu mesa con un precio justo”
                  </strong>
                  , pero también{" "}
                  <strong className="fst-italic">
                    “con conocimiento y salud para toda la familia”
                  </strong>
                  .
                </p>
              </div>
            </div>
            {/* <!-- Features Item --> */}
          </div>
        </section>
        {/* <!-- /Details Section --> */}

        {/* <!-- Testimonials Section --> */}
        <section
          id="testimonials"
          className="testimonials section dark-background"
        >
          <img src={fondoProductores} className="testimonials-bg" alt="" />

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              speed={800}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src={fotomaurohernangomez}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Mauro Hernan Gomez</h3>
                  <h4>PRODUCTOR</h4>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                     En la localidad de Colonia San Isidro, Riacho He Hé, Mauro Hernán Gómez trabaja 
                     junto a su grupo familiar de 2 integrantes en la producción de alimentos 
                     frescos y de calidad...
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src={fotorufinoMoreira2}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Rufino Moreira</h3>
                  <h4>PRODUCTOR</h4>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      En el marco del programa Soberanía Alimentaria Formoseña, 
                      destacamos el trabajo de Rufino Moreira, un productor de la localidad de
                       Loma Zapatú, Tres Lagunas...
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src={fotojuandelacruzrios}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Juan de la Cruz Ríos</h3>
                  <h4>PRODUCTOR</h4>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      En el B° La Esperanza, Riacho He Hé, Juan de la Cruz Ríos y Julio Gómez llevan 
                      adelante un valioso trabajo de producción agroecológica en sus 2 hectáreas de
                       cultivo...
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testimonial-item">
                  <img
                    src={fotosergiomareco}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sergio Mareco</h3>
                  <h4>PRODUCTOR</h4>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>
                      En la localidad de Cachaza, Tres Lagunas, Sergio Rolando Mareco y su 
                      grupo familiar de 4 personas trabajan con esfuerzo y dedicación en el 
                      cultivo de alimentos frescos y saludables...
                    </span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* <!-- /Testimonials Section --> */}

       {/*  <!-- Faq Section --> */}
    <section id="faq" className="faq section light-background">

      <div className="container-fluid">

        <div className="row gy-4">

          <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">

            <div className="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
              <h3><span>Convenio entre la </span><strong>Subsecretaría de Defensa al Consumidor y Usuario y el Banco de Formosa</strong></h3>
              <p>
                El convenio entre el <strong>Banco Formosa</strong>, a través de su <strong>aplicación ONDA</strong>, 
                y el <strong>Programa de Soberanía Alimentaria</strong> no solo significa la integración de herramientas 
                tecnológicas al servicio de la comunidad, sino también un compromiso con el acceso justo,
                 seguro y directo a los alimentos producidos en nuestra provincia. La renovación de este 
                 convenio refleja la decisión de trabajar por un consumo responsable, accesible y en 
                 beneficio de cada consumidor final.

              </p>
            </div>

            <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="200">

              <div className={`faq-item ${preguntaActiva1 ? "faq-active" : ""}`} onClick={()=>setPreguntaActiva1(!preguntaActiva1)}>
                <i className="faq-icon bi bi-question-circle"></i>
                <h3>Que beneficios tiene para los consumidores finales?</h3>
                <div className="faq-content" >
                  <p>
                    A través de la <strong>aplicación ONDA</strong>, 
                    quienes realicen sus compras en los puntos de venta de <strong>Soberanía Alimentaria </strong> 
                    podrán acceder a exclusivos beneficios:

                    <ul>
                    <li><strong>20% de reintegro</strong> en sus compras.</li>
                    <li>Tope mensual de <strong>$50.000</strong>.</li>
                  </ul>
                  <i>Válido únicamente abonando con el QR de ONDA.</i>
                  </p>
                  
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>{/* <!-- End Faq item--> */}

              <div className={`faq-item ${preguntaActiva2 ? "faq-active" : ""}`} onClick={()=>setPreguntaActiva2(!preguntaActiva2)}>
                <i className="faq-icon bi bi-question-circle"></i>
                <h3>Que beneficios tiene para las pymes que venden con ONDA?</h3>
                <div className="faq-content">
                  <p>Beneficios para pymes que venden con ONDA:
                    <ul>
                    <li><strong>10% de reintegro</strong> sobre sus ventas.</li>
                    <li>Tope mensual de <strong>$100.000.</strong>.</li>
                  </ul>
                  <i>Aplica únicamente a operaciones realizadas con el QR de ONDA.</i>
                  </p>
                  
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>{/* <!-- End Faq item--> */}
            </div>
          </div>

          <div className="col-lg-5 order-1 order-lg-2">
      <Swiper
        modules={[Autoplay, Pagination]}
              loop={true}
              speed={800}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              pagination={{ clickable: true }}
              className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={imgOnda}
            className="img-fluid"
            style={{ borderRadius: "5%" }}
            alt=""
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={firmaOnda}
            className="img-fluid"
            style={{ borderRadius: "5%" }}
            alt=""
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={firmaOnda3}
            className="img-fluid"
            style={{ borderRadius: "5%" }}
            alt=""
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={firmaOnda2}
            className="img-fluid"
            style={{ borderRadius: "5%" }}
            alt=""
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </SwiperSlide>
      </Swiper>
    </div>
        </div>

      </div>

    </section>{/* <!-- /Faq Section --> */}

        {/* <!-- Gallery Section --> */}
        <section id="gallery" className="gallery section">
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>S.A.F</h2>
            <div>
              <span>Galeria De </span>{" "}
              <span className="description-title">Fotos</span>
            </div>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row g-0">
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto1)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto1} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto2)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto3)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto3} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto4)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto4} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto5)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto5} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto6)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto6} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto7)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto7} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto8)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto8} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto9)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto9} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto10)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto10} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto11)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto11} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto12)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto12} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto13)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto13} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto14)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto14} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto15)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto15} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <div
                    onClick={() => abrirModal(foto16)}
                    className="glightbox"
                    data-gallery="images-gallery"
                  >
                    <img src={foto16} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              {/* <!-- End Gallery Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- /Gallery Section --> */}

        

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

        <div>
          <hr/>
        </div>
        <Footer/>
      </Container>
    
  );
};

export default Home;
