import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ArtePage } from "./pages/ArtePage";
import { DeportePage } from "./pages/DeportePage";
import { PoliticaPage } from "./pages/PoliticaPage";
import { EntretenimientoPage } from "./pages/EntretenimientoPage";
import { ContactoPage } from "./pages/ContactoPage";
import { Noti1ArtePage } from "./pages/arte/Noti1ArtePage";
import { Noti2ArtePage } from "./pages/arte/Noti2ArtePage";
import { Noti3ArtePage } from "./pages/arte/Noti3ArtePage";
import { Noti4ArtePage } from "./pages/arte/Noti4ArtePage";
import { Noti6ArtePage } from "./pages/arte/Noti6ArtePage";
import { Noti5ArtePage } from "./pages/arte/Noti5ArtePage";
import { Noti1DeportePage } from "./pages/deporte/Noti1DeportePage";
import { Noti2DeportePage } from "./pages/deporte/Noti2DeportePage";
import { Noti3DeportePage } from "./pages/deporte/Noti3DeportePage";
import { Noti4DeportePage } from "./pages/deporte/Noti4DeportePage";
import { Noti5DeportePage } from "./pages/deporte/Noti5DeportePage";
import { Noti6DeportePage } from "./pages/deporte/Noti6DeportePage";
import { Noti1EntretenimientoPage } from "./pages/entretenimiento/Noti1EntretenimientoPage";
import { Noti2EntretenimientoPage } from "./pages/entretenimiento/Noti2EntretenimientoPage";
import { Noti3EntretenimientoPage } from "./pages/entretenimiento/Noti3EntretenimientoPage";
import { Noti4EntretenimientoPage } from "./pages/entretenimiento/Noti4EntretenimientoPage";
import { Noti5EntretenimientoPage } from "./pages/entretenimiento/Noti5EntretenimientoPage";
import { Noti6EntretenimientoPage } from "./pages/entretenimiento/Noti6EntretenimientoPage";
import { Noti1PoliticaPage } from "./pages/politica/Noti1PoliticaPage";
import { Noti2PoliticaPage } from "./pages/politica/Noti2PoliticaPage";
import { Noti3PoliticaPage } from "./pages/politica/Noti3PoliticaPage";
import { Noti4PoliticaPage } from "./pages/politica/Noti4PoliticaPage";
import { Noti5PoliticaPage } from "./pages/politica/Noti5PoliticaPage";
import { Noti6PoliticaPage } from "./pages/politica/Noti6PoliticaPage";
import { Noti7PoliticaPage } from "./pages/politica/Noti7PoliticaPage";
import { Noti7EntretenimientoPage } from "./pages/entretenimiento/Noti7EntretenimientoPage";
import { PreguntaPage } from "./pages/PreguntaPage";
import { HomePageDV } from "./pages/HomePageDV";
import { ArtePageDV } from "./pages/ArtePageDV";
import { DeportePageDV } from "./pages/DeportePageDV";
import { PoliticaPageDV } from "./pages/PoliticaPageDV";
import { EntretenimientoPageDV } from "./pages/EntretenimientoPageDV";
import { Noti1ArtePageDV } from "./pages/artedv/Noti1ArtePageDV";
import { Noti2ArtePageDV } from "./pages/artedv/Noti2ArtePageDV";
import { Noti3ArtePageDV } from "./pages/artedv/Noti3ArtePageDV";
import { Noti4ArtePageDV } from "./pages/artedv/Noti4ArtePageDV";
import { Noti5ArtePageDV } from "./pages/artedv/Noti5ArtePageDV";
import { Noti6ArtePageDV } from "./pages/artedv/Noti6ArtePageDV";
import { Noti1DeportePageDV } from "./pages/deportedv/Noti1DeportePageDV";
import { Noti2DeportePageDV } from "./pages/deportedv/Noti2DeportePageDV";
import { Noti3DeportePageDV } from "./pages/deportedv/Noti3DeportePageDV";
import { Noti4DeportePageDV } from "./pages/deportedv/Noti4DeportePageDV";
import { Noti5DeportePageDV } from "./pages/deportedv/Noti5DeportePageDV";
import { Noti6DeportePageDV } from "./pages/deportedv/Noti6DeportePageDV";
import { Noti1EntretenimientoPageDV } from "./pages/entretenimientodv/Noti1EntretenimientoPageDV";
import { Noti2EntretenimientoPageDV } from "./pages/entretenimientodv/Noti2EntretenimientoPageDV";
import { Noti3EntretenimientoPageDV } from "./pages/entretenimientodv/Noti3EntretenimientoPageDV";
import { Noti4EntretenimientoPageDV } from "./pages/entretenimientodv/Noti4EntretenimientoPageDV";
import { Noti5EntretenimientoPageDV } from "./pages/entretenimientodv/Noti5EntretenimientoPageDV";
import { Noti6EntretenimientoPageDV } from "./pages/entretenimientodv/Noti6EntretenimientoPageDV";
import { Noti1PoliticaPageDV } from "./pages/politicadv/Noti1PoliticaPageDV";
import { Noti2PoliticaPageDV } from "./pages/politicadv/Noti2PoliticaPageDV";
import { Noti3PoliticaPageDV } from "./pages/politicadv/Noti3PoliticaPageDV";
import { Noti4PoliticaPageDV } from "./pages/politicadv/Noti4PoliticaPageDV";
import { Noti5PoliticaPageDV } from "./pages/politicadv/Noti5PoliticaPageDV";
import { Noti6PoliticaPageDV } from "./pages/politicadv/Noti6PoliticaPageDV";
import { ContactoPageDV } from "./pages/ContactoPageDV";


