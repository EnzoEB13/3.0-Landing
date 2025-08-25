import { 
    MOSTRAR_PRODUCTOS,
    LIMPIAR_PRODUCTOS,
    ERROR_PRODUCTO,
    MOSTRAR_PRODUCTO_UNICO  
   } from "../Types/types";

import { URL } from "../../Helpers/Peticiones";
import axios from "axios";

//GET Productos
export const mostrarProductos = () => async dispatch => {
    dispatch({type: LIMPIAR_PRODUCTOS})

    /* const config = {headers : {"Content-type": "application/json"}} */
  try {
      let res = await axios.get(`${URL}/ver-productos-publicos`)
     /*  console.log(res) */
      const body = await res.data
      /* console.log(body) */
   
      
      dispatch({
          type: MOSTRAR_PRODUCTOS,
          payload: body
      })
      
  } catch (err) { 
      console.log(err)
      dispatch({
          type: ERROR_PRODUCTO,
          payload: { 
              msg: err
          }
      })
  }
}