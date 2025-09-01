import PropTypes from "prop-types";
import react, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import Spinner from "../Layouts/Spinner";
import { Link } from "react-router-dom";
import { fechaTexto } from "../Helpers/formateadorFecha";
import { URL } from "../Helpers/Peticiones";
import './Styles/Videos_detalles.css'
import { useParams } from 'react-router';
import YouTube from 'react-youtube';
import { mostrarProgramas } from "../Redux/Actions/programas.action";
import Container from "../Layouts/Container";
import axios from 'axios';
import Portada from "../Layouts/Portada";

const Videos_Detalles = ({mostrarProgramas, programa: { programas, loadingProgramas}}) => {

  const {tituloPrograma} = useParams();
  const [programaObj, setProgramaObj] = useState([])
  const [loadingPrograma, setLoadingPrograma] = useState(false)
  
  const cargarPrograma = async () => {
        setLoadingPrograma(true)
        let res = await axios.get(`${URL}/ver-programa-unico/${tituloPrograma}`)
 
         const body = await res.data[0]
         setProgramaObj(body)
         setLoadingPrograma(false)
    }

    useEffect(()=>{
        cargarPrograma()
        mostrarProgramas()
    },[tituloPrograma])

    const [otrosProgramas, setOtrosProgramas] = useState([])

    useEffect(()=>{
        if(programas?.length > 0 ){
           
            // Función para obtener 3 elementos aleatorios del array
        function obtenerTresObjetosRandom(array) {  
            let elementosRandom = [];
            while (elementosRandom.length < 3) {
                const indice = Math.floor(Math.random() * array.length);
                if (!elementosRandom.includes(array[indice])) {
                    elementosRandom.push(array[indice]);
                }
            }
            return elementosRandom;
        }

        // Llamada a la función para obtener los 3 elementos aleatorios
        let tresObjetosRandom = obtenerTresObjetosRandom(programas);
       
            setOtrosProgramas(tresObjetosRandom)
        }

   },[programas])

   
   
   // Extraer el ID del video desde la URL
  const match = programaObj?.videoLink?.match(/(?:v=|embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  const videoId = match ? match[1] : null;


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
        titulo={"Programa"}
        subtitulo={programaObj?.titulo}
      />

      <div className="container-fluid tm-container-content tm-mt-60">
        <div className="section-header text-center mx-auto  wow " data-aos="fade-up">
                <h1 className="display-5 mb-3 textoGenerales py-5" >{programaObj?.titulo}</h1>
            </div>
        <div className="row tm-mb-90">            
            <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12" data-aos="fade-up">
           {/*  <iframe className="frameProgramaUnico" src={programaObj?.videoLink} title="YouTube video player" frameborder="0" allowfullscreen></iframe>  */}
           {videoId ? (
        <YouTube
          videoId={videoId}
          opts={{
            width: '100%',
            height: '500',
            playerVars: {
              autoplay: 0,
              modestbranding: 1,
              rel: 0,
            },
          }}
        />
      ) : (
        <div align="center" className="my-6">
              <Spinner />
            </div>
      )}
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                {programaObj?.tipo == "nf" ?
                <div className="tm-bg-gray tm-video-details">
                <p className="mb-4">
                <strong>Netamente Formoseño</strong> es un programa de televisión de la Subsecretaría de 
                Defensa al Consumidor y Usuario, con un enfoque dedicado a proporcionar 
                información detallada sobre <strong>soberanía alimentaria en la provincia de Formosa, Argentina</strong>. 
                En cada episodio, nos sumergimos en aspectos clave como la ubicación de lugares 
                para adquirir productos locales, los horarios disponibles, promociones exclusivas 
                y otros temas esenciales relacionados con los derechos del consumidor en la región. 
                <br/><br/>
                <i style={{color:"#269045"}}>
                    Seguí conectado con nosotros para conocer 
                    las últimas novedades del programa S.A.F.</i>
                </p>
                <div className="text-center mb-5">
                    <Link to={programaObj?.videoLink} target="_blank" className="btn btn-danger tm-btn-big"><small className="bi bi-youtube text-white"></small> Ver En Youtube</Link>
                </div>                    
                
                </div>
            :
            <div className="tm-bg-gray tm-video-details">
                <p className="mb-4">
               {/*  <strong>Netamente Formoseño</strong> es un programa de televisión de la Subsecretaría de 
                Defensa al Consumidor y Usuario, con un enfoque dedicado a proporcionar 
                información detallada sobre <strong>soberanía alimentaria en la provincia de Formosa, Argentina</strong>. 
                En cada episodio, nos sumergimos en aspectos clave como la ubicación de lugares 
                para adquirir productos locales, los horarios disponibles, promociones exclusivas 
                y otros temas esenciales relacionados con los derechos del consumidor en la región. 
                <br/><br/> */}
                <i style={{color:"#269045"}}>
                    Seguí conectado con nosotros para conocer 
                    las últimas novedades del programa S.A.F.</i>
                </p>
                <div className="text-center mb-5">
                    <Link to={programaObj?.videoLink} target="_blank" className="btn btn-danger tm-btn-big"><small className="bi bi-youtube text-white"></small> Ver En Youtube</Link>
                </div>                    
                
                </div>
                }
            </div>
        </div>
        </div>
      {/* Otros Programas */}
      <div className="container-xxl py-6" data-aos="fade-up">
        <div className="container">
            <div className="section-header text-center mx-auto mb-5 wow " data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <h1 className="display-5 mb-3 py-5 textoGenerales">Otros Programas  </h1>
                
            </div>
            <div className="row g-4">
            {
                otrosProgramas?.length > 0 ?
                <react.Fragment key={"Programas"}>
                {
                    otrosProgramas?.map((item)=>{
                        
                        return(
                            <div className="col-lg-4 col-md-6 wow  divContenedorProgramas" data-wow-delay="0.1s" key={item?.uid}>
                                    
                                       {/*  <div className="imgMinPrograma">
                                            <img className="img-fluid miniaturasProgramas" src={item?.miniaturaLink} alt="Portada"/>
                                        </div> */}
                                        <div className="position-relative tm-thumbnail-container">
                                            <img src={item?.miniaturaLink} alt="Miniatura De YT" className="img-fluid tm-catalog-item-img"/>    
                                            <Link to={`/programa/${item?.uid}`}  className="position-absolute tm-img-overlay">
                                                <i className="fas fa-play tm-overlay-icon"></i>
                                            </Link>

		                                </div>  
                                        <div className="bg-light p-4 bodyPrograma">
                                            <a className="d-block h5 lh-base mb-4 tituloPrograma" href={item?.videoLink} target="_blank">{item.titulo}</a>
                                            
                                        </div>
                                    
                            </div>
                        )
                    })
                }
                </react.Fragment>
                :
                <div align="center"><Spinner/></div>
            }
            </div>
        </div>
        </div>
    </Container>
  )
}

const mapStateToProps = (state) => ({
    programa: state.programasReducer
  });

  export default connect(mapStateToProps, {mostrarProgramas})(
    Videos_Detalles
  );