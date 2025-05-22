import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ArtePage } from "./pages/ArtePage";
import { DeportePage } from "./pages/DeportePage";
import { PoliticaPage } from "./pages/PoliticaPage";
import { MundoPage } from "./pages/MundoPage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="arte" element={<ArtePage />} />
      <Route path="deporte" element={<DeportePage />} />
      <Route path="politica" element={<PoliticaPage />} />
      <Route path="mundo" element={<MundoPage />} />
    </Routes>
  )
}