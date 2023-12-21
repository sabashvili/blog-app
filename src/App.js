import "./App.css";
import React, { createContext } from "react";
import CategoriesSection from "./components/CategoriesSection";
import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";
import BlogsSection from "./components/BlogsSection";
import LoginModal from "./components/Modals/LoginModal";
import ModalProvider from "./components/Providers/ModalProvider";
import AuthProvider from "./components/Providers/AuthProvider";
import SuccessModal from "./components/Modals/SuccessModal";

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <header>
          <Header />
          <SectionHeader />
        </header>
        <main>
          <CategoriesSection />
          <BlogsSection />
        </main>
      </ModalProvider>
    </AuthProvider>
  );
}

export const UserContext = createContext();
export default App;
