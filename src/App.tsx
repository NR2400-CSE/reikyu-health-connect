import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatbotPage from "./pages/ChatbotPage";
import FeaturesPage from "./pages/FeaturesPage";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

// Component to redirect to Google
const RedirectToGoogle = () => {
  useEffect(() => {
    // Open Google in a new tab
    const newTab = window.open("https://www.google.com", "_blank");

    // Optional: focus the new tab if allowed by the browser
    if (newTab) newTab.focus();

    // Optional: redirect the current tab to a local page or leave blank
    window.location.href = "/about"; // fallback page in current tab
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold">Redirecting to Google...</h1>
    </div>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Homepage now opens Google in new tab */}
          <Route path="/" element={<RedirectToGoogle />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
