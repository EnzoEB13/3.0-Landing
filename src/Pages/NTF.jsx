import PropTypes from "prop-types";
import react, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Spinner from "../Layouts/Spinner";
import { Link } from "react-router-dom";
import { mostrarProgramas } from "../Redux/Actions/programas.action";
import { fechaTexto } from "../Helpers/formateadorFecha";
import Container from '../Layouts/Container'
import Portada from '../Layouts/Portada'
import './Styles/Programa.css'
import AOS from "aos";
const NTF = ({mostrarProgramas, programa: { programas, loadingProgramas}}) => {

  useEffect(()=>{
        mostrarProgramas()
    },[])

  const [arrayProgramas, setArrayProgramas] = useState()

  useEffect(()=>{
    if(programas?.length > 0){
        let arrayTemporal2 = []
            for (let index = 0; index < programas.length; index++) {
                
                if(programas[index]?.tipo == "nf"){
                    arrayTemporal2.push(programas[index])
                }
            
                setArrayProgramas(arrayTemporal2)
                
            }
    }

},[programas])

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
      }, [programas, loadingProgramas]);

  return (
    <Container>
      <Portada
        titulo={"Netamente Formoseño"}
        subtitulo={
          "Todos nuestros programas publicados"
        }
      />
      <div className='container'>
        <section id="team" className="team section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>S.A.F</h2>
            <div>
              <span>Todas</span> <span className="description-title">Los Programas</span>
            </div>
          </div>

          {loadingProgramas ? (
            <div align="center" className="my-6">
              <Spinner />
            </div>
          ) : (
            <div className="container">
              <div className="row gy-5">
                {arrayProgramas?.map((item) => {
                 
                  const tituloConGuiones = item?.titulo?.replace(/\s+/g, "_") || "";
                  return (
                    <div
                      key={item?.uid}
                      className="col-lg-4 col-md-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      
                        <div className="member">
                          <div className="pic">
                            <Link  to={`/video/${tituloConGuiones}`} className="position-absolute tm-img-overlay">
                              <img src={item?.miniaturaLink} className="img-fluid tm-catalog-item-img" alt={item?.titulo || "Programa"} />
                            </Link>
                          </div>
                          <div className="member-info">
                            <h4>{item?.titulo}</h4>
                            <span>{fechaTexto(item?.fecha)}</span>
                            <div className="social">
                              <a href={item?.videoLink} target="_blank"><i className="bi bi-youtube"></i></a>
                            </div>
                          </div>
                        </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </div>
    </Container>
  )
}

const mapStateToProps = (state) => ({
    programa: state.programasReducer
  });

  export default connect(mapStateToProps, {mostrarProgramas})(
    NTF
  );