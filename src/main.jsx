import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rutas from './Routes/Rutas.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux//store/Store.js';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
    <Rutas />
  </BrowserRouter>
  </Provider>
)
