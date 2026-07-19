import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/about/page";
import ChantierPage from "./pages/chantier/page";
import DevisPage from "./pages/devis/page";
import ServicesPage from "./pages/services/page";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/nettoyage-apres-chantier" element={<ChantierPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/devis" element={<DevisPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
