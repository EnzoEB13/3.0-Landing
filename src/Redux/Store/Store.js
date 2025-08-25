// crear la store de nuestro proyecto
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';


import Reducers from './../Reducers';

// estado inicial
const initialState = {};

const middleWare = [thunk];

// el primer parámetro son los Reducers
const store = createStore(
  Reducers,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
