
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../../context/ThemeContext";
import { useAuthStore } from "../../store/authStore";
import { Toaster } from "@/components/ui/toaster";
import OfflineAlert from "@/components/custom/utils/OfflineAlert";
import ScrollProgressBar from "@/components/custom/utils/ScrollProgress";

const MainLayout = () => {
  const { checkAuth } = useAuthStore();
  
  // Check authentication status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollProgressBar />
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
        <OfflineAlert />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
