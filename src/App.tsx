
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";

// Pages pour les services
import Services from "./pages/Services";
import ServiceEcommerce from "./pages/services/Ecommerce";
import ServiceProduction from "./pages/services/Production";
import ServiceTechniciens from "./pages/services/Techniciens";

// Pages pour les mini-sites
import Blog from "./pages/minisites/Blog";
import Elearning from "./pages/minisites/Elearning";
import Actualites from "./pages/minisites/Actualites";

// Pages pour Konsultan et Technologie
import Konsultan from "./pages/Konsultan";
import Technologie from "./pages/Technologie";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Index />} />
            <Route path="/about" element={<About />} />
            
            {/* Routes pour les services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/ecommerce" element={<ServiceEcommerce />} />
            <Route path="/services/production" element={<ServiceProduction />} />
            <Route path="/services/techniciens" element={<ServiceTechniciens />} />
            
            {/* Routes pour les mini-sites */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/elearning" element={<Elearning />} />
            <Route path="/actualites" element={<Actualites />} />
            
            {/* Routes pour Konsultan et Technologie */}
            <Route path="/konsultan" element={<Konsultan />} />
            <Route path="/technologie" element={<Technologie />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
