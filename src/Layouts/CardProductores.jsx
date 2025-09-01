import React from "react";
import { Link } from "react-router-dom";

const CardProductores = ({ productoresData }) => {
  console.log(productoresData?.length);
  return (
    <div>
      {productoresData?.length > 0 ? (
        <div class="row g-4">
          {productoresData?.map((item) => {
            console.log(item);
            return (
              <div
                key="nuevoProductor"
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member-productos">
                  <div className="pic-productos ">
                    <img
                      src={item?.foto}
                      className="img-fluid"
                      alt="foto productor"
                    />
                  </div>
                  <div className="member-info-productos">
                    <h4>{item?.nombre}</h4>
                    <div align="center">
                      <Link to={item?.ruta} className="btn btn-info text-white btn-sm">
                        Ver Productor <i class="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default CardProductores;
