import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Container from '../Layouts/Container';
import Portada from '../Layouts/Portada';
import Spinner from "../Layouts/Spinner";
import { mostrarNoticias } from "../Redux/Actions/noticias.action";
import { fechaTexto } from "../Helpers/formateadorFecha";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Footer from "../Layouts/Footer";

const Noticias = ({ mostrarNoticias, noticia: { noticias, loadingNoticias } }) => {
  // Cargar noticias
  useEffect(() => {
    mostrarNoticias();
  }, [mostrarNoticias]);

  // Inicializar AOS una sola vez
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,   // anima una sola vez
      offset: 0
    });
  }, []);

  // Re-escanear cuando cambie la data (después del render)
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      AOS.refreshHard();
    });
    return () => cancelAnimationFrame(id);
  }, [noticias, loadingNoticias]);

  return (
    <Container>
      <Portada titulo={"Noticias"} subtitulo={"Las Últimas Noticias De Soberanía Alimentaria Formoseña"} />

      <div className='container'>
        <section id="team" className="team section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>S.A.F</h2>
            <div>
              <span>Todas</span> <span className="description-title">Las Noticias</span>
            </div>
          </div>

          {loadingNoticias ? (
            <div align="center" className="my-6">
              <Spinner />
            </div>
          ) : (
            <div className="container">
              <div className="row gy-5">
                {noticias?.map((item) => {
                  const tituloConGuiones = item?.titulo?.replace(/\s+/g, "-") || "";
                  return (
                    <div
                      key={item?._id}
                      className="col-lg-4 col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <Link  to={`/noticia/${tituloConGuiones}`}>
                        <div className="member">
                          <div className="pic">
                            <img src={item?.img} className="img-fluid" alt={item?.titulo || "Noticia"} />
                          </div>
                          <div className="member-info">
                            <h4>{item?.titulo}</h4>
                            <span>{fechaTexto(item?.createdAt)}</span>
                            <div className="social">
                              <a href="#"><i className="bi bi-facebook"></i></a>
                              <a href="#"><i className="bi bi-instagram"></i></a>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </div>

      
        {
          loadingNoticias ? null :
          <Footer/>
        }
    </Container>
  );
};

const mapStateToProps = (state) => ({
  noticia: state.noticiasReducer
});

export default connect(mapStateToProps, { mostrarNoticias })(Noticias);
