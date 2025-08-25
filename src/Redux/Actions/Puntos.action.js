import { 
    MOSTRAR_PUNTOS,
    MOSTRAR_PUNTO_UNICO,
    ERROR_PUNTO,
    LIMPIAR_PUNTOS, 
   } from "../Types/types";


import { URL } from "../../Helpers/Peticiones";
import axios from "axios";

//GET Puntos
export const mostrarPuntos = () => async dispatch => {
    

    /* const config = {headers : {"Content-type": "application/json"}} */
  try {
      let res = await axios.get(`${URL}/ver-puntos-publicos`);
    /*  console.log(res) */
      const body = await res.data
  /*    console.log(body) */
   
      
      dispatch({
          type: MOSTRAR_PUNTOS,
          payload: body
      })
      
  } catch (err) { 
      /* console.log(err) */
      dispatch({
          type: ERROR_PUNTO,
          payload: { 
              msg: err
          }
      })
  }
}