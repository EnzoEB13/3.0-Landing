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
import JuanDeLaCruzRios from '../Pages/DetallesProductores/RiachoHehe/Detalles/JuanDeLaCruzRios';
import MauroHernanGomez from '../Pages/DetallesProductores/RiachoHehe/Detalles/MauroHernanGomez';
import RufinoMoreira from '../Pages/DetallesProductores/TresLaguna/Detalles/RufinoMoreira';
import SergioMareco from '../Pages/DetallesProductores/TresLaguna/Detalles/SergioMareco';
import Videos_Detalles from '../Pages/Videos_Detalles';

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
            <Route path={"/video/:tituloPrograma"} exact element={<Videos_Detalles/>}/>

            {/* Productores */}
            <Route path={"/productor-1"} exact element={<JuanDeLaCruzRios/>}/>
            <Route path={"/productor-2"} exact element={<MauroHernanGomez/>}/>

            <Route path={"/productor-3"} exact element={<RufinoMoreira/>}/>
            <Route path={"/productor-4"} exact element={<SergioMareco/>}/>
      </Routes>

  )
}