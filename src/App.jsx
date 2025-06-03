import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ArtePage } from "./pages/ArtePage";
import { DeportePage } from "./pages/DeportePage";
import { PoliticaPage } from "./pages/PoliticaPage";
import { EntretenimientoPage } from "./pages/EntretenimientoPage";
import { ContactoPage } from "./pages/ContactoPage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="arte" element={<ArtePage />} />
      <Route path="deporte" element={<DeportePage />} />
      <Route path="politica" element={<PoliticaPage />} />
      <Route path="entretenimiento" element={<EntretenimientoPage />} />
      <Route path="contacto" element={<ContactoPage />} />
    </Routes>
  )
}
