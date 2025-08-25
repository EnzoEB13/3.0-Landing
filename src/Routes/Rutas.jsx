import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Noticias from '../Pages/Noticias';
import NTF from '../Pages/NTF';
import Onda from '../Pages/Onda';
import Productores from '../Pages/Productores';
import Productos from '../Pages/Productos';
import Puntos from '../Pages/Puntos';
import STN from '../Pages/STN';
import Noticias_detalles from '../Pages/Noticias_detalles';

export default function Rutas() {

  return (
      <Routes>
            <Route path={"/"} exact element={<Home/>}/>
            <Route path={"/noticias"} exact element={<Noticias/>}/>
            <Route path={"/noticia/:tituloNoticia"} exact element={<Noticias_detalles/>}/>
            <Route path={"/programas"} exact element={<NTF/>}/>
            <Route path={"/onda"} exact element={<Onda/>}/>
            <Route path={"/productores"} exact element={<Productores/>}/>
            <Route path={"/productos"} exact element={<Productos/>}/>
            <Route path={"/puntos"} exact element={<Puntos/>}/>
            <Route path={"/streamings"} exact element={<STN/>}/>
      </Routes>

  )
}