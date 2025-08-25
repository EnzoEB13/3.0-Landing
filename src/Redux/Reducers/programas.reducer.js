import {
    MOSTRAR_PROGRAMAS,
    ERROR_PROGRAMAS,
    LIMPIAR_PROGRAMAS,

    MOSTRAR_PROGRAMA_VIVO,
    ERROR_PROGRAMA_VIVO,
    LIMPIAR_PROGRAMA_VIVO
  } from "../Types/types";

  const initialState = {
    programas: [],
    programaVIVO: [],
    loadingProgramas: true,
    error: {},
  }

  export default function (state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
        case MOSTRAR_PROGRAMAS:
            return {
              ...state,
              programas: payload,
              loadingProgramas: false,
              error: {},
            }
        case LIMPIAR_PROGRAMAS:
            return {
              ...state,
              programas: [],
              loadingProgramas: true,
              error: {},
            }
        case ERROR_PROGRAMAS:
            return {
              ...state,
              error: payload,
              loadingProgramas: false
            }

            case MOSTRAR_PROGRAMA_VIVO:
            return {
              ...state,
              programaVIVO: payload,
              loadingProgramas: false,
              error: {},
            }
        case LIMPIAR_PROGRAMA_VIVO:
            return {
              ...state,
              programaVIVO: [],
              loadingProgramas: true,
              error: {},
            }
        case ERROR_PROGRAMA_VIVO:
            return {
              ...state,
              error: payload,
              loadingProgramas: false
            }
            
        default:
            return state
    }
  
  }