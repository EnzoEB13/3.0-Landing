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
    
      const body = await res.data
  
   
      
      dispatch({
          type: MOSTRAR_PUNTOS,
          payload: body
      })
      
  } catch (err) { 
      
      dispatch({
          type: ERROR_PUNTO,
          payload: { 
              msg: err
          }
      })
  }
}