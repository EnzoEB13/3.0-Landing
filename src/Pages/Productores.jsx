import React from 'react'
import Container from '../Layouts/Container'
import Portada from '../Layouts/Portada'
import CardProductores from '../Layouts/CardProductores'

/* Fotos Riacho */
import foto1 from "../assets/img/Productores/juandelacruzrios.jpg"
import foto2 from "../assets/img/Productores/maurohernangomez.jpg"

/* Fotos Tres Lagunas */
import foto3 from "../assets/img/Productores/rufinoMoreira2.jpg"
import foto4 from "../assets/img/Productores/sergiomareco.jpg"

const Productores = () => {
  const productoresTresLagunas = [
    {
      id: 1,
      nombre: "Rufino Moreira",
      descripcion: "En el marco del programa Soberanía Alimentaria Formoseña, destacamos el trabajo de Rufino Moreira, un productor de la localidad de Loma Zapatú, Tres Lagunas...",
      foto: foto3,
      ruta: "/productor-3"
    },
    {
      id: 2,
      nombre: "Sergio Mareco",
      descripcion: "En la localidad de Cachaza, Tres Lagunas, Sergio Rolando Mareco y su grupo familiar de 4 personas trabajan con esfuerzo y dedicación en el cultivo de alimentos frescos y saludables...",
      foto: foto4,
      ruta: "/productor-4"
    },
  ]

  const productoresRiacho = [
    {
      id: 1,
      nombre: "Juan de la Cruz Ríos",
      descripcion: "En el B° La Esperanza, Riacho He Hé, Juan de la Cruz Ríos y Julio Gómez llevan adelante un valioso trabajo de producción agroecológica en sus 2 hectáreas de cultivo...",
      foto: foto1,
      ruta: "/productor-1"
    },
    {
      id: 2,
      nombre: "Mauro Hernán Gómez",
      descripcion: "En la localidad de Colonia San Isidro, Riacho He Hé, Mauro Hernán Gómez trabaja junto a su grupo familiar de 2 integrantes en la producción de alimentos frescos y de calidad...",
      foto: foto2,
      ruta: "/productor-2"
    },
  ]
  return (
    <Container>
      <Portada
        titulo={"Productores"}
        subtitulo={"Todos los productores de Soberanía Alimentaria Formoseña"}
      />
      <section id="team" className="team section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>S.A.F</h2>
          <div>
            <span>Todos</span>{" "}
            <span className="description-title">Los Productores</span>
          </div>
        </div>
        <div class="container-xxl py-5">
            <div class="tab-content">
              <div id="tab-1" class="tab-pane p-0 active">
                  <div key={"Productores1"} 
                      data-aos="fade-up"
                      data-aos-delay="100">
                        <h4 className="textoGenerales">
                          <i>
                            Riacho He Hé
                          </i>
                        </h4>
                        <hr ></hr>
                        
                          <CardProductores productoresData={productoresRiacho}/>
                        
                        <br />
                        <br />
                      </div>
                </div>
                <div id="tab-2" class="tab-pane p-0 active">
                  <div key={"Productores2"} 
                      data-aos="fade-up"
                      data-aos-delay="100">
                        <h4 className="textoGenerales">
                          <i>
                            Tres Lagunas
                          </i>
                        </h4>
                        <hr ></hr>
                        
                          <CardProductores productoresData={productoresTresLagunas}/>
                        
                        <br />
                        <br />
                      </div>
                </div>

                
              </div>
          </div>
      </section>
    </Container>
  )
}

export default Productores