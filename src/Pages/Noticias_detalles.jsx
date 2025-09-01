import PropTypes from "prop-types";
import react, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router';
import { connect } from "react-redux";
import Container from '../Layouts/Container'
import Portada from '../Layouts/Portada'
import { mostrarNoticias } from '../Redux/Actions/noticias.action'
import { mostrarProgramas } from '../Redux/Actions/programas.action'
import { URL } from "../Helpers/Peticiones";
import axios from 'axios';
import Spinner from "../Layouts/Spinner";
import parse from "html-react-parser";
import './Styles/DetallesNoticias.css'
import { fechaTexto } from "../Helpers/formateadorFecha";
import Footer from "../Layouts/Footer";

const Noticias_detalles = ({mostrarNoticias, noticia: { noticias }, mostrarProgramas, programa: { programas, loadingProgramas}}) => {
  
    const [loadingNoticia, setLoadingNoticia] = useState(false)
    const [noticia, setNoticia] = useState([])
    const {tituloNoticia} = useParams();

    const cargarNoticia = async () => {
        setLoadingNoticia(true)
        let res = await axios.get(`${URL}/ver-noticia-unica/${tituloNoticia}`)
         
         const body = await res.data
         
         setNoticia(body[0])
         setLoadingNoticia(false)
    }

    useEffect(()=>{
        mostrarNoticias()
        cargarNoticia()
        mostrarProgramas()
    },[tituloNoticia])

    const [descripcionNoticia, setDescripcionNoticia] = useState("")

     useEffect(()=>{
        if(noticia?.titulo){
            let desc = parse(noticia?.descripcion)
            setDescripcionNoticia(desc) 
        }
    },[noticia])

       const [noticiasLista, setNoticiasLista] = useState([])
   useEffect(()=>{
        if(noticias?.length > 0 ){
           
            const maxNoticias = 5;
            const totalNoticias = noticias?.length || 0;

            if (totalNoticias > 0) {
            // calcular cuántas noticias vamos a tomar (máximo 5)
            const cantidad = Math.min(maxNoticias, totalNoticias);

            // generar un índice de inicio aleatorio para tomar 'cantidad' de noticias
            const indiceInicio = Math.floor(Math.random() * (totalNoticias - cantidad + 1));

            // tomar las noticias
            const nuevasNoticias = noticias.slice(indiceInicio, indiceInicio + cantidad);

            setNoticiasLista(nuevasNoticias);
            } else {
            setNoticiasLista([]);
            }

        }

   },[noticias])

   

   
   const [programaUnico, setProgramaUnico] = useState()
   useEffect(()=>{
        if(programas?.length > 0){
            let min = 0
            let max = programas?.length

            let nro = Math.floor(Math.random() * (max - min + 1)) + min;
            
            setProgramaUnico(programas[nro])
        }
   },[programas])


   
   

   /* const copiarEnlace = (valor) => {
    let link = window.location.href
    let text = navigator.clipboard.writeText(link)
    toast.promise(
        text,
         {
           loading: 'Copiando...',
           success: <b>Enlace Copiado!</b>,
           error: <b>Error Al Copiar El Enlace.</b>,
         }
       );
         setBotonEnlaceON(valor)
       
   } */

   /* const [botonEnlaceON, setBotonEnlaceON] = useState(false)
 */
    
  
    return (
    <Container>
        <Portada titulo={"Noticia"} subtitulo={noticia?.titulo} />
        {
        loadingNoticia ? <div align="center" className="py-6"><Spinner/></div>
        :
        <div className="container-fluid py-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {/* <!-- News Detail Start --> */}
                    <div className="position-relative mb-3">
                        <img className="portadaNoticia img-fluid w-100" src={noticia?.img} alt="portada"/>
                        <div className="overlay position-relative ">
                            
                            <div>
                                <h3 className="mb-3 my-5 textoNoticiaDetalle">{noticia?.titulo}</h3>
                                <hr/>
                                <div>
                                    {descripcionNoticia}
                                </div>
                                
                                {/* <div align="center">
                                    {
                                        botonEnlaceON == false ?
                                        <button className="btn btn-info btnCopiarEnlaceInfo my-5" onClick={() => copiarEnlace("link", true)}
                                        ><small className="bi bi-link-45deg mr-2"></small> 
                                        Compartir Noticia
                                        </button>
                                    :
                                        <button className="btn btn-success btnCopiarEnlaceSuccess my-5" onClick={() => copiarEnlace("Link", true)}
                                        ><small className="bi bi-link-45deg mr-2"></small> 
                                        Enlace Copiado
                                        </button>
                                    }
                                </div> */}
                            </div>
                        </div>
                    </div>
                 {/*    <!-- News Detail End -->

                    <!-- Comment List Start --> */}
                   {/*  <div className="bg-light mb-3" style={{padding: "30px"}}>
                        <h3 className="mb-4">3 Comments</h3>
                        <div className="media mb-4">
                                <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                            <div className="media-body">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                    Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                    consetetur at sit.</p>
                                <button className="btn btn-sm btn-outline-secondary">Reply</button>
                            </div>
                        </div>
                        <div className="media">
                            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                            <div className="media-body">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                    Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                    consetetur at sit.</p>
                                <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                <div className="media mt-4">
                                    <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                                    <div className="media-body">
                                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                            labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                            eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                                            ipsum diam tempor consetetur at sit.</p>
                                        <button className="btn btn-sm btn-outline-secondary">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="bg-light mb-3" style={{padding: "30px"}}>
                        <h3 className="mb-4">Leave a comment</h3>
                        <form>
                            <div className="form-group">
                                <label for="name">Name *</label>
                                <input type="text" className="form-control" id="name"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email *</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label for="website">Website</label>
                                <input type="url" className="form-control" id="website"/>
                            </div>

                            <div className="form-group">
                                <label for="message">Message *</label>
                                <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                            </div>
                            <div className="form-group mb-0">
                                <input type="submit" value="Leave a comment"
                                    className="btn btn-primary font-weight-semi-bold py-2 px-3"/>
                            </div>
                        </form>
                    </div> */}
                  
                </div>

                <div className="col-lg-4 pt-3 pt-lg-0">
                   {/*  <!-- Social Follow Start --> */}
                    <div className="pb-3">
                        <div className="py-2 px-4 mb-3">
                            <h3 className="m-0 textoNoticiaDetalle">Nuestras Redes</h3>
                        </div>
                        <div className="d-flex mb-3">
                            <a href="https://www.facebook.com/Programasoberaniaalimentaria" className="redFacebook d-block w-50 py-2 px-3 text-white text-decoration-none mr-2 mx-1" >
                                <small className="bi bi-facebook mr-2"></small><small> Facebook</small>
                            </a>
                            <a href="https://www.instagram.com/soberaniaalimentariaformosena" className="redInstagram d-block w-50 py-2 px-3 text-white text-decoration-none ml-2 mx-1" >
                                <small className="bi bi-instagram mr-2"></small><small> Instagram</small>
                            </a>
                        </div>
                       
                        <div className="d-flex mb-3">
                            <a href="https://www.youtube.com/@SAF_2025" className="redYoutube d-block w-50 py-2 px-3 text-white text-decoration-none mr-2 mx-1" >
                                <small className="bi bi-youtube mr-2"></small><small> Youtube</small>
                            </a>
                            
                        </div>
                    </div>
                    {/* <!-- Social Follow End -->

                    <!-- Newsletter Start --> */}
                    {/* <div className="pb-3">
                        <div className="bg-light py-2 px-4 mb-3">
                            <h3 className="m-0">Otras Noticias</h3>
                        </div>
                        <div className="bg-light text-center p-4 mb-3">
                            <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                            <div className="input-group" style={{width: "100%"}}>
                                <input type="text" className="form-control form-control-lg" placeholder="Your Email"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                            <small>Sit eirmod nonumy kasd eirmod</small>
                        </div>
                    </div> */}
                 {/*    <!-- Newsletter End -->

                    <!-- Ads Start --> */}
                    <div className="mb-3 pb-3" align="center">
                    <div className="iframeWrapper">
                        <iframe
                        className="programaSAF"
                        src={programaUnico?.videoLink}
                        title="Programas S.A.F"
                        allow="
                        accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; 
                        web-share"
                        allowFullScreen
                        ></iframe>
                    </div>
                    </div>


                   {/*  <!-- Ads End -->

                    <!-- Popular News Start --> */}
                    <div className="pb-3">
                        <div className=" py-2 px-4 mb-3">
                            <h3 className="m-0 textoNoticiaDetalle">Otras Noticias</h3>
                        </div>

                        {
                            noticiasLista?.map((lista)=>{
                                const tituloConGuiones = lista?.titulo.replace(/\s+/g, '-');
                                return(
                                    <div className="d-flex mb-3">
                                        <img src={lista?.img} className="portadaOtrasNoticias"/>
                                        <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{height: "100px"}}>
                                            <div className="mb-1" style={{fontSize: "13px"}}>
                                            {/*  <a href="">Technology</a>
                                                <span className="px-1">/</span> */}
                                                <span>{fechaTexto(lista?.fecha)}</span>
                                            </div>
                                            <Link className="h6 m-0" to={`/noticia/${tituloConGuiones}`}>{lista?.titulo}</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                   {/*  <!-- Popular News End -->

                    <!-- Tags Start --> */}
                   {/*  <div className="pb-3">
                        <div className="bg-light py-2 px-4 mb-3">
                            <h3 className="m-0">Tags</h3>
                        </div>
                        <div className="d-flex flex-wrap m-n1">
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Politics</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Sports</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Health</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Education</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Science</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Technology</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Foods</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Entertainment</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Travel</a>
                            <a href="" className="btn btn-sm btn-outline-secondary m-1">Lifestyle</a>
                        </div>
                    </div> */}
                    {/* <!-- Tags End --> */}
                </div>
            </div>
        </div>
    </div>
    }

   
        {
          loadingNoticia ? null :
          <Footer/>
        }
    </Container>
  )
}

const mapStateToProps = (state) => ({
    noticia: state.noticiasReducer,
    programa: state.programasReducer
  });

  export default connect(mapStateToProps, {mostrarNoticias, mostrarProgramas})(
    Noticias_detalles
  );
