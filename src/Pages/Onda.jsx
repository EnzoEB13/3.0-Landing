import React from 'react'
import Container from '../Layouts/Container'
import Portada from '../Layouts/Portada'
import fotoDetalle2Onda from "../assets/img/OndaDetalles2.png"
import fotoDetalleOnda from "../assets/img/OndaDetalles.png"
import fotoDetalle3Onda from "../assets/img/ProductosOnda.png"
const Onda = () => {
  return (
    <Container>
      <Portada
        titulo={"Onda"}
        subtitulo={
          "Convenio entre Soberania Alimentaria Formoseña y el Banco de Formosa"
        }
      />
      <section id="details" class="details section">
                {/* <!-- Section Title --> */}
                {/* <div class="container section-title" data-aos="fade-up">
                  <h2>S.A.F</h2>
                  <div>
                    <span>ONDA y </span>{" "}
                    <span class="description-title">S.A.F</span>
                  </div>
                </div> */}
                {/* <!-- End Section Title --> */}
      
                <div class="container">
                  <div class="row  align-items-center features-item">
                                <div
                                  class="col-md-5 order-1 order-md-2 d-flex align-items-center"
                                  data-aos="zoom-out"
                                  data-aos-delay="200"
                                >
                                  <img src={fotoDetalle2Onda} class="img-fluid" alt="" />
                                </div>
                                <div
                                  class="col-md-7 order-2 order-md-1"
                                  data-aos="fade-up"
                                  data-aos-delay="200"
                                >
                                  <h3>Convenio entre el <strong>Banco Formosa</strong>, a través de su <strong>aplicación ONDA</strong>, y el <strong>Programa de Soberanía Alimentaria</strong>.</h3>
                                  <p>
                                    Este acuerdo no solo significa la integración de herramientas tecnológicas al servicio de la comunidad,
                                     sino también un compromiso con el acceso justo, seguro y directo a los alimentos producidos en 
                                     nuestra provincia. <strong>La renovación de este convenio refleja la decisión de trabajar por un consumo 
                                     responsable, accesible y en beneficio de cada consumidor final.</strong>
                                  </p>
                                  <p>Con iniciativas como esta, reafirmamos el valor de construir políticas 
                                    públicas que mejoren la vida cotidiana de las familias formoseñas, 
                                    fortaleciendo la economía local y garantizando que todos podamos acceder 
                                    a productos de calidad a precios justos.</p>
                                    <p>
                                      La implementación de la <strong>billetera virtual ONDA</strong> es muy importante, 
                                      ya que busca por un lado, apuntalar y garantizar el consumo y por otro, 
                                      brindar más herramientas a los consumidores que habitualmente hacen sus 
                                      compras en el programa. Además, cabe destacar que esta medida posibilita a
                                       las pymes formoseñas, tener muchas más herramientas para generar ventas.
                                    </p>
                                  
                                  <p class="fst-italic py-4">
                                    <strong>
                                      📲 Pagando únicamente con QR a través de la aplicación ONDA, todos ganamos
                                    </strong>
                                  </p>
                                </div>
                  </div>

                  <div class="row  align-items-center features-item">
                                <div
                                  class="col-md-5 d-flex align-items-center"
                                  data-aos="zoom-out"
                                >
                                  <img src={fotoDetalleOnda} class="img-fluid" alt="" />
                                </div>
                                <div class="col-md-7" data-aos="fade-up">
                                  <h3>Beneficios:</h3>
                                  <p>
                                    Quienes realicen sus compras en los puntos de venta de Soberanía 
                                    Alimentaria Formoseña podrán acceder a beneficios exclusivos que 
                                    hacen rendir más el bolsillo:
                                  </p>
                                  <ul>
                                    <li>✅ 20% de reintegro en cada compra</li>
                                    <li>✅ Con un tope mensual de $50.000</li>
                                  </ul>
                                  <p class="fst-italic">
                                    <strong>
                                      De esta manera, cada compra con QR no solo es más práctica y segura, 
                                      sino también más conveniente para los consumidores.
                                    </strong>
                                  </p>

                                  <p>
                                    Pero los beneficios no son solo para quienes compran. Las pymes formoseñas que venden 
                                    a través de ONDA también acceden a un incentivo especial:
                                  </p>
                                  <ul>
                                    <li>✅ 10% de reintegro sobre sus ventas</li>
                                    <li>✅ Con un tope mensual de $100.000</li>
                                  </ul>
                                  <p class="fst-italic">
                                    <strong>
                                      Esto significa más oportunidades para crecer, vender más y consolidar la economía local.
                                    </strong>
                                  </p>

                                  <p >
                                    Con <strong>ONDA</strong>, cada operación con QR se transforma en un círculo virtuoso: los consumidores ahorran y las pymes fortalecen su desarrollo.
                                  </p>
                                </div>
                  </div>

                  <div class="row gy-4 align-items-center features-item">
                                <div
                                  class="col-md-5 order-1 order-md-2 d-flex align-items-center"
                                  data-aos="zoom-out"
                                >
                                  <img src={fotoDetalle3Onda} class="img-fluid" alt="" />
                                </div>
                                <div class="col-md-7 order-2 order-md-1" data-aos="fade-up">
                                  <h3>Pymes que ya trabajan con la aplicación <strong>ONDA:</strong></h3>
                                    <p>
                                      Cada vez más empresas locales se suman a la innovación tecnológica y al crecimiento de la economía provincial utilizando la billetera virtual ONDA.
                                    </p>
                                    <p><strong>Entre las pymes que ya forman parte del programa, se destacan:</strong></p>
                                    <p>✅<strong>Nutrifor:</strong> Ofrece productos congelados como mix vegetales y mix sopero, además de sopa paraguaya, mate cocido, chocolatada, leche fortificada, mermeladas y snacks.</p>
                                      <p>✅<strong>Refsa Gas:</strong> Garrafas de gas de 10kg.</p>
                                      <p>✅<strong>Mia Delizia:</strong> Scons de queso, alfajores de maicena, de algarroba y marplatense, roll de canela, roll de frutos rojos, cuadrado de limón y pastaflora.</p>
                                      <p>✅<strong>Friar Formosa:</strong> Cortes de carne como costeleta de novillo, chorizo parrillero, costilla de cerdo, costeleta de cerdo, vacío de cerdo y milanesas.</p>
                                      <p>✅<strong>Yerba Mate Herencia:</strong> Yerba mate de 1kg y de 500g.</p>
                                      <p>✅<strong>BioClean Plast:</strong> Diversos productos de limpieza.</p>
                                      <p>✅<strong>Distribuidora del Valle:</strong> Queso rallado de 40g y 150g, y leche en polvo.</p>
                                      <p>✅<strong>Molino El Sauzalito:</strong> Harina de maíz común y harina de maíz precocida Doña China.</p>
                                      <p>✅<strong>Pasta Posta:</strong> Ravioles, tallarines, salsas y otros productos caseros.</p>
                                      <p>✅<strong>Dulce Costa:</strong> Mamón (papaya) en almíbar, naranjas en almíbar “COSTA”, miel de abejas “COSTA” y mermelada de frutilla.</p>
                                    <p class="fst-italic">
                                      Estas pymes locales son un ejemplo del potencial productivo de Formosa. Gracias a <strong>ONDA</strong>, generando beneficios para todos: mayor comodidad y reintegros para quienes compran, y nuevas oportunidades de crecimiento para los emprendedores y productores locales.
                                    </p>
                                </div>
                  </div>
                </div>
      </section>

      

              
    </Container>
  )
}

export default Onda