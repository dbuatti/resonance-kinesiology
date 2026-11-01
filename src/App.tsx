import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Guide from "./pages/Guide";
import BookSession from "./pages/BookSession";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import { GA4PageViewTracker } from "./components/GA4PageViewTracker";
import { useEffect } from "react";

const queryClient = new QueryClient();

/** Prevent .vercel.app URL from showing in search; keep custom domain indexed. */
function SearchEngineControl() {
  useEffect(() => {
    const host = window.location.hostname;
    const canonicalBase = "https://kinesiology.danielebuatti.com";
    const path = window.location.pathname + window.location.search;

    // If served on the raw Vercel domain, tell search engines not to index this URL
    if (host.endsWith(".vercel.app") || host === "resonance-kinesiology.vercel.app") {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "robots");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", "noindex, follow");
    }

    // Canonical always points to custom domain for all SPA routes
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalBase + (path === "/" ? "" : path));
  }, []);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
        <Sonner />
        <SearchEngineControl />
        <BrowserRouter>
          <GA4PageViewTracker />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/book-session" element={<BookSession />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BackToTop />
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
