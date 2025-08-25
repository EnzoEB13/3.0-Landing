import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from '../Layouts/Container'
import Portada from '../Layouts/Portada'
import { mostrarPuntos } from "../Redux/Actions/Puntos.action";
import { Link } from "react-router-dom";
import Map, { Marker, Popup } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./Styles/Mapa.css"
import Spinner from "../Layouts/Spinner";
const Puntos = ({mostrarPuntos, punto: { puntos, loadingPuntos },}) => {

  useEffect(()=>{
        mostrarPuntos()
      },[])

     /*  console.log(puntos) */
    const mapContainer = useRef(null);
    const map = useRef(null);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
  /* if (map.current) return; // Evitar reinicializar */

  map.current = new maplibregl.Map({
    container: mapContainer?.current,
    style: "https://api.maptiler.com/maps/hybrid/style.json?key=na0w6h3Se8cyYmauGgcn", 
    center: [-58.1781, -26.1775], 
    zoom: 13,
  });

  // Agregar control de zoom y rotación
  map.current.addControl(new maplibregl.NavigationControl(), "top-right");

  if (puntos?.length > 0) {
    puntos.forEach((punto) => {
      if (punto.ubicacion?.lat && punto.ubicacion?.lon && punto.icono) {
        // Crear div marcador
        const el = document.createElement("div");
        el.style.width = "40px";
          el.style.height = "40px";

       // Imagen dentro del div
        const img = document.createElement("img");
        img.src = "https://img.freepik.com/vector-gratis/vector-degradado-logotipo-colorido-pajaro_343694-1365.jpg";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";

el.appendChild(img);

        // Crear marcador
        new maplibregl.Marker(el)
          .setLngLat([punto.ubicacion.lon, punto.ubicacion.lat])
          .setPopup(
            new maplibregl.Popup({ offset: 25 }).setHTML(`
              <div class="popupMapaDIV">
                <h5 class="TituloMapah2">${punto.nombre}</h5>
                <p class="barrioMapaP">${punto.barrio || ""}</p>
                <p class="descripcionMapaP">
                  ${
                    punto.tipo === "PuntoFijo"
                      ? "Únicamente los Jueves y Sábados de 7:30hs a 12:30hs"
                      : "Horarios: 7:30hs a 12:30hs"
                  }
                </p>
                ${
                  punto.img && punto.img !== ""
                    ? `<img src="${punto.img}" alt="Imagen del lugar" class="portadaMapaIMG" />`
                    : ""
                }
              </div>
            `)
          )
          .addTo(map.current);
      }
    });
  }
}, [puntos]);

  return (
    <Container>
      <Portada titulo={"Puntos De Venta"} subtitulo={"Todas las ubicaciones de los centros fijos, barrios y localidades visitadas"}/>
      {
        loadingPuntos ? <div align="center" className="py-6"><Spinner/></div> : null
      }
      <div ref={mapContainer} style={{ width: "100%", height: "600px" }}/>
    </Container>
  )
}

const mapStateToProps = (state) => ({
    punto: state.puntosReducer
  });

export default connect(mapStateToProps, {mostrarPuntos})(
    Puntos
  );