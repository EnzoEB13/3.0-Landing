import { 
    MOSTRAR_PROGRAMAS,
    ERROR_PROGRAMAS,
    LIMPIAR_PROGRAMAS,

    MOSTRAR_PROGRAMA_VIVO,
    ERROR_PROGRAMA_VIVO,
    LIMPIAR_PROGRAMA_VIVO
   } from "../Types/types";

import { URL } from "../../Helpers/Peticiones";
import axios from "axios";

//GET Programas
export const mostrarProgramas = () => async dispatch => {
    dispatch({type: LIMPIAR_PROGRAMAS})

    /* const config = {headers : {"Content-type": "application/json"}} */
  try {
      let res = await axios.get(`${URL}/ver-programas-publicados`) 
     /*  console.log(res) */
      const body = await res.data
      /* console.log(body) */
      
      dispatch({
          type: MOSTRAR_PROGRAMAS,
          payload: body.reverse()
      })
      
  } catch (err) { 
      console.log(err)
      dispatch({
          type: ERROR_PROGRAMAS,
          payload: { 
              msg: err
          }
      })
  }
}

//GET Programas En Vivo
export const mostrarVivo = () => async dispatch => {
    dispatch({type: LIMPIAR_PROGRAMA_VIVO})

    /* const config = {headers : {"Content-type": "application/json"}} */
  try {
      let res = await axios.get(`${URL}/ver-programa-vivo`)
     /*  console.log(res) */
      const body = await res.data
      /* console.log(body) */
      
      dispatch({
          type: MOSTRAR_PROGRAMA_VIVO,
          payload: body.reverse()
      })
      
  } catch (err) { 
      console.log(err)
      dispatch({
          type: ERROR_PROGRAMA_VIVO,
          payload: { 
              msg: err
          }
      })
  }
}