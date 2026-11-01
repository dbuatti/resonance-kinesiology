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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
        <Sonner />
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