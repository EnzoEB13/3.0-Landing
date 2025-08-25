import PropTypes from "prop-types";
import react, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Container from "../Layouts/Container";
import Portada from "../Layouts/Portada";
import { mostrarProductos } from "../Redux/Actions/productos.action";
import Spinner from "../Layouts/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";
import { formatearNumero } from "../Helpers/convesorNumeros";
import Footer from "../Layouts/Footer";

const Productos = ({
  mostrarProductos,
  producto: { productos, loadingProductos },
}) => {

  useEffect(() => {
    mostrarProductos();
  }, []);

const [listaCategorias, setListaCategorias] = useState([]);

useEffect(() => {
  if (productos?.length > 0) {
    // crear un set para eliminar duplicados
    const categoriasUnicas = [...new Set(productos.map(item => item?.categoria))];
    setListaCategorias(categoriasUnicas);
  }
}, [productos]); // <- depende de 'productos'


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
  }, [productos, loadingProductos]);
 /*  console.log(listaCategorias) */

  return (
    <Container>
      <Portada
        titulo={"Productos"}
        subtitulo={"Todos los productos de Soberanía Alimentaria Formoseña"}
      />
      <section id="team" className="team section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>S.A.F</h2>
          <div>
            <span>Todos</span>{" "}
            <span className="description-title">Los Productos</span>
          </div>
        </div>
        {loadingProductos ? (
          <div align="center">
            <Spinner />
          </div>
        ) : (
          <div class="container-xxl py-5">
            {productos?.length > 0 ? (
              <div class="tab-content">
                <div id="tab-1" class="tab-pane p-0 active">
                  {listaCategorias?.map((categoria) => {
                    return (
                      <div key={categoria} 
                      data-aos="fade-up"
                      data-aos-delay="100">
                        <h4 className="textoGenerales">
                          <i>
                            {categoria == "ProductosCongelados"
                              ? "Congelados"
                              : categoria}
                          </i>
                        </h4>
                        <hr ></hr>
                        <div class="row g-4">
                          {productos?.map((item) => {
                            /* console.log(item) */
                            if (categoria == item?.categoria) {
                              return (
                                <div
                                  key={item?._id}
                                  className="col-lg-4 col-md-6"
                                  data-aos="fade-up"
                                  data-aos-delay="100"
                                >
                                  <div className="member-productos">
                                    <div className="pic-productos ">
                                      <img
                                        src={item?.img}
                                        className="img-fluid"
                                        alt={item?.nombre || "Producto"}
                                      />
                                    </div>
                                    <div className="member-info-productos">
                                      <h4>{item?.nombre}</h4>
                                      <span>Precio $ {formatearNumero(item?.precio)}</span>
                                      <div className="social">
                                        <i>{item?.distribuidor?.nombre}</i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                        <br />
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div align="center">
                <Spinner />
              </div>
            )}
          </div>
        )}
      </section>
      {
          loadingProductos ? null :
          <Footer/>
        }
    </Container>
  );
};

const mapStateToProps = (state) => ({
  producto: state.productosReducer,
});

export default connect(mapStateToProps, { mostrarProductos })(Productos);
