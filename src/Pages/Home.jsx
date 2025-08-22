import react, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FotoCentroAlta from "../assets/img/foto2.jpeg"
import FotoCentro12 from "../assets/img/centro12.webp"
import FotoCentroc5 from "../assets/img/centroc5.webp"
import FotoCentroVilla from "../assets/img/centrovilla.webp"
import fotoFurgon from "../assets/img/Furgon.png"
import fotoDistribuidores from "../assets/img/distribuidores.png"
import fotoNTF from "../assets/img/ntf.png"
import fotoStreaming from "../assets/img/Streamings.png"
import logoNutrifor from "../assets/img/logoNutrifor.jpg"
import logoPanDeCasa from  "../assets/img/logoPanDeCasa.jpg"
import logoRefsaGas from "../assets/img/logoRefsaGas.jpg"
import portada from "../assets/img/portada.png"
const Home = () => {

    useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación
      once: true,     // si querés que se ejecute solo una vez
    });
  }, []);

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

  return (
    <div>
        {/* Navbar */}
        <header id="header" class="header d-flex align-items-center fixed-top">
            <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

            <a href="index.html" class="logo d-flex align-items-center">
                {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
                 <img src="/src/assets/img/favicon2.png" alt=""/> 
                <h1 class="sitename">S.A.F</h1>
            </a>

            <nav id="navmenu" class="navmenu">
                <ul>
                <li><a href="#hero" class="active">Inicio</a></li>
                <li><a href="#about">Noticias</a></li>
                <li><a href="#features">Productos</a></li>
                <li><a href="#gallery">Puntos</a></li>
                <li><a href="#team">Productores</a></li>
                <li><a href="#pricing">ONDA</a></li>
                <li class="dropdown"><a href="#"><span>Programas</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                    <li><a href="#">Streamings Nutricionales</a></li>
                    <li><a href="#">Netamente Formoseno</a></li>
                    </ul>
                </li>
                {/* <li><a href="#contact">Contact</a></li> */}
                <div class="d-none d-lg-flex ms-2"><a class="btn-sm-square bg-white rounded-circle ms-3" href="https://www.facebook.com/Programasoberaniaalimentaria"><small class="bi bi-facebook text-body"></small></a><a class="btn-sm-square bg-white rounded-circle ms-3" href="https://www.instagram.com/soberaniaalimentariaformosena"><small class="bi bi-instagram text-body"></small></a><a class="btn-sm-square bg-white rounded-circle ms-3" href="https://www.youtube.com/@soberaniaalimentariafsa"><small class="bi bi-youtube text-body"></small></a></div>
                </ul>
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            </div>
        </header>
        {/* Fin Navbar */}

        <main class="main">
            {/* <!-- Portada --> */}
            <section id="hero" class="hero section dark-background">
                <img src={`/src/assets/img/loginfondo.jpg`} alt="" class="hero-bg"/>

                <div class="container">
                    <div class="row gy-4 justify-content-between">
                    <div class="col-lg-5 order-lg-last hero-img" data-aos="zoom-out" data-aos-delay="100">
                        <img src={portada} class="img-fluid animated" alt=""/>
                    </div>

                    <div class="col-lg-6  d-flex flex-column justify-content-center" data-aos="fade-in">
                        <h1>Soberania Alimentaria <span>Formoseña</span></h1>
                        <p>Un programa impulsado por la Subsecretaría de Defensa al Consumidor y Usuarios.</p>
                        <div class="d-flex">
                        <a href="#about" class="btn-get-started">Ver mas</a>
                        <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Ver Video</span></a>
                        </div>
                    </div>

                    </div>
                </div>

                <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 24 150 28 " preserveAspectRatio="none">
                    <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                    </defs>
                    <g class="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3"></use>
                    </g>
                    <g class="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0"></use>
                    </g>
                    <g class="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9"></use>
                    </g>
                </svg>

            </section>
            {/* <!-- Fin Portada --> */}

            {/* <!-- Centros Fijos Section --> */}
            <section id="about" class="about section">

            <div class="container" data-aos="fade-right" data-aos-delay="100">
                <div class="row align-items-xl-center gy-5">

                <div class="col-xl-5 content">
                    <h3>Puntos De Venta</h3>
                    <h2>Soberanía Alimentaria Formoseña</h2>
                    <p>
                        Te esperamos en nuestros centros fijos los días <strong>jueves y sábados </strong> 
                        de <strong>07:30 a 12:30</strong>.  
                        También realizamos ventas itinerantes en distintos barrios de la ciudad de Formosa 
                        y localidades del interior de la provincia, acercando productos frescos y a precio justo.
                    </p>
                    <a href="#" class="read-more"><span>Ver Puntos</span><i class="bi bi-arrow-right"></i></a>
                </div>

                <div class="col-xl-7">
                    <div class="row gy-4 icon-boxes">

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="icon-box">
                        <div class="icon-circle">
                            <img src={FotoCentro12} alt="icono" />
                        </div>
                        <h3>Av. Néstor Kirchner 5595</h3>
                        <p><strong>Centro fijo</strong>, abierto jueves y sábados de 07:30 a 12:30.</p>
                        </div>
                    </div> {/* <!-- End Icon Box --> */}

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="icon-box">
                        <div class="icon-circle">
                            <img src={FotoCentroVilla} alt="icono" />
                        </div>
                        <h3>Av. Frondizi 4205</h3>
                        <p><strong>Centro fijo</strong>, abierto jueves y sábados de 07:30 a 12:30.</p>
                        </div>
                    </div> {/* <!-- End Icon Box --> */}

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div class="icon-box">
                        <div class="icon-circle">
                            <img src={FotoCentroAlta} alt="icono" />
                        </div>
                        <h3>Av. Néstor Kirchner 1855</h3>
                        <p><strong>Centro fijo</strong>, abierto jueves y sábados de 07:30 a 12:30.</p>
                        </div>
                    </div> {/* <!-- End Icon Box --> */}

                    <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div class="icon-box">
                        <div class="icon-circle">
                            <img src={FotoCentroc5} alt="icono" />
                        </div>
                        <h3>Paula Albarracín 2735</h3>
                        <p><strong>Centro fijo</strong>, abierto jueves y sábados de 07:30 a 12:30.</p>
                        </div>
                    </div> {/* <!-- End Icon Box --> */}

                    </div>
                </div>

                </div>
            </div>

            </section>
            {/* <!-- /Centros Fijos Section --> */}

            {/*  <!-- Details Section --> */}
            <section id="details" class="details section">

              {/* <!-- Section Title --> */}
              <div class="container section-title" data-aos="fade-up">
                <h2>Sobre Nosotros</h2>
                <div><span>TODO SOBRE</span> <span class="description-title">S.A.F</span></div>
              </div>
              {/* <!-- End Section Title --> */}

              <div class="container">

                <div class="row gy-1 align-items-center features-item">
                  <div class="col-md-5 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
                    <img src={fotoFurgon} class="img-fluid" alt=""/>
                  </div>
                  <div class="col-md-7" data-aos="fade-up" data-aos-delay="100">
                    <h3>¿Qué es el programa Soberanía Alimentaria Formoseña?</h3>
                    <p class="">
                        El <strong>programa Soberanía Alimentaria Formoseña</strong> o por sus siglas <strong>S.A.F </strong>
                        es un programa impulsado por la Subsecretaría de Defensa al Consumidor y Usuarios 
                        dependiente del Ministerio de Economía, Haciendas y Finanzas.
                        <br/><br/>Busca fortalecer y promocionar los canales de comercialización 
                        de los alimentos producidos por 
                        nuestras familias de productores paipperas, generando espacios de 
                        comercialización que permitan la venta directa del productor al 
                        consumidor eliminando la intermediación.
                    </p>
                    <ul>
                      <li><i class="bi bi-check"></i><span> <strong>Del productor a tu mesa a un precio justo.</strong></span></li>
                    </ul>
                  </div>
                </div>{/* <!-- Features Item --> */}

                <div class="row gy-1 align-items-center features-item">
                  <div class="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                    <img src={fotoDistribuidores} class="img-fluid" alt=""/>
                  </div>
                  <div class="col-md-7 order-2 order-md-1" data-aos="fade-up" data-aos-delay="200">
                    <h3>Nuestros productores locales</h3>
                    <p>
                      Los productores que forman parte de <strong>Soberanía Alimentaria Formoseña</strong> son, en su mayoría, 
                      familias trabajadoras de diferentes puntos de la provincia, provenientes de comunidades 
                      como <strong>Riacho He-Hé, Tres Lagunas, Naineck</strong> y muchas otras. 
                      Ellos son el corazón de este programa, ya que con esfuerzo y dedicación cultivan, elaboran y 
                      acercan alimentos frescos 
                      y de calidad para todos los formoseños.
                      <br/><br/>
                      Además, trabajamos en conjunto con importantes distribuidores locales que fortalecen la cadena de valor, como:
                    </p>
                    <div class="icon-container-dis">
                      <div class="icon-circle-dis">
                        <img src={logoNutrifor} alt="icono" />
                      </div>
                      <div class="icon-circle-dis">
                        <img src={logoPanDeCasa} alt="icono" />
                      </div>
                      <div class="icon-circle-dis">
                        <img src={logoRefsaGas} alt="icono" />
                      </div>
                    </div>

                    <p class="fst-italic py-4"><strong>De esta forma, juntos construimos una red sólida de producción y 
                      distribución, que siempre prioriza lo local y refuerza nuestra identidad formoseña.</strong></p>
                  </div>
                </div>{/* <!-- Features Item --> */}

                <div class="row gy-1 align-items-center features-item">
                  <div class="col-md-5 d-flex align-items-center" data-aos="zoom-out">
                    <img src={fotoNTF} class="img-fluid" alt=""/>
                  </div>
                  <div class="col-md-7" data-aos="fade-up">
                    <h3>Comunicación y Comunidad</h3>
                    <p>
                      El programa también tiene un espacio en la televisión local a través de <strong>“Netamente Formoseño”</strong>, 
                      un ciclo que difunde el trabajo de nuestros productores, 
                      los avances del programa y consejos para los consumidores. <br/>
                      Además, <strong>S.A.F.</strong> recorre barrios y localidades, 
                      llevando alimentos frescos y saludables a miles de familias formoseñas.
                    </p>
                    <p class="fst-italic"><strong>Nuestro compromiso es con la soberanía alimentaria, el desarrollo local y el bienestar de nuestra gente.</strong></p>
                    
                  </div>
                </div>{/* <!-- Features Item --> */}

                <div class="row gy-1 align-items-center features-item">
                  <div class="col-md-5 order-1 order-md-2 d-flex align-items-center" data-aos="zoom-out">
                    <img src={fotoStreaming} class="img-fluid" alt=""/>
                  </div>
                  <div class="col-md-7 order-2 order-md-1" data-aos="fade-up">
                    <h3>Streaming Nutricionales</h3>
                    <p >
                      Dentro del marco del programa <strong>Soberanía Alimentaria Formoseña</strong>, 
                      se desarrollan los <strong>Streaming Nutricionales</strong>, un espacio pensado para brindar 
                      a la comunidad información útil y accesible sobre la alimentación saludable.<br/>
                      Cada transmisión busca orientar a las familias formoseñas con 
                      consejos prácticos sobre qué alimentos consumir, cómo combinarlos 
                      y de qué manera incorporarlos en la vida diaria para mejorar la calidad de vida.
                    </p>
                    <p>
                      En estos encuentros virtuales también se comparten recetas nutritivas 
                      y económicas, además de actividades y novedades relacionadas al programa SAF. 
                      Los streamings funcionan como un puente directo entre productores, especialistas 
                      en nutrición y consumidores, reforzando el lema 
                      <strong class="fst-italic">“Del productor a tu mesa con un precio justo”</strong>, 
                      pero también <strong class="fst-italic">“con conocimiento y salud para toda la familia”</strong>.
                    </p>
                  </div>
                </div>{/* <!-- Features Item --> */}
              </div>
            </section>{/* <!-- /Details Section --> */}

            {/* <!-- Gallery Section --> */}
            <section id="gallery" class="gallery section">

              {/* <!-- Section Title --> */}
              <div class="container section-title" data-aos="fade-up">
                <h2>S.A.F</h2>
                <div><span>Galeria De </span> <span class="description-title">Fotos</span></div>
              </div>{/* <!-- End Section Title --> */}

              <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="row g-0">

                  <div class="col-lg-3 col-md-4">
                    <div class="gallery-item">
                      <div  onClick={() => abrirModal(FotoCentroAlta)}  class="glightbox" data-gallery="images-gallery">
                        <img src={FotoCentroAlta} alt="" class="img-fluid"/>
                      </div>
                    </div>
                  </div>{/* <!-- End Gallery Item --> */}

                  <div class="col-lg-3 col-md-4">
                    <div class="gallery-item">
                      <div onClick={() => abrirModal(FotoCentroAlta)} class="glightbox" data-gallery="images-gallery">
                        <img src={FotoCentroAlta} alt="" class="img-fluid"/>
                      </div>
                    </div>
                  </div>{/* <!-- End Gallery Item --> */}

                  <div class="col-lg-3 col-md-4">
                    <div class="gallery-item">
                      <div onClick={() => abrirModal(FotoCentroAlta)} class="glightbox" data-gallery="images-gallery">
                        <img src={FotoCentroAlta} alt="" class="img-fluid"/>
                      </div>
                    </div>
                  </div>{/* <!-- End Gallery Item --> */}

                  <div class="col-lg-3 col-md-4">
                    <div class="gallery-item">
                      <div onClick={() => abrirModal(FotoCentroAlta)} class="glightbox" data-gallery="images-gallery">
                        <img src={FotoCentroAlta} alt="" class="img-fluid"/>
                      </div>
                    </div>
                  </div>{/* <!-- End Gallery Item --> */}

                  <div class="col-lg-3 col-md-4">
                    <div class="gallery-item">
                      <div onClick={() => abrirModal(FotoCentroAlta)} class="glightbox" data-gallery="images-gallery">
                        <img src={FotoCentroAlta} alt="" class="img-fluid"/>
                      </div>
                    </div>
                  </div>{/* <!-- End Gallery Item --> */}

                  <div class="col-lg-3 col-md-4">
                    <div class="gallery-item">
                      <div onClick={() => abrirModal(FotoCentroAlta)} class="glightbox" data-gallery="images-gallery">
                        <img src={FotoCentroAlta} alt="" class="img-fluid"/>
                      </div>
                    </div>
                  </div>{/* <!-- End Gallery Item --> */}

                  <div class="col-lg-3 col-md-4">
                    <div class="gallery-item">
                      <div onClick={() => abrirModal(FotoCentroAlta)} class="glightbox" data-gallery="images-gallery">
                        <img src={FotoCentroAlta} alt="" class="img-fluid"/>
                      </div>
                    </div>
                  </div>{/* <!-- End Gallery Item --> */}

                  <div class="col-lg-3 col-md-4">
                    <div class="gallery-item">
                      <div onClick={() => abrirModal(FotoCentroAlta)} class="glightbox" data-gallery="images-gallery">
                        <img src={FotoCentroAlta} alt="" class="img-fluid"/>
                      </div>
                    </div>
                  </div>{/* <!-- End Gallery Item --> */}

                </div>

              </div>

            </section>
            {/* <!-- /Gallery Section --> */}


            {modalAbierto && (
        <div className="modal-imagen" onClick={cerrarModal}>
          <span className="cerrar-modal" onClick={cerrarModal}>×</span>
          <img src={imagenActual} alt="Imagen en grande" className="imagen-modal" />
        </div>
      )}

        </main>

    </div>
  )
}

export default Home