export default function App() {
  return (
    <Routes>

      {/* Rutas principales */}

      <Route path="home" element={<HomePage />} />
      <Route path="homedv" element={<HomePageDV />} />
      <Route path="artedv" element={<ArtePageDV />} />
      <Route path="arte" element={<ArtePage />} />
      <Route path="deporte" element={<DeportePage />} />
      <Route path="deportedv" element={<DeportePageDV />} />
      <Route path="politica" element={<PoliticaPage />} />
      <Route path="politicadv" element={<PoliticaPageDV />} />
      <Route path="entretenimientodv" element={<EntretenimientoPageDV />} />
      <Route path="entretenimiento" element={<EntretenimientoPage />} />
      <Route path="contacto" element={<ContactoPage />} />
      <Route path="/" element={<PreguntaPage />} />
      <Route path="/contactodv" element={<ContactoPageDV />} />

      {/* Rutas de noticias de arte */}

      <Route path="/arte/noticia1arte" element={<Noti1ArtePage />} />
      <Route path="/arte/noticia2arte" element={<Noti2ArtePage />} />
      <Route path="/arte/noticia3arte" element={<Noti3ArtePage />} />
      <Route path="/arte/noticia4arte" element={<Noti4ArtePage />} />
      <Route path="/arte/noticia5arte" element={<Noti5ArtePage />} />
      <Route path="/arte/noticia6arte" element={<Noti6ArtePage />} />

      {/* Rutas de noticias de deporte */}

      <Route path="/deporte/noticia1deporte" element={<Noti1DeportePage />} />
      <Route path="/deporte/noticia2deporte" element={<Noti2DeportePage />} />
      <Route path="/deporte/noticia3deporte" element={<Noti3DeportePage />} />
      <Route path="/deporte/noticia4deporte" element={<Noti4DeportePage />} />
      <Route path="/deporte/noticia5deporte" element={<Noti5DeportePage />} />
      <Route path="/deporte/noticia6deporte" element={<Noti6DeportePage />} />

      {/* Rutas de noticias de entretenimiento */}

      <Route path="/entretenimiento/noticia1entretenimiento" element={<Noti1EntretenimientoPage />} />
      <Route path="/entretenimiento/noticia2entretenimiento" element={<Noti2EntretenimientoPage />} />
      <Route path="/entretenimiento/noticia3entretenimiento" element={<Noti3EntretenimientoPage />} />
      <Route path="/entretenimiento/noticia4entretenimiento" element={<Noti4EntretenimientoPage />} />
      <Route path="/entretenimiento/noticia5entretenimiento" element={<Noti5EntretenimientoPage />} />
      <Route path="/entretenimiento/noticia6entretenimiento" element={<Noti6EntretenimientoPage />} />
      <Route path="/entretenimiento/noticia7entretenimiento" element={<Noti7EntretenimientoPage />} />

      {/* Rutas de noticias de política */}
      <Route path="/politica/noticia1politica" element={<Noti1PoliticaPage />} />
      <Route path="/politica/noticia2politica" element={<Noti2PoliticaPage />} />
      <Route path="/politica/noticia3politica" element={<Noti3PoliticaPage />} />
      <Route path="/politica/noticia4politica" element={<Noti4PoliticaPage />} />
      <Route path="/politica/noticia5politica" element={<Noti5PoliticaPage />} />
      <Route path="/politica/noticia6politica" element={<Noti6PoliticaPage />} />
      <Route path="/politica/noticia7politica" element={<Noti7PoliticaPage />} />

      {/* Rutas de noticias de Arte con discapacidad visual */}

      <Route path="/artedv/noticia1artedv" element={<Noti1ArtePageDV />} />
      <Route path="/artedv/noticia2artedv" element={<Noti2ArtePageDV />} />
      <Route path="/artedv/noticia3artedv" element={<Noti3ArtePageDV />} />
      <Route path="/artedv/noticia4artedv" element={<Noti4ArtePageDV />} />
      <Route path="/artedv/noticia5artedv" element={<Noti5ArtePageDV />} />
      <Route path="/artedv/noticia6artedv" element={<Noti6ArtePageDV />} />


      {/* Rutas de noticias de Deporte con discapacidad visual */}
      <Route path="/deportedv/noticia1deportedv" element={<Noti1DeportePageDV />} />
      <Route path="/deportedv/noticia2deportedv" element={<Noti2DeportePageDV />} />
      <Route path="/deportedv/noticia3deportedv" element={<Noti3DeportePageDV />} />
      <Route path="/deportedv/noticia4deportedv" element={<Noti4DeportePageDV />} />
      <Route path="/deportedv/noticia5deportedv" element={<Noti5DeportePageDV />} />
      <Route path="/deportedv/noticia6deportedv" element={<Noti6DeportePageDV />} />

      {/* Rutas de noticias de Entretenimiento con discapacidad visual */}

      <Route path="/entretenimientodv/noticia1entretenimientodv" element={<Noti1EntretenimientoPageDV />} />
      <Route path="/entretenimientodv/noticia2entretenimientodv" element={<Noti2EntretenimientoPageDV />} />
      <Route path="/entretenimientodv/noticia3entretenimientodv" element={<Noti3EntretenimientoPageDV />} />
      <Route path="/entretenimientodv/noticia4entretenimientodv" element={<Noti4EntretenimientoPageDV />} />
      <Route path="/entretenimientodv/noticia5entretenimientodv" element={<Noti5EntretenimientoPageDV />} />
      <Route path="/entretenimientodv/noticia6entretenimientodv" element={<Noti6EntretenimientoPageDV />} />

      {/* Rutas de noticias de Politica con discapacidad visual */}

      <Route path="/politicadv/noticia1politicadv" element={<Noti1PoliticaPageDV />} />
      <Route path="/politicadv/noticia2politicadv" element={<Noti2PoliticaPageDV />} />
      <Route path="/politicadv/noticia3politicadv" element={<Noti3PoliticaPageDV />} />
      <Route path="/politicadv/noticia4politicadv" element={<Noti4PoliticaPageDV />} />
      <Route path="/politicadv/noticia5politicadv" element={<Noti5PoliticaPageDV />} />
      <Route path="/politicadv/noticia6politicadv" element={<Noti6PoliticaPageDV />} />

    </Routes>
  )
}
