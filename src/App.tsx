import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PageLoader from "./components/PageLoader";

const Sobre = React.lazy(() => import("./pages/Sobre"));
const Programas = React.lazy(() => import("./pages/Programas"));
import ScrollToTop from "./components/ScrollToTop";

const SelfManagement = React.lazy(() => import("./pages/SelfManagement"));
const Advisor = React.lazy(() => import("./pages/Advisor"));
const Leadership = React.lazy(() => import("./pages/Leadership"));
const Management = React.lazy(() => import("./pages/Management"));
const MentoriaIndividual = React.lazy(() => import("./pages/MentoriaIndividual"));
const Depoimentos = React.lazy(() => import("./pages/Depoimentos"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PageLoader />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Suspense fallback={null}><Sobre /></Suspense>} />
          <Route path="/programas" element={<Suspense fallback={null}><Programas /></Suspense>} />
          <Route path="/depoimentos" element={<Suspense fallback={null}><Depoimentos /></Suspense>} />
          <Route path="/programas/self-management" element={<Suspense fallback={null}><SelfManagement /></Suspense>} />
          <Route path="/programas/advisor" element={<Suspense fallback={null}><Advisor /></Suspense>} />
          <Route path="/programas/leadership" element={<Suspense fallback={null}><Leadership /></Suspense>} />
          <Route path="/programas/management" element={<Suspense fallback={null}><Management /></Suspense>} />
          <Route path="/programas/mentoria-individual" element={<Suspense fallback={null}><MentoriaIndividual /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
