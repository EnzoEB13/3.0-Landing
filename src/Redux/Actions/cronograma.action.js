import { 
    MOSTRAR_CRONOGRAMA,
    ERROR_CRONOGRAMA,
    LIMPIAR_CRONOGRAMA
   } from "../Types/types";


import { URL } from "../../Helpers/Peticiones";
import axios from "axios";

//GET Cronograma
export const mostrarCronograma = () => async dispatch => {
    

    /* const config = {headers : {"Content-type": "application/json"}} */
  try {
      let res = await axios.get(`${URL}/ver-cronograma`)
    
      const body = await res.data
  
   
      
      dispatch({
          type: MOSTRAR_CRONOGRAMA,
          payload: body
      })
      
  } catch (err) { 
     
      dispatch({
          type: ERROR_CRONOGRAMA,
          payload: { 
              msg: err
          }
      })
  }
}