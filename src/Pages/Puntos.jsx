import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Container from "../Layouts/Container";
import Portada from "../Layouts/Portada";
import { mostrarPuntos } from "../Redux/Actions/Puntos.action";
import { Link } from "react-router-dom";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./Styles/Mapa.css";
import Spinner from "../Layouts/Spinner";

const Puntos = ({ mostrarPuntos, punto: { puntos, loadingPuntos } }) => {
  useEffect(() => {
    mostrarPuntos();
  }, []);

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    if (!map.current) {
      // Inicializar mapa solo una vez
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style:
          "https://api.maptiler.com/maps/basic-v2/style.json?key=na0w6h3Se8cyYmauGgcn",
        center: [-58.1781, -26.1775],
        zoom: 13,
      });

      // Controles de navegación
      map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    }

    if (puntos?.length > 0) {
      puntos.forEach((punto) => {
        if (punto.ubicacion?.lat && punto.ubicacion?.lon) {
          // Crear div custom para el icono
          const el = document.createElement("div");
          el.style.backgroundImage = `url(${punto.icono})`; // icono dinámico desde la DB
          el.style.backgroundSize = "cover";
          el.style.backgroundPosition = "center";
          el.style.width = "50px";
          el.style.height = "50px";
          el.style.borderRadius = "50%";
          el.style.cursor = "pointer";

          // Crear marker con el elemento custom
          new maplibregl.Marker({ element: el })
            .setLngLat([punto.ubicacion.lon, punto.ubicacion.lat])
            .setPopup(
              new maplibregl.Popup({ offset: 25 }).setHTML(`
                <div className="popupMapaDIV">
                  <h5 className="TituloMapah2">${punto.nombre}</h5>
                  <p className="barrioMapaP">${punto.barrio || ""}</p>
                  <p className="descripcionMapaP">
                    ${
                      punto.tipo === "PuntoFijo"
                        ? "Únicamente los Jueves y Sábados de 7:30hs a 12:30hs"
                        : "Horarios: 7:30hs a 12:30hs"
                    }
                  </p>
                  ${
                    punto.img && punto.img !== ""
                      ? `<img src="${punto.img}" alt="Imagen del lugar" className="portadaMapaIMG" />`
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
      <Portada
        titulo={"Puntos De Venta"}
        subtitulo={
          "Todas las ubicaciones de los centros fijos, barrios y localidades visitadas"
        }
      />
      {loadingPuntos ? (
        <div align="center" className="py-6">
          <Spinner />
        </div>
      ) : null}
      <div ref={mapContainer} style={{ width: "100%", height: "600px" }} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  punto: state.puntosReducer,
});

export default connect(mapStateToProps, { mostrarPuntos })(Puntos);
