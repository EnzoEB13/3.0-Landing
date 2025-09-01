import { 
    ERROR_NOTICIA,
    LIMPIAR_NOTICIAS,
    MOSTRAR_NOTICIAS,
    MOSTRAR_NOTICIA_UNICA
   } from "../Types/types";

import { URL } from "../../Helpers/Peticiones";
import axios from "axios";

//GET Noticias
export const mostrarNoticias = () => async dispatch => {
    dispatch({type: LIMPIAR_NOTICIAS})

    /* const config = {headers : {"Content-type": "application/json"}} */
  try {
      let res = await axios.get(`${URL}/ver-noticias-publicas`)
      
      const body = await res.data
     
      
      dispatch({
          type: MOSTRAR_NOTICIAS,
          payload: body
      })
      
  } catch (err) { 
      
      dispatch({
          type: ERROR_NOTICIA,
          payload: { 
              msg: err
          }
      })
  }
}

